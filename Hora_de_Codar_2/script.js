function ex1() {
    // 1. Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.
    var numeroUm = prompt("Digite um número:");
    var numeroDois = prompt("Digite outro número");
    if (numeroUm > numeroDois) {
        alert("O maior número é o " + numeroUm);
    } else {
        alert("O maior número é o " + numeroDois);
    }
    comeco();
}

function ex2() {
    // 2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.
    var valorUsu = prompt("Digite um valor:");
    if (valorUsu > 0) {
        alert("O valor digitado é positivo");
    } else if (valorUsu < 0) {
        alert("O valor digitado é negativo");
    } else {
        alert("O valor digitado é zero");
    }
    comeco();
}

function ex3() {
    // 3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.
    var numeroUm = prompt("Digite o primeiro número:");
    var numeroDois = prompt("Digite o segundo número");
    var numeroTres = prompt("Digite o terceiro número");
    if (numeroUm > numeroDois && numeroUm > numeroTres) {
        alert("O maior número é o " + numeroUm);
    } else if (numeroUm < numeroDois && numeroDois > numeroTres) {
        alert("O maior número é o " + numeroDois);
    } else {
        alert("O maior número é o " + numeroTres);
    }
    comeco();
}

function ex4() {
    // 4. Faça um programa que leia  3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.
    var numUm = parseInt(prompt("Digite o primeiro número:"));
    var numDois = parseInt(prompt("Digite o segundo número"));
    var numTres = parseInt(prompt("Digite o terceiro número"));
    if (numUm > numDois && numUm > numTres) {
        if (numDois > numTres) {
            var soma = numUm + numDois;
            alert("O resultado é: " + soma);
        } else {
            var soma = numUm + numTres;
        }
    } else if (numUm < numDois && numDois > numTres) {
        if (numUm > numTres) {
            var soma = numUm + numDois;
            alert("O resultado é " + soma);
        } else {
            var soma = numDois + numTres;
            alert("O resultado é " + soma);
        }
    } else {
        if (numUm > numDois) {
            var soma = numUm + numTres;
            alert("O resultado é " + soma);
        } else {
            var soma = numDois + numTres;
            alert("O resultado é " + soma);
        }
    }
    comeco();
}

function ex5() {
    // 5.  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.
    var num1 = parseInt(prompt("Digite o primeiro número:"));
    var num2 = parseInt(prompt("Digite o segundo número:"));
    var num3 = parseInt(prompt("Digite o terceiro número:"));
    var num4 = parseInt(prompt("Digite o quarto número:"));
    var num5 = parseInt(prompt("Digite o quinto número:"));
    var num6 = parseInt(prompt("Digite o sexto número:"));
    var soma = (num1 + num2 + num3 + num4 + num5 + num6) / 6;
    alert("A média aritmética é " + soma);
    comeco();
}

function ex6() {
    // 6. Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)
    var num1 = parseInt(prompt("Digite o primeiro número:"));
    var num2 = parseInt(prompt("Digite o segundo número:"));
    var num3 = parseInt(prompt("Digite o terceiro número:"));
    var num4 = parseInt(prompt("Digite o quarto número:"));
    if (num1 > num2 && num1 > num3 && num1 > num4) {
        var maiorNum = num1;
    } else if (num1 < num2 && num2 > num3 && num2 > num4) {
        var maiorNum = num2;
    } else if (num1 < num3 && num2 < num3 && num3 > num4) {
        var maiorNum = num3;
    } else {
        var maiorNum = num4;
    }
    alert("Primeiro número: " + num1 + ", Último número: " + num4 + ", Maior número: " + maiorNum);
    comeco();
}

