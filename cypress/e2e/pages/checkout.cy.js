import checkout from '../components/checkout/checkout-component'


describe('CheckOut - Testing Flows', () => {

  beforeEach(() => {

    //DO NOT REMOVE.
    cy.intercept('https://r.stripe.com/0', (req) => {
        req.headers['origin'] = 'https://js.stripe.com'
    })

    //DO NOT REMOVE.
    cy.intercept('https://js.stripe.com/v3', (req) => {
        req.on('response', (res) => {
            res.body = res.body.replaceAll('window.top', 'window.self')
        })
    })

    it('Precondition test - PDP', () => {
    
    });

  });

  it('RENAME ME!', () => {

    //15 pruebas

    /*
    
  
    Revisar los componentes visuales de Reservation Details y Fee Details.

    Utilizar la librería de JS llamada faker, para llenar los campos solicitados. Para esto se deben utilizar las funciones predefinidas en /components/checkout/checkout-components.js

    Comprobar que el formulario (Contact Information) no se pueda enviar sin la información requerida.

    Comprobar escenarios negativos en el correo electrónico y teléfono.

    Comprobar escenarios negativo para el campo Discount Code

    Comprobar escenario válido para el campo Discount Code  ingresando alguno de los siguientes códigos: TEST20, TEST15

    Validar que el formularios sea guardado al presionar el botón Proceed to payment

    //payment

    Revisar los componentes visuales como Contact Information, Discount Code y Payment.

    Editar algún campo en Contact Information (botón Edit) y posteriormente verificar su actualización.

    Utilizar la librería de JS llamada faker, para llenar los campos solicitados. Para esto se deben utilizar las funciones predefinidas en /components/checkout/checkout-components.js

    Comprobar que el formulario (Payment) no se pueda enviar sin la información requerida.

    Comprobar casos negativos para código postal, número de tarjeta y caducidad.

    Validar que el formulario sea enviado al presionar el botón Complete Payment.


*/
  })

  


})

