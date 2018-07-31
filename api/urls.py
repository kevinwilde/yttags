from django.conf.urls import url, include
from rest_framework import routers

from .api import RegistrationAPI, LoginAPI, UserAPI, UserList

router = routers.DefaultRouter()

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^auth/register/$', RegistrationAPI.as_view()),
    url(r'^auth/login/$', LoginAPI.as_view()),
    url(r'^auth/user/$', UserAPI.as_view()),
    url(r'^users/$', UserList.as_view())
]