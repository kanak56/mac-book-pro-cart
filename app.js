// memory selector event handler
function memoryPrice(memory2) {
    const bestPriceText = document.getElementById('best-price');
    const bestPrice = parseInt(bestPriceText.innerText);
    const extraStorageText = document.getElementById('extra-storage-cost').innerText;
    const extraStorageCost = parseInt(extraStorageText);
    const deliveryText = document.getElementById('delivery-cost').innerText;
    const deliveryCost = parseInt(deliveryText);

    if (memory2 == true) {
        const memoryCost = document.getElementById('extra-memory-cost');
        memoryCost.innerText = 100;
        const subTotal = document.getElementById('sub-total');
        subTotal.innerText = bestPrice + extraStorageCost + deliveryCost + 100;
        // This is extra part
        const totalCost = document.getElementById('total');
        totalCost.innerText = bestPrice + extraStorageCost + deliveryCost + 100;
    }
    else {
        const memoryCost = document.getElementById('extra-memory-cost');
        memoryCost.innerText = 0;
        const subTotal = document.getElementById('sub-total');
        subTotal.innerText = bestPrice + extraStorageCost + deliveryCost + 0;
        // This is extra part
        const totalCost = document.getElementById('total');
        totalCost.innerText = bestPrice + extraStorageCost + deliveryCost + 0;
    }
}
document.getElementById('memory-selector1').addEventListener('click', function () {
    memoryPrice(false);
})
document.getElementById('memory-selector2').addEventListener('click', function () {
    memoryPrice(true);
})


// storage slector event handler
function storagePrice(price) {
    const bestPriceText = document.getElementById('best-price');
    const bestPrice = parseInt(bestPriceText.innerText);
    const memoryText = document.getElementById('extra-memory-cost').innerText;
    const memoryCost = parseInt(memoryText);
    const deliveryText = document.getElementById('delivery-cost').innerText;
    const deliveryCost = parseInt(deliveryText);
    if (price == 3) {
        const price = 180;
        const StorageCost = document.getElementById('extra-storage-cost')
        StorageCost.innerText = price;
        const subTotal = document.getElementById('sub-total');
        subTotal.innerText = bestPrice + memoryCost + deliveryCost + price;
        // This is extra part
        const totalCost = document.getElementById('total');
        totalCost.innerText = bestPrice + memoryCost + deliveryCost + price;

    }
    else if (price == 2) {
        const price = 100;
        const StorageCost = document.getElementById('extra-storage-cost')
        StorageCost.innerText = price;
        const subTotal = document.getElementById('sub-total');
        subTotal.innerText = bestPrice + memoryCost + deliveryCost + price;
        // This is extra part
        const totalCost = document.getElementById('total');
        totalCost.innerText = bestPrice + memoryCost + deliveryCost + price;
    }
    else {
        const price = 0;
        const StorageCost = document.getElementById('extra-storage-cost')
        StorageCost.innerText = price;
        const subTotal = document.getElementById('sub-total');
        subTotal.innerText = bestPrice + memoryCost + deliveryCost + price;
        // This is extra part
        const totalCost = document.getElementById('total');
        totalCost.innerText = bestPrice + memoryCost + deliveryCost + price;
    }
}
document.getElementById('storage-selector1').addEventListener('click', function () {
    storagePrice(1);
})
document.getElementById('storage-selector2').addEventListener('click', function () {
    storagePrice(2);
})

document.getElementById('storage-selector3').addEventListener('click', function () {
    storagePrice(3);
})


// delivery charge event handler
function deliveryPrice(isFree) {
    const bestPriceText = document.getElementById('best-price');
    const bestPrice = parseInt(bestPriceText.innerText);
    const memoryText = document.getElementById('extra-memory-cost').innerText;
    const memoryCost = parseInt(memoryText);
    const storageText = document.getElementById('extra-storage-cost').innerText;
    const storageCost = parseInt(storageText);
    if (isFree == true) {
        const price = 0;
        const deliveryCost = document.getElementById('delivery-cost');
        deliveryCost.innerText = price;
        const subTotal = document.getElementById('sub-total');
        subTotal.innerText = bestPrice + memoryCost + storageCost + price;
        // This is extra part
        const totalCost = document.getElementById('total');
        totalCost.innerText = bestPrice + memoryCost + storageCost + price;

    }
    else {
        const price = 20;
        const deliveryCost = document.getElementById('delivery-cost');
        deliveryCost.innerText = price;
        const subTotal = document.getElementById('sub-total');
        subTotal.innerText = bestPrice + memoryCost + storageCost + price;
        // This is extra part
        const totalCost = document.getElementById('total');
        totalCost.innerText = bestPrice + memoryCost + storageCost + price;
    }
}
document.getElementById('delivery-selector1').addEventListener('click', function () {
    deliveryPrice(true)
})
document.getElementById('delivery-selector2').addEventListener('click', function () {
    deliveryPrice(false)
})


// This is extra section
// promo code submit event handler

document.getElementById('promo-submit').addEventListener('click', function () {
    const bestPriceText = document.getElementById('best-price');
    const bestPrice = parseInt(bestPriceText.innerText);
    const extraStorageText = document.getElementById('extra-storage-cost').innerText;
    const storageCost = parseInt(extraStorageText);
    const deliveryText = document.getElementById('delivery-cost').innerText;
    const memoryText = document.getElementById('extra-memory-cost').innerText;
    const memoryCost = parseInt(memoryText);
    const deliveryCost = parseInt(deliveryText);
    const discountText = document.getElementById('promo-input').value;
    const totalCostWithoutDiscount = bestPrice + memoryCost + storageCost + deliveryCost;
    const discountedPrice = parseFloat(totalCostWithoutDiscount) * 0.20;

    if (discountText == 'stevekaku') {
        const totalCost = document.getElementById('total').innerText;
        total.innerText = parseFloat(totalCostWithoutDiscount) - discountedPrice;
    }
    else {
        totalAmount = bestPrice + memoryCost + storageCost + deliveryCost;
    }
})