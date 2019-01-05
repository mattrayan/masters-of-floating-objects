from rest_framework import serializers

from .models import About, News, Profile, JoinDescription


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
            'joined',
            'active',
            'captain',
            'coach',
            'admin',
        )


class JoinDescriptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = JoinDescription
        fields = (
            'description',
        )
