package dio.spring.security.jwt.security;

import jakarta.servlet.Servlet;
import jakarta.servlet.http.HttpServlet;
import org.h2.server.web.WebServlet;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

    @Bean
    public BCryptPasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    private static final String[] SWAGGER_WHITELIST = {
            "/v2/api-docs",
            "/swagger-resources",
            "/swagger-resources/**",
            "/configuration/ui",
            "/configuration/security",
            "/swagger-ui.html",
            "/webjars/**"
    };

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().disable()
                .and()
                .cors().and().csrf().disable()
                .addFilterBefore(new JWTFilter(), UsernamePasswordAuthenticationFilter.class)
                .authorizeRequests()
                .requestMatchers(SWAGGER_WHITELIST).permitAll()
                .requestMatchers("/h2-console/**").permitAll()
                .requestMatchers(HttpMethod.POST, "/login").permitAll()
                .requestMatchers(HttpMethod.POST, "/users").permitAll()
                .requestMatchers(HttpMethod.GET, "/users").hasAnyRole("USERS", "MANAGERS")
                .requestMatchers("/managers").hasAnyRole("MANAGERS")
                .anyRequest().authenticated()
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        return http.build();
    }
    @Bean
    public ServletRegistrationBean<?> h2ServletRegistration() {
        // Aqui removemos o genérico explícito e usamos o wildcard
        ServletRegistrationBean<?> registrationBean = new ServletRegistrationBean<>((Servlet) new WebServlet(), "/h2-console/*");
        return registrationBean;
    }
}