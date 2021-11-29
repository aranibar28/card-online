from rest_framework.routers import DefaultRouter
from payments.api.viewsets import PaymentApiViewSet

router_payments = DefaultRouter()
router_payments.register(
    prefix='payments', basename='payments', viewset=PaymentApiViewSet
)
