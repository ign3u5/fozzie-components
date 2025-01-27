export default {
    locale: 'it-IT',
    companyName: 'Just Eat',
    openMenuText: 'Open Menu',
    loginNoScriptLinkText: 'Account',
    skipToMainContentText: 'Vai al contenuto principale',
    navTitle: 'Menu principale',

    navLinks: {
        accountInfo: {
            text: 'Account',
            url: '/account/info',
            gtm: 'click_account_your_account'
        },
        orderHistory: {
            text: 'Ordini',
            url: '/order-history',
            gtm: 'click_account_your_orders'
        },
        accountCredit: {
            text: "Credito dell'account",
            url: '/account/credit',
            gtm: 'click_account_credit'
        },
        savedCards: {
            text: 'Metodi di pagamento',
            url: '/account/saved-cards',
            gtm: 'click_account_saved_cards'
        },
        addressBook: {
            text: 'Indirizzi di consegna',
            url: '/account/addressbook',
            gtm: 'click_account_address_books'
        },
        contactPreferences: {
            text: 'Modalità di contatto',
            url: '/account/contact-preferences/',
            gtm: 'click_account_contact_preferences'
        }
    },

    userMenu: {
        buttonLabel: name => `L'account di ${name}`
    },

    logo: {
        gtm: 'click_logo'
    },
    help: {
        text: 'Aiuto?',
        url: '/help',
        gtm: 'click_help'
    },
    accountLogin: {
        text: 'Accedi',
        url: '/account/login',
        gtm: 'click_login'
    },
    accountLogout: {
        text: 'Esci',
        url: '/account/logout',
        gtm: 'click_logout'
    },
    deliveryEnquiry: {
        text: 'Diventa un rider Just Eat',
        url: 'https://www.justeat.it/rider',
        gtm: 'click_courier_signup'
    },
    countrySelector: {
        selectYourCountryText: 'Seleziona il tuo paese',
        currentCountryKey: 'it',
        changeCurrentCountry: 'Sei sul sito Italiano, licca qui per cambiare stato',
        goBackToMainMenu: 'Torna al menu principale'
    }
};
