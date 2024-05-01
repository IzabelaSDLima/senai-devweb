let listaVeiculos = [];

function salvar() {

    let placaVeiculo = document.getElementById("placaVeiculo").value
    let nomeProprietario = document.getElementById("nomeProprietario").value
    let numeroApto = document.getElementById('numeroApto').value
    let blocoApto = document.getElementById('blocoApto').value
    let modeloVeiculo = document.getElementById('modeloVeiculo').value
    let corVeiculo = document.getElementById('corVeiculo').value
    let numeroVaga = document.getElementById('numeroVaga').value

    alert('Cadastro realizado com sucesso!')

    const novoVeiculo = {
        placa: placaVeiculo,
        nome: nomeProprietario,
        numeroApto: numeroApto,
        blocoApto: blocoApto,
        modelo: modeloVeiculo,
        cor: corVeiculo,
        numeroVaga: numeroVaga
    }

    listaVeiculos.push(novoVeiculo);

    this.listar()
}

function listar() {
    console.clear()
    console.log("Lista de Veículos:");
    if (listaVeiculos.length === 0) {
        console.log("Não existem veículos cadastrados!")
        return;
    }

    listaVeiculos.forEach(function(veiculo, index) {
        console.log(`Veículo ${index + 1}:`);
        console.log("\tPlaca: " + veiculo.placa);
        console.log("\tProprietário: " + veiculo.nome);
        console.log("\tApartamento: " + veiculo.numeroApto);
        console.log("\tBloco: " + veiculo.blocoApto);
        console.log("\tModelo: " + veiculo.modelo);
        console.log("\tCor: " + veiculo.cor);
        console.log("\tVaga: " + veiculo.numeroVaga);
        console.log("-----------------------------------------------------------");
    });

}







