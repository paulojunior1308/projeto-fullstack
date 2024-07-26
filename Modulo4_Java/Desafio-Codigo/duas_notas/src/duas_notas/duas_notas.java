package duas_notas;
import java.io.IOException;
import java.util.Scanner;

public class duas_notas {

    public static void main(String[] args) throws IOException {
        // A classe Scanner auxilia na leitura dos dados de entrada
        Scanner leitor = new Scanner(System.in);

        // Notas disponíveis
        int[] notas = {2, 5, 10, 20, 50, 100};

        while (true) {
            int N = leitor.nextInt();
            int M = leitor.nextInt();
            int troco = M - N;

            // Se N e M forem ambos zero, terminamos o loop
            if (N == 0 && M == 0) break;

            boolean possivel = false;

            // Verifica se é possível devolver o troco exato com duas notas
            for (int i = 0; i < notas.length; i++) {
                for (int j = 0; j < notas.length; j++) {
                    if (i != j && notas[i] + notas[j] == troco) {
                        possivel = true;
                        break;
                    }
                }
                if (possivel) break;
            }

            // Imprime o resultado
            if (possivel) {
                System.out.println("possible");
            } else {
                System.out.println("impossible");
            }
        }

        leitor.close();
    }
}
