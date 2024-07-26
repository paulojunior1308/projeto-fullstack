package distancia_dois_pontos;
import java.util.InputMismatchException;
import java.util.Scanner;
import java.lang.Math;

public class distancia_dois_pontos 
{
	public static void main(String[] args) {
	    Scanner scanner = new Scanner(System.in);

	    try {
	        // Lê os valores de entrada
	        double x1 = scanner.nextDouble();
	        double y1 = scanner.nextDouble();
	        double x2 = scanner.nextDouble();
	        double y2 = scanner.nextDouble();

	        // Calcula a distância entre os dois pontos
	        double distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

	        // Imprime o resultado com 4 casas decimais
	        System.out.printf("%.4f%n", distancia);
	    } catch (InputMismatchException e) {
	        System.out.println("Erro: Por favor, insira valores de ponto flutuante válidos.");
	    } finally {
	        scanner.close();
	    }
	}
	
}


