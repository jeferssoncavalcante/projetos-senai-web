function verificarCPF(){
    var cpf 
    cpf = document.getElementById("txtCPF").value;
    var digito = cpf.charAt(10);
    var regiao = -1;
        switch (digito) {
            case "0":
            regiao =  "RS"
                break;
            case "1":
            regiao =  "DF, GO, MT, TO, MS"
                break;
            case "2":
            regiao =  "AM, PA, AP, RR, AC, RO"
                break;
            case "3":
            regiao =  "CE, MA, PI"
                break;
            case "4":
            regiao =  "PB, PE, AL, RN"
                break;
            case "5":
            regiao =  "BA, SE"
                break;
            case "6":
            regiao =  "MG"
                break;
            case "7":
            regiao =  "RJ, ES"
                break;
            case "8":
            regiao =  "SP"
                break;
            case "9":
            regiao =  "SC, PR"
                break;
            default:
                regiao = "Região é Invalida !"
    }
    alert(`O CPF ${cpf} Foi Emitido Em: ${regiao}`);
}
