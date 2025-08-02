FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .

# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# Production-grade WSGI server
# CMD ["gunicorn", "booking_system.wsgi:application", "--bind", "0.0.0.0:8000"]

CMD ["sh", "-c", "python manage.py migrate && echo \"from django.contrib.auth.models import User; User.objects.filter(username='admin').exists() or User.objects.create_superuser('admin', 'admin@example.com', 'adminpass')\" | python manage.py shell && gunicorn booking_system.wsgi:application --bind 0.0.0.0:8000"]