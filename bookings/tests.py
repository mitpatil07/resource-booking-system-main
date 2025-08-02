from django.test import TestCase
from django.contrib.auth.models import User
from .models import Resource, Booking
from rest_framework.test import APIClient

class BookingTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.resource = Resource.objects.create(name='Bike', description='Mountain bike', available_quantity=5)
        self.client = APIClient()
        self.client.login(username='testuser', password='testpass')

    def test_resource_listing(self):
        response = self.client.get('/api/resources/')
        self.assertEqual(response.status_code, 200)

    def test_booking_resource(self):
        self.client.force_authenticate(user=self.user)
        data = {
            'resource': self.resource.id,
            'start_time': '2025-08-10T10:00:00Z',
            'end_time': '2025-08-10T11:00:00Z',
            'quantity': 1
        }
        response = self.client.post('/api/book/', data)
        self.assertEqual(response.status_code, 201)
