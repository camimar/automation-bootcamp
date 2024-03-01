class productDetailedPage {

    elements = {

          getProductDescriptionTitle : () => cy.get('[id="or-product-description-block-title"]'),
          getDescriptionText : () => cy.get('[id="or-product-description-block-body"]'),
          getEyebrow : () => cy.contains('Meeting Room at The Spiral'),
          getMeetingRoomLink: () => cy.contains('a', 'Meeting Room'),
          getTheSpiralLink : () => cy.contains('a', 'The Spiral'),
          getFormCapacityText : () => cy.contains('div', 'Capacity'),
          getBodyCapacityText : () => cy.contains('p', 'Capacity: 10'),
          getSpaceCapabilitiesTitle : () => cy.contains('h2', 'Space Capabilities and Features'),
    }

    isTitleBirchVisible(){
      this.elements.getProductDescriptionTitle().should('be.visible')
    }

    verifyEyebrowAndLinks(){
      this.elements.getEyebrow().should('be.visible');
      this.elements.getMeetingRoomLink().should('be.visible')
      this.elements.getTheSpiralLink().should('be.visible')
      this.elements.getMeetingRoomLink().click()
      cy.url().should('include', '/new/spaces?region=new-york')
      cy.go('back')
      this.elements.getTheSpiralLink().click();
      cy.url().should('include', 'new/the-spiral');

    }

    areCapacityTextVisible(){
      this.elements.getFormCapacityText().should('be.visible')
      this.elements.getBodyCapacityText().should('be.visible')
    }

    isDescriptionVisible(){
      this.elements.getDescriptionText().should('be.visible')
    }

    verifySpaceCapabilitiesContent()
    {
      this.elements.getSpaceCapabilitiesTitle().should('be.visible')
      cy.get('img[alt="Internet and IT"]').should('be.visible')
      

      const expectedTexts = [
            "Video-conferencing by Logitech",
            "Presentation Capabilities",
            "Wireless Content Sharing",
            "High Speed Wi-Fi",
            "Dedicated Onsite Team",
            "Pantry and Lounge Access",
            "Unlimited Coffee and Tea",
            "Wheelchair Access"
    ];
    
      cy.get('div[data-text-body-details="true"]')
      .find('div') 
      .each((div) => {
        const p = cy.wrap(div).find('p').should('be.visible')
        cy.wrap(div).find('svg').should('be.visible')

        p.then((eachFeatureText) => {
          const text = eachFeatureText.text();
          expect(expectedTexts).to.include(text);
        });
      });
    }


    
  }

  module.exports = new productDetailedPage();