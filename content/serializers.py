from rest_framework import serializers

from .models import About, News, Profile, Picture, Album, JoinDescription


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


class PictureSerializer(serializers.ModelSerializer):

    url = serializers.SerializerMethodField()

    class Meta:
        model = Picture
        fields = (
            'url',
            'description',
        )

    def get_url(self, instance):
        return instance.image.url


class AlbumSerializer(serializers.ModelSerializer):

    cover = serializers.SerializerMethodField()

    class Meta:
        model = Album
        fields = (
            'id',
            'title',
            'cover',
        )

    def get_cover(self, instance):
        return instance.pictures.first().image.url if instance.pictures.exists() \
            else None


class AlbumDetailSerializer(AlbumSerializer):

    cover = serializers.SerializerMethodField()
    pictures = PictureSerializer(many=True, read_only=True)

    class Meta:
        model = Album
        fields = (
            'id',
            'title',
            'cover',
            'pictures',
        )


class JoinDescriptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = JoinDescription
        fields = (
            'description',
        )
