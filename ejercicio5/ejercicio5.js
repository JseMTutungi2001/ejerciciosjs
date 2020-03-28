  $(document).ready(function() {
      console.log('funcionando');
  });
  $(document).ready(function() {

      $('h1').html('Etiqueta h1');
      $('.display-4').html('desde clase');
      $('#idh1').html('id h1');


      //comparemos jquery con javascript. la siguientes lineas son javascript
      /*     document.querySelector('h1').innerHTML = 'etiqueta h1';
             document.querySelector('.display-4').innerHTML = 'desde clase'; 
          document.querySelector('#idh1').innerHTML = 'etiqueta id h1'; */

      //otra forma de selecionar:

      /*    $('.container h1').html('cambio de texto');  esto es para cambiar todos los h1*/
      /*      $('.container h1:first').html('cambio de texto'); esto es para cambiar solo el primero
       */
      /*     $('.container h1:last').html('cambio de texto'); */
      /*   $('#idh1').addClass('text-danger');
         $('#idh1').removeClass('display-4');

         $('#contenido').append('<h1> esto es un elemento al final </h1>');
         $('#contenido').prepend('<h1> esto es un elemento al principio</h1>');

           $('#color-azul').css('color', 'blue'); 
         //de otra forma
         $('#color-azul').css({ color: 'yellow', background: 'salmon', padding: '20px', border: '2px double' });
           $('#color-azul').remove().// esto elimina el elemento
               $('#color-azul').hide(). //esto lo coloca como none
          
         $('img').attr('src', 'https://i.pinimg.com/236x/fe/e7/3f/fee73fab04a7c047a0974909dc4a16f2.jpg');
         $('img').attr('width', '25%');

         $('img:last').attr('width', '50%'); */

      /*      var parrafo = $('#resultado p');
           $('.btn-primary').click(function() {
               parrafo.addClass('display-4');

           })
           $('.btn-danger').click(function() {

               parrafo.removeClass('display-4');
           })
           $('.btn-warning').click(function() {

               parrafo.toggleClass('display-4');
           }) */

      /*   $('#formulario').submit(function(evento) {
            evento.preventDefault();
            var nombre = $('#nombre').val();

            console.log('click');
            console.log(nombre);
        }) */


      /*     var resultado = $('#resultado');
          $('.btn-primary').click(function() {
              resultado.hide(1000); //aqui podemos agregar la cantidad de segundos que se vaa tomar esta accion en realizarse en este caso en quitar el parrafo y se escuentra en milisegundos, es decir 1000=1s

          })
          $('.btn-danger').click(function() {
              resultado.show(); //en este caso es agregar

          })
          $('.btn-warning').click(function() {
              resultado.toggle(1000);

          }) */

      /*     var resultado = $('#resultado');
      $('.btn-primary').click(function() {
          resultado.fadeOut(1000); // es de salida
      })
      $('.btn-danger').click(function() {
          resultado.fadeIn(); //de entrada

      })
      $('.btn-warning').click(function() {
          resultado.toggle();

      })
 */

      var resultado = $('#resultado');

      $('.btn-primary').click(function() {
          resultado.animate({
              left: '250px',
              opacity: '0.3',
              height: '+=150px',
              width: '+=150px'
          }, 3000, function() {
              resultado.animate({
                  left: '0px',
                  opacity: '1',
                  height: '-=150px',
                  width: '-=150px'
              }, 2000)

          });

      });

  });