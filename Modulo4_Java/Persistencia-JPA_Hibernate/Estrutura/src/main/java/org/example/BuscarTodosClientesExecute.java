package org.example;

import org.example.configuration.DB;
import org.example.dao.ClienteDAO;
import org.example.entity.Cliente;

import java.sql.*;
import java.util.*;

public class BuscarTodosClientesExecute {

    public static void main(String[] args) throws SQLException{
        try(Connection connection = DB.getConnection()){
            ClienteDAO clienteDAO = new ClienteDAO(connection);
            List<Cliente> clientes = clienteDAO.buscarTodosOsClientes();
            System.out.println(clientes);
        }
    }
}
