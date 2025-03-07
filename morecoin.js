document.addEventListener('DOMContentLoaded', () => {
  const cryptoContainer = document.getElementById('crypto-container');
  const chartModal = document.getElementById('chartModal');
  const closeModal = document.getElementById('closeModal');

  // Expanded array of sample coins with logos
  const coins = [
    { symbol: 'BTCUSDT', name: 'Bitcoin', logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png', prevPrice: null },
    { symbol: 'ETHUSDT', name: 'Ethereum', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png', prevPrice: null },
    { symbol: 'BNBUSDT', name: 'Binance Coin', logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png', prevPrice: null },
    { symbol: 'XRPUSDT', name: 'XRP', logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.png', prevPrice: null },
    { symbol: 'LTCUSDT', name: 'Litecoin', logo: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png', prevPrice: null },
    { symbol: 'DOGEUSDT', name: 'Dogecoin', logo: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png', prevPrice: null },
    { symbol: 'ADAUSDT', name: 'Cardano', logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png', prevPrice: null },
    { symbol: 'SOLUSDT', name: 'Solana', logo: 'https://cryptologos.cc/logos/solana-sol-logo.png', prevPrice: null },
    { symbol: 'DOTUSDT', name: 'Polkadot', logo: 'https://cryptologos.cc/logos/polkadot-dot-logo.png', prevPrice: null },
    { symbol: 'LINKUSDT', name: 'Chainlink', logo: 'https://cryptologos.cc/logos/chainlink-link-logo.png', prevPrice: null },
    { symbol: 'MATICUSDT', name: 'Polygon', logo: 'https://cryptologos.cc/logos/polygon-matic-logo.png', prevPrice: null },
    { symbol: 'SHIBUSDT', name: 'Shiba Inu', logo: 'https://cryptologos.cc/logos/shiba-inu-shib-logo.png', prevPrice: null },
    { symbol: 'TRXUSDT', name: 'TRON', logo: 'https://cryptologos.cc/logos/tron-trx-logo.png', prevPrice: null },
    { symbol: 'ETCUSDT', name: 'Ethereum Classic', logo: 'https://cryptologos.cc/logos/ethereum-classic-etc-logo.png', prevPrice: null },
    { symbol: 'VETUSDT', name: 'VeChain', logo: 'https://cryptologos.cc/logos/vechain-vet-logo.png', prevPrice: null },
    { symbol: 'NEOUSDT', name: 'NEO', logo: 'https://cryptologos.cc/logos/neo-neo-logo.png', prevPrice: null },
    { symbol: 'ZRXUSDT', name: '0x', logo: 'https://cryptologos.cc/logos/0x-zrx-logo.png', prevPrice: null },
    { symbol: 'BATUSDT', name: 'Basic Attention Token', logo: 'https://cryptologos.cc/logos/basic-attention-token-bat-logo.png', prevPrice: null },
    { symbol: 'QTUMUSDT', name: 'Qtum', logo: 'https://cryptologos.cc/logos/qtum-qtum-logo.png', prevPrice: null },
    { symbol: 'DASHUSDT', name: 'Dash', logo: 'https://cryptologos.cc/logos/dash-dash-logo.png', prevPrice: null },
    { symbol: 'MKRUSDT', name: 'Maker', logo: 'https://cryptologos.cc/logos/maker-mkr-logo.png', prevPrice: null },
    { symbol: 'ENJUSDT', name: 'Enjin Coin', logo: 'https://cryptologos.cc/logos/enjin-coin-enj-logo.png', prevPrice: null },
    { symbol: 'FLOKIUSDT', name: 'Floki Inu', logo: 'https://cryptologos.cc/logos/floki-inu-floki-logo.png', prevPrice: null },
    { symbol: 'AVAXUSDT', name: 'Avalanche', logo: 'https://cryptologos.cc/logos/avalanche-avax-logo.png', prevPrice: null },
    { symbol: 'SANDUSDT', name: 'The Sandbox', logo: 'https://cryptologos.cc/logos/the-sandbox-sand-logo.png', prevPrice: null },
    { symbol: 'FTMUSDT', name: 'Fantom', logo: 'https://cryptologos.cc/logos/fantom-ftm-logo.png', prevPrice: null },
    { symbol: 'LUNAUSDT', name: 'Terra', logo: 'https://cryptologos.cc/logos/terra-luna-logo.png', prevPrice: null },
    { symbol: 'RAVENUSDT', name: 'Ravencoin', logo: 'https://cryptologos.cc/logos/ravencoin-rvn-logo.png', prevPrice: null },
    { symbol: 'ZILUSDT', name: 'Zilliqa', logo: 'https://cryptologos.cc/logos/zilliqa-zil-logo.png', prevPrice: null },
    { symbol: 'ICPUSDT', name: 'Internet Computer', logo: 'https://cryptologos.cc/logos/internet-computer-icp-logo.png', prevPrice: null },
    { symbol: 'HBARUSDT', name: 'Hedera Hashgraph', logo: 'https://cryptologos.cc/logos/hedera-hashgraph-hbar-logo.png', prevPrice: null },
    { symbol: 'AXSUSDT', name: 'Axie Infinity', logo: 'https://cryptologos.cc/logos/axie-infinity-axs-logo.png', prevPrice: null },
    { symbol: 'GALAUSDT', name: 'Gala', logo: 'https://cryptologos.cc/logos/gala-gala-logo.png', prevPrice: null },
    { symbol: 'LDOUSDT', name: 'Lido DAO', logo: 'https://cryptologos.cc/logos/lido-dao-ldo-logo.png', prevPrice: null },
    { symbol: 'WAVESUSDT', name: 'Waves', logo: 'https://cryptologos.cc/logos/waves-waves-logo.png', prevPrice: null },
    { symbol: 'CHZUSDT', name: 'Chiliz', logo: 'https://cryptologos.cc/logos/chiliz-chz-logo.png', prevPrice: null },
    { symbol: 'CROUSDT', name: 'Crypto.com Coin', logo: 'https://cryptologos.cc/logos/crypto-com-coin-cro-logo.png', prevPrice: null },
    { symbol: 'MANAUSDT', name: 'Decentraland', logo: 'https://cryptologos.cc/logos/decentraland-mana-logo.png', prevPrice: null },
    { symbol: 'XEMUSDT', name: 'NEM', logo: 'https://cryptologos.cc/logos/nem-xem-logo.png', prevPrice: null },
    { symbol: 'KSMUSDT', name: 'Kusama', logo: 'https://cryptologos.cc/logos/kusama-ksm-logo.png', prevPrice: null },
    { symbol: 'QTUMUSDT', name: 'Qtum', logo: 'https://cryptologos.cc/logos/qtum-qtum-logo.png', prevPrice: null },
    { symbol: 'RUNEUSDT', name: 'THORChain', logo: 'https://cryptologos.cc/logos/thorchain-rune-logo.png', prevPrice: null },
    { symbol: 'LPTUSDT', name: 'Livepeer', logo: 'https://cryptologos.cc/logos/livepeer-lpt-logo.png', prevPrice: null },
    { symbol: 'SUSHIUSDT', name: 'SushiSwap', logo: 'https://cryptologos.cc/logos/sushiswap-sushi-logo.png', prevPrice: null },
    { symbol: '1INCHUSDT', name: '1inch Network', logo: 'https://cryptologos.cc/logos/1inch-1inch-logo.png', prevPrice: null },
    { symbol: 'RENUSDT', name: 'Ren', logo: 'https://cryptologos.cc/logos/ren-ren-logo.png', prevPrice: null },
    { symbol: 'MATICUSDT', name: 'Polygon', logo: 'https://cryptologos.cc/logos/polygon-matic-logo.png', prevPrice: null },
    { symbol: 'FILUSDT', name: 'Filecoin', logo: 'https://cryptologos.cc/logos/filecoin-fil-logo.png', prevPrice: null },
    { symbol: 'KNCUSDT', name: 'Kyber Network', logo: 'https://cryptologos.cc/logos/kyber-network-knc-logo.png', prevPrice: null },
    { symbol: 'STPTUSDT', name: 'Standard Tokenization Protocol', logo: 'https://cryptologos.cc/logos/standard-tokenization-protocol-stpt-logo.png', prevPrice: null },
    { symbol: 'ALGOUSDT', name: 'Algorand', logo: 'https://cryptologos.cc/logos/algorand-algo-logo.png', prevPrice: null },
    { symbol: 'BANDUSDT', name: 'Band Protocol', logo: 'https://cryptologos.cc/logos/band-protocol-band-logo.png', prevPrice: null },
    { symbol: 'SKLUSDT', name: 'SKALE Network', logo: 'https://cryptologos.cc/logos/skale-network-skl-logo.png', prevPrice: null },
    { symbol: 'STMXUSDT', name: 'StormX', logo: 'https://cryptologos.cc/logos/stormx-stmx-logo.png', prevPrice: null },
    { symbol: 'NKNUSDT', name: 'NKN', logo: 'https://cryptologos.cc/logos/nkn-nkn-logo.png', prevPrice: null },
    { symbol: 'CVCUSDT', name: 'Civic', logo: 'https://cryptologos.cc/logos/civic-cvc-logo.png', prevPrice: null },
    { symbol: 'CELUSDT', name: 'Celo', logo: 'https://cryptologos.cc/logos/celo-cel-logo.png', prevPrice: null },
    { symbol: 'DGBUSDT', name: 'DigiByte', logo: 'https://cryptologos.cc/logos/digibyte-dgb-logo.png', prevPrice: null },
    { symbol: 'GRTUSDT', name: 'The Graph', logo: 'https://cryptologos.cc/logos/the-graph-grt-logo.png', prevPrice: null },
    { symbol: 'AAVEUSDT', name: 'Aave', logo: 'https://cryptologos.cc/logos/aave-aave-logo.png', prevPrice: null },
  ];

  // Function to create a crypto card
  const createCryptoCard = (coin, price) => {
    return `
      <div class="bg-white shadow-lg rounded-lg p-4 m-4 text-center">
        <div class="flex justify-center items-center">
          <img src="${coin.logo}" alt="${coin.name} Logo" class="w-16 h-16 rounded-full" />
          <div>
            <h2 class="text-xl font-bold">${coin.name}</h2>
            <p class="text-gray-600">${coin.symbol}</p>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-lg font-semibold" id="price-${coin.symbol}" data-prev-price="${price}">Price: $<span>${price}</span></p>
        </div>
        <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onclick="showChart('${coin.symbol}')">Show Chart</button>
      </div>
    `;
  };

  // Initial rendering of crypto cards
  coins.forEach(coin => {
    cryptoContainer.innerHTML += createCryptoCard(coin, 'Loading...');
  });

  // Function to update prices in real-time
  const updatePrice = (symbol, price) => {
    const priceElement = document.getElementById(`price-${symbol}`);
    const prevPrice = parseFloat(priceElement.getAttribute('data-prev-price'));

    // Update price in HTML
    priceElement.querySelector('span').textContent = parseFloat(price).toFixed(2);

    // Change the color based on price comparison
    if (prevPrice) {
      if (price > prevPrice) {
        priceElement.classList.remove('text-red-500');
        priceElement.classList.add('text-green-500');
      } else if (price < prevPrice) {
        priceElement.classList.remove('text-green-500');
        priceElement.classList.add('text-red-500');
      }
    }

    // Update the previous price attribute
    priceElement.setAttribute('data-prev-price', price);
  };

  // Function to show the TradingView chart
  window.showChart = (symbol) => {
    // Clean the previous chart
    document.getElementById('tradingview-chart').innerHTML = '';

    new TradingView.widget({
      "container_id": "tradingview-chart",
      "width": "100%",
      "height": 400,
      "symbol": symbol,
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_legend": false,
      "save_image": false,
      "studies": [],
      "container_type": "auto",
      "hide_side_toolbar": true,
      "details": true,
      "calendar": true,
      "hotlist": true,
      "news": true,
    });

    chartModal.style.display = 'block'; // Show the modal
  };

  // Close the modal
  closeModal.onclick = function() {
    chartModal.style.display = 'none';
  };

  // Close modal on clicking outside of it
  window.onclick = function(event) {
    if (event.target === chartModal) {
      chartModal.style.display = 'none';
    }
  };

  // Open WebSocket connection to Binance API
  const socket = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');

  socket.onmessage = function(event) {
    const data = JSON.parse(event.data);

    // Loop through all the prices received from WebSocket
    data.forEach(crypto => {
      coins.forEach(coin => {
        if (crypto.s === coin.symbol) {
          updatePrice(coin.symbol, crypto.c);
        }
      });
    });
  };

  socket.onerror = function(error) {
    console.error('WebSocket Error:', error);
  };
});
