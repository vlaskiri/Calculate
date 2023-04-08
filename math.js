function suma(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;

}

function division(a, b) {
    return a / b;
}

const OPERATION = {
    suma: '+',
    subtraction: '-',
    multiplication: '*',
    division: '/'
};

function calculate ({ a, b, operation }) {
    let result = null;

    switch (operation) {
        case OPERATION.suma:
            result = suma(a, b);
            break;
        case OPERATION.subtraction:
            result = subtraction(a, b);
            break;
        case OPERATION.multiplication:
            result = multiplication(a, b);
            break;
        case OPERATION.division:
            result = division(a, b);
            break;
        default:
            break;
    }

    return result;
}
