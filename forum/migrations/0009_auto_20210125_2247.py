# Generated by Django 3.1.3 on 2021-01-25 21:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0008_auto_20210123_0935'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='desc',
            field=models.TextField(default=' '),
        ),
        migrations.AlterField(
            model_name='forum',
            name='desc',
            field=models.TextField(default=' '),
        ),
    ]