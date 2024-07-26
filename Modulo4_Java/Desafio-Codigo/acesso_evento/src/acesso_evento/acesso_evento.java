package acesso_evento;
import java.util.Scanner;

public class acesso_evento 
{
  public static void main(String[] args) 
  {
    // A classe Scanner auxilia na leitura dos dados de entrada
    Scanner scan = new Scanner(System.in);

    // Lê o número de pessoas (N)
    int N = scan.nextInt();

    // Cria um array para armazenar as idades
    int[] idade = new int[N];

    // Lê as idades das N pessoas
    for (int i = 0; i < N; i++) 
    {
      idade[i] = scan.nextInt();
    }

    System.out.println("Nao poderao entrar as idades:");

    // Verifica quais idades são menores que 18 e imprime essas idades
    for (int i = 0; i < N; i++) 
    {
      if (idade[i] < 18) 
      {
        System.out.println(idade[i]);
      }
    }

    // Fecha o Scanner
    scan.close();
  }
}
