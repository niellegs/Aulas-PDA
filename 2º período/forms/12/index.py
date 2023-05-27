from time import sleep

userName = "Hammond"
userPassword = "chewy123"

name = str(input("Insira seu nome: ")).strip().capitalize()
password = str(input("Insira sua senha: ")).strip()
cont = 1

while name != userName and password != userPassword:
    if cont <= 2:
        print("\033[33mO usuário fornecido não se encontra na nossa base de dados, por favor, tente novamente.\033[m")
        name = str(input("Insira seu nome: ")).strip().capitalize()
        password = str(input("Insira sua senha: "))
        cont += 1
    else:
        print("\033[31mDemasiadas tentativas, tente novamente trinta segundos.\033[m")
        sleep(30)
        cont = 0
print(f"\033[32mUsuário logado com sucesso, seja bem-vindo, {userName}.\033[m")