   // funcion para precios brutos
function eleccion (nro_ingresado) {
let resultado ='Procesando....⌛⌛⌛  Presione Enter'
if (nro_ingresado >= 0)  {
   resultado 
} 
else if (nro_ingresado !== 0 ) { 
        resultado 
}
 return resultado
}

  // funcion para cupon
function cup (serial) {
if (serial == codigo)
  x= (result) - (result*0.15)
else x= (result)
}

// funcion para forma de retiro en tienda
function forma_retiro (num) {
if (num==1) 
  x1 = ((x+130) + ' Bs. \n (Incluye costo del delivery)\n Forma de retiro en tienda: 🚚 Delivery')
else if (num==2)
  x1= (x + ' Bs. \n Forma de retiro en tienda: 🏪 Pickup')
}

let p1 = 0
let p2 = 0
let p3 = 0 
let iva= 0.16
let codigo = '15OFF'
let respuesta
let x= 0 
let x1

//primer precio
alert('🛒 Bienvenido al carrito de compras 🛒')
p1= Number(prompt (' 👉 Escriba el primer precio bruto '))
alert ( eleccion (p1))
if (p1 > 0) {
  alert ('registrado ✔')
} else if (p1 == 0) 
  {
    alert('Valor invalido 🤷‍♀️')
    alert('Recargue la pagina y vuelva a intentar 🤦‍♂️')
    end }
else
{
  alert('Valor invalido 🤷‍♀️')
  alert('Recargue la pagina y vuelva a intentar 🤦‍♂️')
  end }
   
    
 p2= Number (prompt(' 👉 Escriba el segundo precio bruto'))
 alert(eleccion (p2))  
 if (p2 >0) {
  alert ('registrado ✔')
 } else if (p2 ==0) {
    alert('Valor invalido 🤷‍♀️')
    alert('Recargue la pagina y vuelva a intentar 🤦‍♂️')
    end 
 } else {
    alert('Valor invalido 🤷‍♀️')
    alert('Recargue la pagina y vuelva a intentar 🤦‍♂️')
    end }

p3= Number (prompt(' 👉 Escriba el tercer precio bruto'))
alert(eleccion (p3))  
if (p3 >0) {
  alert ('registrado ✔')
  } else if (p3==0) {
    alert('Valor invalido 🤷‍♀️')
    alert('Recargue la pagina y vuelva a intentar 🤦‍♂️')
    end }  
    else {
      alert('Valor invalido 🤷‍♀️')
      alert('Recargue la pagina y vuelva a intentar 🤦‍♂️')
      end }
   
let result= (p1+p2+p3) *iva + (p1+p2+p3)    
  
respuesta= prompt('👉 Ingrese cupon de descuento, de no tener presione OK')
alert(cup(respuesta))
if (respuesta==codigo) {
  alert('✅Tienes 15% de descuento ✅')
} else if (respuesta !== codigo) {
    alert('No tienes descuento ❌') } 
        
x1 = prompt ('🙋‍♂️Usara delivery o pickup? \n 👉Seleccione 1 para delivery \n 👉Seleccione 2 para pickup')
    alert(forma_retiro(x1))
    if (x1==1) {
      alert('Usted escogio delivery')
    } else if (x1==2) {
        alert('Usted escogio pickup') }
   
   
 alert ('👉 El primer precio bruto es: '  + p1 + ' Bs' +' \n👉 El segundo precio bruto es: ' + p2 + ' Bs' +' \n 👉 El tercer precio bruto es: ' + p3 + ' Bs' +' \n 👉 Precio total de los 3 productos con Iva es: ' + result + ' Bs' + '\n 👉 Iva establecido es de: 16%' + '\n 👉 Precio del delivery establecido es: 5💲' + '\n 👉 Total con cupon de descuento: ' + x + ' Bs' + '\n \n ✅✅ Total final facturado ✅✅: ' + x1 ) 
 alert ('👏👏GRACIAS POR SU COMPRA👏👏')






