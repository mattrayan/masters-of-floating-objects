from django.db.models import Q
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from .models import About, News, Profile, Album, JoinDescription
from .serializers import (
    AboutSerializer,
    NewsSerializer,
    ProfileSerializer,
    AlbumSerializer,
    AlbumDetailSerializer,
    JoinDescriptionSerializer,
)


class AboutViewSet(viewsets.ReadOnlyModelViewSet):

    serializer_class = AboutSerializer
    queryset = About.objects.all().order_by('-timestamp')
    permission_classes = (
        AllowAny,
    )


class NewsViewSet(viewsets.ReadOnlyModelViewSet):

    serializer_class = NewsSerializer
    queryset = News.objects.all().order_by('-published')
    permission_classes = (
        AllowAny,
    )


class ProfileViewSet(viewsets.ReadOnlyModelViewSet):

    serializer_class = ProfileSerializer
    queryset = Profile.objects.all().order_by('last_initial')
    permission_classes = (
        AllowAny,
    )

    def get_queryset(self):
        alumni = self.request.GET.get('alumni')

        if alumni:
            return self.queryset.filter(active=False)
        else:
            captains = self.queryset.filter(captain=True, active=True)
            coaches = self.queryset.filter(coach=True, active=True)
            paddlers = self.queryset \
                        .filter(Q(active=True) | Q(admin=True)) \
                        .exclude(captain=True) \
                        .exclude(coach=True)
            return captains | coaches | paddlers


class AlbumViewSet(viewsets.ReadOnlyModelViewSet):

    queryset = Album.objects.all().order_by('-timestamp')
    permission_classes = (
        AllowAny,
    )

    def get_serializer_class(self, *args, **kwargs):
        print(self.action)
        if self.action == 'list':
            return AlbumSerializer
        else:
            return AlbumDetailSerializer


class JoinDescriptionViewSet(viewsets.ReadOnlyModelViewSet):

    serializer_class = JoinDescriptionSerializer
    queryset = JoinDescription.objects.all().order_by('-timestamp')
    permission_classes = (
        AllowAny,
    )
