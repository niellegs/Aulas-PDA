from django.urls import path
from . import views

urlpatterns = [
    path("", views.abertura, name="abertura"),
    path("despedida/", views.despedida, name="despedida"),
    path("horaatual/", views.dataAtual, name="data atual")
]