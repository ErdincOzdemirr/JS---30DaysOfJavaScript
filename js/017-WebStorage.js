// // by Erdinç Özdemir
// localStorage.setItem("name", "Erdinc");

// console.log(localStorage);
// // console.log(localStorage.name); bu kullanılabilir ama genelde get item kullanılır
// console.log(localStorage.getItem("name"));
// console.log(localStorage.key(0)); //localStorage deki 0.keyi gösterir.
// localStorage.removeItem("name"); //removeitem local storage deki bilgiyi siler.

// console.log(localStorage);

// const names = ["erdinc", "hava", "ezgi"];
// localStorage.setItem("names", names);
// console.log(localStorage);

// const user = {
//   name: "ismail",
//   surname: "sevgili",
// };
// localStorage.setItem("user", JSON.stringify(user));
// console.log(localStorage);
// console.log(localStorage.user);
// // user objesi konsol da object diye görünür. Çünkü string değildir. Bu nedenle JSON.stringfy() ile string bir ifadeye döndürülür. Çünkü LocalStorage ve sessionStorage string olarak key value tutar

// console.log(typeof localStorage.user);

// console.log(JSON.parse(localStorage.getItem("user")));

// Alışveriş sepeti örneği

// let basket = JSON.parse(localStorage.getItem("basket")) || [];
// const products = [
//   {
//     id: 1,
//     title: "MacBook Pro 2023",
//     price: "50000",
//   },
//   {
//     id: 2,
//     title: "Logitech Klavye Set",
//     price: "500",
//   },
// ];

// function saveToStorage() {
//   localStorage.setItem("basket", JSON.stringify(basket));
// }

// function addBasket(productID) {
//   basket.push(productID);
//   saveToStorage();
// }

// function removeBasket(productID) {
//   basket = basket.filter((id) => id !== productID);
//   saveToStorage();
// }

// function totalPrice() {
//   return basket.reduce((prev, productID) => {
//     const product = products.find((p) => p.id === productID);
//     return (prev += product.price);
//   });
// }
// addBasket(1);
// addBasket(2);

// console.log(basket);
// console.log(totalPrice());

localStorage.clear();
// ALIŞVERİŞ LİSTESİ
// Ürünler ve stok bilgisi
let products = JSON.parse(localStorage.getItem('products')) || {};
let totalStock = JSON.parse(localStorage.getItem('totalStock')) || 0;
let totalCost = JSON.parse(localStorage.getItem('totalCost')) || 0;
let totalRevenue = JSON.parse(localStorage.getItem('totalRevenue')) || 0;
let sales = JSON.parse(localStorage.getItem('sales')) || [];

// Ürün satın alma fonksiyonu
function buyProduct() {
    const productName = document.getElementById('buy-product-name').value;
    const quantity = parseInt(document.getElementById('buy-quantity').value);
    const price = parseFloat(document.getElementById('buy-price').value);

    if (!productName || isNaN(quantity) || quantity <= 0 || isNaN(price) || price <= 0) {
        alert('Geçersiz giriş!');
        return;
    }

    if (products[productName]) {
        products[productName].stock += quantity;
        products[productName].price = price;
    } else {
        products[productName] = {
            stock: quantity,
            price: price
        };
    }

    totalStock += quantity;
    totalCost += quantity * price;
    updateUI();
    updateLocalStorage();
}

// Ürün satışı fonksiyonu
function sellProduct() {
    const productName = document.getElementById('sell-product-name').value;
    const quantity = parseInt(document.getElementById('sell-quantity').value);
    const unitSellPrice = parseFloat(document.getElementById('sell-unit-price').value);

    if (!productName || isNaN(quantity) || quantity <= 0 || isNaN(unitSellPrice) || unitSellPrice <= 0) {
        alert('Geçersiz giriş!');
        return;
    }

    if (products[productName] && products[productName].stock >= quantity) {
        products[productName].stock -= quantity;
        totalStock -= quantity;
        totalRevenue += quantity * unitSellPrice;
        // Satış kaydını ekle
        sales.push({
            productName: productName,
            quantity: quantity,
            unitSellPrice: unitSellPrice
        });
        updateUI();
        updateLocalStorage();
    } else {
        alert('Ürün stokta yeterli değil!');
    }
}

// Arayüzü güncelleyen fonksiyon
function updateUI() {
    const productList = document.getElementById('product-list');
    const totalStockElement = document.getElementById('total-stock');
    const totalCostElement = document.getElementById('total-cost');
    const totalRevenueElement = document.getElementById('total-revenue');
    const profitLossElement = document.getElementById('profit-loss');
    const salesList = document.getElementById('sales-list');
    const sellProductNameSelect = document.getElementById('sell-product-name');

    productList.innerHTML = '';
    salesList.innerHTML = '';
    sellProductNameSelect.innerHTML = '';

    for (const productName in products) {
        const listItem = document.createElement('li');
        listItem.textContent = `${productName} - Stok: ${products[productName].stock} - Birim Fiyat: ${products[productName].price}`;
        productList.appendChild(listItem);

        // Satış bölümü için ürünleri ekle
        const option = document.createElement('option');
        option.value = productName;
        option.textContent = productName;
        sellProductNameSelect.appendChild(option);
    }

    for (const sale of sales) {
        const saleItem = document.createElement('li');
        saleItem.textContent = `${sale.productName} - Satılan Miktar: ${sale.quantity} - Birim Satış Fiyatı: ${sale.unitSellPrice}`;
        salesList.appendChild(saleItem);
    }

    totalStockElement.textContent = totalStock;
    totalCostElement.textContent = totalCost.toFixed(2);
    totalRevenueElement.textContent = totalRevenue.toFixed(2);
    const profitLoss = totalRevenue - totalCost;
    profitLossElement.textContent = profitLoss.toFixed(2);
}

// Local storage güncellemesi
function updateLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('totalStock', JSON.stringify(totalStock));
    localStorage.setItem('totalCost', JSON.stringify(totalCost));
    localStorage.setItem('totalRevenue', JSON.stringify(totalRevenue));
    localStorage.setItem('sales', JSON.stringify(sales));
}

// Sayfa yüklendiğinde UI'ı güncelle
updateUI();