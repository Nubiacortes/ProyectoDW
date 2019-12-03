
from django.urls import path
from .views import home, novedades

urlpatterns = [
    path('', home, name="home"),
    path ('novedades/',novedades,name="novedades")
]