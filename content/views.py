from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from .models import About
from .serializers import AboutSerializer


class AboutViewSet(viewsets.ModelViewSet):

    serializer_class = AboutSerializer
    queryset = About.objects.all()
    permission_classes = (
        AllowAny,
    )

    def get_queryset(self):
        try:
            return self.queryset.order_by('-timestamp')
        except About.DoesNotExist:
            return About.objects.none()
