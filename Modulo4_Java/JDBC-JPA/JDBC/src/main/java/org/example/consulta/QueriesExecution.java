package org.example.consulta;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class QueriesExecution {

    public static void main(String[] args){

        AlunoDAO alunoDAO = new AlunoDAO();

        // CONSULTA
        List<Aluno> alunos = alunoDAO.list();

        //alunos.stream().forEach(System.out::println);

        // CONSULTA COM FILTRO
        Aluno alunoParaConsulta = alunoDAO.getById(1);
        //System.out.println(alunoParaConsulta);

        // INSERÇÃO
        Aluno alunoParaInsercao = new Aluno(
                "Paulo",
                28,
                "SP"
        );

        //alunoDAO.create(alunoParaInsercao);

        // DELETE
        //alunoDAO.delete(1);

        // ATUALIZAR (UPDATE)
        Aluno alunoParaAtualizar = alunoDAO.getById(3);
        alunoParaAtualizar.setNome("Joaquim");
        alunoParaAtualizar.setIdade(18);
        alunoParaAtualizar.setEstado("RS");

        //alunoDAO.update(alunoParaAtualizar);
    }
}
