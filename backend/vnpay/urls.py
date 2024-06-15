from django.urls import path, include
from .views import (
    VnPayAPI,
    VnPayUpdateAPI,
    VnPayWebhookAPI,    
)


urlpatterns = [
    path('api/', VnPayAPI.as_view(), name='vnpay_payment'),
    path('api/update/<str:order_code>/', VnPayUpdateAPI.as_view(), name='vnpay_update'),
    path('api/webhook/', VnPayWebhookAPI.as_view(), name='vnpay_webhook'),
]