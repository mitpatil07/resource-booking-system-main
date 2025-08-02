from django.urls import path
from .views import ResourceListCreateView, BookingCreateView, MyBookingsView

urlpatterns = [
    path('resources/', ResourceListCreateView.as_view(), name='resource-list-create'),
    path('book/', BookingCreateView.as_view(), name='booking-create'),
    path('my-bookings/', MyBookingsView.as_view(), name='my-bookings'),
]
