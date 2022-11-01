
const cantidadEntradas = document.getElementById('cantidadEntradas');
const calcular = document.getElementById('calcular');
const categorias = document.getElementById('combo');
const total = document.getElementById('total');

function resumen(){
    //console.log(cantidadEntradas.value);
    //console.log(categorias.value);
    let totalAPagar;
    if(cantidadEntradas.value == '' || cantidadEntradas.value == 0){
        alert('Debe Ingresar una Cantidad válida.');
        document.getElementById("total").innerHTML='';
    }else{

   
    if(categorias.value == 'estudiante'){
        totalAPagar = cantidadEntradas.value * (200 - (200 * 0.8));
        
        //console.log(totalAPagar);
    }else{
        if(categorias.value == 'trainee'){
            totalAPagar = cantidadEntradas.value * (200 - (200 * 0.5));
        
            //console.log(totalAPagar);
        }else{
            if(categorias.value == 'junior'){
                totalAPagar = cantidadEntradas.value * (200 - (200 * 0.15));
        
                //console.log(totalAPagar);
            }
        }
    }
    total.innerHTML = totalAPagar;
}

    
}

function borrar(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("cantidadEntradas").value = "";
    document.getElementById("total").innerHTML='';
}
