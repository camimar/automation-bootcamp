import productDetailedPageComponent from "../components/product-detailed-page/product-detailed-page-component";

const birchPage = Cypress.env('internalPages' ).birchPage;
const birchEndPoint = Cypress.env('endpoint').birchEndPoint;


describe('Birch page - Testing Flows', () => {

  beforeEach(() => {
    cy.visit(birchPage)
    cy.url().should('contain', birchEndPoint)
    cy.acceptCookiesIfExists()
  });

  //21 pruebas 

  it('User is able to see Birch Title', () => {
    productDetailedPageComponent.isTitleBirchVisible()
  })

  it.only('User is able to see eyebrow and click in The spiral button', () => {
    productDetailedPageComponent.verifyEyebrowAndLinks()
  });

  it('User is able to see Capacity texts in Form and Body', () => {
    productDetailedPageComponent.areCapacityTextVisible()
  });

  it('User is able to see Description', () => {
    productDetailedPageComponent.isDescriptionVisible()
  });

  it.only('User is able too see all Space capabilities and Features content', () => { //falla
    productDetailedPageComponent.verifySpaceCapabilitiesContent()
  });

  it('Other workspace solutions at the spiral - Event Space', () => {
    
  });

  it('Other workspace solutions at the spiral - Suite', () => {
    
  });

  it('Learn more about button', () => {
    
  });

  it('Learn more button', () => {
    
  });

  it('Componente derecha - calendario', () => {
    
  });

  it('Componente derecha - duracion', () => {
    
  });

  it('Componente derecha -  espacios disponible', () => {
    
  });

  it('Componente derecha - additional services checkbox', () => {
    
  });

  it('Componente derecha - Inquire', () => {
    
  });

  it('Componente derecha - Instant book', () => {
    
  });


})