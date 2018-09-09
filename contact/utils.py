from django.conf import settings
from django.core.mail import EmailMessage

from .models import Join, Message, EmailForward

ADMIN_EMAIL = settings.ADMIN_EMAIL


def forward_message(message: Message):
    subject = f'[MOFOs Website] New message from {message.name}'
    body = message.stringify()
    send_email(subject, body)


def forward_join(join: Join):
    subject = f'[MOFOs Website] Join request from {join.first_name} {join.last_name}'
    body = join.stringify()
    send_email(subject, body)


def send_email(subject, body):
    to_list = list(EmailForward.objects.values_list('email', flat=True))

    if not ADMIN_EMAIL in to_list:
        to_list.append(ADMIN_EMAIL)

    email = EmailMessage(subject, body, to=to_list)
    email.send()
