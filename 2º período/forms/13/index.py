elif user_digit == 2:
        user_1 = input("\nLogin: ")
        senha_1 = int(input("Senha: "))
        for valores in cad_users:
            usuario = valores
            print(usuario)
            if user_1 == usuario[0] and senha_1 == usuario[1]:
                controle = 1
        if controle == 1:
            print("Bem vindo ao sistema")
            break
    elif user_digit == 3:
        break
    else:
        print("Favor digite um dos números acima")