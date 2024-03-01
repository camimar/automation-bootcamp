import contact, { checkBoxValidation, sideComponentAddressContentIsVisible } from '../components/contact-us-page/contact-us-component';
const { faker } = require('@faker-js/faker');

const ContactUs = Cypress.env('endpoint').ContactUs;
const contactUsPage = Cypress.env('internalPages').contactUsPage;
const generalInquiries = Cypress.env('mailTo').generalInquiries;
const brokers = Cypress.env('mailTo').brokers;
const generalInquiriesTel = Cypress.env('mailTo').generalInquiriesTel;



describe('Contact Us - Testing Flows', () => {

  beforeEach(() => {
    cy.visit(contactUsPage)
    cy.url().should('contain', ContactUs)
    cy.acceptCookiesIfExists()

  });

  // Verify elements

  it('User is able to see title', () => {
    contact.isTitlevisible()
  })

  it('User is able to see paragraph under title', () => {
    contact.isTextVisible()
  });

  it('First name contact field is visible, enabled and required', () => {
    contact.firstNameFieldIsVisibleEnabledRequired()
  });

  it('Last name contact field is visible, enabled and required', () => {
    contact.lastNameFieldIsVisibleEnabledRequired()
  });

  it('Email contact field is visible, enabled and required', () => {
    contact.emailFieldIsVisibleEnabledRequired()
  });

  it('Phone number contact field is visible, enabled and optional', () => {
    contact.phoneNumberFieldIsVisibleEnabledOptional()
  });

  it('User is able to see Right panel Title ', () => {
    contact.sideComponentTitleIsVisible()
  });

  it('User is able to see Office Hours in right panel', () => {
    contact.sideComponentOfficeHoursContentIsVisible()
  });

  it('User is able to see General Inquiries in right panel', () => {
    contact.sideComponentAddressContentIsVisible()
  });

  it('User is able to see Brokers title and mail in right panel', () => {
    contact.sideComponentMailsPhoneContentIsVisible
  });

  it('Mails and Phone have href attribute', () => {
    contact.verifyGeneralInquiriesMailHrefAttr(generalInquiries)
    contact.verifyGeneralInquiriesTelHreffAttr(generalInquiriesTel)
    contact.verifyBrokersMailHrefAttr(brokers)
  });

  // General Fill form fields - Field Validation

  it('User is able to click in delete button for basic info fields - JS faker', () => { //no funciona bien delete
    contact.fillFormWithFaker()
    contact.clickAllClearFieldButtons()
  })

  it('email field validation - negative scenario', () => {
    contact.fillWithInvalidEmail()
  });

  it('Phone number validation - negative scenario', () => {
    contact.fillWithInvalidPhone()
  });

  // Inquiry form 
  
  it('Inquiry form  - Im interesed in Dropdown validation', () => {
    contact.imInterestedDropdownValidation()
  });

  it('Inquiry form - Text field validation', () => {
    contact.textAreaValidation()
  });

  it('Inquiry form checkbox validation', () => {
    contact.checkBoxValidation()
  });

  it('User is not able to send the Inquiry form without required fields', () => {
    contact.inquiryFormNegativeScenario()
  });

  it('Inquiry form - Fill the fields with JS Faker library', () => {
    contact.fillInquiryForm()
  });

  // Tour form 

  it('Tour Dropdown validation', () => {
    contact.scheduleTourDropDownValidation()
  });

  it('Tour form -  Interests checkbox', () => {
    contact.interestCheckBoxesValidation()
  });

  it('Tour form - Text field validation', () => {
    contact.textAreaValidationTourForm()
  });

  it('User is not able to send the Tour form without required fields', () => {
    contact.tourFormNegativeScenario()
  });

  it('Tour form - Fill the fields with JS Faker library', () => {
    contact.fillTourForm()
  });

})