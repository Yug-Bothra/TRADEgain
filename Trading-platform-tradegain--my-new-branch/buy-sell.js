// Initial balance and holdings from localStorage or set default values
let balance = parseFloat(localStorage.getItem("balance")) || 100000;
let btcHoldings = parseFloat(localStorage.getItem("btcHoldings")) || 0;
let ethHoldings = parseFloat(localStorage.getItem("ethHoldings")) || 0;
let bnbHoldings = parseFloat(localStorage.getItem("bnbHoldings")) || 0;
let adaHoldings = parseFloat(localStorage.getItem("adaHoldings")) || 0;
let solHoldings = parseFloat(localStorage.getItem("solHoldings")) || 0;
let dotHoldings = parseFloat(localStorage.getItem("dotHoldings")) || 0;
let xrpHoldings = parseFloat(localStorage.getItem("xrpHoldings")) || 0;
let dogeHoldings = parseFloat(localStorage.getItem("dogeHoldings")) || 0;
let ltcHoldings = parseFloat(localStorage.getItem("ltcHoldings")) || 0;
let bananaHoldings = parseFloat(localStorage.getItem("bananaHoldings")) || 0;

// Get DOM elements for updating the balance and holdings
const balanceElement = document.getElementById("balance");
const btcTradeElement = document.getElementById("btc-trade");
const ethTradeElement = document.getElementById("eth-trade");
const bnbTradeElement = document.getElementById("bnb-trade");
const adaTradeElement = document.getElementById("ada-trade");
const solTradeElement = document.getElementById("sol-trade");
const dotTradeElement = document.getElementById("dot-trade");
const xrpTradeElement = document.getElementById("xrp-trade");
const dogeTradeElement = document.getElementById("doge-trade");
const ltcTradeElement = document.getElementById("ltc-trade");
const bananaTradeElement = document.getElementById("banana-trade");

// Display the current balance
balanceElement.innerText = balance.toFixed(2);

// Load existing order history from localStorage on page load
const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];
const orderHistoryTableBody = document.querySelector("#order-history-table tbody");

