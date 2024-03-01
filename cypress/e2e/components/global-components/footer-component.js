class footer {

    elements = {

          getFooter : () => cy.get('[id="page-footer"]'),
          getInstagramButton: () => cy.get('[aria-label="Instagram"]'),
          getFacebookButton : () => cy.get('[aria-label="Facebook"]'),
          getLinkedInButton : () => cy.get('[aria-label="LinkedIn"]'),
          getLocationsButton : () => cy.contains('Locations'),
          getCoworkingButton : () => cy.get('[id="page-footer"]').contains('Coworking'),
          getMeetingsAndEventsButton : () => cy.get('[id="page-footer"]').contains('Meetings & Events'),
          getStudioVisitorCheckInButton : () => cy.contains('Studio Visitor Check-in'),
          getVirtualOfficeButton : () => cy.get('[id="page-footer"]').contains('Virtual Office'),
          getOurCompanyButton : () => cy.get('[id="page-footer"]').contains('Our Company'),
          getProductSummaryButton : () => cy.get('[id="page-footer"]').contains('Product Summary'),
          getCleaningServicesButton : () => cy.get('[id="page-footer"]').contains('Cleaning Services'),
    }

    isFooterVisible()
    {
      this.elements.getFooter().should('be.visible');
    }

    instagramUrlAttrFunction()
    {
      this.elements.getInstagramButton().should('be.visible').invoke('attr', 'target', '_self').click();
    }

    facebookUrlAttrFunction()
    {
      this.elements.getFacebookButton().should('be.visible').invoke('attr', 'target', '_self').click();
    }

    linkedInUrlAttrFunction()
    {
      this.elements.getLinkedInButton().should('be.visible').invoke('attr', 'target', '_self').click();
    }

    clickCoworkingFooterButton()
    {
      this.elements.getCoworkingButton().should('be.visible').invoke('attr', 'target', '_self').click();
    }

    clickMeetingsEventsFooterButton()
    {   
      this.elements.getMeetingsAndEventsButton().should('be.visible').invoke('attr', 'target', '_self').click();
    }

    clickVirtualOfficeFooterButton()
    {   
      this.elements.getVirtualOfficeButton().should('be.visible').invoke('attr', 'target', '_self').click();
    }

    clickOurCompanyFooterButton()
    {   
      this.elements.getOurCompanyButton().should('be.visible').invoke('attr', 'target', '_self').click();
    }

    clickProductSummaryButton()
    {   
      this.elements.getProductSummaryButton().should('be.visible').invoke('attr', 'target', '_self').click();
    }

    clickLocationsButton()
    {   
      this.elements.getLocationsButton().should('be.visible').invoke('attr', 'target', '_self').click();
    }

    clickStudioVisitorCheckInButton()
    {   
      this.elements.getStudioVisitorCheckInButton().should('be.visible').invoke('attr', 'target', '_self').click();
    }

    clickCleaningServicesButton()
    {   
      this.elements.getCleaningServicesButton().should('be.visible').invoke('attr', 'target', '_self').click();
    }

    clickContactUsButton()
    {   
      this.elements.getFooter().find('a').contains('Contact Us').click({multiple: true});
    } 

    verifyGeneralInquiriesMailHrefAttr(generalInquiries)
    {   
      return this.elements.getFooter().find('a').contains('info@yourstudio.com').should('have.attr', 'href', generalInquiries);
    }

    verifyBrokersMailHrefAttr(brokers) {   
      return this.elements.getFooter().find('a').contains('brokers@yourstudio.com').should('have.attr', 'href', brokers);
    }

    verifyFooterCopyrightYear() {
      const currentYear = new Date().getFullYear();
      const previousYear = currentYear - 1;
      this.elements.getFooter().find('p').contains(`© ${previousYear} Tishman Speyer. All Rights Reserved.`);
    }
  }

  module.exports = new footer();