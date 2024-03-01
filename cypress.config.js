const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: "https://develop--studio-web-ee7fb9.netlify.app/new/spaces?region=new-york",
    "chromeWebSecurity": false,
    env: {
          endpoint: {
            spacesNewYork: '/new/spaces?region=new-york',
            coworking: '/locations/', // /office/?
            officeSuites: '/studio-private/',
            meetingsEvents: '/studio-gather/', 
            virtualOffice : '/virtual-office-signup/',
            ourCompany : '/about-us/',
            BookSpace: 'new/spaces?region=new-york',
            ContactUs: '/new/contact',
            productSummary: '/products/',
            locations: '/locations/',
            studioVisitorCheckIn: '/documents/vc/',
            cleaningServices: 'documents/sp-basic-cleaning/', 
            birchEndPoint: '/new/the-spiral/birch',
          },
          externalUrl: {
            instagram: 'https://www.instagram.com/studiobytishmanspeyer/',
            facebook: 'https://www.facebook.com/studiobytishmanspeyer/',
            linkedIn: 'https://www.linkedin.com/company/studiobytishmanspeyer/',
          },
          mailTo: {
            generalInquiries: 'mailto:info@yourstudio.com',
            brokers: 'mailto:brokers@yourstudio.com',
            generalInquiriesTel: 'tel:2125230850',
          },
          internalPages: {
            contactUsPage: 'https://develop--studio-web-ee7fb9.netlify.app/new/contact',
            birchPage: 'https://develop--studio-web-ee7fb9.netlify.app/new/the-spiral/birch',
          }
    },
    specPattern: "./cypress/e2e/pages/*.cy.js",
    setupNodeEvents(on, config) {
    },
  },
});
