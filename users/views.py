from rest_framework import viewsets
from django.shortcuts import render
# from django.conf import settings 
from .models import User
from .serializers import UserSerializer
# from django.db.models.signals import post_save
# from django.dispatch import receiver
# from django.core.mail import send_mail



  

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    
        
    