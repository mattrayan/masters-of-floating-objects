from django.db import models


class Message(models.Model):

    name = models.CharField(max_length=50, blank=False, null=False)
    email = models.CharField(max_length=50, blank=False, null=False)
    message = models.TextField(default='', blank=False, null=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name} ({self.email}) - {self.timestamp}'

    def stringify(self):
        return f'Name: {self.name}\nEmail: {self.email}\n\nMessage:\n{self.message}'


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
    notes = models.TextField(default='', blank=True, null=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name} ({self.email}) - {self.timestamp}'

    def stringify(self):
        return f'First Name: {self.first_name}\nLast Name: {self.last_name}\nEmail: {self.email}\n\nGender: {self.gender}\nAge: {self.age}\n\nPaddling Experience: {self.paddling_experience} years\nPaddling Preference: {self.paddling_preference}\nPrevious Teams: {self.previous_teams}\n\nWeight: {self.weight}\nHeight: {self.height}\nMax Bench Press: {self.max_bench_press}\nMax Number of Chinups: {self.max_number_chinups}\n5km Jog Time: {self.five_km_jog_time}\n\nComments: {self.comments}'


class EmailForward(models.Model):

    name = models.CharField(max_length=50, blank=False, null=False)
    email = models.CharField(max_length=50, blank=False, null=False)

    def __str__(self):
        return f'{self.name} ({self.email})'
