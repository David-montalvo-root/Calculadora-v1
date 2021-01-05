var valor;
var resultado;

function botao(num){
    valor = document.calcular.campo.value += num;
}
function reseta(){
    document.calcular.campo.value = '';
}
function calcula(){
    resultado = eval(valor);
    document.calcular.campo.value = resultado.toLocaleString('pt-BR');
}