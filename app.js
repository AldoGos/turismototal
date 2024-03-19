let usuarioNombre=prompt("cual es tu nombre?");
let usuarioEdad=prompt('cual es tu edad?');
let usuarioPais=prompt("cual es tu nacionalidad?");
console.log("soy JS y estoy dentro de HTML");
//alert(miEdad);

document.write('Bienvenido' + usuarioNombre);

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


