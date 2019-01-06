from django.db import models


class About(models.Model):

    description = models.TextField(default='', blank=False, null=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = verbose_name_plural = 'About'

    def __str__(self):
        return f'About ({self.timestamp})'


class News(models.Model):

    title = models.CharField(max_length=100, blank=False, null=False)
    image = models.ImageField('image', upload_to='news_images', blank=False, null=False)
    body = models.TextField(default='', blank=False, null=False)
    published = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = verbose_name_plural = 'News'

    def __str__(self):
        return self.title


class Profile(models.Model):

    LEFT = 'left'
    RIGHT = 'right'

    PADDLE_CHOICES = (
        (LEFT, 'Left'),
        (RIGHT, 'Right'),
    )

    first_name = models.CharField(max_length=30, blank=False, null=False)
    last_initial = models.CharField(max_length=1, blank=False, null=False)
    image = models.ImageField('image', upload_to='profile_images', blank=False, null=False)
    paddle = models.CharField(max_length=5, choices=PADDLE_CHOICES, blank=True, null=True)
    joined = models.IntegerField(blank=True, null=True)
    active = models.BooleanField(default=True)
    captain = models.BooleanField(default=False)
    coach = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.first_name} {self.last_initial}'


class Picture(models.Model):

    image = models.ImageField('image', upload_to='album_images', blank=False, null=False)
    description = models.TextField(default='', blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Picture {self.id}'


class Album(models.Model):

    title = models.CharField(max_length=30, blank=False, null=False)
    pictures = models.ManyToManyField(Picture, blank=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.title}'


class JoinDescription(models.Model):

    description = models.TextField(default='', blank=False, null=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = verbose_name_plural = 'Join Description'

    def __str__(self):
        return f'Join Description ({self.timestamp})'
