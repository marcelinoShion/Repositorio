from sbbst import sbbst
import random 
x = 0
numeros = []
while x < 10000 :
    numeros.append(random.randint(1,100000))
    x += 1

tree = sbbst()
nums = [131, 4, 134, 135, 180, 1, 3, 21, 14, 142, 80, 146]
for num in numeros:
    tree. insert (num)

print("Número de elementos:",tree.getSize())
print("altura:",tree.getHeightTree())
print("Min valor:",tree.getMinVal())
print("Max valor:",tree.getMaxVal())
print("3º menor valor:",tree.kthsmallest(3))
print("2º maior valor:",tree.kthlargest(2))
print("Pre-Orden:", tree.preOrder())