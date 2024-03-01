const { faker } = require('@faker-js/faker');

class contact {

    elements = {

          getFirstNameField : () => cy.get('[id="firstName-field"]'),
          getLastNameField : () => cy.get('[id="lastName-field"]'),
          getEmailField : () => cy.get('[id="email-field"]'),
          getPhoneNumberField: () => cy.get('[id="phone-field"]'),
          getTitle : () => cy.contains('Contact Us'),
          getText : () => cy.contains('p', 'From private offices and suites'),
          getRightComponentTitle : () => cy.contains('Connect With Us'),
          getOfficeHoursTitle : () => cy.contains('Office Hours'),
          getDaysContent : () => cy.contains('p', 'Monday to Friday'),
          getHoursContent : () => cy.contains('p', '9 a.m. to 5 p.m. ET'),
          getAddress : () => cy.contains('Address'),
          getAdress2ndline : () => cy.contains('66 Hudson Blvd E'),
          getAdress3rdline : () => cy.contains('23rd Floor'),
          getAdress4thline : () => cy.contains('New York, NY 10001, USA'),
          getGeneralInquiriesTitle : () => cy.contains(' General Inquiries'),
          getGeneralInquiriesMail : () => cy.contains('info@yourstudio.com'),
          getGeneralInquiriesPhone : () => cy.contains('212-523-0850'),
          getBrokersTitle : () => cy.contains('Brokers'),
          getBrokersMail : () => cy.contains('brokers@yourstudio.com'),
          getSideComponent : () => cy.get('.pb-12'),
          getSubmitButton : () => cy.contains('Submit'),
          getClearField : () => cy.get('[aria-label="Clear field"]'),
          getInterestDropdownButton  : () => cy.get('[id="headlessui-listbox-button-:r4:"]'),
          getTextArea :  () => cy.get('[id="assistDetails-field"]'), 
          getCheckBox :  () => cy.get('[ id="headlessui-switch-:r7:"]'),
          getSuccessMessage  :  () =>  cy.get('.text-feedback-positive-300'),
          getTourFormOption : () => cy.contains('I’d like to schedule a tour'),
          getTourDropdownButton  : () =>cy.get('[id="headlessui-listbox-button-:rb:"]'), 
          
    }
  

  isTitlevisible()
  {
      this.elements.getTitle().should('be.visible');
  }

  isTextVisible()
  {
      this.elements.getText().should('be.visible');
  }

  firstNameFieldIsVisibleEnabledRequired()
  {
     return this.elements.getFirstNameField().should('be.visible')
      .should('be.enabled')
      .and('have.attr', 'required');
  }

  lastNameFieldIsVisibleEnabledRequired()
  {
     return this.elements.getLastNameField().should('be.visible')
      .should('be.enabled')
      .and('have.attr', 'required');
  }

  emailFieldIsVisibleEnabledRequired()
  {
     return this.elements.getEmailField().should('be.visible')
      .should('be.enabled')
      .and('have.attr', 'required');
  }

  phoneNumberFieldIsVisibleEnabledOptional()
  {
     return this.elements.getPhoneNumberField().should('be.visible')
      .should('be.enabled')
      .and('not.have.attr', 'required');
  }

  sideComponentTitleIsVisible()
  {
     return this.elements.getPhoneNumberField().should('be.visible');
  }

  sideComponentOfficeHoursContentIsVisible()
  {
      this.elements.getOfficeHoursTitle().should('be.visible')
      this.elements.getDaysContent().should('be.visible')
      this.elements.getHoursContent().should('be.visible')
  }

  sideComponentAddressContentIsVisible()
  {
      this.elements.getAddress().should('be.visible')
      this.elements.getAdress2ndline().should('be.visible')
      this.elements.getAdress3rdline().should('be.visible')
      this.elements.getAdress4thline().should('be.visible')
  }

  sideComponentMailsPhoneContentIsVisible()
  {
      this.elements.getGeneralInquiriesTitle().should('be.visible')
      this.elements.getGeneralInquiriesMail().should('be.visible')
      this.elements.getGeneralInquiriesPhone().should('be.visible')
      this.elements.getBrokersTitle().should('be.visible')
      this.elements.getBrokersMail().should('be.visible')
  }


  verifyGeneralInquiriesMailHrefAttr(generalInquiries)
  {   
    return this.elements.getSideComponent().find('a').contains('info@yourstudio.com').should('have.attr', 'href', generalInquiries);
  }

  verifyGeneralInquiriesTelHreffAttr(generalInquiriesTel) 
  {   
    return this.elements.getSideComponent().find('a').contains('212-523-0850').should('have.attr', 'href', generalInquiriesTel);
  }

  verifyBrokersMailHrefAttr(brokers) 
  {   
    return this.elements.getSideComponent().find('a').contains('brokers@yourstudio.com').should('have.attr', 'href', brokers);
  }

  fillWithInvalidEmail()
  {
      this.elements.getEmailField().type('aaa')
      this.elements.getSubmitButton().click()
      this.elements.getEmailField().should('have.class', 'border-feedback-negative-300');
  }

  fillWithInvalidPhone()
  {
      this.elements.getPhoneNumberField().type('abc').then((inputPhone) => {
            expect(inputPhone.val()).to.equal('');
      })

      this.elements.getPhoneNumberField().type('123456789').then((inputPhone) => {
            expect(inputPhone.val()).to.equal('123456789');

      })
  }

  //Faker ----------------------

