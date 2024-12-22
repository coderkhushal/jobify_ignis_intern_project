from django.urls import path 
from .views import JobListView, JobView

urlpatterns = [
    path('jobs', JobListView.as_view(), name='get_jobs'),
    path('job/<str:pk>', JobView.as_view(), name='get_job')
    

]
