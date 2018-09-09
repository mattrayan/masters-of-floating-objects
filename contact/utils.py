import os
from email.mime.text import MIMEText
from subprocess import Popen, PIPE

from django.conf import settings

from .models import Message


def forward_message(message: Message):
    msg = MIMEText(message.stringify())
    msg['From'] = 'mofosdragonboat@gmail.com'
    msg['To'] = 'matt.rayan@advisorstream.com'
    msg['Subject'] = f'Subject: [MOFOs] New message from {message.name}\n'
    p = Popen([settings.SENDMAIL_PATH, '-t', '-oi'], stdin=PIPE)
    p.communicate(msg.as_bytes())