  fillEmailWithFaker() 
  {
      const email1 = faker.internet.email()
      this.elements.getEmailField().clear().type(email1)
  }

  fillFirstNameWithFaker() 
  {
      const firstName1 = faker.person.firstName()
      this.elements.getFirstNameField().clear().type(firstName1)
  }

  fillLastNameWithFaker() 
  {
      const lastName1 = faker.person.lastName()
      this.elements.getLastNameField().clear().type(lastName1)
  }

  fillPhoneWithFaker()
  {
      const number1 = faker.phone.number('(###) ###-####')
      this.elements.getPhoneNumberField().clear().type(number1)
  }
    
  fillFormWithFaker()
  {
      this.fillFirstNameWithFaker()
      this.fillLastNameWithFaker()
      this.fillEmailWithFaker()
      this.fillPhoneWithFaker()
  }

  clickAllClearFieldButtons()
  {
      this.fillFormWithFaker()
      cy.get('[aria-label="Clear field"]').each((deleteButton, index) => {
            cy.wrap(deleteButton).click();
            cy.wait(500);
      })
  }

  fillInquiryForm()
  {
      this.fillFormWithFaker()
      this.elements.getInterestDropdownButton().click()
      cy.contains('li', 'The Spiral').click()
      this.textAreaValidation()
      this.checkBoxValidation()
      this.elements.getSubmitButton().click()
      this.elements.getSuccessMessage().should('exist')
  }

// Dropdown

  imInterestedDropdownValidation()
  {
      const dropdownOptions = [
            'The Spiral',
            'The JACX' ,
            '1230 Sixth Avenue' ,
            '1270 Sixth Avenue' ,
            '600 Fifth Avenue' ,
            '45 Rockefeller Plaza',
            '300 Park Avenue',
            '11 West 42nd Street',
            'CitySpire',
            '175 Varick Street',
            'Studio Beverly Hills',
            '900 19th Street',
            '125 High Street',
            'The Franklin',
            '595 Market Street',
            '333 Bush Street',
            'Concordia',
            'AQWA' 
      ];
      dropdownOptions.forEach((optionText) => {
            this.elements.getInterestDropdownButton().click();
            cy.contains('li', optionText).click();
            this.elements.getInterestDropdownButton().should('have.text', optionText);
          });
  }

//TextArea

  textAreaValidation()
  {
      this.elements.getTextArea().should('exist');
      const testingText = 'Testing testing testing texts';
      this.elements.getTextArea().type(testingText);
      this.elements.getTextArea().should('have.value', testingText);
  }

  checkBoxValidation()
  {
      this.elements.getCheckBox().not('[disabled]').click( { force: true } )
      this.elements.getCheckBox().should('have.attr', 'aria-checked', 'true')
  }

  inquiryFormNegativeScenario()
  {
      this.elements.getSubmitButton().click()
      cy.get('.text-feedback-negative-300').should('exist');
      cy.get('#tm-contact-error-notification').should('exist');
  }

  // Tour form
  selectTourForm()
  {
      this.elements.getTourFormOption().click()
  }

  scheduleTourDropDownValidation(){

      this.selectTourForm()

      const dropdownOptions = [
            'The Spiral',
            'The JACX' ,
            '1230 Sixth Avenue' ,
            '1270 Sixth Avenue' ,
            '600 Fifth Avenue' ,
            '45 Rockefeller Plaza',
            'Studio Grand Central',
            '300 Park Avenue',
            '11 West 42nd Street',
            'CitySpire',
            '175 Varick Street',
            'Studio Beverly Hills',
            '900 19th Street',
            '125 High Street',
            'The Franklin',
            '595 Market Street',
            '333 Bush Street',
            'Concordia',
            'AQWA' 
      ];
      dropdownOptions.forEach((optionText) => {
            this.elements.getTourDropdownButton().click();
            cy.contains('li', optionText).click();
            this.elements.getTourDropdownButton().should('have.text', optionText);
          });
  }

  interestCheckBoxesValidation()
  {
      this.selectTourForm();
      cy.contains('I’m interested in...').should('be.visible');
        
            const checkboxes = [
                  {id: '#headlessui-switch-\\:rd\\:'},
                  {id: '#headlessui-switch-\\:rf\\:'},
                  {id: '#headlessui-switch-\\:rh\\:'},
                  {id: '#headlessui-switch-\\:rj\\:'},
                  {id: '#headlessui-switch-\\:rl\\:'}, 
            ];
              
            checkboxes.forEach((checkbox) => {
                cy.get(checkbox.id) 
                    .should('be.visible')
                    .and('be.enabled')
                    .click()
                    .should('have.attr', 'aria-checked', 'true')
                    .click({multiple: true})
                    .should('have.attr', 'aria-checked', 'false'); 
            });
   }

   textAreaValidationTourForm()
   {
      this.selectTourForm()
      this.textAreaValidation()
   }

   tourFormNegativeScenario()
   {
      this.selectTourForm()
      this.inquiryFormNegativeScenario()
   }

   fillTourForm()
   {
      this.selectTourForm()
      this.fillFormWithFaker()
      this.elements.getTourDropdownButton().click()
      cy.contains('li', 'The Spiral').click()
      cy.get('#headlessui-switch-\\:rd\\:').click()
      this.textAreaValidation()
      this.checkBoxValidation()
      this.elements.getSubmitButton().click()
      this.elements.getSuccessMessage().should('exist')
   }

}     

  module.exports = new contact();