from django.contrib import admin

from .models import Join, Message, EmailForward


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):

    model = Message


@admin.register(Join)
class JoinAdmin(admin.ModelAdmin):

    model = Join


@admin.register(EmailForward)
class EmailForwardAdmin(admin.ModelAdmin):

    model = EmailForward
