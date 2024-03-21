/*let usuarioNombre=prompt("cual es tu nombre?");
let usuarioEdad=prompt('cual es tu edad?');
let usuarioPais=prompt("cual es tu nacionalidad?");

console.log("soy JS y estoy dentro de HTML");
//alert(miEdad);
/*
document.write('Bienvenido ' + usuarioNombre);

if (usuarioEdad>18 && usuarioEdad<50)
{
    document.write('Felicitaciones tienes descuentos!');
    console.log("estoy entre 18 y 30");
    alert('Felicidades tienes descuento JOVEN');
}
    else if  (usuarioEdad>50)
    {   
        alert('Felicidades tienes descuento SENIOR');        
    }
    else 
    {   
        alert('INFO solo para +18');        
    }
let userConfirm=confirm("Estas seguro?");
 console.log(userConfirm);
 */

 function validarHora(){
    let hora=prompt("que hora es?(0-23)");
    if (hora>23){
        alert("Hora incorrecta");
        validarHora();
        
    } else {
        for (let i=1;i<=hora;i++){
            document.write('<h1>la hora ingresada es '+ hora+ '</h1>');
            //document.write("<img src="punta cana.png" alt="Punta cana" width="100"></img>");
        }
        }
    let c='p';

    while(c.length<=20){
        console.log(c);
        c=c+c;
    }
 }
 function pintarImagenes(){
    let imagen=""
    let cantidad=prompt("cuantos logos quieres ver?");
    cantidad = parseInt(cantidad);
    for (let i=0;i<cantidad;i++){
        document.write("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKrKvY5VRpFluEA8DLFXSoFaghoCfYleWmmrcGtFxgSxerQQPZmi4GIK7r0Hhag276nJI&usqp=CAU'>");
        contador=i+1;
        document.write('<h1>Imagen #' +contador+'</h1>');
    }
 }
 pintarImagenes();