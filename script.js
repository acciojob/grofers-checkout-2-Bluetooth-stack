//your code here
const tab = document.querySelector('table');
let prices = document.querySelectorAll('.price')
console.log(prices);

let numPrc = 0;
for(let i = 0; i<prices.length; i++){
  numPrc+=(parseInt(prices[i].innerText));
}
console.log(numPrc);

const trow = document.createElement('tr');
const data = document.createElement('td');
data.colSpan = 2;
data.setAttribute('data-ns-test', 'grandTotal');
data.innerText = numPrc;
trow.appendChild(data);
tab.appendChild(trow);
