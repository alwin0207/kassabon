var productPc = 1;
var productInfo = {productNaam: "wasmiddel", productPrijs: 0.30};
var productInfoAlt = {productNaam: "koekje", productPrijs: 1.50};
var productInfoDrie ={productNaam: "pizza", productPrijs: 5.50};
var inkoopLijst = [];





function addToShoppingCart(aantal, product){
var totaalPrPrijs = aantal * product.productPrijs;
console.log(product.productNaam);
var tijdelijkProduct = {};
tijdelijkProduct.productNaam = product.productNaam;
tijdelijkProduct.productPrijs = product.productPrijs;
tijdelijkProduct.productPc = aantal;
tijdelijkProduct.totaalPrijs = totaalPrPrijs;
return inkoopLijst.push(tijdelijkProduct);

}

function addItem(){
var boodschapInput = document.getElementById("welkeBoodschap").value;
var hoeveelheidInput = document.getElementById("hoeveelBoodschap").value;
console.log(boodschapInput);

switch(boodschapInput){
case "wasmiddel":
	addToShoppingCart(hoeveelheidInput, productInfo);
	break;
case "koekje":
	addToShoppingCart(hoeveelheidInput, productInfoAlt);
  break;
case "pizza":
	addToShoppingCart(hoeveelheidInput, productInfoDrie);
  break;

}

console.log(inkoopLijst[0][0]);

var myTable = document.getElementById('deBoodschappenlijst').insertRow();
var cell = {};
var iOptions = ["productPc", "productNaam", "productPrijs", "totaalPrijs"];
for (i = 0; i<4; i++){
	cell[i] = myTable.insertCell(i);
  
  cell[i].innerHTML = inkoopLijst[inkoopLijst.length - 1][iOptions[i]];
}

}



