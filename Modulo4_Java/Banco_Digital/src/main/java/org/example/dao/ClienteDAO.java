package org.example.dao;

import org.example.entity.Cliente;

import javax.xml.transform.Result;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ClienteDAO {

    private final Connection connection;

    public ClienteDAO(Connection connection) throws SQLException {
        this.connection = connection;
        this.connection.setAutoCommit(false);
    }

    public void inserirNovoCliente(String nome) throws SQLException {

        try {
            Cliente clienteExistente = buscarClientePorNome(nome);
            if (clienteExistente != null){
                System.out.println("Cliente já existe: " + clienteExistente.getNome());
                return;
            }
            String SQL = "INSERT INTO cliente(nome) values (?)";
            try (PreparedStatement preparedStatement = connection.prepareStatement(SQL)) {
                preparedStatement.setString(1, nome);
                int rowsAffected = preparedStatement.executeUpdate();
                if (rowsAffected > 0) {
                    connection.commit();
                    System.out.println("Cliente inserido com sucesso.");
                } else {
                    System.err.println("Nenhuma linha inserida.");
                }
            }
        }
        catch (SQLException e){
            connection.rollback();
            System.err.println("Erro ao inserir cliente: " + e.getMessage());
            throw e;
        }
}
    public Cliente buscarClientePorNome(String nome) throws SQLException {
        String SQL = "SELECT * FROM cliente WHERE nome = ?";
        Cliente cliente = null;
        try (PreparedStatement preparedStatement = connection.prepareStatement(SQL)){
            preparedStatement.setString(1, nome);
            try (ResultSet resultSet = preparedStatement.executeQuery()){
                if (resultSet.next()){
                    cliente = new Cliente();
                    cliente.setId(resultSet.getInt("id"));
                    cliente.setNome(resultSet.getString("nome"));
                }
            }
        }
        catch (SQLException e){
            System.err.println("Erro ao buscar cliente por nome: " + e.getMessage());
            throw e;
        }
        return cliente;
    }
}
