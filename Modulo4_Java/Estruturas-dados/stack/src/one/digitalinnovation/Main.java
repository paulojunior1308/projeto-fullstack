package one.digitalinnovation;

import java.util.Stack;

public class Main {

	public static void main(String[] args) 
	{
		
		Stack<Carro> stackCarros = new Stack<>();
		
		stackCarros.push(new Carro("Ford"));
		stackCarros.push(new Carro("Chevrolet"));
		stackCarros.push(new Carro("Fiat"));
		
		System.out.println(stackCarros);
		System.out.println(stackCarros.pop()); //removendo o ultimo elemento da pilha
		System.out.println(stackCarros);
		
		System.out.println(stackCarros.peek()); //mostra o ultimo elemento mas não registra
		System.out.println(stackCarros);
		
		System.out.println(stackCarros.empty()); //mostra se a pilha esta vazia
		
	}
}
