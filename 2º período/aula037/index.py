num1 = int(input("Digite o primeiro número: "))
num2 = int(input("Digite o segundo número: "))
num3 = int(input("Digite o terceiro número: "))

if num1 > num2 and num1 > num3:
    print(f"{num1} é maior")
elif num1 < num2 and num2 > num3:
    print(f"{num2} é maior")
elif num2 < num3 and num3 > num1:
    print(f"{num3} é maior")
else:
    print("Os dois números são iguais")
