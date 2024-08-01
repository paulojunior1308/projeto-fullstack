package org.example.dao;

import org.example.entity.Cliente;

import javax.xml.transform.Result;
import java.sql.*;
import java.util.*;

public class ClienteDAO {

    private final Connection connection;

    public ClienteDAO(Connection connection) {this.connection = connection; }

    public List<Cliente> buscarTodosOsClientes() throws SQLException {
        String SQL = "SELECT * FROM tb_cliente";
        List<Cliente> clientes = new ArrayList<>();
        try (PreparedStatement preparedStatement = connection.prepareStatement(SQL);
             ResultSet resultSet = preparedStatement.executeQuery()) {
            while (resultSet.next()) {
                Cliente cliente = new Cliente();
                cliente.setId(resultSet.getInt("id"));
                cliente.setNome(resultSet.getString("nome"));
                clientes.add(cliente);
            }
        } catch (SQLException e) {
            System.err.println("Erro ao buscar todos os clientes: " + e.getMessage());
            throw e; // ou logar a exceção de alguma outra forma
        }
        return clientes;
    }


    public void inserirNovoCliente(String nome) throws SQLException{
        String SQL = "INSERT INTO tb_cliente(nome) values (?)";
        PreparedStatement preparedStatement = connection.prepareStatement(SQL);
        preparedStatement.setString(1, nome);
        preparedStatement.executeUpdate();
    }

}
