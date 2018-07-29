from django.db import models
from django.contrib.auth.models import User

class Tag(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=64)
    parent = models.ForeignKey('self', on_delete=models.CASCADE)
    deleted = models.BooleanField(default=False)
    class Meta:
        db_table = 'yttag_tags'


class Video(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    url = models.CharField(max_length=256)
    order = models.PositiveIntegerField()
    deleted = models.BooleanField(default=False)
    class Meta:
        db_table = 'yttag_videos'


class VideoTag(models.Model):
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    deleted = models.BooleanField(default=False)
    class Meta:
        db_table = 'yttag_videotags'