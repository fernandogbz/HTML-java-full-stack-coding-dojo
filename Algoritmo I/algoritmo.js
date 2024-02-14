// Actividad
// Predice la salida para los códigos que encontrarás más abajo. Por favor, no corras el código directamente en la consola o JSbin, sino que hazlo a mano sin utilizar un computador. Saber cómo hacer esto en papel es sumamente importante. Una vez que hayas predecido la salida para todos los códigos, entonces deberás ejecutarlos en tu consola/jsBin y comparar tu predicción con lo que realmente sucede. Si tu predicción es diferente a los resultados del computador, asegúrate de entender por qué son diferentes y corrige tus errores respecto al funcionamiento del código.

// Queremos que tengas el hábito de usar el Diagrama T en papel. Esto no solo te ayudará durante los ejercicios en la pizarra, sino que te hará un mejor solucionador de problemas y desarrollador. No te saltes la actividad por favor.

// 1.
for(var i=0; i<5;i++){   
    console.log(i); // 0, 1, 2, 3, 4
}

// 2.
for(var i=0; i<5; i++)
{
    i = i + 1;  
    console.log(i); // 1, 3, 5
}

// 3.
for(var i=0; i<5; i++)
{
    i = i + 3; 
    console.log(i); // 3, 7
}


// 4.
function y(num1, num2){   
    return num1+num2;
}
console.log(y(2,3)) // 5
console.log(y(3,5)) // 8


// 5.
function y(num1, num2){
    console.log(num1);   // 2, 3
    return num1+num2;
}
console.log(y(2,3)) // 5
console.log(y(3,5)) // 8


// 6.
a = 15;
console.log(a); //15
function y(a){
    console.log(a);  // 10  
    return a;
}
b = y(10);
console.log(b); // 10


// 7.
a = 15;
console.log(a); // 15
function y(a){
    console.log(a);  // 10 
    return a*2;
}
b = y(10);
console.log(b); // 20

