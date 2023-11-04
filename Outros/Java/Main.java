import java.util.Scanner ;
class Product{
    String name ;
    double price ;
    int quantity ;
    public double totalValue(){
        return quantity * price ;
    }
    public void addProducts (int quantity){
        this.quantity += quantity ;
    }
    public void removeProducts (int quantity){
        this.quantity -= quantity ;
    }
    public String totalQuantity(){
        return"The quantity is :" + this.quantity ;
    }
}


public class Main {
    public static void main(String[] agrs) {
        //Instaciando o Scann
        Scanner sc = new Scanner(System.in);
        // Instaciando o Producto
        Product produto = new Product();
        // Inserindo o Nome do produto
        System.out.println("Insert the name :");
        produto.name = sc.nextLine();
        //Inserindo o preco do produto
        System.out.println("Insert the price :");
        produto.price = sc.nextDouble();
        // Inserindo a quantidade do produto
        System.out.println("Insert the quantity :");
        produto.quantity = sc.nextInt();
        
        // Mostrando o valor total dos produtos 
        System.out.println(produto.totalValue());

        // adicionando alguns produtos 
        produto.addProducts(5);
        System.out.println(produto.totalQuantity());

        // removendo alguns produtos
        produto.removeProducts(1);
        System.out.println(produto.totalQuantity());

    }
}