function ex7() {
    // 7. Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.
    var menor = 0;
    var num1 = parseInt(prompt("Digite o terceiro número:"));
    if (num1 < 72) {
        var menor = num1;
    }
    var num2 = parseInt(prompt("Digite o segundo número:"));
    if (num2 < 72) {
        var menor = menor + num2;
    }
    var num3 = parseInt(prompt("Digite o terceiro número:"));
    if (num3 < 72) {
        var menor = menor + num3;
    }
    var num4 = parseInt(prompt("Digite o quarto número:"));
    if (num4 < 72) {
        var menor = menor + num4;
    }
    var num5 = parseInt(prompt("Digite o quinto número:"));
    if (num5 < 72) {
        var menor = menor + num5;
    }
    var num6 = parseInt(prompt("Digite o sexto número:"));
    if (num6 < 72) {
        var menor = menor + num6;
    }
    alert("Os valores escritos são :" + num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5 + ", " + num6 + ". A somatória deu: " + menor);
    comeco();
}

function ex8() {
    // 8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste".Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"
    var num1 = parseInt(prompt("Digite o primeiro número:"));
    var num2 = parseInt(prompt("Digite o segundo número:"));
    var num3 = parseInt(prompt("Digite o terceiro número:"));
    var num4 = parseInt(prompt("Digite o quarto número:"));
    if (num1 > 0 && num1 < 10 && num2 > 0 && num2 < 10 && num3 > 0 && num3 < 10 && num4 > 0 && num4 < 10) {
        var media = (num1 + num2 + num3 + num4) / 4;
        if (media > 5) {
            alert("Você passou no teste");
        } else {
            alert("tente novamente");
        }
    } else {
        alert("Todos os números inseridos tem de ser maiores que zero e menores que dez.");
    }
    comeco();
}

function ex9() {
    // 9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano(não é necessário considerar o mês em que ela nasceu).
    var anoNasc = prompt("Digite seu ano de nascimento:");
    var idade = 2022 - anoNasc;
    if (idade > 0 && idade < 18 || idade > 70 && idade < 110) {
        alert("Você não é obrigado a votar");
    }
    else if (idade >= 18 && idade <= 70) {
        alert("Você precisa votar esse ano");
    } else {
        alert("Insira um ano válido");
    }
    comeco();
}

function ex10() {
    // 10. Tendo como entrada a altura e o sexo(codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:
    var altura = prompt("Informe sua altura (Ex: 1.80):");
    var sexo = prompt("Informe seu sexo (1: feminino, 2: masculino):");
    if (sexo == 1) {
        var resultado = (62.1 * altura) - 44.7;
        alert("Seu peso ideal é de " + resultado + "Kg")
    } else if (sexo == 2) {
        var resultado = (72.7 * altura) - 58;
        alert("Seu peso ideal é de " + resultado + "Kg");
    } else {
        alert("Digite um número válido.")
    }
    comeco();
}

function ex11() {
    // 11. Uma micro calculadora.Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas(codificada da seguinte forma: 1.Adição, 2.Subtração, 3.Divisão, 4.Multiplicação).O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos.Observação: Considere que só serão lidos os valores 1, 2, 3 ou 4 para as operações
    var num1 = parseInt(prompt("Digite o primeiro número:"));
    var num2 = parseInt(prompt("Digite o segundo número:"));
    var operacao = prompt("Escolha uma das opções: 1.Adição, 2.Subtração, 3.Divisão, 4.Multiplicação");
    if (operacao == 1) {
        var soma = num1 + num2;
        alert("O resultado é " + soma);
    } else if (operacao == 2) {
        var subt = num1 - num2;
        alert("O resultado é " + subt);
    } else if (operacao == 3) {
        var divis = num1 / num2;
        alert("O resultado é " + divis);
    } else if (operacao == 4) {
        var mult = num1 * num2;
        alert("O resultado é " + mult);
    } else {
        alert("Insira um valor entre 1 e 4 apenas");
    }
    comeco();
}

function comeco(){
    var x = prompt("Qual exercício você quer visualizar? (Use os números de 1 a 11)");
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
    }else if(x == 9){
        ex9();
    }else if(x == 10){
        ex10();
    }else if(x == 11){
        ex11();
    }else{
        alert("Insira um valor válido!");
        comeco();
    }   
}
comeco();