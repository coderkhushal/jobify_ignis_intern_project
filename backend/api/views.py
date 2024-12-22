from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
from rest_framework.pagination import PageNumberPagination
from .models import Job, WorkplaceType
from .serializer import JobSerializer, WorkplaceTypeSerializer


class JobListView(APIView, PageNumberPagination):
    page_size = 10

    def get(self, request):
        
        title = request.query_params.get('title')
        company_name = request.query_params.get('company_name')
        workplace_type = request.query_params.get('workplace_type')
        employment_type = request.query_params.get('employment_type')
        min_salary = request.query_params.get('min_salary')
        max_salary = request.query_params.get('max_salary')


        jobs = Job.objects.all()

        if title:
            jobs = jobs.filter(title__icontains=title)
        if company_name:
            jobs = jobs.filter(company_name__icontains=company_name)
        if workplace_type:
            print(workplace_type)
            jobs = jobs.filter(workplace_types__name__iexact=workplace_type.strip())
        if employment_type:
            jobs = jobs.filter(employment_type__icontains=employment_type)
        if min_salary:
            jobs = jobs.filter(salary__gte=min_salary)
        if max_salary:
            jobs = jobs.filter(salary__lte=max_salary)

        paginated_jobs = self.paginate_queryset(jobs, request, view=self)
        serializer = JobSerializer(paginated_jobs, many=True)
        return self.get_paginated_response(serializer.data)

    def post(self, request):
        data = request.data
        workplace_types = data.pop('workplace_types', [])

        serializer = JobSerializer(data=data)
        if serializer.is_valid():
            job = serializer.save()

            for workplace_type_name in workplace_types:
                
                workplace_type, _ = WorkplaceType.objects.get_or_create(name=workplace_type_name)
                job.workplace_types.add(workplace_type)

            job.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class WorkplaceTypeListView(APIView):
    def get(self, request):
        workplace_types = WorkplaceType.objects.all()
        serializer = WorkplaceTypeSerializer(workplace_types, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = WorkplaceTypeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class JobView(APIView):
    def get(self, request, pk):
        job = Job.objects.get(id=pk)
        serializer = JobSerializer(job)
        return Response(serializer.data)