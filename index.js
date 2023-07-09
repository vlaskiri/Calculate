let firstN = '' // first number
let secondN = '' // second number
let sign = '' // operation
let result = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/']

// result on screen
const out = document.querySelector('.result p');

function clearAll() {
    firstN = '' // first number
    secondN = '' // second number
    sign = '' // operation
    result = false;
    out.textContent = '0';
}

document.getElementById('allClear').addEventListener('click', clearAll);

document.querySelector('.parent-buttons').onclick = (event) => {
    // no button pressed
    if(!event.target.classList.contains('btn')) return;

    // button pressed 'AC'
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';

    // get pressed button
    const key = event.target.textContent;

    const maxDigits = 9; // maximum number of input characters
    let resultValue = ''; // a variable to store the full value of the result

    // if the '0-9' key or period is pressed
    if (digit.includes(key)) {
        if (!secondN && !sign) {
            if(firstN.length < maxDigits) {
                firstN += key;
                out.textContent = firstN.length < maxDigits ? firstN : firstN.substring(0, maxDigits);
            }
        } else if (firstN !== '' && secondN !== '' && result) {
            if (secondN.length < maxDigits) {
                secondN = key;
                result = false;
                out.textContent = secondN.length < maxDigits ? secondN : secondN.substring(0, maxDigits);
            }
        } else {
            if (secondN.length < maxDigits) {
                secondN += key;
                out.textContent = secondN.length < maxDigits ? secondN : secondN.substring(0, maxDigits);
            }
        }
        console.table(firstN, secondN, sign);
        return;
    }

    // if the '+, -, /, *' key is pressed
    if (action.includes(key)) {
        sign = key;
        console.table(firstN, secondN, sign);
        out.textContent = sign;
        return;
    }

    // button pressed '='
    if (key === '=') {
        if (secondN === '')
            secondN = firstN
        switch (sign) {
            case '+':
                firstN = (+firstN) + (+secondN);
                break;
            case '-':
                firstN = firstN - secondN;
                break;
            case '*':
                firstN = firstN * secondN;
                break;
            case '/':
                if (secondN === '0') {
                    out.textContent = 'Error';
                    firstN = '';
                    secondN = '';
                    sign = '';
                    return;
                }
                firstN = firstN / secondN;
                break;
        }
        result = true;
        resultValue = firstN.toString(); // saving the full value of the result
        out.textContent = resultValue.substring(0, maxDigits); // Display limited number of characters in '.result p'
        console.table(firstN, secondN, sign, resultValue);
    }

}