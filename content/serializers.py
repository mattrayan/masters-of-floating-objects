from rest_framework import serializers

from .models import About, News, Profile


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

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = (
            'first_name',
            'last_initial',
            'image',
            'paddle',
            'active',
            'captain',
            'coach',
            'admin',
        )
