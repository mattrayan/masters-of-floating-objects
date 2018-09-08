from django.contrib import admin

from .models import Join, Message


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):

    model = Message


@admin.register(Join)
class JoinAdmin(admin.ModelAdmin):

    model = Join
