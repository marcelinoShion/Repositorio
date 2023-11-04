class Node ():
    def __init__(self,data):
        self.data = data
        self.left = None 
        self.right = None 

class Tree ():
    def __init__(self):
        self.root = None
    def append (self , data,root = None):
        if(self.root == None):
            self.root = Node(data)
        else:
            if( root == None):
                root = self.root
            if(data < root.data):
                if(root.left == None):
                    root.left = Node(data)
                else:
                    root = root.left
                    self.append(data,root)
            if(data > root.data):
                if(root.right == None):
                    root.right = Node(data)
                else:
                    root = root.right
                    self.append(data,root)
    def print(self,root = None):
        if(root == None):
            root = self.root 
        if(root.left !=  None):
            self.print(root.left)
        print(root.data , end= " ")
        if(root.right !=  None):
            self.print(root.right)
    def minimum (self ,root = None):
        if(root == None):
            root = self.root
        while(root.left):
            root = root.left 
        return root.data
    def maximum (self, root = None):
        if(root == None):
            root = self.root
        while (root.right):
            root = root.right
        return root.data
    def remove(self ,data , root = None):
        if(self.root == None):
            return None
        if(root == None):
            root = self.root
        if(data < root.data):
            root.left = self.remove(data , root.left)
        elif(data > root.data):
            root.right = self.remove(data , root.right)
        else:
            if(root.left == None and root.right == None):
                return None
            if(root.left == None):
                return root.right
            elif(root.right == None):
                return root.left
            else:
                sub = self.minimum(root.right)
                root.data = sub
                root.right = self.remove(sub,root.right)
        return root
            
tree = Tree()
tree.append('Uma')
tree.append('Palavra')
tree.append('Sendo')
tree.append('Escrita')
tree.append('Aqui')
tree.append('Mesmo')
tree.append('Ne')
tree.print()
print()
print(f'The minimun is: {tree.minimum()}',f'And the maiximum is: {tree.maximum()}')
tree.remove('Ne')
print()
tree.print()                        
                