// Display existing orders with the newest first
orderHistory.reverse().forEach(order => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${order.time}</td>
        <td>${order.asset}</td>
        <td>${order.type}</td>
        <td>${order.quantity}</td>
        <td>$${parseFloat(order.price).toFixed(2)}</td>
        <td>$${parseFloat(order.totalAmount).toFixed(2)}</td>
    `;
    orderHistoryTableBody.prepend(row);
});

// Function to place an order
function placeOrder(asset) {
    const type = document.getElementById(`${asset}-type`).value;
    const quantity = parseFloat(document.getElementById(`${asset}-quantity`).value);
    // const tradeElement = asset === "btc" ? btcTradeElement : ethTradeElement:bnbTradeElement;
    // const tradeElement = asset === "btc" ? btcTradeElement : ethTradeElement;
    let tradeElement;

// if (asset === "btc") {
//     tradeElement = btcTradeElement;
// } else if (asset === "eth") {
//     tradeElement = ethTradeElement;
// } else if (asset === "bnb") {
//     tradeElement = bnbTradeElement;
// }else if (asset ==="ada"){
//     tradeElement = adaTradeElement;
// }else if (asset === "sol"){
//     tradeElement = solTradeElement;
// }else if (asset === "dot"){
//     tradeElement = dotTradeElement;
// }else if (asset === "xrp"){
//     tradeElement = xrpTradeElement;
// }else if (asset === "doge"){
//     tradeElement = dogeTradeElement;
// }else if (asset === "ltc"){
//     tradeElement = ltcTradeElement;
// }else if (asset === "banana"){
//     tradeElement = bananaTradeElement;
// }
const tradeElements = {
    btc: btcTradeElement,
    eth: ethTradeElement,
    bnb: bnbTradeElement,
    ada: adaTradeElement,
    sol: solTradeElement,
    dot: dotTradeElement,
    xrp: xrpTradeElement,
    doge: dogeTradeElement,
    ltc: ltcTradeElement,
    banana: bananaTradeElement
};

tradeElement = tradeElements[asset];


    const price = parseFloat(tradeElement.innerText);

    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    // let holdings = asset === "btc" ? btcHoldings : ethHoldings:bnbHoldings;
//     let holdings;

// if (asset === "btc") {
//     holdings = btcHoldings;
// } else if (asset === "eth") {
//     holdings = ethHoldings;
// } else if (asset === "bnb") {
//     holdings = bnbHoldings;
// } else if (asset === "ada"){
//     holdings = adaHoldings;
// } else if(asset === "sol"){
//     holdings = solHoldings;
// } else if(asset === "dot"){
//     holdings = dotHoldings;
// } else if(asset === "xrp"){
//     holdings = xrpHoldings;
// }else if(asset === "doge"){
//     holdings = dogeHoldings;
// }else if(asset === "ltc"){
//     holdings = ltcHoldings;
// }else if(asset === "banana"){
//     holdings = bananaHoldings;
// }
const holdingsMap = {
    btc: btcHoldings,
    eth: ethHoldings,
    bnb: bnbHoldings,
    ada: adaHoldings,
    sol: solHoldings,
    dot: dotHoldings,
    xrp: xrpHoldings,
    doge: dogeHoldings,
    ltc: ltcHoldings,
    banana: bananaHoldings
};

holdings = holdingsMap[asset];


    const totalAmount = quantity * price;

    if (type === "buy") {
        if (totalAmount > balance) {
            alert("Insufficient balance.");
            return;
        }
        balance -= totalAmount;
        holdings += quantity;
    } 
    else {
        if (quantity > holdings) {
            // alert(`Insufficient ${asset === 'btc' ? 'Bitcoin' : 'Ethereum'} holdings.`);
            // alert(`Insufficient ${asset === 'btc' ? 'Bitcoin' : (asset === 'eth' ? 'Ethereum' : 'BNB')} holdings.`);
            if(asset === 'btc'){
                alert("insufficietnt amount")
            }

            return;
        }
        balance += totalAmount;
        holdings -= quantity;
    }

    if (asset === "btc") {
        btcHoldings = holdings;
        localStorage.setItem("btcHoldings", btcHoldings.toFixed(8));
    } else if (asset === "eth") {
        ethHoldings = holdings;
        localStorage.setItem("ethHoldings", ethHoldings.toFixed(8));
    } else if (asset=== "bnb"){
        bnbHoldings = holdings;
        localStorage.setItem("bnbHoldings", bnbHoldings.toFixed(8));
    }else if(asset === 'ada'){
        adaHoldings = holdings;
        localStorage.setItem("adaHoldings", adaHoldings.toFixed(8));
    }else if(asset === 'sol'){
        solHoldings = holdings;
        localStorage.setItem("solHoldings", solHoldings.toFixed(8));
    }else if(asset === 'dot'){
        dotHoldings = holdings;
        localStorage.setItem("dotHoldings", dotHoldings.toFixed(8));
    }else if(asset === 'xrp'){
        xrpHoldings = holdings;
        localStorage.setItem("xrpHoldings", xrpHoldings.toFixed(8));
    }else if(asset === 'doge'){
        dogeHoldings = holdings;
        localStorage.setItem("dogeHoldings", dogeHoldings.toFixed(8));
    }else if(asset === 'ltc'){
        ltcHoldings = holdings;
        localStorage.setItem("ltcHoldings", ltcHoldings.toFixed(8));
    }else if(asset === 'banana'){
        bananaHoldings = holdings;
        localStorage.setItem("bananaHoldings", bananaHoldings.toFixed(8));
    }


    // const holdingsMap = {
    //     btc: "btcHoldings",
    //     eth: "ethHoldings",
    //     bnb: "bnbHoldings",
    //     ada: "adaHoldings",
    //     sol: "solHoldings",
    //     dot: "dotHoldings",
    //     xrp: "xrpHoldings",
    //     doge: "dogeHoldings",
    //     ltc: "ltcHoldings",
    //     banana: "bananaHoldings"
    // };
    
    window[holdingsMap[asset]] = holdings;
    localStorage.setItem(holdingsMap[asset], holdings.toFixed(8));
    
    

    localStorage.setItem("balance", balance.toFixed(2));
    balanceElement.innerText = balance.toFixed(2);

    // addOrderToHistory(type, asset === "btc" ? "Bitcoin" : "Ethereum":"BNB", quantity, price, totalAmount);
    addOrderToHistory(type, asset === "btc" ? "Bitcoin" : asset === "eth" ? "Ethereum" : asset ==="bnb" ? "binanceCoin" : asset === "ada" ? "cardona" :  asset === "sol" ? "Solana" :  asset === "dot" ? "Polkadot" :  asset === "xrp" ? "xrp" : asset === "doge" ? "dogecoin" : asset === "ltc" ? "litecoin" : "banana", quantity, price, totalAmount);

}

// Function to add the order to the order history table
function addOrderToHistory(type, asset, quantity, price, totalAmount) {
    const row = document.createElement("tr");
    const time = new Date().toLocaleTimeString();

    row.innerHTML = `
        <td>${time}</td>
        <td>${asset}</td>
        <td>${type.charAt(0).toUpperCase() + type.slice(1)}</td>
        <td>${quantity}</td>
        <td>$${price.toFixed(2)}</td>
        <td>$${totalAmount.toFixed(2)}</td>
    `;
    orderHistoryTableBody.prepend(row);

    orderHistory.unshift({ time, asset, type, quantity, price, totalAmount });
    localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
}

// WebSocket connection for live Bitcoin and Ethereum prices
const btcWs = new WebSocket("wss://fstream.binance.com/ws/btcusdt@trade");
const ethWs = new WebSocket("wss://fstream.binance.com/ws/ethusdt@trade");
const bnbWs = new WebSocket("wss://fstream.binance.com/ws/bnbusdt@trade");
const adaWs = new WebSocket("wss://fstream.binance.com/ws/adausdt@trade");
const solWs = new WebSocket("wss://fstream.binance.com/ws/solusdt@trade");
const dotWs = new WebSocket("wss://fstream.binance.com/ws/dotusdt@trade");
const xrpWs = new WebSocket("wss://fstream.binance.com/ws/xrpusdt@trade");
const dogeWs = new WebSocket("wss://fstream.binance.com/ws/dogeusdt@trade");
const ltcWs = new WebSocket("wss://fstream.binance.com/ws/ltcusdt@trade");
const bananaWs = new WebSocket("wss://fstream.binance.com/ws/bananausdt@trade");

let oldBtcPrice = 0;
let oldEthPrice = 0;
let oldbnbPrice = 0;
let oldadaPrice = 0;
let oldsolPrice = 0;
let olddotPrice = 0;
let oldxrpPrice = 0;
let olddogePrice = 0;
let oldltcPrice = 0;
let oldbananaPrice = 0;

btcWs.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const price = parseFloat(data.p);
    btcTradeElement.style.color = price > oldBtcPrice ? "green" : price < oldBtcPrice ? "red" : "white";
    oldBtcPrice = price;
    btcTradeElement.innerText = price.toFixed(2);
};

ethWs.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const price = parseFloat(data.p);
    ethTradeElement.style.color = price > oldEthPrice ? "green" : price < oldEthPrice ? "red" : "white";
    oldEthPrice = price;
    ethTradeElement.innerText = price.toFixed(2);
};

bnbWs.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const price = parseFloat(data.p);
    bnbTradeElement.style.color = price > oldEthPrice ? "green" : price < oldbnbPrice ? "red" : "white";
    oldbnbPrice = price;
    bnbTradeElement.innerText = price.toFixed(2);
};
adaWs.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const price = parseFloat(data.p);
    adaTradeElement.style.color = price > oldadaPrice ? "green" : price < oldadaPrice ? "red" : "white";
    oldadaPrice = price;
    adaTradeElement.innerText = price.toFixed(2);
};
solWs.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const price = parseFloat(data.p);
    solTradeElement.style.color = price > oldsolPrice ? "green" : price < oldsolPrice ? "red" : "white";
    oldsolPrice = price;
    solTradeElement.innerText = price.toFixed(2);
};
dotWs.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const price = parseFloat(data.p);
    dotTradeElement.style.color = price > olddotPrice ? "green" : price < olddotPrice ? "red" : "white";
    olddotPrice = price;
    dotTradeElement.innerText = price.toFixed(2);
};
xrpWs.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const price = parseFloat(data.p);
    xrpTradeElement.style.color = price > oldxrpPrice ? "green" : price < oldxrpPrice ? "red" : "white";
    oldxrpPrice = price;
    xrpTradeElement.innerText = price.toFixed(2);
};
dogeWs.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const price = parseFloat(data.p);
    dogeTradeElement.style.color = price > olddogePrice ? "green" : price < olddogePrice ? "red" : "white";
    olddogePrice = price;
    dogeTradeElement.innerText = price.toFixed(2);
};
ltcWs.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const price = parseFloat(data.p);
    ltcTradeElement.style.color = price > oldltcPrice ? "green" : price < oldltcPrice ? "red" : "white";
    oldltcPrice = price;
    ltcTradeElement.innerText = price.toFixed(2);
};
bananaWs.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const price = parseFloat(data.p);
    bananaTradeElement.style.color = price > oldbananaPrice ? "green" : price < oldbananaPrice ? "red" : "white";
    oldbananaPrice = price;
    bananaTradeElement.innerText = price.toFixed(2);
};
