function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function timer(startDate) {
    const start = new Date(startDate.replace(/-/g, '/'));

    while (true) {
        const now = new Date();
        const diff = new Date(now - start);

        const anos = diff.getUTCFullYear() - 1970; // 1970 é a base do Unix time
        const meses = diff.getUTCMonth();
        const dias = diff.getUTCDate() - 1; // O dia é 1-indexado
        const horas = diff.getUTCHours();
        const minutos = diff.getUTCMinutes();
        const segundos = diff.getUTCSeconds();

        document.getElementById('anos').innerHTML = anos;
        document.getElementById('meses').innerHTML = meses;
        document.getElementById('dias').innerHTML = dias;
        document.getElementById('horas').innerHTML = horas;
        document.getElementById('minutos').innerHTML = minutos;
        document.getElementById('segundos').innerHTML = segundos;

        await timeout(1000);
    }
}

// Rodando a função com a data de inicio.
timer("2024-02-13 14:56:30");