from django import forms
from django.contrib import admin

from ckeditor.widgets import CKEditorWidget

from .models import About, News, Profile


class AboutForm(forms.ModelForm):

    description = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = About
        fields = (
            'description',
        )


@admin.register(About)
class AboutAdmin(admin.ModelAdmin):

    form = AboutForm


class NewsForm(forms.ModelForm):

    body = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = News
        fields = (
            'title',
            'image',
            'body',
        )


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):

    form = NewsForm


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):

    model = Profile
