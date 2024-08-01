// BLOCO PARA VALIDAÇÃO DE EMAIL
// ------------------------------------
function checarEmail(){
    if(document.forms[0].email.value == "" ||
       document.forms[0].email.value.indexOf('@') == -1 ||
       document.forms[0].email.value.indexOf('.') == -1)
        {
         alert("Por favor, informe um email valido");
         return false;
    }else{
         alert("email informado com sucesso!");
    }
}



//---------------------------------------



// CODIGO DE VERIFICAÇÃO DE EMAIL DIGITADO 
//-----------------------------------------


// ----------------------------------------