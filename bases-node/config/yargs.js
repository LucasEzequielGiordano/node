const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "es la tabla de multiplicar",
    })
    .option("h", {
        alias: "hasta",
        type: "number",
        default: 10,
        describe: "hasta donde es la tabla",
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        default: false,
        describe: "Muestra la tabla en consola",
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un número";
        }
        return true;
    }).argv;

module.exports = argv;
