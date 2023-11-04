class Node ():
    def __init__(self,data):
        self.data = data 
        self.left = None 
        self.right = None
class Tree():
    def __init__(self):
        self.root = None
    def append(self,data, root = None):
        if(self.root == None):
            self.root = Node(data)
        else:
            if(root == None):
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

    def print(self, root = None):
        if(root == None):
            root = self.root 
        if(root.left != None):
            self.print(root.left)
        print(root.data , end= ' ')
        
        if(root.right != None):
            self.print(root.right)
    def min(self, root = None):
        if(root == None):
            root = self.root 
        while(root.left):
            root = root.left 
        return root.data


    def max(self, root = None):
        if(root == None):
            root = self.root 
        while(root.right):
            root = root.right
        return root.data


    def remove(self,data, root =None):
        if(self.root == None):
            return None 
        if(root == None):
            root = self.root 
        if(data < root.data):
            root.left = self.remove(data,root.left)
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
                sub = self.min(root.right)
                root.data = sub 
                root.right = self.remove(sub , root.right)
        return root
tree = Tree()
tree.append(55)
tree.append(30)
tree.append(25)
tree.append(80)
tree.append(100)
tree.append(89)
tree.append(70)
tree.append(65)
tree.print()
print()
print(f'The minimum is : {tree.min()} and the maximum is : {tree.max()}')
tree.remove(30)
tree.print()
tree.remove(65)
print()
tree.print()
tree.remove(55)
print()
tree.print()