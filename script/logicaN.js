let start=document.querySelector(".start")
let totalizar=document.querySelector(".totalizar")
let pantalla = document.querySelector(".pantalla")
let ingresar = document.querySelector(".ingresar")
let resultadoFinal=0
let creditosT=0
let limite=100
let evento=true




start.addEventListener("click",()=>{
   
    cantidadNotas = document.querySelector(".cantidadNotas").value
    ingresar.innerHTML=""
    pantalla.innerHTML=""
    
    

    //crear espacios de notas  y creditos
 
  
    if(cantidadNotas>=1){
        if(cantidadNotas>limite){
            alert(`el limite es de ${limite} notas`)
            cantidadNotas = document.querySelector(".cantidadNotas").value=100
        }else{
            let fragment = new DocumentFragment()
            let prueba=document.createElement("div")
        
        
        for(let i=1;i<=cantidadNotas;i++){
            
            
        
            
            
            prueba.innerHTML+=`<div>
     
            <input type="text"  placeholder="nota${i}" class="n${i}">
       </div>
            `
    
            fragment.appendChild(prueba)

        }
        ingresar.appendChild(fragment)
        totalizar.removeAttribute("hidden")

        }
      

            
        
      
        
        

    }
  
   
})


totalizar.addEventListener("click",()=>{
    
    operar=()=>{
      
        resultadoFinal=0
        creditosT=0
        sumaT=0
        
    

    //comprobar que todo esten llenos sino reemplazar por ceros


    
    for(let i=1;i<=cantidadNotas;i++){
        console.log(cantidadNotas)
        
        let nota=document.querySelector(`.n${i}`)
        
        nota.addEventListener("keypress",()=>{evento=false})
        nota.addEventListener("keyup",()=>{ setTimeout(function(){evento=true},100);})
      
     
        
        nota.addEventListener("keydown",()=>{   
            
            if(evento==true){
                if(String.fromCharCode(event.keyCode)=="" && evento==true){  
                
            
                    if(cantidadNotas<1000){
                        evento=false
                        setTimeout(function(){ operar()}, 3000);
                        setTimeout(function(){evento=true},1000);
                       
                    return
    
                    }else{
                        evento=false
                        setTimeout(function(){ operar()}, 3000);
                        setTimeout(function(){evento=true},1000);
                       evento=true
                    return
    
                    }
                    
                }else{
                    evento=false
                    setTimeout(function(){ operar()}, 0);
                    //setTimeout(function(){evento=true},1000);
                    evento=true
                    return
                }

            }
                        
            
        
        
        })
        if(evento==true)
     {
        if(nota.value==""){
            nota.value="0"

        }
     }
        
       
        

        


    
    }



    



    //operar las notas con los creditos
    
       
    

        
    
    if(cantidadNotas>=1){
        for(let i=1;i<=cantidadNotas;i++){

            let nota=document.querySelector(`.n${i}`).value
         
          
                sumaT+=parseFloat(nota)
                

            2
           
            
            
            
            
            
           
            
            
         
        
        
        }
      
        

        resultadoFinal=sumaT/cantidadNotas
     
        
        if(isNaN(resultadoFinal)){
    
            resultadoFinal=0
        }
        console.log(cantidadNotas)
        //mostrar tabla de resultados
        
        if(resultadoFinal>=3.0){
            estado=`<td class="aprobado">aprobado</td>
            <img src="../../img/happy.png" alt="cara feliz" class="imagenes">`
        }else{
            estado=`<td class="desaprobado">desaprobado</td>
            <img src="../../img/sad.png" alt="cara triste" class="imagenes">`    
        }
        pantalla.innerHTML=""

        let fragment = new DocumentFragment()
        let texto=document.createElement("div")

        
         texto.innerHTML=`
        
        <table class="default" align="center">
          
        <tr>
      
          <th>suma total</th>
      
          <td>${sumaT}</td>
      
     
      
        </tr>
      
        <tr>
      
          <th>notas</th>
      
          <td>${cantidadNotas}</td>
      
      
        </tr>
      
        <tr>
      
          <th>promedio</th>
      
          <td>${resultadoFinal}</td>
    
      
        </tr>
        <tr>
      
            <th>estado</th>
        
            ${estado}
      
        
          </tr>
      
      </table>`
     
        fragment.appendChild(texto)
        pantalla.appendChild(fragment)
  

    }
    

    


    }
   
    operar()


})


