let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let doge = document.getElementById("dogecoin");

async function fetchPrice() {
  //  try  {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd"
  );
  const data = await response.json();
  console.log(data);

  btc.innerHTML = data.bitcoin.usd;
  eth.innerHTML = data.ethereum.usd;
  doge.innerHTML = data.dogecoin.usd;
}

document.addEventListener("DOMContentLoaded", () => {
  fetchPrice();
  setInterval(fetchPrice, 30000);
});

console.log("hello");
