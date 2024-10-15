const form = document.getElementById('form-deposito')
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEvalido = false;


function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit' , function(e){
 e.preventDefault();

const numeroContaBeneficiario = document.getElementById('numero-conta');
const valorDeposito = document.getElementById('valor-deposito');
const descricao = document.getElementById('descricao');
const mensagemSucesso = `Montante de: <b>R$${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta <b>${numeroContaBeneficiario.value}</b>`;

formEvalido = validaNome(nomeBeneficiario.value)



if (formEvalido){

const containerMensagemSucesso = document.querySelector('.sucess-message')
containerMensagemSucesso.innerHTML = mensagemSucesso;
containerMensagemSucesso.style.display = 'block';


nomeBeneficiario.value = '';
numeroContaBeneficiario.value = '';
valorDeposito.value = '';
descricao.value = '';
}
 else {
    nomeBeneficiario.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
}
})

nomeBeneficiario.addEventListener('keyup' , function(e){
console.log(e.target.value);
formEvalido = validaNome(e.target.value);
if (!formEvalido){
    nomeBeneficiario.classList.add('error');
    //nomeBeneficiario.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';  
}
else{
    nomeBeneficiario.classList.remove('error');
        
        document.querySelector('.error-message').style.display = 'none';


    }
}
);

