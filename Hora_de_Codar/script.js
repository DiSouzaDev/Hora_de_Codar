function ex1(){
            //1- Escreva um programa em Javascript e crie uma variável chamada "nomeDoCarro" e atribua-a um valor "Fusca".
            var nomeDoCarro = "Fusca";

            //2- Escreva um programa em Javascript em que o usuário informe o seu nome e exiba a mensagem "Olá, [NomeDoUsuario]".
            var nome = prompt("Digite seu nome:");
            alert("Olá, " + nome);
    
            //3- Escreva um programa em Javascript em que o usuário informe o seu nome e em seguida o programa perguntará a idade do usuário. Agora o programa deve exibir a mensagem "Olá, [NomeDoUsuario], sua idade é [idade]".
            var idade = prompt("Agora, digite sua idade:");
            alert("Olá, " + nome + ", sua idade é " + idade + " anos.");
            comeco();
}

//4- Considerando a figura presente na atividade, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável. Crie um arquivo para cada fórmula e poste os  arquivos no GitHub. Link do repositório abaixo. Continuação nas próximas telas.

//Retângulo
function ex2(){
    var altura = parseInt(prompt("Digite uma altura:"));
    var base = parseInt(prompt("Digite uma base:"));
    var resposta = altura * base;
    document.write("A área do retângulo é: " + resposta);
}

//Quadrado
function ex3(){
    var lado = parseInt(prompt("Digite o valor dos lados:"));
    var resposta = lado * lado;
    document.write("A área do quadrado é: " + resposta);
}

//Losango
function ex4(){
    var diagMaior = parseInt(prompt("Digite um valor para a maior diagonal:"));
    var diagMenor = parseInt(prompt("Digite um valor para a menor diagonal:"));
    var resposta = diagMaior * diagMenor / 2;
    document.write("A área do losango é: " + resposta);
}

//Trapézio
function ex5(){
    var baseMaior = parseInt(prompt("Digite um valor para a maior base:"));
    var baseMenor = parseInt(prompt("Digite um valor para a menor base:"));
    var altura = parseInt(prompt("Digite um valor para a altura:"));
    var resposta = (baseMaior + baseMenor) * altura / 2;
    document.write("A área do trapézio é: " + resposta);
}

//Paralelogramo
function ex6(){
    var altura = parseInt(prompt("Digite uma altura:"));
    var base = parseInt(prompt("Digite uma base:"));
    var resposta = altura * base;
    document.write("A área do paralelogramo é: " + resposta);
}

//Triângulo
function ex7(){
    var base = parseInt(prompt("Digite um valor para a base:"));
    var altura = parseInt(prompt("Digite um valor para a altura:"));
    var resposta = base * altura / 2;
    document.write("O valor da área do triângulo é: " + resposta);
}

//Círculo
function ex8(){
    var pi = 3.14;
    var raio = parseInt(prompt("Digite um valor para o raio:"));
    var resposta = pi * raio * raio;
    document.write("O valor da área do triângulo é: " + resposta);
}

function comeco(){
    var x = prompt("Qual exercício você quer visualizar? (Use os números de 1 a 8)");
    if(x == 1){
        ex1();
    }else if(x == 2){
        ex2();
    }else if(x == 3){
        ex3();
    }else if(x == 4){
        ex4();
    }else if(x == 5){
        ex5();
    }else if(x == 6){
        ex6();
    }else if(x == 7){
        ex7();
    }else if(x == 8){
        ex8();
    }else{
        alert("Insira um valor válido!");
        comeco();
    }   
}
comeco();