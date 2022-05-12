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
function venda(e)
{
    if(document.getElementById('mussarela').checked)
    {
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25.00;
    } else if (document.getElementById('marguerita').checked) {
        somaMarguerita = somaMarguerita + 1;
        vendaMussarela = vendaMussarela + 25.00;
    } else if (document.getElementById('calabresa').checked) {
        somaCalabresa = somaCalabresa + 1;
        vendaCalabresa = vendaCalabresa + 25.00;
    }
}