#Importando a biblioteca httpresponse
from django.http import HttpResponse
import datetime

#Criando uma função

def abertura (request):
    pagina = """
    <html>
       <head>
         <title>Aula Django</title>
       </head>

       <body>
          <h1>Seja Bem Vindo</h1>
       </body>
    </html>
    """
    return HttpResponse(pagina)


def despedida (request):
    documento = """
    <html>
       <head>
         <title>Aula Django</title>
       </head>

       <body>
          <h1>Até logo</h1>
       </body>
    </html>
    """
    return HttpResponse(documento)

def dataAtual (request):
 data = datetime.datetime.now()
 documento = """
  <html>
       <head>
         <title>manipulando datatime</title>
       </head>

       <body>
          <h1>data e hora atual:%s</h1>
       </body>
     </html>
    """ %data
 return HttpResponse(documento)

def calculo(num1, num2):
   soma = num1 + num2
   documento = """
  <html>
       <head>
         <title>Realizando calculo</title>
       </head>

       <body>
          <h1>%s + %s = %s</h1>
       </body>
     </html>
    """ %(num1, num2, soma)
   return HttpResponse(documento)