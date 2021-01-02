from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication,SessionAuthentication, BasicAuthentication
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)

from .models import Comment, Forum
from .serializers import CommentSerializer, ForumSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    authentication_classes = [ SessionAuthentication,]
    permission_classes = (permissions.AllowAny, )
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['forum']
   

    # def create(self, request):
    #     serializer = ChildSerializer(data=request.data)
    #     if serializer.is_valid():
    #         assignment = serializer.create(request)
    #         if assignment:
    #             return Response(status=HTTP_201_CREATED)
    #     return Response({"message": "error creating assignment"},status=HTTP_400_BAD_REQUEST)


class ForumViewSet(viewsets.ModelViewSet):
    authentication_classes = [ SessionAuthentication,]
    permission_classes = (permissions.AllowAny, )
    serializer_class = ForumSerializer
    queryset = Forum.objects.all()
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['id']

    # def get_queryset(self):
    #     queryset = Result.objects.all()
    #     username = self.request.query_params.get('username', None)
    #     if username is not None:
    #         queryset = queryset.filter(child__username=username)
    #     return queryset


