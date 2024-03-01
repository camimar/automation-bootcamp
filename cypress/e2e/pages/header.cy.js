import header from '../components/global-components/header-component';

const spacesNewYork = Cypress.env('endpoint').spacesNewYork;
const coworking = Cypress.env('endpoint').coworking;
const officeSuites = Cypress.env('endpoint').officeSuites;
const meetingsEvents = Cypress.env('endpoint').meetingsEvents; 
const virtualOffice = Cypress.env('endpoint').virtualOffice;
const ourCompany = Cypress.env('endpoint').ourCompany;
const BookSpace = Cypress.env('endpoint').BookSpace;
const ContactUs = Cypress.env('endpoint').ContactUs;


describe('Tishman Header testing flows', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.url().should('contain', spacesNewYork)
    cy.acceptCookiesIfExists()
  });

  it('User is able to see Header', () => {
    
  });

  it('Click on the Studio icon - user is redirected to the home page', () => {
    header.clickStudioIcon()
    cy.url().should('eq', Cypress.config('baseUrl'));
  }); // esta prueba falla ya que al haber cambiado la url, el botón ya no redirige a un enlace válido

  it('Click on Header Coworking button', () => {
    header.clickCoworkingHeaderButton()
    cy.url({ timeout: 10000 }).should('include', coworking)
  });

  it('Click on Office Suites button', () => {
    header.clickOfficeSuitesButton()
    cy.url().should('include', officeSuites)
  });

  it('Click on header Meetings & Events button', () => {
    header.clickMeetingsEventsHeaderButton()
    cy.url().should('include', meetingsEvents)
  });

  it('Click on Virtual Office button', () => {
    header.clickVirtualOfficeButton()
    cy.url().should('include', virtualOffice)
  });

  it('Click on Our Company button', () => {
    header.clickOurCompanyHeaderButton()
    cy.url().should('include', ourCompany)
  });

  it('Click on BOOK A SPACE button', () => {
    header.clickBookSpaceButton()
    cy.url().should('include', BookSpace)
  });

  it('Click on CONTACT US button', () => {
    header.clickContactUsHeaderButton()
    cy.url().should('include', ContactUs)
  });

})