package org.example;

import org.example.configuration.BD;
import org.example.dao.ClienteDAO;
import org.example.dao.ContaDAO;
import org.example.entity.Cliente;
import org.example.entity.Conta;
import org.example.entity.ContaCorrente;
import org.example.entity.ContaPoupanca;

import java.sql.Connection;
import java.sql.SQLException;

public class Main {
    public static void main(String[] args) throws SQLException{


        Connection connection = BD.getConnection();
        ClienteDAO clienteDAO = new ClienteDAO(connection);
        ContaDAO contaDAO = new ContaDAO(connection);
        String nomeCliente = "Paulo";

        try {

            Cliente cliente = clienteDAO.buscarClientePorNome(nomeCliente);
            if (cliente == null){
                clienteDAO.inserirNovoCliente(nomeCliente);
                cliente = clienteDAO.buscarClientePorNome(nomeCliente);
            }
            else {
                System.out.println("Cliente já existe: " + cliente.getNome());
            }
            if (cliente != null) {

                Conta contaCorrente = new ContaCorrente(cliente);
                Conta contaPoupanca = new ContaPoupanca(cliente);

                contaDAO.inserirConta(contaCorrente);
                contaDAO.inserirConta(contaPoupanca);

                contaCorrente.imprimirExtrato();
                contaPoupanca.imprimirExtrato();

                System.out.println("Contas inseridas com sucesso!");

                connection.commit();

            } else {
                System.err.println("Cliente não encontrado!");
            }
        }
        catch (SQLException e){
            System.err.println("Erro ao executar operações no banco de dados: " + e.getMessage());
            if (connection != null) {
                try {
                    connection.rollback(); // Rollback em caso de erro
                } catch (SQLException rollbackEx) {
                    System.err.println("Erro ao realizar rollback: " + rollbackEx.getMessage());
                }
            }
        } finally {
            if (connection != null) {
                try {
                    connection.close(); // Fechar conexão
                } catch (SQLException closeEx) {
                    System.err.println("Erro ao fechar conexão: " + closeEx.getMessage());
                }
            }
        }
    }
}