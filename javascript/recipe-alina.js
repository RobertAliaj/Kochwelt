
let amount = ['800.0', '600.0', '1.0', '1.0', '2.0', '1.0', '500.0', '', ''];
let ingredient = ['g Hokkaidokürbis(se), geputzt gewogen)', 'g Möhre(n), geschält gewogen', 'Stück(e) Ingwer, ca. 5 cm lang', 'Zwiebel(n)', 'EL Butter', 'Liter Gemüsebrühe', 'ml Kokosmilch', 'Salz & Pfeffer', 'Koriandergrün zum Garnieren'];



function show() {
    for (let i = 0; i < amount.length; i++) {
        document.getElementById('table').innerHTML +=
     `<tr>
        <td>${amount[i]} ${ingredient[i]}</td>
     </tr>`;
    }
}

function resetInput() {

    const Input = document.getElementById('myInput');

    if (Input.value.length > 1) {
        const value = +Input.value;
        if (value < 1) {
            Input.value = '';

        }
    }

    if (Input.value.length == 1) {
        const value = +Input.value;
        if (value < 1) {
            Input.value = '';
        }
    }
}



function calculate() {
    document.getElementById('table').innerHTML = '';
    let portionSize = +document.getElementById('myInput').value;

    for (let i = 0; i < amount.length; i++) {
        
        result = (amount[i] / 6 * portionSize).toFixed(1);

        if (result < 0.1) {
            document.getElementById('table').innerHTML += `<td> ${ingredient[i]}</td>`;
        }
        else {
            document.getElementById('table').innerHTML += `<td>${result} ${ingredient[i]}</td>`;
        }
    }

    if (portionSize < 4) {
        alert('Bitte geben Sie mindestens eine Portionsgröße von 4 an!');
        document.getElementById('table').innerHTML = '';
        show();
        +document.getElementById('myInput').innerHTML == 6;
    }


}
