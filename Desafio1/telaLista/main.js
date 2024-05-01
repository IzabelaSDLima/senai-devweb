class Veiculo {

    constructor(placaVeiculo, nomeProprietario, numeroApto, blocoApto, modeloVeiculo, corVeiculo, numeroVaga) {
        this.placaVeiculo = placaVeiculo;
        this.nomeProprietario = nomeProprietario;
        this.numeroApto = numeroApto;
        this.blocoApto = blocoApto;
        this.modeloVeiculo = modeloVeiculo;
        this.corVeiculo = corVeiculo;
        this.numeroVaga = numeroVaga;
        this.arrayVeiculos = [];
    }

    adicionar(veiculo) {
        this.arrayVeiculos.push(veiculo);
    }

    listaVeiculos() {
        let tbody = window.document.getElementById("tbody")

        tbody.innerText = ""

        for (let i = 0; i < this.arrayVeiculos.length; i++) {
            let veiculo = this.arrayVeiculos[i];

            let tr = document.createElement("tr");

            let td_placaVeiculo = tr.insertCell();
            td_placaVeiculo.textContent = veiculo.placaVeiculo;
            let td_nomeProprietario = tr.insertCell();
            td_nomeProprietario.textContent = veiculo.nomeProprietario;
            let td_numeroApto = tr.insertCell();
            td_numeroApto.textContent = veiculo.numeroApto;
            let td_blocoApto = tr.insertCell();
            td_blocoApto.textContent = veiculo.blocoApto;
            let td_modeloVeiculo = tr.insertCell();
            td_modeloVeiculo.textContent = veiculo.modeloVeiculo;
            let td_corVeiculo = tr.insertCell();
            td_corVeiculo.textContent = veiculo.corVeiculo;
            let td_numeroVaga = tr.insertCell();
            td_numeroVaga.textContent = veiculo.numeroVaga;

            let td_deletarItem = tr.insertCell()
            let iconTrash = document.createElement('i');
            iconTrash.className = 'fas fa-trash-alt deleteBtn';
            iconTrash.onclick = () => {
                this.arrayVeiculos.splice(i, 1);
                this.listaVeiculos();
            }

            td_deletarItem.appendChild(iconTrash);

            tbody.appendChild(tr)
        }
    }
}

var veiculo = new Veiculo();

veiculo.adicionar({
    placaVeiculo: "MNM2356",
    nomeProprietario: "Maria",
    numeroApto: 204,
    blocoApto: "B",
    modeloVeiculo: "Gol",
    corVeiculo: "Branco",
    numeroVaga: 2,

});

veiculo.adicionar({
    placaVeiculo: "ABC1234",
    nomeProprietario: "João",
    numeroApto: 301,
    blocoApto: "C",
    modeloVeiculo: "Fiesta",
    corVeiculo: "Preto",
    numeroVaga: 5,
});






