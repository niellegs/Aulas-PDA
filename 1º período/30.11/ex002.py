# Escreva uma função que, dado um número nota representando a nota de um estudante, converte o valor de nota para um conceito (A, B, C, D, E e F).

def converte_nota_em_conceito(nota):
    if nota < 1:
        print('F')
    elif nota < 2:
        print('E')
    elif nota < 3:
        print('D')
    elif nota < 4:
        print('C')
    elif nota < 6:
        print('B')
    else:
        print('A')

converte_nota_em_conceito(5)