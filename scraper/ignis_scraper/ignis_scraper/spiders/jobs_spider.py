import scrapy 
import requests
from urllib.parse import urlencode
class JobsSpider(scrapy.Spider):
    name = 'jobs'
    start_urls = ['https://job-search-api.svc.dhigroupinc.com/v1/dice/jobs/search']
    # x = 1


    def __init__(self):
        self.x = 1
        self.all_pages = False    
        self.page_limit = 1
        self.page_size = 20
        self.current_page = 1
        self.last_page = False

    def parse(self, response):
        if(len(response.json()["data"])< self.page_size):
            self.last_page = True
        
        for job in response.json()["data"]:
            x= requests.post(url="http://localhost:8000/api/jobs", data=job)
            print(x)
        
        

    def start_requests(self):
        # if you want to scrape a specific number of pages
        # change this to false and specify the number of pages to scrape 
        headers = {

            'x-api-key': '1YAt0R9wBg4WfsF9VB2778F5CHLAPMVW3WAZcKd8',
        }
        params = {
            'q': 'Software',
            'countryCode2': 'US',
            'radius': '30',
            'radiusUnit': 'mi',
            'page': self.page_limit,
            'pageSize':self.page_size,
            'facets': 'employmentType|postedDate|workFromHomeAvailability|workplaceTypes|employerType|easyApply|isRemote|willingToSponsor',
            'filters.workplaceTypes': 'Remote',
            'filters.employmentType': 'CONTRACTS',
            'filters.postedDate': 'ONE',
            'currencyCode': 'USD',
            'fields': 'id|jobId|guid|summary|title|postedDate|modifiedDate|jobLocation.displayName|detailsPageUrl|salary|clientBrandId|companyPageUrl|companyLogoUrl|companyLogoUrlOptimized|positionId|companyName|employmentType|isHighlighted|score|easyApply|employerType|workFromHomeAvailability|workplaceTypes|isRemote|debug|jobMetadata|willingToSponsor',
            'culture': 'en',
            'recommendations': 'true',
            'interactionId': '0',
            'fj': 'true',
            'includeRemote': 'true',
        }
        
        for url in self.start_urls:
            while(True):            
                params["page"] = self.current_page
                self.current_page += 1

                url_with_params = f"{self.start_urls[0]}?{urlencode(params)}"
                yield scrapy.Request(url_with_params, headers=headers  , callback=self.parse)
                if(self.current_page >= self.page_limit):
                    break
                if(self.last_page):
                    break
            
            