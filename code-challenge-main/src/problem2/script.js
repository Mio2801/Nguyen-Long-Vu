let inputCost = document.getElementById('input-amount');
let outputCost = document.getElementById('output-amount');
let selectedCoin = document.getElementById('coin');
let turn = 'usd - vn';
let exchangeCurrency = 0;


const apiUrl = 'https://interview.switcheo.com/prices.json';
fetch(apiUrl)
.then(response => {
    if (!response.ok) {
        throw new Error('API called error');
    }
    return response.json();
})
.then(data => {
    const uniqueData = data.reduce((accumulator, current) => {
        if (!accumulator.find(item => item.currency === current.currency)) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);
    uniqueData.forEach(optionObj => {
            const option = document.createElement("option");
            option.text = optionObj.currency;
            option.value = optionObj.price;
            selectedCoin.add(option);
        });
    })
    .catch(error => {
        console.error('Error: ' + error);
    });
    
selectedCoin.addEventListener("change", function () {
    exchangeCurrency = selectedCoin.value;
    console.log('exchangeCurrency: ', exchangeCurrency);
});

const change_cost = () => {  
    let result = inputCost.value * exchangeCurrency; 
    console.log('outputCost: ',outputCost.value);
    outputCost.value = result.toFixed(2);
    return outputCost;
}

document.getElementById('exchange-button').addEventListener("click", change_cost);
