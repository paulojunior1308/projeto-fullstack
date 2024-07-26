package one.digitalinnovation;


import java.util.*;

public class Main {

	public static void main(String[] args) 
	{
		
		Map<String, String> aluno = new HashMap<>();
		
		aluno.put("Nome", "Paulo");
		aluno.put("Idade", "28");
		aluno.put("Media", "8.5");
		aluno.put("Turma", "3a");
		
		System.out.println(aluno);
		
		System.out.println(aluno.keySet());
		System.out.println(aluno.values());
		
		List<Map<String, String>> listaAlunos = new ArrayList<>();

		listaAlunos.add(aluno);
		
		Map<String, String> aluno2 = new HashMap<>();
		
		aluno2.put("Nome", "Eduardo");
		aluno2.put("Idade", "20");
		aluno2.put("Media", "8.5");
		aluno2.put("Turma", "3b");
		
		listaAlunos.add(aluno2);
		
		System.out.println(listaAlunos);
		
		System.out.println(aluno.containsKey("Nome"));
	}
}
