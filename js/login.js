/*
// Seleccionamos los elementos del formulario
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

// Seleccionamos el elemento del mensaje de error
const mensajeError = document.getElementById('mensajeError');

// Añadimos el evento submit al formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let vacio = false;
    // Validamos que los inputs no estén vacíos
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            vacio = true;
        }
    });
    if (vacio) {
        // Si hay algún input vacío, mostramos el mensaje de error
        mensajeError.style.display = 'block';
    } else {
        // Si no, enviamos el formulario
        formulario.submit();
    }
});

//tarea del profe del 27 de abril.
//hacer que se imprima los datos enviados del formulario por json en la consola (y a futuro se enviara por ajax)

/* hacer un formulario en html, del formulario debo mandarlo a javascript,
en javascript debe tener la forma de obtener el archivo json o un objeto y
con eso se debe enviarlo a ajax (no es necesario definir el servidor ya que no existe aún).
Con todo eso debo ver los datos del formulario en la consola tipo json.*/

/*
// Obtener el formulario y los campos de entrada
const form = document.querySelector('#formulario');
const emailInput = document.querySelector('#email');
const pswInput = document.querySelector('#psw');
const errorLabel = document.querySelector('#mensajeError');

// Agregar un evento submit al formulario
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Verificar si los campos de entrada están vacíos
  if (emailInput.value === '' || pswInput.value === '') {
    const errorMessage = 'Por favor, completa los campos para continuar.';
    // Mostrar el mensaje de error en la consola
    console.error(errorMessage);
    // Mostrar el mensaje de error en la etiqueta de error
    errorLabel.textContent = errorMessage;
  } else {
    // Crear un objeto con los datos del formulario
    const formData = {
      email: emailInput.value,
      password: pswInput.value
    };
    // Imprimir los datos del formulario en la consola
    console.log(formData);
    // Limpiar la etiqueta de error
    errorLabel.textContent = '';
  }
});*/

/*
// Seleccionamos los elementos del formulario
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

// Seleccionamos el elemento del mensaje de error
const mensajeError = document.getElementById('mensajeError');

// Añadimos el evento submit al formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let vacio = false;
    // Validamos que los inputs no estén vacíos
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            vacio = true;
        }
    });
    if (vacio) {
        // Si hay algún input vacío, mostramos el mensaje de error
        mensajeError.style.display = 'block';
    } else {
        // Si no, creamos un objeto con los datos del formulario
        const formData = {
          email: document.getElementById('email').value,
          password: document.getElementById('psw').value
        };
        // Imprimimos los datos del formulario en la consola en formato JSON
        console.log(JSON.stringify(formData));
        // Enviamos el formulario
        //formulario.submit();
    }
});*/

//EN CONCLUSION
/* 
ESTE ULTIMO CODIGO ABARCA TODO LO ANTERIOR:

- QUE SE ENVIE LOS DATOS DEL FORMULARIO EN JSON EN CONSOLA
- NO ENVIA LOS DATOS POR AJAX AUN
- MENSAJE ERROR POR CSS SI NO HAY TEXTO EN LOS INPUTS
- MENSAJE DE ERROR POR CONSOLA CON EL CSS ANTERIOR
*/

// Seleccionamos los elementos del formulario
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

// Seleccionamos el elemento del mensaje de error
const mensajeError = document.getElementById('mensajeError');

// Añadimos el evento submit al formulario
formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  // Verificamos si los campos de entrada están vacíos
  let vacio = false;
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      vacio = true;
    }
  });

  if (vacio) {
    //Limpiamos la consola
    console.clear();
    // Si hay algún input vacío, mostramos el mensaje de error
    mensajeError.style.display = 'block';
    mensajeError.textContent = 'Please, complete all the lefts inputs.';
    console.error(mensajeError.textContent);
  } else {
    //Limpiamos la consola
    console.clear();
    // Si no, creamos un objeto con los datos del formulario
    const formData = {
      //Obtiene los datos de los inputs
      email: document.getElementById('email').value,
      password: document.getElementById('psw').value
    };
    // Imprimimos los datos del formulario en la consola por JSON
    console.log(JSON.stringify(formData));
    // Limpiamos el mensaje de error
    mensajeError.style.display = 'none';
    mensajeError.textContent = 'Data sent correctly.';
    console.log(mensajeError.textContent);
    // Reiniciamos el formulario
    formulario.reset();
    // Aquí podríamos hacer la llamada a Ajax para enviar los datos a un servidor
  }
});
