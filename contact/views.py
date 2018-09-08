from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from .models import Message
from .serializers import MessageSerializer


class MessageViewSet(viewsets.ModelViewSet):

    serializer_class = MessageSerializer
    queryset = Message.objects.all()
    permission_classes = (
        AllowAny,
    )

    #def create(request, *args, **kwargs):
