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
