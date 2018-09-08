from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from .models import Join, Message
from .serializers import JoinSerializer, MessageSerializer


class MessageViewSet(viewsets.ModelViewSet):

    serializer_class = MessageSerializer
    queryset = Message.objects.all()
    permission_classes = (
        AllowAny,
    )


class JoinViewSet(viewsets.ModelViewSet):

    serializer_class = JoinSerializer
    queryset = Join.objects.all()
    permission_classes = (
        AllowAny,
    )
