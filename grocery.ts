class Grocery{
    name: string;
    SKU: string;
    quantity: number;
    price: number;
    stock: string;

    constructor(name:string, sku:string, quantity:number,price:number,stock:string){
        this.name=name;
        this.SKU=sku;
        this.quantity=quantity;
        this.price=price;
        this.stock=stock;
    }
}

let groceryList=[
    new Grocery("Bread","T6745", 1, 1.59,"In Stock"),
    new Grocery("Dozen Eggs","R4582",1,1.89,"In Stock"),
    new Grocery("Flour","O7742",1,2.79,"Out of Stock"),
    new Grocery("Milk","W8321",1,2.69,"In Stock"),
    new Grocery("Butter","E3475",1,2.99,"Out of Stock")

]