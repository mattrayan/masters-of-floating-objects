from rest_framework import serializers

from .models import About, News


class AboutSerializer(serializers.ModelSerializer):

    class Meta:
        model = About
        fields = (
            'description',
        )


class NewsSerializer(serializers.ModelSerializer):

    class Meta:
        model = News
        fields = (
            'id',
            'title',
            'image',
            'body',
            'published',
        )
