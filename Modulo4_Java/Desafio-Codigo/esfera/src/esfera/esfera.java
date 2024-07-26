package esfera;
import java.util.*;

public class esfera 
{
    public static void main(String[] args) {
        // Cria uma instância do Scanner para leitura dos dados de entrada
        Scanner sc = new Scanner(System.in);
        
        // Valor de pi fornecido no problema
        double pi = 3.14159;
        
        // Lê o valor do raio (R)
        double R = sc.nextDouble();
        
        // Calcula o volume da esfera usando a fórmula (4/3) * pi * R^3
        double volume = (4.0 / 3.0) * pi * Math.pow(R, 3.0);
        
        // Imprime o resultado no formato especificado com 3 casas decimais
        System.out.printf("VOLUME = %.3f%n", volume);
        
        // Fecha o Scanner
        sc.close();
    }
}
