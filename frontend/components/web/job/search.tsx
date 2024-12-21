from rest_framework import serializers
from .models import Job, WorkplaceType


class WorkplaceTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkplaceType
        fields = ['id', 'name', 'description']


class JobSerializer(serializers.ModelSerializer):
    workplace_types = WorkplaceTypeSerializer(many=True, read_only=True)

    class Meta:
        model = Job
        fields = '__all__'
