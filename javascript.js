'use strict';

// variáveis
let somaMussarela = 0;
let somaMarguerita = 0;
let somaCalabresa = 0;
let vendaMussarela = 0.00;
let vendaMarguerita = 0.00;
let vendaCalabresa = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getAnimations('estorno');
let btnPlanilha = document.getElementById('export');

// eventos
btnVendas.addEventListener('click', venda, false);
btnEstorno.addEventListener('click', estorno, false);
btnPlanilha.addEventListener('click', planilha, false);

// funções
function venda(e) {
    if (document.getElementById('mussarela').checked) {
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    } else if (document.getElementById('marguerita').checked) {
        somaMarguerita = somaMarguerita + 1;
        vendaMarguerita = vendaMarguerita + 25.00;
        document.getElementById('resultadoMarguerita').innerHTML = somaMarguerita;
        document.getElementById('vendaMarguerita').innerHTML = vendaMarguerita.toFixed(2);
    } else if (document.getElementById('calabresa').checked) {
        somaCalabresa = somaCalabresa + 1;
        vendaCalabresa = vendaCalabresa + 25.00;
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
}