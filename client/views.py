from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)

from .models import Child, Appointment, Result, Files
from .serializers import ChildSerializer, AppointmentSerializer, ResultSerializer
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework.views import APIView
from rest_framework import generics
from django.template.loader import render_to_string
import pdb
import requests
from django.utils.html import strip_tags
from django.conf import settings
from pyzoom import ZoomClient


class ChildViewSet(viewsets.ModelViewSet):
    serializer_class = ChildSerializer
    authentication_classes = [ SessionAuthentication,]
    permission_classes = (permissions.AllowAny, )
    filter_backends = [DjangoFilterBackend,filters.OrderingFilter]
    filterset_fields = ['parent']
   
    ordering_fields = ['timestamp']
    queryset = Child.objects.all()


class AppointmentViewSet(viewsets.ModelViewSet):
    serializer_class = AppointmentSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = (permissions.AllowAny,)
    filter_backends = [DjangoFilterBackend,filters.OrderingFilter]
    filterset_fields = ['status', 'consultant']
    ordering_fields = ['timestamp']
    queryset = Appointment.objects.all()  


class ResultViewSet(viewsets.ModelViewSet):
    authentication_classes = [ SessionAuthentication,]
    permission_classes = (permissions.AllowAny,  )
    serializer_class = ResultSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['child']
    queryset = Result.objects.all()


class UploadFiles(APIView):
    authentication_classes = [ SessionAuthentication,]
    permission_classes = (permissions.AllowAny, )


    def post(self, request):
        keys = request.FILES.keys()
        child_id = request.POST.get('childId')
        for key in keys:
            files = request.FILES.getlist(key)
            for file in  files:
                fileInstance =  Files.objects.create(child_id=child_id, file=file)
        
        return Response({})


class SendRegistrationEmail(APIView):
    authentication_classes = [ SessionAuthentication,]
    permission_classes = (permissions.AllowAny, )

    def get(self, request):
        to_email = request.GET.get('email')
        username = request.GET.get('username')
        message = render_to_string('registration.html', {'username': username})
        resp = send_mail_task(message, [to_email], 'Successful Registration')
        return Response({'message': resp.text})


class SendPaymentEmail(APIView):

    authentication_classes = [ SessionAuthentication,]
    permission_classes = (permissions.AllowAny, )

    def get(self, request):
        to_email = request.GET.get('email')
        child = request.GET.get('child')
        try:
            survey = Child.objects.get(id=child)
            if not survey.paid:#dont send email if not paid
                return Response(status=HTTP_400_BAD_REQUEST)
        except Child.DoesNotExist:
            return Response(status=HTTP_400_BAD_REQUEST)
        results = Result.objects.filter(child_id=child)
        message = render_to_string('result.html', {'request': request, 'results': results}) 
        resp = send_mail_task(message, [to_email], 'Your Result Is Now Available')
        return Response({'message': resp.text})


class SendAppointmentEmail(APIView):

    authentication_classes = [ SessionAuthentication,]
    permission_classes = (permissions.AllowAny, )

    def get(self, request):
        appointment_id = request.GET.get('id')
        try:
            appointment = Appointment.objects.get(pk=appointment_id)
        except Appointment.DoesNotExist:
            return Response(status=HTTP_400_BAD_REQUEST)
        client = ZoomClient(settings.ZOOM_API_KEY, settings.ZOOM_SECRET)
        meeting = client.meetings.create_meeting('SENPRO Meeting', start_time=appointment.user_prefered_time.isoformat(), duration_min=60, password='senpro1233')
        appointment.zoom_join_url = meeting.join_url
        appointment.zoom_start_url = meeting.start_url
        appointment.save()
        message = render_to_string('appointment-email.html', {'request': request, 'start_date': appointment.user_prefered_time, 'consultant_name': appointment.consultant_name}) 
        resp = send_mail_task(message, [appointment.user.email], 'Senpro Appointment Details')
        sendConsultantEmail(appointment.user.username, appointment.user_prefered_time, meeting.join_url, appointment.consultant_name, appointment.consultant_email, request)
        return Response({'message': resp.text})


def sendConsultantEmail(client, start_date, meeting_link, consultant_name, consultant_email, request):
    message = render_to_string('consultant-email.html', {'request': request, 'start_date': start_date, 'consultant_name': consultant_name, 'client': client, 'meeting_link': meeting_link}) 
    resp = send_mail_task(message, [consultant_email, 'admin@senproinitiative.org'], 'Consultant Email Setup')
    return Response({'message': resp.text})




class SendPaymentAppointmentEmail(APIView):
    authentication_classes = [ SessionAuthentication,]
    permission_classes = (permissions.AllowAny, )

    def get(self, request):
        appointment_id = request.GET.get('id')
        try:
            appointment = Appointment.objects.get(pk=appointment_id)
            
        except Appointment.DoesNotExist:
            return Response(status=HTTP_400_BAD_REQUEST)

        message = render_to_string('appointment-payt.html', {'request': request, 'app_id': appointment_id}) 
        resp = send_mail_task(message, [appointment.user.email], 'Payment Successful')
        return Response({'message': resp.text})




    


def send_mail_task(message,  to_email, subject, from_email='support@senproinitiative.org'):
    resp =  requests.post(
		'https://api.elasticemail.com/v2/email/send',
		data={"from": "%s"%from_email,
			"to": to_email,
			"subject": subject,
			"bodyText":strip_tags(message),
            'bodyHtml': message,
            'apiKey' : settings.ELASTICEMAIL_API_KEY,
            'fromName' : 'SENPro'

        }
            )
    return resp


class CreateResults(APIView):
    authentication_classes = [ SessionAuthentication,]
    permission_classes = (permissions.AllowAny,  )

    def post(self, request):
        results = request.data
        for result in results:
            Result.objects.create(title=result['title'], child_id=result['child'], explain=result['explain'], tip=result['tip'])
        return Response()






