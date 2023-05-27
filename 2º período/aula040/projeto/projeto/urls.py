from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('abertura/', include("app.urls")),
    path('despedida/', include("app.urls")),
    path('horaatual/', include("app.urls")),
    path('calculo/<int:num1>/<int:num2>', include("app.urls"))
    #  nome da página no browser, nome da pag
]

