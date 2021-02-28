from rest_framework import serializers
# from django.contrib.auth import get_user_model
from users.models import User
from .models import Child, Client, Result,Appointment

# User = get_user_model()

class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class ClientSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Client
        fields = ('__all__')


class ChildSerializer(serializers.ModelSerializer):
    # questions = serializers.SerializerMethodField()
    # parent = StringSerializer(many=False)

    class Meta:
        model = Child
        fields = ('__all__')


class ResultSerializer(serializers.ModelSerializer):
    # child = StringSerializer(many=False)
    
    class Meta:
        model = Result
        fields = ('__all__')

class AppointmentSerializer(serializers.ModelSerializer):
    # child = StringSerializer(many=False)
    
    class Meta:
        model = Appointment
        fields = ('__all__')
        depth = 1
 