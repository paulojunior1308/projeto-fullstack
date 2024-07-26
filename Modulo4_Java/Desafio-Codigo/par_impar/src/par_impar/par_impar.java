package par_impar;
import java.util.Scanner;

public class par_impar 
{
	 public static void main(String[] args) {
	        // A classe Scanner auxilia na leitura dos dados de entrada
	        Scanner leitor = new Scanner(System.in);

	        // Lê o número de casos de teste
	        int QT = Integer.parseInt(leitor.nextLine());

	        // Variáveis para armazenar dados dos jogadores e números
	        String[] linha1, linha2;
	        String nome1, escolha1, nome2, escolha2;
	        int N, M;
	        
	        for (int i = 0; i < QT; i++) {
	            // Lê e quebra a primeira linha de entrada
	            linha1 = leitor.nextLine().split(" ");
	            // Lê e quebra a segunda linha de entrada
	            linha2 = leitor.nextLine().split(" ");
	            
	            // Obtém os números escolhidos pelos jogadores
	            N = Integer.parseInt(linha2[0]);
	            M = Integer.parseInt(linha2[1]);

	            // Obtém o nome e a escolha dos jogadores
	            nome1 = linha1[0];
	            escolha1 = linha1[1];
	            nome2 = linha1[2];
	            escolha2 = linha1[3];
	            
	            // Calcula a soma dos números
	            int soma = N + M;
	            boolean somaPar = (soma % 2 == 0);

	            // Determina o vencedor baseado na escolha e na paridade da soma
	            if ((somaPar && escolha1.equalsIgnoreCase("PAR")) ||
	                (!somaPar && escolha1.equalsIgnoreCase("IMPAR"))) {
	                System.out.println(nome1);
	            } else {
	                System.out.println(nome2);
	            }
	        }

	        // Fecha o scanner
	        leitor.close();
	    }
}
