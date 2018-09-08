from django.db import models


class Message(models.Model):

    name = models.CharField(max_length=50, blank=False, null=False)
    email = models.CharField(max_length=50, blank=False, null=False)
    message = models.TextField(default='', blank=False, null=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name} ({self.email}) - {self.timestamp}'
