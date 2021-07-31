from client.models import Appointment
from .views import send_mail_task
from django.template.loader import render_to_string
from pyzoom import ZoomClient
from django.conf import settings
import pdb

def send_reminder_email(appt_id):
    try:
        app = Appointment.objects.get(id=appt_id)
        consultant_email = app.consultant_email
        consultant_name = app.consultant_name
        start_date = app.user_prefered_time 
        message = render_to_string('reminder-email.html', { 'start_date': start_date, 'name': consultant_name, 'mail_to': 'consultant', 'meeting_link': app.zoom_start_url, 'ctimezone': 'Africa/Lagos'}) 
        resp = send_mail_task(message, [consultant_email, 'admin@senproinitiative.org'], 'Senpro Appointment Reminder')
        
        message = render_to_string('reminder-email.html', { 'start_date': start_date, 'name': app.user.username,  'join_link': app.zoom_join_url, 'ctimezone': 'Africa/Lagos'}) 
        resp = send_mail_task(message, [app.user.email, 'admin@senproinitiative.org'], 'SenPro Appointment Reminder')
    
    except Appointment.DoesNotExist: 
        pass
    

