# O dicionário é uma compilação de dados feito para diminuir o tamanho das variáveis e manter o código simples. A linha 3 é a mais recomendada.

pessoa = { "nome": "Tais", "idade": 28}
print(pessoa) 

pessoa = dict(nome="Tais", idade=28)
print(pessoa)
# {} - declara o dicionário
# [] - acessa o dicionário
pessoa["telefone"] = "9999-9898"
print(pessoa)

print(pessoa['idade'])

# podem existir dicionarios dentro de dicionarios