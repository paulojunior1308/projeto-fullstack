package org.example.dao;

import org.example.entity.Cliente;
import org.example.entity.Conta;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ContaDAO {

    private final Connection connection;

    public ContaDAO(Connection connection) {
        this.connection = connection;
    }

    public void inserirConta (Conta conta) throws SQLException {
        String SQL = "INSERT INTO conta (agencia, conta, saldo, cliente_id) VALUES (?, ?, ?, ?)";

        try (PreparedStatement preparedStatement = connection.prepareStatement(SQL)) {
            preparedStatement.setInt(1, conta.getAgencia());
            preparedStatement.setInt(2, conta.getConta());
            preparedStatement.setDouble(3, conta.getSaldo());
            preparedStatement.setInt(4, conta.getCliente().getId());
            preparedStatement.executeUpdate();
        }
        catch (SQLException e) {
            System.err.println("Erro ao inserir conta: " + e.getMessage());
            throw e;
        }
    }
}