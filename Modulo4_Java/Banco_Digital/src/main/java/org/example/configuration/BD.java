package org.example.configuration;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class BD {

    private static Connection connection;
    public static Connection getConnection() throws SQLException{
        if (connection != null){
            return connection;
        }
        return DriverManager.getConnection("jdbc:mysql://localhost:3306/db_banco_digital", "root", "Banco123*");
    }
}
