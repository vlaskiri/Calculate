let a = '' // first number
let b = '' // second number
let sign = '' // operation
let result = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/']

// результат на экране
const out = document.querySelector('.result p');

function clearAll() {
    a = '' // first number
    b = '' // second number
    sign = '' // operation
    result = false;
    out.textContent = '0';
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.parent-buttons').onclick = (event) => {
    // нажата не кнопка
    if(!event.target.classList.contains('btn')) return;

    // нажата кнопка clearAll ac
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';

    // получаю нажатую кнопку
    const key = event.target.textContent;

    const maxDigits = 9; // максимальное кол-во вводимых символов
    let resultValue = ''; // переменная для хранения полного значения результата

    // если нажата клавиша 0-9 или .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            if(a.length < maxDigits) {
                a += key;
                out.textContent = a.length < maxDigits ? a : a.substring(0, maxDigits);
            }
        } else if (a !== '' && b !== '' && result) {
            if (b.length < maxDigits) {
                b = key;
                result = false;
                out.textContent = b.length < maxDigits ? b : b.substring(0, maxDigits);
            }
        } else {
            if (b.length < maxDigits) {
                b += key;
                out.textContent = b.length < maxDigits ? b : b.substring(0, maxDigits);
            }
        }
        console.table(a, b, sign);
        return;
    }

    // если нажата клавиша +, -, /, *
    if (action.includes(key)) {
        sign = key;
        console.table(a, b, sign);
        out.textContent = sign;
        return;
    }

    // нажата кнопка =
    if (key === '=') {
        if (b === '')
            b = a
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case '*':
                a = a * b;
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        result = true;
        resultValue = a.toString(); // сохранение полного значения результата
        out.textContent = resultValue.substring(0, maxDigits); // Отображение ограниченного количества символов в result p
        console.table(a, b, sign, resultValue);
    }

}