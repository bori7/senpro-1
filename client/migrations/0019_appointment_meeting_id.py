# Generated by Django 3.1.3 on 2021-07-05 13:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0018_appointment_consultant_timezone'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='meeting_id',
            field=models.CharField(max_length=200, null=True),
        ),
    ]