from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from orders.models import Order
from orders.api.serializers import OrderSerializer

# Esta vista no necesita permisos, por lo tanto cualquier usuario puede crear una orden.
class OrderApiViewSet(ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['table', 'status', 'close']
    ordering_fields = '__all__'
