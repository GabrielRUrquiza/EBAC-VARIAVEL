function somar(limite) {
    let multiplosDe5 = 0;
    let multiplosDe7 = 0;

    for (let i = 0; i <= limite; i++) {
        if (i % 5 === 0) {
            multiplosDe5 += i;
        }

        if (i % 7 === 0) {
            multiplosDe7 += i;
        }
    }

    return multiplosDe5 + multiplosDe7;
}

module.exports = { somar };
