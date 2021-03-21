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
import pdb


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
    authentication_classes = [TokenAuthentication,  SessionAuthentication]
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









