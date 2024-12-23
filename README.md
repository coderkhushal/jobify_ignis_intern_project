    

    


# Jobify
Platform to fetch jobs. 



## Demo

Insert gif or link to demo


## Run Locally

Clone the project

```bash
  git clone https://github.com/coderkhushal/jobify_ignis_intern_project
```

Go to the project directory

```bash
  cd jobify_ignis_intern_project
```

Go to frontend directory

```bash
  cd frontend
```
Install dependencies

```bash
  npm Install

```
Run frontend

```bash
  npm run dev


```

Run MySql database

```bash
  HOST = ROOT
  USER = ROOT
  PASSWORD = ROOT
  # every other value = ROOT
```

Go to backend directory

```bash
  cd backend
```
Install dependencies

```bash
  pip install django djnagorestframework django-cors-headers django-filter

```
Run Migrations

```bash
  python manage.py makemigrations
  python manage.py migrate


```

Run server 
```bash
  python manage.py runserver
```

Go to Scraper directory

```bash
  cd scraper/ignis_scraper
  ```

Install dependency
```
  pip install scrapy
  ```

Run Web Crawler

```bash
  scrapy crawl jobs
  ```
