from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from .models import About, News
from .serializers import AboutSerializer, NewsSerializer


class AboutViewSet(viewsets.ModelViewSet):

    serializer_class = AboutSerializer
    queryset = About.objects.all().order_by('-timestamp')
    permission_classes = (
        AllowAny,
    )


class NewsViewSet(viewsets.ModelViewSet):

    serializer_class = NewsSerializer
    queryset = News.objects.all().order_by('-published')
    permission_classes = (
        AllowAny,
    )
