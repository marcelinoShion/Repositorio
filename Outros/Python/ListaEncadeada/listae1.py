class No :
    def __init__(self,data):
        self.data = data
        self.proximo = None
class listaEncadeada:
    def __init__(self):
        self.lista = None
        self.len = 0
    def append(self ,i):
        if(self.lista):
            pro = self.lista
            while(pro.proximo):
                pro = pro.proximo
            
            pro.proximo = No(i)
        else:
            self.lista = No(i)
        self.len += 1
    def appendOrd(self, i):
        if(self.lista):
            pro = self.lista
            item = No(i)
            while(i > pro.data):
                if(pro.proximo == None):
                    pro.proximo = item
                    return 0
                anterior = pro
                pro = pro.proximo
            anterior.proximo = item
            item.proximo = pro
        else:
            self.lista = No(i)
        self.len += 1
    def remove(self, i):
        lista = self.lista 
        if (lista == i):
            lista = lista.proximo
        while(lista):
            anterior = lista
            lista = lista.proximo
            if(lista.data == i):
                lista = lista.proximo
                anterior.proximo = lista
                break
    def print(self):
        lista = self.lista
        while(lista):
            print(lista.data)
            lista = lista.proximo
    def search (self , i ):
        pro = self.lista
        if(pro.data == i):
            return i
        while(pro.proximo):
            pro = pro.proximo
            if(pro.data == i):
              return i
        return -1


            
lst = listaEncadeada()
lst.append(5)
lst.append(7)
# lst.append(4)
lst.append(144)
lst.appendOrd(55)

# print(lst.len)
lst.print()
print(lst.search(33))