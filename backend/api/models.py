from django.db import models
from django.utils.timezone import now

class Job(models.Model):
    id = models.CharField(max_length=40, primary_key=True)

    title = models.CharField(max_length=300)  

    posted_date = models.DateTimeField(default=now)  

    details_page_url = models.URLField(max_length=500) 
    company_page_url = models.URLField(max_length=500)  
    company_logo_url = models.URLField(max_length=500, blank=True, null=True)  
    company_logo_url_optimized = models.URLField(max_length=500, blank=True, null=True)
    
    salary = models.CharField(max_length=255, blank=True, null=True)  
    client_brand_id = models.CharField(max_length=50)  
    company_name = models.CharField(max_length=255)  
    employment_type = models.CharField(max_length=255)
    
    summary = models.TextField(blank=True, null=True) 
    
    job_id = models.CharField(max_length=32)  
    score = models.FloatField(blank=True, null=True)  
    easy_apply = models.BooleanField(default=False)  
    willing_to_sponsor = models.BooleanField(default=False)  
    employer_type = models.CharField(max_length=50)  
    work_from_home_availability = models.BooleanField(default=False)
    is_remote = models.BooleanField(default=False)  
    modified_date = models.DateTimeField(default=now)
    guid = models.CharField(max_length=36)  
    
    workplace_types = models.JSONField(blank=True, null=True)

    def __str__(self):
        return f"{self.title} at {self.company_name}"
