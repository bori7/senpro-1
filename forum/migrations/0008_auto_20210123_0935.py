# Generated by Django 3.1.3 on 2021-01-23 08:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0007_auto_20210122_2113'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='sender',
            field=models.CharField(default='admin', max_length=15),
        ),
        migrations.AddField(
            model_name='forum',
            name='sender',
            field=models.CharField(default='admin', max_length=15),
        ),
    ]
