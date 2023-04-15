// Define as variáveis para os caracteres disponíveis para a senha
var caracteresMaiusculos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var caracteresMinusculos = 'abcdefghijklmnopqrstuvwxyz';
var caracteresNumeros = '0123456789';
var caracteresSimbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// Seleciona os elementos HTML necessários
var comprimentoInput = document.getElementById('comprimento');
var maiusculosCheckbox = document.getElementById('maiusculos');
var minusculosCheckbox = document.getElementById('minusculos');
var numerosCheckbox = document.getElementById('numeros');
var simbolosCheckbox = document.getElementById('simbolos');
var gerarButton = document.getElementById('gerar');
var senhaInput = document.getElementById('senha');

// Define a função para gerar a senha
function gerarSenha() {
  // Obtém o comprimento da senha
  var comprimento = comprimentoInput.value;


  // Obtém as opções de caracteres selecionadas
  var usarMaiusculos = maiusculosCheckbox.checked;
  var usarMinusculos = minusculosCheckbox.checked;
  var usarNumeros = numerosCheckbox.checked;
  var usarSimbolos = simbolosCheckbox.checked;

  // Cria uma string vazia para armazenar os caracteres selecionados
  var caracteresSelecionados = '';

  // Adiciona os caracteres selecionados à string
  if (usarMaiusculos) {
    caracteresSelecionados += caracteresMaiusculos;
  }
  if (usarMinusculos) {
    caracteresSelecionados += caracteresMinusculos;
  }
  if (usarNumeros) {
    caracteresSelecionados += caracteresNumeros;
  }
  if (usarSimbolos) {
    caracteresSelecionados += caracteresSimbolos;
  }

  // Cria uma string vazia para armazenar a senha gerada
  var senhaGerada = '';

  // Gera a senha aleatória
  for (var i = 0; i < comprimento; i++) {
    var indice = Math.floor(Math.random() * caracteresSelecionados.length);
    senhaGerada += caracteresSelecionados[indice];
  }

  // Insere a senha gerada no input HTML
  senhaInput.value = senhaGerada;
}
var alertaDiv = document.getElementById('alerta');

function verificarSelecao() {
  if (!maiusculosCheckbox.checked && !minusculosCheckbox.checked && !numerosCheckbox.checked && !simbolosCheckbox.checked) {
    alertaDiv.classList.remove('d-none');
    return false;
  } else {
    alertaDiv.classList.add('d-none');
    return true;
  }
}

// Adiciona o evento de clique no botão "Gerar Senha"
gerarButton.addEventListener('click', function() {
  if (verificarSelecao()) {
    var botao_copiar = document.getElementById('copiar');
    botao_copiar.innerHTML = "Copiar";
    gerarSenha();
  }
});
var senha_do_input = document.getElementById('senha');
var botao_copiar = document.getElementById('copiar');

// Adiciona o evento de clique no botão "Copiar"
botao_copiar.addEventListener('click', function() {
  senha_do_input.select();
  document.execCommand('copy');
  botao_copiar.innerHTML = "Copiado!";
});
document.getElementById("salvar-senha").addEventListener("click", function(){
  var senha = document.getElementById("senha").value;
  var nomeArquivo = "senha.txt";
  var tipoArquivo = "text/plain";
  var arquivo = new Blob([senha], {type: tipoArquivo});

  var linkDownload = document.createElement("a");
  linkDownload.href = URL.createObjectURL(arquivo);
  linkDownload.download = nomeArquivo;
  linkDownload.click();
})

//Limitar a 20 o tamanho da senha
var comprimentoInput = document.getElementById('comprimento');

comprimentoInput.addEventListener('change', function() {
  if (comprimentoInput.value > 20) {
    comprimentoInput.value = 20;
  }
});