const x1 = 1, x2 = 1, y1 = 1, y2 = 4

const d = Math.sqrt((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)))
console.log(
    `
     x1 = ${x1},
     x2 = ${x2},
     y1 = ${y1},
     y2 = ${y2},

    Ou seja, a distância entre esses 2 pontos dados é de ${d}.`
);