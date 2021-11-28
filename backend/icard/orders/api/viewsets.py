from rest_framework.viewsets import ModelViewSet
from orders.models import Order
from orders.api.serializers import OrderSerializer

# Esta vista no necesita permisos, por lo tanto cualquier usuario puede crear una orden.
class OrderApiViewSet(ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
