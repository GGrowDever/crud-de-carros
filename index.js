const veiculos = [];
let id = 1;

const cadastrarVeiculo = () => {
	let carro = {
		id: id,
		modelo: prompt('Digite o modelo do seu carro'),
		marca: prompt('Digite a marca do seu carro'),
		ano: prompt('Digite o ano do seu carro'),
		cor: prompt('Digite a cor do seu carro'),
		preco: prompt('Digite seu preco do seu carro'),
	};
	veiculos.push(carro);
	id++;
};

function listar(array) {
	array.forEach((veiculo) => {
		console.log(
			`ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Marca: ${veiculo.marca} | Ano: ${veiculo.ano} | Cor: ${veiculo.cor} | Preço: ${veiculo.preco}`
		);
	});
}

function separarPorMarca() {
	const escolheMarca = prompt('Digite a marca que deseja filtrar:');
	return veiculos.filter((veiculo) => veiculo.marca === escolheMarca);
}

function atualizarVeiculo() {
	const idCarro = parseInt(prompt('digite o id do veiculo a ser atualizado'));
	const posicao = veiculos.findIndex((identificador) => identificador.id === idCarro);
	if (posicao === -1) {
		console.log('Veículo, não encontrado. O usuário deve voltar para o menu inicial depois');
		return;
	}

	const novaCor = prompt('digite a nova cor');
	if (novaCor != undefined) {
		veiculos[posicao].cor = novaCor;
	}

	const novoPreco = parseFloat(prompt('digite o novo preco'));
	if (novoPreco != undefined && novoPreco >= 0) {
		veiculos[posicao].preco = novoPreco;
	}
}


function removerVeiculo() {
	const idCarro = parseInt(prompt('digite o id do veiculo a ser atualizado'));
	const posicao = veiculos.findIndex((identificador) => identificador.id === idCarro);
	if (posicao === -1) {
		console.log('Veículo, não encontrado. O usuário deve voltar para o menu inicial depois');
		return;
	}

	veiculos.splice(posicao, 1);
}

function inicioCodigo() {
	let opcao = 0;
	do {
		alert(`Bem-vindo ao sistema de CRUD de veículos:

No momento, o sistema tem ${veiculos.length} carros cadastrados

Escolha uma das opções para interagir com o sistema:`);

		opcao = Number(
			prompt(
				`digite a opcao desejada:
      1 - Incluir
      2 - Listar
      3 - Filtrar por Marca
      4 - Atualizar veiculo
      5 - Remover veiculo
      6 - Sair do sistema`
			)
		);

		if (opcao === 1) {
			cadastrarVeiculo();
			console.log(veiculos);
		} else if (opcao === 2) {
			listar(veiculos);
		} else if (opcao === 3) {
			listar(separarPorMarca());
		} else if (opcao === 4) {
			atualizarVeiculo();
		} else if (opcao === 5) {
			removerVeiculo();
		}
	} while (opcao !== 6);
}

inicioCodigo();
