from rest_framework import serializers
# from django.contrib.auth import get_user_model

from .models import Forum, Comment

# User = get_user_model()

class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class ForumSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(many=False)
 
    class Meta:
        model = Forum
        fields = ('__all__')


class CommentSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(many=False)
    # questions = serializers.SerializerMethodField()
    # parent = StringSerializer(many=False)

    class Meta:
        model = Comment
        fields = ('__all__')



 