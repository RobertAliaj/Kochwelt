let amount = ['1', '50', '250', '50', '50', '25', '50', '0.5'];
let ingredients = ['Knoblauchzehe(n)', 'g gewürfelte Zwiebeln', 'g Schupfnudeln, pfannenfertig', 'g Frischkäse', 'ml Milch', 'ml Cremefine 7%', 'g Spinat', 'EL Öl'];

function showFor1() {
    for(i = 0; i < amount.length; i++) {
        document.getElementById('table').innerHTML += `
        <tr>
            <td>${amount[i]} ${ingredients[i]}</td>
        </tr>
    `;
    }
}

function calculate() {
    document.getElementById('table').innerHTML = '';

    for(i = 0; i < amount.length; i++) {
        portions = +document.getElementById('myInput').value;
        result = (amount[i] * portions);

        document.getElementById('table').innerHTML += `
            <tr>
                <td>${result} ${ingredients[i]}</td>
            </tr>
        `;
    }

    if(portions <= 0) {
        alert('Bitte eine größere Anzahl an Portionen eingeben!')
        document.getElementById('table').innerHTML = '';
        document.getElementById('myInput').value = 1;
        showFor1();
    }
}