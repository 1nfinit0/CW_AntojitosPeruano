const element = document.getElementById("preloader");
const header = document.getElementsByTagName("header")[0];
const main = document.getElementsByTagName("main")[0];
const footer = document.getElementsByTagName("footer")[0];
const promo = document.getElementById("combo");
const lista = document.getElementById("lista");


promo.addEventListener("click", function() {
  window.scroll({
    top: 740,
    left: 0,
    behavior: 'smooth'
    });
});

lista.addEventListener("click", function() {
  window.scroll({
    top: 1690,
    left: 0,
    behavior: 'smooth'
    });
});

setTimeout(function(){
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  header.style.display = 'block';
  main.style.display = 'block';
  footer.style.display = 'block';
}, 4500);

setTimeout(function(){
  element.remove();
}, 5000);

/*
Código del menú
*/

const files = [
  {   src: './1010/unidades/1.png',
      alt: 'No disponible',
      titulo: '1/4 De Pollo A La Brasa',
      price: 'S/. 14.00'
  },
  {   src: './1010/unidades/2.jpg',
      alt: 'No disponible',
      titulo: '1/4 De Pollo A La Brasa + 1 Palo de Anticucho',
      price: 'S/. 18.00'
  },
  {   src: './1010/unidades/3.jpeg',
      alt: 'No disponible',
      titulo: 'Mostro',
      price: 'S/. 17.00'
  },
  {   src: './1010/unidades/4.jpeg',
      alt: 'No disponible',
      titulo: '1/2 Pollo a la Brasa',
      price: 'S/. 27.00'
  },
  {   src: './1010/unidades/5.jpeg',
      alt: 'No disponible',
      titulo: '1/2 Pollo a la Brasa + 1 Palo de Anticucho',
      price: 'S/. 29.00'
  },
  {   src: './1010/unidades/6.jpeg',
      alt: 'No disponible',
      titulo: 'Pollo Entero + Papas, Ensalada y Gaseosa',
      price: 'S/. 48.00'
  },
  {   src: './1010/unidades/7.jpeg',
      alt: 'No disponible',
      titulo: 'Pollo Entero + Papas, Ensalada y Chicha',
      price: 'S/. 50.00'
  },
  {   src: './1010/unidades/8.jpg',
      alt: 'No disponible',
      titulo: 'Tequeños de Pollo',
      price: '3 x S/. 5.00 - 6 x S/. 10.00'
  },
  {   src: './1010/unidades/9.jpeg',
      alt: 'No disponible',
      titulo: 'Alitas BBQ',
      price: '6 x S/. 10.00 - 10 x S/. 20.00'
  },
  {   src: './1010/unidades/10.jpeg',
      alt: 'No disponible',
      titulo: 'Alitas Picante',
      price: '6 x S/. 10.00 - 10 x S/. 20.00'
  },
  {   src: './1010/unidades/11.jpg',
      alt: 'No disponible',
      titulo: 'Anticuchos 2 Palitos',
      price: 'S/. 14.00'
  },
  {   src: './1010/unidades/12.jpg',
      alt: 'No disponible',
      titulo: 'Anticuchos 3 Palitos',
      price: 'S/. 18.00'
  },
  {   src: './1010/unidades/13.jpg',
      alt: 'No disponible',
      titulo: 'Brochetas de Pollo',
      price: '2 x S/. 14.00 - 3 x S/. 18.00'
  },
  {   src: './1010/unidades/14.jpg',
      alt: 'No disponible',
      titulo: 'Mollejita',
      price: 'S/. 14.00'
  },
  {   src: './1010/unidades/15.jpg',
      alt: 'No disponible',
      titulo: 'Rachi',
      price: 'S/. 14.00'
  },
  {   src: './1010/unidades/16.jpg',
      alt: 'No disponible',
      titulo: 'Choncholí',
      price: 'S/. 14.00'
  },
  {   src: './1010/unidades/17.jpg',
      alt: 'No disponible',
      titulo: 'Chicharrón de Pollo',
      price: 'S/. 17.00'
  },
  {   src: './1010/unidades/18.jpg',
      alt: 'No disponible',
      titulo: 'Pollo a La Parrilla',
      price: 'S/. 17.00'
  },
  {   src: './1010/unidades/19.jpg',
      alt: 'No disponible',
      titulo: 'Piña Colada',
      price: '2 x S/. 17.00'
  },
  {   src: './1010/unidades/20.jpg',
      alt: 'No disponible',
      titulo: 'Algarrobina',
      price: '2 x S/. 17.00'
  },
  {   src: './1010/unidades/21.jpeg',
      alt: 'No disponible',
      titulo: 'Pisco Sour',
      price: '2 x S/. 15.00'
  },
  {   src: './1010/unidades/22.jpg',
      alt: 'No disponible',
      titulo: 'Machu Picchu',
      price: '2 x S/. 17.00'
  },
  {   src: './1010/unidades/23.jpg',
      alt: 'No disponible',
      titulo: 'Chilcano',
      price: '2 x S/. 15.00'
  },
  {   src: './1010/unidades/24.jpg',
      alt: 'No disponible',
      titulo: 'Chicha Morada',
      price: 'S/. 8.00'
  }
]

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const proyectos = document.querySelector('#proyectos');
const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};

const filtrar = () => {
  proyectos.innerHTML = '';
  const texto = formulario.value.toLowerCase();
          texto.split('').map( letra => acentos[letra] || letra).join('').toString();
  for(let file of files){
      let titulo = file.titulo.toLowerCase();
                  titulo = titulo.split('').map( letra => acentos[letra] || letra).join('').toString();
      if(titulo.indexOf(texto) !== -1){
          proyectos.innerHTML +="<div class='proyecto'><div class='servicio'><img src='"+file.src+"' alt='"+file.alt+"'></div>"+
                                      "<div class='descripcion'>"+
                                          "<div class='name'><h3>"+file.titulo+"</h3></div>"+
                                              "<div class='formatos'>"+
                                              "<div class='price'><p>"+file.price+"</p></div>"+
                                              "</div>"+
                                          "</div>"+
                                        "</div><hr>";

                                   ;
      }         
  }
  if (proyectos.innerHTML === ''){
      proyectos.innerHTML += `No se encontraron resultados`
  }

}

boton.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);
filtrar();