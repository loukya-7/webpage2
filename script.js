let selectedColor = 'red'; 
let selectedSize = 'Small'; 
let quantity = 1;

function selectColor(color) {
    selectedColor = color;
}

function selectSize(size) {
    selectedSize = size;
}


function addToCart() {
   
    let cartMessage = document.getElementById('cartMessage');
    cartMessage.innerText = `Embrace sideboard with color ${selectedColor} and size ${selectedSize} added to cart`;
}
function updatePercentOff() {
    var comparePrice = 12999.00; 
    var currentPrice = comparePrice;
    var quantity = parseInt(document.getElementById("quantitySelector").value);

    var percentOff = ((comparePrice - currentPrice) / comparePrice) * 100;
    percentOff = Math.round(percentOff);

    document.getElementById("percentOff").innerHTML = percentOff + "%";
  }
