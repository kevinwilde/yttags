# Generated by Django 2.0.7 on 2018-09-03 20:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='video',
            name='url',
        ),
        migrations.AddField(
            model_name='video',
            name='youtube_id',
            field=models.CharField(default='', max_length=64),
            preserve_default=False,
        ),
    ]
