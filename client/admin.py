from django.contrib import admin

from .models import Client, Child, Result, Files, Appointment

admin.site.register(Client)
admin.site.register(Child)
admin.site.register(Result)
admin.site.register(Files)
admin.site.register(Appointment)

