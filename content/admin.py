from datetime import date

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


class ProfileForm(forms.ModelForm):

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

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['joined'].initial = date.today().year


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):

    form = ProfileForm
