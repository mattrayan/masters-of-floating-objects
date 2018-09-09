from rest_framework import serializers

from .models import Join, Message
from .utils import forward_message


class MessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = (
            'name',
            'email',
            'message',
        )

    def create(self, validated_data):
        message = Message.objects.create(**validated_data)
        forward_message(message)
        return message


class JoinSerializer(serializers.ModelSerializer):

    class Meta:
        model = Join
        fields = (
            'first_name',
            'last_name',
            'email',
            'gender',
            'age',
            'paddling_experience',
            'previous_teams',
            'paddling_preference',
            'weight',
            'height',
            'max_bench_press',
            'max_number_chinups',
            'five_km_jog_time',
            'comments',
        )
