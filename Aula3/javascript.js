var dados
function carregaJSON(filename) {
    fetch(`${filename}`)
    .then(response => response.json())
    .then(data => {console.log(data);
    dados = data})
    .catch(error => console.error(error));
}
function atualizaTabela(Produtos, Preços) {
    document.getElementById("tabela-produtos").lastElementChild.innerHTML += `<tr><td>${Produtos}</td><td class="cd">${Preços}</td></tr>`;
    atualizaFeedback();
}
function atualizaFeedback(){
    document.getElementById("feedback").textContent = `${document.getElementById("tabela-produtos").lastElementChild.childElementCount}`;
}
function listaDados(){
    //Se dados são Arrays, podemos iterar com ForEach
    if(Array.isArray(dados)){
        dados.forEach(element => {
            console.log(`${element}`)
        });
    }
    //console.log(typeof(dados))
    if (typeof(dados) === "object"){
        //Se o formato for JSON exiba em texto (string)
        console.log(JSON.stringify(dados))
    }
}
/*carregaJSON('produtos.json');
function fazTudo(){
    atualizaTabela(dados.Produtos, dados.Preços);
}*/
carregaJSON('lista-de-items.json')
function fazTudo(){
    for (i = 0; i <= 50; i++) {
        atualizaTabela(dados[i].product, dados[i].price)
    }
    
}