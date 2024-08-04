package dio.singletonprototype;

import dio.singletonprototype.app.SistemaMensagem;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.concurrent.ExecutionException;

@SpringBootApplication
public class SingletonPrototypeApplication {

	public static void main(String[] args) {
		SpringApplication.run(SingletonPrototypeApplication.class, args);
	}

	@Bean
	public CommandLineRunner run (SistemaMensagem sistema) throws Exception {
		return args -> {
			sistema.enviarConfirmacaoCadastro();
			sistema.enviarMensagemBoasVindas();
			sistema.enviarConfirmacaoCadastro();
		};
	}

}
