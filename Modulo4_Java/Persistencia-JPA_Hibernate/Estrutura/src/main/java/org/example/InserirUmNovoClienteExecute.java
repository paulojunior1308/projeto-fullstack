package org.example;

import org.example.configuration.DB;
import org.example.dao.ClienteDAO;

import java.sql.*;

public class InserirUmNovoClienteExecute {
    public static void main(String[] args)throws SQLException{
        try(Connection connection = DB.getConnection()){
            ClienteDAO clienteDAO = new ClienteDAO(connection);
            clienteDAO.inserirNovoCliente("Eduardo");
        }
    }
}
