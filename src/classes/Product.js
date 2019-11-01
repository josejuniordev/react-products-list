export default class Product {
  constructor(
    data
  ) {
    this.shortDescription = data.decricaoCurta;
    this.longDescription = data.descricaoLonga;
    this.exclusive = data.exclusivo;
    this.datasheet = data.fichaTecnica;
    this.id = data.id || +new Date();
    this.imageUrl = data.imagem;
    this.name = data.nome;
    this.onSale = data.promocao;
    this.amount = data.valor;
  }

}
