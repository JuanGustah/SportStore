import{ Injectable } from '@angular/core';
import{ Product } from './product.model';
import{ StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository{
    private products:Product[]=[];
    private categories:string[]=[];

    constructor(private dataSource:StaticDataSource){
        dataSource.getProducts().subscribe(data=>{
            this.products=data;
            this.categories=data.map(p=>p.category).filter((c,index,array)=>array.indexOf(c)==index).sort();
        });
    }
    getProducts(category:string=null,nome:string=null):Product[] {
        return this.products.filter(p=>category==null||category==p.category);
    }
    getProduct(id:number):Product{
        return this.products.find(p=>p.id==id);
    }
    getCategories():string[]{
        return this.categories
    }   
    getProductsPesquisados(nome:string){
        this.products=this.products.filter(function(category){
            return category.name.toLowerCase().indexOf(nome.toLowerCase()) > -1;})
    }
}