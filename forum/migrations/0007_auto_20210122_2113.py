# Generated by Django 3.1.3 on 2021-01-22 20:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('forum', '0006_auto_20210122_2110'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='forum',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comment_forum', to='forum.forum'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comment', to=settings.AUTH_USER_MODEL),
        ),
        migrations.RemoveField(
            model_name='forum',
            name='user',
        ),
        migrations.AddField(
            model_name='forum',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='forum', to='users.user'),
            preserve_default=False,
        ),
    ]
