const user = { username: 'Corvier', age: 25, country: 'NIC' };
const { username, ...values } = user;
console.log("馃殌 ~ file: spread.js:3 ~ username", username);
console.log("馃殌 ~ file: spread.js:3 ~ values", values);


/*
Este es un tema extenso, por lo que te recomiendo seguir el curso y leer los m茅todos sobre expresiones regulares en JavaScript:

Curso de Expresiones Regulares
Expresiones regulares en JavaScript
Propiedades de propagaci贸n
Las propiedades de propagaci贸n consisten en expandir las propiedades de un objeto utilizando el spread operator. Sirve para crear nuevos objetos a partir de otros.

const objeto = {
  nombre: "Andres",
  age: 23,
}

const usuario = {
    ...objeto,
    plataforma: "Platzi"
}
Crear copias de objetos utilizando las propiedades de propagaci贸n
Semejante a crear copias de arrays utilizando el operador de propagaci贸n, se puede realizar copias de objetos en un solo nivel mediante las propiedades de propagaci贸n.

De esta manera el segundo objeto tendr谩 una referencia en memoria diferente al original.

const objetoOriginal = {a: 1, b: 2}
const objetoReferencia = objetoOriginal
const objetoCopia = {...objetoOriginal}

objetoReferencia === objetoOriginal // true
objetoOriginal === objetoCopia // false
Cuidado con la copia en diferentes niveles de profundidad
El operador de propagaci贸n sirve para crear una copia en un solo nivel de profundidad, esto quiere decir que si existen objetos o arrays dentro de un objeto a copiar. Entonces los sub-elementos en cada nivel, tendr谩n la misma referencia en la copia y en el original.

const original = { datos: [1, [2, 3], 4, 5] }
const copia = { ...original }

original === copia // false
original["datos"] === copia["datos"] // true
La manera de solucionar esto es m谩s compleja, tendr铆as que utilizar el operador de propagaci贸n para cada elemento en cada nivel de profundidad.

Sin embargo, recientemente sali贸 una forma de crear una copia profunda con StructuredClone. Aunque es una caracter铆stica muy reciente, as铆 que revisa que navegadores tienen soporte.

const original = { datos: [1, [2, 3], 4, 5] }
const copia = structuredClone(original)

original === copia // false
original["datos"] === copia["datos"] // false
*/