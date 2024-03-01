import footer, { verifyFooterCopyrightYear } from '../components/global-components/footer-component';

const spacesNewYork = Cypress.env('endpoint').spacesNewYork;
const instagram = Cypress.env('externalUrl').instagram;
const facebook = Cypress.env('externalUrl').facebook;
const linkedIn = Cypress.env('externalUrl').linkedIn;
const coworking = Cypress.env('endpoint').coworking;
const meetingsEvents = Cypress.env('endpoint').meetingsEvents; 
const virtualOffice = Cypress.env('endpoint').virtualOffice;
const ourCompany = Cypress.env('endpoint').ourCompany;
const productSummary = Cypress.env('endpoint').productSummary;
const locations = Cypress.env('endpoint').locations;
const studioVisitorCheckIn = Cypress.env('endpoint').studioVisitorCheckIn;
const cleaningServices = Cypress.env('endpoint').cleaningServices;
const ContactUs = Cypress.env('endpoint').ContactUs;
const generalInquiries = Cypress.env('mailTo').generalInquiries;
const brokers = Cypress.env('mailTo').brokers;



describe('Tishman Footer testing flows', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.url().should('contain', spacesNewYork)
    cy.acceptCookiesIfExists()
  });

    it('Is Footer visible', () => { 
      footer.isFooterVisible()
    });

    it('User is able to access Instagram by clicking social icon in Footer', () => { 
      footer.instagramUrlAttrFunction()
      cy.wait(3000);
      cy.url().should('eq', instagram);
    }); 

    it('User is able to access Facebook by clicking social icon in Footer', () => { 
      footer.facebookUrlAttrFunction()
      cy.wait(3000);
      cy.url().should('eq', facebook);
    });

    it('User is able to access LinkedIn by clicking social icon in Footer', () => { 
      footer.linkedInUrlAttrFunction()
      cy.wait(3000);
      cy.url().should('eq', linkedIn);
    });

    it('Click on footer Coworking button', () => { 
      footer.clickCoworkingFooterButton()
      cy.url({ timeout: 10000 }).should('include', coworking)
    });

    it('Click on footer Meetings & Events button', () => { 
      footer.clickMeetingsEventsFooterButton()
      cy.url({ timeout: 10000 }).should('include', meetingsEvents)
    });

    it('Click on footer Virtual Office button', () => { 
      footer.clickVirtualOfficeFooterButton()
      cy.url({ timeout: 10000 }).should('include', virtualOffice)
    });

    it('Click on footer Our Company button', () => { 
      footer.clickOurCompanyFooterButton()
      cy.url({ timeout: 10000 }).should('include', ourCompany)
    });

    it('Click on Product Summary button', () => { 
      footer.clickProductSummaryButton()
      cy.url({ timeout: 10000 }).should('include', productSummary)
    });

    it('Click on Locations button', () => { 
      footer.clickLocationsButton()
      cy.url({ timeout: 10000 }).should('include', locations)
    });

    it('Click on Studio Visitor Check In button', () => { 
      footer.clickStudioVisitorCheckInButton()
      cy.url({ timeout: 10000 }).should('include', studioVisitorCheckIn)
    });

    it('Click on Cleaning services button', () => { 
      footer.clickCleaningServicesButton()
      cy.url({ timeout: 10000 }).should('include', cleaningServices)
    });

    it('Click on Contact Us footer button', () => { 
      footer.clickContactUsButton()
      cy.url({ timeout: 10000 }).should('include', ContactUs)
    });

    it('Verify a href attr of General inquiries mailto', () => {
      footer.verifyGeneralInquiriesMailHrefAttr(generalInquiries);
    });

    it('Verify a href attr of Brokers mailto', () => {
      footer.verifyBrokersMailHrefAttr(brokers);
    });

    it('Verify year in Footer Copyright', () => {
      footer.verifyFooterCopyrightYear()
    });
})