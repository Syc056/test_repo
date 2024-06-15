# from django.shortcuts import render
# import requests
# from django.shortcuts import render, redirect
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from rest_framework import permissions
# from time import time
# from datetime import datetime
# import json, hmac, hashlib, urllib.request, urllib, urllib.parse, random
# from revenue.models import Transaction, Order
# from device.models import Device
# from payment.models import Payment
# from django.conf import settings


# # Create your views here.
# class VnPayAPI(APIView):

#     def get(self, request, *args, **kwargs):
#         zaloPay = Payment.objects.filter(code='zalopay').first()
#         config = {
#             "app_id": zaloPay.appID,
#             "key1": zaloPay.key1,
#             "key2": zaloPay.key2,
#             "endpoint": zaloPay.endpoint_sandbox if settings.BACKEND_ENV == 'local' else zaloPay.endpoint_prod,
#         }

#         transID = random.randrange(1000000)
        
#         order = {
#             "app_id": config["app_id"],
#             "app_trans_id": "{:%y%m%d}_{}".format(
#                 datetime.today(), transID
#             ),  # mã giao dich có định dạng yyMMdd_xxxx
#             "app_user": "user123",
#             "app_time": int(round(time() * 1000)),  # miliseconds
#             "embed_data": json.dumps({}),
#             "item": json.dumps([{}]),
#             "amount": request.GET.get("amount"),
#             "description": "PhotoMong - Payment for the order #" + str(transID),
#             "bank_code": "zalopayapp",
#         }

#         # app_id|app_trans_id|app_user|amount|apptime|embed_data|item
#         data = "{}|{}|{}|{}|{}|{}|{}".format(
#             order["app_id"],
#             order["app_trans_id"],
#             order["app_user"],
#             order["amount"],
#             order["app_time"],
#             order["embed_data"],
#             order["item"],
#         )

#         order["mac"] = hmac.new(
#             config["key1"].encode(), data.encode(), hashlib.sha256
#         ).hexdigest()

#         response = urllib.request.urlopen(
#             url=config["endpoint"], data=urllib.parse.urlencode(order).encode()
#         )

#         # Find device
#         device_code = request.GET.get("device")
#         if device_code:
#             device = Device.objects.filter(code=device_code).first()
#         else:
#             device = None

#         orderObject = Order.objects.create(
#             order_code=order["app_trans_id"],
#             device_id=device,
#             product_price=order["amount"],
#             base_price=0,
#             tax=0,
#             total_price=order["amount"],
#             status="Pending",
#         )

#         result = json.loads(response.read())
        
#         result_response = {
#             "order_code": order["app_trans_id"],
#             "return_message": result.get("return_message"),
#             "qr_code": result.get("qr_code"),
#             "order_url": result.get("order_url"),
#             "return_code": result.get("return_code")
#         }
        
#         return Response(result_response, status=status.HTTP_200_OK)        


# class VnPayUpdateAPI(APIView):
#     def post(self, request, order_code, *args, **kwargs):                
#         status = request.data.get("status")
#         if order_code:
#             order = Order.objects.filter(order_code=order_code).first()
#             if order:
#                 order.status = status
#                 order.save()
#         return Response(status=status.HTTP_200_OK)


# class VnPayWebhookAPI(APIView):

#     def get(self, request, *args, **kwargs):        
#         # Get order code
#         order_code = request.GET.get("order")
#         if order_code:
#             order = Order.objects.filter(order_code=order_code).first()                     
        
#         config = {
#             "app_id": 2553,
#             "key1": "PcY4iZIKFCIdgZvA6ueMcMHHUbRLYjPL",
#             "key2": "kLtgPl8HHhfvMuDHPwKfgfsY4Ydm9eIz",
#             "endpoint": "https://sb-openapi.zalopay.vn/v2/query",
#         }

#         params = {
#             "app_id": config["app_id"],
#             "app_trans_id": order.order_code,  # Input your app_trans_id"
#         }

#         data = "{}|{}|{}".format(
#             config["app_id"], params["app_trans_id"], config["key1"]
#         )  # app_id|app_trans_id|key1
#         params["mac"] = hmac.new(
#             config["key1"].encode(), data.encode(), hashlib.sha256
#         ).hexdigest()

#         response = urllib.request.urlopen(
#             url=config["endpoint"], data=urllib.parse.urlencode(params).encode()
#         )
#         result = json.loads(response.read())
        
        
#         if result.get("return_code") == 1:
#             order.status = "Success"
#         elif result.get("return_code") == 2:
#             order.status = "Fail"
#         elif result.get("return_code") == 3:
#             order.status = "Processing"
#         order.save()                
        
