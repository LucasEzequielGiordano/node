const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
require("colors");

console.clear();
console.log(process.argv);
console.log(argv);

console.log("base: yargs ", argv.base);

crearArchivo(argv.b, argv.l, argv.h)
    .then((nombreArchivo) =>
        console.log(nombreArchivo.rainbow, `TABLA DEL ${argv.base} CREADA`)
    )
    .catch((err) => console.log(err));
