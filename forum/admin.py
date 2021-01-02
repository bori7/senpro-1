from django.contrib import admin

# Register your models here.
from .models import Forum, Comment

admin.site.register(Forum)
admin.site.register(Comment)
