import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
private products: Product[] = [
    new Product(1, "Tênis", "Category 1", "Tênis de Corrida Nike", 120,"https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/c68970dc89ee4217beb3a83a01259c66_9366/Tenis_X_PLR_Preto_CQ2405_01_standard.jpg"),
    new Product(2, "Remo", "Category 1", "Remo de Canoagem", 300,"https://www.casasbahia-imagens.com.br/EsporteLazer/Camping/canoagem/12713129/951647969/remo-de-aluminio-preto-3-secoes-180-metros-439010-ntk-12713129.jpg"),
    new Product(3, "Camisa 1", "Category 1", "Camisa do São Paulo,melhor time do Brasil", 90,"https://static.saopaulomania.com.br/produtos/camisa-sao-paulo-i-1920-sn-torcedor-adidas-masculina/24/COL-5660-024/COL-5660-024_zoom1.jpg"),
    new Product(4, "Bola de Futebol", "Category 1", "Bola de Futebol", 59,"http://s2.glbimg.com/7dzisN-U42ChaQeJA8HPH9F8L4sp0re7dXrg1kCDpXpIoz-HdGixxa_8qOZvMp3w/s.glbimg.com/es/ge/f/original/2012/08/12/jabu.jpg"),
    new Product(5, "Frisbe", "Category 1", "Frisbe", 30, "https://cdn2.bigcommerce.com/server100/yt68tfv9/products/4101/images/18396/bw-speedyhorseshoe-2__61580.1502572729.1280.1280.jpg?c=2"),
    new Product(6, "Mochila", "Category 2", "Mochila Radical", 100, "https://static.netshoes.com.br/produtos/mochila-adidas-clas-bp-bos/28/COL-4407-028/COL-4407-028_zoom1.jpg"),
    new Product(7, "Boné", "Category 2", "Boné Aba Reta", 50, "https://gaston.vteximg.com.br/arquivos/ids/263358-420-420/2001054863_Ampliada.jpg?v=636957638045400000"),
    new Product(8, "Camisa 2", "Category 2", "Camisa Flamengo", 150, "https://static.netshoes.com.br/produtos/camisa-flamengo-i-1920-sn-torcedor-c-patrocinio-adidas-masculina/68/COL-7378-068/COL-7378-068_zoom1.jpg"),
    new Product(9, "Bola de Vôlei", "Category 2", "Bola de Vôlei", 70, "https://static3.tcdn.com.br/img/img_prod/311840/bola_volei_mikasa_mva330_24608_1_20190531111514.jpg"),
    new Product(10, "Bermuda de Corrida", "Category 2", "Bermuda Nike", 70,"https://static.netshoes.com.br/produtos/bermuda-nike-dri-fit-run-7-masculino/06/HZM-0709-006/HZM-0709-006_zoom1.jpg"),
    new Product(11, "Suplemento", "Category 3", "Whey Protein Plus Ultra++", 60, "https://static.netshoes.com.br/produtos/whey-protein-100-pure-whey-900g-probiotica/62/168-9257-962/168-9257-962_zoom1.jpg"),
    new Product(12, "Luva", "Category 3", "Luva para Bicicletas", 25,"https://a-static.mlcdn.com.br/618x463/luva-bike-antishock-gel-cycle-poker/rythmoon/8604-8711-8097/18be07a0fbf3150ede9cd86de0534e7c.jpg"),
    new Product(13, "Óculos ", "Category 3", "Óculos para natação", 20, "https://www.casadoatletafitness.com.br/437-large_default/oculos-natacao-latitude-100-silicone-hammerhead.jpg"),
    new Product(14, "Kimono", "Category 3", "Kimono Judoh", 250, "https://www.bushidoyama.com.br/produtos/kimono%20essimo%203.jpg"),
    new Product(15, "Luva 2", "Category 3", "Luva de Boxe", 50, "https://static.netshoes.com.br/produtos/luva-boxemuay-thai-everlast-pro-style-elite-12-oz/64/AXB-1246-064/AXB-1246-064_zoom1.jpg"),
    ];
    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }
}
