package dio.jparepository;

import dio.jparepository.model.User;
import dio.jparepository.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class StartApp implements CommandLineRunner {

    @Autowired
    private UserRepository repository;

    @Override
    public void run(String... args) throws Exception {

        List<User> users = repository.findByNameContaining("Eduardo");

        for(User u: users){
            System.out.println(u);
        }

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
