const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = "";
        let consola = "";

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
        }

        if (listar) {
            console.log(`Tabla del ${colors.blue(base)}`.red);
            console.log(consola);
        }

        await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { crearArchivo };
