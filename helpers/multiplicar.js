const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

/*
// FORMA PROMESA
const crearArchivo = ( base = 5 ) => {
    return new Promise(( resolve, reject ) => {
        console.log('====================');
        console.log(`    Tabla del ${ base }     `);
        console.log('====================');

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${ base } X ${ i } = ${ base * i }\n`;
        }
        console.log(salida);

        fs.writeFileSync(`tabla-${ base }.txt`, salida);
        resolve(`tabla-${ base }.txt`);
        
    });
}
*/

// FORMA ASYNC
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${ 'X'.green } ${i} ${ '='.green } ${base * i}\n`;
        }

        if (listar) {
            console.log('===================='.green);
            console.log('    Tabla del:'.green, colors.blue( base ));
            console.log('===================='.green);
            console.log(consola);
        }

        // WRITEFILESYNC
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }

}

/*
const crearArchivo = ( base = 5 ) => {
    
    console.log('====================');
    console.log(`    Tabla del ${ base }     `);
    console.log('====================');

    let salida = '';

    for (let i = 1; i <= 10; i++) {
        salida += `${ base } X ${ i } = ${ base * i }\n`;
    }
    console.log(salida);

    // WRITEFILESYNC
    fs.writeFileSync(`tabla-${ base }.txt`, salida);
    console.log(`tabla-${ base }.txt creado`);
}
*/

module.exports = {
    crearArchivo
}