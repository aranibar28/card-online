from rest_framework.routers import DefaultRouter
from tables.api.viewsets import TableApiViewSet

router_table = DefaultRouter()

router_table.register(
    prefix='tables', basename='tables', viewset=TableApiViewSet
)