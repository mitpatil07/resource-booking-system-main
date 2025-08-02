from django.shortcuts import render
from rest_framework import generics, permissions, serializers
from .models import Resource, Booking
from .serializers import ResourceSerializer, BookingSerializer

# def index(request):
#     return render(request, 'index.html')

class ResourceListCreateView(generics.ListCreateAPIView):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            return [permissions.IsAuthenticated()]
        return []

class BookingCreateView(generics.CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        resource = serializer.validated_data['resource']
        quantity = serializer.validated_data['quantity']

        if quantity > resource.available_quantity:
            raise serializers.ValidationError("Not enough resources available.")

        resource.available_quantity -= quantity
        resource.save()
        serializer.save(user=self.request.user)

    def create(self, request, *args, **kwargs):
        print("Incoming data:", request.data)
        response = super().create(request, *args, **kwargs)
        print("Response data:", response.data)
        return response

class MyBookingsView(generics.ListAPIView):
    serializer_class = BookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Booking.objects.filter(user=self.request.user)
