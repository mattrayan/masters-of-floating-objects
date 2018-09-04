from django.db import models


class About(models.Model):

    description = models.TextField(default='', blank=False, null=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = verbose_name_plural = 'About'

    def __str__(self):
        return f'About ({self.timestamp})'
