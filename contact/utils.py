from django.core.mail import EmailMessage

from .models import Message


def forward_message(message: Message):
    subject = f'[MOFOs] New message from {message.name}'
    body = message.stringify()
    to='matt.rayan@advisorstream.com'

    email = EmailMessage(subject, body, to=[to])
    email.send()
