from django.db import models


class Message(models.Model):

    name = models.CharField(max_length=50, blank=False, null=False)
    email = models.CharField(max_length=50, blank=False, null=False)
    message = models.TextField(default='', blank=False, null=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name} ({self.email}) - {self.timestamp}'

    def stringify(self):
        return f'\
            Name: {self.name}\n\
            Email: {self.email}\n\
            Message: {self.message}\n\
        '


class Join(models.Model):

    MALE = 'male'
    FEMALE = 'female'

    GENDER_CHOICES = (
        (MALE, 'Male'),
        (FEMALE, 'Female'),
    )

    NONE = 'none'
    LEFT = 'left'
    RIGHT = 'right'
    DRUMMER = 'drummer'
    COX = 'cox'

    PREFERENCE_CHOICES = (
        (NONE, 'None'),
        (LEFT, 'Left'),
        (RIGHT, 'Right'),
        (DRUMMER, 'Drummer'),
        (COX, 'Cox'),
    )

    first_name = models.CharField(max_length=30, blank=True, default='')
    last_name = models.CharField(max_length=30, blank=True, default='')
    email = models.CharField(max_length=50, blank=True, default='')
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES, default=MALE)
    age = models.IntegerField(blank=True, default=0)
    paddling_experience = models.IntegerField(blank=True, default=0)
    paddling_preference = models.CharField(max_length=7, choices=PREFERENCE_CHOICES, default=NONE)
    previous_teams = models.TextField(default='', blank=True)
    weight = models.CharField(max_length=10, blank=True, default='')
    height = models.CharField(max_length=10, blank=True, default='')
    max_bench_press = models.CharField(max_length=10, blank=True, default='')
    max_number_chinups = models.CharField(max_length=10, blank=True, default='')
    five_km_jog_time = models.CharField(max_length=10, blank=True, default='')
    comments = models.TextField(default='', blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name} ({self.email}) - {self.timestamp}'
