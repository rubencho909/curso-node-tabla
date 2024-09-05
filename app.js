
// Importaciones
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

//console.log( process.argv );
console.log( argv );
console.log( 'base: yargs', argv.base );

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado' ))
    .catch( err => console.log( err ));

/*
// TRABAJAR CON LOS ATRIBUTOS INSERTADOS EN LA CONSOLA
console.log(process.argv);          // Muestra en consola tres argumentos Ubicacion, Directorio y lo digitado
const [ , , arg3 = 'base=5' ] = process.argv;    // Creamos el arreglo de los argumentos y seleccionamos solo el 3
console.log( arg3 );
const [ , base = 5 ] = arg3.split( '=' );
console.log( base );
*/

//const base = 5;

/*
// FORMA PARA TRABAJAR PROMESA
crearArchivo( base )
    .then( nombreArchivo => console.log( nombreArchivo, 'creado' ))
    .catch( err => console.log( err ));

*/

//console.log('====================');
//console.log(`    Tabla del ${ base }     `);
//console.log('====================');

/*
// Segunda forma
for (let i = 1; i <= 10; i++) {
    salida += `${ base } X ${ i } = ${ base * i }\n`;
}
*/

//console.log(salida);

/*
// WRITEFILE
fs.writeFile(`tabla-${ base }.txt`, salida, (err) => {
    if(err) throw err; 
    console.log(`tabla-${ base }.txt creado`);
})
*/

/*
// WRITEFILESYNC
fs.writeFileSync(`tabla-${ base }.txt`, salida);
console.log(`tabla-${ base }.txt creado`);
*/

/* 
// Primera Forma
for (let i = 1; i <= 10; i++) {
    if( base != 0 ) {
        let producto = base * i;
        console.log(`${base} x ${i} = ${producto}`);
    } else {
        console.log('El multiplicando no puede ser 0');
        break;
    }
}
*/