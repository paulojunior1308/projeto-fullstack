package dio.springjpa;

import dio.springjpa.model.User;
import dio.springjpa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
public class StartApp implements CommandLineRunner {

    @Autowired
    private UserRepository repository;

    @Override
    public void run(String... args) throws Exception {

        User user = new User();
        user.setName("Paulo");
        user.setUsername("paulojunior");
        user.setPassword("senha123");

        repository.save(user);

        for(User u: repository.findAll()){
            System.out.println(u);
        }

    }
}
