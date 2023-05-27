'''
cidade = ["João Pessoa", "Recife", "Belo Horizonte"]
print(cidade)

nome, endereço, número, bairro, cidade, possui habilitação, altura

, "Rua das Flores", 12, "Valentina", "São Paulo", "sim", 1.74

if cadastroCliente[5] == True:
    print("Possui habilitação")
else:
    print("Não possui habilitação")
'''
cadastroCliente = ["Marcelo"]
print(f"nome: {cadastroCliente[0]}")
# print(f"endereço: {cadastroCliente[1]}")
# print(f"número: {cadastroCliente[2]}")
# print(f"bairro: {cadastroCliente[3]}")
# print(f"cidade: {cadastroCliente[4]}")
# print(f"altura: {cadastroCliente[6]}")

while True:
    nome = input("Digite o seu nome: ")
    cadastroCliente.append(nome)
    validar = input("Deseja continuar? [Y / N] ")
    if validar.upper() == "N":
        break
print(cadastroCliente)
cadastroCliente.insert(0, "Maria")