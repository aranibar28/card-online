from rest_framework.serializers import ModelSerializer
from payments.models import Payment

class PaymentSerializer(ModelSerializer):
    class Meta:
        model = Payment
        fields = ('id', 'table', 'totalPayment', 'typePayment', 'statusPayment', 'created_at')
        