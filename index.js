let inputA = document.querySelector('.js-input-a');
let inputB = document.querySelector('.js-input-b');
let selectOperation = document.querySelector('.js-operation');
let btnResult = document.querySelector('.js-btn-result');
let output = document.querySelector('.js-output');

btnResult.addEventListener('click', function () {
    const a = Number(inputA.value);
    const b = Number(inputB.value);
    const operation = selectOperation.value;

    const result = calculate({ a, b, operation })

    output.innerHTML = result;
});

