package dio.porpertiesvalues.app;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class SistemaMensagem implements CommandLineRunner {

    @Value("${name:NoReply-DIO}") //a variavel tem que esta igual ao application.properties, caso não esteja, podemos utilizar o valor padrão
    private String nome;

    @Value("${email}")
    private String email;

    @Value("${telefones}")
    private List<Long> telefones = new ArrayList<>(Arrays.asList(new Long[]{11985246987L}));

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Mensagem enviada por: " + nome
                + "\nEmail: " + email
                + "\nCom telefones para contato: " + telefones);
        System.out.println("Seu cadastro foi aprovado");
    }
}
