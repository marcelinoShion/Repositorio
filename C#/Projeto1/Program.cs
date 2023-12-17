// See https://aka.ms/new-console-template for more information
using System;
using System.Runtime.InteropServices;

namespace name
{
    public class Hello
    {
        static void Main(String[] args)
        {
            Filho filho1 = new Filho("Ana", 25);
            System.Console.WriteLine(filho1.nome);
            System.Console.WriteLine(filho1.sobrenome);
            System.Console.WriteLine(filho1.idade);


        }
    }
    abstract class Pai
    {
        public String nome;
        public String sobrenome = "Souza";
        public Pai()
        {

        }
    }
    
    interface IFalar {
        void Falar (){
            System.Console.WriteLine("Ola");
        }
    }
    class Filho : Pai 
    {
        public int idade;
        public Filho(String nome, int idade)
        {
            this.nome = nome;
            this.idade = idade;
        }
    }
}