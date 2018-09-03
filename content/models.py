from django.db import models


class About(models.Model):

    description = models.TextField(default='', blank=False, null=False)

    class Meta:
        verbose_name = verbose_name_plural = 'About'
