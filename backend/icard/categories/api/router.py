from rest_framework.routers import DefaultRouter
from categories.api.viewsets import CategoryApiViewSet

router_category = DefaultRouter()
router_category.register(
    prefix='categories', basename='categories', viewset=CategoryApiViewSet,
)