"""mofos URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import spa
from contact import views as contact_views
from content import views as content_views


router = DefaultRouter()
router.register(r'about', content_views.AboutViewSet)
router.register(r'news', content_views.NewsViewSet)
router.register(r'profiles', content_views.ProfileViewSet)
router.register(r'message', contact_views.MessageViewSet)
router.register(r'join', contact_views.JoinViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),

    url(r'^api/', include(router.urls)),

    url(r'^$', spa, name='home'),
    url(r'^news/', spa, name='news'),
    url(r'^gallery/', spa, name='gallery'),
    url(r'^album/', spa, name='album'),
    url(r'^join/', spa, name='join'),
    url(r'^team/', spa, name='team'),
    url(r'^schedule/', spa, name='schedule'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
