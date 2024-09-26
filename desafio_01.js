const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Digite o nome do herói: ', (nome) => {
    rl.question('Digite a quantidade de experiência (XP): ', (xp) => {
        xp = parseInt(xp, 10);

        let nivel = '';

        switch (true) {
            case xp < 1000:
                nivel = 'Ferro';
                break;
            case xp <= 2000:
                nivel = 'Bronze';
                break;
            case xp <= 5000:
                nivel = 'Prata';
                break;
            case xp <= 7000:
                nivel = 'Ouro';
                break;
            case xp <= 8000:
                nivel = 'Platina';
                break;
            case xp <= 9000:
                nivel = 'Ascendente';
                break;
            case xp <= 10000:
                nivel = 'Imortal';
                break;
            default:
                nivel = 'Radiante';
        }

        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
        rl.close();
    });
});
