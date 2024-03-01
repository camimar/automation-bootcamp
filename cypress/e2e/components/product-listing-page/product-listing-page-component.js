class productListingPage {

    elements = {

          getBookSpaceTitle : () => cy.contains('h1', 'Book a Space'),
          getResultsText : () => cy.contains('p', 'results'),
          getCityDropdownButton : ()  => cy.get('[id="headlessui-listbox-button-:Rcasn6:"]'),
          getBuildingDropdownButton: () => cy.get('[id="headlessui-listbox-button-:Rcisn6:"]'),
          getToggle : () => cy.get('[id="headlessui-switch-:Rb2sn6:"]'),
          getClearFiltersButton : () => cy.contains('button', 'Clear Filters'),
          getContactImage : () => cy.get('img[alt="An image of a large space with tall windows and people working at desks"]'),
          getFindText : () => cy.contains('p', 'Not finding what you like?'),
          getContactUsButton : () => cy.contains('button', 'Contact us'),
    }
    
    spaceTypesResults = {
      'Desk': '1 to 8 of 9 results',
      'Meeting Room': '1 to 8 of 16 results',
      'Event Space': '1 to 8 of 10 results',
      'Office': '1 to 8 of 12 results',
      'Suite': '1 to 3 of 3 results',
    }

    cityToBuildingsMap = {
      'New York': ['The Spiral', 'The JACX', '1230 Sixth Avenue', '1270 Sixth Avenue', '600 Fifth Avenue', '45 Rockefeller Plaza', 'Studio Grand Central', '300 Park Avenue', '11 West 42nd Street', 'CitySpire', '175 Varick Street'],
      'Los Angeles': ['Studio Beverly Hills'],
      'Washington DC': ['900 19th Street'],
      'Boston': ['125 High Street'],
      'Chicago': ['The Franklin'],
      'San Francisco': ['595 Market Street', '333 Bush Street'],
      'Brasilia': ['Concordia', 'AQWA']
    }

    isTitleVisible()
    {
      this.elements.getBookSpaceTitle().should('be.visible')
    }

    selectSpaceType(spaceType) {
      cy.contains('button', spaceType).click()
      return this
    }
  
    verifyResults(expectedResults) {
      this.elements.getResultsText().should('have.text', expectedResults)
      return this 
    }

    selectAndVerifySpaceType(spaceType) {
      this.selectSpaceType(spaceType)
      cy.wait(1000)
      const expectedResult = this.spaceTypesResults[spaceType]
      this.verifyResults(expectedResult)
      return this
    }

    spaceTypes = [
      'Desk',
      'Meeting Room',
      'Event Space',
      'Office',
      'Suite'
    ];

    //dropdown - city
    cityDropdownValidation()
    {
      const dropdownOptions = [
            'New York',
            'Los Angeles',
            'Washington DC',
            'Boston',
            'Chicago',
            'San Francisco',
            'Brasilia'   
      ];
      dropdownOptions.forEach((optionText) => {
            this.elements.getCityDropdownButton().click()
            cy.contains('li', optionText).click()
            this.elements.getCityDropdownButton().should('have.text', optionText)
          });
    }

    checkEachCityDropdown()
    {
      this.spaceTypes.forEach(spaceType => {
            this.selectSpaceType(spaceType)
            cy.wait(1000)
            this.cityDropdownValidation()
    })
    }

    //Buildings dropdowns

    selectCity(city) 
    {
      this.elements.getCityDropdownButton().click({force: true})
      cy.contains('div', city, { timeout: 10000 }).should('be.visible').click({force: true})
      return this
    }
  
    validateBuildingsForCity(city) 
    {
      const expectedBuildings = this.cityToBuildingsMap[city]
      cy.wait(1000)
      this.elements.getBuildingDropdownButton().click({force: true})
      cy.wait(1000)
      expectedBuildings.forEach(building => {
        cy.contains('div', building, { timeout: 10000 }).should('be.visible')
      })
  
      return this;
    }
  
    validateAllCitiesAndBuildings() 
    {
      Object.keys(this.cityToBuildingsMap).forEach(city => {
        this.selectCity(city)
        this.validateBuildingsForCity(city)
      });
    }

    // Toggle Instant Book

    spaceTypesResultsWithInstantBook = {
      'Desk': '1 to 8 of 9 results',
      'Meeting Room': '1 to 8 of 16 results',
      'Event Space': '1 to 4 of 4 results',
      'Office': '1 to 1 of 1 results',
      'Suite': 'We\'re sorry, but we couldn\'t find any spaces that match your search.',
    }

      toggleInstantBook(enable) 
      {
            if (enable) { this.elements.getToggle().click() }
            return this;
      }

      verifyResults(expectedResults) 
      {
            if (expectedResults === 'We\'re sorry, but we couldn\'t find any spaces that match your search.') {
            cy.contains(expectedResults).should('be.visible')
            } else {
            this.elements.getResultsText().should('have.text', expectedResults) }
            return this;
      }

      selectAndVerifySpaceTypeWithInstantBook(spaceType)
      {
            this.selectSpaceType(spaceType)
            cy.wait(1000)
            this.toggleInstantBook(true)
            cy.wait(1000)
            const expectedResult = this.spaceTypesResultsWithInstantBook[spaceType]
            this.verifyResults(expectedResult)
            this.toggleInstantBook(false) 
            return this
      }

      //--- Other methods

      clearFiltersFunctionality()
      {
            this.toggleInstantBook(true)
            this.elements.getToggle().should('have.attr', 'aria-checked', 'true')
            this.elements.getClearFiltersButton().click()
            this.elements.getToggle().should('have.attr', 'aria-checked', 'false')
      }

      verifyContactSectionAndButton()
      {
            this.elements.getContactImage().should('be.visible')
            this.elements.getFindText().should('be.visible')
            this.elements.getContactUsButton().click()
      }

}
 
  module.exports = new productListingPage();