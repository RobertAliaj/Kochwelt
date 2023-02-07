let amount = ['125', '100', '1', '3', '250', '1', '1', '200']

let measure = ['g', 'g', 'Pck.', 'St.', 'g', 'Prise', 'TL', 'ml']

let ingredients = ['weiche Butter', 'Zucker', 'Vanillezucker', 'Eier', 'Mehl', 'Salz', 'Backpulver', 'Milch']

function resetInput() {

    const myInput = document.getElementById('myInput');

    if (myInput.value.length > 1) {
        const value = +myInput.value;
        if (value < 1) {
            myInput.value = '';

        }
    }

    if (myInput.value.length == 1) {
        const value = +myInput.value;
        if (value == 0) {
            myInput.value = '';
        }
    }
}


//shows recipe for 4 portions
function showRecipe() {

    for (i = 0; i < ingredients.length; i++) // spielt ein mal die arrays length durch 

        document.getElementById('table').innerHTML += `
    <tr>
        <td>${amount[i]} ${measure[i]} ${ingredients[i]}</td>
    </tr>`;
}

//rechnet die Portionen um
function calculate() {

    document.getElementById('table').innerHTML = ''; // lässt beim aufrufen der Funktion "calculate()" die statische Tabelle von der Obigen funktion verschiwnden, und dann zeigt sie noch mal neu mit den neuen Werten, falls da neue Werten gegeben werden, falls nein dann wird sie wie am anfang gezeigt.

    for (i = 0; i < amount.length; i++) {
        input = +document.getElementById('myInput').value;
        result = (amount[i] / 6 * input).toFixed(1);

        document.getElementById('table').innerHTML += htmlTemplate(result, i);
    }

    if (input == 0) {
        alert('Bitte eine größere Portionenmenge angeben..');
        table.innerHTML = '';
        showRecipe();
    }
}

function htmlTemplate(result, i){
    return `
    <table>
    <tr>
    <td>${result} ${measure[i]} ${ingredients[i]}</td>
    </tr>
    </table>`;
}

