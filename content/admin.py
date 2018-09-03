from django import forms
from django.contrib import admin

from ckeditor.widgets import CKEditorWidget

from .models import About


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