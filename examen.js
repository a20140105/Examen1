var nombre = prompt("Bienvenido/a al cuestionario sobre los mares,Escribre tu nombre:");

var p1 = prompt("1. ¿Cuánta agua hay en la Tierra?\A. Alrededor de un 41% de la superficie terrestre es agua.\B. Alrededor de un 51% de la superficie terrestre es agua\C. Alrededor de un 71% de la superficie terrestre es agua");
var c = 0
var i = 0
if(p1 == "C"){
    c = c + 1;
}else if (p1 == "A"){
    i = i + 1;
}else if(p1 == "B"){
    i = i + 1;
}else {
    alert("Esa respuesta no es valido")
}

var p2 = prompt("2-¿Qué océano es el más grande?\A. El Pacífico \B. El Atlántico\C. El Índico");

if(p2 == "A"){
    c = c + 1;
}else if (p2 == "C"){
    i = i + 1;
}else if(p2 == "B"){
    i = i + 1;
}else {
    alert("Esa respuesta no es valido")
}

var p3 = prompt("3. ¿Cuánto mide la parte más profunda de los Océanos?\A. 11 Km \B. 23 Km\C. 31 Km");

if(p3 == "A"){
    c = c + 1;
}else if (p3 == "C"){
    i = i + 1;
}else if(p3 == "B"){
    i = i + 1;
}else {
    alert("Esa respuesta no es valido")
}
if( c > i){
    document.write(nombre +",has completado las preguntaas exitosamentes,");
    document.write("Correctas:"+ c );
    document.write("Incorrectas:"+ i );
}else if( c < i){
    document.write(nombre +",has tenido dificultat en las preguntas");
    document.write("Correctas:" + c) ;
    document.write("Incorrectas:"+ i );
}else if( c = i){
    document.write(nombre +",has completado el tes a medias");
    document.write("Correctas:" + c );
    document.write("Incorrectas:" + i) ;
}
