import productListingPage from "../components/product-listing-page/product-listing-page-component";


const spacesNewYork = Cypress.env('endpoint').spacesNewYork;
const ContactUs = Cypress.env('endpoint').ContactUs;



describe('Product Listing page - - Testing Flows ', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.url().should('contain', spacesNewYork)
    cy.acceptCookiesIfExists()
  });


  it('Title is visible', () => {
    productListingPage.isTitleVisible()
  });

  it('City dropdown validation - each option', () => {
    productListingPage.checkEachCityDropdown()
  });

  it('Buildings dropdown validation for each City', () => {
    productListingPage.validateAllCitiesAndBuildings();
  });

  // this object iterates over each option, making from one to 5 tests to verify all the results corresponding to each type of space.
  Object.keys(productListingPage.spaceTypesResults).forEach((spaceType) => {
    it(`User is able to see corresponding results when clicking in "${spaceType}" option`, () => {
      productListingPage.selectAndVerifySpaceType(spaceType);
    });
  });

  ['Desk', 'Meeting Room', 'Event Space', 'Office', 'Suite'].forEach(spaceType => {
    it(`User is able to see corresponding results for "${spaceType}" with Instant Book toggle enabled`, () => {
      productListingPage.selectAndVerifySpaceTypeWithInstantBook(spaceType);
    })
  });

  it('User is able to Clear filters after selecting Instant book', () => {
    productListingPage.clearFiltersFunctionality()
  });

  it('User is able to see Contact Us section and press the button', () => {
    productListingPage.verifyContactSectionAndButton()
    cy.url({ timeout: 10000 }).should('include', ContactUs)
  });


})