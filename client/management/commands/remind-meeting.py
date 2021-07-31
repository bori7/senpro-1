from django.core.management.base import BaseCommand
from django.utils import timezone
from client.models import Appointment
from django.utils import timezone
from client.support import send_reminder_email
from client.views import send_pyt_email
import pdb
import pytz
from datetime import datetime, timedelta  

class Command(BaseCommand):
    help = 'Send Reminder for appointment'

    def handle(self, *args, **kwargs):
        now = timezone.now()  + timedelta(hours=1)
        txs = Appointment.objects.filter(user_prefered_time__gt = now)

        for tx in txs:
           diff = tx.user_prefered_time - now
           
           days, seconds = diff.days, diff.seconds
           hours = days * 24 + seconds // 3600
           
           if hours < 2 and not tx.reminder_sent and hours >= 0:
               
               send_reminder_email(tx.id)
               tx.reminder_sent = True
               tx.save()
        