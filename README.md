    

    


# Jobify
Platform to fetch jobs. 



## Screenshots
![WhatsApp Image 2024-12-22 at 11 07 22 PM](https://github.com/user-attachments/assets/1dfce0e1-f79c-4129-976d-abbd3cbeeeef)
![WhatsApp Image 2024-12-22 at 11 07 43 PM](https://github.com/user-attachments/assets/dd05d5cc-0b18-432a-a7e6-5a3a7602550b)
![WhatsApp Image 2024-12-22 at 11 20 47 PM](https://github.com/user-attachments/assets/0a5a4456-5473-4bb6-8910-7648b607a270)
![WhatsApp Image 2024-12-22 at 11 08 08 PM](https://github.com/user-attachments/assets/0a000a42-f963-4f0f-86b5-9a078ebf9837)



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
