from django.db.models import Q
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from .models import About, News, Profile
from .serializers import AboutSerializer, NewsSerializer, ProfileSerializer


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
            return self.queryset.filter(Q(active=True) | Q(admin=True))
