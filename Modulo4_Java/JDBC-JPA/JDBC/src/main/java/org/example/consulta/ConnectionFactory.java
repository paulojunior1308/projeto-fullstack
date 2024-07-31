package org.example.consulta;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;



public class ConnectionFactory {

    // Construtor declarado como privado. Evitando assim criar instancias da fabrica
    private ConnectionFactory() {
        throw new UnsupportedOperationException();
    }

    public static Connection getConnection() {
        // Declarar objeto conexao
        Connection connection = null;

        // Carregar arquivo de propriedades para pegar parametros necessarios para se comunicar com o bd
        try (InputStream input = ConnectionFactory.class.getClassLoader().getResourceAsStream("connection.properties")) {

            // Definir parametros para se conectar ao bd
            Properties prop = new Properties();
            prop.load(input);

            String driver = prop.getProperty("jdbc.driver");
            String dataBaseAddress = prop.getProperty("db.address");
            String dataBaseName = prop.getProperty("db.name");
            String user = prop.getProperty("db.user.login");
            String password = prop.getProperty("db.user.password");

            // Construção da string de conexão
            StringBuilder sb = new StringBuilder("jdbc:")
                    .append(driver).append("://")
                    .append(dataBaseAddress).append("/")
                    .append(dataBaseName);

            String connectionUrl = sb.toString(); //sb.toString() == "jdbc:mysql://localhost/banco"

            // Criar conexao usando o DriverManager, passando como parâmetro a string de conexaão, usuário e senha do usuário.
            try {
                connection = DriverManager.getConnection(connectionUrl, user, password);
            } catch (SQLException e) {
                System.out.println("Falha ao tentar criar conexão");
                throw new RuntimeException(e);
            }
        } catch (IOException e) {
            System.out.println("Falha ao tentar carregar arquivos de propriedades");
            e.printStackTrace();
        }
        return connection;
    }
}