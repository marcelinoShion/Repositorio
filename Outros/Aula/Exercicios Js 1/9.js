// Todo aluno recebe uma nota de 0 a 100. 
//Alunos com nota abaixo de 40 são reprovados. As notas
// possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
// que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
// arredondamento pois esta nota resulta na reprovação do aluno.






function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)