#         # Create Transaction if Success
#         if (order.status == 'Success'):
#             Transaction.objects.create(
#                 order_id=order,
#                 payment_id=Payment.objects.filter(code='zalopay').first(),
#                 amount=order.total_price,
#                 transaction_status="Success",
#             )
        
#         result_response = {
#             "order_code": order.order_code,
#             "return_message": result.get("return_message"),            
#             "return_code": result.get("return_code"),
#             "status_real": order.status,
#             "status": order.status
#         }


#         return Response(result_response, status=status.HTTP_200_OK)


from django.shortcuts import redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from time import time
from datetime import datetime
import json, hmac, hashlib, urllib.parse, random
from revenue.models import Transaction, Order
from device.models import Device
from payment.models import Payment
from django.conf import settings
from urllib.request import urlopen

class VnPayAPI(APIView):
    def get(self, request, *args, **kwargs):
        try:
            vnpay_payment = Payment.objects.filter(code='vnpay').first()
            config = {
                "vnp_TmnCode": vnpay_payment.appID,
                "vnp_HashSecret": vnpay_payment.key1,
                "vnp_Url": 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html' if settings.BACKEND_ENV == 'local' else 'https://pay.vnpayment.vn/vpcpay.html',
                "vnp_ReturnUrl": vnpay_payment.returnUrl
            }

            transID = random.randrange(1000000)
            order_id = "{:%y%m%d}_{}".format(datetime.today(), transID)
            amount = request.GET.get("amount")

            order = {
                "vnp_Version": "2.1.0",
                "vnp_Command": "pay",
                "vnp_TmnCode": config["vnp_TmnCode"],
                "vnp_Amount": int(amount) * 100,
                "vnp_CurrCode": "VND",
                "vnp_TxnRef": order_id,
                "vnp_OrderInfo": 'Payment for order ' + str(order_id),
                "vnp_OrderType": "other",
                "vnp_Locale": "vn",
                "vnp_ReturnUrl": config["vnp_ReturnUrl"],
                "vnp_IpAddr": request.META['REMOTE_ADDR'],
                "vnp_CreateDate": datetime.now().strftime('%Y%m%d%H%M%S')
            }

            data = urllib.parse.urlencode(order)
            hash_data = data + config["vnp_HashSecret"]
            order["vnp_SecureHash"] = hashlib.sha256(hash_data.encode('utf-8')).hexdigest()

            payment_url = f"{config['vnp_Url']}?{data}&vnp_SecureHash={order['vnp_SecureHash']}"

            device_code = request.GET.get("device")
            device = Device.objects.filter(code=device_code).first() if device_code else None

            Order.objects.create(
                order_code=order_id,
                device_id=device,
                product_price=amount,
                base_price=0,
                tax=0,
                total_price=amount,
                status="Pending",
            )

            return redirect(payment_url)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class VnPayUpdateAPI(APIView):
    def post(self, request, order_code, *args, **kwargs):
        try:
            status = request.data.get("status")
            if order_code:
                order = Order.objects.filter(order_code=order_code).first()
                if order:
                    order.status = status
                    order.save()
            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class VnPayWebhookAPI(APIView):
    def get(self, request, *args, **kwargs):
        try:
            order_code = request.GET.get("order")
            order = Order.objects.filter(order_code=order_code).first() if order_code else None

            if not order:
                return Response({"error": "Order not found"}, status=status.HTTP_404_NOT_FOUND)

            vnpay_payment = Payment.objects.filter(code='vnpay').first()
            config = {
                "vnp_TmnCode": vnpay_payment.appID,
                "vnp_HashSecret": vnpay_payment.key1,
                "vnp_Url": 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html' if settings.BACKEND_ENV == 'local' else 'https://pay.vnpayment.vn/vpcpay.html',
                "vnp_ReturnUrl": vnpay_payment.returnUrl
            }

            inputData = request.GET
            vnp_SecureHash = inputData.get('vnp_SecureHash', '')

            data = sorted(inputData.items())
            data = '&'.join(f"{key}={value}" for key, value in data if key != 'vnp_SecureHash')
            hash_data = hashlib.sha256((data + config["vnp_HashSecret"]).encode('utf-8')).hexdigest()

            if hash_data == vnp_SecureHash:
                if inputData.get('vnp_ResponseCode') == '00':
                    order.status = "Success"
                    order.save()

                    Transaction.objects.create(
                        order_id=order,
                        payment_id=Payment.objects.filter(code='vnpay').first(),
                        amount=order.total_price,
                        transaction_status="Success",
                    )

                    return Response({'RspCode': '00', 'Message': 'Success'}, status=status.HTTP_200_OK)
                else:
                    order.status = "Failed"
                    order.save()
                    return Response({'RspCode': '01', 'Message': 'Payment Failed'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({'RspCode': '97', 'Message': 'Invalid signature'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
