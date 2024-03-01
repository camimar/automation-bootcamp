class header {

    elements = {

          getHeader: () => cy.get('[id="page-header"]'),
          getIcon : () => cy.get('[alt="Studio by Tishman Speyer"]'),
          getOfficeSuitesButton : () => cy.contains('a', 'Office Suites'),
          getVirtualOfficeButton : () => cy.contains('a', 'Virtual Office'), 
          getBookSpaceButton : () => cy.contains('button', 'Book a space'),
          
      }
      
   clickStudioIcon()
   {
      this.elements.getIcon().click({multiple: true});
   }

   clickCoworkingHeaderButton() // se busca en Header porque se repite en footer
   {
      this.elements.getHeader().find('a').contains('Coworking').click({multiple: true});
   }

   clickOfficeSuitesButton()
   {
      this.elements.getOfficeSuitesButton().click({multiple: true});
   }

   clickMeetingsEventsHeaderButton() // se busca en Header porque se repite en footer
   {
      this.elements.getHeader().find('a').contains('Meetings & Events').click({multiple: true});
   }

   clickVirtualOfficeButton()
   {
      this.elements.getVirtualOfficeButton().click({multiple: true});
   }

   clickOurCompanyHeaderButton() // se busca en Header porque se repite en footer
   {
      this.elements.getHeader().find('a').contains('Our Company').click({multiple: true});
   }

   clickBookSpaceButton()
   {
      this.elements.getBookSpaceButton().click({multiple: true});
   }

   clickContactUsHeaderButton() // se busca en Header porque se repite en footer
   {
      this.elements.getHeader().find('a').contains('Contact us').click({multiple: true});
   }

  }

  module.exports = new header();