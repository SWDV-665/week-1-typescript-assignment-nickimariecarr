var Grocery = /** @class */ (function () {
    function Grocery(name, sku, quantity, price, stock) {
        this.name = name;
        this.SKU = sku;
        this.quantity = quantity;
        this.price = price;
        this.stock = stock;
    }
    return Grocery;
}());
var groceryList = [
    new Grocery("Bread", "T6745", 1, 1.59, "In Stock"),
    new Grocery("Dozen Eggs", "R4582", 1, 1.89, "In Stock"),
    new Grocery("Flour", "O7742", 1, 2.79, "Out of Stock"),
    new Grocery("Milk", "W8321", 1, 2.69, "In Stock"),
    new Grocery("Butter", "E3475", 1, 2.99, "Out of Stock")
];
//HTML access application ID
var element = document.getElementById("application");
// creates a p element for every item that is listed, and append to HTML output page
groceryList.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = "Item: " + e.name + " ||  SKU: " + e.SKU + " ||  Qty:" + e.quantity + " ||  Price:$" + e.price + " || Stock:" + e.stock;
    element.appendChild(p);
});
