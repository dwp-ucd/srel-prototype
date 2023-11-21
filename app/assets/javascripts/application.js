/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}




// =========
// VARIABLES
// =========

let consoleLogs = true; // Toggle console logs

// URLs
const pageUrl = window.location.pathname.split("/");
const domainPathUrl = pageUrl[pageUrl.length - 2];
const currentURL = pageUrl[pageUrl.length - 1];
const pageUrlPath = window.location.pathname;

// Age stuff
const statePensionAge = 67; // arbitrary age NEED TO CHECK THE EXACT STATE PENSION AGE
let patientAge = null;




// ==========================
// SELF INVOKED (RUN ON LOAD)
// ==========================

$(document).ready(function () {
  window.GOVUKFrontend.initAll();

  if (consoleLogs) { console.log('domainPathUrl "' + domainPathUrl + '"'); }
  // if (consoleLogs) { console.log('pageUrl "' + pageUrl + '"' ); }
  // if (consoleLogs) { console.log('currentURL "' + currentURL + '"' ); }
  if (consoleLogs) { console.log('pageUrlPath "' + pageUrlPath + '"'); }

  // Back button config
  // Navigation bar config
  if ((pageUrlPath === '/') ||
    (pageUrlPath === '/claimant-journey/') ||
    (pageUrlPath === '/srel-branching-options/') ||
    (pageUrlPath === '/auth-onboard-v01/') ||
    (pageUrlPath === '/auth-onboard-v04/') ||
    (pageUrlPath === '/auth-onboard-v07/') ||
    (pageUrlPath === '/auth-onboard-mvp01/') ||
    (pageUrlPath === '/auth-onboard-mvp02/') ||
    (pageUrlPath === '/auth-onboard-mvp03/') ||
    (pageUrlPath === '/error-states') ||

    // hcp-e2e-journey-v01
    ((pageUrlPath === '/hcp-e2e-journey-v01/') && !localStorage.getItem("hcpv01IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v01') && !localStorage.getItem("hcpv01IsLoggedIn")) ||
    (pageUrlPath === '/hcp-e2e-journey-v01/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/profile-setup') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/reminders-1-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/reminders-2-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/reminders-3-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/reminder-settings') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/signout') ||
    ((pageUrlPath === '/hcp-e2e-journey-v01/landing-pages/who-can-send-an-sr1-form') && !localStorage.getItem("hcpv01IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v01/landing-pages/how-to-complete-an-sr1-form') && !localStorage.getItem("hcpv01IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v01/landing-pages/send-an-online-sr1-form') && !localStorage.getItem("hcpv01IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v01/landing-pages/other-ways-to-send-an-sr1-form') && !localStorage.getItem("hcpv01IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v01/landing-pages/print') && !localStorage.getItem("hcpv01IsLoggedIn")) ||

    // hcp-e2e-journey-v02
    ((pageUrlPath === '/hcp-e2e-journey-v02/') && !localStorage.getItem("hcpv02IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v02') && !localStorage.getItem("hcpv02IsLoggedIn")) ||
    (pageUrlPath === '/hcp-e2e-journey-v02/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/profile-setup') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/signout') ||
    ((pageUrlPath === '/hcp-e2e-journey-v02/landing-pages/who-can-send-an-sr1-form') && !localStorage.getItem("hcpv02IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v02/landing-pages/how-to-complete-an-sr1-form') && !localStorage.getItem("hcpv02IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v02/landing-pages/send-an-online-sr1-form') && !localStorage.getItem("hcpv02IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v02/landing-pages/other-ways-to-send-an-sr1-form') && !localStorage.getItem("hcpv02IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v02/landing-pages/print') && !localStorage.getItem("hcpv02IsLoggedIn")) ||

    // hcp-e2e-journey-v03
    ((pageUrlPath === '/hcp-e2e-journey-v03/') && !localStorage.getItem("hcpv03IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v03') && !localStorage.getItem("hcpv03IsLoggedIn")) ||
    (pageUrlPath === '/hcp-e2e-journey-v03/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/profile-setup') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/signout') ||
    ((pageUrlPath === '/hcp-e2e-journey-v03/landing-pages/who-can-send-an-sr1-form') && !localStorage.getItem("hcpv03IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v03/landing-pages/how-to-complete-an-sr1-form') && !localStorage.getItem("hcpv03IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v03/landing-pages/send-an-online-sr1-form') && !localStorage.getItem("hcpv03IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v03/landing-pages/other-ways-to-send-an-sr1-form') && !localStorage.getItem("hcpv03IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v03/landing-pages/print') && !localStorage.getItem("hcpv03IsLoggedIn")) ||

    // hcp-e2e-journey-v04
    ((pageUrlPath === '/hcp-e2e-journey-v04/') && !localStorage.getItem("hcpv04IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v04') && !localStorage.getItem("hcpv04IsLoggedIn")) ||
    (pageUrlPath === '/hcp-e2e-journey-v04/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-01-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-02-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-03-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-04-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-05-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-06-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-07-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-07-a-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/check-profile-details') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/reminders-1-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/reminders-2-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/reminders-3-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/reminder-settings') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/signout') ||
    ((pageUrlPath === '/hcp-e2e-journey-v04/landing-pages/who-can-send-an-sr1-form') && !localStorage.getItem("hcpv04IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v04/landing-pages/how-to-complete-an-sr1-form') && !localStorage.getItem("hcpv04IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v04/landing-pages/send-an-online-sr1-form') && !localStorage.getItem("hcpv04IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v04/landing-pages/other-ways-to-send-an-sr1-form') && !localStorage.getItem("hcpv04IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v04/landing-pages/print') && !localStorage.getItem("hcpv04IsLoggedIn")) ||

    // hcp-e2e-journey-v05
    ((pageUrlPath === '/hcp-e2e-journey-v05/') && !localStorage.getItem("hcpv05IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v05') && !localStorage.getItem("hcpv05IsLoggedIn")) ||
    (pageUrlPath === '/hcp-e2e-journey-v05/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/signout') ||
    ((pageUrlPath === '/hcp-e2e-journey-v05/landing-pages/who-can-send-an-sr1-form') && !localStorage.getItem("hcpv05IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v05/landing-pages/how-to-complete-an-sr1-form') && !localStorage.getItem("hcpv05IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v05/landing-pages/send-an-online-sr1-form') && !localStorage.getItem("hcpv05IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v05/landing-pages/other-ways-to-send-an-sr1-form') && !localStorage.getItem("hcpv05IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v05/landing-pages/print') && !localStorage.getItem("hcpv05IsLoggedIn")) ||

    // hcp-e2e-journey-v06
    ((pageUrlPath === '/hcp-e2e-journey-v06/') && !localStorage.getItem("hcpv06IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v06') && !localStorage.getItem("hcpv06IsLoggedIn")) ||
    (pageUrlPath === '/hcp-e2e-journey-v06/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/signout') ||
    ((pageUrlPath === '/hcp-e2e-journey-v06/landing-pages/who-can-send-an-sr1-form') && !localStorage.getItem("hcpv06IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v06/landing-pages/how-to-complete-an-sr1-form') && !localStorage.getItem("hcpv06IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v06/landing-pages/send-an-online-sr1-form') && !localStorage.getItem("hcpv06IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v06/landing-pages/other-ways-to-send-an-sr1-form') && !localStorage.getItem("hcpv06IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v06/landing-pages/print') && !localStorage.getItem("hcpv06IsLoggedIn")) ||

    // hcp-e2e-journey-v07
    ((pageUrlPath === '/hcp-e2e-journey-v07/') && !localStorage.getItem("hcpv07IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v07') && !localStorage.getItem("hcpv07IsLoggedIn")) ||
    (pageUrlPath === '/hcp-e2e-journey-v07/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-01-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-02-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-03-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-04-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-05-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-06-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-07-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-07-a-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/check-profile-details') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/reminders-1-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/reminders-2-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/reminders-3-new') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/reminder-settings') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/signout') ||
    ((pageUrlPath === '/hcp-e2e-journey-v07/landing-pages/who-can-send-an-sr1-form') && !localStorage.getItem("hcpv07IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v07/landing-pages/how-to-complete-an-sr1-form') && !localStorage.getItem("hcpv07IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v07/landing-pages/send-an-online-sr1-form') && !localStorage.getItem("hcpv07IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v07/landing-pages/other-ways-to-send-an-sr1-form') && !localStorage.getItem("hcpv07IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v07/landing-pages/print') && !localStorage.getItem("hcpv07IsLoggedIn")) ||

    // hcp-e2e-journey-v08
    ((pageUrlPath === '/hcp-e2e-journey-v08/') && !localStorage.getItem("hcpv08IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v08') && !localStorage.getItem("hcpv08IsLoggedIn")) ||
    (pageUrlPath === '/hcp-e2e-journey-v08/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/signout') ||
    ((pageUrlPath === '/hcp-e2e-journey-v08/landing-pages/who-can-send-an-sr1-form') && !localStorage.getItem("hcpv08IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v08/landing-pages/how-to-complete-an-sr1-form') && !localStorage.getItem("hcpv08IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v08/landing-pages/send-an-online-sr1-form') && !localStorage.getItem("hcpv08IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v08/landing-pages/other-ways-to-send-an-sr1-form') && !localStorage.getItem("hcpv08IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v08/landing-pages/print') && !localStorage.getItem("hcpv08IsLoggedIn")) ||

    // hcp-e2e-journey-v09
    ((pageUrlPath === '/hcp-e2e-journey-v09/') && !localStorage.getItem("hcpv09IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v09') && !localStorage.getItem("hcpv09IsLoggedIn")) ||
    (pageUrlPath === '/hcp-e2e-journey-v09/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/signout') ||
    ((pageUrlPath === '/hcp-e2e-journey-v09/landing-pages/who-can-send-an-sr1-form') && !localStorage.getItem("hcpv09IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v09/landing-pages/how-to-complete-an-sr1-form') && !localStorage.getItem("hcpv09IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v09/landing-pages/send-an-online-sr1-form') && !localStorage.getItem("hcpv09IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v09/landing-pages/other-ways-to-send-an-sr1-form') && !localStorage.getItem("hcpv09IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-v09/landing-pages/print') && !localStorage.getItem("hcpv09IsLoggedIn")) ||

    // hcp-e2e-journey-mvp01
    ((pageUrlPath === '/hcp-e2e-journey-mvp01/') && !localStorage.getItem("hcpmvp01IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-mvp01') && !localStorage.getItem("hcpmvp01IsLoggedIn")) ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/feedback') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-01-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-02-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-03-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-04-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-05-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-06-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-07-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-07-a-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/check-profile-details') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/reminders-1-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/reminders-2-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/reminders-3-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/reminder-settings') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/signout') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/form-handler') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/signedout') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/before-you-start') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/no-permission') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/no-permission-role') ||
    ((pageUrlPath === '/hcp-e2e-journey-mvp01/landing-pages/who-can-send-an-sr1-form') && !localStorage.getItem("hcpmvp01IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-mvp01/landing-pages/how-to-complete-an-sr1-form') && !localStorage.getItem("hcpmvp01IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-mvp01/landing-pages/send-an-online-sr1-form') && !localStorage.getItem("hcpmvp01IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-mvp01/landing-pages/other-ways-to-send-an-sr1-form') && !localStorage.getItem("hcpmvp01IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-mvp01/landing-pages/print') && !localStorage.getItem("hcpmvp01IsLoggedIn")) ||

    // hcp-e2e-journey-mvp02
    ((pageUrlPath === '/hcp-e2e-journey-mvp02/') && !localStorage.getItem("hcpmvp02IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-mvp02') && !localStorage.getItem("hcpmvp02IsLoggedIn")) ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/feedback') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-01-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-02-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-03-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-04-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-05-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-06-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-07-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-07-a-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/check-profile-details') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/reminders-1-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/reminders-2-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/reminders-3-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/reminder-settings') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/signout') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/form-handler') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/signedout') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/before-you-start') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/no-permission') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/no-permission-role') ||
    ((pageUrlPath === '/hcp-e2e-journey-mvp02/landing-pages/who-can-send-an-sr1-form') && !localStorage.getItem("hcpmvp02IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-mvp02/landing-pages/how-to-complete-an-sr1-form') && !localStorage.getItem("hcpmvp02IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-mvp02/landing-pages/send-an-online-sr1-form') && !localStorage.getItem("hcpmvp02IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-mvp02/landing-pages/other-ways-to-send-an-sr1-form') && !localStorage.getItem("hcpmvp02IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-mvp02/landing-pages/print') && !localStorage.getItem("hcpmvp02IsLoggedIn")) ||

    // hcp-e2e-journey-mvp03
    ((pageUrlPath === '/hcp-e2e-journey-mvp03/') && !localStorage.getItem("hcpmvp03IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-mvp03') && !localStorage.getItem("hcpmvp03IsLoggedIn")) ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/feedback') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/profile-07-a-new') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/reminder-settings') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/signout') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/form-handler') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/signedout') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/before-you-start') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/no-permission') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/no-permission-role') ||
    ((pageUrlPath === '/hcp-e2e-journey-mvp03/landing-pages/who-can-send-an-sr1-form') && !localStorage.getItem("hcpmvp03IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-mvp03/landing-pages/how-to-complete-an-sr1-form') && !localStorage.getItem("hcpmvp03IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-mvp03/landing-pages/send-an-online-sr1-form') && !localStorage.getItem("hcpmvp03IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-mvp03/landing-pages/other-ways-to-send-an-sr1-form') && !localStorage.getItem("hcpmvp03IsLoggedIn")) ||
    ((pageUrlPath === '/hcp-e2e-journey-mvp03/landing-pages/print') && !localStorage.getItem("hcpmvp03IsLoggedIn"))
  ) {
    //const backLink = document.getElementById('backLink').style.display = 'none';
    //const navLink = document.getElementById('navLink').style.display = 'none';
    const navBar = document.getElementById('navBar').style.display = 'none';
  }

  // Back button config
  if (
    (pageUrlPath === '/hcp-e2e-journey-v01/confirmation-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/confirmation-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/confirmation-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/confirmation-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/confirmation-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/confirmation-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/confirmation-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/confirmation-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/confirmation-page') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/confirmation-page') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/confirmation-page-b') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/confirmation-page') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/confirmation-page-b') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/confirmation-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v01') ||
    (pageUrlPath === '/hcp-e2e-journey-v02') ||
    (pageUrlPath === '/hcp-e2e-journey-v03') ||
    (pageUrlPath === '/hcp-e2e-journey-v04') ||
    (pageUrlPath === '/hcp-e2e-journey-v05') ||
    (pageUrlPath === '/hcp-e2e-journey-v06') ||
    (pageUrlPath === '/hcp-e2e-journey-v07') ||
    (pageUrlPath === '/hcp-e2e-journey-v08') ||
    (pageUrlPath === '/hcp-e2e-journey-v09') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/landing-pages/who-can-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/landing-pages/who-can-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/landing-pages/who-can-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/landing-pages/who-can-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/landing-pages/who-can-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/landing-pages/who-can-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/landing-pages/who-can-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/landing-pages/who-can-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/landing-pages/who-can-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/landing-pages/who-can-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/landing-pages/who-can-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/landing-pages/who-can-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/landing-pages/how-to-complete-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/landing-pages/how-to-complete-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/landing-pages/how-to-complete-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/landing-pages/how-to-complete-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/landing-pages/how-to-complete-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/landing-pages/how-to-complete-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/landing-pages/how-to-complete-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/landing-pages/how-to-complete-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/landing-pages/how-to-complete-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/landing-pages/how-to-complete-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/landing-pages/how-to-complete-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/landing-pages/how-to-complete-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/landing-pages/send-an-online-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/landing-pages/send-an-online-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/landing-pages/send-an-online-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/landing-pages/send-an-online-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/landing-pages/send-an-online-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/landing-pages/send-an-online-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/landing-pages/send-an-online-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/landing-pages/send-an-online-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/landing-pages/send-an-online-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/landing-pages/send-an-online-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/landing-pages/send-an-online-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/landing-pages/send-an-online-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/landing-pages/other-ways-to-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/landing-pages/other-ways-to-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/landing-pages/other-ways-to-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/landing-pages/other-ways-to-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/landing-pages/other-ways-to-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/landing-pages/other-ways-to-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/landing-pages/other-ways-to-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/landing-pages/other-ways-to-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/landing-pages/other-ways-to-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/landing-pages/other-ways-to-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/landing-pages/other-ways-to-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/landing-pages/other-ways-to-send-an-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/landing-pages/print') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/landing-pages/print') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/landing-pages/print') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/landing-pages/print') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/landing-pages/print') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/landing-pages/print') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/landing-pages/print') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/landing-pages/print') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/landing-pages/print') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/landing-pages/print') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/landing-pages/print') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/landing-pages/print') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/start-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/organisation-signin-page') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/signout') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/signout') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/signout') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/signout') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/signout') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/signout') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/signout') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/signout') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/signout') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/signout') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/signedout') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/form-handler') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/signout') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/signedout') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/form-handler') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/signout') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/signedout') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/form-handler') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/account-new-dashboard-success') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/account-d-dashboard-success') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/account-new-dashboard-success') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/account-d-dashboard-success') ||
    (pageUrlPath === '/hcp-e2e-journey-v011/account-d-dashboard-success') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/account-new-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/account-new-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/account-new-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/account-new-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/account-new-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/account-new-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/account-new-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/account-new-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/account-new-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/account-new-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/task-list-sr1-form-start') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/task-list-sr1-form-start-timer') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/task-list-sr1-form-optional') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/submission-not-successful') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/task-list-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/before-you-start') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/account-new-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/task-list-sr1-form-start') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/task-list-sr1-form-start-timer') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/task-list-sr1-form-optional') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-sections-start') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-sections') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/task-list-sr1-form-start') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/submission-not-successful') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/task-list-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/before-you-start') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/account-new-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/task-list-sr1-form-start') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-start') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/task-list-sr1-form-start-timer') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/task-list-sr1-form-optional') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-sections') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/task-list-sr1-form-start') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/submission-not-successful') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/download-html') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/download-pdf') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/task-list-sr1-form')
  ) {
    const backLink = document.getElementById('backLink').style.display = 'none';
  }


  // BRANCHING

  // Branching option for claimant journey
  if (pageUrlPath === '/srel-branching-options/who-is-applying') {
    if (consoleLogs) console.log('patient age', localStorage.getItem('patientAge'));
    if (consoleLogs) console.log('applicationType', localStorage.getItem('applicationType'));
  }

  if (pageUrlPath === '/srel-branching-options/are-you-a-parent-guardian') {
    if (consoleLogs) console.log('patient age', localStorage.getItem('patientAge'));
    if (consoleLogs) console.log('applicationType', localStorage.getItem('applicationType'));
  }

  if (pageUrlPath === '/srel-branching-options/national-insurance-number') {
    if ((localStorage.getItem('applicationType') === 'dlac') || (localStorage.getItem('whoIsApplying') === 'I am applying for someone else') || (localStorage.getItem('whoIsApplying') === 'I am helping someone apply')) {
      document.getElementById('nationalInsuranceHeading').innerHTML = "What is their National Insurance number?";
      document.getElementById('yourTheirTxt').innerHTML = "their";
    } else {
      document.getElementById('nationalInsuranceHeading').innerHTML = "What is your National Insruance number?";
      document.getElementById('yourTheirTxt').innerHTML = "your";
    }
  }

  if (pageUrlPath === '/srel-branching-options/what-is-your-name') {
    if ((localStorage.getItem('applicationType') !== 'dlac') && ((localStorage.getItem('whoIsApplying') === 'I am applying for myself') || (localStorage.getItem('whoIsApplying') === 'I am helping someone apply'))) {
      document.getElementById('youTheyTxt').innerHTML = "you";
      document.getElementById('yourTheirTxt1').innerHTML = "your";
      document.getElementById('yourTheirTxt2').innerHTML = "your";
    } else {
      document.getElementById('youTheyTxt').innerHTML = "they";
      document.getElementById('yourTheirTxt1').innerHTML = "their";
      document.getElementById('yourTheirTxt2').innerHTML = "their";
    }
  }

  if (pageUrlPath === '/srel-branching-options/address') {
    if ((localStorage.getItem('applicationType') !== 'dlac') &&
      ((localStorage.getItem('whoIsApplying') === 'I am applying for myself') || (localStorage.getItem('whoIsApplying') === 'I am helping someone apply'))) {
      document.getElementById('yourTheirTxt1').innerHTML = "your";
      document.getElementById('yourTheirTxt2').innerHTML = "your";
      document.getElementById("liveAtSameAddressDiv").setAttribute('hidden', true);
    } else {
      document.getElementById('yourTheirTxt1').innerHTML = "their";
      document.getElementById('yourTheirTxt2').innerHTML = "their";
      document.getElementById("liveAtSameAddressDiv").removeAttribute('hidden', true);
    }
  }

  if (pageUrlPath === '/srel-branching-options/check-your-answers') {
    let patientName = localStorage.getItem('firstName') + ' ' + localStorage.getItem('middleName') + ' ' + localStorage.getItem('surname');
    document.getElementById("checkAnswersPatientName").innerHTML = patientName;
    console.log('localStorage.getItem("otherName")', localStorage.getItem("otherName"));
    if (localStorage.getItem("otherName") !== null) {
      document.getElementById("otherNameDiv").removeAttribute('hidden');
      document.getElementById("checkAnswersPatientOtherName").innerHTML = localStorage.getItem("otherName");
    }

    document.getElementById("checkAnswersDob").innerHTML = localStorage.getItem('patientDob');
    document.getElementById("checkAnswersPatientAge").innerHTML = localStorage.getItem('patientAge');
    document.getElementById("checkAnswersWhoApplying").innerHTML = localStorage.getItem('whoIsApplying');
    document.getElementById("checkAnswersNiNo").innerHTML = localStorage.getItem('nationalInsuranceNo');
    document.getElementById("checkAnswersApplicationType").innerHTML = localStorage.getItem('applicationType');
  }

  if (pageUrlPath === '/auth-onboard-v01/no-existing-account/account-created') {
    const aoAccountCreated = document.getElementById('aoAccountCreated')
    if (localStorage.getItem("aoWhoIsApplying") === "Myself") {
      aoAccountCreated.setAttribute("action", "/auth-onboard-v01/dashboard/myself/identifying-you");
    } else {
      aoAccountCreated.setAttribute("action", "/auth-onboard-v01/dashboard/everything-else/");
    }
  }


  // NAVIGATION - ACTIVE STATES

  // On some pages, no active states
  if ((pageUrlPath === '/hcp-e2e-journey-v01/incompleted-sr1-forms') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/incompleted-sr1-forms-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/incompleted-sr1-forms-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/completed-sr1-forms') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/completed-sr1-forms-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/completed-sr1-forms-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/sent-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/check-sr1-form') ||

    (pageUrlPath === '/hcp-e2e-journey-v02/incompleted-sr1-forms') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/incompleted-sr1-forms-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/incompleted-sr1-forms-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/completed-sr1-forms') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/completed-sr1-forms-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/completed-sr1-forms-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/sent-sr1-form') ||

    (pageUrlPath === '/hcp-e2e-journey-v03/incompleted-sr1-forms') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/incompleted-sr1-forms-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/incompleted-sr1-forms-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/completed-sr1-forms') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/completed-sr1-forms-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/completed-sr1-forms-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/sent-sr1-form') ||

    (pageUrlPath === '/hcp-e2e-journey-v04/incompleted-sr1-forms') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/incompleted-sr1-forms-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/incompleted-sr1-forms-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/completed-sr1-forms') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/completed-sr1-forms-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/completed-sr1-forms-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sent-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-01') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-02') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-03') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-04') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-04-a') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-05') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-06') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-07') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-08') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-09') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-10') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-11') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-12') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-13') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-01') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-02') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-03') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-04') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-04-a') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-05') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-06') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-07') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/check-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/check-sr1-form-finalised') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/task-list-sr1-form-start') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/task-list-sr1-form-start-error') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/task-list-sr1-form-saved') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/edit-incomplete-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/edit-incomplete-form-error') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/edit-incomplete-form-saved') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/edit-incomplete-filled-form-saved') ||

    (pageUrlPath === '/hcp-e2e-journey-v05/incompleted-sr1-forms') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/incompleted-sr1-forms-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/incompleted-sr1-forms-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/completed-sr1-forms') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/completed-sr1-forms-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/completed-sr1-forms-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sent-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-01') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-02') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-03') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-04') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-04-a') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-05') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-06') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-07') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-08') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-09') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-10') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-11') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-12') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-13') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-01') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-02') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-03') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-04') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-04-a') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-05') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-06') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-07') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/check-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/check-sr1-form-finalised') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/task-list-sr1-form-start') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/task-list-sr1-form-start-error') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/task-list-sr1-form-saved') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/edit-incomplete-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/edit-incomplete-form-error') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/edit-incomplete-form-saved') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/edit-incomplete-filled-form-saved') ||

    (pageUrlPath === '/hcp-e2e-journey-v06/incompleted-sr1-forms') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/incompleted-sr1-forms-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/incompleted-sr1-forms-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/completed-sr1-forms') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/completed-sr1-forms-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/completed-sr1-forms-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sent-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-01') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-02') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-03') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-04') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-04-a') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-05') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-06') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-07') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-08') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-09') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-10') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-11') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-12') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-13') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-01') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-02') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-03') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-04') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-04-a') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-05') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-06') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-07') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/check-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/check-sr1-form-finalised') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/task-list-sr1-form-start') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/task-list-sr1-form-start-error') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/task-list-sr1-form-saved') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/edit-incomplete-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/edit-incomplete-form-error') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/edit-incomplete-form-saved') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/edit-incomplete-filled-form-saved') ||

    (pageUrlPath === '/hcp-e2e-journey-v07/incompleted-sr1-forms') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/incompleted-sr1-forms-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/incompleted-sr1-forms-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/completed-sr1-forms') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/completed-sr1-forms-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/completed-sr1-forms-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/sent-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/sr1-form-patient-id-address') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/sr1-form-patient-id-address-c') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/sr1-form-patient-diagnosis') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/sr1-form-patient-diagnosis-c') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/sr1-form-patient-clinical-features') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/sr1-form-patient-clinical-features-c') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/sr1-form-patient-treatment') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/sr1-form-patient-treatment-c') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/check-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/check-sr1-form-finalised') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/task-list-sr1-form-start') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/task-list-sr1-form-start-error') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/task-list-sr1-form-saved') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/edit-incomplete-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/edit-incomplete-form-error') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/edit-incomplete-form-saved') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/edit-incomplete-filled-form-saved') ||

    (pageUrlPath === '/hcp-e2e-journey-v08/incompleted-sr1-forms') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/incompleted-sr1-forms-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/incompleted-sr1-forms-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/completed-sr1-forms') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/completed-sr1-forms-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/completed-sr1-forms-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/sent-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/sr1-form-patient-id-address') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/sr1-form-patient-id-address-c') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/sr1-form-patient-diagnosis') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/sr1-form-patient-diagnosis-c') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/sr1-form-patient-clinical-features') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/sr1-form-patient-clinical-features-c') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/sr1-form-patient-treatment') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/sr1-form-patient-treatment-c') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/check-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/check-sr1-form-finalised') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/task-list-sr1-form-start') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/task-list-sr1-form-start-error') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/task-list-sr1-form-saved') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/edit-incomplete-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/edit-incomplete-form-error') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/edit-incomplete-form-saved') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/edit-incomplete-filled-form-saved') ||

    (pageUrlPath === '/hcp-e2e-journey-v09/incompleted-sr1-forms') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/incompleted-sr1-forms-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/incompleted-sr1-forms-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/completed-sr1-forms') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/completed-sr1-forms-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/completed-sr1-forms-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/sent-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/sr1-form-patient-id-address') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/sr1-form-patient-id-address-c') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/sr1-form-patient-diagnosis') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/sr1-form-patient-diagnosis-c') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/sr1-form-patient-clinical-features') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/sr1-form-patient-clinical-features-c') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/sr1-form-patient-treatment') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/sr1-form-patient-treatment-c') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/check-sr1-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/check-sr1-form-finalised') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/task-list-sr1-form-start') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/task-list-sr1-form-start-error') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/task-list-sr1-form-saved') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/edit-incomplete-form') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/edit-incomplete-form-error') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/edit-incomplete-form-saved') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/edit-incomplete-filled-form-saved')
  ) {
    localStorage.removeItem('linkLiId');
    localStorage.removeItem('linkAnchorId');

    let accountHomeNavLiItem = document.getElementById('accountHomeNavLiItem');
    let yourProfileNavLiItem = document.getElementById('yourProfileNavLiItem');
    let yourRemindersNavLiItem = document.getElementById('yourRemindersNavLiItem');

    let accountHomeNavLink = document.getElementById('accountHomeNavLink');
    let yourProfileNavLink = document.getElementById('yourProfileNavLink');
    let yourRemindersNavLink = document.getElementById('yourRemindersNavLink');

    accountHomeNavLiItem.classList.remove('govuk-pagination__item--current');
    yourProfileNavLiItem.classList.remove('govuk-pagination__item--current');
    yourRemindersNavLiItem.classList.remove('govuk-pagination__item--current');

    accountHomeNavLiItem.classList.remove('govuk-header__navigation-item--active');
    yourProfileNavLiItem.classList.remove('govuk-header__navigation-item--active');
    yourRemindersNavLiItem.classList.remove('govuk-header__navigation-item--active');

    accountHomeNavLink.removeAttribute('aria-current');
    yourProfileNavLink.removeAttribute('aria-current');
    yourRemindersNavLink.removeAttribute('aria-current');
  }

  // Active state for the Account page
  if ((pageUrlPath === '/hcp-e2e-journey-v01/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/account-new-dashboard') ||

    (pageUrlPath === '/hcp-e2e-journey-v02/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/account-new-dashboard') ||

    (pageUrlPath === '/hcp-e2e-journey-v03/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/account-new-dashboard') ||

    (pageUrlPath === '/hcp-e2e-journey-v07/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/account-new-dashboard') ||

    (pageUrlPath === '/hcp-e2e-journey-v08/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/account-new-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/account-new-dashboard-success') ||

    (pageUrlPath === '/hcp-e2e-journey-v09/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/account-d-dashboard-success') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/account-new-dashboard')
  ) {
    localStorage.setItem('linkLiId', 'accountHomeNavLiItem');
    localStorage.setItem('linkAnchorId', 'yourRemindersNavLink');

    let accountHomeNavLiItem = document.getElementById('accountHomeNavLiItem');
    let yourProfileNavLiItem = document.getElementById('yourProfileNavLiItem');
    let yourRemindersNavLiItem = document.getElementById('yourRemindersNavLiItem');

    let accountHomeNavLink = document.getElementById('accountHomeNavLink');
    let yourProfileNavLink = document.getElementById('yourProfileNavLink');
    let yourRemindersNavLink = document.getElementById('yourRemindersNavLink');

    accountHomeNavLiItem.classList.remove('govuk-pagination__item--current');
    yourProfileNavLiItem.classList.remove('govuk-pagination__item--current');
    yourRemindersNavLiItem.classList.remove('govuk-pagination__item--current');

    accountHomeNavLink.removeAttribute('aria-current');
    yourProfileNavLink.removeAttribute('aria-current');
    yourRemindersNavLink.removeAttribute('aria-current');

    accountHomeNavLiItem.classList.add('govuk-pagination__item--current');
    accountHomeNavLink.setAttribute('aria-current', 'page');
  }

  // Active state for the Account page v04-v06
  if ((pageUrlPath === '/hcp-e2e-journey-v04/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/account-new-dashboard') ||

    (pageUrlPath === '/hcp-e2e-journey-v05/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/account-new-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/account-new-dashboard-success') ||

    (pageUrlPath === '/hcp-e2e-journey-v06/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/account-new-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/account-d-dashboard-success') ||

    (pageUrlPath === '/hcp-e2e-journey-mvp01/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/account-new-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/account-d-dashboard-success') ||

    (pageUrlPath === '/hcp-e2e-journey-mvp02/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/account-new-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/account-d-dashboard-success') ||

    (pageUrlPath === '/hcp-e2e-journey-mvp03/account-d-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/account-new-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/account-d-dashboard-success')
  ) {
    localStorage.setItem('linkLiId', 'accountHomeNavLiItem');
    localStorage.setItem('linkAnchorId', 'yourRemindersNavLink');

    let accountHomeNavLiItem = document.getElementById('accountHomeNavLiItem');
    let yourProfileNavLiItem = document.getElementById('yourProfileNavLiItem');
    let yourRemindersNavLiItem = document.getElementById('yourRemindersNavLiItem');

    let accountHomeNavLink = document.getElementById('accountHomeNavLink');
    let yourProfileNavLink = document.getElementById('yourProfileNavLink');
    let yourRemindersNavLink = document.getElementById('yourRemindersNavLink');

    accountHomeNavLiItem.classList.remove('govuk-header__navigation-item--active');
    yourProfileNavLiItem.classList.remove('govuk-header__navigation-item--active');
    yourRemindersNavLiItem.classList.remove('govuk-header__navigation-item--active');

    accountHomeNavLink.removeAttribute('aria-current');
    yourProfileNavLink.removeAttribute('aria-current');
    yourRemindersNavLink.removeAttribute('aria-current');

    accountHomeNavLiItem.classList.add('govuk-header__navigation-item--active');
    accountHomeNavLink.setAttribute('aria-current', 'page');
  }

  // Active state for the Your Profile page
  if ((pageUrlPath === '/hcp-e2e-journey-v01/profile-details') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/profile-edit') ||

    (pageUrlPath === '/hcp-e2e-journey-v02/profile-details') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/profile-edit') ||

    (pageUrlPath === '/hcp-e2e-journey-v03/profile-details') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/profile-edit') ||

    (pageUrlPath === '/hcp-e2e-journey-v07/profile-details') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-setup') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-edit') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-01') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-02') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-02') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-04') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-05') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-06') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-07-a') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/profile-07') ||

    (pageUrlPath === '/hcp-e2e-journey-v08/profile-details') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/profile-setup') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/profile-edit') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/profile-01') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/profile-02') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/profile-02') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/profile-04') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/profile-05') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/profile-06') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/profile-07-a') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/profile-07') ||

    (pageUrlPath === '/hcp-e2e-journey-v09/profile-details') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/profile-setup') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/profile-edit') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/profile-01') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/profile-02') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/profile-02') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/profile-04') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/profile-05') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/profile-06') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/profile-07-a') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/profile-07')
  ) {
    localStorage.setItem('linkLiId', 'yourProfileNavLiItem');
    localStorage.setItem('linkAnchorId', 'yourProfileNavLink');

    let accountHomeNavLiItem = document.getElementById('accountHomeNavLiItem');
    let yourProfileNavLiItem = document.getElementById('yourProfileNavLiItem');
    let yourRemindersNavLiItem = document.getElementById('yourRemindersNavLiItem');

    let accountHomeNavLink = document.getElementById('accountHomeNavLink');
    let yourProfileNavLink = document.getElementById('yourProfileNavLink');
    let yourRemindersNavLink = document.getElementById('yourRemindersNavLink');

    accountHomeNavLiItem.classList.remove('govuk-pagination__item--current');
    yourProfileNavLiItem.classList.remove('govuk-pagination__item--current');
    yourRemindersNavLiItem.classList.remove('govuk-pagination__item--current');

    accountHomeNavLink.removeAttribute('aria-current');
    yourProfileNavLink.removeAttribute('aria-current');
    yourRemindersNavLink.removeAttribute('aria-current');

    yourProfileNavLiItem.classList.add('govuk-pagination__item--current');
    yourProfileNavLink.setAttribute('aria-current', 'page');
  }


  // Active state for the Your Profile page v04 & v05 & v06
  if ((pageUrlPath === '/hcp-e2e-journey-v04/profile-details') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-setup') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-edit') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-01') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-02') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-02') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-04') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-05') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-06') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-07-a') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/profile-07') ||

    (pageUrlPath === '/hcp-e2e-journey-v05/profile-details') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/profile-setup') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/profile-edit') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/profile-01') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/profile-02') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/profile-02') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/profile-04') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/profile-05') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/profile-06') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/profile-07-a') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/profile-07') ||

    (pageUrlPath === '/hcp-e2e-journey-v06/profile-details') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/profile-setup') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/profile-edit') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/profile-00') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/profile-01') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/profile-02') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/profile-02') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/profile-04') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/profile-05') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/profile-06') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/profile-07-a') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/profile-07')

  ) {
    localStorage.setItem('linkLiId', 'yourProfileNavLiItem');
    localStorage.setItem('linkAnchorId', 'yourProfileNavLink');

    let accountHomeNavLiItem = document.getElementById('accountHomeNavLiItem');
    let yourProfileNavLiItem = document.getElementById('yourProfileNavLiItem');
    let yourRemindersNavLiItem = document.getElementById('yourRemindersNavLiItem');

    let accountHomeNavLink = document.getElementById('accountHomeNavLink');
    let yourProfileNavLink = document.getElementById('yourProfileNavLink');
    let yourRemindersNavLink = document.getElementById('yourRemindersNavLink');

    accountHomeNavLiItem.classList.remove('govuk-header__navigation-item--active');
    yourProfileNavLiItem.classList.remove('govuk-header__navigation-item--active');
    yourRemindersNavLiItem.classList.remove('govuk-header__navigation-item--active');

    accountHomeNavLink.removeAttribute('aria-current');
    yourProfileNavLink.removeAttribute('aria-current');
    yourRemindersNavLink.removeAttribute('aria-current');

    yourProfileNavLiItem.classList.add('govuk-header__navigation-item--active');
    yourProfileNavLink.setAttribute('aria-current', 'page');
  }


  // Active state for the Your Reminders page
  if ((pageUrlPath === '/hcp-e2e-journey-v01/reminder-settings') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/reminders') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/reminders-1') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/reminders-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/reminders-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v01/reminder-dashboard') ||

    (pageUrlPath === '/hcp-e2e-journey-v02/reminder-settings') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/reminders') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/reminders-1') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/reminders-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/reminders-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v02/reminder-dashboard') ||

    (pageUrlPath === '/hcp-e2e-journey-v03/reminder-settings') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/reminders') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/reminders-1') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/reminders-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/reminders-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v03/reminder-dashboard') ||

    (pageUrlPath === '/hcp-e2e-journey-v07/reminder-settings') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/reminders') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/reminders-1') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/reminders-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/reminders-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/reminder-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v07/settings') ||

    (pageUrlPath === '/hcp-e2e-journey-v08/reminder-settings') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/reminders') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/reminders-1') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/reminders-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/reminders-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/reminder-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v08/settings') ||

    (pageUrlPath === '/hcp-e2e-journey-v09/reminder-settings') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/reminders') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/reminders-1') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/reminders-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/reminders-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/reminder-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v09/settings')
  ) {
    localStorage.setItem('linkLiId', 'yourRemindersNavLiItem');
    localStorage.setItem('linkAnchorId', 'yourRemindersNavLink');

    let accountHomeNavLiItem = document.getElementById('accountHomeNavLiItem');
    let yourProfileNavLiItem = document.getElementById('yourProfileNavLiItem');
    let yourRemindersNavLiItem = document.getElementById('yourRemindersNavLiItem');

    let accountHomeNavLink = document.getElementById('accountHomeNavLink');
    let yourProfileNavLink = document.getElementById('yourProfileNavLink');
    let yourRemindersNavLink = document.getElementById('yourRemindersNavLink');

    accountHomeNavLiItem.classList.remove('govuk-pagination__item--current');
    yourProfileNavLiItem.classList.remove('govuk-pagination__item--current');
    yourRemindersNavLiItem.classList.remove('govuk-pagination__item--current');

    accountHomeNavLink.removeAttribute('aria-current');
    yourProfileNavLink.removeAttribute('aria-current');
    yourRemindersNavLink.removeAttribute('aria-current');

    yourRemindersNavLiItem.classList.add('govuk-pagination__item--current');
    yourRemindersNavLink.setAttribute('aria-current', 'page');
  }


  // Active state for the Your Reminders page v04 & v05 & v06 & mvp01 & mvp02 & mvp03
  if ((pageUrlPath === '/hcp-e2e-journey-v04/reminder-settings') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/reminders') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/reminders-1') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/reminders-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/reminders-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/reminder-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v04/settings') ||

    (pageUrlPath === '/hcp-e2e-journey-v05/reminder-settings') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/reminders') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/reminders-1') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/reminders-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/reminders-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/reminder-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v05/settings') ||

    (pageUrlPath === '/hcp-e2e-journey-v06/reminder-settings') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/reminders') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/reminders-1') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/reminders-2') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/reminders-3') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/reminder-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-v06/settings') ||

    (pageUrlPath === '/hcp-e2e-journey-mvp01/reminder-settings') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/reminders') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/reminders-1') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/reminders-2') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/reminders-3') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/reminder-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp01/settings') ||

    (pageUrlPath === '/hcp-e2e-journey-mvp02/reminder-settings') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/reminders') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/reminders-1') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/reminders-2') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/reminders-3') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/reminder-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp02/settings') ||

    (pageUrlPath === '/hcp-e2e-journey-mvp03/reminder-settings') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/reminders') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/reminders-1') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/reminders-2') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/reminders-3') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/reminder-dashboard') ||
    (pageUrlPath === '/hcp-e2e-journey-mvp03/settings')

  ) {
    localStorage.setItem('linkLiId', 'yourRemindersNavLiItem');
    localStorage.setItem('linkAnchorId', 'yourRemindersNavLink');

    let accountHomeNavLiItem = document.getElementById('accountHomeNavLiItem');
    let yourProfileNavLiItem = document.getElementById('yourProfileNavLiItem');
    let yourRemindersNavLiItem = document.getElementById('yourRemindersNavLiItem');

    let accountHomeNavLink = document.getElementById('accountHomeNavLink');
    let yourProfileNavLink = document.getElementById('yourProfileNavLink');
    let yourRemindersNavLink = document.getElementById('yourRemindersNavLink');

    accountHomeNavLiItem.classList.remove('govuk-header__navigation-item--active');
    yourProfileNavLiItem.classList.remove('govuk-header__navigation-item--active');
    yourRemindersNavLiItem.classList.remove('govuk-header__navigation-item--active');

    accountHomeNavLink.removeAttribute('aria-current');
    yourProfileNavLink.removeAttribute('aria-current');
    yourRemindersNavLink.removeAttribute('aria-current');

    yourRemindersNavLiItem.classList.add('govuk-header__navigation-item--active');
    yourRemindersNavLink.setAttribute('aria-current', 'page');
  }


  // =========================================================
  // HCP E2E JOURNEY - V01 & V02 & V03 & MVP01 & MVP02 & MVP03
  // =========================================================

  // Version 01 - Links on header
  if (domainPathUrl === 'hcp-e2e-journey-v01') {
    let accountHomeNavLink = document.getElementById('accountHomeNavLink');
    let yourProfileNavLink = document.getElementById('yourProfileNavLink');
    let yourRemindersNavLink = document.getElementById('yourRemindersNavLink');
    let getHelpNavLink = document.getElementById('getHelpNavLink');
    let signOutNavLink = document.getElementById('signOutNavLink');

    if (accountHomeNavLink) accountHomeNavLink.setAttribute('href', '/hcp-e2e-journey-v01/account-d-dashboard');
    if (yourProfileNavLink) yourProfileNavLink.setAttribute('href', '/hcp-e2e-journey-v01/profile-details');
    if (yourRemindersNavLink) yourRemindersNavLink.setAttribute('href', '/hcp-e2e-journey-v01/reminder-dashboard');

    const ulNavigation = document.getElementById('navigation');
    const liItems = ulNavigation.getElementsByTagName('li');
    localStorage.getItem('linkLiId');
    localStorage.getItem('linkAnchorId');

    for (let i = 0; i < liItems.length; i++) {
      let liItem = liItems[i];
      if (localStorage.getItem('linkLiId') === liItem.id) {
        liItem.classList.add('govuk-pagination__item--current');
        if (liItem.querySelector('.navigation-link')) liItem.querySelector('.navigation-link').setAttribute('aria-current', 'page');
      }

    }
  }

  // Version 02 - Links on header
  if (domainPathUrl === 'hcp-e2e-journey-v02') {
    let accountHomeNavLink = document.getElementById('accountHomeNavLink');
    let yourProfileNavLink = document.getElementById('yourProfileNavLink');
    let yourRemindersNavLink = document.getElementById('yourRemindersNavLink');
    let getHelpNavLink = document.getElementById('getHelpNavLink');
    let signOutNavLink = document.getElementById('signOutNavLink');

    if (accountHomeNavLink) accountHomeNavLink.setAttribute('href', '/hcp-e2e-journey-v02/account-d-dashboard');
    if (yourProfileNavLink) yourProfileNavLink.setAttribute('href', '/hcp-e2e-journey-v02/profile-details');
    if (yourRemindersNavLink) yourRemindersNavLink.setAttribute('href', '/hcp-e2e-journey-v02/reminder-dashboard');

    const ulNavigation = document.getElementById('navigation');
    const liItems = ulNavigation.getElementsByTagName('li');
    localStorage.getItem('linkLiId');
    localStorage.getItem('linkAnchorId');

    for (let i = 0; i < liItems.length; i++) {
      let liItem = liItems[i];
      if (localStorage.getItem('linkLiId') === liItem.id) {
        liItem.classList.add('govuk-pagination__item--current');
        if (liItem.querySelector('.navigation-link')) liItem.querySelector('.navigation-link').setAttribute('aria-current', 'page');
      }

    }
  }

  // Version 03 - Links on header
  if (domainPathUrl === 'hcp-e2e-journey-v03') {
    let accountHomeNavLink = document.getElementById('accountHomeNavLink');
    let yourProfileNavLink = document.getElementById('yourProfileNavLink');
    let yourRemindersNavLink = document.getElementById('yourRemindersNavLink');
    let getHelpNavLink = document.getElementById('getHelpNavLink');
    let signOutNavLink = document.getElementById('signOutNavLink');

    if (accountHomeNavLink) accountHomeNavLink.setAttribute('href', '/hcp-e2e-journey-v03/account-d-dashboard');
    if (yourProfileNavLink) yourProfileNavLink.setAttribute('href', '/hcp-e2e-journey-v03/profile-details');
    if (yourRemindersNavLink) yourRemindersNavLink.setAttribute('href', '/hcp-e2e-journey-v03/reminder-dashboard');

    const ulNavigation = document.getElementById('navigation');
    const liItems = ulNavigation.getElementsByTagName('li');

    localStorage.getItem('linkLiId');
    localStorage.getItem('linkAnchorId');

    for (let i = 0; i < liItems.length; i++) {
      let liItem = liItems[i];
      if (localStorage.getItem('linkLiId') === liItem.id) {
        liItem.classList.add('govuk-header__navigation-item--active');
        if (liItem.querySelector('.navigation-link')) liItem.querySelector('.navigation-link').setAttribute('aria-current', 'page');
      }

    }
  }

  // Version 04 - Links on header
  if (domainPathUrl === 'hcp-e2e-journey-v04') {
    let accountHomeNavLink = document.getElementById('accountHomeNavLink');
    let yourProfileNavLink = document.getElementById('yourProfileNavLink');
    let yourRemindersNavLink = document.getElementById('yourRemindersNavLink');
    let getHelpNavLink = document.getElementById('getHelpNavLink');
    let signOutNavLink = document.getElementById('signOutNavLink');

    if (accountHomeNavLink) accountHomeNavLink.setAttribute('href', '/hcp-e2e-journey-v04/account-d-dashboard');
    if (yourProfileNavLink) yourProfileNavLink.setAttribute('href', '/hcp-e2e-journey-v04/profile-details');
    if (yourRemindersNavLink) yourRemindersNavLink.setAttribute('href', '/hcp-e2e-journey-v04/reminder-dashboard');

    // const ulNavigation = document.getElementById('navigation');
    // const liItems = ulNavigation.getElementsByTagName('li');
    // localStorage.getItem('linkLiId');
    // localStorage.getItem('linkAnchorId');

    // for (let i = 0; i < liItems.length; i++) {
    //   let liItem = liItems[i];
    //   if (localStorage.getItem('linkLiId') === liItem.id) {
    //     liItem.classList.add('govuk-pagination__item--current');
    //     if (liItem.querySelector('.navigation-link')) liItem.querySelector('.navigation-link').setAttribute('aria-current', 'page');
    //   }

    // }
  }

  // Version 05 - Links on header
  if (domainPathUrl === 'hcp-e2e-journey-v05') {
    let accountHomeNavLink = document.getElementById('accountHomeNavLink');
    let yourProfileNavLink = document.getElementById('yourProfileNavLink');
    let yourRemindersNavLink = document.getElementById('yourRemindersNavLink');
    let getHelpNavLink = document.getElementById('getHelpNavLink');
    let signOutNavLink = document.getElementById('signOutNavLink');

    if (accountHomeNavLink) accountHomeNavLink.setAttribute('href', '/hcp-e2e-journey-v05/account-d-dashboard');
    if (yourProfileNavLink) yourProfileNavLink.setAttribute('href', '/hcp-e2e-journey-v05/profile-details');
    if (yourRemindersNavLink) yourRemindersNavLink.setAttribute('href', '/hcp-e2e-journey-v05/reminder-dashboard');
  }

  // Version 06 - Links on header
  if (domainPathUrl === 'hcp-e2e-journey-v06') {
    let accountHomeNavLink = document.getElementById('accountHomeNavLink');
    let yourProfileNavLink = document.getElementById('yourProfileNavLink');
    let yourRemindersNavLink = document.getElementById('yourRemindersNavLink');
    let getHelpNavLink = document.getElementById('getHelpNavLink');
    let signOutNavLink = document.getElementById('signOutNavLink');

    if (accountHomeNavLink) accountHomeNavLink.setAttribute('href', '/hcp-e2e-journey-v06/account-d-dashboard');
    if (yourProfileNavLink) yourProfileNavLink.setAttribute('href', '/hcp-e2e-journey-v06/profile-details');
    if (yourRemindersNavLink) yourRemindersNavLink.setAttribute('href', '/hcp-e2e-journey-v06/reminder-dashboard');
  }

  // Version 07 - Links on header
  if (domainPathUrl === 'hcp-e2e-journey-v07') {
    let accountHomeNavLink = document.getElementById('accountHomeNavLink');
    let yourProfileNavLink = document.getElementById('yourProfileNavLink');
    let yourRemindersNavLink = document.getElementById('yourRemindersNavLink');
    let getHelpNavLink = document.getElementById('getHelpNavLink');
    let signOutNavLink = document.getElementById('signOutNavLink');

    if (accountHomeNavLink) accountHomeNavLink.setAttribute('href', '/hcp-e2e-journey-v07/account-d-dashboard');
    if (yourProfileNavLink) yourProfileNavLink.setAttribute('href', '/hcp-e2e-journey-v07/profile-details');
    if (yourRemindersNavLink) yourRemindersNavLink.setAttribute('href', '/hcp-e2e-journey-v07/reminder-dashboard');
  }

  // Version 08 - Links on header
  if (domainPathUrl === 'hcp-e2e-journey-v08') {
    let accountHomeNavLink = document.getElementById('accountHomeNavLink');
    let yourProfileNavLink = document.getElementById('yourProfileNavLink');
    let yourRemindersNavLink = document.getElementById('yourRemindersNavLink');
    let getHelpNavLink = document.getElementById('getHelpNavLink');
    let signOutNavLink = document.getElementById('signOutNavLink');

    if (accountHomeNavLink) accountHomeNavLink.setAttribute('href', '/hcp-e2e-journey-v08/account-d-dashboard');
    if (yourProfileNavLink) yourProfileNavLink.setAttribute('href', '/hcp-e2e-journey-v08/profile-details');
    if (yourRemindersNavLink) yourRemindersNavLink.setAttribute('href', '/hcp-e2e-journey-v08/reminder-dashboard');
  }

  // Version 09 - Links on header
  if (domainPathUrl === 'hcp-e2e-journey-v09') {
    let accountHomeNavLink = document.getElementById('accountHomeNavLink');
    let yourProfileNavLink = document.getElementById('yourProfileNavLink');
    let yourRemindersNavLink = document.getElementById('yourRemindersNavLink');
    let getHelpNavLink = document.getElementById('getHelpNavLink');
    let signOutNavLink = document.getElementById('signOutNavLink');

    if (accountHomeNavLink) accountHomeNavLink.setAttribute('href', '/hcp-e2e-journey-v09/account-d-dashboard');
    if (yourProfileNavLink) yourProfileNavLink.setAttribute('href', '/hcp-e2e-journey-v09/profile-details');
    if (yourRemindersNavLink) yourRemindersNavLink.setAttribute('href', '/hcp-e2e-journey-v09/reminder-dashboard');
  }

  // Version mvp01 - Links on header
  if (domainPathUrl === 'hcp-e2e-journey-mvp01') {
    let startSR1NavLink = document.getElementById('startSR1Link');
    let getHelpNavLink = document.getElementById('getHelpNavLink');
    let signOutNavLink = document.getElementById('signOutNavLink');

    if (startSR1NavLink) startSR1NavLink.setAttribute('href', '/hcp-e2e-journey-mvp01/task-list-sr1-form-start-timer');
  }

  // Version mvp02 - Links on header
  if (domainPathUrl === 'hcp-e2e-journey-mvp02') {
    let startSR1NavLink = document.getElementById('startSR1Link');
    let getHelpNavLink = document.getElementById('getHelpNavLink');
    let signOutNavLink = document.getElementById('signOutNavLink');

    if (startSR1NavLink) startSR1NavLink.setAttribute('href', '/hcp-e2e-journey-mvp02/task-list-sr1-form-start-timer');
  }

  // Version mvp03 - Links on header
  if (domainPathUrl === 'hcp-e2e-journey-mvp03') {
    let startSR1NavLink = document.getElementById('startSR1Link');
    let getHelpNavLink = document.getElementById('getHelpNavLink');
    let signOutNavLink = document.getElementById('signOutNavLink');

    if (startSR1NavLink) startSR1NavLink.setAttribute('href', '/hcp-e2e-journey-mvp03/sr1-form-start-timer');
  }


  // Organisation Sign-in 

  if (pageUrlPath === '/hcp-e2e-journey-v01/organisation-signin-page' || pageUrlPath === '/hcp-e2e-journey-v02/organisation-signin-page' || pageUrlPath === '/hcp-e2e-journey-v03/organisation-signin-page' || pageUrlPath === '/hcp-e2e-journey-v04/organisation-signin-page' || pageUrlPath === '/hcp-e2e-journey-v05/organisation-signin-page' || pageUrlPath === '/hcp-e2e-journey-v06/organisation-signin-page' || pageUrlPath === '/hcp-e2e-journey-v07/organisation-signin-page' || pageUrlPath === '/hcp-e2e-journey-v08/organisation-signin-page' || pageUrlPath === '/hcp-e2e-journey-v09/organisation-signin-page' || pageUrlPath === '/hcp-e2e-journey-v10/organisation-signin-page' || pageUrlPath === '/hcp-e2e-journey-mvp01/organisation-signin-page' || pageUrlPath === '/hcp-e2e-journey-mvp02/organisation-signin-page' || pageUrlPath === '/hcp-e2e-journey-mvp03/organisation-signin-page') {
    let timer;
    let counter = 5;
    let hcpEmailAddress = 'jean.grey@nhs.trust.uk';
    let theHref = document.getElementById('organisationSignInRouting');//.setAttribute('href', );

    // Version v01
    if (pageUrlPath === '/hcp-e2e-journey-v01/organisation-signin-page') {
      theHref.setAttribute('href', '/hcp-e2e-journey-v01/profile-setup');
      localStorage.setItem('hcpv01HcpEmail', hcpEmailAddress);
    }

    // Version v02
    if (pageUrlPath === '/hcp-e2e-journey-v02/organisation-signin-page') {
      theHref.setAttribute('href', '/hcp-e2e-journey-v02/account-new-dashboard');
      localStorage.setItem('hcpv02HcpEmail', hcpEmailAddress);
      localStorage.setItem('hcpv02NewHcpUser', true);

      // and set their PROFILE and their REMINDER SETTINGS up front
      localStorage.setItem("hcpv02Fullname", 'Jean Grey');
      localStorage.setItem("hcpv02ProfessionalRegistrationNumber", 'ABCDE12345');
      localStorage.setItem("hcpv02MobileNumber", '07900 000 010');
      localStorage.setItem("hcpv02OrganisationName", 'The Magpie Trust');
      localStorage.setItem("hcpv02OrganisationAddressLine1", '02 Royal Hospital Road');
      localStorage.setItem("hcpv02OrganisationAddressLine2", 'Anytown');
      localStorage.setItem("hcpv02TownOrCity", "Glenrothes");
      localStorage.setItem("hcpv02Postcode", "SE1 AAA");
      localStorage.setItem("hcpv02Role", " General practitioner");
      localStorage.setItem("hcpv02ReceiveReminder", "Yes");
      localStorage.setItem("hcpv02ReminderType", "Email");
      localStorage.setItem("hcpv02ReminderFrequency", "Weekly");
    }

    // Version v03
    if (pageUrlPath === '/hcp-e2e-journey-v03/organisation-signin-page') {
      theHref.setAttribute('href', '/hcp-e2e-journey-v03/account-d-dashboard');
      localStorage.setItem('hcpv03HcpEmail', hcpEmailAddress);
      console.log('redirect to EXISTING dashboard');
      localStorage.setItem('hcpv03ExistingHcpUser', true);

      // and set their PROFILE and their REMINDER SETTINGS up front
      localStorage.setItem("hcpv03Fullname", 'Jean Grey');
      localStorage.setItem("hcpv03ProfessionalRegistrationNumber", 'ABCDE12345');
      localStorage.setItem("hcpv03MobileNumber", '07900 000 010');
      localStorage.setItem("hcpv03OrganisationName", 'The Magpie Trust');
      localStorage.setItem("hcpv03OrganisationAddressLine1", '02 Royal Hospital Road');
      localStorage.setItem("hcpv03OrganisationAddressLine2", 'Anytown');
      localStorage.setItem("hcpv03TownOrCity", "Glenrothes");
      localStorage.setItem("hcpv03Postcode", "SE1 AAA");
      localStorage.setItem("hcpv03Role", " General practitioner");
      localStorage.setItem("hcpv03ReceiveReminder", "Yes");
      localStorage.setItem("hcpv03ReminderType", "Email");
      localStorage.setItem("hcpv03ReminderFrequency", "Daily");
    }

    // Version v04
    if (pageUrlPath === '/hcp-e2e-journey-v04/organisation-signin-page') {
      theHref.setAttribute('href', '/hcp-e2e-journey-v04/profile-00');
      localStorage.setItem('hcpv04HcpEmail', hcpEmailAddress);
    }

    // Version v05
    if (pageUrlPath === '/hcp-e2e-journey-v05/organisation-signin-page') {
      theHref.setAttribute('href', '/hcp-e2e-journey-v05/account-new-dashboard-success');
      localStorage.setItem('hcpv05HcpEmail', hcpEmailAddress);
      localStorage.setItem('hcpv05NewHcpUser', true);

      // and set their PROFILE and their REMINDER SETTINGS up front
      localStorage.setItem("hcpv05Fullname", 'Jean Grey');
      localStorage.setItem("hcpv05ProfessionalRegistrationNumber", 'ABCDE12345');
      localStorage.setItem("hcpv05MobileNumber", '07900 000 010');
      localStorage.setItem("hcpv05OrganisationName", 'The Magpie Trust');
      localStorage.setItem("hcpv05OrganisationAddressLine1", '02 Royal Hospital Road');
      localStorage.setItem("hcpv05OrganisationAddressLine2", 'Anytown');
      localStorage.setItem("hcpv05TownOrCity", "Glenrothes");
      localStorage.setItem("hcpv05Postcode", "SE1 AAA");
      localStorage.setItem("hcpv05Role", " General practitioner");
      localStorage.setItem("hcpv05ReceiveReminder", "Yes");
      localStorage.setItem("hcpv05ReminderType", "Email");
      localStorage.setItem("hcpv05ReminderFrequency", "Weekly");
    }

    // Version v06
    if (pageUrlPath === '/hcp-e2e-journey-v06/organisation-signin-page') {
      theHref.setAttribute('href', '/hcp-e2e-journey-v06/account-d-dashboard-success');
      localStorage.setItem('hcpv06HcpEmail', hcpEmailAddress);
      console.log('redirect to EXISTING dashboard');
      localStorage.setItem('hcpv06ExistingHcpUser', true);

      // and set their PROFILE and their REMINDER SETTINGS up front
      localStorage.setItem("hcpv06Fullname", 'Jean Grey');
      localStorage.setItem("hcpv06ProfessionalRegistrationNumber", 'ABCDE12345');
      localStorage.setItem("hcpv06MobileNumber", '07900 000 010');
      localStorage.setItem("hcpv06OrganisationName", 'The Magpie Trust');
      localStorage.setItem("hcpv06OrganisationAddressLine1", '02 Royal Hospital Road');
      localStorage.setItem("hcpv06TownOrCity", "Glenrothes");
      localStorage.setItem("hcpv06Postcode", "SE1 AAA");
      localStorage.setItem("hcpv06Role", " General practitioner");
      localStorage.setItem("hcpv06ReceiveReminder", "Yes");
      localStorage.setItem("hcpv06ReminderType", "Email");
      localStorage.setItem("hcpv06ReminderFrequency", "Daily");
    }

    // Version v07
    if (pageUrlPath === '/hcp-e2e-journey-v07/organisation-signin-page') {
      theHref.setAttribute('href', '/hcp-e2e-journey-v07/profile-00');
      localStorage.setItem('hcpv07HcpEmail', hcpEmailAddress);
    }

    // Version v08
    if (pageUrlPath === '/hcp-e2e-journey-v08/organisation-signin-page') {
      theHref.setAttribute('href', '/hcp-e2e-journey-v08/account-new-dashboard-success');
      localStorage.setItem('hcpv08HcpEmail', hcpEmailAddress);
      localStorage.setItem('hcpv08NewHcpUser', true);

      // and set their PROFILE and their REMINDER SETTINGS up front
      localStorage.setItem("hcpv08Fullname", 'Jean Grey');
      localStorage.setItem("hcpv08ProfessionalRegistrationNumber", 'ABCDE12345');
      localStorage.setItem("hcpv08MobileNumber", '07900 000 010');
      localStorage.setItem("hcpv08OrganisationName", 'The Magpie Trust');
      localStorage.setItem("hcpv08OrganisationAddressLine1", '02 Royal Hospital Road');
      localStorage.setItem("hcpv08OrganisationAddressLine2", 'Anytown');
      localStorage.setItem("hcpv08TownOrCity", "Glenrothes");
      localStorage.setItem("hcpv08Postcode", "SE1 AAA");
      localStorage.setItem("hcpv08Role", " General practitioner");
      localStorage.setItem("hcpv08ReceiveReminder", "Yes");
      localStorage.setItem("hcpv08ReminderType", "Email");
      localStorage.setItem("hcpv08ReminderFrequency", "Weekly");
    }

    // Version v09
    if (pageUrlPath === '/hcp-e2e-journey-v09/organisation-signin-page') {
      theHref.setAttribute('href', '/hcp-e2e-journey-v09/account-d-dashboard-success');
      localStorage.setItem('hcpv09HcpEmail', hcpEmailAddress);
      console.log('redirect to EXISTING dashboard');
      localStorage.setItem('hcpv09ExistingHcpUser', true);

      // and set their PROFILE and their REMINDER SETTINGS up front
      localStorage.setItem("hcpv09Fullname", 'Jean Grey');
      localStorage.setItem("hcpv09ProfessionalRegistrationNumber", 'ABCDE12345');
      localStorage.setItem("hcpv09MobileNumber", '07900 000 010');
      localStorage.setItem("hcpv09OrganisationName", 'The Magpie Trust');
      localStorage.setItem("hcpv09OrganisationAddressLine1", '02 Royal Hospital Road');
      localStorage.setItem("hcpv09OrganisationAddressLine2", 'Anytown');
      localStorage.setItem("hcpv09TownOrCity", "Glenrothes");
      localStorage.setItem("hcpv09Postcode", "SE1 AAA");
      localStorage.setItem("hcpv09Role", " General practitioner");
      localStorage.setItem("hcpv09ReceiveReminder", "Yes");
      localStorage.setItem("hcpv09ReminderType", "Email");
      localStorage.setItem("hcpv09ReminderFrequency", "Daily");
    }

    // Version mvp01
    if (pageUrlPath === '/hcp-e2e-journey-mvp01/organisation-signin-page') {
      theHref.setAttribute('href', '/hcp-e2e-journey-mvp01/task-list-sr1-form-start');
      localStorage.setItem('hcpmvp01HcpEmail', hcpEmailAddress);
    }

    // Version mvp02
    if (pageUrlPath === '/hcp-e2e-journey-mvp02/organisation-signin-page') {
      theHref.setAttribute('href', '/hcp-e2e-journey-mvp02/task-list-sr1-form-start');
      localStorage.setItem('hcpmvp02HcpEmail', hcpEmailAddress);
    }

    // Version mvp03
    if (pageUrlPath === '/hcp-e2e-journey-mvp03/organisation-signin-page') {
      theHref.setAttribute('href', '/hcp-e2e-journey-mvp03/sr1-form-start');
      localStorage.setItem('hcpmvp03HcpEmail', hcpEmailAddress);
    }


    function countDown() {
      counter = counter - 1;
      window.status = counter;
      if ((counter == 0) && (pageUrlPath === '/hcp-e2e-journey-v01/organisation-signin-page')) {
        window.clearTimeout(timer);
        timer = null;
        window.location.pathname = "/hcp-e2e-journey-v01/profile-setup";

      } else if ((counter == 0) && (pageUrlPath === '/hcp-e2e-journey-v02/organisation-signin-page')) {
        window.clearTimeout(timer);
        timer = null;
        window.location.pathname = "/hcp-e2e-journey-v02/account-new-dashboard";

      } else if ((counter == 0) && (pageUrlPath === '/hcp-e2e-journey-v03/organisation-signin-page')) {
        window.clearTimeout(timer);
        timer = null;
        window.location.pathname = "/hcp-e2e-journey-v03/account-d-dashboard";

      } else if ((counter == 0) && (pageUrlPath === '/hcp-e2e-journey-v04/organisation-signin-page')) {
        window.clearTimeout(timer);
        timer = null;
        window.location.pathname = "/hcp-e2e-journey-v04/profile-00";

      } else if ((counter == 0) && (pageUrlPath === '/hcp-e2e-journey-v05/organisation-signin-page')) {
        window.clearTimeout(timer);
        timer = null;
        window.location.pathname = "/hcp-e2e-journey-v05/account-new-dashboard-success";

      } else if ((counter == 0) && (pageUrlPath === '/hcp-e2e-journey-v06/organisation-signin-page')) {
        window.clearTimeout(timer);
        timer = null;
        window.location.pathname = "/hcp-e2e-journey-v06/account-d-dashboard-success";

      } else if ((counter == 0) && (pageUrlPath === '/hcp-e2e-journey-v07/organisation-signin-page')) {
        window.clearTimeout(timer);
        timer = null;
        window.location.pathname = "/hcp-e2e-journey-v07/profile-00";

      } else if ((counter == 0) && (pageUrlPath === '/hcp-e2e-journey-v08/organisation-signin-page')) {
        window.clearTimeout(timer);
        timer = null;
        window.location.pathname = "/hcp-e2e-journey-v08/account-new-dashboard-success";

      } else if ((counter == 0) && (pageUrlPath === '/hcp-e2e-journey-v09/organisation-signin-page')) {
        window.clearTimeout(timer);
        timer = null;
        window.location.pathname = "/hcp-e2e-journey-v09/account-d-dashboard-success";

      } else if ((counter == 0) && (pageUrlPath === '/hcp-e2e-journey-mvp01/organisation-signin-page')) {
        window.clearTimeout(timer);
        timer = null;
        window.location.pathname = "/hcp-e2e-journey-mvp01/task-list-sr1-form-start";

      } else if ((counter == 0) && (pageUrlPath === '/hcp-e2e-journey-mvp02/organisation-signin-page')) {
        window.clearTimeout(timer);
        timer = null;
        window.location.pathname = "/hcp-e2e-journey-mvp02/task-list-sr1-form-start";

      } else if ((counter == 0) && (pageUrlPath === '/hcp-e2e-journey-mvp03/organisation-signin-page')) {
        window.clearTimeout(timer);
        timer = null;
        window.location.pathname = "/hcp-e2e-journey-mvp03/sr1-form-start";

      } else {
        timer = window.setTimeout(countDown, 0);
      }
      console.log('counter', counter);
      document.getElementById("timeCounted").innerHTML = counter;
    }

    timer = window.setTimeout(countDown, 0);
    window.status = counter;    // show the initial value
    console.log('counter', counter);
    // getEmailAddress();

    localStorage.setItem("hcpv01IsLoggedIn", true);
    localStorage.setItem("hcpv04IsLoggedIn", true);
    localStorage.setItem("hcpv07IsLoggedIn", true);
    localStorage.setItem("hcpmvp01IsLoggedIn", true);
    localStorage.setItem("hcpmvp02IsLoggedIn", true);
    localStorage.setItem("hcpmvp03IsLoggedIn", true);
  }

  // hcp-e2e-journey-v01
  if (pageUrlPath === '/hcp-e2e-journey-v01/profile-setup' || pageUrlPath === '/hcp-e2e-journey-v01/profile-edit') {
    let fullName = document.getElementById('fullName');
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber = document.getElementById('mobileNumber');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let postcode = document.getElementById('postcode');

    if (localStorage.getItem("hcpv01Fullname")) fullName.value = localStorage.getItem("hcpv01Fullname");
    if (localStorage.getItem("hcpv01ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpv01ProfessionalRegistrationNumber");
    if (localStorage.getItem("hcpv01HcpEmail")) emailAddress.value = localStorage.getItem("hcpv01HcpEmail");
    if (localStorage.getItem("hcpv01MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv01MobileNumber");
    if (localStorage.getItem("hcpv01OrganisationName")) organisationName.value = localStorage.getItem("hcpv01OrganisationName");
    if (localStorage.getItem("hcpv01OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv01OrganisationAddressLine1");
    if (localStorage.getItem("hcpv01OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv01OrganisationAddressLine2");
    if (localStorage.getItem("hcpv01TownOrCity")) townOrCity.value = localStorage.getItem("hcpv01TownOrCity");
    if (localStorage.getItem("hcpv01Postcode")) postcode.value = localStorage.getItem("hcpv01Postcode");

    if (localStorage.getItem("hcpv01Role")) {
      let role = localStorage.getItem("hcpv01Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpv01OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpv01UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-v01/send-an-sr1-form");
    }

  }

  // hcp-e2e-journey-v02
  if (pageUrlPath === '/hcp-e2e-journey-v02/profile-setup' || pageUrlPath === '/hcp-e2e-journey-v02/profile-edit') {
    let fullName = document.getElementById('fullName');
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber = document.getElementById('mobileNumber');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let postcode = document.getElementById('postcode');

    if (localStorage.getItem("hcpv02Fullname")) fullName.value = localStorage.getItem("hcpv02Fullname");
    if (localStorage.getItem("hcpv02ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpv02ProfessionalRegistrationNumber");
    if (localStorage.getItem("hcpv02HcpEmail")) emailAddress.value = localStorage.getItem("hcpv02HcpEmail");
    if (localStorage.getItem("hcpv02MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv02MobileNumber");
    if (localStorage.getItem("hcpv02OrganisationName")) organisationName.value = localStorage.getItem("hcpv02OrganisationName");
    if (localStorage.getItem("hcpv02OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv02OrganisationAddressLine1");
    if (localStorage.getItem("hcpv02OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv02OrganisationAddressLine2");
    if (localStorage.getItem("hcpv02TownOrCity")) townOrCity.value = localStorage.getItem("hcpv02TownOrCity");
    if (localStorage.getItem("hcpv02Postcode")) postcode.value = localStorage.getItem("hcpv02Postcode");

    if (localStorage.getItem("hcpv02@Role")) {
      let role = localStorage.getItem("hcpv02Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpv02OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpv02UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-v02/send-an-sr1-form");
    }
  }

  // hcp-e2e-journey-v03
  if (pageUrlPath === '/hcp-e2e-journey-v03/profile-setup' || pageUrlPath === '/hcp-e2e-journey-v01/profile-edit') {
    let fullName = document.getElementById('fullName');
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber = document.getElementById('mobileNumber');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let postcode = document.getElementById('postcode');

    if (localStorage.getItem("hcpv03Fullname")) fullName.value = localStorage.getItem("hcpv03Fullname");
    if (localStorage.getItem("hcpv03ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpv03ProfessionalRegistrationNumber");
    if (localStorage.getItem("hcpv03HcpEmail")) emailAddress.value = localStorage.getItem("hcpv03HcpEmail");
    if (localStorage.getItem("hcpv03MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv03MobileNumber");
    if (localStorage.getItem("hcpv03OrganisationName")) organisationName.value = localStorage.getItem("hcpv03OrganisationName");
    if (localStorage.getItem("hcpv03OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv03OrganisationAddressLine1");
    if (localStorage.getItem("hcpv03OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv03OrganisationAddressLine2");
    if (localStorage.getItem("hcpv03TownOrCity")) townOrCity.value = localStorage.getItem("hcpv03TownOrCity");
    if (localStorage.getItem("hcpv03Postcode")) postcode.value = localStorage.getItem("hcpv03Postcode");

    if (localStorage.getItem("hcpv03@Role")) {
      let role = localStorage.getItem("hcpv03Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpv03OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpv03UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-v03/send-an-sr1-form");
    }
  }

  // hcp-e2e-journey-v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/profile-edit') {
    let fullName = document.getElementById('fullName');
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber = document.getElementById('mobileNumber');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let postcode = document.getElementById('postcode');

    if (localStorage.getItem("hcpv04Fullname")) fullName.value = localStorage.getItem("hcpv04Fullname");
    if (localStorage.getItem("hcpv04ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpv04ProfessionalRegistrationNumber");
    if (localStorage.getItem("hcpv04MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv04MobileNumber");
    if (localStorage.getItem("hcpv04OrganisationName")) organisationName.value = localStorage.getItem("hcpv04OrganisationName");
    if (localStorage.getItem("hcpv04OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv04OrganisationAddressLine1");
    if (localStorage.getItem("hcpv04OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv04OrganisationAddressLine2");
    if (localStorage.getItem("hcpv04TownOrCity")) townOrCity.value = localStorage.getItem("hcpv04TownOrCity");
    if (localStorage.getItem("hcpv04Postcode")) postcode.value = localStorage.getItem("hcpv04Postcode");

    if (localStorage.getItem("hcpv04Role")) {
      let role = localStorage.getItem("hcpv04Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpv04OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpv04UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-v04/send-an-sr1-form");
    }

  }

  // hcp-e2e-journey-v04-name
  if (pageUrlPath === '/hcp-e2e-journey-v04/profile-01' || pageUrlPath === '/hcp-e2e-journey-v04/profile-01-new') {
    let fullName = document.getElementById('fullName');
    if (localStorage.getItem("hcpv04Fullname")) fullName.value = localStorage.getItem("hcpv04Fullname");
  }

  // hcp-e2e-journey-v04-professional-registration-number
  if (pageUrlPath === '/hcp-e2e-journey-v04/profile-03' || pageUrlPath === '/hcp-e2e-journey-v04/profile-03-new') {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    if (localStorage.getItem("hcpv04ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpv04ProfessionalRegistrationNumber");
  }

  // hcp-e2e-journey-v04-phone-number
  if (pageUrlPath === '/hcp-e2e-journey-v04/profile-04' || pageUrlPath === '/hcp-e2e-journey-v04/profile-04-new') {
    let mobileNumber = document.getElementById('mobileNumber');
    if (localStorage.getItem("hcpv04MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv04MobileNumber");
  }

  // hcp-e2e-journey-v04-name-organisation
  if (pageUrlPath === '/hcp-e2e-journey-v04/profile-05' || pageUrlPath === '/hcp-e2e-journey-v04/profile-05-new') {
    let organisationName = document.getElementById('organisationName');
    if (localStorage.getItem("hcpv04OrganisationName")) organisationName.value = localStorage.getItem("hcpv04OrganisationName");
  }

  // hcp-e2e-journey-v04-postcode
  if (pageUrlPath === '/hcp-e2e-journey-v04/profile-06' || pageUrlPath === '/hcp-e2e-journey-v04/profile-06-new' || pageUrlPath === '/hcp-e2e-journey-v04/profile-07-a' || pageUrlPath === '/hcp-e2e-journey-v04/profile-07-a-new' || pageUrlPath === '/hcp-e2e-journey-v04/profile-07' || pageUrlPath === '/hcp-e2e-journey-v04/profile-07-new') {
    let postcode = document.getElementById('postcode');
    if (localStorage.getItem("hcpv04Postcode")) postcode.value = localStorage.getItem("hcpv04Postcode");
  }

  // hcp-e2e-journey-v04-postcode
  if (pageUrlPath === '/hcp-e2e-journey-v04/profile-07-a' || pageUrlPath === '/hcp-e2e-journey-v04/profile-07-a-new' || pageUrlPath === '/hcp-e2e-journey-v04/profile-07' || pageUrlPath === '/hcp-e2e-journey-v04/profile-07-new') {
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    if (localStorage.getItem("hcpv04OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv04OrganisationAddressLine1");
    if (localStorage.getItem("hcpv04OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv04OrganisationAddressLine2");
    if (localStorage.getItem("hcpv04TownOrCity")) townOrCity.value = localStorage.getItem("hcpv04TownOrCity");
  }

  // hcp-e2e-journey-v04-role
  if (pageUrlPath === '/hcp-e2e-journey-v04/profile-02' || pageUrlPath === '/hcp-e2e-journey-v04/profile-02-new') {

    if (localStorage.getItem("hcpv04Role")) {
      let role = localStorage.getItem("hcpv04Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpv04OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpv04UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-v04/send-an-sr1-form");
    }
  }


  // hcp-e2e-journey-v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/profile-setup' || pageUrlPath === '/hcp-e2e-journey-v05/profile-edit') {
    let fullName = document.getElementById('fullName');
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber = document.getElementById('mobileNumber');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let postcode = document.getElementById('postcode');

    if (localStorage.getItem("hcpv05Fullname")) fullName.value = localStorage.getItem("hcpv05Fullname");
    if (localStorage.getItem("hcpv05ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpv05ProfessionalRegistrationNumber");
    if (localStorage.getItem("hcpv05MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv05MobileNumber");
    if (localStorage.getItem("hcpv05OrganisationName")) organisationName.value = localStorage.getItem("hcpv05OrganisationName");
    if (localStorage.getItem("hcpv05OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv05OrganisationAddressLine1");
    if (localStorage.getItem("hcpv05OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv05OrganisationAddressLine2");
    if (localStorage.getItem("hcpv05TownOrCity")) townOrCity.value = localStorage.getItem("hcpv05TownOrCity");
    if (localStorage.getItem("hcpv05Postcode")) postcode.value = localStorage.getItem("hcpv05Postcode");

    if (localStorage.getItem("hcpv05Role")) {
      let role = localStorage.getItem("hcpv05Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpv05OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpv05UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-v05/send-an-sr1-form");
    }
  }

  // hcp-e2e-journey-v05-name
  if (pageUrlPath === '/hcp-e2e-journey-v05/profile-01' || pageUrlPath === '/hcp-e2e-journey-v05/profile-01-new') {
    let fullName = document.getElementById('fullName');
    if (localStorage.getItem("hcpv05Fullname")) fullName.value = localStorage.getItem("hcpv05Fullname");
  }

  // hcp-e2e-journey-v05-professional-registration-number
  if (pageUrlPath === '/hcp-e2e-journey-v05/profile-03' || pageUrlPath === '/hcp-e2e-journey-v05/profile-03-new') {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    if (localStorage.getItem("hcpv05ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpv05ProfessionalRegistrationNumber");
  }

  // hcp-e2e-journey-v05-phone-number
  if (pageUrlPath === '/hcp-e2e-journey-v05/profile-04' || pageUrlPath === '/hcp-e2e-journey-v05/profile-04-new') {
    let mobileNumber = document.getElementById('mobileNumber');
    if (localStorage.getItem("hcpv05MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv05MobileNumber");
  }

  // hcp-e2e-journey-v05-name-organisation
  if (pageUrlPath === '/hcp-e2e-journey-v05/profile-05' || pageUrlPath === '/hcp-e2e-journey-v05/profile-05-new') {
    let organisationName = document.getElementById('organisationName');
    if (localStorage.getItem("hcpv05OrganisationName")) organisationName.value = localStorage.getItem("hcpv05OrganisationName");
  }

  // hcp-e2e-journey-v05-postcode
  if (pageUrlPath === '/hcp-e2e-journey-v05/profile-06' || pageUrlPath === '/hcp-e2e-journey-v05/profile-06-new' || pageUrlPath === '/hcp-e2e-journey-v05/profile-07' || pageUrlPath === '/hcp-e2e-journey-v05/profile-07-new' || pageUrlPath === '/hcp-e2e-journey-v05/profile-07-a' || pageUrlPath === '/hcp-e2e-journey-v05/profile-07-a-new') {
    let postcode = document.getElementById('postcode');
    if (localStorage.getItem("hcpv05Postcode")) postcode.value = localStorage.getItem("hcpv05Postcode");
  }

  // hcp-e2e-journey-v05-postcode
  if (pageUrlPath === '/hcp-e2e-journey-v05/profile-07-a' || pageUrlPath === '/hcp-e2e-journey-v05/profile-07-a-new' || pageUrlPath === '/hcp-e2e-journey-v05/profile-07' || pageUrlPath === '/hcp-e2e-journey-v05/profile-07-new') {
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    if (localStorage.getItem("hcpv05OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv05OrganisationAddressLine1");
    if (localStorage.getItem("hcpv05OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv05OrganisationAddressLine2");
    if (localStorage.getItem("hcpv05TownOrCity")) townOrCity.value = localStorage.getItem("hcpv05TownOrCity");
  }

  // hcp-e2e-journey-v05-role
  if (pageUrlPath === '/hcp-e2e-journey-v05/profile-02' || pageUrlPath === '/hcp-e2e-journey-v05/profile-02-new') {

    if (localStorage.getItem("hcpv05Role")) {
      let role = localStorage.getItem("hcpv05Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpv05OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpv05UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-v05/send-an-sr1-form");
    }
  }

  // hcp-e2e-journey-v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/profile-setup' || pageUrlPath === '/hcp-e2e-journey-v06/profile-edit') {
    let fullName = document.getElementById('fullName');
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber = document.getElementById('mobileNumber');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let postcode = document.getElementById('postcode');

    if (localStorage.getItem("hcpv06Fullname")) fullName.value = localStorage.getItem("hcpv06Fullname");
    if (localStorage.getItem("hcpv06ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpv06ProfessionalRegistrationNumber");
    if (localStorage.getItem("hcpv06MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv06MobileNumber");
    if (localStorage.getItem("hcpv06OrganisationName")) organisationName.value = localStorage.getItem("hcpv06OrganisationName");
    if (localStorage.getItem("hcpv06OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv06OrganisationAddressLine1");
    if (localStorage.getItem("hcpv06OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv06OrganisationAddressLine2");
    if (localStorage.getItem("hcpv06TownOrCity")) townOrCity.value = localStorage.getItem("hcpv06TownOrCity");
    if (localStorage.getItem("hcpv06Postcode")) postcode.value = localStorage.getItem("hcpv06Postcode");

    if (localStorage.getItem("hcpv06Role")) {
      let role = localStorage.getItem("hcpv06Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpv06OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpv06UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-v06/send-an-sr1-form");
    }
  }

  // hcp-e2e-journey-v06-name
  if (pageUrlPath === '/hcp-e2e-journey-v06/profile-01' || pageUrlPath === '/hcp-e2e-journey-v06/profile-01-new') {
    let fullName = document.getElementById('fullName');
    if (localStorage.getItem("hcpv06Fullname")) fullName.value = localStorage.getItem("hcpv06Fullname");
  }

  // hcp-e2e-journey-v06-professional-registration-number
  if (pageUrlPath === '/hcp-e2e-journey-v06/profile-03' || pageUrlPath === '/hcp-e2e-journey-v06/profile-03-new') {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    if (localStorage.getItem("hcpv06ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpv06ProfessionalRegistrationNumber");
  }

  // hcp-e2e-journey-v06-phone-number
  if (pageUrlPath === '/hcp-e2e-journey-v06/profile-04' || pageUrlPath === '/hcp-e2e-journey-v06/profile-04-new') {
    let mobileNumber = document.getElementById('mobileNumber');
    if (localStorage.getItem("hcpv06MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv06MobileNumber");
  }

  // hcp-e2e-journey-v06-name-organisation
  if (pageUrlPath === '/hcp-e2e-journey-v06/profile-05' || pageUrlPath === '/hcp-e2e-journey-v06/profile-05-new') {
    let organisationName = document.getElementById('organisationName');
    if (localStorage.getItem("hcpv06OrganisationName")) organisationName.value = localStorage.getItem("hcpv06OrganisationName");
  }

  // hcp-e2e-journey-v06-postcode
  if (pageUrlPath === '/hcp-e2e-journey-v06/profile-06' || pageUrlPath === '/hcp-e2e-journey-v06/profile-06-new' || pageUrlPath === '/hcp-e2e-journey-v06/profile-07' || pageUrlPath === '/hcp-e2e-journey-v06/profile-07-new') {
    let postcode = document.getElementById('postcode');
    if (localStorage.getItem("hcpv06Postcode")) postcode.value = localStorage.getItem("hcpv06Postcode");
  }

  // hcp-e2e-journey-v06-postcode
  if (pageUrlPath === '/hcp-e2e-journey-v06/profile-07-a' || pageUrlPath === '/hcp-e2e-journey-v06/profile-07-a-new') {
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    if (localStorage.getItem("hcpv06OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv06OrganisationAddressLine1");
    if (localStorage.getItem("hcpv06OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv06OrganisationAddressLine2");
    if (localStorage.getItem("hcpv06TownOrCity")) townOrCity.value = localStorage.getItem("hcpv06TownOrCity");
  }

  // hcp-e2e-journey-v06-role
  if (pageUrlPath === '/hcp-e2e-journey-v06/profile-02' || pageUrlPath === '/hcp-e2e-journey-v06/profile-02-new') {

    if (localStorage.getItem("hcpv06Role")) {
      let role = localStorage.getItem("hcpv06Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpv06OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpv06UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-v06/send-an-sr1-form");
    }
  }


  // hcp-e2e-journey-v07
  if (pageUrlPath === '/hcp-e2e-journey-v07/profile-edit') {
    let fullName = document.getElementById('fullName');
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber = document.getElementById('mobileNumber');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let postcode = document.getElementById('postcode');

    if (localStorage.getItem("hcpv07Fullname")) fullName.value = localStorage.getItem("hcpv07Fullname");
    if (localStorage.getItem("hcpv07ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpv07ProfessionalRegistrationNumber");
    if (localStorage.getItem("hcpv07MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv07MobileNumber");
    if (localStorage.getItem("hcpv07OrganisationName")) organisationName.value = localStorage.getItem("hcpv07OrganisationName");
    if (localStorage.getItem("hcpv07OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv07OrganisationAddressLine1");
    if (localStorage.getItem("hcpv07OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv07OrganisationAddressLine2");
    if (localStorage.getItem("hcpv07TownOrCity")) townOrCity.value = localStorage.getItem("hcpv07TownOrCity");
    if (localStorage.getItem("hcpv07Postcode")) postcode.value = localStorage.getItem("hcpv07Postcode");

    if (localStorage.getItem("hcpv07Role")) {
      let role = localStorage.getItem("hcpv07Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpv07OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpv07UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-v07/send-an-sr1-form");
    }
  }

  // hcp-e2e-journey-v07-name
  if (pageUrlPath === '/hcp-e2e-journey-v07/profile-01' || pageUrlPath === '/hcp-e2e-journey-v07/profile-01-new') {
    let fullName = document.getElementById('fullName');
    if (localStorage.getItem("hcpv07Fullname")) fullName.value = localStorage.getItem("hcpv07Fullname");
  }

  // hcp-e2e-journey-v07-professional-registration-number
  if (pageUrlPath === '/hcp-e2e-journey-v07/profile-03' || pageUrlPath === '/hcp-e2e-journey-v07/profile-03-new') {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    if (localStorage.getItem("hcpv07ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpv07ProfessionalRegistrationNumber");
  }

  // hcp-e2e-journey-v07-phone-number
  if (pageUrlPath === '/hcp-e2e-journey-v07/profile-04' || pageUrlPath === '/hcp-e2e-journey-v07/profile-04-new') {
    let mobileNumber = document.getElementById('mobileNumber');
    if (localStorage.getItem("hcpv07MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv07MobileNumber");
  }

  // hcp-e2e-journey-v07-name-organisation
  if (pageUrlPath === '/hcp-e2e-journey-v07/profile-05' || pageUrlPath === '/hcp-e2e-journey-v07/profile-04-new') {
    let organisationName = document.getElementById('organisationName');
    if (localStorage.getItem("hcpv07OrganisationName")) organisationName.value = localStorage.getItem("hcpv07OrganisationName");
  }

  // hcp-e2e-journey-v07-postcode
  if (pageUrlPath === '/hcp-e2e-journey-v07/profile-06' || pageUrlPath === '/hcp-e2e-journey-v07/profile-06-new' || pageUrlPath === '/hcp-e2e-journey-v07/profile-07' || pageUrlPath === '/hcp-e2e-journey-v07/profile-07-new' || pageUrlPath === '/hcp-e2e-journey-v07/profile-07-a' || pageUrlPath === '/hcp-e2e-journey-v07/profile-07-a-new') {
    let postcode = document.getElementById('postcode');
    if (localStorage.getItem("hcpv07Postcode")) postcode.value = localStorage.getItem("hcpv07Postcode");
  }

  // hcp-e2e-journey-v07-postcode
  if (pageUrlPath === '/hcp-e2e-journey-v07/profile-07-a' || pageUrlPath === '/hcp-e2e-journey-v07/profile-07-a-new' || pageUrlPath === '/hcp-e2e-journey-v07/profile-07' || pageUrlPath === '/hcp-e2e-journey-v07/profile-07-new') {
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    if (localStorage.getItem("hcpv07OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv07OrganisationAddressLine1");
    if (localStorage.getItem("hcpv07OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv07OrganisationAddressLine2");
    if (localStorage.getItem("hcpv07TownOrCity")) townOrCity.value = localStorage.getItem("hcpv07TownOrCity");
  }

  // hcp-e2e-journey-v07-role
  if (pageUrlPath === '/hcp-e2e-journey-v07/profile-02' || pageUrlPath === '/hcp-e2e-journey-v07/profile-02-new') {

    if (localStorage.getItem("hcpv07Role")) {
      let role = localStorage.getItem("hcpv07Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpv07OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpv07UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-v05/send-an-sr1-form");
    }
  }


  // hcp-e2e-journey-v08
  if (pageUrlPath === '/hcp-e2e-journey-v08/profile-setup' || pageUrlPath === '/hcp-e2e-journey-v08/profile-edit') {
    let fullName = document.getElementById('fullName');
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber = document.getElementById('mobileNumber');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let postcode = document.getElementById('postcode');

    if (localStorage.getItem("hcpv08Fullname")) fullName.value = localStorage.getItem("hcpv08Fullname");
    if (localStorage.getItem("hcpv08ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpv08ProfessionalRegistrationNumber");
    if (localStorage.getItem("hcpv08MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv08MobileNumber");
    if (localStorage.getItem("hcpv08OrganisationName")) organisationName.value = localStorage.getItem("hcpv08OrganisationName");
    if (localStorage.getItem("hcpv08OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv08OrganisationAddressLine1");
    if (localStorage.getItem("hcpv08OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv08OrganisationAddressLine2");
    if (localStorage.getItem("hcpv08TownOrCity")) townOrCity.value = localStorage.getItem("hcpv08TownOrCity");
    if (localStorage.getItem("hcpv08Postcode")) postcode.value = localStorage.getItem("hcpv08Postcode");

    if (localStorage.getItem("hcpv08Role")) {
      let role = localStorage.getItem("hcpv08Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpv08OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpv08UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-v08/send-an-sr1-form");
    }
  }

  // hcp-e2e-journey-v08-name
  if (pageUrlPath === '/hcp-e2e-journey-v08/profile-01' || pageUrlPath === '/hcp-e2e-journey-v08/profile-01-new') {
    let fullName = document.getElementById('fullName');
    if (localStorage.getItem("hcpv08Fullname")) fullName.value = localStorage.getItem("hcpv08Fullname");
  }

  // hcp-e2e-journey-v08-professional-registration-number
  if (pageUrlPath === '/hcp-e2e-journey-v08/profile-03' || pageUrlPath === '/hcp-e2e-journey-v08/profile-03-new') {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    if (localStorage.getItem("hcpv08ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpv08ProfessionalRegistrationNumber");
  }

  // hcp-e2e-journey-v08-phone-number
  if (pageUrlPath === '/hcp-e2e-journey-v08/profile-04' || pageUrlPath === '/hcp-e2e-journey-v08/profile-04-new') {
    let mobileNumber = document.getElementById('mobileNumber');
    if (localStorage.getItem("hcpv08MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv08MobileNumber");
  }

  // hcp-e2e-journey-v08-name-organisation
  if (pageUrlPath === '/hcp-e2e-journey-v08/profile-05' || pageUrlPath === '/hcp-e2e-journey-v08/profile-05-new') {
    let organisationName = document.getElementById('organisationName');
    if (localStorage.getItem("hcpv08OrganisationName")) organisationName.value = localStorage.getItem("hcpv08OrganisationName");
  }

  // hcp-e2e-journey-v08-postcode
  if (pageUrlPath === '/hcp-e2e-journey-v08/profile-06' || pageUrlPath === '/hcp-e2e-journey-v08/profile-06-new' || pageUrlPath === '/hcp-e2e-journey-v08/profile-07' || pageUrlPath === '/hcp-e2e-journey-v08/profile-07-new' || pageUrlPath === '/hcp-e2e-journey-v08/profile-07-a' || pageUrlPath === '/hcp-e2e-journey-v08/profile-07-a-new') {
    let postcode = document.getElementById('postcode');
    if (localStorage.getItem("hcpv08Postcode")) postcode.value = localStorage.getItem("hcpv08Postcode");
  }

  // hcp-e2e-journey-v08-postcode
  if (pageUrlPath === '/hcp-e2e-journey-v08/profile-07' || pageUrlPath === '/hcp-e2e-journey-v08/profile-07-new' || pageUrlPath === '/hcp-e2e-journey-v08/profile-07-a' || pageUrlPath === '/hcp-e2e-journey-v08/profile-07-a-new') {
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    if (localStorage.getItem("hcpv08OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv08OrganisationAddressLine1");
    if (localStorage.getItem("hcpv08OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv08OrganisationAddressLine2");
    if (localStorage.getItem("hcpv08TownOrCity")) townOrCity.value = localStorage.getItem("hcpv08TownOrCity");
  }

  // hcp-e2e-journey-v08-role
  if (pageUrlPath === '/hcp-e2e-journey-v08/profile-02' || pageUrlPath === '/hcp-e2e-journey-v08/profile-02-new') {

    if (localStorage.getItem("hcpv08Role")) {
      let role = localStorage.getItem("hcpv08Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpv08OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpv08UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-v08/send-an-sr1-form");
    }
  }

  // hcp-e2e-journey-v09
  if (pageUrlPath === '/hcp-e2e-journey-v09/profile-setup' || pageUrlPath === '/hcp-e2e-journey-v09/profile-edit') {
    let fullName = document.getElementById('fullName');
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber = document.getElementById('mobileNumber');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let postcode = document.getElementById('postcode');

    if (localStorage.getItem("hcpv09Fullname")) fullName.value = localStorage.getItem("hcpv09Fullname");
    if (localStorage.getItem("hcpv09ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpv09ProfessionalRegistrationNumber");
    if (localStorage.getItem("hcpv09MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv09MobileNumber");
    if (localStorage.getItem("hcpv09OrganisationName")) organisationName.value = localStorage.getItem("hcpv09OrganisationName");
    if (localStorage.getItem("hcpv09OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv09OrganisationAddressLine1");
    if (localStorage.getItem("hcpv09OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv09OrganisationAddressLine2");
    if (localStorage.getItem("hcpv09TownOrCity")) townOrCity.value = localStorage.getItem("hcpv09TownOrCity");
    if (localStorage.getItem("hcpv09Postcode")) postcode.value = localStorage.getItem("hcpv09Postcode");

    if (localStorage.getItem("hcpv09Role")) {
      let role = localStorage.getItem("hcpv09Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpv09OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpv09UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-v09/send-an-sr1-form");
    }
  }

  // hcp-e2e-journey-v09-name
  if (pageUrlPath === '/hcp-e2e-journey-v09/profile-01' || pageUrlPath === '/hcp-e2e-journey-v09/profile-01-new') {
    let fullName = document.getElementById('fullName');
    if (localStorage.getItem("hcpv09Fullname")) fullName.value = localStorage.getItem("hcpv09Fullname");
  }

  // hcp-e2e-journey-v09-professional-registration-number
  if (pageUrlPath === '/hcp-e2e-journey-v09/profile-03' || pageUrlPath === '/hcp-e2e-journey-v09/profile-03-new') {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    if (localStorage.getItem("hcpv09ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpv09ProfessionalRegistrationNumber");
  }

  // hcp-e2e-journey-v09-phone-number
  if (pageUrlPath === '/hcp-e2e-journey-v09/profile-04' || pageUrlPath === '/hcp-e2e-journey-v09/profile-04-new') {
    let mobileNumber = document.getElementById('mobileNumber');
    if (localStorage.getItem("hcpv09MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv09MobileNumber");
  }

  // hcp-e2e-journey-v09-name-organisation
  if (pageUrlPath === '/hcp-e2e-journey-v09/profile-05' || pageUrlPath === '/hcp-e2e-journey-v09/profile-05-new') {
    let organisationName = document.getElementById('organisationName');
    if (localStorage.getItem("hcpv09OrganisationName")) organisationName.value = localStorage.getItem("hcpv09OrganisationName");
  }

  // hcp-e2e-journey-v09-postcode
  if (pageUrlPath === '/hcp-e2e-journey-v09/profile-06' || pageUrlPath === '/hcp-e2e-journey-v09/profile-06-new' || pageUrlPath === '/hcp-e2e-journey-v09/profile-07' || pageUrlPath === '/hcp-e2e-journey-v09/profile-07-new' || pageUrlPath === '/hcp-e2e-journey-v09/profile-07-a' || pageUrlPath === '/hcp-e2e-journey-v09/profile-07-a-new') {
    let postcode = document.getElementById('postcode');
    if (localStorage.getItem("hcpv09Postcode")) postcode.value = localStorage.getItem("hcpv09Postcode");
  }

  // hcp-e2e-journey-v09-postcode
  if (pageUrlPath === '/hcp-e2e-journey-v09/profile-07-a' || pageUrlPath === '/hcp-e2e-journey-v09/profile-07' || pageUrlPath === '/hcp-e2e-journey-v09/profile-07-new' || pageUrlPath === '/hcp-e2e-journey-v09/profile-07-a-new') {
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    if (localStorage.getItem("hcpv09OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv09OrganisationAddressLine1");
    if (localStorage.getItem("hcpv09OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv09OrganisationAddressLine2");
    if (localStorage.getItem("hcpv09TownOrCity")) townOrCity.value = localStorage.getItem("hcpv09TownOrCity");
  }

  // hcp-e2e-journey-v09-role
  if (pageUrlPath === '/hcp-e2e-journey-v09/profile-02' || pageUrlPath === '/hcp-e2e-journey-v09/profile-02-new') {

    if (localStorage.getItem("hcpv09Role")) {
      let role = localStorage.getItem("hcpv09Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpv09OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpv09UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-v09/send-an-sr1-form");
    }
  }


  // hcp-e2e-journey-mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-edit') {
    let fullName = document.getElementById('fullName');
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber = document.getElementById('mobileNumber');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationAddressCounty = document.getElementById('organisationAddressCounty');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let postcode = document.getElementById('postcode');

    if (localStorage.getItem("hcpmvp01Fullname")) fullName.value = localStorage.getItem("hcpmvp01Fullname");
    if (localStorage.getItem("hcpmvp01ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpmvp01ProfessionalRegistrationNumber");
    if (localStorage.getItem("hcpmvp01MobileNumber")) mobileNumber.value = localStorage.getItem("hcpmvp01MobileNumber");
    if (localStorage.getItem("hcpmvp01OrganisationName")) organisationName.value = localStorage.getItem("hcpmvp01OrganisationName");
    if (localStorage.getItem("hcpmvp01OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpmvp01OrganisationAddressLine1");
    if (localStorage.getItem("hcpmvp01OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpmvp01OrganisationAddressLine2");
    if (localStorage.getItem("hcpmvp01OrganisationAddressCounty")) organisationAddressCounty.innerHTML = localStorage.getItem("hcpmvp01OrganisationAddressCounty");
    if (localStorage.getItem("hcpmvp01TownOrCity")) organisationTownCity.value = localStorage.getItem("hcpmvp01TownOrCity");
    if (localStorage.getItem("hcpmvp01Postcode")) postcode.value = localStorage.getItem("hcpmvp01Postcode");

    if (localStorage.getItem("hcpmvp01Role")) {
      let role = localStorage.getItem("hcpmvp01Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpmvp01OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpmvp01UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-mvp01/send-an-sr1-form");
    }
  }

  // hcp-e2e-journey-mvp01-name
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-01' || pageUrlPath === '/hcp-e2e-journey-mvp01/profile-01-new') {
    let firstName = document.getElementById('firstName');
    //let middleName = document.getElementById('middleName');
    let lastName = document.getElementById('lastName');
    if (localStorage.getItem("hcpmvp01Firstname")) firstName.value = localStorage.getItem("hcpmvp01Firstname");
    //if (localStorage.getItem("hcpmvp01Middlename")) middleName.value = localStorage.getItem("hcpmvp01Middlename");
    if (localStorage.getItem("hcpmvp01Lastname")) lastName.value = localStorage.getItem("hcpmvp01Lastname");
  }

  // hcp-e2e-journey-mvp01-professional-registration-number
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-03' || pageUrlPath === '/hcp-e2e-journey-mvp01/profile-03-new') {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    if (localStorage.getItem("hcpmvp01ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpmvp01ProfessionalRegistrationNumber");
  }

  // hcp-e2e-journey-mvp01-phone-number
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-04' || pageUrlPath === '/hcp-e2e-journey-mvp01/profile-04-new') {
    let mobileNumber = document.getElementById('mobileNumber');
    if (localStorage.getItem("hcpmvp01MobileNumber")) mobileNumber.value = localStorage.getItem("hcpmvp01MobileNumber");
  }

  // hcp-e2e-journey-mvp01-name-organisation
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-05' || pageUrlPath === '/hcp-e2e-journey-mvp01/profile-05-new') {
    let organisationName = document.getElementById('organisationName');
    if (localStorage.getItem("hcpmvp01OrganisationName")) organisationName.value = localStorage.getItem("hcpmvp01OrganisationName");
  }

  // hcp-e2e-journey-mvp01-postcode
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-06' || pageUrlPath === '/hcp-e2e-journey-mvp01/profile-06-new' || pageUrlPath === '/hcp-e2e-journey-mvp01/profile-07-a' || pageUrlPath === '/hcp-e2e-journey-mvp01/profile-07-a-new' || pageUrlPath === '/hcp-e2e-journey-mvp01/profile-07' || pageUrlPath === '/hcp-e2e-journey-mvp01/profile-07-new') {
    let postcode = document.getElementById('postcode');
    if (localStorage.getItem("hcpmvp01Postcode")) postcode.value = localStorage.getItem("hcpmvp01Postcode");
  }

  // hcp-e2e-journey-mvp01-postcode
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-07-a' || pageUrlPath === '/hcp-e2e-journey-mvp01/profile-07-a-new' || pageUrlPath === '/hcp-e2e-journey-mvp01/profile-07' || pageUrlPath === '/hcp-e2e-journey-mvp01/profile-07-new') {
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let postcode = document.getElementById('postcode');
    let organisationAddressCounty = document.getElementById('organisationAddressCounty');
    if (localStorage.getItem("hcpmvp01OrganisationName")) organisationName.value = localStorage.getItem("hcpmvp01OrganisationName");
    if (localStorage.getItem("hcpmvp01OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpmvp01OrganisationAddressLine1");
    if (localStorage.getItem("hcpmvp01OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpmvp01OrganisationAddressLine2");
    if (localStorage.getItem("hcpmvp01TownOrCity")) organisationTownCity.value = localStorage.getItem("hcpmvp01TownOrCity");
    if (localStorage.getItem("hcpmvp01OrganisationAddressCounty")) organisationAddressCounty.innerHTML = localStorage.getItem("hcpmvp01OrganisationAddressCounty");
    if (localStorage.getItem("hcpmvp01Postcode")) postcode.value = localStorage.getItem("hcpmvp01Postcode");
  }

  // hcp-e2e-journey-mvp01-role
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-02' || pageUrlPath === '/hcp-e2e-journey-mvp01/profile-02-new') {

    if (localStorage.getItem("hcpmvp01Role")) {
      let role = localStorage.getItem("hcpmvp01Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpmvp01OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpmvp01UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-mvp01/send-an-sr1-form");
    }
  }

  // hcp-e2e-journey-mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-edit') {
    let fullName = document.getElementById('fullName');
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber = document.getElementById('mobileNumber');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationAddressCounty = document.getElementById('organisationAddressCounty');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let postcode = document.getElementById('postcode');

    if (localStorage.getItem("hcpmvp02Fullname")) fullName.value = localStorage.getItem("hcpmvp02Fullname");
    if (localStorage.getItem("hcpmvp02ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpmvp02ProfessionalRegistrationNumber");
    //  if (localStorage.getItem("hcpmvp02HcpEmail")) emailAddress.value = localStorage.getItem("hcpmvp02HcpEmail");
    if (localStorage.getItem("hcpmvp02MobileNumber")) mobileNumber.value = localStorage.getItem("hcpmvp02MobileNumber");
    if (localStorage.getItem("hcpmvp02OrganisationName")) organisationName.value = localStorage.getItem("hcpmvp02OrganisationName");
    if (localStorage.getItem("hcpmvp02OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpmvp02OrganisationAddressLine1");
    if (localStorage.getItem("hcpmvp02OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpmvp02OrganisationAddressLine2");
    if (localStorage.getItem("hcpmvp02OrganisationAddressCounty")) organisationAddressCounty.innerHTML = localStorage.getItem("hcpmvp02OrganisationAddressCounty");
    if (localStorage.getItem("hcpmvp02TownOrCity")) organisationTownCity.value = localStorage.getItem("hcpmvp02TownOrCity");
    if (localStorage.getItem("hcpmvp02Postcode")) postcode.value = localStorage.getItem("hcpmvp02Postcode");

    if (localStorage.getItem("hcpmvp02Role")) {
      let role = localStorage.getItem("hcpmvp02Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpmvp02OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpmvp02UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-mvp02/send-an-sr1-form");
    }
  }

  // hcp-e2e-journey-mvp02-name
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-01' || pageUrlPath === '/hcp-e2e-journey-mvp02/profile-01-new') {
    let firstName = document.getElementById('firstName');
    //let middleName = document.getElementById('middleName');
    let lastName = document.getElementById('lastName');
    if (localStorage.getItem("hcpmvp02Firstname")) firstName.value = localStorage.getItem("hcpmvp02Firstname");
    //if (localStorage.getItem("hcpmvp02Middlename")) middleName.value = localStorage.getItem("hcpmvp02Middlename");
    if (localStorage.getItem("hcpmvp02Lastname")) lastName.value = localStorage.getItem("hcpmvp02Lastname");
  }

  // hcp-e2e-journey-mvp02-professional-registration-number
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-03' || pageUrlPath === '/hcp-e2e-journey-mvp02/profile-03-new') {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    if (localStorage.getItem("hcpmvp02ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpmvp02ProfessionalRegistrationNumber");
  }

  // hcp-e2e-journey-mvp02-phone-number
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-04' || pageUrlPath === '/hcp-e2e-journey-mvp02/profile-04-new') {
    let mobileNumber = document.getElementById('mobileNumber');
    if (localStorage.getItem("hcpmvp02MobileNumber")) mobileNumber.value = localStorage.getItem("hcpmvp02MobileNumber");
  }

  // hcp-e2e-journey-mvp02-name-organisation
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-05' || pageUrlPath === '/hcp-e2e-journey-mvp02/profile-05-new') {
    let organisationName = document.getElementById('organisationName');
    if (localStorage.getItem("hcpmvp02OrganisationName")) organisationName.value = localStorage.getItem("hcpmvp02OrganisationName");
  }

  // hcp-e2e-journey-mvp02-postcode
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-06' || pageUrlPath === '/hcp-e2e-journey-mvp02/profile-06-new' || pageUrlPath === '/hcp-e2e-journey-mvp02/profile-07-a' || pageUrlPath === '/hcp-e2e-journey-mvp02/profile-07-a-new' || pageUrlPath === '/hcp-e2e-journey-mvp02/profile-07' || pageUrlPath === '/hcp-e2e-journey-mvp02/profile-07-new') {
    let postcode = document.getElementById('postcode');
    if (localStorage.getItem("hcpmvp02Postcode")) postcode.value = localStorage.getItem("hcpmvp02Postcode");
  }

  // hcp-e2e-journey-mvp02-postcode
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-07-a' || pageUrlPath === '/hcp-e2e-journey-mvp02/profile-07-a-new' || pageUrlPath === '/hcp-e2e-journey-mvp02/profile-07' || pageUrlPath === '/hcp-e2e-journey-mvp02/profile-07-new') {
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let postcode = document.getElementById('postcode');
    let organisationAddressCounty = document.getElementById('organisationAddressCounty');
    if (localStorage.getItem("hcpmvp02OrganisationName")) organisationName.value = localStorage.getItem("hcpmvp02OrganisationName");
    if (localStorage.getItem("hcpmvp02OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpmvp02OrganisationAddressLine1");
    if (localStorage.getItem("hcpmvp02OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpmvp02OrganisationAddressLine2");
    if (localStorage.getItem("hcpmvp02TownOrCity")) organisationTownCity.value = localStorage.getItem("hcpmvp02TownOrCity");
    if (localStorage.getItem("hcpmvp02OrganisationAddressCounty")) organisationAddressCounty.innerHTML = localStorage.getItem("hcpmvp02OrganisationAddressCounty");
    if (localStorage.getItem("hcpmvp02Postcode")) postcode.value = localStorage.getItem("hcpmvp02Postcode");
  }

  // hcp-e2e-journey-mvp02-role
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-02' || pageUrlPath === '/hcp-e2e-journey-mvp02/profile-02-new') {

    if (localStorage.getItem("hcpmvp02Role")) {
      let role = localStorage.getItem("hcpmvp02Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpmvp02OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpmvp02UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-mvp02/send-an-sr1-form");
    }
  }

  // hcp-e2e-journey-mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/profile-edit') {
    let fullName = document.getElementById('fullName');
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber = document.getElementById('mobileNumber');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationAddressCounty = document.getElementById('organisationAddressCounty');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let postcode = document.getElementById('postcode');

    if (localStorage.getItem("hcpmvp03Fullname")) fullName.value = localStorage.getItem("hcpmvp03Fullname");
    if (localStorage.getItem("hcpmvp03ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpmvp03ProfessionalRegistrationNumber");
    //  if (localStorage.getItem("hcpmvp03HcpEmail")) emailAddress.value = localStorage.getItem("hcpmvp03HcpEmail");
    if (localStorage.getItem("hcpmvp03MobileNumber")) mobileNumber.value = localStorage.getItem("hcpmvp03MobileNumber");
    if (localStorage.getItem("hcpmvp03OrganisationName")) organisationName.value = localStorage.getItem("hcpmvp03OrganisationName");
    if (localStorage.getItem("hcpmvp03OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpmvp03OrganisationAddressLine1");
    if (localStorage.getItem("hcpmvp03OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpmvp03OrganisationAddressLine2");
    if (localStorage.getItem("hcpmvp03OrganisationAddressCounty")) organisationAddressCounty.innerHTML = localStorage.getItem("hcpmvp03OrganisationAddressCounty");
    if (localStorage.getItem("hcpmvp03TownOrCity")) organisationTownCity.value = localStorage.getItem("hcpmvp03TownOrCity");
    if (localStorage.getItem("hcpmvp03Postcode")) postcode.value = localStorage.getItem("hcpmvp03Postcode");

    if (localStorage.getItem("hcpmvp03Role")) {
      let role = localStorage.getItem("hcpmvp03Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpmvp03OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpmvp03UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-mvp03/send-an-sr1-form");
    }
  }

  // hcp-e2e-journey-mvp03-name
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/profile-01' || pageUrlPath === '/hcp-e2e-journey-mvp03/profile-01-new') {
    let firstName = document.getElementById('firstName');
    //let middleName = document.getElementById('middleName');
    let lastName = document.getElementById('lastName');
    if (localStorage.getItem("hcpmvp03Firstname")) firstName.value = localStorage.getItem("hcpmvp03Firstname");
    //if (localStorage.getItem("hcpmvp03Middlename")) middleName.value = localStorage.getItem("hcpmvp03Middlename");
    if (localStorage.getItem("hcpmvp03Lastname")) lastName.value = localStorage.getItem("hcpmvp03Lastname");
  }

  // hcp-e2e-journey-mvp03-professional-registration-number
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/profile-03' || pageUrlPath === '/hcp-e2e-journey-mvp03/profile-03-new') {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    if (localStorage.getItem("hcpmvp03ProfessionalRegistrationNumber")) professionalRegistrationNumber.value = localStorage.getItem("hcpmvp03ProfessionalRegistrationNumber");
  }

  // hcp-e2e-journey-mvp03-phone-number
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/profile-04' || pageUrlPath === '/hcp-e2e-journey-mvp03/profile-04-new') {
    let mobileNumber = document.getElementById('mobileNumber');
    if (localStorage.getItem("hcpmvp03MobileNumber")) mobileNumber.value = localStorage.getItem("hcpmvp03MobileNumber");
  }

  // hcp-e2e-journey-mvp03-name-organisation
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/profile-05' || pageUrlPath === '/hcp-e2e-journey-mvp03/profile-05-new') {
    let organisationName = document.getElementById('organisationName');
    if (localStorage.getItem("hcpmvp03OrganisationName")) organisationName.value = localStorage.getItem("hcpmvp03OrganisationName");
  }

  // hcp-e2e-journey-mvp03-postcode
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/profile-06' || pageUrlPath === '/hcp-e2e-journey-mvp03/profile-06-new' || pageUrlPath === '/hcp-e2e-journey-mvp03/profile-07-a' || pageUrlPath === '/hcp-e2e-journey-mvp03/profile-07-a-new' || pageUrlPath === '/hcp-e2e-journey-mvp03/profile-07' || pageUrlPath === '/hcp-e2e-journey-mvp03/profile-07-new') {
    let postcode = document.getElementById('postcode');
    if (localStorage.getItem("hcpmvp03Postcode")) postcode.value = localStorage.getItem("hcpmvp03Postcode");
  }

  // hcp-e2e-journey-mvp03-postcode
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/profile-07-a' || pageUrlPath === '/hcp-e2e-journey-mvp03/profile-07-a-new' || pageUrlPath === '/hcp-e2e-journey-mvp03/profile-07' || pageUrlPath === '/hcp-e2e-journey-mvp03/profile-07-new') {
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let postcode = document.getElementById('postcode');
    let organisationAddressCounty = document.getElementById('organisationAddressCounty');
    if (localStorage.getItem("hcpmvp03OrganisationName")) organisationName.value = localStorage.getItem("hcpmvp03OrganisationName");
    if (localStorage.getItem("hcpmvp03OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpmvp03OrganisationAddressLine1");
    if (localStorage.getItem("hcpmvp03OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpmvp03OrganisationAddressLine2");
    if (localStorage.getItem("hcpmvp03TownOrCity")) organisationTownCity.value = localStorage.getItem("hcpmvp03TownOrCity");
    if (localStorage.getItem("hcpmvp03OrganisationAddressCounty")) organisationAddressCounty.innerHTML = localStorage.getItem("hcpmvp03OrganisationAddressCounty");
    if (localStorage.getItem("hcpmvp03Postcode")) postcode.value = localStorage.getItem("hcpmvp03Postcode");
  }

  // hcp-e2e-journey-mvp03-role
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/profile-02') {

    if (localStorage.getItem("hcpmvp03Role")) {
      let role = localStorage.getItem("hcpmvp03Role");
      const formElements = document.getElementById('profileSetupPage').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "yourRole") {
          if (formElement.value === role) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'other') {
              document.getElementById('otherRole').value = localStorage.getItem("hcpmvp03OtherRole");
            }
          }
        }
      }
    }

    if (localStorage.getItem('hcpmvp03UpdateProfileDetailsFromSendSR1FormPage')) {
      document.getElementById('profileSetupPage').setAttribute("action", "/hcp-e2e-journey-mvp03/send-an-sr1-form");
    }
  }

  if (pageUrlPath === '/hcp-e2e-journey-mvp03/profile-02' || pageUrlPath === '/hcp-e2e-journey-mvp03/profile-02-error') {
    let otherRole = document.getElementById('otherRole');
    if (localStorage.getItem("hcpmvp03otherRole")) otherRole.value = localStorage.getItem("hcpmvp03otherRole");
  }


  // CHECK PROFILE DETAILS

  // hcp-e2e-journey-v01
  if (pageUrlPath === '/hcp-e2e-journey-v01/check-profile-details' || pageUrlPath === '/hcp-e2e-journey-v01/profile-details') {
    let name = document.getElementById('name');
    let role = document.getElementById('role');
    let professionalRegNum = document.getElementById('professionalRegNum');
    let mobile = document.getElementById('mobile');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let profileSetupPage = document.getElementById('profileSetupPage');

    name.innerHTML = localStorage.getItem("hcpv01Fullname");

    console.log('Role', localStorage.getItem("hcpv01Role"));
    if (localStorage.getItem("hcpv01Role") === "other") {
      role.innerHTML = localStorage.getItem("hcpv01OtherRole");
    } else {
      role.innerHTML = localStorage.getItem("hcpv01Role");
    }

    professionalRegNum.innerHTML = localStorage.getItem("hcpv01ProfessionalRegistrationNumber");
    mobile.innerHTML = localStorage.getItem("hcpv01MobileNumber");
    organisationName.innerHTML = localStorage.getItem("hcpv01OrganisationName");
    organisationAddressLine1.innerHTML = localStorage.getItem("hcpv01OrganisationAddressLine1");
    organisationAddressLine2.innerHTML = localStorage.getItem("hcpv01OrganisationAddressLine2");
    organisationTownCity.innerHTML = localStorage.getItem("hcpv01TownOrCity");
    organisationPostcode.innerHTML = localStorage.getItem("hcpv01Postcode");

    if (localStorage.getItem("hcpv01ReminderTriggered")) {
      profileSetupPage.setAttribute("action", "/hcp-e2e-journey-v01/account-new-dashboard");
    }
  }

  // hcp-e2e-journey-v02
  if (pageUrlPath === '/hcp-e2e-journey-v02/check-profile-details' || pageUrlPath === '/hcp-e2e-journey-v02/profile-details') {
    let name = document.getElementById('name');
    let role = document.getElementById('role');
    let professionalRegNum = document.getElementById('professionalRegNum');
    let mobile = document.getElementById('mobile');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let profileSetupPage = document.getElementById('profileSetupPage');

    name.innerHTML = localStorage.getItem("hcpv02Fullname");

    console.log('Role', localStorage.getItem("hcpv02Role"));
    if (localStorage.getItem("hcpv02Role") === "other") {
      role.innerHTML = localStorage.getItem("hcpv02OtherRole");
    } else {
      role.innerHTML = localStorage.getItem("hcpv02Role");
    }

    professionalRegNum.innerHTML = localStorage.getItem("hcpv02ProfessionalRegistrationNumber");
    mobile.innerHTML = localStorage.getItem("hcpv02MobileNumber");
    organisationName.innerHTML = localStorage.getItem("hcpv02OrganisationName");
    organisationAddressLine1.innerHTML = localStorage.getItem("hcpv02OrganisationAddressLine1");
    organisationAddressLine2.innerHTML = localStorage.getItem("hcpv02OrganisationAddressLine2");
    organisationTownCity.innerHTML = localStorage.getItem("hcpv02TownOrCity");
    organisationPostcode.innerHTML = localStorage.getItem("hcpv02Postcode");

    if (localStorage.getItem("hcpv02ReminderTriggered")) {
      profileSetupPage.setAttribute("action", "/hcp-e2e-journey-v02/account-d-dashboard");
    }
  }

  // hcp-e2e-journey-v03
  if (pageUrlPath === '/hcp-e2e-journey-v03/check-profile-details' || pageUrlPath === '/hcp-e2e-journey-v03/profile-details') {
    let name = document.getElementById('name');
    let role = document.getElementById('role');
    let professionalRegNum = document.getElementById('professionalRegNum');
    let mobile = document.getElementById('mobile');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let profileSetupPage = document.getElementById('profileSetupPage');

    name.innerHTML = localStorage.getItem("hcpv03Fullname");

    console.log('Role', localStorage.getItem("hcpv03Role"));
    if (localStorage.getItem("hcpv03Role") === "other") {
      role.innerHTML = localStorage.getItem("hcpv03OtherRole");
    } else {
      role.innerHTML = localStorage.getItem("hcpv03Role");
    }

    professionalRegNum.innerHTML = localStorage.getItem("hcpv03ProfessionalRegistrationNumber");
    mobile.innerHTML = localStorage.getItem("hcpv03MobileNumber");
    organisationName.innerHTML = localStorage.getItem("hcpv03OrganisationName");
    organisationAddressLine1.innerHTML = localStorage.getItem("hcpv03OrganisationAddressLine1");
    organisationAddressLine2.innerHTML = localStorage.getItem("hcpv03OrganisationAddressLine2");
    organisationTownCity.innerHTML = localStorage.getItem("hcpv03TownOrCity");
    organisationPostcode.innerHTML = localStorage.getItem("hcpv03Postcode");

    if (localStorage.getItem("hcpv03ReminderTriggered")) {
      profileSetupPage.setAttribute("action", "/hcp-e2e-journey-v03/account-d-dashboard");
    }
  }

  // hcp-e2e-journey-v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/check-profile-details' || pageUrlPath === '/hcp-e2e-journey-v04/profile-details') {
    let name = document.getElementById('name');
    let role = document.getElementById('role');
    let professionalRegNum = document.getElementById('professionalRegNum');
    let mobile = document.getElementById('mobile');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let profileSetupPage = document.getElementById('profileSetupPage');

    name.innerHTML = localStorage.getItem("hcpv04Fullname");

    console.log('Role', localStorage.getItem("hcpv04Role"));
    if (localStorage.getItem("hcpv04Role") === "other") {
      role.innerHTML = localStorage.getItem("hcpv04OtherRole");
    } else {
      role.innerHTML = localStorage.getItem("hcpv04Role");
    }

    professionalRegNum.innerHTML = localStorage.getItem("hcpv04ProfessionalRegistrationNumber");
    mobile.innerHTML = localStorage.getItem("hcpv04MobileNumber");
    organisationName.innerHTML = localStorage.getItem("hcpv04OrganisationName");
    organisationAddressLine1.innerHTML = localStorage.getItem("hcpv04OrganisationAddressLine1");
    organisationAddressLine2.innerHTML = localStorage.getItem("hcpv04OrganisationAddressLine2");
    organisationTownCity.innerHTML = localStorage.getItem("hcpv04TownOrCity");
    organisationPostcode.innerHTML = localStorage.getItem("hcpv04Postcode");

    if (localStorage.getItem("hcpv04ReminderTriggered")) {
      profileSetupPage.setAttribute("action", "/hcp-e2e-journey-v04/account-new-dashboard");
    }
  }

  // hcp-e2e-journey-v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/check-profile-details' || pageUrlPath === '/hcp-e2e-journey-v05/profile-details') {
    let name = document.getElementById('name');
    let role = document.getElementById('role');
    let professionalRegNum = document.getElementById('professionalRegNum');
    let mobile = document.getElementById('mobile');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let profileSetupPage = document.getElementById('profileSetupPage');

    name.innerHTML = localStorage.getItem("hcpv05Fullname");

    console.log('Role', localStorage.getItem("hcpv05Role"));
    if (localStorage.getItem("hcpv05Role") === "other") {
      role.innerHTML = localStorage.getItem("hcpv05OtherRole");
    } else {
      role.innerHTML = localStorage.getItem("hcpv05Role");
    }

    professionalRegNum.innerHTML = localStorage.getItem("hcpv05ProfessionalRegistrationNumber");
    mobile.innerHTML = localStorage.getItem("hcpv05MobileNumber");
    organisationName.innerHTML = localStorage.getItem("hcpv05OrganisationName");
    organisationAddressLine1.innerHTML = localStorage.getItem("hcpv05OrganisationAddressLine1");
    organisationAddressLine2.innerHTML = localStorage.getItem("hcpv05OrganisationAddressLine2");
    organisationTownCity.innerHTML = localStorage.getItem("hcpv05TownOrCity");
    organisationPostcode.innerHTML = localStorage.getItem("hcpv05Postcode");

    if (localStorage.getItem("hcpv05ReminderTriggered")) {
      profileSetupPage.setAttribute("action", "/hcp-e2e-journey-v05/account-new-dashboard-success");
    }
  }

  // hcp-e2e-journey-v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/check-profile-details' || pageUrlPath === '/hcp-e2e-journey-v06/profile-details') {
    let name = document.getElementById('name');
    let role = document.getElementById('role');
    let professionalRegNum = document.getElementById('professionalRegNum');
    let mobile = document.getElementById('mobile');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let profileSetupPage = document.getElementById('profileSetupPage');

    name.innerHTML = localStorage.getItem("hcpv06Fullname");

    console.log('Role', localStorage.getItem("hcpv06Role"));
    if (localStorage.getItem("hcpv06Role") === "other") {
      role.innerHTML = localStorage.getItem("hcpv06OtherRole");
    } else {
      role.innerHTML = localStorage.getItem("hcpv06Role");
    }

    professionalRegNum.innerHTML = localStorage.getItem("hcpv06ProfessionalRegistrationNumber");
    mobile.innerHTML = localStorage.getItem("hcpv06MobileNumber");
    organisationName.innerHTML = localStorage.getItem("hcpv06OrganisationName");
    organisationAddressLine1.innerHTML = localStorage.getItem("hcpv06OrganisationAddressLine1");
    organisationAddressLine2.innerHTML = localStorage.getItem("hcpv06OrganisationAddressLine2");
    organisationTownCity.innerHTML = localStorage.getItem("hcpv06TownOrCity");
    organisationPostcode.innerHTML = localStorage.getItem("hcpv06Postcode");

    if (localStorage.getItem("hcpv06ReminderTriggered")) {
      profileSetupPage.setAttribute("action", "/hcp-e2e-journey-v06/account-d-dashboard-success");
    }
  }

  // hcp-e2e-journey-v07
  if (pageUrlPath === '/hcp-e2e-journey-v07/check-profile-details' || pageUrlPath === '/hcp-e2e-journey-v07/profile-details') {
    let name = document.getElementById('name');
    let role = document.getElementById('role');
    let professionalRegNum = document.getElementById('professionalRegNum');
    let mobile = document.getElementById('mobile');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let profileSetupPage = document.getElementById('profileSetupPage');

    name.innerHTML = localStorage.getItem("hcpv07Fullname");

    console.log('Role', localStorage.getItem("hcpv07Role"));
    if (localStorage.getItem("hcpv07Role") === "other") {
      role.innerHTML = localStorage.getItem("hcpv07OtherRole");
    } else {
      role.innerHTML = localStorage.getItem("hcpv07Role");
    }

    professionalRegNum.innerHTML = localStorage.getItem("hcpv07ProfessionalRegistrationNumber");
    mobile.innerHTML = localStorage.getItem("hcpv07MobileNumber");
    organisationName.innerHTML = localStorage.getItem("hcpv07OrganisationName");
    organisationAddressLine1.innerHTML = localStorage.getItem("hcpv07OrganisationAddressLine1");
    organisationAddressLine2.innerHTML = localStorage.getItem("hcpv07OrganisationAddressLine2");
    organisationTownCity.innerHTML = localStorage.getItem("hcpv07TownOrCity");
    organisationPostcode.innerHTML = localStorage.getItem("hcpv07Postcode");

    if (localStorage.getItem("hcpv07ReminderTriggered")) {
      profileSetupPage.setAttribute("action", "/hcp-e2e-journey-v07/account-new-dashboard");
    }
  }

  // hcp-e2e-journey-v08
  if (pageUrlPath === '/hcp-e2e-journey-v08/check-profile-details' || pageUrlPath === '/hcp-e2e-journey-v08/profile-details') {
    let name = document.getElementById('name');
    let role = document.getElementById('role');
    let professionalRegNum = document.getElementById('professionalRegNum');
    let mobile = document.getElementById('mobile');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let profileSetupPage = document.getElementById('profileSetupPage');

    name.innerHTML = localStorage.getItem("hcpv08Fullname");

    console.log('Role', localStorage.getItem("hcpv08Role"));
    if (localStorage.getItem("hcpv08Role") === "other") {
      role.innerHTML = localStorage.getItem("hcpv08OtherRole");
    } else {
      role.innerHTML = localStorage.getItem("hcpv08Role");
    }

    professionalRegNum.innerHTML = localStorage.getItem("hcpv08ProfessionalRegistrationNumber");
    mobile.innerHTML = localStorage.getItem("hcpv08MobileNumber");
    organisationName.innerHTML = localStorage.getItem("hcpv08OrganisationName");
    organisationAddressLine1.innerHTML = localStorage.getItem("hcpv08OrganisationAddressLine1");
    organisationAddressLine2.innerHTML = localStorage.getItem("hcpv08OrganisationAddressLine2");
    organisationTownCity.innerHTML = localStorage.getItem("hcpv08TownOrCity");
    organisationPostcode.innerHTML = localStorage.getItem("hcpv08Postcode");

    if (localStorage.getItem("hcpv08ReminderTriggered")) {
      profileSetupPage.setAttribute("action", "/hcp-e2e-journey-v08/account-new-dashboard-success");
    }
  }

  // hcp-e2e-journey-v09
  if (pageUrlPath === '/hcp-e2e-journey-v09/check-profile-details' || pageUrlPath === '/hcp-e2e-journey-v09/profile-details') {
    let name = document.getElementById('name');
    let role = document.getElementById('role');
    let professionalRegNum = document.getElementById('professionalRegNum');
    let mobile = document.getElementById('mobile');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let profileSetupPage = document.getElementById('profileSetupPage');

    name.innerHTML = localStorage.getItem("hcpv09Fullname");

    console.log('Role', localStorage.getItem("hcpv09Role"));
    if (localStorage.getItem("hcpv09Role") === "other") {
      role.innerHTML = localStorage.getItem("hcpv09OtherRole");
    } else {
      role.innerHTML = localStorage.getItem("hcpv09Role");
    }

    professionalRegNum.innerHTML = localStorage.getItem("hcpv09ProfessionalRegistrationNumber");
    mobile.innerHTML = localStorage.getItem("hcpv09MobileNumber");
    organisationName.innerHTML = localStorage.getItem("hcpv09OrganisationName");
    organisationAddressLine1.innerHTML = localStorage.getItem("hcpv09OrganisationAddressLine1");
    organisationAddressLine2.innerHTML = localStorage.getItem("hcpv09OrganisationAddressLine2");
    organisationTownCity.innerHTML = localStorage.getItem("hcpv09TownOrCity");
    organisationPostcode.innerHTML = localStorage.getItem("hcpv09Postcode");

    if (localStorage.getItem("hcpv09ReminderTriggered")) {
      profileSetupPage.setAttribute("action", "/hcp-e2e-journey-v09/account-d-dashboard-success");
    }
  }

  // hcp-e2e-journey-mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/check-profile-details') {
    let name = document.getElementById('name');
    let role = document.getElementById('role');
    let professionalRegNum = document.getElementById('professionalRegNum');
    let mobile = document.getElementById('mobile');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let profileSetupPage = document.getElementById('profileSetupPage');

    name.innerHTML = localStorage.getItem("hcpmvp01Firstname") + ' ' + localStorage.getItem("hcpmvp01Lastname");

    console.log('Role', localStorage.getItem("hcpmvp01Role"));
    if (localStorage.getItem("hcpmvp01Role") === "other") {
      role.innerHTML = localStorage.getItem("hcpmvp01OtherRole");
    } else {
      role.innerHTML = localStorage.getItem("hcpmvp01Role");
    }

    professionalRegNum.innerHTML = localStorage.getItem("hcpmvp01ProfessionalRegistrationNumber");
    mobile.innerHTML = localStorage.getItem("hcpmvp01MobileNumber");
    organisationName.innerHTML = localStorage.getItem("hcpmvp01OrganisationName");
    organisationAddressLine1.innerHTML = localStorage.getItem("hcpmvp01OrganisationAddressLine1");
    organisationAddressLine2.innerHTML = localStorage.getItem("hcpmvp01OrganisationAddressLine2");
    organisationAddressCounty.innerHTML = localStorage.getItem("hcpmvp01OrganisationAddressCounty");
    organisationTownCity.innerHTML = localStorage.getItem("hcpmvp01TownOrCity");
    organisationPostcode.innerHTML = localStorage.getItem("hcpmvp01Postcode");

    if (localStorage.getItem("hcpmvp01ReminderTriggered")) {
      profileSetupPage.setAttribute("action", "/hcp-e2e-journey-mvp01/account-new-dashboard");
    }
  }

  // hcp-e2e-journey-mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/check-profile-details') {
    let name = document.getElementById('name');
    let role = document.getElementById('role');
    let professionalRegNum = document.getElementById('professionalRegNum');
    let mobile = document.getElementById('mobile');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let profileSetupPage = document.getElementById('profileSetupPage');

    name.innerHTML = localStorage.getItem("hcpmvp02Firstname") + ' ' + localStorage.getItem("hcpmvp02Lastname");

    console.log('Role', localStorage.getItem("hcpmvp02Role"));
    if (localStorage.getItem("hcpmvp02Role") === "other") {
      role.innerHTML = localStorage.getItem("hcpmvp02OtherRole");
    } else {
      role.innerHTML = localStorage.getItem("hcpmvp02Role");
    }

    professionalRegNum.innerHTML = localStorage.getItem("hcpmvp02ProfessionalRegistrationNumber");
    mobile.innerHTML = localStorage.getItem("hcpmvp02MobileNumber");
    organisationName.innerHTML = localStorage.getItem("hcpmvp02OrganisationName");
    organisationAddressLine1.innerHTML = localStorage.getItem("hcpmvp02OrganisationAddressLine1");
    organisationAddressLine2.innerHTML = localStorage.getItem("hcpmvp02OrganisationAddressLine2");
    organisationAddressCounty.innerHTML = localStorage.getItem("hcpmvp02OrganisationAddressCounty");
    organisationTownCity.innerHTML = localStorage.getItem("hcpmvp02TownOrCity");
    organisationPostcode.innerHTML = localStorage.getItem("hcpmvp02Postcode");

    if (localStorage.getItem("hcpmvp02ReminderTriggered")) {
      profileSetupPage.setAttribute("action", "/hcp-e2e-journey-mvp02/account-new-dashboard");
    }
  }

  // hcp-e2e-journey-mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/check-profile-details') {
    let name = document.getElementById('name');
    let role = document.getElementById('role');
    let professionalRegNum = document.getElementById('professionalRegNum');
    let mobile = document.getElementById('mobile');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let profileSetupPage = document.getElementById('profileSetupPage');

    name.innerHTML = localStorage.getItem("hcpmvp03Firstname") + ' ' + localStorage.getItem("hcpmvp03Lastname");

    console.log('Role', localStorage.getItem("hcpmvp03Role"));
    if (localStorage.getItem("hcpmvp03Role") === "other") {
      role.innerHTML = localStorage.getItem("hcpmvp03OtherRole");
    } else {
      role.innerHTML = localStorage.getItem("hcpmvp03Role");
    }

    professionalRegNum.innerHTML = localStorage.getItem("hcpmvp03ProfessionalRegistrationNumber");
    mobile.innerHTML = localStorage.getItem("hcpmvp03MobileNumber");
    organisationName.innerHTML = localStorage.getItem("hcpmvp03OrganisationName");
    organisationAddressLine1.innerHTML = localStorage.getItem("hcpmvp03OrganisationAddressLine1");
    organisationAddressLine2.innerHTML = localStorage.getItem("hcpmvp03OrganisationAddressLine2");
    organisationAddressCounty.innerHTML = localStorage.getItem("hcpmvp03OrganisationAddressCounty");
    organisationTownCity.innerHTML = localStorage.getItem("hcpmvp03TownOrCity");
    organisationPostcode.innerHTML = localStorage.getItem("hcpmvp03Postcode");

    if (localStorage.getItem("hcpmvp03ReminderTriggered")) {
      profileSetupPage.setAttribute("action", "/hcp-e2e-journey-mvp03/account-new-dashboard");
    }
  }

  // =======================
  // Reminders
  // =======================

  // Reminder pg 1

  if (pageUrlPath === '/hcp-e2e-journey-v01/reminders-1') {
    if (localStorage.getItem("hcpv01ReceiveReminder")) {
      let receiveReminders = localStorage.getItem("hcpv01ReceiveReminder");
      const formElements = document.getElementById('remindersPage1').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "receiveReminder") {
          if (formElement.value === receiveReminders) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;
          }
        }
      }
    }
  }

  if (pageUrlPath === '/hcp-e2e-journey-v02/reminders-1') {
    if (localStorage.getItem("hcpv02ReceiveReminder")) {
      let receiveReminders = localStorage.getItem("hcpv02ReceiveReminder");
      const formElements = document.getElementById('remindersPage1').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "receiveReminder") {
          if (formElement.value === receiveReminders) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;
          }
        }
      }
    }
  }

  if (pageUrlPath === '/hcp-e2e-journey-v03/reminders-1') {
    if (localStorage.getItem("hcpv03ReceiveReminder")) {
      let receiveReminders = localStorage.getItem("hcpv03ReceiveReminder");
      const formElements = document.getElementById('remindersPage1').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "receiveReminder") {
          if (formElement.value === receiveReminders) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;
          }
        }
      }
    }
  }


  if (pageUrlPath === '/hcp-e2e-journey-v04/reminders-1') {
    if (localStorage.getItem("hcpv04ReceiveReminder")) {
      let receiveReminders = localStorage.getItem("hcpv04ReceiveReminder");
      const formElements = document.getElementById('remindersPage1').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "receiveReminder") {
          if (formElement.value === receiveReminders) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;
          }
        }
      }
    }
  }

  if (pageUrlPath === '/hcp-e2e-journey-v05/reminders-1') {
    if (localStorage.getItem("hcpv05ReceiveReminder")) {
      let receiveReminders = localStorage.getItem("hcpv05ReceiveReminder");
      const formElements = document.getElementById('remindersPage1').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "receiveReminder") {
          if (formElement.value === receiveReminders) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;
          }
        }
      }
    }
  }

  if (pageUrlPath === '/hcp-e2e-journey-v06/reminders-1') {
    if (localStorage.getItem("hcpv06ReceiveReminder")) {
      let receiveReminders = localStorage.getItem("hcpv06ReceiveReminder");
      const formElements = document.getElementById('remindersPage1').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "receiveReminder") {
          if (formElement.value === receiveReminders) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;
          }
        }
      }
    }
  }

  if (pageUrlPath === '/hcp-e2e-journey-v07/reminders-1') {
    if (localStorage.getItem("hcpv07ReceiveReminder")) {
      let receiveReminders = localStorage.getItem("hcpv07ReceiveReminder");
      const formElements = document.getElementById('remindersPage1').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "receiveReminder") {
          if (formElement.value === receiveReminders) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;
          }
        }
      }
    }
  }

  if (pageUrlPath === '/hcp-e2e-journey-v08/reminders-1') {
    if (localStorage.getItem("hcpv08ReceiveReminder")) {
      let receiveReminders = localStorage.getItem("hcpv08ReceiveReminder");
      const formElements = document.getElementById('remindersPage1').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "receiveReminder") {
          if (formElement.value === receiveReminders) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;
          }
        }
      }
    }
  }

  if (pageUrlPath === '/hcp-e2e-journey-v09/reminders-1') {
    if (localStorage.getItem("hcpv09ReceiveReminder")) {
      let receiveReminders = localStorage.getItem("hcpv09ReceiveReminder");
      const formElements = document.getElementById('remindersPage1').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "receiveReminder") {
          if (formElement.value === receiveReminders) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;
          }
        }
      }
    }
  }

  // Reminder pg 2

  if (pageUrlPath === '/hcp-e2e-journey-v01/reminders-2') {
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');

    mobileNumber2.innerHTML = localStorage.getItem("hcpv01MobileNumber");
    emailAddress2.innerHTML = localStorage.getItem("hcpv01HcpEmail");
  }

  if (pageUrlPath === '/hcp-e2e-journey-v02/reminders-2') {
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');

    mobileNumber2.innerHTML = localStorage.getItem("hcpv02MobileNumber");
    emailAddress2.innerHTML = localStorage.getItem("hcpv02HcpEmail");
  }

  if (pageUrlPath === '/hcp-e2e-journey-v03/reminders-2') {
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');

    mobileNumber2.innerHTML = localStorage.getItem("hcpv03MobileNumber");
    emailAddress2.innerHTML = localStorage.getItem("hcpv03HcpEmail");
  }

  if (pageUrlPath === '/hcp-e2e-journey-v04/reminders-2') {
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');

    mobileNumber2.innerHTML = localStorage.getItem("hcpv04MobileNumber");
    emailAddress2.innerHTML = localStorage.getItem("hcpv04HcpEmail");
  }
  if (pageUrlPath === '/hcp-e2e-journey-v04/reminders-2-new') {
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');

    mobileNumber2.innerHTML = localStorage.getItem("hcpv04MobileNumber");
    emailAddress2.innerHTML = localStorage.getItem("hcpv04HcpEmail");
  }

  if (pageUrlPath === '/hcp-e2e-journey-v05/reminders-2') {
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');

    mobileNumber2.innerHTML = localStorage.getItem("hcpv05MobileNumber");
    emailAddress2.innerHTML = localStorage.getItem("hcpv05HcpEmail");
  }

  if (pageUrlPath === '/hcp-e2e-journey-v06/reminders-2') {
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');

    mobileNumber2.innerHTML = localStorage.getItem("hcpv06MobileNumber");
    emailAddress2.innerHTML = localStorage.getItem("hcpv06HcpEmail");
  }

  if (pageUrlPath === '/hcp-e2e-journey-v07/reminders-2') {
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');

    mobileNumber2.innerHTML = localStorage.getItem("hcpv07MobileNumber");
    emailAddress2.innerHTML = localStorage.getItem("hcpv07HcpEmail");
  }
  if (pageUrlPath === '/hcp-e2e-journey-v07/reminders-2-new') {
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');

    mobileNumber2.innerHTML = localStorage.getItem("hcpv07MobileNumber");
    emailAddress2.innerHTML = localStorage.getItem("hcpv07HcpEmail");
  }

  if (pageUrlPath === '/hcp-e2e-journey-v08/reminders-2') {
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');

    mobileNumber2.innerHTML = localStorage.getItem("hcpv08MobileNumber");
    emailAddress2.innerHTML = localStorage.getItem("hcpv08HcpEmail");
  }

  if (pageUrlPath === '/hcp-e2e-journey-v09/reminders-2') {
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');

    mobileNumber2.innerHTML = localStorage.getItem("hcpv09MobileNumber");
    emailAddress2.innerHTML = localStorage.getItem("hcpv09HcpEmail");
  }

  if (pageUrlPath === '/hcp-e2e-journey-v01/reminders-3') {
    if (localStorage.getItem("hcpv01ReminderFrequency")) {
      let reminderFrequency = localStorage.getItem("hcpv01ReminderFrequency");
      const formElements = document.getElementById('remindersPage3').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "reminderFrequency") {
          if (formElement.value === reminderFrequency) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;
          }
        }
      }
    }
  }

  // Reminder pg 3

  if (pageUrlPath === '/hcp-e2e-journey-v02/reminders-3') {
    if (localStorage.getItem("hcpv02ReminderFrequency")) {
      let reminderFrequency = localStorage.getItem("hcpv02ReminderFrequency");
      const formElements = document.getElementById('remindersPage3').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "reminderFrequency") {
          if (formElement.value === reminderFrequency) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;
          }
        }
      }
    }
  }

  if (pageUrlPath === '/hcp-e2e-journey-v03/reminders-3') {
    if (localStorage.getItem("hcpv03ReminderFrequency")) {
      let reminderFrequency = localStorage.getItem("hcpv03ReminderFrequency");
      const formElements = document.getElementById('remindersPage3').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "reminderFrequency") {
          if (formElement.value === reminderFrequency) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;
          }
        }
      }
    }
  }

  if (pageUrlPath === '/hcp-e2e-journey-v04/reminders-3') {
    if (localStorage.getItem("hcpv04ReminderFrequency")) {
      let reminderFrequency = localStorage.getItem("hcpv04ReminderFrequency");
      const formElements = document.getElementById('remindersPage3').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "reminderFrequency") {
          if (formElement.value === reminderFrequency) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;
          }
        }
      }
    }
  }

  if (pageUrlPath === '/hcp-e2e-journey-v05/reminders-3') {
    if (localStorage.getItem("hcpv05ReminderFrequency")) {
      let reminderFrequency = localStorage.getItem("hcpv05ReminderFrequency");
      const formElements = document.getElementById('remindersPage3').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "reminderFrequency") {
          if (formElement.value === reminderFrequency) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;
          }
        }
      }
    }
  }

  if (pageUrlPath === '/hcp-e2e-journey-v06/reminders-3') {
    if (localStorage.getItem("hcpv06ReminderFrequency")) {
      let reminderFrequency = localStorage.getItem("hcpv06ReminderFrequency");
      const formElements = document.getElementById('remindersPage3').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "reminderFrequency") {
          if (formElement.value === reminderFrequency) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;
          }
        }
      }
    }
  }

  if (pageUrlPath === '/hcp-e2e-journey-v07/reminders-3') {
    if (localStorage.getItem("hcpv07ReminderFrequency")) {
      let reminderFrequency = localStorage.getItem("hcpv07ReminderFrequency");
      const formElements = document.getElementById('remindersPage3').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "reminderFrequency") {
          if (formElement.value === reminderFrequency) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;
          }
        }
      }
    }
  }

  if (pageUrlPath === '/hcp-e2e-journey-v08/reminders-3') {
    if (localStorage.getItem("hcpv08ReminderFrequency")) {
      let reminderFrequency = localStorage.getItem("hcpv08ReminderFrequency");
      const formElements = document.getElementById('remindersPage3').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "reminderFrequency") {
          if (formElement.value === reminderFrequency) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;
          }
        }
      }
    }
  }

  if (pageUrlPath === '/hcp-e2e-journey-v09/reminders-3') {
    if (localStorage.getItem("hcpv09ReminderFrequency")) {
      let reminderFrequency = localStorage.getItem("hcpv09ReminderFrequency");
      const formElements = document.getElementById('remindersPage3').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "reminderFrequency") {
          if (formElement.value === reminderFrequency) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;
          }
        }
      }
    }
  }

  // Reminder dashboard

  // v01
  if (pageUrlPath === '/hcp-e2e-journey-v01/reminder-settings' || pageUrlPath === '/hcp-e2e-journey-v01/reminder-dashboard') {
    let receiveReminders = document.getElementById('receiveReminders');
    let reminderType = document.getElementById('reminderType');
    let reminderFrequency = document.getElementById('reminderFrequency');
    let receiveRemindersDiv = document.getElementById('receiveRemindersDiv');
    let reminderTypeDiv = document.getElementById('reminderTypeDiv');
    let emailReminderDiv = document.getElementById('emailReminderDiv');
    let mobileReminderDiv = document.getElementById('mobileReminderDiv');
    let reminderFrequencyDiv = document.getElementById('reminderFrequencyDiv');
    let mobileNumber = document.getElementById('mobileNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');
    let reminderSettingsPageRouting = document.getElementById('reminderSettingsPage');
    if (localStorage.getItem('hcpv01NewHcpUser')) {
      reminderSettingsPageRouting.setAttribute("action", "/hcp-e2e-journey-v01/account-new-dashboard");
    }
    receiveReminders.innerHTML = localStorage.getItem("hcpv01ReceiveReminder");
    reminderType.innerHTML = localStorage.getItem("hcpv01ReminderType");
    reminderFrequency.innerHTML = localStorage.getItem("hcpv01ReminderFrequency");
    if (localStorage.getItem("hcpv01ReminderType") === 'Email and text message') {
      bothReminderDiv.classList.remove('hidden');
      emailAddress2.innerHTML = localStorage.getItem("hcpv01HcpEmail");
      mobileNumber2.innerHTML = localStorage.getItem("hcpv01MobileNumber");
    }
    if (localStorage.getItem("hcpv01ReminderType") === 'Email') {
      emailReminderDiv.classList.remove('hidden');
      emailAddress.innerHTML = localStorage.getItem("hcpv01HcpEmail");
    }
    if (localStorage.getItem("hcpv01ReminderType") === 'Text message') {
      mobileReminderDiv.classList.remove('hidden');
      mobileNumber.innerHTML = localStorage.getItem("hcpv01MobileNumber");
    }
    // Hide/Show reminder settings if set or not
    if ((!localStorage.getItem("hcpv01ReceiveReminder")) || localStorage.getItem("hcpv01ReceiveReminder") === "No") {
      reminderTypeDiv.classList.add('hidden');
      reminderFrequencyDiv.classList.add('hidden');
      receiveReminders.innerHTML = "No";
    } else {
      reminderTypeDiv.classList.remove('hidden');
      reminderFrequencyDiv.classList.remove('hidden');
    }
    // Not set state
    if (localStorage.getItem("hcpv01ReceiveReminder") === "Yes") {
      if (!localStorage.getItem("hcpv01ReminderType")) reminderType.parentElement.innerHTML = "Not set";
      if (!localStorage.getItem("hcpv01ReminderFrequency")) reminderFrequency.innerHTML = "Not set";
    }
  }

  // v02
  if (pageUrlPath === '/hcp-e2e-journey-v02/reminder-settings' || pageUrlPath === '/hcp-e2e-journey-v02/reminder-dashboard') {
    let receiveReminders = document.getElementById('receiveReminders');
    let reminderType = document.getElementById('reminderType');
    let reminderFrequency = document.getElementById('reminderFrequency');
    let receiveRemindersDiv = document.getElementById('receiveRemindersDiv');
    let reminderTypeDiv = document.getElementById('reminderTypeDiv');
    let emailReminderDiv = document.getElementById('emailReminderDiv');
    let mobileReminderDiv = document.getElementById('mobileReminderDiv');
    let reminderFrequencyDiv = document.getElementById('reminderFrequencyDiv');
    let mobileNumber = document.getElementById('mobileNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');
    let reminderSettingsPageRouting = document.getElementById('reminderSettingsPage');
    if (localStorage.getItem('hcpv02NewHcpUser')) {
      reminderSettingsPageRouting.setAttribute("action", "/hcp-e2e-journey-v02/account-new-dashboard");
    }
    receiveReminders.innerHTML = localStorage.getItem("hcpv02ReceiveReminder");
    reminderType.innerHTML = localStorage.getItem("hcpv02ReminderType");
    reminderFrequency.innerHTML = localStorage.getItem("hcpv02ReminderFrequency");
    if (localStorage.getItem("hcpv02ReminderType") === 'Email and text message') {
      bothReminderDiv.classList.remove('hidden');
      emailAddress2.innerHTML = localStorage.getItem("hcpv02HcpEmail");
      mobileNumber2.innerHTML = localStorage.getItem("hcpv02MobileNumber");
    }
    if (localStorage.getItem("hcpv02ReminderType") === 'Email') {
      emailReminderDiv.classList.remove('hidden');
      emailAddress.innerHTML = localStorage.getItem("hcpv02HcpEmail");
    }
    if (localStorage.getItem("hcpv02ReminderType") === 'Text message') {
      mobileReminderDiv.classList.remove('hidden');
      mobileNumber.innerHTML = localStorage.getItem("hcpv02MobileNumber");
    }
    // Hide/Show reminder settings if set or not
    if ((!localStorage.getItem("hcpv02ReceiveReminder")) || localStorage.getItem("hcpv02ReceiveReminder") === "No") {
      reminderTypeDiv.classList.add('hidden');
      reminderFrequencyDiv.classList.add('hidden');
      receiveReminders.innerHTML = "No";
    } else {
      reminderTypeDiv.classList.remove('hidden');
      reminderFrequencyDiv.classList.remove('hidden');
    }
    // Not set state
    if (
      localStorage.getItem("hcpv02ReceiveReminder") === "Yes") {
      if (!localStorage.getItem("hcpv02ReminderType")) reminderType.parentElement.innerHTML = "Not set";
      if (!localStorage.getItem("hcpv02ReminderFrequency")) reminderFrequency.innerHTML = "Not set";
    }
  }

  // v03
  if (pageUrlPath === '/hcp-e2e-journey-v03/reminder-settings' || pageUrlPath === '/hcp-e2e-journey-v03/reminder-dashboard') {
    let receiveReminders = document.getElementById('receiveReminders');
    let reminderType = document.getElementById('reminderType');
    let reminderFrequency = document.getElementById('reminderFrequency');
    let receiveRemindersDiv = document.getElementById('receiveRemindersDiv');
    let reminderTypeDiv = document.getElementById('reminderTypeDiv');
    let emailReminderDiv = document.getElementById('emailReminderDiv');
    let mobileReminderDiv = document.getElementById('mobileReminderDiv');
    let reminderFrequencyDiv = document.getElementById('reminderFrequencyDiv');
    let mobileNumber = document.getElementById('mobileNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');
    let reminderSettingsPageRouting = document.getElementById('reminderSettingsPage');
    if (localStorage.getItem('hcpv03NewHcpUser')) {
      reminderSettingsPageRouting.setAttribute("action", "/hcp-e2e-journey-v03/account-new-dashboard");
    }
    receiveReminders.innerHTML = localStorage.getItem("hcpv03ReceiveReminder");
    reminderType.innerHTML = localStorage.getItem("hcpv03ReminderType");
    reminderFrequency.innerHTML = localStorage.getItem("hcpv03ReminderFrequency");
    if (localStorage.getItem("hcpv03ReminderType") === 'Email and text message') {
      bothReminderDiv.classList.remove('hidden');
      emailAddress2.innerHTML = localStorage.getItem("hcpv03HcpEmail");
      mobileNumber2.innerHTML = localStorage.getItem("hcpv03MobileNumber");
    }
    if (localStorage.getItem("hcpv03ReminderType") === 'Email') {
      emailReminderDiv.classList.remove('hidden');
      emailAddress.innerHTML = localStorage.getItem("hcpv03HcpEmail");
    }
    if (localStorage.getItem("hcpv03ReminderType") === 'Text message') {
      mobileReminderDiv.classList.remove('hidden');
      mobileNumber.innerHTML = localStorage.getItem("hcpv03MobileNumber");
    }
    // Hide/Show reminder settings if set or not
    if ((!localStorage.getItem("hcpv03ReceiveReminder")) || localStorage.getItem("hcpv03ReceiveReminder") === "No") {
      reminderTypeDiv.classList.add('hidden');
      reminderFrequencyDiv.classList.add('hidden');
      receiveReminders.innerHTML = "No";
    } else {
      reminderTypeDiv.classList.remove('hidden');
      reminderFrequencyDiv.classList.remove('hidden');
    }
    // Not set state
    if (
      localStorage.getItem("hcpv03ReceiveReminder") === "Yes") {
      if (!localStorage.getItem("hcpv03ReminderType")) reminderType.parentElement.innerHTML = "Not set";
      if (!localStorage.getItem("hcpv03ReminderFrequency")) reminderFrequency.innerHTML = "Not set";
    }
  }

  // v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/reminder-settings' || pageUrlPath === '/hcp-e2e-journey-v04/reminder-dashboard' || pageUrlPath === '/hcp-e2e-journey-v04/settings') {
    let receiveReminders = document.getElementById('receiveReminders');
    let reminderType = document.getElementById('reminderType');
    let reminderFrequency = document.getElementById('reminderFrequency');
    let receiveRemindersDiv = document.getElementById('receiveRemindersDiv');
    let reminderTypeDiv = document.getElementById('reminderTypeDiv');
    let bothReminderDiv = document.getElementById('bothReminderDiv');
    let emailReminderDiv = document.getElementById('emailReminderDiv');
    let mobileReminderDiv = document.getElementById('mobileReminderDiv');
    let reminderFrequencyDiv = document.getElementById('reminderFrequencyDiv');
    let mobileNumber = document.getElementById('mobileNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');
    let reminderSettingsPageRouting = document.getElementById('reminderSettingsPage');
    if (localStorage.getItem('hcpv04NewHcpUser')) {
      reminderSettingsPageRouting.setAttribute("action", "/hcp-e2e-journey-v04/account-new-dashboard");
    }
    receiveReminders.innerHTML = localStorage.getItem("hcpv04ReceiveReminder");
    reminderType.innerHTML = localStorage.getItem("hcpv04ReminderType");
    reminderFrequency.innerHTML = localStorage.getItem("hcpv04ReminderFrequency");
    if (localStorage.getItem("hcpv04ReminderType") === 'Email and text message') {
      bothReminderDiv.classList.remove('hidden');
      emailAddress2.innerHTML = localStorage.getItem("hcpv04HcpEmail");
      mobileNumber2.innerHTML = localStorage.getItem("hcpv04MobileNumber");
    }
    if (localStorage.getItem("hcpv04ReminderType") === 'Email') {
      emailReminderDiv.classList.remove('hidden');
      emailAddress.innerHTML = localStorage.getItem("hcpv04HcpEmail");
    }
    if (localStorage.getItem("hcpv04ReminderType") === 'Text message') {
      mobileReminderDiv.classList.remove('hidden');
      mobileNumber.innerHTML = localStorage.getItem("hcpv04MobileNumber");
    }
    // Hide/Show reminder settings if set or not
    if ((!localStorage.getItem("hcpv04ReceiveReminder")) || localStorage.getItem("hcpv04ReceiveReminder") === "No") {
      reminderTypeDiv.classList.add('hidden');
      reminderFrequencyDiv.classList.add('hidden');
      receiveReminders.innerHTML = "No";
    } else {
      reminderTypeDiv.classList.remove('hidden');
      reminderFrequencyDiv.classList.remove('hidden');
    }
    // Not set state
    if (localStorage.getItem("hcpv04ReceiveReminder") === "Yes") {
      if (!localStorage.getItem("hcpv04ReminderType")) reminderType.parentElement.innerHTML = "Not set";
      if (!localStorage.getItem("hcpv04ReminderFrequency")) reminderFrequency.innerHTML = "Not set";
    }
  }

  // v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/reminder-settings' || pageUrlPath === '/hcp-e2e-journey-v05/reminder-dashboard' || pageUrlPath === '/hcp-e2e-journey-v05/settings') {
    let receiveReminders = document.getElementById('receiveReminders');
    let reminderType = document.getElementById('reminderType');
    let reminderFrequency = document.getElementById('reminderFrequency');
    let receiveRemindersDiv = document.getElementById('receiveRemindersDiv');
    let reminderTypeDiv = document.getElementById('reminderTypeDiv');
    let bothReminderDiv = document.getElementById('bothReminderDiv');
    let emailReminderDiv = document.getElementById('emailReminderDiv');
    let mobileReminderDiv = document.getElementById('mobileReminderDiv');
    let reminderFrequencyDiv = document.getElementById('reminderFrequencyDiv');
    let mobileNumber = document.getElementById('mobileNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');
    let reminderSettingsPageRouting = document.getElementById('reminderSettingsPage');
    if (localStorage.getItem('hcpv05NewHcpUser')) {
      reminderSettingsPageRouting.setAttribute("action", "/hcp-e2e-journey-v05/account-new-dashboard-success");
    }
    receiveReminders.innerHTML = localStorage.getItem("hcpv05ReceiveReminder");
    reminderType.innerHTML = localStorage.getItem("hcpv05ReminderType");
    reminderFrequency.innerHTML = localStorage.getItem("hcpv05ReminderFrequency");
    if (localStorage.getItem("hcpv05ReminderType") === 'Email and text message') {
      bothReminderDiv.classList.remove('hidden');
      emailAddress2.innerHTML = localStorage.getItem("hcpv05HcpEmail");
      mobileNumber2.innerHTML = localStorage.getItem("hcpv05MobileNumber");
    }
    if (localStorage.getItem("hcpv05ReminderType") === 'Email') {
      emailReminderDiv.classList.remove('hidden');
      emailAddress.innerHTML = localStorage.getItem("hcpv05HcpEmail");
    }
    if (localStorage.getItem("hcpv05ReminderType") === 'Text message') {
      mobileReminderDiv.classList.remove('hidden');
      mobileNumber.innerHTML = localStorage.getItem("hcpv05MobileNumber");
    }
    // Hide/Show reminder settings if set or not
    if ((!localStorage.getItem("hcpv05ReceiveReminder")) || localStorage.getItem("hcpv05ReceiveReminder") === "No") {
      reminderTypeDiv.classList.add('hidden');
      reminderFrequencyDiv.classList.add('hidden');
      receiveReminders.innerHTML = "No";
    } else {
      reminderTypeDiv.classList.remove('hidden');
      reminderFrequencyDiv.classList.remove('hidden');
    }
    // Not set state
    if (localStorage.getItem("hcpv05ReceiveReminder") === "Yes") {
      if (!localStorage.getItem("hcpv05ReminderType")) reminderType.parentElement.innerHTML = "Not set";
      if (!localStorage.getItem("hcpv05ReminderFrequency")) reminderFrequency.innerHTML = "Not set";
    }
  }

  // v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/reminder-settings' || pageUrlPath === '/hcp-e2e-journey-v06/reminder-dashboard' || pageUrlPath === '/hcp-e2e-journey-v06/settings') {
    let receiveReminders = document.getElementById('receiveReminders');
    let reminderType = document.getElementById('reminderType');
    let reminderFrequency = document.getElementById('reminderFrequency');
    let receiveRemindersDiv = document.getElementById('receiveRemindersDiv');
    let reminderTypeDiv = document.getElementById('reminderTypeDiv');
    let bothReminderDiv = document.getElementById('bothReminderDiv');
    let emailReminderDiv = document.getElementById('emailReminderDiv');
    let mobileReminderDiv = document.getElementById('mobileReminderDiv');
    let reminderFrequencyDiv = document.getElementById('reminderFrequencyDiv');
    let mobileNumber = document.getElementById('mobileNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');
    let reminderSettingsPageRouting = document.getElementById('reminderSettingsPage');
    if (localStorage.getItem('hcpv06NewHcpUser')) {
      reminderSettingsPageRouting.setAttribute("action", "/hcp-e2e-journey-v06/account-new-dashboard");
    }
    receiveReminders.innerHTML = localStorage.getItem("hcpv06ReceiveReminder");
    reminderType.innerHTML = localStorage.getItem("hcpv06ReminderType");
    reminderFrequency.innerHTML = localStorage.getItem("hcpv06ReminderFrequency");
    if (localStorage.getItem("hcpv06ReminderType") === 'Email and text message') {
      bothReminderDiv.classList.remove('hidden');
      emailAddress2.innerHTML = localStorage.getItem("hcpv06HcpEmail");
      mobileNumber2.innerHTML = localStorage.getItem("hcpv06MobileNumber");
    }
    if (localStorage.getItem("hcpv06ReminderType") === 'Email') {
      emailReminderDiv.classList.remove('hidden');
      emailAddress.innerHTML = localStorage.getItem("hcpv06HcpEmail");
    }
    if (localStorage.getItem("hcpv06ReminderType") === 'Text message') {
      mobileReminderDiv.classList.remove('hidden');
      mobileNumber.innerHTML = localStorage.getItem("hcpv06MobileNumber");
    }
    // Hide/Show reminder settings if set or not
    if ((!localStorage.getItem("hcpv06ReceiveReminder")) || localStorage.getItem("hcpv06ReceiveReminder") === "No") {
      reminderTypeDiv.classList.add('hidden');
      reminderFrequencyDiv.classList.add('hidden');
      receiveReminders.innerHTML = "No";
    } else {
      reminderTypeDiv.classList.remove('hidden');
      reminderFrequencyDiv.classList.remove('hidden');
    }
    // Not set state
    if (localStorage.getItem("hcpv06ReceiveReminder") === "Yes") {
      if (!localStorage.getItem("hcpv06ReminderType")) reminderType.parentElement.innerHTML = "Not set";
      if (!localStorage.getItem("hcpv06ReminderFrequency")) reminderFrequency.innerHTML = "Not set";
    }
  }

  // v07
  if (pageUrlPath === '/hcp-e2e-journey-v07/reminder-settings' || pageUrlPath === '/hcp-e2e-journey-v07/reminder-dashboard' || pageUrlPath === '/hcp-e2e-journey-v07/settings') {
    let receiveReminders = document.getElementById('receiveReminders');
    let reminderType = document.getElementById('reminderType');
    let reminderFrequency = document.getElementById('reminderFrequency');
    let receiveRemindersDiv = document.getElementById('receiveRemindersDiv');
    let reminderTypeDiv = document.getElementById('reminderTypeDiv');
    let bothReminderDiv = document.getElementById('bothReminderDiv');
    let emailReminderDiv = document.getElementById('emailReminderDiv');
    let mobileReminderDiv = document.getElementById('mobileReminderDiv');
    let reminderFrequencyDiv = document.getElementById('reminderFrequencyDiv');
    let mobileNumber = document.getElementById('mobileNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');
    let reminderSettingsPageRouting = document.getElementById('reminderSettingsPage');
    if (localStorage.getItem('hcpv07NewHcpUser')) {
      reminderSettingsPageRouting.setAttribute("action", "/hcp-e2e-journey-v07/account-new-dashboard");
    }
    receiveReminders.innerHTML = localStorage.getItem("hcpv07ReceiveReminder");
    reminderType.innerHTML = localStorage.getItem("hcpv07ReminderType");
    reminderFrequency.innerHTML = localStorage.getItem("hcpv07ReminderFrequency");
    if (localStorage.getItem("hcpv07ReminderType") === 'Email and text message') {
      bothReminderDiv.classList.remove('hidden');
      emailAddress2.innerHTML = localStorage.getItem("hcpv07HcpEmail");
      mobileNumber2.innerHTML = localStorage.getItem("hcpv07MobileNumber");
    }
    if (localStorage.getItem("hcpv07ReminderType") === 'Email') {
      emailReminderDiv.classList.remove('hidden');
      emailAddress.innerHTML = localStorage.getItem("hcpv07HcpEmail");
    }
    if (localStorage.getItem("hcpv07ReminderType") === 'Text message') {
      mobileReminderDiv.classList.remove('hidden');
      mobileNumber.innerHTML = localStorage.getItem("hcpv07MobileNumber");
    }
    // Hide/Show reminder settings if set or not
    if ((!localStorage.getItem("hcpv07ReceiveReminder")) || localStorage.getItem("hcpv07ReceiveReminder") === "No") {
      reminderTypeDiv.classList.add('hidden');
      reminderFrequencyDiv.classList.add('hidden');
      receiveReminders.innerHTML = "No";
    } else {
      reminderTypeDiv.classList.remove('hidden');
      reminderFrequencyDiv.classList.remove('hidden');
    }
    // Not set state
    if (localStorage.getItem("hcpv07ReceiveReminder") === "Yes") {
      if (!localStorage.getItem("hcpv07ReminderType")) reminderType.parentElement.innerHTML = "Not set";
      if (!localStorage.getItem("hcpv07ReminderFrequency")) reminderFrequency.innerHTML = "Not set";
    }
  }

  // v08
  if (pageUrlPath === '/hcp-e2e-journey-v08/reminder-settings' || pageUrlPath === '/hcp-e2e-journey-v08/reminder-dashboard' || pageUrlPath === '/hcp-e2e-journey-v08/settings') {
    let receiveReminders = document.getElementById('receiveReminders');
    let reminderType = document.getElementById('reminderType');
    let reminderFrequency = document.getElementById('reminderFrequency');
    let receiveRemindersDiv = document.getElementById('receiveRemindersDiv');
    let reminderTypeDiv = document.getElementById('reminderTypeDiv');
    let bothReminderDiv = document.getElementById('bothReminderDiv');
    let emailReminderDiv = document.getElementById('emailReminderDiv');
    let mobileReminderDiv = document.getElementById('mobileReminderDiv');
    let reminderFrequencyDiv = document.getElementById('reminderFrequencyDiv');
    let mobileNumber = document.getElementById('mobileNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');
    let reminderSettingsPageRouting = document.getElementById('reminderSettingsPage');
    if (localStorage.getItem('hcpv08NewHcpUser')) {
      reminderSettingsPageRouting.setAttribute("action", "/hcp-e2e-journey-v08/account-new-dashboard-success");
    }
    receiveReminders.innerHTML = localStorage.getItem("hcpv08ReceiveReminder");
    reminderType.innerHTML = localStorage.getItem("hcpv08ReminderType");
    reminderFrequency.innerHTML = localStorage.getItem("hcpv08ReminderFrequency");
    if (localStorage.getItem("hcpv08ReminderType") === 'Email and text message') {
      bothReminderDiv.classList.remove('hidden');
      emailAddress2.innerHTML = localStorage.getItem("hcpv08HcpEmail");
      mobileNumber2.innerHTML = localStorage.getItem("hcpv08MobileNumber");
    }

    if (localStorage.getItem("hcpv08ReminderType") === 'Email') {
      emailReminderDiv.classList.remove('hidden');
      emailAddress.innerHTML = localStorage.getItem("hcpv08HcpEmail");
    }
    if (localStorage.getItem("hcpv08ReminderType") === 'Text message') {
      mobileReminderDiv.classList.remove('hidden');
      mobileNumber.innerHTML = localStorage.getItem("hcpv08MobileNumber");
    }
    // Hide/Show reminder settings if set or not
    if ((!localStorage.getItem("hcpv08ReceiveReminder")) || localStorage.getItem("hcpv08ReceiveReminder") === "No") {
      reminderTypeDiv.classList.add('hidden');
      reminderFrequencyDiv.classList.add('hidden');
      receiveReminders.innerHTML = "No";
    } else {
      reminderTypeDiv.classList.remove('hidden');
      reminderFrequencyDiv.classList.remove('hidden');
    }
    // Not set state
    if (localStorage.getItem("hcpv08ReceiveReminder") === "Yes") {
      if (!localStorage.getItem("hcpv08ReminderType")) reminderType.parentElement.innerHTML = "Not set";
      if (!localStorage.getItem("hcpv08ReminderFrequency")) reminderFrequency.innerHTML = "Not set";
    }
  }

  // v09
  if (pageUrlPath === '/hcp-e2e-journey-v09/reminder-settings' || pageUrlPath === '/hcp-e2e-journey-v09/reminder-dashboard' || pageUrlPath === '/hcp-e2e-journey-v09/settings') {
    let receiveReminders = document.getElementById('receiveReminders');
    let reminderType = document.getElementById('reminderType');
    let reminderFrequency = document.getElementById('reminderFrequency');
    let receiveRemindersDiv = document.getElementById('receiveRemindersDiv');
    let reminderTypeDiv = document.getElementById('reminderTypeDiv');
    let bothReminderDiv = document.getElementById('bothReminderDiv');
    let emailReminderDiv = document.getElementById('emailReminderDiv');
    let mobileReminderDiv = document.getElementById('mobileReminderDiv');
    let reminderFrequencyDiv = document.getElementById('reminderFrequencyDiv');
    let mobileNumber = document.getElementById('mobileNumber');
    let emailAddress = document.getElementById('emailAddress');
    let mobileNumber2 = document.getElementById('mobileNumber2');
    let emailAddress2 = document.getElementById('emailAddress2');
    let reminderSettingsPageRouting = document.getElementById('reminderSettingsPage');
    if (localStorage.getItem('hcpv09NewHcpUser')) {
      reminderSettingsPageRouting.setAttribute("action", "/hcp-e2e-journey-v09/account-new-dashboard");
    }
    receiveReminders.innerHTML = localStorage.getItem("hcpv09ReceiveReminder");
    reminderType.innerHTML = localStorage.getItem("hcpv09ReminderType");
    reminderFrequency.innerHTML = localStorage.getItem("hcpv09ReminderFrequency");
    if (localStorage.getItem("hcpv09ReminderType") === 'Email and text message') {
      bothReminderDiv.classList.remove('hidden');
      emailAddress2.innerHTML = localStorage.getItem("hcpv09HcpEmail");
      mobileNumber2.innerHTML = localStorage.getItem("hcpv09MobileNumber");
    }
    if (localStorage.getItem("hcpv09ReminderType") === 'Email') {
      emailReminderDiv.classList.remove('hidden');
      emailAddress.innerHTML = localStorage.getItem("hcpv09HcpEmail");
    }
    if (localStorage.getItem("hcpv09ReminderType") === 'Text message') {
      mobileReminderDiv.classList.remove('hidden');
      mobileNumber.innerHTML = localStorage.getItem("hcpv09MobileNumber");
    }
    // Hide/Show reminder settings if set or not
    if ((!localStorage.getItem("hcpv09ReceiveReminder")) || localStorage.getItem("hcpv09ReceiveReminder") === "No") {
      reminderTypeDiv.classList.add('hidden');
      reminderFrequencyDiv.classList.add('hidden');
      receiveReminders.innerHTML = "No";
    } else {
      reminderTypeDiv.classList.remove('hidden');
      reminderFrequencyDiv.classList.remove('hidden');
    }
    // Not set state
    if (localStorage.getItem("hcpv09ReceiveReminder") === "Yes") {
      if (!localStorage.getItem("hcpv09ReminderType")) reminderType.parentElement.innerHTML = "Not set";
      if (!localStorage.getItem("hcpv09ReminderFrequency")) reminderFrequency.innerHTML = "Not set";
    }
  }

  // =======================
  // Account dashboard
  // =======================

  if ((pageUrlPath === '/hcp-e2e-journey-v01/account-d-dashboard') || (pageUrlPath === '/hcp-e2e-journey-v01/account-new-dashboard')) {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let fullName = document.getElementById('fullName');
    let feeForm = document.getElementById('feeForm');
    professionalRegistrationNumber.innerHTML = localStorage.getItem("hcpv01ProfessionalRegistrationNumber");
    fullName.innerHTML = localStorage.getItem("hcpv01Fullname");
    if ((localStorage.getItem('hcpv01Role') === "Senior specialist nurse") || (localStorage.getItem('hcpv01Role') === "other")) feeForm.classList.add('hidden');
  }

  if ((pageUrlPath === '/hcp-e2e-journey-v02/account-d-dashboard') || (pageUrlPath === '/hcp-e2e-journey-v02/account-new-dashboard')) {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let fullName = document.getElementById('fullName');
    let feeForm = document.getElementById('feeForm');
    professionalRegistrationNumber.innerHTML = localStorage.getItem("hcpv02ProfessionalRegistrationNumber");
    fullName.innerHTML = localStorage.getItem("hcpv02Fullname");
    if ((localStorage.getItem('hcpv02Role') === "Senior specialist nurse") || (localStorage.getItem('hcpv02Role') === "other")) feeForm.classList.add('hidden');
  }
  if ((pageUrlPath === '/hcp-e2e-journey-v03/account-d-dashboard') || (pageUrlPath === '/hcp-e2e-journey-v03/account-new-dashboard')) {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let fullName = document.getElementById('fullName');
    let feeForm = document.getElementById('feeForm');
    professionalRegistrationNumber.innerHTML = localStorage.getItem("hcpv03ProfessionalRegistrationNumber");
    fullName.innerHTML = localStorage.getItem("hcpv03Fullname");
    if ((localStorage.getItem('hcpv03Role') === "Senior specialist nurse") || (localStorage.getItem('hcpv03Role') === "other")) feeForm.classList.add('hidden');
  }
  if ((pageUrlPath === '/hcp-e2e-journey-v04/account-d-dashboard') || (pageUrlPath === '/hcp-e2e-journey-v04/account-new-dashboard')) {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let fullName = document.getElementById('fullName');
    let feeForm = document.getElementById('feeForm');
    professionalRegistrationNumber.innerHTML = localStorage.getItem("hcpv04ProfessionalRegistrationNumber");
    fullName.innerHTML = localStorage.getItem("hcpv04Fullname");
    if ((localStorage.getItem('hcpv04Role') === "Senior specialist nurse") || (localStorage.getItem('hcpv04Role') === "other")) feeForm.classList.add('hidden');
  }
  if ((pageUrlPath === '/hcp-e2e-journey-v05/account-d-dashboard') || (pageUrlPath === '/hcp-e2e-journey-v05/account-new-dashboard') || (pageUrlPath === '/hcp-e2e-journey-v05/account-new-dashboard-success')) {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let fullName = document.getElementById('fullName');
    let feeForm = document.getElementById('feeForm');
    professionalRegistrationNumber.innerHTML = localStorage.getItem("hcpv05ProfessionalRegistrationNumber");
    fullName.innerHTML = localStorage.getItem("hcpv05Fullname");
    if ((localStorage.getItem('hcpv05Role') === "Senior specialist nurse") || (localStorage.getItem('hcpv05Role') === "other")) feeForm.classList.add('hidden');
  }
  if ((pageUrlPath === '/hcp-e2e-journey-v06/account-d-dashboard') || (pageUrlPath === '/hcp-e2e-journey-v06/account-new-dashboard') || (pageUrlPath === '/hcp-e2e-journey-v06/account-d-dashboard-success')) {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let fullName = document.getElementById('fullName');
    let feeForm = document.getElementById('feeForm');
    professionalRegistrationNumber.innerHTML = localStorage.getItem("hcpv06ProfessionalRegistrationNumber");
    fullName.innerHTML = localStorage.getItem("hcpv06Fullname");
    if ((localStorage.getItem('hcpv06Role') === "Senior specialist nurse") || (localStorage.getItem('hcpv06Role') === "other")) feeForm.classList.add('hidden');
  }
  if ((pageUrlPath === '/hcp-e2e-journey-v07/account-d-dashboard') || (pageUrlPath === '/hcp-e2e-journey-v07/account-new-dashboard')) {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let fullName = document.getElementById('fullName');
    let feeForm = document.getElementById('feeForm');
    professionalRegistrationNumber.innerHTML = localStorage.getItem("hcpv07ProfessionalRegistrationNumber");
    fullName.innerHTML = localStorage.getItem("hcpv07Fullname");
    if ((localStorage.getItem('hcpv07Role') === "Senior specialist nurse") || (localStorage.getItem('hcpv07Role') === "other")) feeForm.classList.add('hidden');
  }
  if ((pageUrlPath === '/hcp-e2e-journey-v08/account-d-dashboard') || (pageUrlPath === '/hcp-e2e-journey-v08/account-new-dashboard') || (pageUrlPath === '/hcp-e2e-journey-v08/account-new-dashboard-success')) {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let fullName = document.getElementById('fullName');
    let feeForm = document.getElementById('feeForm');
    professionalRegistrationNumber.innerHTML = localStorage.getItem("hcpv08ProfessionalRegistrationNumber");
    fullName.innerHTML = localStorage.getItem("hcpv08Fullname");
    if ((localStorage.getItem('hcpv08Role') === "Senior specialist nurse") || (localStorage.getItem('hcpv08Role') === "other")) feeForm.classList.add('hidden');
  }

  if ((pageUrlPath === '/hcp-e2e-journey-v09/account-d-dashboard') || (pageUrlPath === '/hcp-e2e-journey-v09/account-new-dashboard') || (pageUrlPath === '/hcp-e2e-journey-v09/account-d-dashboard-success')) {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let fullName = document.getElementById('fullName');
    let feeForm = document.getElementById('feeForm');
    professionalRegistrationNumber.innerHTML = localStorage.getItem("hcpv09ProfessionalRegistrationNumber");
    fullName.innerHTML = localStorage.getItem("hcpv09Fullname");
    if ((localStorage.getItem('hcpv09Role') === "Senior specialist nurse") || (localStorage.getItem('hcpv09Role') === "other")) feeForm.classList.add('hidden');
  }
  if ((pageUrlPath === '/hcp-e2e-journey-mvp01/account-d-dashboard') || (pageUrlPath === '/hcp-e2e-journey-mvp01/account-new-dashboard')) {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let fullName = document.getElementById('fullName');
    let feeForm = document.getElementById('feeForm');
    professionalRegistrationNumber.innerHTML = localStorage.getItem("hcpmvp01ProfessionalRegistrationNumber");
    fullName.innerHTML = localStorage.getItem("hcpmvp01Firstname") + ' ' + localStorage.getItem("hcpmvp01Lastname");
    if ((localStorage.getItem('hcpmvp01Role') === "Senior specialist nurse") || (localStorage.getItem('hcpmvp01Role') === "other")) feeForm.classList.add('hidden');
  }
  if ((pageUrlPath === '/hcp-e2e-journey-mvp02/account-d-dashboard') || (pageUrlPath === '/hcp-e2e-journey-mvp02/account-new-dashboard')) {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let fullName = document.getElementById('fullName');
    let feeForm = document.getElementById('feeForm');
    professionalRegistrationNumber.innerHTML = localStorage.getItem("hcpmvp02ProfessionalRegistrationNumber");
    fullName.innerHTML = localStorage.getItem("hcpmvp02Firstname") + ' ' + localStorage.getItem("hcpmvp02Lastname");
    if ((localStorage.getItem('hcpmvp02Role') === "Senior specialist nurse") || (localStorage.getItem('hcpmvp02Role') === "other")) feeForm.classList.add('hidden');
  }
  if ((pageUrlPath === '/hcp-e2e-journey-mvp03/account-d-dashboard') || (pageUrlPath === '/hcp-e2e-journey-mvp03/account-new-dashboard')) {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let fullName = document.getElementById('fullName');
    let feeForm = document.getElementById('feeForm');
    professionalRegistrationNumber.innerHTML = localStorage.getItem("hcpmvp03ProfessionalRegistrationNumber");
    fullName.innerHTML = localStorage.getItem("hcpmvp03Firstname") + ' ' + localStorage.getItem("hcpmvp03Lastname");
    if ((localStorage.getItem('hcpmvp03Role') === "Senior specialist nurse") || (localStorage.getItem('hcpmvp03Role') === "other")) feeForm.classList.add('hidden');
  }
  if ((pageUrlPath === '/beta01/account-d-dashboard') || (pageUrlPath === '/beta01/account-new-dashboard')) {
    let professionalRegistrationNumber = document.getElementById('professionalRegistrationNumber');
    let fullName = document.getElementById('fullName');
    let feeForm = document.getElementById('feeForm');
    professionalRegistrationNumber.innerHTML = localStorage.getItem("hcpbeta01ProfessionalRegistrationNumber");
    fullName.innerHTML = localStorage.getItem("hcpbeta01Firstname") + ' ' + localStorage.getItem("hcpbeta01Lastname");
    if ((localStorage.getItem('hcpbeta01Role') === "Senior specialist nurse") || (localStorage.getItem('hcpbeta01Role') === "other")) feeForm.classList.add('hidden');
  }


  // =======================
  // Send SR1 form - Journey
  // =======================

  // v01

  // Patient details v01
  if (pageUrlPath === '/hcp-e2e-journey-v01/send-an-sr1-form') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let PatientFullName = document.getElementById('fullName');
    let patientaddressline1 = document.getElementById('patientaddressline1');
    let patientaddressline2 = document.getElementById('patientaddressline2');
    let patientaddresstown = document.getElementById('patientaddresstown');
    let patientPostcode = document.getElementById('patientPostcode');
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    let niNo = document.getElementById('niNo');
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    if (localStorage.getItem("hcpv01PatientFullName")) PatientFullName.value = localStorage.getItem("hcpv01PatientFullName");
    if (localStorage.getItem("hcpv01PatientAddressLine1")) patientaddressline1.value = localStorage.getItem("hcpv01PatientAddressLine1");
    if (localStorage.getItem("hcpv01PatientAddressLine2")) patientaddressline2.value = localStorage.getItem("hcpv01PatientAddressLine2");
    if (localStorage.getItem("hcpv01PatientAddressTown")) patientaddresstown.value = localStorage.getItem("hcpv01PatientAddressTown");
    if (localStorage.getItem("hcpv01PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpv01PatientPostcode");
    if (localStorage.getItem("hcpv01DobDay")) dobDay.value = localStorage.getItem("hcpv01DobDay");
    if (localStorage.getItem("hcpv01DobMonth")) dobMonth.value = localStorage.getItem("hcpv01DobMonth");
    if (localStorage.getItem("hcpv01DobYear")) dobYear.value = localStorage.getItem("hcpv01DobYear");
    if (localStorage.getItem("hcpv01NiNo")) niNo.value = localStorage.getItem("hcpv01NiNo");
    if (localStorage.getItem("hcpv01DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpv01DateofSpecialRulesDay");
    if (localStorage.getItem("hcpv01DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpv01DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpv01DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpv01DateofSpecialRulesYear");
    // Diagnosis v01
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    let hcpv01AwareOfDiagnosis = localStorage.getItem('hcpv01AwareOfDiagnosis');
    let hcpv01AwareOfPrognosis = localStorage.getItem('hcpv01AwareOfPrognosis');
    if (localStorage.getItem("hcpv01WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpv01WhatIsTheDiagnosis");
    if (localStorage.getItem("hcpv01DodDay")) dodDay.value = localStorage.getItem("hcpv01DodDay");
    if (localStorage.getItem("hcpv01DodMonth")) dodMonth.value = localStorage.getItem("hcpv01DodMonth");
    if (localStorage.getItem("hcpv01DodYear")) dodYear.value = localStorage.getItem("hcpv01DodYear");
    if (localStorage.getItem("hcpv01OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpv01OtherRelevantDiagnosis");
    // Clinical features v01
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpv01DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpv01DetailsOfClinicalFeatures");
    // Treatment v01
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv01Treatment")) treatment.value = localStorage.getItem("hcpv01Treatment");
    // Your details v01
    let yourRole = document.getElementById('yourRole');
    let yourFullName = document.getElementById('yourFullName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis v01
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === hcpv01AwareOfDiagnosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis v01
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === hcpv01AwareOfPrognosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
    if (localStorage.getItem("hcpv01Role")) {
      yourRole.value = localStorage.getItem("hcpv01Role");
    }
    if (localStorage.getItem("hcpv01Role") === "other") {
      yourRole.value = localStorage.getItem("hcpv01OtherRole");
    }
    if (localStorage.getItem("hcpv01Fullname")) yourFullName.value = localStorage.getItem("hcpv01Fullname");
    if (localStorage.getItem("hcpv01OrganisationName")) organisationName.value = localStorage.getItem("hcpv01OrganisationName");
    if (localStorage.getItem("hcpv01OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv01OrganisationAddressLine1");
    if (localStorage.getItem("hcpv01OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv01OrganisationAddressLine2");
    if (localStorage.getItem("hcpv01TownOrCity")) townOrCity.value = localStorage.getItem("hcpv01TownOrCity");
    if (localStorage.getItem("hcpv01Postcode")) thePostcode.value = localStorage.getItem("hcpv01Postcode");
    if (localStorage.getItem("hcpv01MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv01MobileNumber");
  }

  // v02

  // Patient details v02
  if (pageUrlPath === '/hcp-e2e-journey-v02/send-an-sr1-form') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let PatientFullName = document.getElementById('fullName');
    let patientaddressline1 = document.getElementById('patientaddressline1');
    let patientaddressline2 = document.getElementById('patientaddressline2');
    let patientaddresstown = document.getElementById('patientaddresstown');
    let patientPostcode = document.getElementById('patientPostcode');
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    let niNo = document.getElementById('niNo');
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    if (localStorage.getItem("hcpv02PatientFullName")) PatientFullName.value = localStorage.getItem("hcpv02PatientFullName");
    if (localStorage.getItem("hcpv02PatientAddressLine1")) patientaddressline1.value = localStorage.getItem("hcpv02PatientAddressLine1");
    if (localStorage.getItem("hcpv02PatientAddressLine2")) patientaddressline2.value = localStorage.getItem("hcpv02PatientAddressLine2");
    if (localStorage.getItem("hcpv02PatientAddressTown")) patientaddresstown.value = localStorage.getItem("hcpv02PatientAddressTown");
    if (localStorage.getItem("hcpv02PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpv02PatientPostcode");
    if (localStorage.getItem("hcpv02DobDay")) dobDay.value = localStorage.getItem("hcpv02DobDay");
    if (localStorage.getItem("hcpv02DobMonth")) dobMonth.value = localStorage.getItem("hcpv02DobMonth");
    if (localStorage.getItem("hcpv02DobYear")) dobYear.value = localStorage.getItem("hcpv02DobYear");
    if (localStorage.getItem("hcpv02NiNo")) niNo.value = localStorage.getItem("hcpv02NiNo");
    if (localStorage.getItem("hcpv02DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpv02DateofSpecialRulesDay");
    if (localStorage.getItem("hcpv02DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpv02DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpv02DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpv02DateofSpecialRulesYear");
    // Diagnosis v02
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    let hcpv02AwareOfDiagnosis = localStorage.getItem('hcpv02AwareOfDiagnosis');
    let hcpv02AwareOfPrognosis = localStorage.getItem('hcpv02AwareOfPrognosis');
    if (localStorage.getItem("hcpv02WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpv02WhatIsTheDiagnosis");
    if (localStorage.getItem("hcpv02DodDay")) dodDay.value = localStorage.getItem("hcpv02DodDay");
    if (localStorage.getItem("hcpv02DodMonth")) dodMonth.value = localStorage.getItem("hcpv02DodMonth");
    if (localStorage.getItem("hcpv02DodYear")) dodYear.value = localStorage.getItem("hcpv02DodYear");
    if (localStorage.getItem("hcpv02OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpv02OtherRelevantDiagnosis");
    // Clinical features v02
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpv02DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpv02DetailsOfClinicalFeatures");
    // Treatment v02
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv02Treatment")) treatment.value = localStorage.getItem("hcpv02Treatment");
    // Your details v02
    let yourRole = document.getElementById('yourRole');
    let yourFullName = document.getElementById('yourFullName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis v02
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === hcpv02AwareOfDiagnosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis v02
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === hcpv02AwareOfPrognosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
    if (localStorage.getItem("hcpv02Role")) {
      yourRole.value = localStorage.getItem("hcpv02Role");
    }
    if (localStorage.getItem("hcpv02Role") === "other") {
      yourRole.value = localStorage.getItem("hcpv02OtherRole");
    }
    if (localStorage.getItem("hcpv02Fullname")) yourFullName.value = localStorage.getItem("hcpv02Fullname");
    if (localStorage.getItem("hcpv02OrganisationName")) organisationName.value = localStorage.getItem("hcpv02OrganisationName");
    if (localStorage.getItem("hcpv02OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv02OrganisationAddressLine1");
    if (localStorage.getItem("hcpv02OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv02OrganisationAddressLine2");
    if (localStorage.getItem("hcpv02TownOrCity")) townOrCity.value = localStorage.getItem("hcpv02TownOrCity");
    if (localStorage.getItem("hcpv02Postcode")) thePostcode.value = localStorage.getItem("hcpv02Postcode");
    if (localStorage.getItem("hcpv02MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv02MobileNumber");
  }

  // v03

  // Patient details v03
  if (pageUrlPath === '/hcp-e2e-journey-v03/send-an-sr1-form') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let PatientFullName = document.getElementById('fullName');
    let patientaddressline1 = document.getElementById('patientaddressline1');
    let patientaddressline2 = document.getElementById('patientaddressline2');
    let patientaddresstown = document.getElementById('patientaddresstown');
    let patientPostcode = document.getElementById('patientPostcode');
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    let niNo = document.getElementById('niNo');
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    if (localStorage.getItem("hcpv01PatientFullName")) PatientFullName.value = localStorage.getItem("hcpv01PatientFullName");
    if (localStorage.getItem("hcpv03PatientAddressLine1")) patientaddressline1.value = localStorage.getItem("hcpv03PatientAddressLine1");
    if (localStorage.getItem("hcpv03PatientAddressLine2")) patientaddressline2.value = localStorage.getItem("hcpv03PatientAddressLine2");
    if (localStorage.getItem("hcpv03PatientAddressTown")) patientaddresstown.value = localStorage.getItem("hcpv03PatientAddressTown");
    if (localStorage.getItem("hcpv03PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpv03PatientPostcode");
    if (localStorage.getItem("hcpv03DobDay")) dobDay.value = localStorage.getItem("hcpv03DobDay");
    if (localStorage.getItem("hcpv03DobMonth")) dobMonth.value = localStorage.getItem("hcpv03DobMonth");
    if (localStorage.getItem("hcpv03DobYear")) dobYear.value = localStorage.getItem("hcpv03DobYear");
    if (localStorage.getItem("hcpv03NiNo")) niNo.value = localStorage.getItem("hcpv03NiNo");
    if (localStorage.getItem("hcpv03DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpv03DateofSpecialRulesDay");
    if (localStorage.getItem("hcpv03DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpv03DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpv03DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpv03DateofSpecialRulesYear");
    // Diagnosis v03
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    let hcpv03AwareOfDiagnosis = localStorage.getItem('hcpv03AwareOfDiagnosis');
    let hcpv03AwareOfPrognosis = localStorage.getItem('hcpv03AwareOfPrognosis');
    if (localStorage.getItem("hcpv03WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpv03WhatIsTheDiagnosis");
    if (localStorage.getItem("hcpv03DodDay")) dodDay.value = localStorage.getItem("hcpv03DodDay");
    if (localStorage.getItem("hcpv03DodMonth")) dodMonth.value = localStorage.getItem("hcpv03DodMonth");
    if (localStorage.getItem("hcpv03DodYear")) dodYear.value = localStorage.getItem("hcpv03DodYear");
    if (localStorage.getItem("hcpv03OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpv03OtherRelevantDiagnosis");
    // Clinical features v03
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpv03DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpv03DetailsOfClinicalFeatures");
    // Treatment v03
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv03Treatment")) treatment.value = localStorage.getItem("hcpv03Treatment");
    // Your details v03
    let yourRole = document.getElementById('yourRole');
    let yourFullName = document.getElementById('yourFullName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis v03
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === hcpv03AwareOfDiagnosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis v03
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === hcpv03AwareOfPrognosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
    if (localStorage.getItem("hcpv03Role")) {
      yourRole.value = localStorage.getItem("hcpv03Role");
    }
    if (localStorage.getItem("hcpv03Role") === "other") {
      yourRole.value = localStorage.getItem("hcpv03OtherRole");
    }
    if (localStorage.getItem("hcpv03Fullname")) yourFullName.value = localStorage.getItem("hcpv03Fullname");
    if (localStorage.getItem("hcpv03OrganisationName")) organisationName.value = localStorage.getItem("hcpv03OrganisationName");
    if (localStorage.getItem("hcpv03OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv03OrganisationAddressLine1");
    if (localStorage.getItem("hcpv03OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv03OrganisationAddressLine2");
    if (localStorage.getItem("hcpv03TownOrCity")) townOrCity.value = localStorage.getItem("hcpv03TownOrCity");
    if (localStorage.getItem("hcpv03Postcode")) thePostcode.value = localStorage.getItem("hcpv03Postcode");
    if (localStorage.getItem("hcpv03MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv03MobileNumber");
  }

  // v04

  // Patient details v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-01' || pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-01') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let PatientFullName = document.getElementById('PatientFullName');
    let patientaddressline1 = document.getElementById('patientaddressline1');
    let patientaddressline2 = document.getElementById('patientaddressline2');
    let patientaddresstown = document.getElementById('patientaddresstown');
    let patientPostcode = document.getElementById('patientPostcode');
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpv04PatientFullName")) PatientFullName.value = localStorage.getItem("hcpv04PatientFullName");
    if (localStorage.getItem("hcpv04PatientAddressLine1")) patientaddressline1.value = localStorage.getItem("hcpv04PatientAddressLine1");
    if (localStorage.getItem("hcpv04PatientAddressLine2")) patientaddressline2.value = localStorage.getItem("hcpv04PatientAddressLine2");
    if (localStorage.getItem("hcpv04PatientAddressTown")) patientaddresstown.value = localStorage.getItem("hcpv04PatientAddressTown");
    if (localStorage.getItem("hcpv04PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpv04PatientPostcode");
    if (localStorage.getItem("hcpv04DobDay")) dobDay.value = localStorage.getItem("hcpv04DobDay");
    if (localStorage.getItem("hcpv04DobMonth")) dobMonth.value = localStorage.getItem("hcpv04DobMonth");
    if (localStorage.getItem("hcpv04DobYear")) dobYear.value = localStorage.getItem("hcpv04DobYear");
    if (localStorage.getItem("hcpv04NiNo")) niNo.value = localStorage.getItem("hcpv04NiNo");
    // Diagnosis v04
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    let hcpv04AwareOfDiagnosis = localStorage.getItem('hcpv04AwareOfDiagnosis');
    let hcpv04AwareOfPrognosis = localStorage.getItem('hcpv04AwareOfPrognosis');
    if (localStorage.getItem("hcpv04WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpv04WhatIsTheDiagnosis");
    if (localStorage.getItem("hcpv04DodDay")) dodDay.value = localStorage.getItem("hcpv04DodDay");
    if (localStorage.getItem("hcpv04DodMonth")) dodMonth.value = localStorage.getItem("hcpv04DodMonth");
    if (localStorage.getItem("hcpv04DodYear")) dodYear.value = localStorage.getItem("hcpv04DodYear");
    if (localStorage.getItem("hcpv04DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpv04DateofSpecialRulesDay");
    if (localStorage.getItem("hcpv04DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpv04DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpv04DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpv04DateofSpecialRulesYear");
    if (localStorage.getItem("hcpv04OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpv04OtherRelevantDiagnosis");
    // Clinical features v04
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpv04DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpv04DetailsOfClinicalFeatures");
    // Treatment v04
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv04Treatment")) treatment.value = localStorage.getItem("hcpv04Treatment");
    // Your details v04
    let yourRole = document.getElementById('yourRole');
    let yourFullName = document.getElementById('yourFullName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis v04
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === hcpv04AwareOfDiagnosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis v04
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === hcpv04AwareOfPrognosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
  }
  // DOB v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-02' || pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-02') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    if (localStorage.getItem("hcpv04DobDay")) dobDay.value = localStorage.getItem("hcpv04DobDay");
    if (localStorage.getItem("hcpv04DobMonth")) dobMonth.value = localStorage.getItem("hcpv04DobMonth");
    if (localStorage.getItem("hcpv04DobYear")) dobYear.value = localStorage.getItem("hcpv04DobYear");
  }
  // Postcode v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-03' || pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-03' || pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-04' || pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-04') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpv04PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpv04PatientPostcode");
  }
  // niNo v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-05' || pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-05') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpv04NiNo")) niNo.value = localStorage.getItem("hcpv04NiNo");
  }
  // Date meeting special rules v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-06' || pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-06') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    if (localStorage.getItem("hcpv04DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpv04DateofSpecialRulesDay");
    if (localStorage.getItem("hcpv04DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpv04DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpv04DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpv04DateofSpecialRulesYear");
  }
  // Diagnosis v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-07' || pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-07') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    if (localStorage.getItem("hcpv04WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpv04WhatIsTheDiagnosis");
  }
  // Date diagnosis v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-08' || pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-08') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    if (localStorage.getItem("hcpv04DodDay")) dodDay.value = localStorage.getItem("hcpv04DodDay");
    if (localStorage.getItem("hcpv04DodMonth")) dodMonth.value = localStorage.getItem("hcpv04DodMonth");
    if (localStorage.getItem("hcpv04DodYear")) dodYear.value = localStorage.getItem("hcpv04DodYear");
  }
  // Other diagnosis v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-09' || pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-09') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    if (localStorage.getItem("hcpv04OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpv04OtherRelevantDiagnosis");
  }
  // Aware of diagnosis v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-10' || pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-10') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let hcpv04AwareOfDiagnosis = localStorage.getItem('hcpv04AwareOfDiagnosis');
  }
  // Aware of prognosis v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-11' || pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-11') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let hcpv04AwareOfPrognosis = localStorage.getItem('hcpv04AwareOfPrognosis');
  }
  // Clinical Features v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-12' || pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-12') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpv04DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpv04DetailsOfClinicalFeatures");
  }
  // Treatment v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-13' || pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-13') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv04Treatment")) treatment.value = localStorage.getItem("hcpv04Treatment");
  }

  // v05

  // Patient details v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-01' || pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-01') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let PatientFullName = document.getElementById('PatientFullName');
    let patientaddressline1 = document.getElementById('patientaddressline1');
    let patientaddressline2 = document.getElementById('patientaddressline2');
    let patientaddresstown = document.getElementById('patientaddresstown');
    let patientPostcode = document.getElementById('patientPostcode');
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    let niNo = document.getElementById('niNo');
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    if (localStorage.getItem("hcpv05PatientFullName")) PatientFullName.value = localStorage.getItem("hcpv05PatientFullName");
    if (localStorage.getItem("hcpv05PatientAddressLine1")) patientaddressline1.value = localStorage.getItem("hcpv05PatientAddressLine1");
    if (localStorage.getItem("hcpv05PatientAddressLine2")) patientaddressline2.value = localStorage.getItem("hcpv05PatientAddressLine2");
    if (localStorage.getItem("hcpv05PatientAddressTown")) patientaddresstown.value = localStorage.getItem("hcpv05PatientAddressTown");
    if (localStorage.getItem("hcpv05PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpv05PatientPostcode");
    if (localStorage.getItem("hcpv05DobDay")) dobDay.value = localStorage.getItem("hcpv05DobDay");
    if (localStorage.getItem("hcpv05DobMonth")) dobMonth.value = localStorage.getItem("hcpv05DobMonth");
    if (localStorage.getItem("hcpv05DobYear")) dobYear.value = localStorage.getItem("hcpv05DobYear");
    if (localStorage.getItem("hcpv05NiNo")) niNo.value = localStorage.getItem("hcpv05NiNo");
    if (localStorage.getItem("hcpv05DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpv05DateofSpecialRulesDay");
    if (localStorage.getItem("hcpv05DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpv05DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpv05DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpv05DateofSpecialRulesYear");
    // Diagnosis v05
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    let hcpv05AwareOfDiagnosis = localStorage.getItem('hcpv05AwareOfDiagnosis');
    let hcpv05AwareOfPrognosis = localStorage.getItem('hcpv05AwareOfPrognosis');
    if (localStorage.getItem("hcpv05WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpv05WhatIsTheDiagnosis");
    if (localStorage.getItem("hcpv05DodDay")) dodDay.value = localStorage.getItem("hcpv05DodDay");
    if (localStorage.getItem("hcpv05DodMonth")) dodMonth.value = localStorage.getItem("hcpv05DodMonth");
    if (localStorage.getItem("hcpv05DodYear")) dodYear.value = localStorage.getItem("hcpv05DodYear");
    if (localStorage.getItem("hcpv05OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpv05OtherRelevantDiagnosis");
    // Clinical features v05
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpv05DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpv05DetailsOfClinicalFeatures");
    // Treatment v05
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv05Treatment")) treatment.value = localStorage.getItem("hcpv05Treatment");
    // Your details v05
    let yourRole = document.getElementById('yourRole');
    let yourFullName = document.getElementById('yourFullName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis v05
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === hcpv05AwareOfDiagnosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis v05
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === hcpv05AwareOfPrognosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
  }
  // DOB v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-02' || pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-02') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    if (localStorage.getItem("hcpv05DobDay")) dobDay.value = localStorage.getItem("hcpv05DobDay");
    if (localStorage.getItem("hcpv05DobMonth")) dobMonth.value = localStorage.getItem("hcpv05DobMonth");
    if (localStorage.getItem("hcpv05DobYear")) dobYear.value = localStorage.getItem("hcpv05DobYear");
  }
  // Postcode v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-03' || pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-03' || pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-04' || pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-04') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpv05PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpv05PatientPostcode");
  }
  // niNo v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-05' || pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-05') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpv05NiNo")) niNo.value = localStorage.getItem("hcpv05NiNo");
  }
  // Date meeting special rules v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-06' || pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-06') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    if (localStorage.getItem("hcpv05DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpv05DateofSpecialRulesDay");
    if (localStorage.getItem("hcpv05DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpv05DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpv05DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpv05DateofSpecialRulesYear");
  }
  // Diagnosis v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-07' || pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-07') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    if (localStorage.getItem("hcpv05WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpv05WhatIsTheDiagnosis");
  }
  // Date diagnosis v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-08' || pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-08') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    if (localStorage.getItem("hcpv05DodDay")) dodDay.value = localStorage.getItem("hcpv05DodDay");
    if (localStorage.getItem("hcpv05DodMonth")) dodMonth.value = localStorage.getItem("hcpv05DodMonth");
    if (localStorage.getItem("hcpv05DodYear")) dodYear.value = localStorage.getItem("hcpv05DodYear");
  }
  // Other diagnosis v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-09' || pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-09') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    if (localStorage.getItem("hcpv05OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpv05OtherRelevantDiagnosis");
  }
  // Aware of diagnosis v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-10' || pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-10') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let hcpv05AwareOfDiagnosis = localStorage.getItem('hcpv05AwareOfDiagnosis');
  }
  // Aware of prognosis v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-11' || pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-11') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let hcpv05AwareOfPrognosis = localStorage.getItem('hcpv05AwareOfPrognosis');
  }
  // Clinical Features v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-12' || pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-12') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpv05DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpv05DetailsOfClinicalFeatures");
  }
  // Treatment v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-13' || pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-13') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv05Treatment")) treatment.value = localStorage.getItem("hcpv05Treatment");
  }

  // V06

  // Patient details v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-01' || pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-01') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let PatientFullName = document.getElementById('PatientFullName');
    let patientaddressline1 = document.getElementById('patientaddressline1');
    let patientaddressline2 = document.getElementById('patientaddressline2');
    let patientaddresstown = document.getElementById('patientaddresstown');
    let patientPostcode = document.getElementById('patientPostcode');
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    let niNo = document.getElementById('niNo');
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    if (localStorage.getItem("hcpv06PatientFullName")) PatientFullName.value = localStorage.getItem("hcpv06PatientFullName");
    if (localStorage.getItem("hcpv06PatientAddressLine1")) patientaddressline1.value = localStorage.getItem("hcpv06PatientAddressLine1");
    if (localStorage.getItem("hcpv06PatientAddressLine2")) patientaddressline2.value = localStorage.getItem("hcpv06PatientAddressLine2");
    if (localStorage.getItem("hcpv06PatientAddressTown")) patientaddresstown.value = localStorage.getItem("hcpv06PatientAddressTown");
    if (localStorage.getItem("hcpv06PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpv06PatientPostcode");
    if (localStorage.getItem("hcpv06DobDay")) dobDay.value = localStorage.getItem("hcpv06DobDay");
    if (localStorage.getItem("hcpv06DobMonth")) dobMonth.value = localStorage.getItem("hcpv06DobMonth");
    if (localStorage.getItem("hcpv06DobYear")) dobYear.value = localStorage.getItem("hcpv06DobYear");
    if (localStorage.getItem("hcpv06NiNo")) niNo.value = localStorage.getItem("hcpv06NiNo");
    if (localStorage.getItem("hcpv06DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpv06DateofSpecialRulesDay");
    if (localStorage.getItem("hcpv06DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpv06DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpv06DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpv06DateofSpecialRulesYear");
    // Diagnosis v06
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    let hcpv06AwareOfDiagnosis = localStorage.getItem('hcpv06AwareOfDiagnosis');
    let hcpv06AwareOfPrognosis = localStorage.getItem('hcpv06AwareOfPrognosis');
    if (localStorage.getItem("hcpv06WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpv06WhatIsTheDiagnosis");
    if (localStorage.getItem("hcpv06DodDay")) dodDay.value = localStorage.getItem("hcpv06DodDay");
    if (localStorage.getItem("hcpv06DodMonth")) dodMonth.value = localStorage.getItem("hcpv06DodMonth");
    if (localStorage.getItem("hcpv06DodYear")) dodYear.value = localStorage.getItem("hcpv06DodYear");
    if (localStorage.getItem("hcpv06OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpv06OtherRelevantDiagnosis");
    // Clinical features v06
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpv06DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpv06DetailsOfClinicalFeatures");
    // Treatment v06
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv06Treatment")) treatment.value = localStorage.getItem("hcpv06Treatment");
    // Your details v06
    let yourRole = document.getElementById('yourRole');
    let yourFullName = document.getElementById('yourFullName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis v06
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === hcpv06AwareOfDiagnosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis v06
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === hcpv06AwareOfPrognosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
  }
  // DOB v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-02' || pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-02') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    if (localStorage.getItem("hcpv06DobDay")) dobDay.value = localStorage.getItem("hcpv06DobDay");
    if (localStorage.getItem("hcpv06DobMonth")) dobMonth.value = localStorage.getItem("hcpv06DobMonth");
    if (localStorage.getItem("hcpv06DobYear")) dobYear.value = localStorage.getItem("hcpv06DobYear");
  }
  // Postcode v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-03' || pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-03' || pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-04' || pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-04') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpv06PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpv06PatientPostcode");
  }
  // niNo v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-05' || pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-05') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpv06NiNo")) niNo.value = localStorage.getItem("hcpv06NiNo");
  }
  // Date meeting special rules v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-06' || pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-06') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    if (localStorage.getItem("hcpv06DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpv06DateofSpecialRulesDay");
    if (localStorage.getItem("hcpv06DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpv06DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpv06DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpv06DateofSpecialRulesYear");
  }
  // Diagnosis v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-07' || pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-07') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    if (localStorage.getItem("hcpv06WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpv06WhatIsTheDiagnosis");
  }
  // Date diagnosis v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-08' || pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-08') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    if (localStorage.getItem("hcpv06DodDay")) dodDay.value = localStorage.getItem("hcpv06DodDay");
    if (localStorage.getItem("hcpv06DodMonth")) dodMonth.value = localStorage.getItem("hcpv06DodMonth");
    if (localStorage.getItem("hcpv06DodYear")) dodYear.value = localStorage.getItem("hcpv06DodYear");
  }
  // Other diagnosis v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-09' || pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-09') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    if (localStorage.getItem("hcpv06OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpv06OtherRelevantDiagnosis");
  }
  // Aware of diagnosis v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-10' || pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-10') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let hcpv06AwareOfDiagnosis = localStorage.getItem('hcpv06AwareOfDiagnosis');
  }

  // Aware of prognosis v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-11' || pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-11') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let hcpv06AwareOfPrognosis = localStorage.getItem('hcpv06AwareOfPrognosis');
  }
  // Clinical Features v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-12' || pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-12') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpv06DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpv06DetailsOfClinicalFeatures");
  }
  // Treatment v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-13' || pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-13') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv06Treatment")) treatment.value = localStorage.getItem("hcpv06Treatment");
  }

  // v07

  // Patient ID and Address v07
  if (pageUrlPath === '/hcp-e2e-journey-v07/sr1-form-patient-id-address' || pageUrlPath === '/hcp-e2e-journey-v07/sr1-form-patient-id-address-c' || pageUrlPath === '/hcp-e2e-journey-v07/sr1-form-patient-id-address-lookup' || pageUrlPath === '/hcp-e2e-journey-v07/sr1-form-patient-id-address-lookup-c') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let PatientFullName = document.getElementById('PatientFullName');
    let patientaddressline1 = document.getElementById('patientaddressline1');
    let patientaddressline2 = document.getElementById('patientaddressline2');
    let patientaddresstown = document.getElementById('patientaddresstown');
    let patientPostcode = document.getElementById('patientPostcode');
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpv07PatientFullName")) PatientFullName.value = localStorage.getItem("hcpv07PatientFullName");
    if (localStorage.getItem("hcpv07PatientAddressLine1")) patientaddressline1.value = localStorage.getItem("hcpv07PatientAddressLine1");
    if (localStorage.getItem("hcpv07PatientAddressLine2")) patientaddressline2.value = localStorage.getItem("hcpv07PatientAddressLine2");
    if (localStorage.getItem("hcpv07PatientAddressTown")) patientaddresstown.value = localStorage.getItem("hcpv07PatientAddressTown");
    if (localStorage.getItem("hcpv07PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpv07PatientPostcode");
    if (localStorage.getItem("hcpv07DobDay")) dobDay.value = localStorage.getItem("hcpv07DobDay");
    if (localStorage.getItem("hcpv07DobMonth")) dobMonth.value = localStorage.getItem("hcpv07DobMonth");
    if (localStorage.getItem("hcpv07DobYear")) dobYear.value = localStorage.getItem("hcpv07DobYear");
    if (localStorage.getItem("hcpv07NiNo")) niNo.value = localStorage.getItem("hcpv07NiNo");
  }
  // Diagnosis v07
  if (pageUrlPath === '/hcp-e2e-journey-v07/sr1-form-diagnosis' || pageUrlPath === '/hcp-e2e-journey-v07/sr1-form-diagnosis-c') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    let hcpv07AwareOfDiagnosis = localStorage.getItem('hcpv07AwareOfDiagnosis');
    let hcpv07AwareOfPrognosis = localStorage.getItem('hcpv07AwareOfPrognosis');
    if (localStorage.getItem("hcpv07DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpv07DateofSpecialRulesDay");
    if (localStorage.getItem("hcpv07DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpv07DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpv07DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpv07DateofSpecialRulesYear");
    if (localStorage.getItem("hcpv07WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpv07WhatIsTheDiagnosis");
    if (localStorage.getItem("hcpv07DodDay")) dodDay.value = localStorage.getItem("hcpv07DodDay");
    if (localStorage.getItem("hcpv07DodMonth")) dodMonth.value = localStorage.getItem("hcpv07DodMonth");
    if (localStorage.getItem("hcpv07DodYear")) dodYear.value = localStorage.getItem("hcpv07DodYear");
    if (localStorage.getItem("hcpv07OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpv07OtherRelevantDiagnosis");
    let awareOfDiagnosis = localStorage.getItem('hcpv07AwareOfDiagnosis');
    if (awareOfDiagnosis === 'true') {
      document.getElementById('awareOfDiagnosisYes').checked = true;
    }
    if (awareOfDiagnosis === 'false') {
      document.getElementById('awareOfDiagnosisNo').checked = true;
    }
    let awareOfPrognosis = localStorage.getItem('hcpv07AwareOfPrognosis');
    if (awareOfPrognosis === 'true') {
      document.getElementById('awareOfPrognosisYes').checked = true;
    }
    if (awareOfPrognosis === 'false') {
      document.getElementById('awareOfPrognosisNo').checked = true;
    }

  }
  // Clinical Features v07
  if (pageUrlPath === '/hcp-e2e-journey-v07/sr1-form-clinical-features' || pageUrlPath === '/hcp-e2e-journey-v07/sr1-form-clinical-features-c') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpv07DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpv07DetailsOfClinicalFeatures");
  }
  // Treatment v07
  if (pageUrlPath === '/hcp-e2e-journey-v07/sr1-form-treatment' || pageUrlPath === '/hcp-e2e-journey-v07/sr1-form-treatment-c') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv07Treatment")) treatment.value = localStorage.getItem("hcpv07Treatment");
  }

  // v08

  // Patient ID and Address v08
  if (pageUrlPath === '/hcp-e2e-journey-v08/sr1-form-patient-id-address' || pageUrlPath === '/hcp-e2e-journey-v08/sr1-form-patient-id-address-c' || pageUrlPath === '/hcp-e2e-journey-v08/sr1-form-patient-id-address-lookup' || pageUrlPath === '/hcp-e2e-journey-v08/sr1-form-patient-id-address-lookup-c') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let PatientFullName = document.getElementById('PatientFullName');
    let patientaddressline1 = document.getElementById('patientaddressline1');
    let patientaddressline2 = document.getElementById('patientaddressline2');
    let patientaddresstown = document.getElementById('patientaddresstown');
    let patientPostcode = document.getElementById('patientPostcode');
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    let niNo = document.getElementById('niNo');

    if (localStorage.getItem("hcpv08PatientFullName")) PatientFullName.value = localStorage.getItem("hcpv08PatientFullName");
    if (localStorage.getItem("hcpv08PatientAddressLine1")) patientaddressline1.value = localStorage.getItem("hcpv08PatientAddressLine1");
    if (localStorage.getItem("hcpv08PatientAddressLine2")) patientaddressline2.value = localStorage.getItem("hcpv08PatientAddressLine2");
    if (localStorage.getItem("hcpv08PatientAddressTown")) patientaddresstown.value = localStorage.getItem("hcpv08PatientAddressTown");
    if (localStorage.getItem("hcpv08PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpv08PatientPostcode");
    if (localStorage.getItem("hcpv08DobDay")) dobDay.value = localStorage.getItem("hcpv08DobDay");
    if (localStorage.getItem("hcpv08DobMonth")) dobMonth.value = localStorage.getItem("hcpv08DobMonth");
    if (localStorage.getItem("hcpv08DobYear")) dobYear.value = localStorage.getItem("hcpv08DobYear");
    if (localStorage.getItem("hcpv08NiNo")) niNo.value = localStorage.getItem("hcpv08NiNo");
    // Diagnosis v08
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    let hcpv08AwareOfDiagnosis = localStorage.getItem('hcpv08AwareOfDiagnosis');
    let hcpv08AwareOfPrognosis = localStorage.getItem('hcpv08AwareOfPrognosis');
    if (localStorage.getItem("hcpv08WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpv08WhatIsTheDiagnosis");
    if (localStorage.getItem("hcpv08DodDay")) dodDay.value = localStorage.getItem("hcpv08DodDay");
    if (localStorage.getItem("hcpv08DodMonth")) dodMonth.value = localStorage.getItem("hcpv08DodMonth");
    if (localStorage.getItem("hcpv08DodYear")) dodYear.value = localStorage.getItem("hcpv08DodYear");
    if (localStorage.getItem("hcpv08DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpv08DateofSpecialRulesDay");
    if (localStorage.getItem("hcpv08DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpv08DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpv08DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpv08DateofSpecialRulesYear");
    if (localStorage.getItem("hcpv08OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpv08OtherRelevantDiagnosis");
    // Clinical features v08
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpv08DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpv08DetailsOfClinicalFeatures");
    // Treatment v08
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv08Treatment")) treatment.value = localStorage.getItem("hcpv08Treatment");
    // Your details v08
    let yourRole = document.getElementById('yourRole');
    let yourFullName = document.getElementById('yourFullName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis v08
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === hcpv08AwareOfDiagnosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis v08
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === hcpv08AwareOfPrognosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
  }
  // Diagnosis v08
  if (pageUrlPath === '/hcp-e2e-journey-v08/sr1-form-diagnosis' || pageUrlPath === '/hcp-e2e-journey-v08/sr1-form-diagnosis-c') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    let hcpv08AwareOfDiagnosis = localStorage.getItem('hcpv08AwareOfDiagnosis');
    let hcpv08AwareOfPrognosis = localStorage.getItem('hcpv08AwareOfPrognosis');
    if (localStorage.getItem("hcpv08DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpv08DateofSpecialRulesDay");
    if (localStorage.getItem("hcpv08DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpv08DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpv08DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpv08DateofSpecialRulesYear");
    if (localStorage.getItem("hcpv08WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpv08WhatIsTheDiagnosis");
    if (localStorage.getItem("hcpv08DodDay")) dodDay.value = localStorage.getItem("hcpv08DodDay");
    if (localStorage.getItem("hcpv08DodMonth")) dodMonth.value = localStorage.getItem("hcpv08DodMonth");
    if (localStorage.getItem("hcpv08DodYear")) dodYear.value = localStorage.getItem("hcpv08DodYear");
    if (localStorage.getItem("hcpv08OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpv08OtherRelevantDiagnosis");
    if (localStorage.getItem("hcpv08AwareOfDiagnosis")) hcpv08AwareOfDiagnosis.value = localStorage.getItem("hcpv08AwareOfDiagnosis");
    if (localStorage.getItem("hcpv08AwareOfPrognosis")) hcpv08AwareOfPrognosis.value = localStorage.getItem("hcpv08AwareOfPrognosiss");
  }
  // Clinical Features v08
  if (pageUrlPath === '/hcp-e2e-journey-v08/sr1-form-clinical-features' || pageUrlPath === '/hcp-e2e-journey-v08/sr1-form-clinical-features-c') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpv08DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpv08DetailsOfClinicalFeatures");
  }
  // Treatment v08
  if (pageUrlPath === '/hcp-e2e-journey-v08/sr1-form-treatment' || pageUrlPath === '/hcp-e2e-journey-v08/sr1-form-treatment-c') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv08Treatment")) treatment.value = localStorage.getItem("hcpv08Treatment");
  }

  // v09

  // Patient details v09
  if (pageUrlPath === '/hcp-e2e-journey-v09/sr1-form-patient-id-address' || pageUrlPath === '/hcp-e2e-journey-v09/sr1-form-patient-id-address-c' || pageUrlPath === '/hcp-e2e-journey-v09/sr1-form-patient-id-address-lookup' || pageUrlPath === '/hcp-e2e-journey-v09/sr1-form-patient-id-address-lookup-c') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let PatientFullName = document.getElementById('PatientFullName');
    let patientaddressline1 = document.getElementById('patientaddressline1');
    let patientaddressline2 = document.getElementById('patientaddressline2');
    let patientaddresstown = document.getElementById('patientaddresstown');
    let patientPostcode = document.getElementById('patientPostcode');
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpv09PatientFullName")) PatientFullName.value = localStorage.getItem("hcpv09PatientFullName");
    if (localStorage.getItem("hcpv09PatientAddressLine1")) patientaddressline1.value = localStorage.getItem("hcpv09PatientAddressLine1");
    if (localStorage.getItem("hcpv09PatientAddressLine2")) patientaddressline2.value = localStorage.getItem("hcpv09PatientAddressLine2");
    if (localStorage.getItem("hcpv09PatientAddressTown")) patientaddresstown.value = localStorage.getItem("hcpv09PatientAddressTown");
    if (localStorage.getItem("hcpv09PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpv09PatientPostcode");
    if (localStorage.getItem("hcpv09DobDay")) dobDay.value = localStorage.getItem("hcpv09DobDay");
    if (localStorage.getItem("hcpv09DobMonth")) dobMonth.value = localStorage.getItem("hcpv09DobMonth");
    if (localStorage.getItem("hcpv09DobYear")) dobYear.value = localStorage.getItem("hcpv09DobYear");
    if (localStorage.getItem("hcpv09NiNo")) niNo.value = localStorage.getItem("hcpv09NiNo");
    // Diagnosis v09
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    let hcpv09AwareOfDiagnosis = localStorage.getItem('hcpv09AwareOfDiagnosis');
    let hcpv09AwareOfPrognosis = localStorage.getItem('hcpv09AwareOfPrognosis');
    if (localStorage.getItem("hcpv09WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpv09WhatIsTheDiagnosis");
    if (localStorage.getItem("hcpv09DodDay")) dodDay.value = localStorage.getItem("hcpv09DodDay");
    if (localStorage.getItem("hcpv09DodMonth")) dodMonth.value = localStorage.getItem("hcpv09DodMonth");
    if (localStorage.getItem("hcpv09DodYear")) dodYear.value = localStorage.getItem("hcpv09DodYear");
    if (localStorage.getItem("hcpv09DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpv09DateofSpecialRulesDay");
    if (localStorage.getItem("hcpv09DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpv09DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpv09DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpv09DateofSpecialRulesYear");
    if (localStorage.getItem("hcpv09OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpv09OtherRelevantDiagnosis");
    // Clinical features v09
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpv09DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpv09DetailsOfClinicalFeatures");
    // Treatment v09
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv09Treatment")) treatment.value = localStorage.getItem("hcpv09Treatment");
    // Your details v09
    let yourRole = document.getElementById('yourRole');
    let yourFullName = document.getElementById('yourFullName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis v09
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === hcpv09AwareOfDiagnosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis v09
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === hcpv09AwareOfPrognosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
  }
  // Diagnosis v09
  if (pageUrlPath === '/hcp-e2e-journey-v09/sr1-form-diagnosis' || pageUrlPath === '/hcp-e2e-journey-v09/sr1-form-diagnosis-c') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    let hcpv09AwareOfDiagnosis = localStorage.getItem('hcpv09AwareOfDiagnosis');
    let hcpv09AwareOfPrognosis = localStorage.getItem('hcpv09AwareOfPrognosis');
    if (localStorage.getItem("hcpv09DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpv09DateofSpecialRulesDay");
    if (localStorage.getItem("hcpv09DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpv09DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpv09DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpv09DateofSpecialRulesYear");
    if (localStorage.getItem("hcpv09WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpv09WhatIsTheDiagnosis");
    if (localStorage.getItem("hcpv09DodDay")) dodDay.value = localStorage.getItem("hcpv09DodDay");
    if (localStorage.getItem("hcpv09DodMonth")) dodMonth.value = localStorage.getItem("hcpv09DodMonth");
    if (localStorage.getItem("hcpv09DodYear")) dodYear.value = localStorage.getItem("hcpv09DodYear");
    if (localStorage.getItem("hcpv09OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpv09OtherRelevantDiagnosis");
    if (localStorage.getItem("hcpv09AwareOfDiagnosis")) hcpv09AwareOfDiagnosis.value = localStorage.getItem("hcpv09AwareOfDiagnosis");
    if (localStorage.getItem("hcpv09AwareOfPrognosis")) hcpv09AwareOfPrognosis.value = localStorage.getItem("hcpv09AwareOfPrognosiss");
  }
  // Clinical Features v09
  if (pageUrlPath === '/hcp-e2e-journey-v09/sr1-form-clinical-features' || pageUrlPath === '/hcp-e2e-journey-v09/sr1-form-clinical-features-c') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpv09DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpv09DetailsOfClinicalFeatures");
  }
  // Treatment v09
  if (pageUrlPath === '/hcp-e2e-journey-v09/sr1-form-treatment' || pageUrlPath === '/hcp-e2e-journey-v09/sr1-form-treatment-c') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv09Treatment")) treatment.value = localStorage.getItem("hcpv09Treatment");
  }

  // mvp01

  // Patient details mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-01' || pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-c-01') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let PatientFirstName = document.getElementById('PatientFirstName');
    let PatientLastName = document.getElementById('PatientLastName');
    let patientaddressline1 = document.getElementById('patientaddressline1');
    let patientaddressline2 = document.getElementById('patientaddressline2');
    let patientaddresstown = document.getElementById('patientaddresstown');
    let patientaddresscounty = document.getElementById('patientaddresscounty');
    let patientPostcode = document.getElementById('patientPostcode');
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpmvp01PatientFirstName")) PatientFirstName.value = localStorage.getItem("hcpmvp01PatientFirstName");
    if (localStorage.getItem("hcpmvp01PatientLastName")) PatientLastName.value = localStorage.getItem("hcpmvp01PatientLastName");
    if (localStorage.getItem("hcpmvp01PatientAddressLine1")) patientaddressline1.value = localStorage.getItem("hcpmvp01PatientAddressLine1");
    if (localStorage.getItem("hcpmvp01PatientAddressLine2")) patientaddressline2.value = localStorage.getItem("hcpmvp01PatientAddressLine2");
    if (localStorage.getItem("hcpmvp01PatientAddressTown")) patientaddresstown.value = localStorage.getItem("hcpmvp01PatientAddressTown");
    if (localStorage.getItem("hcpmvp01PatientAddressCounty")) patientaddresscounty.value = localStorage.getItem("hcpmvp01PatientAddressCounty");
    if (localStorage.getItem("hcpmvp01PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpmvp01PatientPostcode");
    if (localStorage.getItem("hcpmvp01DobDay")) dobDay.value = localStorage.getItem("hcpmvp01DobDay");
    if (localStorage.getItem("hcpmvp01DobMonth")) dobMonth.value = localStorage.getItem("hcpmvp01DobMonth");
    if (localStorage.getItem("hcpmvp01DobYear")) dobYear.value = localStorage.getItem("hcpmvp01DobYear");
    if (localStorage.getItem("hcpmvp01NiNo")) niNo.value = localStorage.getItem("hcpmvp01NiNo");
    // Diagnosis mvp01
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    let hcpmvp01AwareOfDiagnosis = localStorage.getItem('hcpmvp01AwareOfDiagnosis');
    let hcpmvp01AwareOfPrognosis = localStorage.getItem('hcpmvp01AwareOfPrognosis');
    if (localStorage.getItem("hcpmvp01WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpmvp01WhatIsTheDiagnosis");
    if (localStorage.getItem("hcpmvp01DodDay")) dodDay.value = localStorage.getItem("hcpmvp01DodDay");
    if (localStorage.getItem("hcpmvp01DodMonth")) dodMonth.value = localStorage.getItem("hcpmvp01DodMonth");
    if (localStorage.getItem("hcpmvp01DodYear")) dodYear.value = localStorage.getItem("hcpmvp01DodYear");
    if (localStorage.getItem("hcpmvp01DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpmvp01DateofSpecialRulesDay");
    if (localStorage.getItem("hcpmvp01DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpmvp01DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpmvp01DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpmvp01DateofSpecialRulesYear");
    if (localStorage.getItem("hcpmvp01OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpmvp01OtherRelevantDiagnosis");
    // Clinical features mvp01
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpmvp01DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpmvp01DetailsOfClinicalFeatures");
    // Treatment mvp01
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpmvp01Treatment")) treatment.value = localStorage.getItem("hcpmvp01Treatment");
    // Your details mvp01
    let yourRole = document.getElementById('yourRole');
    let yourFirstName = document.getElementById('yourFullName');
    let yourMiddleName = document.getElementById('yourMiddleName');
    let yourLastName = document.getElementById('yourLastName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis mvp01
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === hcpmvp01AwareOfDiagnosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis mvp01
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === hcpmvp01AwareOfPrognosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
  }
  // DOB mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-02' || pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-c-02') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    if (localStorage.getItem("hcpmvp01DobDay")) dobDay.value = localStorage.getItem("hcpmvp01DobDay");
    if (localStorage.getItem("hcpmvp01DobMonth")) dobMonth.value = localStorage.getItem("hcpmvp01DobMonth");
    if (localStorage.getItem("hcpmvp01DobYear")) dobYear.value = localStorage.getItem("hcpmvp01DobYear");
  }
  // Postcode mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-03' || pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-c-03' || pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-04' || pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-c-04') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpmvp01PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpmvp01PatientPostcode");
  }
  // Address mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-04-a') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let patientaddressline1 = document.getElementById('patientaddressline1');
    let patientaddressline2 = document.getElementById('patientaddressline2');
    let patientaddresstown = document.getElementById('patientaddresstown');
    let patientaddresscounty = document.getElementById('patientaddresscounty');
    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpmvp01PatientAddressLine1")) patientaddressline1.value = localStorage.getItem("hcpmvp01PatientAddressLine1");
    if (localStorage.getItem("hcpmvp01PatientAddressLine2")) patientaddressline2.value = localStorage.getItem("hcpmvp01PatientAddressLine2");
    if (localStorage.getItem("hcpmvp01PatientAddressTown")) patientaddresstown.value = localStorage.getItem("hcpmvp01PatientAddressTown");
    if (localStorage.getItem("hcpmvp01PatientAddressCounty")) patientaddresscounty.value = localStorage.getItem("hcpmvp01PatientAddressCounty");
    if (localStorage.getItem("hcpmvp01PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpmvp01PatientPostcode");
  }
  // niNo mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-05' || pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-c-05') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpmvp01NiNo")) niNo.value = localStorage.getItem("hcpmvp01NiNo");
  }
  // Date meeting special rules mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-06' || pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-c-06') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    if (localStorage.getItem("hcpmvp01DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpmvp01DateofSpecialRulesDay");
    if (localStorage.getItem("hcpmvp01DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpmvp01DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpmvp01DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpmvp01DateofSpecialRulesYear");
  }
  // Diagnosis mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-07' || pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-c-07') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    if (localStorage.getItem("hcpmvp01WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpmvp01WhatIsTheDiagnosis");
  }
  // Date diagnosis mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-08' || pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-c-08') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    if (localStorage.getItem("hcpmvp01DodDay")) dodDay.value = localStorage.getItem("hcpmvp01DodDay");
    if (localStorage.getItem("hcpmvp01DodMonth")) dodMonth.value = localStorage.getItem("hcpmvp01DodMonth");
    if (localStorage.getItem("hcpmvp01DodYear")) dodYear.value = localStorage.getItem("hcpmvp01DodYear");
  }
  // Other diagnosis mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-09' || pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-c-09') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    if (localStorage.getItem("hcpmvp01OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpmvp01OtherRelevantDiagnosis");
  }
  // Aware of diagnosis mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-10' || pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-c-10') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let hcpmvp01AwareOfDiagnosis = localStorage.getItem('hcpmvp01AwareOfDiagnosis');
  }
  // Aware of prognosis mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-11' || pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-c-11') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let hcpmvp01AwareOfPrognosis = localStorage.getItem('hcpmvp01AwareOfPrognosis');
  }
  // Clinical Features mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-12' || pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-c-12') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpmvp01DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpmvp01DetailsOfClinicalFeatures");
  }
  // Treatment mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-13' || pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-c-13') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpmvp01Treatment")) treatment.value = localStorage.getItem("hcpmvp01Treatment");
  }

  // MVP02

  // Patient details mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-01' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-c-01') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let PatientFirstName = document.getElementById('PatientFirstName');
    let PatientLastName = document.getElementById('PatientLastName');
    let patientaddressline1 = document.getElementById('patientaddressline1');
    let patientaddressline2 = document.getElementById('patientaddressline2');
    let patientaddresstown = document.getElementById('patientaddresstown');
    let patientaddresscounty = document.getElementById('patientaddresscounty');
    let patientPostcode = document.getElementById('patientPostcode');
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    let niNo = document.getElementById('niNo');

    if (localStorage.getItem("hcpmvp02PatientFirstName")) PatientFirstName.value = localStorage.getItem("hcpmvp02PatientFirstName");
    if (localStorage.getItem("hcpmvp02PatientLastName")) PatientLastName.value = localStorage.getItem("hcpmvp02PatientLastName");
    if (localStorage.getItem("hcpmvp02PatientAddressLine1")) patientaddressline1.value = localStorage.getItem("hcpmvp02PatientAddressLine1");
    if (localStorage.getItem("hcpmvp02PatientAddressLine2")) patientaddressline2.value = localStorage.getItem("hcpmvp02PatientAddressLine2");
    if (localStorage.getItem("hcpmvp02PatientAddressTown")) patientaddresstown.value = localStorage.getItem("hcpmvp02PatientAddressTown");
    if (localStorage.getItem("hcpmvp02PatientAddressCounty")) patientaddresscounty.value = localStorage.getItem("hcpmvp02PatientAddressCounty");
    if (localStorage.getItem("hcpmvp02PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpmvp02PatientPostcode");
    if (localStorage.getItem("hcpmvp02DobDay")) dobDay.value = localStorage.getItem("hcpmvp02DobDay");
    if (localStorage.getItem("hcpmvp02DobMonth")) dobMonth.value = localStorage.getItem("hcpmvp02DobMonth");
    if (localStorage.getItem("hcpmvp02DobYear")) dobYear.value = localStorage.getItem("hcpmvp02DobYear");
    if (localStorage.getItem("hcpmvp02NiNo")) niNo.value = localStorage.getItem("hcpmvp02NiNo");
    // Diagnosis mvp02
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    let hcpmvp02AwareOfDiagnosis = localStorage.getItem('hcpmvp02AwareOfDiagnosis');
    let hcpmvp02AwareOfPrognosis = localStorage.getItem('hcpmvp02AwareOfPrognosis');
    if (localStorage.getItem("hcpmvp02WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpmvp02WhatIsTheDiagnosis");
    if (localStorage.getItem("hcpmvp02DodDay")) dodDay.value = localStorage.getItem("hcpmvp02DodDay");
    if (localStorage.getItem("hcpmvp02DodMonth")) dodMonth.value = localStorage.getItem("hcpmvp02DodMonth");
    if (localStorage.getItem("hcpmvp02DodYear")) dodYear.value = localStorage.getItem("hcpmvp02DodYear");
    if (localStorage.getItem("hcpmvp02DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpmvp02DateofSpecialRulesDay");
    if (localStorage.getItem("hcpmvp02DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpmvp02DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpmvp02DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpmvp02DateofSpecialRulesYear");
    if (localStorage.getItem("hcpmvp02OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpmvp02OtherRelevantDiagnosis");
    // Clinical features mvp02
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpmvp02DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpmvp02DetailsOfClinicalFeatures");
    // Treatment mvp02
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpmvp02Treatment")) treatment.value = localStorage.getItem("hcpmvp02Treatment");
    // Your details mvp02
    let yourRole = document.getElementById('yourRole');
    let yourFirstName = document.getElementById('yourFullName');
    let yourMiddleName = document.getElementById('yourMiddleName');
    let yourLastName = document.getElementById('yourLastName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis mvp02
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === hcpmvp02AwareOfDiagnosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis mvp02
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === hcpmvp02AwareOfPrognosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
  }
  // DOB mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-02' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-c-02') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    if (localStorage.getItem("hcpmvp02DobDay")) dobDay.value = localStorage.getItem("hcpmvp02DobDay");
    if (localStorage.getItem("hcpmvp02DobMonth")) dobMonth.value = localStorage.getItem("hcpmvp02DobMonth");
    if (localStorage.getItem("hcpmvp02DobYear")) dobYear.value = localStorage.getItem("hcpmvp02DobYear");
  }
  // Postcode mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-03' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-c-03' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-04' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-c-04') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpmvp02PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpmvp02PatientPostcode");
  }
  // Address mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-04-a' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-04-a-error') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let patientaddressline1 = document.getElementById('patientaddressline1');
    let patientaddressline2 = document.getElementById('patientaddressline2');
    let patientaddresstown = document.getElementById('patientaddresstown');
    let patientaddresscounty = document.getElementById('patientaddresscounty');
    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpmvp02PatientAddressLine1")) patientaddressline1.value = localStorage.getItem("hcpmvp02PatientAddressLine1");
    if (localStorage.getItem("hcpmvp02PatientAddressLine2")) patientaddressline2.value = localStorage.getItem("hcpmvp02PatientAddressLine2");
    if (localStorage.getItem("hcpmvp02PatientAddressTown")) patientaddresstown.value = localStorage.getItem("hcpmvp02PatientAddressTown");
    if (localStorage.getItem("hcpmvp02PatientAddressCounty")) patientaddresscounty.value = localStorage.getItem("hcpmvp02PatientAddressCounty");
    if (localStorage.getItem("hcpmvp02PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpmvp02PatientPostcode");
  }
  // niNo mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-05' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-c-05' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-05-1of2-radio' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-05-2of2') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpmvp02NiNo")) niNo.value = localStorage.getItem("hcpmvp02NiNo");
  }
  // Date meeting special rules mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-06' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-c-06') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    if (localStorage.getItem("hcpmvp02DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpmvp02DateofSpecialRulesDay");
    if (localStorage.getItem("hcpmvp02DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpmvp02DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpmvp02DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpmvp02DateofSpecialRulesYear");
  }
  // Diagnosis mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-07' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-c-07') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    if (localStorage.getItem("hcpmvp02WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpmvp02WhatIsTheDiagnosis");
  }
  // Date diagnosis mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-08' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-c-08') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    if (localStorage.getItem("hcpmvp02DodDay")) dodDay.value = localStorage.getItem("hcpmvp02DodDay");
    if (localStorage.getItem("hcpmvp02DodMonth")) dodMonth.value = localStorage.getItem("hcpmvp02DodMonth");
    if (localStorage.getItem("hcpmvp02DodYear")) dodYear.value = localStorage.getItem("hcpmvp02DodYear");
  }
  // Other diagnosis mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-09' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-c-09') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    if (localStorage.getItem("hcpmvp02OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpmvp02OtherRelevantDiagnosis");
  }
  // Aware of diagnosis mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-10' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-c-10') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let hcpmvp02AwareOfDiagnosis = localStorage.getItem('hcpmvp02AwareOfDiagnosis');
  }
  // Aware of prognosis mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-11' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-c-11') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let hcpmvp02AwareOfPrognosis = localStorage.getItem('hcpmvp02AwareOfPrognosis');
  }
  // Clinical Features mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-12' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-c-12') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpmvp02DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpmvp02DetailsOfClinicalFeatures");
  }
  // Treatment mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-13' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-c-13') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpmvp02Treatment")) treatment.value = localStorage.getItem("hcpmvp02Treatment");
  }

  // mvp03

  // Patient details mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-01' || pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-c-01') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let PatientFirstName = document.getElementById('PatientFirstName');
    let PatientLastName = document.getElementById('PatientLastName');
    let PatientNameDefined = document.getElementById('PatientNameDefined');
    let patientaddressline1 = document.getElementById('patientaddressline1');
    let patientaddressline2 = document.getElementById('patientaddressline2');
    let patientaddresstown = document.getElementById('patientaddresstown');
    let patientaddresscounty = document.getElementById('patientaddresscounty');
    let patientPostcode = document.getElementById('patientPostcode');
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpmvp03PatientFirstName")) PatientFirstName.value = localStorage.getItem("hcpmvp03PatientFirstName");
    if (localStorage.getItem("hcpmvp03PatientLastName")) PatientLastName.value = localStorage.getItem("hcpmvp03PatientLastName");
    // Diagnosis mvp03
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    let otherRelevantDiagnosisinput = document.getElementById('otherRelevantDiagnosisinput');
    let hcpmvp03AwareOfDiagnosis = localStorage.getItem('hcpmvp03AwareOfDiagnosis');
    let hcpmvp03AwareOfPrognosis = localStorage.getItem('hcpmvp03AwareOfPrognosis');
    if (localStorage.getItem("hcpmvp03WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpmvp03WhatIsTheDiagnosis");
    if (localStorage.getItem("hcpmvp03DodDay")) dodDay.value = localStorage.getItem("hcpmvp03DodDay");
    if (localStorage.getItem("hcpmvp03DodMonth")) dodMonth.value = localStorage.getItem("hcpmvp03DodMonth");
    if (localStorage.getItem("hcpmvp03DodYear")) dodYear.value = localStorage.getItem("hcpmvp03DodYear");
    if (localStorage.getItem("hcpmvp03DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpmvp03DateofSpecialRulesDay");
    if (localStorage.getItem("hcpmvp03DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpmvp03DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpmvp03DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpmvp03DateofSpecialRulesYear");
    if (localStorage.getItem("hcpmvp03OtherRelevantDiagnosis")) otherRelevantDiagnosis.value = localStorage.getItem("hcpmvp03OtherRelevantDiagnosis");
    if (localStorage.getItem("hcpmvp03OtherRelevantDiagnosisinput")) otherRelevantDiagnosisinput.value = localStorage.getItem("hcpmvp03OtherRelevantDiagnosisinput");
    // Clinical features mvp03
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpmvp03DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpmvp03DetailsOfClinicalFeatures");
    // Treatment mvp03
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpmvp03Treatment")) treatment.value = localStorage.getItem("hcpmvp03Treatment");
    // Your details mvp03
    let yourRole = document.getElementById('yourRole');
    let yourFirstName = document.getElementById('yourFullName');
    let yourMiddleName = document.getElementById('yourMiddleName');
    let yourLastName = document.getElementById('yourLastName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis mvp03
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === hcpmvp03AwareOfDiagnosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis mvp03
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === hcpmvp03AwareOfPrognosis) {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
  }
  // DOB mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-02' || pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-c-02') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let dobDay = document.getElementById('dob-day');
    let dobMonth = document.getElementById('dob-month');
    let dobYear = document.getElementById('dob-year');
    if (localStorage.getItem("hcpmvp03DobDay")) dobDay.value = localStorage.getItem("hcpmvp03DobDay");
    if (localStorage.getItem("hcpmvp03DobMonth")) dobMonth.value = localStorage.getItem("hcpmvp03DobMonth");
    if (localStorage.getItem("hcpmvp03DobYear")) dobYear.value = localStorage.getItem("hcpmvp03DobYear");
  }
  // Postcode mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-03' || pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-c-03' || pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-04' || pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-c-04') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpmvp03PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpmvp03PatientPostcode");
  }
  // Address mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-04-a' || pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-04-a-error') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let patientaddressline1 = document.getElementById('patientaddressline1');
    let patientaddressline2 = document.getElementById('patientaddressline2');
    let patientaddresstown = document.getElementById('patientaddresstown');
    let patientaddresscounty = document.getElementById('patientaddresscounty');
    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpmvp03PatientAddressLine1")) patientaddressline1.value = localStorage.getItem("hcpmvp03PatientAddressLine1");
    if (localStorage.getItem("hcpmvp03PatientAddressLine2")) patientaddressline2.value = localStorage.getItem("hcpmvp03PatientAddressLine2");
    if (localStorage.getItem("hcpmvp03PatientAddressTown")) patientaddresstown.value = localStorage.getItem("hcpmvp03PatientAddressTown");
    if (localStorage.getItem("hcpmvp03PatientAddressCounty")) patientaddresscounty.value = localStorage.getItem("hcpmvp03PatientAddressCounty");
    if (localStorage.getItem("hcpmvp03PatientPostcode")) patientPostcode.value = localStorage.getItem("hcpmvp03PatientPostcode");
  }
  // Aware of nino mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-05-radio') {

    if (localStorage.getItem("hcpmvp03NiNo")) {
      let niNo = localStorage.getItem("hcpmvp03NiNo");
      const formElements = document.getElementById('sendAnSR1Form').elements;

      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "niNo") {
          if (formElement.value === niNo) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (role === 'Yes') {
              document.getElementById('niNoinput').value = localStorage.getItem("hcpmvp03NiNoinput");
            }
          }
        }
      }
    }
  }
  // niNo mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-05-input') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let niNoinput = document.getElementById('niNoinput');
    if (localStorage.getItem("hcpmvp03NiNoinput")) niNoinput.value = localStorage.getItem("hcpmvp03NiNoinput");
  }
  // Date meeting special rules mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-06' || pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-c-06') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
    let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
    let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
    if (localStorage.getItem("hcpmvp03DateofSpecialRulesDay")) dateofSpecialRulesDay.value = localStorage.getItem("hcpmvp03DateofSpecialRulesDay");
    if (localStorage.getItem("hcpmvp03DateofSpecialRulesMonth")) dateofSpecialRulesMonth.value = localStorage.getItem("hcpmvp03DateofSpecialRulesMonth");
    if (localStorage.getItem("hcpmvp03DateofSpecialRulesYear")) dateofSpecialRulesYear.value = localStorage.getItem("hcpmvp03DateofSpecialRulesYear");
  }
  // Diagnosis mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-07' || pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-c-07') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    if (localStorage.getItem("hcpmvp03WhatIsTheDiagnosis")) whatIsTheDiagnosis.value = localStorage.getItem("hcpmvp03WhatIsTheDiagnosis");
  }
  // Date diagnosis mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-08' || pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-c-08') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let dodDay = document.getElementById('dod-day');
    let dodMonth = document.getElementById('dod-month');
    let dodYear = document.getElementById('dod-year');
    if (localStorage.getItem("hcpmvp03DodDay")) dodDay.value = localStorage.getItem("hcpmvp03DodDay");
    if (localStorage.getItem("hcpmvp03DodMonth")) dodMonth.value = localStorage.getItem("hcpmvp03DodMonth");
    if (localStorage.getItem("hcpmvp03DodYear")) dodYear.value = localStorage.getItem("hcpmvp03DodYear");
  }
  // Other diagnosis mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-09-radio') {
    if (localStorage.getItem("hcpmvp03OtherRelevantDiagnosis")) {
      let otherRelevantDiagnosis = localStorage.getItem('hcpmvp03OtherRelevantDiagnosis');
      const formElements = document.getElementById('sendAnSR1Form').elements;
      for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "otherRelevantDiagnosis") {
          if (formElement.value === otherRelevantDiagnosis) {
            console.log('formElement:', formElement.value);
            formElement.checked = true;

            if (otherRelevantDiagnosis === 'Yes') {
              document.getElementById('otherRelevantDiagnosisinput').value = localStorage.getItem("hcpmvp03OtherRelevantDiagnosisinput");
            }
          }
        }
      }
    }
  }
  //Other relevant diagnosis input mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-09-input') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let otherRelevantDiagnosisinput = document.getElementById('otherRelevantDiagnosisinput');
    if (localStorage.getItem("hcpmvp03OtherRelevantDiagnosisinput")) otherRelevantDiagnosisinput.value = localStorage.getItem("hcpmvp03OtherRelevantDiagnosisinput");
  }
  // Aware of diagnosis mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-10' || pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-c-10') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let hcpmvp03AwareOfDiagnosis = localStorage.getItem('hcpmvp03AwareOfDiagnosis');
  }
  // Aware of prognosis mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-11' || pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-c-11') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let hcpmvp03AwareOfPrognosis = localStorage.getItem('hcpmvp03AwareOfPrognosis');
  }
  // Clinical Features mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-12' || pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-c-12') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
    if (localStorage.getItem("hcpmvp03DetailsOfClinicalFeatures")) detailsOfClinicalFeatures.value = localStorage.getItem("hcpmvp03DetailsOfClinicalFeatures");
  }
  // Treatment mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-13' || pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-c-13') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpmvp03Treatment")) treatment.value = localStorage.getItem("hcpmvp03Treatment");
  }

  // ===============
  // Postcode lookup
  // ===============

  // Profile

  // v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/profile-07-new' || pageUrlPath === '/hcp-e2e-journey-v04/profile-07') {
    let patientPostcode = document.getElementById('postcode');
    if (localStorage.getItem("hcpv04Postcode")) patientPostcode.innerHTML = localStorage.getItem("hcpv04Postcode");
  }
  // v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/profile-07-new' || pageUrlPath === '/hcp-e2e-journey-v05/profile-07') {
    let patientPostcode = document.getElementById('postcode');
    if (localStorage.getItem("hcpv05Postcode")) patientPostcode.innerHTML = localStorage.getItem("hcpv05Postcode");
  }
  // v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/profile-07-new' || pageUrlPath === '/hcp-e2e-journey-v06/profile-07') {
    let patientPostcode = document.getElementById('postcode');
    if (localStorage.getItem("hcpv06Postcode")) patientPostcode.innerHTML = localStorage.getItem("hcpv06Postcode");
  }
  // v07
  if (pageUrlPath === '/hcp-e2e-journey-v07/profile-07-new' || pageUrlPath === '/hcp-e2e-journey-v07/profile-07') {
    let patientPostcode = document.getElementById('postcode');
    if (localStorage.getItem("hcpv07Postcode")) patientPostcode.innerHTML = localStorage.getItem("hcpv07Postcode");
  }
  // v08
  if (pageUrlPath === '/hcp-e2e-journey-v08/profile-07-new' || pageUrlPath === '/hcp-e2e-journey-v08/profile-07') {
    let patientPostcode = document.getElementById('postcode');
    if (localStorage.getItem("hcpv08Postcode")) patientPostcode.innerHTML = localStorage.getItem("hcpv08Postcode");
  }
  // v09
  if (pageUrlPath === '/hcp-e2e-journey-v09/profile-07-new' || pageUrlPath === '/hcp-e2e-journey-v09/profile-07') {
    let patientPostcode = document.getElementById('postcode');
    if (localStorage.getItem("hcpv09Postcode")) patientPostcode.innerHTML = localStorage.getItem("hcpv09Postcode");
  }
  // mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/profile-07-new' || pageUrlPath === '/hcp-e2e-journey-mvp01/profile-07') {
    let patientPostcode = document.getElementById('postcode');
    if (localStorage.getItem("hcpmvp01Postcode")) patientPostcode.innerHTML = localStorage.getItem("hcpmvp01Postcode");
  }
  // mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/profile-07-new' || pageUrlPath === '/hcp-e2e-journey-mvp02/profile-07') {
    let patientPostcode = document.getElementById('postcode');
    if (localStorage.getItem("hcpmvp02Postcode")) patientPostcode.innerHTML = localStorage.getItem("hcpmvp02Postcode");
  }
  // mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/profile-07-new' || pageUrlPath === '/hcp-e2e-journey-mvp03/profile-07') {
    let patientPostcode = document.getElementById('postcode');
    if (localStorage.getItem("hcpmvp03Postcode")) patientPostcode.innerHTML = localStorage.getItem("hcpmvp03Postcode");
  }

  // Form

  // v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-03' || pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-03' || pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-04' || pageUrlPath === '/hcp-e2e-journey-v04/sr1-form-c-04') {
    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpv04PatientPostcode")) patientPostcode.innerHTML = localStorage.getItem("hcpv04PatientPostcode");
  }
  // v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-03' || pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-03' || pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-04' || pageUrlPath === '/hcp-e2e-journey-v05/sr1-form-c-04') {
    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpv05PatientPostcode")) patientPostcode.innerHTML = localStorage.getItem("hcpv05PatientPostcode");
  }
  // v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-03' || pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-03' || pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-04' || pageUrlPath === '/hcp-e2e-journey-v06/sr1-form-c-04') {
    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpv06PatientPostcode")) patientPostcode.innerHTML = localStorage.getItem("hcpv06PatientPostcode");
  }
  // mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-03' || pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-c-03' || pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-04' || pageUrlPath === '/hcp-e2e-journey-mvp01/sr1-form-c-04') {
    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpmvp01PatientPostcode")) patientPostcode.innerHTML = localStorage.getItem("hcpmvp01PatientPostcode");
  }
  // mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-03' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-c-03' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-04' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-c-04') {
    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpmvp02PatientPostcode")) patientPostcode.innerHTML = localStorage.getItem("hcpmvp02PatientPostcode");
  }
  // mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-03' || pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-c-03' || pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-04' || pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-c-04') {
    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpmvp03PatientPostcode")) patientPostcode.innerHTML = localStorage.getItem("hcpmvp03PatientPostcode");
  }

  // ==============================
  // Alternative Journeys and pages
  // ==============================

  // v01

  //Form prefilled v01
  if (pageUrlPath === '/hcp-e2e-journey-v01/send-an-sr1-form-prefilled') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    document.getElementById('firstName').setAttribute('value', localStorage.getItem("pff_firstName"));
    document.getElementById('surname').setAttribute('value', localStorage.getItem("pff_surname"));
    document.getElementById('patientaddressline1').value = '86 Claremont Cove';
    document.getElementById('patientaddresstown').value = 'Glenrothes';
    document.getElementById('patientPostcode').setAttribute('value', 'SE1 ABC');
    document.getElementById('dob-day').setAttribute('value', '12');
    document.getElementById('dob-month').setAttribute('value', '01');
    document.getElementById('dob-year').setAttribute('value', '1970');
    document.getElementById('niNo').setAttribute('value', 'QQ 12 34 56 C');
    document.getElementById('dateofSpecialRules-day').setAttribute('value', '23');
    document.getElementById('dateofSpecialRules-month').setAttribute('value', '09');
    document.getElementById('dateofSpecialRules-year').setAttribute('value', '2022');
    document.getElementById('whatIsTheDiagnosis').value = 'End stage COPD';
    document.getElementById('dod-month').setAttribute('value', '01');
    document.getElementById('dod-year').setAttribute('value', '2022');
    document.getElementById('otherRelevantDiagnosis').value = 'Frailty';
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis v01
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === 'yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis v01
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === 'yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
    document.getElementById('detailsOfClinicalFeatures').value = 'Worsening symptons, rapid decline, despit optimal maangement, severe frailty.';
    document.getElementById('treatment').value = 'Treatment declined, no further treatment available under palliative care.';

    // Your details v01
    let yourRole = document.getElementById('yourRole');
    let yourFullName = document.getElementById('yourFullName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
    }
    if (localStorage.getItem("hcpv01Role")) {
      yourRole.value = localStorage.getItem("hcpv01Role");
    }
    if (localStorage.getItem("hcpv01Role") === "other") {
      yourRole.value = localStorage.getItem("hcpv01OtherRole");
    }
    if (localStorage.getItem("hcpv01Fullname")) yourFullName.value = localStorage.getItem("hcpv01Fullname");
    if (localStorage.getItem("hcpv01OrganisationName")) organisationName.value = localStorage.getItem("hcpv01OrganisationName");
    if (localStorage.getItem("hcpv01OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv01OrganisationAddressLine1");
    if (localStorage.getItem("hcpv01OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv01OrganisationAddressLine2");
    if (localStorage.getItem("hcpv01TownOrCity")) townOrCity.value = localStorage.getItem("hcpv01TownOrCity");
    if (localStorage.getItem("hcpv01Postcode")) thePostcode.value = localStorage.getItem("hcpv01Postcode");
    if (localStorage.getItem("hcpv01MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv01MobileNumber");
  }

  //Form error v01
  if (pageUrlPath === '/hcp-e2e-journey-v01/send-an-sr1-form-error') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    document.getElementById('fullName').setAttribute('value', localStorage.getItem("pff_fullName"));
    document.getElementById('patientaddressline1').value = '86 Claremont Cove';
    document.getElementById('patientaddresstown').value = 'Glenrothes';
    document.getElementById('patientPostcode').setAttribute('value', 'SE1 ABC');
    document.getElementById('dob-day').setAttribute('value', '12');
    document.getElementById('dob-month').setAttribute('value', '01');
    document.getElementById('dob-year').setAttribute('value', '1970');
    document.getElementById('niNo').setAttribute('value', 'QQ 12 34 56 C');
    document.getElementById('dateofSpecialRules-day').setAttribute('value', '23');
    document.getElementById('dateofSpecialRules-month').setAttribute('value', '09');
    document.getElementById('dateofSpecialRules-year').setAttribute('value', '2022');
    document.getElementById('whatIsTheDiagnosis').value = 'End stage COPD';
    document.getElementById('dod-month').setAttribute('value', '01');
    document.getElementById('dod-year').setAttribute('value', '2022');
    document.getElementById('otherRelevantDiagnosis').value = 'Frailty';
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis v01
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === 'yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis v01
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === 'yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
    document.getElementById('detailsOfClinicalFeatures').value = 'Worsening symptons, rapid decline, despit optimal maangement, severe frailty.';

    // Your details v01
    let yourRole = document.getElementById('yourRole');
    let yourFullName = document.getElementById('yourFullName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
    }
    if (localStorage.getItem("hcpv01Role")) {
      yourRole.value = localStorage.getItem("hcpv01Role");
    }
    if (localStorage.getItem("hcpv01Role") === "other") {
      yourRole.value = localStorage.getItem("hcpv01OtherRole");
    }
    if (localStorage.getItem("hcpv01Fullname")) yourFullName.value = localStorage.getItem("hcpv01Fullname");
    if (localStorage.getItem("hcpv01OrganisationName")) organisationName.value = localStorage.getItem("hcpv01OrganisationName");
    if (localStorage.getItem("hcpv01OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv01OrganisationAddressLine1");
    if (localStorage.getItem("hcpv01OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv01OrganisationAddressLine2");
    if (localStorage.getItem("hcpv01TownOrCity")) townOrCity.value = localStorage.getItem("hcpv01TownOrCity");
    if (localStorage.getItem("hcpv01Postcode")) thePostcode.value = localStorage.getItem("hcpv01Postcode");
    if (localStorage.getItem("hcpv01MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv01MobileNumber");
  }

  // v02

  //Form prefilled v02
  if (pageUrlPath === '/hcp-e2e-journey-v02/send-an-sr1-form-prefilled') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    document.getElementById('firstName').setAttribute('value', localStorage.getItem("pff_firstName"));
    document.getElementById('surname').setAttribute('value', localStorage.getItem("pff_surname"));
    document.getElementById('patientaddressline1').value = '86 Claremont Cove';
    document.getElementById('patientaddresstown').value = 'Glenrothes';
    document.getElementById('patientPostcode').setAttribute('value', 'SE1 ABC');
    document.getElementById('dob-day').setAttribute('value', '12');
    document.getElementById('dob-month').setAttribute('value', '01');
    document.getElementById('dob-year').setAttribute('value', '1970');
    document.getElementById('niNo').setAttribute('value', 'QQ 12 34 56 C');
    document.getElementById('dateofSpecialRules-day').setAttribute('value', '23');
    document.getElementById('dateofSpecialRules-month').setAttribute('value', '09');
    document.getElementById('dateofSpecialRules-year').setAttribute('value', '2022');
    document.getElementById('whatIsTheDiagnosis').value = 'End stage COPD';
    document.getElementById('dod-month').setAttribute('value', '01');
    document.getElementById('dod-year').setAttribute('value', '2022');
    document.getElementById('otherRelevantDiagnosis').value = 'Frailty';
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis v02
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === 'yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis v02
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === 'yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
    document.getElementById('detailsOfClinicalFeatures').value = 'Worsening symptons, rapid decline, despit optimal maangement, severe frailty.';
    document.getElementById('treatment').value = 'Treatment declined, no further treatment available under palliative care.';

    // Your details v02
    let yourRole = document.getElementById('yourRole');
    let yourFullName = document.getElementById('yourFullName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
    }
    if (localStorage.getItem("hcpv02Role")) {
      yourRole.value = localStorage.getItem("hcpv02Role");
    }
    if (localStorage.getItem("hcpv02Role") === "other") {
      yourRole.value = localStorage.getItem("hcpv02OtherRole");
    }
    if (localStorage.getItem("hcpv02Fullname")) yourFullName.value = localStorage.getItem("hcpv02Fullname");
    if (localStorage.getItem("hcpv02OrganisationName")) organisationName.value = localStorage.getItem("hcpv02OrganisationName");
    if (localStorage.getItem("hcpv02OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv02OrganisationAddressLine1");
    if (localStorage.getItem("hcpv02OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv02OrganisationAddressLine2");
    if (localStorage.getItem("hcpv02TownOrCity")) townOrCity.value = localStorage.getItem("hcpv02TownOrCity");
    if (localStorage.getItem("hcpv02Postcode")) thePostcode.value = localStorage.getItem("hcpv02Postcode");
    if (localStorage.getItem("hcpv02MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv02MobileNumber");
  }

  // v03

  //Form prefilled v03
  if (pageUrlPath === '/hcp-e2e-journey-v03/send-an-sr1-form-prefilled') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    document.getElementById('firstName').setAttribute('value', localStorage.getItem("pff_firstName"));
    document.getElementById('surname').setAttribute('value', localStorage.getItem("pff_surname"));
    document.getElementById('patientaddressline1').value = '86 Claremont Cove, Glenrothes';
    document.getElementById('patientPostcode').setAttribute('value', 'SE1 ABC');
    document.getElementById('dob-day').setAttribute('value', '12');
    document.getElementById('dob-month').setAttribute('value', '01');
    document.getElementById('dob-year').setAttribute('value', '1970');
    document.getElementById('niNo').setAttribute('value', 'QQ 12 34 56 C');
    document.getElementById('dateofSpecialRules-day').setAttribute('value', '23');
    document.getElementById('dateofSpecialRules-month').setAttribute('value', '09');
    document.getElementById('dateofSpecialRules-year').setAttribute('value', '2022');
    document.getElementById('whatIsTheDiagnosis').value = 'End stage COPD';
    document.getElementById('dod-month').setAttribute('value', '01');
    document.getElementById('dod-year').setAttribute('value', '2022');
    document.getElementById('otherRelevantDiagnosis').value = 'Frailty';

    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis v03
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === 'yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis v03
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === 'yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
    document.getElementById('detailsOfClinicalFeatures').value = 'Worsening symptons, rapid decline, despit optimal maangement, severe frailty.';
    document.getElementById('treatment').value = 'Treatment declined, no further treatment available under palliative care.';

    // Your details v03
    let yourRole = document.getElementById('yourRole');
    let yourFullName = document.getElementById('yourFullName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    if (localStorage.getItem("hcpv03Role")) {
      yourRole.value = localStorage.getItem("hcpv03Role");
    }
    if (localStorage.getItem("hcpv03Role") === "other") {
      yourRole.value = localStorage.getItem("hcpv03OtherRole");
    }
    if (localStorage.getItem("hcpv03Fullname")) yourFullName.value = localStorage.getItem("hcpv03Fullname");
    if (localStorage.getItem("hcpv03OrganisationName")) organisationName.value = localStorage.getItem("hcpv03OrganisationName");
    if (localStorage.getItem("hcpv03OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv03OrganisationAddressLine1");
    if (localStorage.getItem("hcpv03OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv03OrganisationAddressLine2");
    if (localStorage.getItem("hcpv03TownOrCity")) townOrCity.value = localStorage.getItem("hcpv03TownOrCity");
    if (localStorage.getItem("hcpv03Postcode")) thePostcode.value = localStorage.getItem("hcpv03Postcode");
    if (localStorage.getItem("hcpv03MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv03MobileNumber");
  }

  // v04

  //Form prefilled v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/send-an-sr1-form-prefilled') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    document.getElementById('PatientFullName').setAttribute('value', localStorage.getItem("pff_fullName"));
    document.getElementById('patientaddressline1').value = '86 Claremont Cove, Glenrothes';
    document.getElementById('patientPostcode').setAttribute('value', 'SE1 ABC');
    document.getElementById('dob-day').setAttribute('value', '12');
    document.getElementById('dob-month').setAttribute('value', '01');
    document.getElementById('dob-year').setAttribute('value', '1970');
    document.getElementById('niNo').setAttribute('value', 'QQ 12 34 56 C');
    document.getElementById('dateofSpecialRules-day').setAttribute('value', '23');
    document.getElementById('dateofSpecialRules-month').setAttribute('value', '09');
    document.getElementById('dateofSpecialRules-year').setAttribute('value', '2022');
    document.getElementById('whatIsTheDiagnosis').value = 'End stage COPD';
    document.getElementById('dod-month').setAttribute('value', '01');
    document.getElementById('dod-year').setAttribute('value', '2022');
    document.getElementById('otherRelevantDiagnosis').value = 'Frailty';
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis v04
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === 'yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis v04
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === 'yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
    document.getElementById('detailsOfClinicalFeatures').value = 'Worsening symptons, rapid decline, despit optimal maangement, severe frailty.';
    document.getElementById('treatment').value = 'Treatment declined, no further treatment available under palliative care.';

    // Your details v04
    let yourRole = document.getElementById('yourRole');
    let yourFullName = document.getElementById('yourFullName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    if (localStorage.getItem("hcpv04Role")) {
      yourRole.value = localStorage.getItem("hcpv04Role");
    }
    if (localStorage.getItem("hcpv04Role") === "other") {
      yourRole.value = localStorage.getItem("hcpv04OtherRole");
    }
    if (localStorage.getItem("hcpv04Fullname")) yourFullName.value = localStorage.getItem("hcpv04Fullname");
    if (localStorage.getItem("hcpv04OrganisationName")) organisationName.value = localStorage.getItem("hcpv04OrganisationName");
    if (localStorage.getItem("hcpv04OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv04OrganisationAddressLine1");
    if (localStorage.getItem("hcpv04OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv04OrganisationAddressLine2");
    if (localStorage.getItem("hcpv04TownOrCity")) townOrCity.value = localStorage.getItem("hcpv04TownOrCity");
    if (localStorage.getItem("hcpv04Postcode")) thePostcode.value = localStorage.getItem("hcpv04Postcode");
    if (localStorage.getItem("hcpv04MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv04MobileNumber");
  }

  // v05

  //Form prefilled v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/send-an-sr1-form-prefilled') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    document.getElementById('PatientFullName').setAttribute('value', localStorage.getItem("pff_fullName"));
    document.getElementById('patientaddressline1').value = '86 Claremont Cove, Glenrothes';
    document.getElementById('patientPostcode').setAttribute('value', 'SE1 ABC');
    document.getElementById('dob-day').setAttribute('value', '12');
    document.getElementById('dob-month').setAttribute('value', '01');
    document.getElementById('dob-year').setAttribute('value', '1970');
    document.getElementById('niNo').setAttribute('value', 'QQ 12 34 56 C');
    document.getElementById('dateofSpecialRules-day').setAttribute('value', '23');
    document.getElementById('dateofSpecialRules-month').setAttribute('value', '09');
    document.getElementById('dateofSpecialRules-year').setAttribute('value', '2022');
    document.getElementById('whatIsTheDiagnosis').value = 'End stage COPD';
    document.getElementById('dod-month').setAttribute('value', '01');
    document.getElementById('dod-year').setAttribute('value', '2022');
    document.getElementById('otherRelevantDiagnosis').value = 'Frailty';
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis v05
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === 'Yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis v05
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === 'Yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
    document.getElementById('detailsOfClinicalFeatures').value = 'Worsening symptons, rapid decline, despit optimal maangement, severe frailty.';
    document.getElementById('treatment').value = 'Treatment declined, no further treatment available under palliative care.';

    // Your details v05
    let yourRole = document.getElementById('yourRole');
    let yourFullName = document.getElementById('yourFullName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    if (localStorage.getItem("hcpv05Role")) {
      yourRole.value = localStorage.getItem("hcpv05Role");
    }
    if (localStorage.getItem("hcpv05Role") === "other") {
      yourRole.value = localStorage.getItem("hcpv05OtherRole");
    }
    if (localStorage.getItem("hcpv05Fullname")) yourFullName.value = localStorage.getItem("hcpv05Fullname");
    if (localStorage.getItem("hcpv05OrganisationName")) organisationName.value = localStorage.getItem("hcpv05OrganisationName");
    if (localStorage.getItem("hcpv05OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv05OrganisationAddressLine1");
    if (localStorage.getItem("hcpv05OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv05OrganisationAddressLine2");
    if (localStorage.getItem("hcpv05TownOrCity")) townOrCity.value = localStorage.getItem("hcpv05TownOrCity");
    if (localStorage.getItem("hcpv05Postcode")) thePostcode.value = localStorage.getItem("hcpv05Postcode");
    if (localStorage.getItem("hcpv05MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv05MobileNumber");
  }

  // v06

  //Form prefilled v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/send-an-sr1-form-prefilled') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    document.getElementById('PatientFullName').setAttribute('value', localStorage.getItem("pff_fullName"));
    document.getElementById('patientaddressline1').value = '86 Claremont Cove, Glenrothes';
    document.getElementById('patientPostcode').setAttribute('value', 'SE1 ABC');
    document.getElementById('dob-day').setAttribute('value', '12');
    document.getElementById('dob-month').setAttribute('value', '01');
    document.getElementById('dob-year').setAttribute('value', '1970');
    document.getElementById('niNo').setAttribute('value', 'QQ 12 34 56 C');
    document.getElementById('dateofSpecialRules-day').setAttribute('value', '23');
    document.getElementById('dateofSpecialRules-month').setAttribute('value', '09');
    document.getElementById('dateofSpecialRules-year').setAttribute('value', '2022');
    document.getElementById('whatIsTheDiagnosis').value = 'End stage COPD';
    document.getElementById('dod-month').setAttribute('value', '01');
    document.getElementById('dod-year').setAttribute('value', '2022');
    document.getElementById('otherRelevantDiagnosis').value = 'Frailty';
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis v06
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === 'yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis v06
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === 'yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
    document.getElementById('detailsOfClinicalFeatures').value = 'Worsening symptons, rapid decline, despit optimal maangement, severe frailty.';
    document.getElementById('treatment').value = 'Treatment declined, no further treatment available under palliative care.';

    // Your details v06
    let yourRole = document.getElementById('yourRole');
    let yourFullName = document.getElementById('yourFullName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    if (localStorage.getItem("hcpv06Role")) {
      yourRole.value = localStorage.getItem("hcpv06Role");
    }
    if (localStorage.getItem("hcpv06Role") === "other") {
      yourRole.value = localStorage.getItem("hcpv06OtherRole");
    }
    if (localStorage.getItem("hcpv06Fullname")) yourFullName.value = localStorage.getItem("hcpv06Fullname");
    if (localStorage.getItem("hcpv06OrganisationName")) organisationName.value = localStorage.getItem("hcpv06OrganisationName");
    if (localStorage.getItem("hcpv06OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv06OrganisationAddressLine1");
    if (localStorage.getItem("hcpv06OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv06OrganisationAddressLine2");
    if (localStorage.getItem("hcpv06TownOrCity")) townOrCity.value = localStorage.getItem("hcpv06TownOrCity");
    if (localStorage.getItem("hcpv06Postcode")) thePostcode.value = localStorage.getItem("hcpv06Postcode");
    if (localStorage.getItem("hcpv06MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv06MobileNumber");
  }

  // v07

  //Form prefilled v07
  if (pageUrlPath === '/hcp-e2e-journey-v07/send-an-sr1-form-prefilled') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    document.getElementById('PatientFullName').setAttribute('value', localStorage.getItem("pff_fullName"));
    document.getElementById('patientaddressline1').value = '86 Claremont Cove';
    document.getElementById('patientaddresstown').value = 'Glenrothes';
    document.getElementById('patientPostcode').setAttribute('value', 'SE1 ABC');
    document.getElementById('dob-day').setAttribute('value', '12');
    document.getElementById('dob-month').setAttribute('value', '01');
    document.getElementById('dob-year').setAttribute('value', '1970');
    document.getElementById('niNo').setAttribute('value', 'QQ 12 34 56 C');
    document.getElementById('dateofSpecialRules-day').setAttribute('value', '23');
    document.getElementById('dateofSpecialRules-month').setAttribute('value', '09');
    document.getElementById('dateofSpecialRules-year').setAttribute('value', '2022');
    document.getElementById('whatIsTheDiagnosis').value = 'End stage COPD';
    document.getElementById('dod-month').setAttribute('value', '01');
    document.getElementById('dod-year').setAttribute('value', '2022');
    document.getElementById('otherRelevantDiagnosis').value = 'Frailty';
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis v07
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === 'yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis v07
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === 'yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
    document.getElementById('detailsOfClinicalFeatures').value = 'Worsening symptons, rapid decline, despit optimal maangement, severe frailty.';
    document.getElementById('treatment').value = 'Treatment declined, no further treatment available under palliative care.';

    // Your details v07
    let yourRole = document.getElementById('yourRole');
    let yourFullName = document.getElementById('yourFullName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    if (localStorage.getItem("hcpv07Role")) {
      yourRole.value = localStorage.getItem("hcpv07Role");
    }
    if (localStorage.getItem("hcpv07Role") === "other") {
      yourRole.value = localStorage.getItem("hcpv07OtherRole");
    }
    if (localStorage.getItem("hcpv07Fullname")) yourFullName.value = localStorage.getItem("hcpv07Fullname");
    if (localStorage.getItem("hcpv07OrganisationName")) organisationName.value = localStorage.getItem("hcpv07OrganisationName");
    if (localStorage.getItem("hcpv07OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv07OrganisationAddressLine1");
    if (localStorage.getItem("hcpv07OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv07OrganisationAddressLine2");
    if (localStorage.getItem("hcpv07TownOrCity")) townOrCity.value = localStorage.getItem("hcpv07TownOrCity");
    if (localStorage.getItem("hcpv07Postcode")) thePostcode.value = localStorage.getItem("hcpv07Postcode");
    if (localStorage.getItem("hcpv07MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv07MobileNumber");
  }

  // v08

  //Form prefilled v08
  if (pageUrlPath === '/hcp-e2e-journey-v08/send-an-sr1-form-prefilled') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    document.getElementById('PatientFullName').setAttribute('value', localStorage.getItem("pff_fullName"));
    document.getElementById('patientaddressline1').value = '86 Claremont Cove, Glenrothes';
    document.getElementById('patientPostcode').setAttribute('value', 'SE1 ABC');
    document.getElementById('dob-day').setAttribute('value', '12');
    document.getElementById('dob-month').setAttribute('value', '01');
    document.getElementById('dob-year').setAttribute('value', '1970');
    document.getElementById('niNo').setAttribute('value', 'QQ 12 34 56 C');
    document.getElementById('dateofSpecialRules-day').setAttribute('value', '23');
    document.getElementById('dateofSpecialRules-month').setAttribute('value', '09');
    document.getElementById('dateofSpecialRules-year').setAttribute('value', '2022');
    document.getElementById('whatIsTheDiagnosis').value = 'End stage COPD';
    document.getElementById('dod-month').setAttribute('value', '01');
    document.getElementById('dod-year').setAttribute('value', '2022');
    document.getElementById('otherRelevantDiagnosis').value = 'Frailty';
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis v08
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === 'yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis v08
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === 'yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
    document.getElementById('detailsOfClinicalFeatures').value = 'Worsening symptons, rapid decline, despit optimal maangement, severe frailty.';
    document.getElementById('treatment').value = 'Treatment declined, no further treatment available under palliative care.';

    // Your details v08
    let yourRole = document.getElementById('yourRole');
    let yourFullName = document.getElementById('yourFullName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');
    if (localStorage.getItem("hcpv08Role")) {
      yourRole.value = localStorage.getItem("hcpv08Role");
    }
    if (localStorage.getItem("hcpv08Role") === "other") {
      yourRole.value = localStorage.getItem("hcpv08OtherRole");
    }
    if (localStorage.getItem("hcpv08Fullname")) yourFullName.value = localStorage.getItem("hcpv08Fullname");
    if (localStorage.getItem("hcpv08OrganisationName")) organisationName.value = localStorage.getItem("hcpv08OrganisationName");
    if (localStorage.getItem("hcpv08OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv08OrganisationAddressLine1");
    if (localStorage.getItem("hcpv08OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv08OrganisationAddressLine2");
    if (localStorage.getItem("hcpv08TownOrCity")) townOrCity.value = localStorage.getItem("hcpv08TownOrCity");
    if (localStorage.getItem("hcpv08Postcode")) thePostcode.value = localStorage.getItem("hcpv08Postcode");
    if (localStorage.getItem("hcpv08MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv08MobileNumber");
  }

  // v09

  //Form prefilled v09
  if (pageUrlPath === '/hcp-e2e-journey-v09/send-an-sr1-form-prefilled') {
    const formElements = document.getElementById('sendAnSR1Form').elements;
    document.getElementById('PatientFullName').setAttribute('value', localStorage.getItem("pff_fullName"));
    document.getElementById('patientaddressline1').value = '86 Claremont Cove, Glenrothes';
    document.getElementById('patientPostcode').setAttribute('value', 'SE1 ABC');
    document.getElementById('dob-day').setAttribute('value', '12');
    document.getElementById('dob-month').setAttribute('value', '01');
    document.getElementById('dob-year').setAttribute('value', '1970');
    document.getElementById('niNo').setAttribute('value', 'QQ 12 34 56 C');
    document.getElementById('dateofSpecialRules-day').setAttribute('value', '23');
    document.getElementById('dateofSpecialRules-month').setAttribute('value', '09');
    document.getElementById('dateofSpecialRules-year').setAttribute('value', '2022');
    document.getElementById('whatIsTheDiagnosis').value = 'End stage COPD';
    document.getElementById('dod-month').setAttribute('value', '01');
    document.getElementById('dod-year').setAttribute('value', '2022');
    document.getElementById('otherRelevantDiagnosis').value = 'Frailty';
    for (var i = 0, j = 0; i < formElements.length; i++) {
      formElement = formElements.item(i);
      // Diagnosis v09
      if (formElement.type === "radio" && formElement.name === "awareOfDiagnosis") {
        if (formElement.value === 'yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
      // Prognosis v09
      if (formElement.type === "radio" && formElement.name === "awareOfPrognosis") {
        if (formElement.value === 'yes') {
          console.log('formElement:', formElement.value);
          formElement.checked = true;
        }
      }
    }
    document.getElementById('detailsOfClinicalFeatures').value = 'Worsening symptons, rapid decline, despit optimal maangement, severe frailty.';
    document.getElementById('treatment').value = 'Treatment declined, no further treatment available under palliative care.';
    // Your details v09
    let yourRole = document.getElementById('yourRole');
    let yourFullName = document.getElementById('yourFullName');
    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let townOrCity = document.getElementById('townOrCity');
    let thePostcode = document.getElementById('thePostcode');
    let mobileNumber = document.getElementById('mobileNumber');

    if (localStorage.getItem("hcpv09Role")) {
      yourRole.value = localStorage.getItem("hcpv09Role");
    }
    if (localStorage.getItem("hcpv09Role") === "other") {
      yourRole.value = localStorage.getItem("hcpv09OtherRole");
    }
    if (localStorage.getItem("hcpv09Fullname")) yourFullName.value = localStorage.getItem("hcpv09Fullname");
    if (localStorage.getItem("hcpv09OrganisationName")) organisationName.value = localStorage.getItem("hcpv09OrganisationName");
    if (localStorage.getItem("hcpv09OrganisationAddressLine1")) organisationAddressLine1.value = localStorage.getItem("hcpv09OrganisationAddressLine1");
    if (localStorage.getItem("hcpv09OrganisationAddressLine2")) organisationAddressLine2.value = localStorage.getItem("hcpv09OrganisationAddressLine2");
    if (localStorage.getItem("hcpv09TownOrCity")) townOrCity.value = localStorage.getItem("hcpv09TownOrCity");
    if (localStorage.getItem("hcpv09Postcode")) thePostcode.value = localStorage.getItem("hcpv09Postcode");
    if (localStorage.getItem("hcpv09MobileNumber")) mobileNumber.value = localStorage.getItem("hcpv09MobileNumber");
  }

  // ==============================
  // Form sent
  // ==============================

  // v01
  if (pageUrlPath === '/hcp-e2e-journey-v01/sent-sr1-form' || pageUrlPath === '/hcp-e2e-journey-v01/sent-sr1-form-prefilled') {
    document.getElementById('fullNameHeading').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('fullName').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('downloadName').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('referenceNumber').innerHTML = localStorage.getItem("sentSR1_referenceNumber");
    document.getElementById('downloadID').innerHTML = localStorage.getItem("sentSR1_referenceNumber");
  }
  // v02
  if (pageUrlPath === '/hcp-e2e-journey-v02/sent-sr1-form' || pageUrlPath === '/hcp-e2e-journey-v02/sent-sr1-form-prefilled') {
    document.getElementById('fullNameHeading').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('fullName').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('downloadName').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('referenceNumber').innerHTML = localStorage.getItem("sentSR1_referenceNumber");
    document.getElementById('downloadID').innerHTML = localStorage.getItem("sentSR1_referenceNumber");
  }
  // v03
  if (pageUrlPath === '/hcp-e2e-journey-v03/sent-sr1-form' || pageUrlPath === '/hcp-e2e-journey-v03/sent-sr1-form-prefilled') {
    document.getElementById('fullNameHeading').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('fullName').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('downloadName').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('referenceNumber').innerHTML = localStorage.getItem("sentSR1_referenceNumber");
    document.getElementById('downloadID').innerHTML = localStorage.getItem("sentSR1_referenceNumber");
  }
  // v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/sent-sr1-form') {
    document.getElementById('fullNameHeading').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('fullName').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('downloadName').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('referenceNumber').innerHTML = localStorage.getItem("sentSR1_referenceNumber");
    document.getElementById('dateSubmission').innerHTML = localStorage.getItem("pff_dateSubmission");
    document.getElementById('downloadID').innerHTML = localStorage.getItem("sentSR1_referenceNumber");
  }
  // v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/sent-sr1-form') {
    document.getElementById('fullNameHeading').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('fullName').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('downloadName').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('referenceNumber').innerHTML = localStorage.getItem("sentSR1_referenceNumber");
    document.getElementById('dateSubmission').innerHTML = localStorage.getItem("pff_dateSubmission");
    document.getElementById('downloadID').innerHTML = localStorage.getItem("sentSR1_referenceNumber");
  }
  // v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/sent-sr1-form') {
    document.getElementById('fullNameHeading').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('fullName').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('downloadName').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('referenceNumber').innerHTML = localStorage.getItem("sentSR1_referenceNumber");
    document.getElementById('dateSubmission').innerHTML = localStorage.getItem("pff_dateSubmission");
    document.getElementById('downloadID').innerHTML = localStorage.getItem("sentSR1_referenceNumber");
  }
  // v07
  if (pageUrlPath === '/hcp-e2e-journey-v07/sent-sr1-form') {
    document.getElementById('fullNameHeading').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('fullName').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('downloadName').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('referenceNumber').innerHTML = localStorage.getItem("sentSR1_referenceNumber");
    document.getElementById('dateSubmission').innerHTML = localStorage.getItem("pff_dateSubmission");
    document.getElementById('downloadID').innerHTML = localStorage.getItem("sentSR1_referenceNumber");
  }
  // v08
  if (pageUrlPath === '/hcp-e2e-journey-v08/sent-sr1-form') {
    document.getElementById('fullNameHeading').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('fullName').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('downloadName').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('referenceNumber').innerHTML = localStorage.getItem("sentSR1_referenceNumber");
    document.getElementById('dateSubmission').innerHTML = localStorage.getItem("pff_dateSubmission");
    document.getElementById('downloadID').innerHTML = localStorage.getItem("sentSR1_referenceNumber");
  }
  // v09
  if (pageUrlPath === '/hcp-e2e-journey-v09/sent-sr1-form') {
    document.getElementById('fullNameHeading').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('fullName').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('downloadName').innerHTML = localStorage.getItem("sentSR1_firstName") + ' ' + localStorage.getItem("sentSR1_surname");
    document.getElementById('referenceNumber').innerHTML = localStorage.getItem("sentSR1_referenceNumber");
    document.getElementById('dateSubmission').innerHTML = localStorage.getItem("pff_dateSubmission");
    document.getElementById('downloadID').innerHTML = localStorage.getItem("sentSR1_referenceNumber");
  }

  // ====================
  // Edit incomplete form
  // ====================

  // v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/edit-incomplete-form' || pageUrlPath === '/hcp-e2e-journey-v04/edit-incomplete-form-error' || pageUrlPath === '/hcp-e2e-journey-v04/edit-incomplete-form-saved') {
    document.getElementById('fullNameHeading').innerHTML = localStorage.getItem("pff_firstName") + ' ' + localStorage.getItem("pff_surname");
    document.getElementById('daysToSubmit').innerHTML = localStorage.getItem("pff_daysToSubmit");
    document.getElementById('daysToSubmit').innerHTML = localStorage.getItem("pff_daysToSubmit");
  }
  if (pageUrlPath === '/hcp-e2e-journey-v04/edit-incomplete-filled-form-saved' || pageUrlPath === 'hcp-e2e-journey-v04/check-sr1-form-prefilled') {
    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpv04PatientFullName")) PatientFullName.innerHTML = localStorage.getItem("hcpv04PatientFullName");
  }
  // v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/edit-incomplete-form' || pageUrlPath === '/hcp-e2e-journey-v05/edit-incomplete-form-error' || pageUrlPath === '/hcp-e2e-journey-v05/edit-incomplete-form-saved') {
    document.getElementById('fullNameHeading').innerHTML = localStorage.getItem("pff_firstName") + ' ' + localStorage.getItem("pff_surname");
    document.getElementById('daysToSubmit').innerHTML = localStorage.getItem("pff_daysToSubmit");
    document.getElementById('daysToSubmit').innerHTML = localStorage.getItem("pff_daysToSubmit");
  }
  if (pageUrlPath === '/hcp-e2e-journey-v05/edit-incomplete-filled-form-saved' || pageUrlPath === 'hcp-e2e-journey-v05/check-sr1-form-prefilled') {
    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpv05PatientFullName")) PatientFullName.innerHTML = localStorage.getItem("hcpv05PatientFullName");
  }
  // v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/edit-incomplete-form' || pageUrlPath === '/hcp-e2e-journey-v06/edit-incomplete-form-error' || pageUrlPath === '/hcp-e2e-journey-v06/edit-incomplete-form-saved') {
    document.getElementById('fullNameHeading').innerHTML = localStorage.getItem("pff_firstName") + ' ' + localStorage.getItem("pff_surname");
    document.getElementById('daysToSubmit').innerHTML = localStorage.getItem("pff_daysToSubmit");
    document.getElementById('daysToSubmit').innerHTML = localStorage.getItem("pff_daysToSubmit");
  }
  if (pageUrlPath === '/hcp-e2e-journey-v06/edit-incomplete-filled-form-saved' || pageUrlPath === 'hcp-e2e-journey-v06/check-sr1-form-prefilled') {
    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpv06PatientFullName")) PatientFullName.innerHTML = localStorage.getItem("hcp6PatientFullName");
  }

  // v07
  if (pageUrlPath === '/hcp-e2e-journey-v07/edit-incomplete-form' || pageUrlPath === '/hcp-e2e-journey-v07/edit-incomplete-form-error' || pageUrlPath === '/hcp-e2e-journey-v07/edit-incomplete-form-saved') {
    document.getElementById('fullNameHeading').innerHTML = localStorage.getItem("pff_firstName") + ' ' + localStorage.getItem("pff_surname");
    document.getElementById('daysToSubmit').innerHTML = localStorage.getItem("pff_daysToSubmit");
    document.getElementById('daysToSubmit').innerHTML = localStorage.getItem("pff_daysToSubmit");
  }
  if (pageUrlPath === '/hcp-e2e-journey-v07/edit-incomplete-filled-form-saved' || pageUrlPath === 'hcp-e2e-journey-v07/check-sr1-form-prefilled') {
    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpv07PatientFullName")) PatientFullName.innerHTML = localStorage.getItem("hcpv07PatientFullName");
  }
  // v08
  if (pageUrlPath === '/hcp-e2e-journey-v08/edit-incomplete-form' || pageUrlPath === '/hcp-e2e-journey-v08/edit-incomplete-form-error' || pageUrlPath === '/hcp-e2e-journey-v08/edit-incomplete-form-saved') {
    document.getElementById('fullNameHeading').innerHTML = localStorage.getItem("pff_firstName") + ' ' + localStorage.getItem("pff_surname");
    document.getElementById('daysToSubmit').innerHTML = localStorage.getItem("pff_daysToSubmit");
    document.getElementById('daysToSubmit').innerHTML = localStorage.getItem("pff_daysToSubmit");
  }
  if (pageUrlPath === '/hcp-e2e-journey-v08/edit-incomplete-filled-form-saved' || pageUrlPath === 'hcp-e2e-journey-v08/check-sr1-form-prefilled') {
    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpv08PatientFullName")) PatientFullName.innerHTML = localStorage.getItem("hcpv08PatientFullName");
  }
  // v09
  if (pageUrlPath === '/hcp-e2e-journey-v09/edit-incomplete-form' || pageUrlPath === '/hcp-e2e-journey-v09/edit-incomplete-form-error' || pageUrlPath === '/hcp-e2e-journey-v09/edit-incomplete-form-saved') {
    document.getElementById('fullNameHeading').innerHTML = localStorage.getItem("pff_firstName") + ' ' + localStorage.getItem("pff_surname");
    document.getElementById('daysToSubmit').innerHTML = localStorage.getItem("pff_daysToSubmit");
    document.getElementById('daysToSubmit').innerHTML = localStorage.getItem("pff_daysToSubmit");
  }
  if (pageUrlPath === '/hcp-e2e-journey-v09/edit-incomplete-filled-form-saved' || pageUrlPath === 'hcp-e2e-journey-v09/check-sr1-form-prefilled') {
    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpv09PatientFullName")) PatientFullName.innerHTML = localStorage.getItem("hcpv09PatientFullName");
  }

  // =========
  // Task list
  // =========

  // v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/task-list-sr1-form') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpv04PatientFullName");
  }
  // v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/task-list-sr1-form') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpv05PatientFullName");
  }
  // v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/task-list-sr1-form') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpv06PatientFullName");
  }
  // v07
  if (pageUrlPath === '/hcp-e2e-journey-v07/task-list-sr1-form') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpv07PatientFullName");
  }
  // v08
  if (pageUrlPath === '/hcp-e2e-journey-v08/task-list-sr1-form') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpv08PatientFullName");
  }
  // v09
  if (pageUrlPath === '/hcp-e2e-journey-v09/task-list-sr1-form') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpv09PatientFullName");
  }
  // mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/task-list-sr1-form') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpmvp01PatientFirstName") + ' ' + localStorage.getItem("hcpmvp01PatientLastName");
  }
  // mvp02
  // Hide/Show submit button
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/task-list-sr1-form' || pageUrlPath === '/hcp-e2e-journey-mvp02/sr1-form-sections') {
    if (counter === 17) {
      document.getElementById("submit-task-list").classList.remove('hidden');
    } else {
      //reminderTypeDiv.classList.add('hidden');
      document.getElementById("submit-task-list").classList.add('hidden');
    }
  }

  // mvp03
  // Hide/Show submit button
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/task-list-sr1-form') {
    if (counter === 17) {
      document.getElementById("submit-task-list").classList.remove('hidden');
    } else {
      document.getElementById("submit-task-list").classList.add('hidden');
    }
  }
  // Hide/Show submit section
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-sections') {
    if (counter === 4) {
      document.getElementById("check-answer-link-enabled").classList.remove('hidden');
      document.getElementById("check-answer-link-disabled").classList.add('hidden');
      document.getElementById("check-your-sr1-status-notstarted").classList.remove('hidden');
      document.getElementById("check-your-sr1-status-cannot-start").classList.add('hidden');
    } else {
      document.getElementById("check-answer-link-enabled").classList.add('hidden');
      document.getElementById("check-answer-link-disabled").classList.remove('hidden');
      document.getElementById("check-your-sr1-status-notstarted").classList.add('hidden');
      document.getElementById("check-your-sr1-status-cannot-start").classList.remove('hidden');
    }
  }
  // Progress Tag Profile
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-sections') {
    let niNo = localStorage.getItem('hcpmvp03NiNo');
    let patientaddressline1 = localStorage.getItem('hcpmvp03PatientAddressLine1');
    let patientaddresstown = localStorage.getItem('hcpmvp03PatientAddressTown');
    let PatientFirstName = localStorage.getItem('hcpmvp03PatientFirstName');
    if ((niNo != null) && (patientaddressline1 != null) && (patientaddresstown != null)) {
      document.getElementById("patientDetails-status-notstarted").classList.add('hidden');
      document.getElementById("patientDetails-status-inprogress").classList.add('hidden');
      document.getElementById("patientDetails-status-completed").classList.remove('hidden');
      document.getElementById("patientDetails-link-notstarted").classList.add('hidden');
      document.getElementById("patientDetails-link-inprogress").classList.add('hidden');
      document.getElementById("patientDetails-link-completed").classList.remove('hidden');
    } else if (PatientFirstName != null) {
      document.getElementById("patientDetails-status-notstarted").classList.add('hidden');
      document.getElementById("patientDetails-status-inprogress").classList.remove('hidden');
      document.getElementById("patientDetails-status-completed").classList.add('hidden');
      document.getElementById("patientDetails-link-notstarted").classList.add('hidden');
      document.getElementById("patientDetails-link-inprogress").classList.remove('hidden');
      document.getElementById("patientDetails-link-completed").classList.add('hidden');
    } else {
      document.getElementById("patientDetails-status-notstarted").classList.remove('hidden');
      document.getElementById("patientDetails-status-inprogress").classList.add('hidden');
      document.getElementById("patientDetails-status-completed").classList.add('hidden');
      document.getElementById("patientDetails-link-notstarted").classList.remove('hidden');
      document.getElementById("patientDetails-link-inprogress").classList.add('hidden');
      document.getElementById("patientDetails-link-completed").classList.add('hidden');
    }
  }
  // Progress Tag Diagnosis
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-sections') {
    let currentValueOfPrognosis = localStorage.getItem('hcpmvp03AwareOfPrognosis');
    let whatIsTheDiagnosis = localStorage.getItem('hcpmvp03WhatIsTheDiagnosis');
    if (currentValueOfPrognosis != null) {
      document.getElementById("patientDiagnosis-status-notstarted").classList.add('hidden');
      document.getElementById("patientDiagnosis-status-inprogress").classList.add('hidden');
      document.getElementById("patientDiagnosis-status-completed").classList.remove('hidden');
      document.getElementById("patientDiagnosis-link-notstarted").classList.add('hidden');
      document.getElementById("patientDiagnosis-link-inprogress").classList.add('hidden');
      document.getElementById("patientDiagnosis-link-completed").classList.remove('hidden');
    } else if (whatIsTheDiagnosis != null) {
      document.getElementById("patientDiagnosis-status-notstarted").classList.add('hidden');
      document.getElementById("patientDiagnosis-status-inprogress").classList.remove('hidden');
      document.getElementById("patientDiagnosis-status-completed").classList.add('hidden');
      document.getElementById("patientDiagnosis-link-notstarted").classList.add('hidden');
      document.getElementById("patientDiagnosis-link-inprogress").classList.remove('hidden');
      document.getElementById("patientDiagnosis-link-completed").classList.add('hidden');
    } else {
      document.getElementById("patientDiagnosis-status-notstarted").classList.remove('hidden');
      document.getElementById("patientDiagnosis-status-inprogress").classList.add('hidden');
      document.getElementById("patientDiagnosis-status-completed").classList.add('hidden');
      document.getElementById("patientDiagnosis-link-notstarted").classList.remove('hidden');
      document.getElementById("patientDiagnosis-link-inprogress").classList.add('hidden');
      document.getElementById("patientDiagnosis-link-completed").classList.add('hidden');
    }
  }
  // Progress Tag Clinical features and treatment
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-sections') {
    let treatment = localStorage.getItem('hcpmvp03Treatment');
    let detailsOfClinicalFeatures = localStorage.getItem('hcpmvp03DetailsOfClinicalFeatures');
    if (treatment != null) {
      document.getElementById("ClinicalFeatTreatment-status-notstarted").classList.add('hidden');
      document.getElementById("ClinicalFeatTreatment-status-inprogress").classList.add('hidden');
      document.getElementById("ClinicalFeatTreatment-status-completed").classList.remove('hidden');
      document.getElementById("ClinicalFeatTreatment-link-notstarted").classList.add('hidden');
      document.getElementById("ClinicalFeatTreatment-link-inprogress").classList.add('hidden');
      document.getElementById("ClinicalFeatTreatment-link-completed").classList.remove('hidden');
    } else if (detailsOfClinicalFeatures != null) {
      document.getElementById("ClinicalFeatTreatment-status-notstarted").classList.add('hidden');
      document.getElementById("ClinicalFeatTreatment-status-inprogress").classList.remove('hidden');
      document.getElementById("ClinicalFeatTreatment-status-completed").classList.add('hidden');
      document.getElementById("ClinicalFeatTreatment-link-notstarted").classList.add('hidden');
      document.getElementById("ClinicalFeatTreatment-link-inprogress").classList.remove('hidden');
      document.getElementById("ClinicalFeatTreatment-link-completed").classList.add('hidden');
    } else {
      document.getElementById("ClinicalFeatTreatment-status-notstarted").classList.remove('hidden');
      document.getElementById("ClinicalFeatTreatment-status-inprogress").classList.add('hidden');
      document.getElementById("ClinicalFeatTreatment-status-completed").classList.add('hidden');
      document.getElementById("ClinicalFeatTreatment-link-notstarted").classList.remove('hidden');
      document.getElementById("ClinicalFeatTreatment-link-inprogress").classList.add('hidden');
      document.getElementById("ClinicalFeatTreatment-link-completed").classList.add('hidden');
    }
  }
  // Progress Tag HCP Profile
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/sr1-form-sections') {
    let organisationNameInput = localStorage.getItem('hcpmvp03OrganisationName');
    let firstNameInput = localStorage.getItem('hcpmvp03Firstname');
    if (organisationNameInput != null) {
      document.getElementById("yourDetails-status-notstarted").classList.add('hidden');
      document.getElementById("yourDetails-status-inprogress").classList.add('hidden');
      document.getElementById("yourDetails-status-completed").classList.remove('hidden');
      document.getElementById("yourDetails-link-notstarted").classList.add('hidden');
      document.getElementById("yourDetails-link-inprogress").classList.add('hidden');
      document.getElementById("yourDetails-link-completed").classList.remove('hidden');
    } else if (firstNameInput != null) {
      document.getElementById("yourDetails-status-notstarted").classList.add('hidden');
      document.getElementById("yourDetails-status-inprogress").classList.remove('hidden');
      document.getElementById("yourDetails-status-completed").classList.add('hidden');
      document.getElementById("yourDetails-link-notstarted").classList.add('hidden');
      document.getElementById("yourDetails-link-inprogress").classList.remove('hidden');
      document.getElementById("yourDetails-link-completed").classList.add('hidden');
    } else {
      document.getElementById("yourDetails-status-notstarted").classList.remove('hidden');
      document.getElementById("yourDetails-status-inprogress").classList.add('hidden');
      document.getElementById("yourDetails-status-completed").classList.add('hidden');
      document.getElementById("yourDetails-link-notstarted").classList.remove('hidden');
      document.getElementById("yourDetails-link-inprogress").classList.add('hidden');
      document.getElementById("yourDetails-link-completed").classList.add('hidden');
    }
  }

  // =================
  // Check your answer
  // =================

  // v01
  if (pageUrlPath === '/hcp-e2e-journey-v01/check-sr1-form') {

    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpv01PatientFullName")) PatientFullName.innerHTML = localStorage.getItem("hcpv01PatientFullName");

    let dob = document.getElementById('dob');
    if (localStorage.getItem("hcpv01DobDay") || localStorage.getItem("hcpv01DobMonth") || localStorage.getItem("hcpv01DobYear")) dob.innerHTML = localStorage.getItem("hcpv01DobDay") + "/" + localStorage.getItem("hcpv01DobMonth") + "/" + localStorage.getItem("hcpv01DobYear");

    let patientaddressline1 = document.getElementById('patientaddressline1');
    if (localStorage.getItem("hcpv01PatientAddressLine1")) patientaddressline1.innerHTML = localStorage.getItem("hcpv01PatientAddressLine1");

    let patientaddressline2 = document.getElementById('patientaddressline2');
    if (localStorage.getItem("hcpv01PatientAddressLine2")) patientaddressline2.innerHTML = localStorage.getItem("hcpv01PatientAddressLine2");

    let patientaddresstown = document.getElementById('patientaddresstown');
    if (localStorage.getItem("hcpv01PatientAddressTown")) patientaddresstown.innerHTML = localStorage.getItem("hcpv01PatientAddressTown");

    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpv01PatientPostcode")) patientPostcode.innerHTML = localStorage.getItem("hcpv01PatientPostcode");

    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpv01NiNo")) niNo.innerHTML = localStorage.getItem("hcpv01NiNo");

    let dateofSpecialRules = document.getElementById('dateofSpecialRules');
    if (localStorage.getItem("hcpv01DateofSpecialRulesDay") || localStorage.getItem("hcpv01DateofSpecialRulesMonth") || localStorage.getItem("hcpv01DateofSpecialRulesYear")) dateofSpecialRules.innerHTML = localStorage.getItem("hcpv01DateofSpecialRulesDay") + "/" + localStorage.getItem("hcpv01DateofSpecialRulesMonth") + "/" + localStorage.getItem("hcpv01DateofSpecialRulesYear");

    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    if (localStorage.getItem("hcpv01WhatIsTheDiagnosis")) whatIsTheDiagnosis.innerHTML = localStorage.getItem("hcpv01WhatIsTheDiagnosis");

    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    if (localStorage.getItem("hcpv01OtherRelevantDiagnosis")) otherRelevantDiagnosis.innerHTML = localStorage.getItem("hcpv01OtherRelevantDiagnosis");

    let awareOfDiagnosis = document.getElementById('awareOfDiagnosis');
    if (localStorage.getItem("hcpv01AwareOfDiagnosis")) awareOfDiagnosis.innerHTML = localStorage.getItem("hcpv01AwareOfDiagnosis");

    let awareOfPrognosis = document.getElementById('awareOfPrognosis');
    if (localStorage.getItem("hcpv01AwareOfPrognosis")) awareOfPrognosis.innerHTML = localStorage.getItem("hcpv01AwareOfPrognosis");

    let dateofDiagnosis = document.getElementById('dateofDiagnosis');
    if (localStorage.getItem("hcpv01DodDay") || localStorage.getItem("hcpv01DodMonth") || localStorage.getItem("hcpv01DodYear")) dateofDiagnosis.innerHTML = localStorage.getItem("hcpv01DodDay") + "/" + localStorage.getItem("hcpv01DodMonth") + "/" + localStorage.getItem("hcpv01DodYear");

    let clinicalFeatures = document.getElementById('clinicalFeatures');
    if (localStorage.getItem("hcpv01DetailsOfClinicalFeatures")) clinicalFeatures.innerHTML = localStorage.getItem("hcpv01DetailsOfClinicalFeatures");

    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv01Treatment")) treatment.innerHTML = localStorage.getItem("hcpv01Treatment");

    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let mobile = document.getElementById('mobile');

    let role = document.getElementById('role');
    if (localStorage.getItem("hcpv01Role")) role.innerHTML = localStorage.getItem("hcpv01Role");

    let yourName = document.getElementById('yourName');
    if (localStorage.getItem("hcpv01Fullname")) yourName.innerHTML = localStorage.getItem("hcpv01Fullname");

    let professionalRegNum = document.getElementById('professionalRegNum');
    if (localStorage.getItem("hcpv01ProfessionalRegistrationNumber")) professionalRegNum.innerHTML = localStorage.getItem("hcpv01ProfessionalRegistrationNumber");

    if (localStorage.getItem("hcpv01OrganisationName")) organisationName.innerHTML = localStorage.getItem("hcpv01OrganisationName");
    if (localStorage.getItem("hcpv01OrganisationAddressLine1")) organisationAddressLine1.innerHTML = localStorage.getItem("hcpv01OrganisationAddressLine1");
    if (localStorage.getItem("hcpv01OrganisationAddressLine2")) organisationAddressLine2.innerHTML = localStorage.getItem("hcpv01OrganisationAddressLine2");
    if (localStorage.getItem("hcpv01TownOrCity")) organisationTownCity.innerHTML = localStorage.getItem("hcpv01TownOrCity");
    if (localStorage.getItem("hcpv01Postcode")) organisationPostcode.innerHTML = localStorage.getItem("hcpv01Postcode");
    if (localStorage.getItem("hcpv01MobileNumber")) mobile.innerHTML = localStorage.getItem("hcpv01MobileNumber");
  }

  // v02
  if (pageUrlPath === '/hcp-e2e-journey-v02/check-sr1-form') {

    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpv02PatientFullName")) PatientFullName.innerHTML = localStorage.getItem("hcpv02PatientFullName");

    let dob = document.getElementById('dob');
    if (localStorage.getItem("hcpv02DobDay") || localStorage.getItem("hcpv02DobMonth") || localStorage.getItem("hcpv02DobYear")) dob.innerHTML = localStorage.getItem("hcpv02DobDay") + "/" + localStorage.getItem("hcpv02DobMonth") + "/" + localStorage.getItem("hcpv02DobYear");

    let patientaddressline1 = document.getElementById('patientaddressline1');
    if (localStorage.getItem("hcpv02PatientAddress")) patientaddressline1.innerHTML = localStorage.getItem("hcpv02PatientAddress");

    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpv02PatientPostcode")) patientPostcode.innerHTML = localStorage.getItem("hcpv02PatientPostcode");

    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpv02NiNo")) niNo.innerHTML = localStorage.getItem("hcpv02NiNo");

    let dateofSpecialRules = document.getElementById('dateofSpecialRules');
    if (localStorage.getItem("hcpv02DateofSpecialRulesDay") || localStorage.getItem("hcpv02DateofSpecialRulesMonth") || localStorage.getItem("hcpv02DateofSpecialRulesYear")) dateofSpecialRules.innerHTML = localStorage.getItem("hcpv02DateofSpecialRulesDay") + "/" + localStorage.getItem("hcpv02DateofSpecialRulesMonth") + "/" + localStorage.getItem("hcpv02DateofSpecialRulesYear");

    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    if (localStorage.getItem("hcpv02WhatIsTheDiagnosis")) whatIsTheDiagnosis.innerHTML = localStorage.getItem("hcpv02WhatIsTheDiagnosis");

    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    if (localStorage.getItem("hcpv02OtherRelevantDiagnosis")) otherRelevantDiagnosis.innerHTML = localStorage.getItem("hcpv02OtherRelevantDiagnosis");

    let awareOfDiagnosis = document.getElementById('awareOfDiagnosis');
    if (localStorage.getItem("hcpv02AwareOfDiagnosis")) awareOfDiagnosis.innerHTML = localStorage.getItem("hcpv02AwareOfDiagnosis");

    let awareOfPrognosis = document.getElementById('awareOfPrognosis');
    if (localStorage.getItem("hcpv02AwareOfPrognosis")) awareOfPrognosis.innerHTML = localStorage.getItem("hcpv02AwareOfPrognosis");

    let dateofDiagnosis = document.getElementById('dateofDiagnosis');
    if (localStorage.getItem("hcpv02DodDay") || localStorage.getItem("hcpv02DodMonth") || localStorage.getItem("hcpv02DodYear")) dateofDiagnosis.innerHTML = localStorage.getItem("hcpv02DodDay") + "/" + localStorage.getItem("hcpv02DodMonth") + "/" + localStorage.getItem("hcpv02DodYear");

    let clinicalFeatures = document.getElementById('clinicalFeatures');
    if (localStorage.getItem("hcpv02DetailsOfClinicalFeatures")) clinicalFeatures.innerHTML = localStorage.getItem("hcpv02DetailsOfClinicalFeatures");

    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv02Treatment")) treatment.innerHTML = localStorage.getItem("hcpv02Treatment");

    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let mobile = document.getElementById('mobile');

    let role = document.getElementById('role');
    if (localStorage.getItem("hcpv02Role")) role.innerHTML = localStorage.getItem("hcpv02Role");

    let yourName = document.getElementById('yourName');
    if (localStorage.getItem("hcpv02Fullname")) yourName.innerHTML = localStorage.getItem("hcpv02Fullname");

    let professionalRegNum = document.getElementById('professionalRegNum');
    if (localStorage.getItem("hcpv02ProfessionalRegistrationNumber")) professionalRegNum.innerHTML = localStorage.getItem("hcpv02ProfessionalRegistrationNumber");

    if (localStorage.getItem("hcpv02OrganisationName")) organisationName.innerHTML = localStorage.getItem("hcpv02OrganisationName");
    if (localStorage.getItem("hcpv02OrganisationAddressLine1")) organisationAddressLine1.innerHTML = localStorage.getItem("hcpv02OrganisationAddressLine1");
    if (localStorage.getItem("hcpv02OrganisationAddressLine2")) organisationAddressLine2.innerHTML = localStorage.getItem("hcpv02OrganisationAddressLine2");
    if (localStorage.getItem("hcpv02TownOrCity")) organisationTownCity.innerHTML = localStorage.getItem("hcpv02TownOrCity");
    if (localStorage.getItem("hcpv02Postcode")) organisationPostcode.innerHTML = localStorage.getItem("hcpv02Postcode");
    if (localStorage.getItem("hcpv02MobileNumber")) mobile.innerHTML = localStorage.getItem("hcpv02MobileNumber");
  }

  // v03
  if (pageUrlPath === '/hcp-e2e-journey-v03/check-sr1-form') {

    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpv03PatientFullName")) PatientFullName.innerHTML = localStorage.getItem("hcpv03PatientFullName");

    let dob = document.getElementById('dob');
    if (localStorage.getItem("hcpv03DobDay") || localStorage.getItem("hcpv03DobMonth") || localStorage.getItem("hcpv03DobYear")) dob.innerHTML = localStorage.getItem("hcpv03DobDay") + "/" + localStorage.getItem("hcpv03DobMonth") + "/" + localStorage.getItem("hcpv03DobYear");

    let patientaddressline1 = document.getElementById('patientaddressline1');
    if (localStorage.getItem("hcpv03PatientAddress")) patientaddressline1.innerHTML = localStorage.getItem("hcpv03PatientAddress");

    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpv03PatientPostcode")) patientPostcode.innerHTML = localStorage.getItem("hcpv03PatientPostcode");

    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpv03NiNo")) niNo.innerHTML = localStorage.getItem("hcpv03NiNo");

    let dateofSpecialRules = document.getElementById('dateofSpecialRules');
    if (localStorage.getItem("hcpv03DateofSpecialRulesDay") || localStorage.getItem("hcpv03DateofSpecialRulesMonth") || localStorage.getItem("hcpv03DateofSpecialRulesYear")) dateofSpecialRules.innerHTML = localStorage.getItem("hcpv03DateofSpecialRulesDay") + "/" + localStorage.getItem("hcpv03DateofSpecialRulesMonth") + "/" + localStorage.getItem("hcpv03DateofSpecialRulesYear");

    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    if (localStorage.getItem("hcpv03WhatIsTheDiagnosis")) whatIsTheDiagnosis.innerHTML = localStorage.getItem("hcpv03WhatIsTheDiagnosis");

    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    if (localStorage.getItem("hcpv03OtherRelevantDiagnosis")) otherRelevantDiagnosis.innerHTML = localStorage.getItem("hcpv03OtherRelevantDiagnosis");

    let awareOfDiagnosis = document.getElementById('awareOfDiagnosis');
    if (localStorage.getItem("hcpv03AwareOfDiagnosis")) awareOfDiagnosis.innerHTML = localStorage.getItem("hcpv03AwareOfDiagnosis");

    let awareOfPrognosis = document.getElementById('awareOfPrognosis');
    if (localStorage.getItem("hcpv03AwareOfPrognosis")) awareOfPrognosis.innerHTML = localStorage.getItem("hcpv03AwareOfPrognosis");

    let dateofDiagnosis = document.getElementById('dateofDiagnosis');
    if (localStorage.getItem("hcpv03DodDay") || localStorage.getItem("hcpv03DodMonth") || localStorage.getItem("hcpv03DodYear")) dateofDiagnosis.innerHTML = localStorage.getItem("hcpv03DodDay") + "/" + localStorage.getItem("hcpv03DodMonth") + "/" + localStorage.getItem("hcpv03DodYear");

    let clinicalFeatures = document.getElementById('clinicalFeatures');
    if (localStorage.getItem("hcpv03DetailsOfClinicalFeatures")) clinicalFeatures.innerHTML = localStorage.getItem("hcpv03DetailsOfClinicalFeatures");

    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv03Treatment")) treatment.innerHTML = localStorage.getItem("hcpv03Treatment");

    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let mobile = document.getElementById('mobile');

    let role = document.getElementById('role');
    if (localStorage.getItem("hcpv03Role")) role.innerHTML = localStorage.getItem("hcpv03Role");

    let yourName = document.getElementById('yourName');
    if (localStorage.getItem("hcpv03Fullname")) yourName.innerHTML = localStorage.getItem("hcpv03Fullname");

    let professionalRegNum = document.getElementById('professionalRegNum');
    if (localStorage.getItem("hcpv03ProfessionalRegistrationNumber")) professionalRegNum.innerHTML = localStorage.getItem("hcpv03ProfessionalRegistrationNumber");

    if (localStorage.getItem("hcpv03OrganisationName")) organisationName.innerHTML = localStorage.getItem("hcpv03OrganisationName");
    if (localStorage.getItem("hcpv03OrganisationAddressLine1")) organisationAddressLine1.innerHTML = localStorage.getItem("hcpv03OrganisationAddressLine1");
    if (localStorage.getItem("hcpv03OrganisationAddressLine2")) organisationAddressLine2.innerHTML = localStorage.getItem("hcpv03OrganisationAddressLine2");
    if (localStorage.getItem("hcpv03TownOrCity")) organisationTownCity.innerHTML = localStorage.getItem("hcpv03TownOrCity");
    if (localStorage.getItem("hcpv03Postcode")) organisationPostcode.innerHTML = localStorage.getItem("hcpv03Postcode");
    if (localStorage.getItem("hcpv03MobileNumber")) mobile.innerHTML = localStorage.getItem("hcpv03MobileNumber");
  }

  // v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/check-sr1-form' || pageUrlPath === '/hcp-e2e-journey-v04/check-sr1-form-finalised' || pageUrlPath === '/hcp-e2e-journey-v04/edit-incomplete-form-saved' || pageUrlPath === '/hcp-e2e-journey-v04/confirmation-page' || pageUrlPath === 'hcp-e2e-journey-v04/task-list-sr1-form-saved' || pageUrlPath === 'hcp-e2e-journey-v04/task-list-sr1-form') {
    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpv04PatientFullName")) PatientFullName.innerHTML = localStorage.getItem("hcpv04PatientFullName");

    let dob = document.getElementById('dob');
    if (localStorage.getItem("hcpv04DobDay") || localStorage.getItem("hcpv04DobMonth") || localStorage.getItem("hcpv04DobYear")) dob.innerHTML = localStorage.getItem("hcpv04DobDay") + "/" + localStorage.getItem("hcpv04DobMonth") + "/" + localStorage.getItem("hcpv04DobYear");

    let patientaddressline1 = document.getElementById('patientaddressline1');
    if (localStorage.getItem("hcpv04PatientAddressLine1")) patientaddressline1.innerHTML = localStorage.getItem("hcpv04PatientAddressLine1");

    let patientaddressline2 = document.getElementById('patientaddressline2');
    if (localStorage.getItem("hcpv04PatientAddressLine2")) patientaddressline2.innerHTML = localStorage.getItem("hcpv04PatientAddressLine2");

    let patientaddresstown = document.getElementById('patientaddresstown');
    if (localStorage.getItem("hcpv04PatientAddressTown")) patientaddresstown.innerHTML = localStorage.getItem("hcpv04PatientAddressTown");

    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpv04PatientPostcode")) patientPostcode.innerHTML = localStorage.getItem("hcpv04PatientPostcode");

    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpv04NiNo")) niNo.innerHTML = localStorage.getItem("hcpv04NiNo");

    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    if (localStorage.getItem("hcpv04WhatIsTheDiagnosis")) whatIsTheDiagnosis.innerHTML = localStorage.getItem("hcpv04WhatIsTheDiagnosis");

    let dateofSpecialRules = document.getElementById('dateofSpecialRules');
    if (localStorage.getItem("hcpv04DateofSpecialRulesDay") || localStorage.getItem("hcpv04DateofSpecialRulesMonth") || localStorage.getItem("hcpv04DateofSpecialRulesYear")) dateofSpecialRules.innerHTML = localStorage.getItem("hcpv04DateofSpecialRulesDay") + "/" + localStorage.getItem("hcpv04DateofSpecialRulesMonth") + "/" + localStorage.getItem("hcpv04DateofSpecialRulesYear");

    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    if (localStorage.getItem("hcpv04OtherRelevantDiagnosis")) otherRelevantDiagnosis.innerHTML = localStorage.getItem("hcpv04OtherRelevantDiagnosis");

    let patientAwareOfDiagnosis = localStorage.getItem('hcpv04AwareOfDiagnosis');
    if (patientAwareOfDiagnosis === 'true') {
      awareOfDiagnosis.innerHTML = 'Yes';
    }
    if (patientAwareOfDiagnosis === 'false') {
      awareOfDiagnosis.innerHTML = 'No';
    }

    let patientAwareOfPrognosis = localStorage.getItem('hcpv04AwareOfPrognosis');
    if (patientAwareOfPrognosis === 'true') {
      awareOfPrognosis.innerHTML = 'Yes';
    }
    if (patientAwareOfPrognosis === 'false') {
      awareOfPrognosis.innerHTML = 'No';
    }

    let dateofDiagnosis = document.getElementById('dateofDiagnosis');
    if (localStorage.getItem("hcpv04DodDay") || localStorage.getItem("hcpv04DodMonth") || localStorage.getItem("hcpv04DodYear")) dateofDiagnosis.innerHTML = localStorage.getItem("hcpv04DodDay") + "/" + localStorage.getItem("hcpv04DodMonth") + "/" + localStorage.getItem("hcpv04DodYear");

    let clinicalFeatures = document.getElementById('clinicalFeatures');
    if (localStorage.getItem("hcpv04DetailsOfClinicalFeatures")) clinicalFeatures.innerHTML = localStorage.getItem("hcpv04DetailsOfClinicalFeatures");

    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv04Treatment")) treatment.innerHTML = localStorage.getItem("hcpv04Treatment");

    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let mobile = document.getElementById('mobile');

    let role = document.getElementById('role');
    if (localStorage.getItem("hcpv04Role")) role.innerHTML = localStorage.getItem("hcpv04Role");

    let yourName = document.getElementById('yourName');
    if (localStorage.getItem("hcpv04Fullname")) yourName.innerHTML = localStorage.getItem("hcpv04Fullname");

    let professionalRegNum = document.getElementById('professionalRegNum');
    if (localStorage.getItem("hcpv04ProfessionalRegistrationNumber")) professionalRegNum.innerHTML = localStorage.getItem("hcpv04ProfessionalRegistrationNumber");

    if (localStorage.getItem("hcpv04OrganisationName")) organisationName.innerHTML = localStorage.getItem("hcpv04OrganisationName");
    if (localStorage.getItem("hcpv04OrganisationAddressLine1")) organisationAddressLine1.innerHTML = localStorage.getItem("hcpv04OrganisationAddressLine1");
    if (localStorage.getItem("hcpv04OrganisationAddressLine2")) organisationAddressLine2.innerHTML = localStorage.getItem("hcpv04OrganisationAddressLine2");
    if (localStorage.getItem("hcpv04TownOrCity")) organisationTownCity.innerHTML = localStorage.getItem("hcpv04TownOrCity");
    if (localStorage.getItem("hcpv04Postcode")) organisationPostcode.innerHTML = localStorage.getItem("hcpv04Postcode");
    if (localStorage.getItem("hcpv04MobileNumber")) mobile.innerHTML = localStorage.getItem("hcpv04MobileNumber");
  }

  // v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/check-sr1-form' || pageUrlPath === '/hcp-e2e-journey-v05/check-sr1-form-finalised' || pageUrlPath === '/hcp-e2e-journey-v05/edit-incomplete-form-saved' || pageUrlPath === '/hcp-e2e-journey-v05/confirmation-page' || pageUrlPath === 'hcp-e2e-journey-v05/task-list-sr1-form-saved') {
    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpv05PatientFullName")) PatientFullName.innerHTML = localStorage.getItem("hcpv05PatientFullName");

    let dob = document.getElementById('dob');
    if (localStorage.getItem("hcpv05DobDay") || localStorage.getItem("hcpv05DobMonth") || localStorage.getItem("hcpv05DobYear")) dob.innerHTML = localStorage.getItem("hcpv05DobDay") + "/" + localStorage.getItem("hcpv05DobMonth") + "/" + localStorage.getItem("hcpv05DobYear");

    let patientaddressline1 = document.getElementById('patientaddressline1');
    if (localStorage.getItem("hcpv05PatientAddressLine1")) patientaddressline1.innerHTML = localStorage.getItem("hcpv05PatientAddressLine1");

    let patientaddressline2 = document.getElementById('patientaddressline2');
    if (localStorage.getItem("hcpv05PatientAddressLine2")) patientaddressline2.innerHTML = localStorage.getItem("hcpv05PatientAddressLine2");

    let patientaddresstown = document.getElementById('patientaddresstown');
    if (localStorage.getItem("hcpv05PatientAddressTown")) patientaddresstown.innerHTML = localStorage.getItem("hcpv05PatientAddressTown");

    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpv05PatientPostcode")) patientPostcode.innerHTML = localStorage.getItem("hcpv05PatientPostcode");

    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpv05NiNo")) niNo.innerHTML = localStorage.getItem("hcpv05NiNo");

    let dateofSpecialRules = document.getElementById('dateofSpecialRules');
    if (localStorage.getItem("hcpv05DateofSpecialRulesDay") || localStorage.getItem("hcpv05DateofSpecialRulesMonth") || localStorage.getItem("hcpv05DateofSpecialRulesYear")) dateofSpecialRules.innerHTML = localStorage.getItem("hcpv05DateofSpecialRulesDay") + "/" + localStorage.getItem("hcpv05DateofSpecialRulesMonth") + "/" + localStorage.getItem("hcpv05DateofSpecialRulesYear");

    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    if (localStorage.getItem("hcpv05WhatIsTheDiagnosis")) whatIsTheDiagnosis.innerHTML = localStorage.getItem("hcpv05WhatIsTheDiagnosis");

    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    if (localStorage.getItem("hcpv05OtherRelevantDiagnosis")) otherRelevantDiagnosis.innerHTML = localStorage.getItem("hcpv05OtherRelevantDiagnosis");

    let awareOfDiagnosis = document.getElementById('awareOfDiagnosis');
    if (localStorage.getItem("hcpv05AwareOfDiagnosis")) awareOfDiagnosis.innerHTML = localStorage.getItem("hcpv05AwareOfDiagnosis");

    let awareOfPrognosis = document.getElementById('awareOfPrognosis');
    if (localStorage.getItem("hcpv05AwareOfPrognosis")) awareOfPrognosis.innerHTML = localStorage.getItem("hcpv05AwareOfPrognosis");

    let dateofDiagnosis = document.getElementById('dateofDiagnosis');
    if (localStorage.getItem("hcpv05DodDay") || llocalStorage.getItem("hcpv05DodMonth") || localStorage.getItem("hcpv05DodYear")) dateofDiagnosis.innerHTML = localStorage.getItem("hcpv05DodDay") + "/" + localStorage.getItem("hcpv05DodMonth") + "/" + localStorage.getItem("hcpv05DodYear");

    let clinicalFeatures = document.getElementById('clinicalFeatures');
    if (localStorage.getItem("hcpv05DetailsOfClinicalFeatures")) clinicalFeatures.innerHTML = localStorage.getItem("hcpv05DetailsOfClinicalFeatures");

    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv05Treatment")) treatment.innerHTML = localStorage.getItem("hcpv05Treatment");

    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let mobile = document.getElementById('mobile');

    let role = document.getElementById('role');
    if (localStorage.getItem("hcpv05Role")) role.innerHTML = localStorage.getItem("hcpv05Role");

    let yourName = document.getElementById('yourName');
    if (localStorage.getItem("hcpv05Fullname")) yourName.innerHTML = localStorage.getItem("hcpv05Fullname");

    let professionalRegNum = document.getElementById('professionalRegNum');
    if (localStorage.getItem("hcpv05ProfessionalRegistrationNumber")) professionalRegNum.innerHTML = localStorage.getItem("hcpv05ProfessionalRegistrationNumber");

    if (localStorage.getItem("hcpv05OrganisationName")) organisationName.innerHTML = localStorage.getItem("hcpv05OrganisationName");
    if (localStorage.getItem("hcpv05OrganisationAddressLine1")) organisationAddressLine1.innerHTML = localStorage.getItem("hcpv05OrganisationAddressLine1");
    if (localStorage.getItem("hcpv05OrganisationAddressLine2")) organisationAddressLine2.innerHTML = localStorage.getItem("hcpv05OrganisationAddressLine2");
    if (localStorage.getItem("hcpv05TownOrCity")) organisationTownCity.innerHTML = localStorage.getItem("hcpv05TownOrCity");
    if (localStorage.getItem("hcpv05Postcode")) organisationPostcode.innerHTML = localStorage.getItem("hcpv05Postcode");
    if (localStorage.getItem("hcpv05MobileNumber")) mobile.innerHTML = localStorage.getItem("hcpv05MobileNumber");
  }

  // v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/check-sr1-form' || pageUrlPath === '/hcp-e2e-journey-v06/check-sr1-form-finalised' || pageUrlPath === '/hcp-e2e-journey-v06/edit-incomplete-form-saved' || pageUrlPath === '/hcp-e2e-journey-v06/confirmation-page' || pageUrlPath === 'hcp-e2e-journey-v06/task-list-sr1-form-saved') {
    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpv06PatientFullName")) PatientFullName.innerHTML = localStorage.getItem("hcpv06PatientFullName");

    let dob = document.getElementById('dob');
    if (localStorage.getItem("hcpv06DobDay") || localStorage.getItem("hcpv06DobMonth") || localStorage.getItem("hcpv06DobYear")) dob.innerHTML = localStorage.getItem("hcpv06DobDay") + "/" + localStorage.getItem("hcpv06DobMonth") + "/" + localStorage.getItem("hcpv06DobYear");

    let patientaddressline1 = document.getElementById('patientaddressline1');
    if (localStorage.getItem("hcpv06PatientAddressLine1")) patientaddressline1.innerHTML = localStorage.getItem("hcpv06PatientAddressLine1");

    let patientaddressline2 = document.getElementById('patientaddressline2');
    if (localStorage.getItem("hcpv06PatientAddressLine2")) patientaddressline2.innerHTML = localStorage.getItem("hcpv06PatientAddressLine2");

    let patientaddresstown = document.getElementById('patientaddresstown');
    if (localStorage.getItem("hcpv06PatientAddressTown")) patientaddresstown.innerHTML = localStorage.getItem("hcpv06PatientAddressTown");

    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpv06PatientPostcode")) patientPostcode.innerHTML = localStorage.getItem("hcpv06PatientPostcode");

    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpv06NiNo")) niNo.innerHTML = localStorage.getItem("hcpv06NiNo");

    let dateofSpecialRules = document.getElementById('dateofSpecialRules');
    if (localStorage.getItem("hcpv06DateofSpecialRulesDay") || localStorage.getItem("hcpv06DateofSpecialRulesMonth") || localStorage.getItem("hcpv06DateofSpecialRulesYear")) dateofSpecialRules.innerHTML = localStorage.getItem("hcpv06DateofSpecialRulesDay") + "/" + localStorage.getItem("hcpv06DateofSpecialRulesMonth") + "/" + localStorage.getItem("hcpv06DateofSpecialRulesYear");

    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    if (localStorage.getItem("hcpv06WhatIsTheDiagnosis")) whatIsTheDiagnosis.innerHTML = localStorage.getItem("hcpv06WhatIsTheDiagnosis");

    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    if (localStorage.getItem("hcpv06OtherRelevantDiagnosis")) otherRelevantDiagnosis.innerHTML = localStorage.getItem("hcpv06OtherRelevantDiagnosis");

    let patientAwareOfDiagnosis = localStorage.getItem('hcpv06AwareOfDiagnosis');
    if (patientAwareOfDiagnosis === 'true') {
      awareOfDiagnosis.innerHTML = 'Yes';
    }
    if (patientAwareOfDiagnosis === 'false') {
      awareOfDiagnosis.innerHTML = 'No';
    }

    let patientAwareOfPrognosis = localStorage.getItem('hcpv06AwareOfPrognosis');
    if (patientAwareOfPrognosis === 'true') {
      awareOfPrognosis.innerHTML = 'Yes';
    }
    if (patientAwareOfPrognosis === 'false') {
      awareOfPrognosis.innerHTML = 'No';
    }

    let dateofDiagnosis = document.getElementById('dateofDiagnosis');
    if (localStorage.getItem("hcpv06DodDay") || localStorage.getItem("hcpv06DodMonth") || localStorage.getItem("hcpv06DodYear")) dateofDiagnosis.innerHTML = localStorage.getItem("hcpv06DodDay") + "/" + localStorage.getItem("hcpv06DodMonth") + "/" + localStorage.getItem("hcpv06DodYear");

    let clinicalFeatures = document.getElementById('clinicalFeatures');
    if (localStorage.getItem("hcpv06DetailsOfClinicalFeatures")) clinicalFeatures.innerHTML = localStorage.getItem("hcpv06DetailsOfClinicalFeatures");

    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv06Treatment")) treatment.innerHTML = localStorage.getItem("hcpv06Treatment");

    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let mobile = document.getElementById('mobile');

    let role = document.getElementById('role');
    if (localStorage.getItem("hcpv06Role")) role.innerHTML = localStorage.getItem("hcpv06Role");

    let yourName = document.getElementById('yourName');
    if (localStorage.getItem("hcpv06Fullname")) yourName.innerHTML = localStorage.getItem("hcpv06Fullname");

    let professionalRegNum = document.getElementById('professionalRegNum');
    if (localStorage.getItem("hcpv06ProfessionalRegistrationNumber")) professionalRegNum.innerHTML = localStorage.getItem("hcpv06ProfessionalRegistrationNumber");

    if (localStorage.getItem("hcpv06OrganisationName")) organisationName.innerHTML = localStorage.getItem("hcpv06OrganisationName");
    if (localStorage.getItem("hcpv06OrganisationAddressLine1")) organisationAddressLine1.innerHTML = localStorage.getItem("hcpv06OrganisationAddressLine1");
    if (localStorage.getItem("hcpv06OrganisationAddressLine2")) organisationAddressLine2.innerHTML = localStorage.getItem("hcpv06OrganisationAddressLine2");
    if (localStorage.getItem("hcpv06TownOrCity")) organisationTownCity.innerHTML = localStorage.getItem("hcpv06TownOrCity");
    if (localStorage.getItem("hcpv06Postcode")) organisationPostcode.innerHTML = localStorage.getItem("hcpv06Postcode");
    if (localStorage.getItem("hcpv06MobileNumber")) mobile.innerHTML = localStorage.getItem("hcpv06MobileNumber");
  }

  // v07
  if (pageUrlPath === '/hcp-e2e-journey-v07/check-sr1-form' || pageUrlPath === '/hcp-e2e-journey-v07/check-sr1-form-prefilled' || pageUrlPath === '/hcp-e2e-journey-v07/check-sr1-form-finalised' || pageUrlPath === '/hcp-e2e-journey-v07/edit-incomplete-form-saved' || pageUrlPath === '/hcp-e2e-journey-v07/confirmation-page' || pageUrlPath === 'hcp-e2e-journey-v07/task-list-sr1-form-saved') {
    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpv07PatientFullName")) PatientFullName.innerHTML = localStorage.getItem("hcpv07PatientFullName");

    let dob = document.getElementById('dob');
    if (localStorage.getItem("hcpv07DobDay") || localStorage.getItem("hcpv07DobMonth") || localStorage.getItem("hcpv07DobYear")) dob.innerHTML = localStorage.getItem("hcpv07DobDay") + "/" + localStorage.getItem("hcpv07DobMonth") + "/" + localStorage.getItem("hcpv07DobYear");

    let patientaddressline1 = document.getElementById('patientaddressline1');
    if (localStorage.getItem("hcpv07PatientAddressLine1")) patientaddressline1.innerHTML = localStorage.getItem("hcpv07PatientAddressLine1");

    let patientaddressline2 = document.getElementById('patientaddressline2');
    if (localStorage.getItem("hcpv07PatientAddressLine2")) patientaddressline2.innerHTML = localStorage.getItem("hcpv07PatientAddressLine2");

    let patientaddresstown = document.getElementById('patientaddresstown');
    if (localStorage.getItem("hcpv07PatientAddressTown")) patientaddresstown.innerHTML = localStorage.getItem("hcpv07PatientAddressTown");

    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpv07PatientPostcode")) patientPostcode.innerHTML = localStorage.getItem("hcpv07PatientPostcode");

    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpv07NiNo")) niNo.innerHTML = localStorage.getItem("hcpv07NiNo");

    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    if (localStorage.getItem("hcpv07WhatIsTheDiagnosis")) whatIsTheDiagnosis.innerHTML = localStorage.getItem("hcpv07WhatIsTheDiagnosis");

    let dateofSpecialRules = document.getElementById('dateofSpecialRules');
    if (localStorage.getItem("hcpv07DateofSpecialRulesDay") || localStorage.getItem("hcpv07DateofSpecialRulesMonth") || localStorage.getItem("hcpv07DateofSpecialRulesYear")) dateofSpecialRules.innerHTML = localStorage.getItem("hcpv07DateofSpecialRulesDay") + "/" + localStorage.getItem("hcpv07DateofSpecialRulesMonth") + "/" + localStorage.getItem("hcpv07DateofSpecialRulesYear");

    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    if (localStorage.getItem("hcpv07OtherRelevantDiagnosis")) otherRelevantDiagnosis.innerHTML = localStorage.getItem("hcpv07OtherRelevantDiagnosis");

    let patientAwareOfDiagnosis = localStorage.getItem('hcpv07AwareOfDiagnosis');
    if (patientAwareOfDiagnosis === 'true') {
      awareOfDiagnosis.innerHTML = 'yes';
    }
    if (patientAwareOfDiagnosis === 'false') {
      awareOfDiagnosis.innerHTML = 'no';
    }

    let patientAwareOfPrognosis = localStorage.getItem('hcpv07AwareOfPrognosis');
    if (patientAwareOfPrognosis === 'true') {
      awareOfPrognosis.innerHTML = 'yes';
    }
    if (patientAwareOfPrognosis === 'false') {
      awareOfPrognosis.innerHTML = 'no';
    }

    let dateofDiagnosis = document.getElementById('dateofDiagnosis');
    if (localStorage.getItem("hcpv07DodDay") || localStorage.getItem("hcpv07DodMonth") || localStorage.getItem("hcpv07DodYear")) dateofDiagnosis.innerHTML = localStorage.getItem("hcpv07DodDay") + "/" + localStorage.getItem("hcpv07DodMonth") + "/" + localStorage.getItem("hcpv07DodYear");

    let clinicalFeatures = document.getElementById('clinicalFeatures');
    if (localStorage.getItem("hcpv07DetailsOfClinicalFeatures")) clinicalFeatures.innerHTML = localStorage.getItem("hcpv07DetailsOfClinicalFeatures");

    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv07Treatment")) treatment.innerHTML = localStorage.getItem("hcpv07Treatment");

    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let mobile = document.getElementById('mobile');

    let role = document.getElementById('role');
    if (localStorage.getItem("hcpv07Role")) role.innerHTML = localStorage.getItem("hcpv07Role");

    let yourName = document.getElementById('yourName');
    if (localStorage.getItem("hcpv07Fullname")) yourName.innerHTML = localStorage.getItem("hcpv07Fullname");

    let professionalRegNum = document.getElementById('professionalRegNum');
    if (localStorage.getItem("hcpv07ProfessionalRegistrationNumber")) professionalRegNum.innerHTML = localStorage.getItem("hcpv07ProfessionalRegistrationNumber");

    if (localStorage.getItem("hcpv07OrganisationName")) organisationName.innerHTML = localStorage.getItem("hcpv07OrganisationName");
    if (localStorage.getItem("hcpv07OrganisationAddressLine1")) organisationAddressLine1.innerHTML = localStorage.getItem("hcpv07OrganisationAddressLine1");
    if (localStorage.getItem("hcpv07OrganisationAddressLine2")) organisationAddressLine2.innerHTML = localStorage.getItem("hcpv07OrganisationAddressLine2");
    if (localStorage.getItem("hcpv07TownOrCity")) organisationTownCity.innerHTML = localStorage.getItem("hcpv07TownOrCity");
    if (localStorage.getItem("hcpv07Postcode")) organisationPostcode.innerHTML = localStorage.getItem("hcpv07Postcode");
    if (localStorage.getItem("hcpv07MobileNumber")) mobile.innerHTML = localStorage.getItem("hcpv07MobileNumber");
  }

  // v08
  if (pageUrlPath === '/hcp-e2e-journey-v08/check-sr1-form' || pageUrlPath === '/hcp-e2e-journey-v08/check-sr1-form-finalised' || pageUrlPath === '/hcp-e2e-journey-v08/check-sr1-form-prefilled' || pageUrlPath === '/hcp-e2e-journey-v08/edit-incomplete-form-saved' || pageUrlPath === '/hcp-e2e-journey-v08/confirmation-page' || pageUrlPath === 'hcp-e2e-journey-v08/task-list-sr1-form-saved') {
    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpv08PatientFullName")) PatientFullName.innerHTML = localStorage.getItem("hcpv08PatientFullName");

    let dob = document.getElementById('dob');
    if (localStorage.getItem("hcpv08DobDay") || localStorage.getItem("hcpv08DobMonth") || localStorage.getItem("hcpv08DobYear")) dob.innerHTML = localStorage.getItem("hcpv08DobDay") + "/" + localStorage.getItem("hcpv08DobMonth") + "/" + localStorage.getItem("hcpv08DobYear");

    let patientaddressline1 = document.getElementById('patientaddressline1');
    if (localStorage.getItem("hcpv08PatientAddressLine1")) patientaddressline1.innerHTML = localStorage.getItem("hcpv08PatientAddressLine1");

    let patientaddressline2 = document.getElementById('patientaddressline2');
    if (localStorage.getItem("hcpv08PatientAddressLine2")) patientaddressline2.innerHTML = localStorage.getItem("hcpv08PatientAddressLine2");

    let patientaddresstown = document.getElementById('patientaddresstown');
    if (localStorage.getItem("hcpv08PatientAddressTown")) patientaddresstown.innerHTML = localStorage.getItem("hcpv08PatientAddressTown");

    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpv08PatientPostcode")) patientPostcode.innerHTML = localStorage.getItem("hcpv08PatientPostcode");

    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpv08NiNo")) niNo.innerHTML = localStorage.getItem("hcpv08NiNo");

    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    if (localStorage.getItem("hcpv08WhatIsTheDiagnosis")) whatIsTheDiagnosis.innerHTML = localStorage.getItem("hcpv08WhatIsTheDiagnosis");

    let dateofSpecialRules = document.getElementById('dateofSpecialRules');
    if (localStorage.getItem("hcpv08DateofSpecialRulesDay") || localStorage.getItem("hcpv08DateofSpecialRulesMonth") || localStorage.getItem("hcpv08DateofSpecialRulesYear")) dateofSpecialRules.innerHTML = localStorage.getItem("hcpv08DateofSpecialRulesDay") + "/" + localStorage.getItem("hcpv08DateofSpecialRulesMonth") + "/" + localStorage.getItem("hcpv08DateofSpecialRulesYear");

    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    if (localStorage.getItem("hcpv08OtherRelevantDiagnosis")) otherRelevantDiagnosis.innerHTML = localStorage.getItem("hcpv08OtherRelevantDiagnosis");

    let awareOfDiagnosis = document.getElementById('awareOfDiagnosis');
    if (localStorage.getItem("hcpv08AwareOfDiagnosis")) awareOfDiagnosis.innerHTML = localStorage.getItem("hcpv08AwareOfDiagnosis");

    let awareOfPrognosis = document.getElementById('awareOfPrognosis');
    if (localStorage.getItem("hcpv08AwareOfPrognosis")) awareOfPrognosis.innerHTML = localStorage.getItem("hcpv08AwareOfPrognosis");

    let dateofDiagnosis = document.getElementById('dateofDiagnosis');
    if (localStorage.getItem("hcpv08DodDay") || localStorage.getItem("hcpv08DodMonth") || localStorage.getItem("hcpv08DodYear")) dateofDiagnosis.innerHTML = localStorage.getItem("hcpv08DodDay") + "/" + localStorage.getItem("hcpv08DodMonth") + "/" + localStorage.getItem("hcpv08DodYear");

    let clinicalFeatures = document.getElementById('clinicalFeatures');
    if (localStorage.getItem("hcpv08DetailsOfClinicalFeatures")) clinicalFeatures.innerHTML = localStorage.getItem("hcpv08DetailsOfClinicalFeatures");

    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv08Treatment")) treatment.innerHTML = localStorage.getItem("hcpv08Treatment");

    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let mobile = document.getElementById('mobile');

    let role = document.getElementById('role');
    if (localStorage.getItem("hcpv08Role")) role.innerHTML = localStorage.getItem("hcpv08Role");

    let yourName = document.getElementById('yourName');
    if (localStorage.getItem("hcpv08Fullname")) yourName.innerHTML = localStorage.getItem("hcpv08Fullname");

    let professionalRegNum = document.getElementById('professionalRegNum');
    if (localStorage.getItem("hcpv08ProfessionalRegistrationNumber")) professionalRegNum.innerHTML = localStorage.getItem("hcpv08ProfessionalRegistrationNumber");

    if (localStorage.getItem("hcpv08OrganisationName")) organisationName.innerHTML = localStorage.getItem("hcpv08OrganisationName");
    if (localStorage.getItem("hcpv08OrganisationAddressLine1")) organisationAddressLine1.innerHTML = localStorage.getItem("hcpv08OrganisationAddressLine1");
    if (localStorage.getItem("hcpv08OrganisationAddressLine2")) organisationAddressLine2.innerHTML = localStorage.getItem("hcpv08OrganisationAddressLine2");
    if (localStorage.getItem("hcpv08TownOrCity")) organisationTownCity.innerHTML = localStorage.getItem("hcpv08TownOrCity");
    if (localStorage.getItem("hcpv08Postcode")) organisationPostcode.innerHTML = localStorage.getItem("hcpv08Postcode");
    if (localStorage.getItem("hcpv08MobileNumber")) mobile.innerHTML = localStorage.getItem("hcpv08MobileNumber");
  }

  // v09
  if (pageUrlPath === '/hcp-e2e-journey-v09/check-sr1-form' || pageUrlPath === '/hcp-e2e-journey-v09/check-sr1-form-finalised' || pageUrlPath === '/hcp-e2e-journey-v09/check-sr1-form-prefilled' || pageUrlPath === '/hcp-e2e-journey-v09/edit-incomplete-form-saved' || pageUrlPath === '/hcp-e2e-journey-v09/confirmation-page' || pageUrlPath === 'hcp-e2e-journey-v09/task-list-sr1-form-saved') {
    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpv09PatientFullName")) PatientFullName.innerHTML = localStorage.getItem("hcpv09PatientFullName");

    let dob = document.getElementById('dob');
    if (localStorage.getItem("hcpv09DobDay") || localStorage.getItem("hcpv09DobMonth") || localStorage.getItem("hcpv09DobYear")) dob.innerHTML = localStorage.getItem("hcpv09DobDay") + "/" + localStorage.getItem("hcpv09DobMonth") + "/" + localStorage.getItem("hcpv09DobYear");

    let patientaddressline1 = document.getElementById('patientaddressline1');
    if (localStorage.getItem("hcpv09PatientAddressLine1")) patientaddressline1.innerHTML = localStorage.getItem("hcpv09PatientAddressLine1");

    let patientaddressline2 = document.getElementById('patientaddressline2');
    if (localStorage.getItem("hcpv09PatientAddressLine2")) patientaddressline2.innerHTML = localStorage.getItem("hcpv09PatientAddressLine2");

    let patientaddresstown = document.getElementById('patientaddresstown');
    if (localStorage.getItem("hcpv09PatientAddressTown")) patientaddresstown.innerHTML = localStorage.getItem("hcpv09PatientAddressTown");

    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpv09PatientPostcode")) patientPostcode.innerHTML = localStorage.getItem("hcpv09PatientPostcode");

    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpv09NiNo")) niNo.innerHTML = localStorage.getItem("hcpv09NiNo");

    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    if (localStorage.getItem("hcpv09WhatIsTheDiagnosis")) whatIsTheDiagnosis.innerHTML = localStorage.getItem("hcpv09WhatIsTheDiagnosis");

    let dateofSpecialRules = document.getElementById('dateofSpecialRules');
    if (localStorage.getItem("hcpv09DateofSpecialRulesDay") || localStorage.getItem("hcpv09DateofSpecialRulesMonth") || localStorage.getItem("hcpv09DateofSpecialRulesYear")) dateofSpecialRules.innerHTML = localStorage.getItem("hcpv09DateofSpecialRulesDay") + "/" + localStorage.getItem("hcpv09DateofSpecialRulesMonth") + "/" + localStorage.getItem("hcpv09DateofSpecialRulesYear");

    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    if (localStorage.getItem("hcpv09OtherRelevantDiagnosis")) otherRelevantDiagnosis.innerHTML = localStorage.getItem("hcpv09OtherRelevantDiagnosis");

    let awareOfDiagnosis = document.getElementById('awareOfDiagnosis');
    if (localStorage.getItem("hcpv09AwareOfDiagnosis")) awareOfDiagnosis.innerHTML = localStorage.getItem("hcpv09AwareOfDiagnosis");

    let awareOfPrognosis = document.getElementById('awareOfPrognosis');
    if (localStorage.getItem("hcpv09AwareOfPrognosis")) awareOfPrognosis.innerHTML = localStorage.getItem("hcpv09AwareOfPrognosis");

    let dateofDiagnosis = document.getElementById('dateofDiagnosis');
    if (localStorage.getItem("hcpv09DodDay") || localStorage.getItem("hcpv09DodMonth") || localStorage.getItem("hcpv09DodYear")) dateofDiagnosis.innerHTML = localStorage.getItem("hcpv09DodDay") + "/" + localStorage.getItem("hcpv09DodMonth") + "/" + localStorage.getItem("hcpv09DodYear");

    let clinicalFeatures = document.getElementById('clinicalFeatures');
    if (localStorage.getItem("hcpv09DetailsOfClinicalFeatures")) clinicalFeatures.innerHTML = localStorage.getItem("hcpv09DetailsOfClinicalFeatures");

    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpv09Treatment")) treatment.innerHTML = localStorage.getItem("hcpv09Treatment");

    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let mobile = document.getElementById('mobile');

    let role = document.getElementById('role');
    if (localStorage.getItem("hcpv09Role")) role.innerHTML = localStorage.getItem("hcpv09Role");

    let yourName = document.getElementById('yourName');
    if (localStorage.getItem("hcpv09Fullname")) yourName.innerHTML = localStorage.getItem("hcpv09Fullname");

    let professionalRegNum = document.getElementById('professionalRegNum');
    if (localStorage.getItem("hcpv09ProfessionalRegistrationNumber")) professionalRegNum.innerHTML = localStorage.getItem("hcpv09ProfessionalRegistrationNumber");
    if (localStorage.getItem("hcpv09OrganisationName")) organisationName.innerHTML = localStorage.getItem("hcpv09OrganisationName");
    if (localStorage.getItem("hcpv09OrganisationAddressLine1")) organisationAddressLine1.innerHTML = localStorage.getItem("hcpv09OrganisationAddressLine1");
    if (localStorage.getItem("hcpv09OrganisationAddressLine2")) organisationAddressLine2.innerHTML = localStorage.getItem("hcpv09OrganisationAddressLine2");
    if (localStorage.getItem("hcpv09TownOrCity")) organisationTownCity.innerHTML = localStorage.getItem("hcpv09TownOrCity");
    if (localStorage.getItem("hcpv09Postcode")) organisationPostcode.innerHTML = localStorage.getItem("hcpv09Postcode");
    if (localStorage.getItem("hcpv09MobileNumber")) mobile.innerHTML = localStorage.getItem("hcpv09MobileNumber");
  }

  // mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/check-sr1-form' || pageUrlPath === '/hcp-e2e-journey-mvp01/check-sr1-form-finalised' || pageUrlPath === '/hcp-e2e-journey-mvp01/edit-incomplete-form-saved' || pageUrlPath === '/hcp-e2e-journey-mvp01/confirmation-page' || pageUrlPath === '/hcp-e2e-journey-mvp01/task-list-sr1-form' || pageUrlPath === '/hcp-e2e-journey-mvp01/download-html' || pageUrlPath === '/hcp-e2e-journey-mvp01/download-pdf') {
    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpmvp01PatientFirstName") || localStorage.getItem("hcpmvp01PatientLastName")) PatientFullName.innerHTML = localStorage.getItem("hcpmvp01PatientFirstName") + ' ' + localStorage.getItem("hcpmvp01PatientLastName");

    let dob = document.getElementById('dob');
    if (localStorage.getItem("hcpmvp01DobDay") || localStorage.getItem("hcpmvp01DobMonth") || localStorage.getItem("hcpmvp01DobYear")) dob.innerHTML = localStorage.getItem("hcpmvp01DobDay") + "/" + localStorage.getItem("hcpmvp01DobMonth") + "/" + localStorage.getItem("hcpmvp01DobYear");

    let patientaddressline1 = document.getElementById('patientaddressline1');
    if (localStorage.getItem("hcpmvp01PatientAddressLine1")) patientaddressline1.innerHTML = localStorage.getItem("hcpmvp01PatientAddressLine1");

    let patientaddressline2 = document.getElementById('patientaddressline2');
    if (localStorage.getItem("hcpmvp01PatientAddressLine2")) patientaddressline2.innerHTML = localStorage.getItem("hcpmvp01PatientAddressLine2");

    let patientaddresstown = document.getElementById('patientaddresstown');
    if (localStorage.getItem("hcpmvp01PatientAddressTown")) patientaddresstown.innerHTML = localStorage.getItem("hcpmvp01PatientAddressTown");

    let patientaddresscounty = document.getElementById('patientaddresscounty');
    if (localStorage.getItem("hcpmvp01PatientAddressCounty")) patientaddresscounty.innerHTML = localStorage.getItem("hcpmvp01PatientAddressCounty");

    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpmvp01PatientPostcode")) patientPostcode.innerHTML = localStorage.getItem("hcpmvp01PatientPostcode");

    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpmvp01NiNo")) niNo.innerHTML = localStorage.getItem("hcpmvp01NiNo");

    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    if (localStorage.getItem("hcpmvp01WhatIsTheDiagnosis")) whatIsTheDiagnosis.innerHTML = localStorage.getItem("hcpmvp01WhatIsTheDiagnosis");

    let dateofSpecialRules = document.getElementById('dateofSpecialRules');
    if (localStorage.getItem("hcpmvp01DateofSpecialRulesDay") || localStorage.getItem("hcpmvp01DateofSpecialRulesMonth") || localStorage.getItem("hcpmvp01DateofSpecialRulesYear")) dateofSpecialRules.innerHTML = localStorage.getItem("hcpmvp01DateofSpecialRulesDay") + "/" + localStorage.getItem("hcpmvp01DateofSpecialRulesMonth") + "/" + localStorage.getItem("hcpmvp01DateofSpecialRulesYear");

    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    if (localStorage.getItem("hcpmvp01OtherRelevantDiagnosis")) otherRelevantDiagnosis.innerHTML = localStorage.getItem("hcpmvp01OtherRelevantDiagnosis");

    let patientAwareOfDiagnosis = localStorage.getItem('hcpmvp01AwareOfDiagnosis');
    if (patientAwareOfDiagnosis === 'true') {
      awareOfDiagnosis.innerHTML = 'Yes';
    }
    if (patientAwareOfDiagnosis === 'false') {
      awareOfDiagnosis.innerHTML = 'No';
    }

    let patientAwareOfPrognosis = localStorage.getItem('hcpmvp01AwareOfPrognosis');
    if (patientAwareOfPrognosis === 'true') {
      awareOfPrognosis.innerHTML = 'Yes';
    }
    if (patientAwareOfPrognosis === 'false') {
      awareOfPrognosis.innerHTML = 'No';
    }

    let dateofDiagnosis = document.getElementById('dateofDiagnosis');
    if (localStorage.getItem("hcpmvp01DodDay") || localStorage.getItem("hcpmvp01DodMonth") || localStorage.getItem("hcpmvp01DodYear")) dateofDiagnosis.innerHTML = localStorage.getItem("hcpmvp01DodDay") + "/" + localStorage.getItem("hcpmvp01DodMonth") + "/" + localStorage.getItem("hcpmvp01DodYear");

    let clinicalFeatures = document.getElementById('clinicalFeatures');
    if (localStorage.getItem("hcpmvp01DetailsOfClinicalFeatures")) clinicalFeatures.innerHTML = localStorage.getItem("hcpmvp01DetailsOfClinicalFeatures");

    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpmvp01Treatment")) treatment.innerHTML = localStorage.getItem("hcpmvp01Treatment");

    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationAddressCounty = document.getElementById('organisationAddressCounty');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let mobile = document.getElementById('mobileNumber');

    let role = document.getElementById('role');

    console.log('Role', localStorage.getItem("hcpmvp01Role"));
    if (localStorage.getItem("hcpmvp01Role") === "other") {
      role.innerHTML = localStorage.getItem("hcpmvp01OtherRole");
    } else {
      role.innerHTML = localStorage.getItem("hcpmvp01Role");
    }

    let yourName = document.getElementById('yourName');
    if (localStorage.getItem("hcpmvp01Firstname") || localStorage.getItem("hcpmvp01Lastname")) yourName.innerHTML = localStorage.getItem("hcpmvp01Firstname") + ' ' + localStorage.getItem("hcpmvp01Lastname");

    let professionalRegNum = document.getElementById('professionalRegNum');
    if (localStorage.getItem("hcpmvp01ProfessionalRegistrationNumber")) professionalRegNum.innerHTML = localStorage.getItem("hcpmvp01ProfessionalRegistrationNumber");

    if (localStorage.getItem("hcpmvp01OrganisationName")) organisationName.innerHTML = localStorage.getItem("hcpmvp01OrganisationName");
    if (localStorage.getItem("hcpmvp01OrganisationAddressLine1")) organisationAddressLine1.innerHTML = localStorage.getItem("hcpmvp01OrganisationAddressLine1");
    if (localStorage.getItem("hcpmvp01OrganisationAddressLine2")) organisationAddressLine2.innerHTML = localStorage.getItem("hcpmvp01OrganisationAddressLine2");
    if (localStorage.getItem("hcpmvp01TownOrCity")) organisationTownCity.innerHTML = localStorage.getItem("hcpmvp01TownOrCity");
    if (localStorage.getItem("hcpmvp01OrganisationAddressCounty")) organisationAddressCounty.innerHTML = localStorage.getItem("hcpmvp01OrganisationAddressCounty");
    if (localStorage.getItem("hcpmvp01Postcode")) organisationPostcode.innerHTML = localStorage.getItem("hcpmvp01Postcode");
    if (localStorage.getItem("hcpmvp01MobileNumber")) mobile.innerHTML = localStorage.getItem("hcpmvp01MobileNumber");
  }

  // mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/check-sr1-form' || pageUrlPath === '/hcp-e2e-journey-mvp02/check-sr1-form-finalised' || pageUrlPath === '/hcp-e2e-journey-mvp02/edit-incomplete-form-saved' || pageUrlPath === '/hcp-e2e-journey-mvp02/confirmation-page' || pageUrlPath === '/hcp-e2e-journey-mvp02/download-html' || pageUrlPath === '/hcp-e2e-journey-mvp02/download-pdf') {
    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpmvp02PatientFirstName") || localStorage.getItem("hcpmvp02PatientLastName")) PatientFullName.innerHTML = localStorage.getItem("hcpmvp02PatientFirstName") + ' ' + localStorage.getItem("hcpmvp02PatientLastName");

    let dob = document.getElementById('dob');
    if (localStorage.getItem("hcpmvp02DobDay") || localStorage.getItem("hcpmvp02DobMonth") || localStorage.getItem("hcpmvp02DobYear")) dob.innerHTML = localStorage.getItem("hcpmvp02DobDay") + "/" + localStorage.getItem("hcpmvp02DobMonth") + "/" + localStorage.getItem("hcpmvp02DobYear");

    let patientaddressline1 = document.getElementById('patientaddressline1');
    if (localStorage.getItem("hcpmvp02PatientAddressLine1")) patientaddressline1.innerHTML = localStorage.getItem("hcpmvp02PatientAddressLine1");

    let patientaddressline2 = document.getElementById('patientaddressline2');
    if (localStorage.getItem("hcpmvp02PatientAddressLine2")) patientaddressline2.innerHTML = localStorage.getItem("hcpmvp02PatientAddressLine2");

    let patientaddresstown = document.getElementById('patientaddresstown');
    if (localStorage.getItem("hcpmvp02PatientAddressTown")) patientaddresstown.innerHTML = localStorage.getItem("hcpmvp02PatientAddressTown");

    let patientaddresscounty = document.getElementById('patientaddresscounty');
    if (localStorage.getItem("hcpmvp02PatientAddressCounty")) patientaddresscounty.innerHTML = localStorage.getItem("hcpmvp02PatientAddressCounty");

    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpmvp02PatientPostcode")) patientPostcode.innerHTML = localStorage.getItem("hcpmvp02PatientPostcode");

    let niNo = document.getElementById('niNo');
    if (localStorage.getItem("hcpmvp02NiNo")) niNo.innerHTML = localStorage.getItem("hcpmvp02NiNo");

    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    if (localStorage.getItem("hcpmvp02WhatIsTheDiagnosis")) whatIsTheDiagnosis.innerHTML = localStorage.getItem("hcpmvp02WhatIsTheDiagnosis");

    let dateofSpecialRules = document.getElementById('dateofSpecialRules');
    if (localStorage.getItem("hcpmvp02DateofSpecialRulesDay") || localStorage.getItem("hcpmvp02DateofSpecialRulesMonth") || localStorage.getItem("hcpmvp02DateofSpecialRulesYear")) dateofSpecialRules.innerHTML = localStorage.getItem("hcpmvp02DateofSpecialRulesDay") + "/" + localStorage.getItem("hcpmvp02DateofSpecialRulesMonth") + "/" + localStorage.getItem("hcpmvp02DateofSpecialRulesYear");

    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    if (localStorage.getItem("hcpmvp02OtherRelevantDiagnosis")) otherRelevantDiagnosis.innerHTML = localStorage.getItem("hcpmvp02OtherRelevantDiagnosis");

    let patientAwareOfDiagnosis = localStorage.getItem('hcpmvp02AwareOfDiagnosis');
    if (patientAwareOfDiagnosis === 'true') {
      awareOfDiagnosis.innerHTML = 'Yes';
    }
    if (patientAwareOfDiagnosis === 'false') {
      awareOfDiagnosis.innerHTML = 'No';
    }

    let patientAwareOfPrognosis = localStorage.getItem('hcpmvp02AwareOfPrognosis');
    if (patientAwareOfPrognosis === 'true') {
      awareOfPrognosis.innerHTML = 'Yes';
    }
    if (patientAwareOfPrognosis === 'false') {
      awareOfPrognosis.innerHTML = 'No';
    }

    let dateofDiagnosis = document.getElementById('dateofDiagnosis');
    if (localStorage.getItem("hcpmvp02DodDay") || localStorage.getItem("hcpmvp02DodMonth") || localStorage.getItem("hcpmvp02DodYear")) dateofDiagnosis.innerHTML = localStorage.getItem("hcpmvp02DodDay") + "/" + localStorage.getItem("hcpmvp02DodMonth") + "/" + localStorage.getItem("hcpmvp02DodYear");

    let clinicalFeatures = document.getElementById('clinicalFeatures');
    if (localStorage.getItem("hcpmvp02DetailsOfClinicalFeatures")) clinicalFeatures.innerHTML = localStorage.getItem("hcpmvp02DetailsOfClinicalFeatures");

    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpmvp02Treatment")) treatment.innerHTML = localStorage.getItem("hcpmvp02Treatment");

    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationAddressCounty = document.getElementById('organisationAddressCounty');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let mobile = document.getElementById('mobileNumber');
    let role = document.getElementById('role');

    console.log('Role', localStorage.getItem("hcpmvp02Role"));
    if (localStorage.getItem("hcpmvp02Role") === "other") {
      role.innerHTML = localStorage.getItem("hcpmvp02OtherRole");
    } else {
      role.innerHTML = localStorage.getItem("hcpmvp02Role");
    }

    let yourName = document.getElementById('yourName');
    if (localStorage.getItem("hcpmvp02Firstname") || localStorage.getItem("hcpmvp02Lastname")) yourName.innerHTML = localStorage.getItem("hcpmvp02Firstname") + ' ' + localStorage.getItem("hcpmvp02Lastname");

    let professionalRegNum = document.getElementById('professionalRegNum');
    if (localStorage.getItem("hcpmvp02ProfessionalRegistrationNumber")) professionalRegNum.innerHTML = localStorage.getItem("hcpmvp02ProfessionalRegistrationNumber");

    if (localStorage.getItem("hcpmvp02OrganisationName")) organisationName.innerHTML = localStorage.getItem("hcpmvp02OrganisationName");
    if (localStorage.getItem("hcpmvp02OrganisationAddressLine1")) organisationAddressLine1.innerHTML = localStorage.getItem("hcpmvp02OrganisationAddressLine1");
    if (localStorage.getItem("hcpmvp02OrganisationAddressLine2")) organisationAddressLine2.innerHTML = localStorage.getItem("hcpmvp02OrganisationAddressLine2");
    if (localStorage.getItem("hcpmvp02TownOrCity")) organisationTownCity.innerHTML = localStorage.getItem("hcpmvp02TownOrCity");
    if (localStorage.getItem("hcpmvp02OrganisationAddressCounty")) organisationAddressCounty.innerHTML = localStorage.getItem("hcpmvp02OrganisationAddressCounty");
    if (localStorage.getItem("hcpmvp02Postcode")) organisationPostcode.innerHTML = localStorage.getItem("hcpmvp02Postcode");
    if (localStorage.getItem("hcpmvp02MobileNumber")) mobile.innerHTML = localStorage.getItem("hcpmvp02MobileNumber");
  }

  // mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/check-sr1-form' || pageUrlPath === '/hcp-e2e-journey-mvp03/check-sr1-form-finalised' || pageUrlPath === '/hcp-e2e-journey-mvp03/edit-incomplete-form-saved' || pageUrlPath === '/hcp-e2e-journey-mvp03/download-html' || pageUrlPath === '/hcp-e2e-journey-mvp03/download-pdf') {
    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpmvp03PatientFirstName") || localStorage.getItem("hcpmvp03PatientLastName")) PatientFullName.innerHTML = localStorage.getItem("hcpmvp03PatientFirstName") + ' ' + localStorage.getItem("hcpmvp03PatientLastName");

    let dob = document.getElementById('dob');
    if (localStorage.getItem("hcpmvp03DobDay") || localStorage.getItem("hcpmvp03DobMonth") || localStorage.getItem("hcpmvp03DobYear")) dob.innerHTML = localStorage.getItem("hcpmvp03DobDay") + "/" + localStorage.getItem("hcpmvp03DobMonth") + "/" + localStorage.getItem("hcpmvp03DobYear");

    let patientaddressline1 = document.getElementById('patientaddressline1');
    if (localStorage.getItem("hcpmvp03PatientAddressLine1")) patientaddressline1.innerHTML = localStorage.getItem("hcpmvp03PatientAddressLine1");

    let patientaddressline2 = document.getElementById('patientaddressline2');
    if (localStorage.getItem("hcpmvp03PatientAddressLine2")) patientaddressline2.innerHTML = localStorage.getItem("hcpmvp03PatientAddressLine2");

    let patientaddresstown = document.getElementById('patientaddresstown');
    if (localStorage.getItem("hcpmvp03PatientAddressTown")) patientaddresstown.innerHTML = localStorage.getItem("hcpmvp03PatientAddressTown");

    let patientaddresscounty = document.getElementById('patientaddresscounty');
    if (localStorage.getItem("hcpmvp03PatientAddressCounty")) patientaddresscounty.innerHTML = localStorage.getItem("hcpmvp03PatientAddressCounty");

    let patientPostcode = document.getElementById('patientPostcode');
    if (localStorage.getItem("hcpmvp03PatientPostcode")) patientPostcode.innerHTML = localStorage.getItem("hcpmvp03PatientPostcode");

    let niNo = document.getElementById('niNo');
    let niNoinput = document.getElementById('niNoinput');
    console.log('nino', localStorage.getItem("hcpmvp03NiNo"));
    if (localStorage.getItem("hcpmvp03NiNo") === "Yes") {
      niNo.innerHTML = localStorage.getItem("hcpmvp03NiNoinput");
    } else {
      niNo.innerHTML = localStorage.getItem("hcpmvp03NiNo");
    }

    let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
    if (localStorage.getItem("hcpmvp03WhatIsTheDiagnosis")) whatIsTheDiagnosis.innerHTML = localStorage.getItem("hcpmvp03WhatIsTheDiagnosis");

    let dateofSpecialRules = document.getElementById('dateofSpecialRules');
    if (localStorage.getItem("hcpmvp03DateofSpecialRulesDay") || localStorage.getItem("hcpmvp03DateofSpecialRulesMonth") || localStorage.getItem("hcpmvp03DateofSpecialRulesYear")) dateofSpecialRules.innerHTML = localStorage.getItem("hcpmvp03DateofSpecialRulesDay") + "/" + localStorage.getItem("hcpmvp03DateofSpecialRulesMonth") + "/" + localStorage.getItem("hcpmvp03DateofSpecialRulesYear");

    let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
    let otherRelevantDiagnosisinput = document.getElementById('otherRelevantDiagnosisinput');
    console.log('otherRelevantDiagnosis', localStorage.getItem("hcpmvp03OtherRelevantDiagnosis"));
    if (localStorage.getItem("hcpmvp03OtherRelevantDiagnosis") === "Yes") {
      otherRelevantDiagnosis.innerHTML = localStorage.getItem("hcpmvp03OtherRelevantDiagnosisinput");
    } else {
      otherRelevantDiagnosis.innerHTML = localStorage.getItem("hcpmvp03OtherRelevantDiagnosis");
    }

    let patientAwareOfDiagnosis = localStorage.getItem('hcpmvp03AwareOfDiagnosis');
    if (patientAwareOfDiagnosis === 'true') {
      awareOfDiagnosis.innerHTML = 'Yes';
    }
    if (patientAwareOfDiagnosis === 'false') {
      awareOfDiagnosis.innerHTML = 'No';
    }

    let patientAwareOfPrognosis = localStorage.getItem('hcpmvp03AwareOfPrognosis');
    if (patientAwareOfPrognosis === 'true') {
      awareOfPrognosis.innerHTML = 'Yes';
    }
    if (patientAwareOfPrognosis === 'false') {
      awareOfPrognosis.innerHTML = 'No';
    }

    let dateofDiagnosis = document.getElementById('dateofDiagnosis');
    if (localStorage.getItem("hcpmvp03DodDay") || localStorage.getItem("hcpmvp03DodMonth") || localStorage.getItem("hcpmvp03DodYear")) dateofDiagnosis.innerHTML = localStorage.getItem("hcpmvp03DodDay") + "/" + localStorage.getItem("hcpmvp03DodMonth") + "/" + localStorage.getItem("hcpmvp03DodYear");

    let clinicalFeatures = document.getElementById('clinicalFeatures');
    if (localStorage.getItem("hcpmvp03DetailsOfClinicalFeatures")) clinicalFeatures.innerHTML = localStorage.getItem("hcpmvp03DetailsOfClinicalFeatures");

    let treatment = document.getElementById('treatment');
    if (localStorage.getItem("hcpmvp03Treatment")) treatment.innerHTML = localStorage.getItem("hcpmvp03Treatment");

    let organisationName = document.getElementById('organisationName');
    let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
    let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
    let organisationTownCity = document.getElementById('organisationTownCity');
    let organisationAddressCounty = document.getElementById('organisationAddressCounty');
    let organisationPostcode = document.getElementById('organisationPostcode');
    let mobile = document.getElementById('mobileNumber');

    let role = document.getElementById('role');
    let otherRole = document.getElementById('otherRole');

    console.log('Role', localStorage.getItem("hcpmvp03Role"));
    if (localStorage.getItem("hcpmvp03Role") === "Other") {
      role.innerHTML = localStorage.getItem("hcpmvp03otherRole");
    } else {
      role.innerHTML = localStorage.getItem("hcpmvp03Role");
    }

    let yourName = document.getElementById('yourName');
    if (localStorage.getItem("hcpmvp03Firstname") || localStorage.getItem("hcpmvp03Lastname")) yourName.innerHTML = localStorage.getItem("hcpmvp03Firstname") + ' ' + localStorage.getItem("hcpmvp03Lastname");

    let professionalRegNum = document.getElementById('professionalRegNum');
    if (localStorage.getItem("hcpmvp03ProfessionalRegistrationNumber")) professionalRegNum.innerHTML = localStorage.getItem("hcpmvp03ProfessionalRegistrationNumber");

    if (localStorage.getItem("hcpmvp03OrganisationName")) organisationName.innerHTML = localStorage.getItem("hcpmvp03OrganisationName");
    if (localStorage.getItem("hcpmvp03OrganisationAddressLine1")) organisationAddressLine1.innerHTML = localStorage.getItem("hcpmvp03OrganisationAddressLine1");
    if (localStorage.getItem("hcpmvp03OrganisationAddressLine2")) organisationAddressLine2.innerHTML = localStorage.getItem("hcpmvp03OrganisationAddressLine2");
    if (localStorage.getItem("hcpmvp03TownOrCity")) organisationTownCity.innerHTML = localStorage.getItem("hcpmvp03TownOrCity");
    if (localStorage.getItem("hcpmvp03OrganisationAddressCounty")) organisationAddressCounty.innerHTML = localStorage.getItem("hcpmvp03OrganisationAddressCounty");
    if (localStorage.getItem("hcpmvp03Postcode")) organisationPostcode.innerHTML = localStorage.getItem("hcpmvp03Postcode");
    if (localStorage.getItem("hcpmvp03MobileNumber")) mobile.innerHTML = localStorage.getItem("hcpmvp03MobileNumber");
  }

  // =================
  // Confirmation page
  // =================

  // v01
  if (pageUrlPath === '/hcp-e2e-journey-v01/confirmation-page') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpv01PatientFullName");
  }
  if (pageUrlPath === '/hcp-e2e-journey-v01/confirmation-page') {
    if (localStorage.getItem("hcpv01ResendingSR1Form")) {
      document.getElementById('resubmittedH1').classList.remove('hidden');
      document.getElementById('resubmittedParagraph').classList.remove('hidden');
    }
  }
  // v02
  if (pageUrlPath === '/hcp-e2e-journey-v02/confirmation-page') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpv02PatientFullName");
  }
  if (pageUrlPath === '/hcp-e2e-journey-v02/confirmation-page') {
    if (localStorage.getItem("hcpv02ResendingSR1Form")) {
      document.getElementById('resubmittedH1').classList.remove('hidden');
      document.getElementById('resubmittedParagraph').classList.remove('hidden');
    }
  }
  // v03
  if (pageUrlPath === '/hcp-e2e-journey-v03/confirmation-page') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpv03PatientFullName");
  }
  if (pageUrlPath === '/hcp-e2e-journey-v03/confirmation-page') {
    if (localStorage.getItem("hcpv03ResendingSR1Form")) {
      document.getElementById('resubmittedH1').classList.remove('hidden');
      document.getElementById('resubmittedParagraph').classList.remove('hidden');
    }
  }
  // v04
  if (pageUrlPath === '/hcp-e2e-journey-v04/confirmation-page') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpv04PatientFullName");
  }
  if (pageUrlPath === '/hcp-e2e-journey-v04/confirmation-page') {
    if (localStorage.getItem("hcpv04ResendingSR1Form")) {
      document.getElementById('resubmittedH1').classList.remove('hidden');
      document.getElementById('resubmittedParagraph').classList.remove('hidden');
    }
  }
  // v05
  if (pageUrlPath === '/hcp-e2e-journey-v05/confirmation-page') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpv05PatientFullName");
  }
  if (pageUrlPath === '/hcp-e2e-journey-v05/confirmation-page') {
    if (localStorage.getItem("hcpv05ResendingSR1Form")) {
      document.getElementById('resubmittedH1').classList.remove('hidden');
      document.getElementById('resubmittedParagraph').classList.remove('hidden');
    }
  }
  // v06
  if (pageUrlPath === '/hcp-e2e-journey-v06/confirmation-page') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpv06PatientFullName");
  }
  if (pageUrlPath === '/hcp-e2e-journey-v06/confirmation-page') {
    if (localStorage.getItem("hcpv06ResendingSR1Form")) {
      document.getElementById('resubmittedH1').classList.remove('hidden');
      document.getElementById('resubmittedParagraph').classList.remove('hidden');
    }
  }
  // v07
  if (pageUrlPath === '/hcp-e2e-journey-v07/confirmation-page') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpv07PatientFullName");
  }
  if (pageUrlPath === '/hcp-e2e-journey-v07/confirmation-page') {
    if (localStorage.getItem("hcpv07ResendingSR1Form")) {
      document.getElementById('resubmittedH1').classList.remove('hidden');
      document.getElementById('resubmittedParagraph').classList.remove('hidden');
    }
  }
  // v08
  if (pageUrlPath === '/hcp-e2e-journey-v08/confirmation-page') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpv08PatientFullName");
  }
  if (pageUrlPath === '/hcp-e2e-journey-v08/confirmation-page') {
    if (localStorage.getItem("hcpv08ResendingSR1Form")) {
      document.getElementById('resubmittedH1').classList.remove('hidden');
      document.getElementById('resubmittedParagraph').classList.remove('hidden');
    }
  }
  // v09
  if (pageUrlPath === '/hcp-e2e-journey-v09/confirmation-page') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpv09PatientFullName");
  }
  if (pageUrlPath === '/hcp-e2e-journey-v09/confirmation-page') {
    if (localStorage.getItem("hcpv09ResendingSR1Form")) {
      document.getElementById('resubmittedH1').classList.remove('hidden');
      document.getElementById('resubmittedParagraph').classList.remove('hidden');
    }
  }
  // mvp01
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/confirmation-page') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpmvp01PatientFirstname") + ' ' + localStorage.getItem("hcpmvp01PatientLastname");
  }
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/confirmation-page-b') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpmvp01PatientFirstname") + ' ' + localStorage.getItem("hcpmvp01PatientLastname");
    document.getElementById('PatientFullName2').innerHTML = localStorage.getItem("hcpmvp01PatientFirstname") + ' ' + localStorage.getItem("hcpmvp01PatientLastname");
  }
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/confirmation-page-b') {
    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpmvp01PatientFirstName") || localStorage.getItem("hcpmvp01PatientLastName")) PatientFullName.innerHTML = localStorage.getItem("hcpmvp01PatientFirstName") + ' ' + localStorage.getItem("hcpmvp01PatientLastName");

    let PatientFullName2 = document.getElementById('PatientFullName2');
    if (localStorage.getItem("hcpmvp01PatientFirstName") || localStorage.getItem("hcpmvp01PatientLastName")) PatientFullName2.innerHTML = localStorage.getItem("hcpmvp01PatientFirstName") + ' ' + localStorage.getItem("hcpmvp01PatientLastName");
  }
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/confirmation-page') {
    if (localStorage.getItem("hcpmvp01ResendingSR1Form")) {
      document.getElementById('resubmittedH1').classList.remove('hidden');
      document.getElementById('resubmittedParagraph').classList.remove('hidden');
    }
  }
  if (pageUrlPath === '/hcp-e2e-journey-mvp01/confirmation-page-b') {
    if (localStorage.getItem("hcpmvp01ResendingSR1Form")) {
      document.getElementById('resubmittedH1').classList.remove('hidden');
      document.getElementById('resubmittedParagraph').classList.remove('hidden');
    }
  }
  // mvp02
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/confirmation-page') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpmvp02PatientFirstname") + ' ' + localStorage.getItem("hcpmvp02PatientLastname");
  }
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/confirmation-page-b') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpmvp02PatientFirstname") + ' ' + localStorage.getItem("hcpmvp02PatientLastname");
    document.getElementById('PatientFullName2').innerHTML = localStorage.getItem("hcpmvp02PatientFirstname") + ' ' + localStorage.getItem("hcpmvp02PatientLastname");
  }
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/confirmation-page-b') {
    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpmvp02PatientFirstName") || localStorage.getItem("hcpmvp02PatientLastName")) PatientFullName.innerHTML = localStorage.getItem("hcpmvp02PatientFirstName") + ' ' + localStorage.getItem("hcpmvp02PatientLastName");

    let PatientFullName2 = document.getElementById('PatientFullName2');
    if (localStorage.getItem("hcpmvp02PatientFirstName") || localStorage.getItem("hcpmvp02PatientLastName")) PatientFullName2.innerHTML = localStorage.getItem("hcpmvp02PatientFirstName") + ' ' + localStorage.getItem("hcpmvp02PatientLastName");
  }
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/confirmation-page') {
    if (localStorage.getItem("hcpmvp02ResendingSR1Form")) {
      document.getElementById('resubmittedH1').classList.remove('hidden');
      document.getElementById('resubmittedParagraph').classList.remove('hidden');
    }
  }
  if (pageUrlPath === '/hcp-e2e-journey-mvp02/confirmation-page-b') {
    if (localStorage.getItem("hcpmvp02ResendingSR1Form")) {
      document.getElementById('resubmittedH1').classList.remove('hidden');
      document.getElementById('resubmittedParagraph').classList.remove('hidden');
    }
  }
  // mvp03
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/confirmation-page') {
    document.getElementById('PatientFullName').innerHTML = localStorage.getItem("hcpmvp03PatientFirstname") + ' ' + localStorage.getItem("hcpmvp03PatientLastname");
    document.getElementById('PatientFullName2').innerHTML = localStorage.getItem("hcpmvp03PatientFirstname") + ' ' + localStorage.getItem("hcpmvp03PatientLastname");
  }
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/confirmation-page') {
    let PatientFullName = document.getElementById('PatientFullName');
    if (localStorage.getItem("hcpmvp03PatientFirstName") || localStorage.getItem("hcpmvp03PatientLastName")) PatientFullName.innerHTML = localStorage.getItem("hcpmvp03PatientFirstName") + ' ' + localStorage.getItem("hcpmvp03PatientLastName");
    let PatientFullName2 = document.getElementById('PatientFullName2');
    if (localStorage.getItem("hcpmvp03PatientFirstName") || localStorage.getItem("hcpmvp03PatientLastName")) PatientFullName2.innerHTML = localStorage.getItem("hcpmvp03PatientFirstName") + ' ' + localStorage.getItem("hcpmvp03PatientLastName");
  }
  if (pageUrlPath === '/hcp-e2e-journey-mvp03/confirmation-page') {
    if (localStorage.getItem("hcpmvp03ResendingSR1Form")) {
      document.getElementById('resubmittedH1').classList.remove('hidden');
      document.getElementById('resubmittedParagraph').classList.remove('hidden');
    }
  }
});

// ############################
// END
// ############################


// =======================
// NAV LINK
// =======================

function navLink(event) {
  let linkLiId = event.target.parentElement.id;
  let linkAnchorId = event.target.id;
  localStorage.setItem('linkLiId', linkLiId);
  localStorage.setItem('linkAnchorId', linkAnchorId);
}

// ===============
// Log out JOURNEY
// ===============

// logOutHcpE2ev01()
function logOutHcpE2e() {
  console.log('Log out clicked');
  if (domainPathUrl === 'hcp-e2e-journey-v01') window.location.pathname = "/hcp-e2e-journey-v01/signout";
  if (domainPathUrl === 'hcp-e2e-journey-v02') window.location.pathname = "/hcp-e2e-journey-v02/signout";
  if (domainPathUrl === 'hcp-e2e-journey-v03') window.location.pathname = "/hcp-e2e-journey-v03/signout";
  if (domainPathUrl === 'hcp-e2e-journey-v04') window.location.pathname = "/hcp-e2e-journey-v04/signout";
  if (domainPathUrl === 'hcp-e2e-journey-v05') window.location.pathname = "/hcp-e2e-journey-v05/signout";
  if (domainPathUrl === 'hcp-e2e-journey-v06') window.location.pathname = "/hcp-e2e-journey-v06/signout";
  if (domainPathUrl === 'hcp-e2e-journey-v07') window.location.pathname = "/hcp-e2e-journey-v07/signout";
  if (domainPathUrl === 'hcp-e2e-journey-v08') window.location.pathname = "/hcp-e2e-journey-v08/signout";
  if (domainPathUrl === 'hcp-e2e-journey-v09') window.location.pathname = "/hcp-e2e-journey-v09/signout";
  if (domainPathUrl === 'hcp-e2e-journey-mvp01') window.location.pathname = "/hcp-e2e-journey-mvp01/signout";
  if (domainPathUrl === 'hcp-e2e-journey-mvp02') window.location.pathname = "/hcp-e2e-journey-mvp02/signout";
  if (domainPathUrl === 'hcp-e2e-journey-mvp03') window.location.pathname = "/hcp-e2e-journey-mvp03/signout";
  if (domainPathUrl === 'beta01') window.location.pathname = "/beta01/signout";
  localStorage.removeItem('sentSR1_firstName');
  localStorage.removeItem('sentSR1_surname');
  localStorage.removeItem('pff_firstName');
  localStorage.removeItem('pff_surname');
  localStorage.removeItem('sentSR1_referenceNumber');
  localStorage.removeItem('linkLiId')
  localStorage.removeItem('linkAnchorId')
  // Log out of version v01
  localStorage.removeItem('hcpv01SigninOrg');
  localStorage.removeItem('hcpv01HcpEmail');
  localStorage.removeItem('hcpv01Fullname');
  localStorage.removeItem('hcpv01Role');
  localStorage.removeItem('hcpv01ProfessionalRegistrationNumber');
  localStorage.removeItem('hcpv01MobileNumber');
  localStorage.removeItem('hcpv01OrganisationName');
  localStorage.removeItem('hcpv01OrganisationAddressLine1');
  localStorage.removeItem('hcpv01OrganisationAddressLine2');
  localStorage.removeItem('hcpv01TownOrCity');
  localStorage.removeItem('hcpv01Postcode');
  localStorage.removeItem('hcpv01ChangingReceiveReminders');
  localStorage.removeItem('hcpv01ReceiveReminder');
  localStorage.removeItem('hcpv01ReminderType');
  localStorage.removeItem('hcpv01ReminderFrequency');
  localStorage.removeItem('hcpv01ReminderTriggered');
  localStorage.removeItem('hcpv01ProfileTriggered');
  localStorage.removeItem('hcpv01OtherRole');
  localStorage.removeItem('hcpv01ExistingHcpUser');
  localStorage.removeItem('hcpv01NewHcpUser');
  localStorage.removeItem("hcpv01PatientFullName");
  localStorage.removeItem("hcpv01Surname");
  localStorage.removeItem("hcpv01DobDay");
  localStorage.removeItem("hcpv01DobMonth");
  localStorage.removeItem("hcpv01DobYear");
  localStorage.removeItem("hcpv01Address");
  localStorage.removeItem("hcpv01NiNo");
  localStorage.removeItem("hcpv01DateofSpecialRulesDay");
  localStorage.removeItem("hcpv01DateofSpecialRulesMonth");
  localStorage.removeItem("hcpv01DateofSpecialRulesYear");
  localStorage.removeItem("hcpv01WhatIsTheDiagnosis");
  localStorage.removeItem("hcpv01OtherRelevantDiagnosis");
  localStorage.removeItem("hcpv01AwareOfDiagnosis");
  localStorage.removeItem("hcpv01AwareOfPrognosis");
  localStorage.removeItem("hcpv01DodDay");
  localStorage.removeItem("hcpv01DodMonth");
  localStorage.removeItem("hcpv01DodYear");
  localStorage.removeItem("hcpv01DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpv01Treatment");
  localStorage.removeItem("hcpv01ResendingSR1Form");
  localStorage.removeItem("hcpv01PatientAddressLine1");
  localStorage.removeItem("hcpv01PatientAddressLine2");
  localStorage.removeItem("hcpv01PatientAddressTown");
  localStorage.removeItem("hcpv01PatientPostcode");
  localStorage.removeItem("hcpv01UpdateProfileDetailsFromSendSR1FormPage");
  localStorage.removeItem("hcpv01IsLoggedIn");
  // Log out of version v02
  localStorage.removeItem('hcpv02SigninOrg');
  localStorage.removeItem('hcpv02HcpEmail');
  localStorage.removeItem('hcpv02Fullname');
  localStorage.removeItem('hcpv02Role');
  localStorage.removeItem('hcpv02ProfessionalRegistrationNumber');
  localStorage.removeItem('hcpv02MobileNumber');
  localStorage.removeItem('hcpv02OrganisationName');
  localStorage.removeItem('hcpv02OrganisationAddressLine1');
  localStorage.removeItem('hcpv02OrganisationAddressLine2');
  localStorage.removeItem('hcpv02TownOrCity');
  localStorage.removeItem('hcpv02Postcode');
  localStorage.removeItem('hcpv02ChangingReceiveReminders');
  localStorage.removeItem('hcpv02ReceiveReminder');
  localStorage.removeItem('hcpv02ReminderType');
  localStorage.removeItem('hcpv02ReminderFrequency');
  localStorage.removeItem('hcpv02ReminderTriggered');
  localStorage.removeItem('hcpv02ProfileTriggered');
  localStorage.removeItem('hcpv02OtherRole');
  localStorage.removeItem('hcpv02ExistingHcpUser');
  localStorage.removeItem('hcpv02NewHcpUser');
  localStorage.removeItem("hcpv02PatientFullName");
  localStorage.removeItem("hcpv02Surname");
  localStorage.removeItem("hcpv02DobDay");
  localStorage.removeItem("hcpv02DobMonth");
  localStorage.removeItem("hcpv02DobYear");
  localStorage.removeItem("hcpv02Address");
  localStorage.removeItem("hcpv02NiNo");
  localStorage.removeItem("hcpv02DateofSpecialRulesDay");
  localStorage.removeItem("hcpv02DateofSpecialRulesMonth");
  localStorage.removeItem("hcpv02DateofSpecialRulesYear");
  localStorage.removeItem("hcpv02WhatIsTheDiagnosis");
  localStorage.removeItem("hcpv02OtherRelevantDiagnosis");
  localStorage.removeItem("hcpv02AwareOfDiagnosis");
  localStorage.removeItem("hcpv02AwareOfPrognosis");
  localStorage.removeItem("hcpv02DodDay");
  localStorage.removeItem("hcpv02DodMonth");
  localStorage.removeItem("hcpv02DodYear");
  localStorage.removeItem("hcpv02DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpv02Treatment");
  localStorage.removeItem("hcpv02ResendingSR1Form");
  localStorage.removeItem("hcpv02PatientAddressLine1");
  localStorage.removeItem("hcpv02PatientAddressLine2");
  localStorage.removeItem("hcpv02PatientAddressTown");
  localStorage.removeItem("hcpv02PatientPostcode");
  localStorage.removeItem("hcpv02UpdateProfileDetailsFromSendSR1FormPage");
  localStorage.removeItem("hcpv02IsLoggedIn");
  // Log out of version v03
  localStorage.removeItem('hcpv03SigninOrg');
  localStorage.removeItem('hcpv03HcpEmail');
  localStorage.removeItem('hcpv03Fullname');
  localStorage.removeItem('hcpv03Role');
  localStorage.removeItem('hcpv03ProfessionalRegistrationNumber');
  localStorage.removeItem('hcpv03MobileNumber');
  localStorage.removeItem('hcpv03OrganisationName');
  localStorage.removeItem('hcpv03OrganisationAddressLine1');
  localStorage.removeItem('hcpv03OrganisationAddressLine2');
  localStorage.removeItem('hcpv03TownOrCity');
  localStorage.removeItem('hcpv03Postcode');
  localStorage.removeItem('hcpv03ChangingReceiveReminders');
  localStorage.removeItem('hcpv03ReceiveReminder');
  localStorage.removeItem('hcpv03ReminderType');
  localStorage.removeItem('hcpv03ReminderFrequency');
  localStorage.removeItem('hcpv03ReminderTriggered');
  localStorage.removeItem('hcpv03ProfileTriggered');
  localStorage.removeItem('hcpv03OtherRole');
  localStorage.removeItem('hcpv03ExistingHcpUser');
  localStorage.removeItem('hcpv03NewHcpUser');
  localStorage.removeItem("hcpv03PatientFullName");
  localStorage.removeItem("hcpv03Surname");
  localStorage.removeItem("hcpv03DobDay");
  localStorage.removeItem("hcpv03DobMonth");
  localStorage.removeItem("hcpv03DobYear");
  localStorage.removeItem("hcpv03Address");
  localStorage.removeItem("hcpv03NiNo");
  localStorage.removeItem("hcpv03DateofSpecialRulesDay");
  localStorage.removeItem("hcpv03DateofSpecialRulesMonth");
  localStorage.removeItem("hcpv03DateofSpecialRulesYear");
  localStorage.removeItem("hcpv03WhatIsTheDiagnosis");
  localStorage.removeItem("hcpv03OtherRelevantDiagnosis");
  localStorage.removeItem("hcpv03AwareOfDiagnosis");
  localStorage.removeItem("hcpv03AwareOfPrognosis");
  localStorage.removeItem("hcpv03DodDay");
  localStorage.removeItem("hcpv03DodMonth");
  localStorage.removeItem("hcpv03DodYear");
  localStorage.removeItem("hcpv03DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpv03Treatment");
  localStorage.removeItem("hcpv03ResendingSR1Form");
  localStorage.removeItem("hcpv03PatientAddressLine1");
  localStorage.removeItem("hcpv03PatientAddressLine2");
  localStorage.removeItem("hcpv03PatientAddressTown");
  localStorage.removeItem("hcpv03PatientPostcode");
  localStorage.removeItem("hcpv03UpdateProfileDetailsFromSendSR1FormPage");
  localStorage.removeItem("hcpv03IsLoggedIn");
  // Log out of version v04
  localStorage.removeItem('hcpv04SigninOrg');
  localStorage.removeItem('hcpv04HcpEmail');
  localStorage.removeItem('hcpv04Fullname');
  localStorage.removeItem('hcpv04Role');
  localStorage.removeItem('hcpv04ProfessionalRegistrationNumber');
  localStorage.removeItem('hcpv04MobileNumber');
  localStorage.removeItem('hcpv04OrganisationName');
  localStorage.removeItem('hcpv04OrganisationAddressLine1');
  localStorage.removeItem('hcpv04OrganisationAddressLine2');
  localStorage.removeItem('hcpv04TownOrCity');
  localStorage.removeItem('hcpv04Postcode');
  localStorage.removeItem('hcpv04ChangingReceiveReminders');
  localStorage.removeItem('hcpv04ReceiveReminder');
  localStorage.removeItem('hcpv04ReminderType');
  localStorage.removeItem('hcpv04ReminderFrequency');
  localStorage.removeItem('hcpv04ReminderTriggered');
  localStorage.removeItem('hcpv04ChangingPractitionerName');
  localStorage.removeItem('hcpv04ChangingPractitionerRole');
  localStorage.removeItem('hcpv04ChangingPractitionerRegNo');
  localStorage.removeItem('hcpv04ChangingPractitionerPhoneNo');
  localStorage.removeItem('hcpv04ChangingPractitionerOrgName');
  localStorage.removeItem('hcpv04ChangingPractitionerOrgAddress');
  localStorage.removeItem('hcpv04ChangingPractitionerNameNew');
  localStorage.removeItem('hcpv04ChangingPractitionerRoleNew');
  localStorage.removeItem('hcpv04ChangingPractitionerRegNoNew');
  localStorage.removeItem('hcpv04ChangingPractitionerPhoneNoNew');
  localStorage.removeItem('hcpv04ChangingPractitionerOrgNameNew');
  localStorage.removeItem('hcpv04ChangingPractitionerOrgAddressNew');
  localStorage.removeItem('hcpv04ProfileTriggered');
  localStorage.removeItem('hcpv04OtherRole');
  localStorage.removeItem('hcpv04ExistingHcpUser');
  localStorage.removeItem('hcpv04NewHcpUser');
  localStorage.removeItem("hcpv04PatientFullName");
  localStorage.removeItem("hcpv04DobDay");
  localStorage.removeItem("hcpv04DobMonth");
  localStorage.removeItem("hcpv04DobYear");
  localStorage.removeItem("hcpv04Address");
  localStorage.removeItem("hcpv04NiNo");
  localStorage.removeItem("hcpv04DateofSpecialRulesDay");
  localStorage.removeItem("hcpv04DateofSpecialRulesMonth");
  localStorage.removeItem("hcpv04DateofSpecialRulesYear");
  localStorage.removeItem("hcpv04WhatIsTheDiagnosis");
  localStorage.removeItem("hcpv04OtherRelevantDiagnosis");
  localStorage.removeItem("hcpv04AwareOfDiagnosis");
  localStorage.removeItem("hcpv04AwareOfPrognosis");
  localStorage.removeItem("hcpv04DodDay");
  localStorage.removeItem("hcpv04DodMonth");
  localStorage.removeItem("hcpv04DodYear");
  localStorage.removeItem("hcpv04DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpv04Treatment");
  localStorage.removeItem("hcpv04ResendingSR1Form");
  localStorage.removeItem("hcpv04PatientAddressLine1");
  localStorage.removeItem("hcpv04PatientAddressLine2");
  localStorage.removeItem("hcpv04PatientAddressTown")
  localStorage.removeItem("hcpv04PatientPostcode");
  localStorage.removeItem("hcpv04UpdateProfileDetailsFromSendSR1FormPage");
  localStorage.removeItem("hcpv04IsLoggedIn");
  // Log out of version v05
  localStorage.removeItem('hcpv05SigninOrg');
  localStorage.removeItem('hcpv05HcpEmail');
  localStorage.removeItem('hcpv05Fullname');
  localStorage.removeItem('hcpv05Role');
  localStorage.removeItem('hcpv05ProfessionalRegistrationNumber');
  localStorage.removeItem('hcpv05MobileNumber');
  localStorage.removeItem('hcpv05OrganisationName');
  localStorage.removeItem('hcpv05OrganisationAddressLine1');
  localStorage.removeItem('hcpv05OrganisationAddressLine2');
  localStorage.removeItem('hcpv05TownOrCity');
  localStorage.removeItem('hcpv05Postcode');
  localStorage.removeItem('hcpv05ChangingReceiveReminders');
  localStorage.removeItem('hcpv05ReceiveReminder');
  localStorage.removeItem('hcpv05ReminderType');
  localStorage.removeItem('hcpv05ReminderFrequency');
  localStorage.removeItem('hcpv05ReminderTriggered');
  localStorage.removeItem('hcpv05ChangingPractitionerName');
  localStorage.removeItem('hcpv05ChangingPractitionerRole');
  localStorage.removeItem('hcpv05ChangingPractitionerRegNo');
  localStorage.removeItem('hcpv05ChangingPractitionerPhoneNo');
  localStorage.removeItem('hcpv05ChangingPractitionerOrgName');
  localStorage.removeItem('hcpv05ChangingPractitionerOrgAddress');
  localStorage.removeItem('hcpv05ChangingPractitionerNameNew');
  localStorage.removeItem('hcpv05ChangingPractitionerRoleNew');
  localStorage.removeItem('hcpv05ChangingPractitionerRegNoNew');
  localStorage.removeItem('hcpv05ChangingPractitionerPhoneNoNew');
  localStorage.removeItem('hcpv05ChangingPractitionerOrgNameNew');
  localStorage.removeItem('hcpv05ChangingPractitionerOrgAddressNew');
  localStorage.removeItem('hcpv05ProfileTriggered');
  localStorage.removeItem('hcpv05OtherRole');
  localStorage.removeItem('hcpv05ExistingHcpUser');
  localStorage.removeItem('hcpv05NewHcpUser');
  localStorage.removeItem("hcpv05PatientFullName");
  localStorage.removeItem("hcpv05DobDay");
  localStorage.removeItem("hcpv05DobMonth");
  localStorage.removeItem("hcpv05DobYear");
  localStorage.removeItem("hcpv05Address");
  localStorage.removeItem("hcpv05NiNo");
  localStorage.removeItem("hcpv05DateofSpecialRulesDay");
  localStorage.removeItem("hcpv05DateofSpecialRulesMonth");
  localStorage.removeItem("hcpv05DateofSpecialRulesYear");
  localStorage.removeItem("hcpv05WhatIsTheDiagnosis");
  localStorage.removeItem("hcpv05OtherRelevantDiagnosis");
  localStorage.removeItem("hcpv05AwareOfDiagnosis");
  localStorage.removeItem("hcpv05AwareOfPrognosis");
  localStorage.removeItem("hcpv05DodDay");
  localStorage.removeItem("hcpv05DodMonth");
  localStorage.removeItem("hcpv05DodYear");
  localStorage.removeItem("hcpv05DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpv05Treatment");
  localStorage.removeItem("hcpv05ResendingSR1Form");
  localStorage.removeItem("hcpv05PatientAddressLine1");
  localStorage.removeItem("hcpv05PatientAddressLine2");
  localStorage.removeItem("hcpv05PatientAddressTown")
  localStorage.removeItem("hcpv05PatientPostcode");
  localStorage.removeItem("hcpv05UpdateProfileDetailsFromSendSR1FormPage");
  localStorage.removeItem("hcpv05IsLoggedIn");
  // Log out of version v06
  localStorage.removeItem('hcpv06SigninOrg');
  localStorage.removeItem('hcpv06HcpEmail');
  localStorage.removeItem('hcpv06Fullname');
  localStorage.removeItem('hcpv06Role');
  localStorage.removeItem('hcpv06ProfessionalRegistrationNumber');
  localStorage.removeItem('hcpv06MobileNumber');
  localStorage.removeItem('hcpv06OrganisationName');
  localStorage.removeItem('hcpv06OrganisationAddressLine1');
  localStorage.removeItem('hcpv06OrganisationAddressLine2');
  localStorage.removeItem('hcpv06TownOrCity');
  localStorage.removeItem('hcpv06Postcode');
  localStorage.removeItem('hcpv06ChangingReceiveReminders');
  localStorage.removeItem('hcpv06ReceiveReminder');
  localStorage.removeItem('hcpv06ReminderType');
  localStorage.removeItem('hcpv06ReminderFrequency');
  localStorage.removeItem('hcpv06ReminderTriggered');
  localStorage.removeItem('hcpv06ChangingPractitionerName');
  localStorage.removeItem('hcpv06ChangingPractitionerRole');
  localStorage.removeItem('hcpv06ChangingPractitionerRegNo');
  localStorage.removeItem('hcpv06ChangingPractitionerPhoneNo');
  localStorage.removeItem('hcpv06ChangingPractitionerOrgName');
  localStorage.removeItem('hcpv06ChangingPractitionerOrgAddress');
  localStorage.removeItem('hcpv06ChangingPractitionerNameNew');
  localStorage.removeItem('hcpv06ChangingPractitionerRoleNew');
  localStorage.removeItem('hcpv06ChangingPractitionerRegNoNew');
  localStorage.removeItem('hcpv06ChangingPractitionerPhoneNoNew');
  localStorage.removeItem('hcpv06ChangingPractitionerOrgNameNew');
  localStorage.removeItem('hcpv06ChangingPractitionerOrgAddressNew');
  localStorage.removeItem('hcpv06ProfileTriggered');
  localStorage.removeItem('hcpv06OtherRole');
  localStorage.removeItem('hcpv06ExistingHcpUser');
  localStorage.removeItem('hcpv06NewHcpUser');
  localStorage.removeItem("hcpv06PatientFullName");
  localStorage.removeItem("hcpv06DobDay");
  localStorage.removeItem("hcpv06DobMonth");
  localStorage.removeItem("hcpv06DobYear");
  localStorage.removeItem("hcpv06Address");
  localStorage.removeItem("hcpv06NiNo");
  localStorage.removeItem("hcpv06DateofSpecialRulesDay");
  localStorage.removeItem("hcpv06DateofSpecialRulesMonth");
  localStorage.removeItem("hcpv06DateofSpecialRulesYear");
  localStorage.removeItem("hcpv06WhatIsTheDiagnosis");
  localStorage.removeItem("hcpv06OtherRelevantDiagnosis");
  localStorage.removeItem("hcpv06AwareOfDiagnosis");
  localStorage.removeItem("hcpv06AwareOfPrognosis");
  localStorage.removeItem("hcpv06DodDay");
  localStorage.removeItem("hcpv06DodMonth");
  localStorage.removeItem("hcpv06DodYear");
  localStorage.removeItem("hcpv06DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpv06Treatment");
  localStorage.removeItem("hcpv06ResendingSR1Form");
  localStorage.removeItem("hcpv06PatientAddressLine1");
  localStorage.removeItem("hcpv06PatientAddressLine2");
  localStorage.removeItem("hcpv06PatientAddressTown")
  localStorage.removeItem("hcpv06PatientPostcode");
  localStorage.removeItem("hcpv06UpdateProfileDetailsFromSendSR1FormPage");
  localStorage.removeItem("hcpv06IsLoggedIn");
  // Log out of version v07
  localStorage.removeItem('hcpv07SigninOrg');
  localStorage.removeItem('hcpv07HcpEmail');
  localStorage.removeItem('hcpv07Fullname');
  localStorage.removeItem('hcpv07Role');
  localStorage.removeItem('hcpv07ProfessionalRegistrationNumber');
  localStorage.removeItem('hcpv07MobileNumber');
  localStorage.removeItem('hcpv07OrganisationName');
  localStorage.removeItem('hcpv07OrganisationAddressLine1');
  localStorage.removeItem('hcpv07OrganisationAddressLine2');
  localStorage.removeItem('hcpv07TownOrCity');
  localStorage.removeItem('hcpv07Postcode');
  localStorage.removeItem('hcpv07ChangingReceiveReminders');
  localStorage.removeItem('hcpv07ReceiveReminder');
  localStorage.removeItem('hcpv07ReminderType');
  localStorage.removeItem('hcpv07ReminderFrequency');
  localStorage.removeItem('hcpv07ReminderTriggered');
  localStorage.removeItem('hcpv07ChangingPractitionerName');
  localStorage.removeItem('hcpv07ChangingPractitionerRole');
  localStorage.removeItem('hcpv07ChangingPractitionerRegNo');
  localStorage.removeItem('hcpv07ChangingPractitionerPhoneNo');
  localStorage.removeItem('hcpv07ChangingPractitionerOrgName');
  localStorage.removeItem('hcpv07ChangingPractitionerOrgAddress');
  localStorage.removeItem('hcpv07ChangingPractitionerNameNew');
  localStorage.removeItem('hcpv07ChangingPractitionerRoleNew');
  localStorage.removeItem('hcpv07ChangingPractitionerRegNoNew');
  localStorage.removeItem('hcpv07ChangingPractitionerPhoneNoNew');
  localStorage.removeItem('hcpv07ChangingPractitionerOrgNameNew');
  localStorage.removeItem('hcpv07ChangingPractitionerOrgAddressNew');
  localStorage.removeItem('hcpv07ProfileTriggered');
  localStorage.removeItem('hcpv07OtherRole');
  localStorage.removeItem('hcpv07ExistingHcpUser');
  localStorage.removeItem('hcpv07NewHcpUser');
  localStorage.removeItem("hcpv07PatientFullName");
  localStorage.removeItem("hcpv07DobDay");
  localStorage.removeItem("hcpv07DobMonth");
  localStorage.removeItem("hcpv07DobYear");
  localStorage.removeItem("hcpv07Address");
  localStorage.removeItem("hcpv07NiNo");
  localStorage.removeItem("hcpv07DateofSpecialRulesDay");
  localStorage.removeItem("hcpv07DateofSpecialRulesMonth");
  localStorage.removeItem("hcpv07DateofSpecialRulesYear");
  localStorage.removeItem("hcpv07WhatIsTheDiagnosis");
  localStorage.removeItem("hcpv07OtherRelevantDiagnosis");
  localStorage.removeItem("hcpv07AwareOfDiagnosis");
  localStorage.removeItem("hcpv07AwareOfPrognosis");
  localStorage.removeItem("hcpv07DodDay");
  localStorage.removeItem("hcpv07DodMonth");
  localStorage.removeItem("hcpv07DodYear");
  localStorage.removeItem("hcpv07DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpv07Treatment");
  localStorage.removeItem("hcpv07ResendingSR1Form");
  localStorage.removeItem("hcpv07PatientAddressLine1");
  localStorage.removeItem("hcpv07PatientAddressLine2");
  localStorage.removeItem("hcpv07PatientAddressTown");
  localStorage.removeItem("hcpv07PatientPostcode");
  localStorage.removeItem("hcpv07UpdateProfileDetailsFromSendSR1FormPage");
  localStorage.removeItem("hcpv07IsLoggedIn");
  // Log out of version v08
  localStorage.removeItem('hcpv08SigninOrg');
  localStorage.removeItem('hcpv08HcpEmail');
  localStorage.removeItem('hcpv08Fullname');
  localStorage.removeItem('hcpv08Role');
  localStorage.removeItem('hcpv08ProfessionalRegistrationNumber');
  localStorage.removeItem('hcpv08MobileNumber');
  localStorage.removeItem('hcpv08OrganisationName');
  localStorage.removeItem('hcpv08OrganisationAddressLine1');
  localStorage.removeItem('hcpv08OrganisationAddressLine2');
  localStorage.removeItem('hcpv08TownOrCity');
  localStorage.removeItem('hcpv08Postcode');
  localStorage.removeItem('hcpv08ChangingReceiveReminders');
  localStorage.removeItem('hcpv08ReceiveReminder');
  localStorage.removeItem('hcpv08ReminderType');
  localStorage.removeItem('hcpv08ReminderFrequency');
  localStorage.removeItem('hcpv08ReminderTriggered');
  localStorage.removeItem('hcpv08ChangingPractitionerName');
  localStorage.removeItem('hcpv08ChangingPractitionerRole');
  localStorage.removeItem('hcpv08ChangingPractitionerRegNo');
  localStorage.removeItem('hcpv08ChangingPractitionerPhoneNo');
  localStorage.removeItem('hcpv08ChangingPractitionerOrgName');
  localStorage.removeItem('hcpv08ChangingPractitionerOrgAddress');
  localStorage.removeItem('hcpv08ChangingPractitionerNameNew');
  localStorage.removeItem('hcpv08ChangingPractitionerRoleNew');
  localStorage.removeItem('hcpv08ChangingPractitionerRegNoNew');
  localStorage.removeItem('hcpv08ChangingPractitionerPhoneNoNew');
  localStorage.removeItem('hcpv08ChangingPractitionerOrgNameNew');
  localStorage.removeItem('hcpv08ChangingPractitionerOrgAddressNew');
  localStorage.removeItem('hcpv08ProfileTriggered');
  localStorage.removeItem('hcpv08OtherRole');
  localStorage.removeItem('hcpv08ExistingHcpUser');
  localStorage.removeItem('hcpv08NewHcpUser');
  localStorage.removeItem("hcpv08PatientFullName");
  localStorage.removeItem("hcpv08DobDay");
  localStorage.removeItem("hcpv08DobMonth");
  localStorage.removeItem("hcpv08DobYear");
  localStorage.removeItem("hcpv08Address");
  localStorage.removeItem("hcpv08NiNo");
  localStorage.removeItem("hcpv08DateofSpecialRulesDay");
  localStorage.removeItem("hcpv08DateofSpecialRulesMonth");
  localStorage.removeItem("hcpv08DateofSpecialRulesYear");
  localStorage.removeItem("hcpv08WhatIsTheDiagnosis");
  localStorage.removeItem("hcpv08OtherRelevantDiagnosis");
  localStorage.removeItem("hcpv08AwareOfDiagnosis");
  localStorage.removeItem("hcpv08AwareOfPrognosis");
  localStorage.removeItem("hcpv08DodDay");
  localStorage.removeItem("hcpv08DodMonth");
  localStorage.removeItem("hcpv08DodYear");
  localStorage.removeItem("hcpv08DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpv08Treatment");
  localStorage.removeItem("hcpv08ResendingSR1Form");
  localStorage.removeItem("hcpv08PatientAddressLine1");
  localStorage.removeItem("hcpv08PatientAddressLine2");
  localStorage.removeItem("hcpv08PatientAddressTown")
  localStorage.removeItem("hcpv08PatientPostcode");
  localStorage.removeItem("hcpv08UpdateProfileDetailsFromSendSR1FormPage");
  localStorage.removeItem("hcpv08IsLoggedIn");
  // Log out of version v09
  localStorage.removeItem('hcpv09SigninOrg');
  localStorage.removeItem('hcpv09HcpEmail');
  localStorage.removeItem('hcpv09Fullname');
  localStorage.removeItem('hcpv09Role');
  localStorage.removeItem('hcpv09ProfessionalRegistrationNumber');
  localStorage.removeItem('hcpv09MobileNumber');
  localStorage.removeItem('hcpv09OrganisationName');
  localStorage.removeItem('hcpv09OrganisationAddressLine1');
  localStorage.removeItem('hcpv09OrganisationAddressLine2');
  localStorage.removeItem('hcpv09TownOrCity');
  localStorage.removeItem('hcpv09Postcode');
  localStorage.removeItem('hcpv09ChangingReceiveReminders');
  localStorage.removeItem('hcpv09ReceiveReminder');
  localStorage.removeItem('hcpv09ReminderType');
  localStorage.removeItem('hcpv09ReminderFrequency');
  localStorage.removeItem('hcpv09ReminderTriggered');
  localStorage.removeItem('hcpv09ChangingPractitionerName');
  localStorage.removeItem('hcpv09ChangingPractitionerRole');
  localStorage.removeItem('hcpv09ChangingPractitionerRegNo');
  localStorage.removeItem('hcpv09ChangingPractitionerPhoneNo');
  localStorage.removeItem('hcpv09ChangingPractitionerOrgName');
  localStorage.removeItem('hcpv09ChangingPractitionerOrgAddress');
  localStorage.removeItem('hcpv09ChangingPractitionerNameNew');
  localStorage.removeItem('hcpv09ChangingPractitionerRoleNew');
  localStorage.removeItem('hcpv09ChangingPractitionerRegNoNew');
  localStorage.removeItem('hcpv09ChangingPractitionerPhoneNoNew');
  localStorage.removeItem('hcpv09ChangingPractitionerOrgNameNew');
  localStorage.removeItem('hcpv09ChangingPractitionerOrgAddressNew');
  localStorage.removeItem('hcpv09ProfileTriggered');
  localStorage.removeItem('hcpv09OtherRole');
  localStorage.removeItem('hcpv09ExistingHcpUser');
  localStorage.removeItem('hcpv09NewHcpUser');
  localStorage.removeItem("hcpv09PatientFullName");
  localStorage.removeItem("hcpv09DobDay");
  localStorage.removeItem("hcpv09DobMonth");
  localStorage.removeItem("hcpv09DobYear");
  localStorage.removeItem("hcpv09Address");
  localStorage.removeItem("hcpv09NiNo");
  localStorage.removeItem("hcpv09DateofSpecialRulesDay");
  localStorage.removeItem("hcpv09DateofSpecialRulesMonth");
  localStorage.removeItem("hcpv09DateofSpecialRulesYear");
  localStorage.removeItem("hcpv09WhatIsTheDiagnosis");
  localStorage.removeItem("hcpv09OtherRelevantDiagnosis");
  localStorage.removeItem("hcpv09AwareOfDiagnosis");
  localStorage.removeItem("hcpv09AwareOfPrognosis");
  localStorage.removeItem("hcpv09DodDay");
  localStorage.removeItem("hcpv09DodMonth");
  localStorage.removeItem("hcpv09DodYear");
  localStorage.removeItem("hcpv09DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpv09Treatment");
  localStorage.removeItem("hcpv09ResendingSR1Form");
  localStorage.removeItem("hcpv09PatientAddressLine1");
  localStorage.removeItem("hcpv09PatientAddressLine2");
  localStorage.removeItem("hcpv09PatientAddressTown")
  localStorage.removeItem("hcpv09PatientPostcode");
  localStorage.removeItem("hcpv09UpdateProfileDetailsFromSendSR1FormPage");
  localStorage.removeItem("hcpv09IsLoggedIn");
  // Log out of version mvp01
  localStorage.removeItem('hcpmvp01SigninOrg');
  localStorage.removeItem('hcpmvp01HcpEmail');
  localStorage.removeItem('hcpmvp01Firstname');
  localStorage.removeItem('hcpmvp01Lastname');
  localStorage.removeItem('hcpmvp01Role');
  localStorage.removeItem('hcpmvp01OtherRole');
  localStorage.removeItem('hcpmvp01ProfessionalRegistrationNumber');
  localStorage.removeItem('hcpmvp01MobileNumber');
  localStorage.removeItem('hcpmvp01OrganisationName');
  localStorage.removeItem('hcpmvp01OrganisationAddressLine1');
  localStorage.removeItem('hcpmvp01OrganisationAddressLine2');
  localStorage.removeItem('hcpmvp01OrganisationAddressCounty');
  localStorage.removeItem('hcpmvp01TownOrCity');
  localStorage.removeItem('hcpmvp01Postcode');
  localStorage.removeItem('hcpmvp01ChangingReceiveReminders');
  localStorage.removeItem('hcpmvp01ReceiveReminder');
  localStorage.removeItem('hcpmvp01ReminderType');
  localStorage.removeItem('hcpmvp01ReminderFrequency');
  localStorage.removeItem('hcpmvp01ReminderTriggered');
  localStorage.removeItem('hcpmvp01ChangingPractitionerName');
  localStorage.removeItem('hcpmvp01ChangingPractitionerRole');
  localStorage.removeItem('hcpmvp01ChangingPractitionerRegNo');
  localStorage.removeItem('hcpmvp01ChangingPractitionerPhoneNo');
  localStorage.removeItem('hcpmvp01ChangingPractitionerOrgName');
  localStorage.removeItem('hcpmvp01ChangingPractitionerOrgAddress');
  localStorage.removeItem('hcpmvp01ChangingPractitionerNameNew');
  localStorage.removeItem('hcpmvp01ChangingPractitionerRoleNew');
  localStorage.removeItem('hcpmvp01ChangingPractitionerRegNoNew');
  localStorage.removeItem('hcpmvp01ChangingPractitionerPhoneNoNew');
  localStorage.removeItem('hcpmvp01ChangingPractitionerOrgNameNew');
  localStorage.removeItem('hcpmvp01ChangingPractitionerOrgAddressNew');
  localStorage.removeItem('hcpmvp01ProfileTriggered');
  localStorage.removeItem('hcpmvp01OtherRole');
  localStorage.removeItem('hcpmvp01ExistingHcpUser');
  localStorage.removeItem('hcpmvp01NewHcpUser');
  localStorage.removeItem("hcpmvp01PatientFirstName");
  localStorage.removeItem("hcpmvp01PatientLastName");
  localStorage.removeItem("hcpmvp01DobDay");
  localStorage.removeItem("hcpmvp01DobMonth");
  localStorage.removeItem("hcpmvp01DobYear");
  localStorage.removeItem("hcpmvp01Address");
  localStorage.removeItem("hcpmvp01NiNo");
  localStorage.removeItem("hcpmvp01DateofSpecialRulesDay");
  localStorage.removeItem("hcpmvp01DateofSpecialRulesMonth");
  localStorage.removeItem("hcpmvp01DateofSpecialRulesYear");
  localStorage.removeItem("hcpmvp01WhatIsTheDiagnosis");
  localStorage.removeItem("hcpmvp01OtherRelevantDiagnosis");
  localStorage.removeItem("hcpmvp01AwareOfDiagnosis");
  localStorage.removeItem("hcpmvp01AwareOfPrognosis");
  localStorage.removeItem("hcpmvp01DodDay");
  localStorage.removeItem("hcpmvp01DodMonth");
  localStorage.removeItem("hcpmvp01DodYear");
  localStorage.removeItem("hcpmvp01DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpmvp01Treatment");
  localStorage.removeItem("hcpmvp01ResendingSR1Form");
  localStorage.removeItem("hcpmvp01PatientAddressLine1");
  localStorage.removeItem("hcpmvp01PatientAddressLine2");
  localStorage.removeItem("hcpmvp01PatientAddressTown")
  localStorage.removeItem("hcpmvp01PatientAddressCounty")
  localStorage.removeItem("hcpmvp01PatientPostcode");
  localStorage.removeItem("hcpmvp01UpdateProfileDetailsFromSendSR1FormPage");
  localStorage.removeItem("hcpmvp01IsLoggedIn");
  // Log out of version mvp02
  localStorage.removeItem('hcpmvp02SigninOrg');
  localStorage.removeItem('hcpmvp02HcpEmail');
  localStorage.removeItem('hcpmvp02Firstname');
  localStorage.removeItem('hcpmvp02Lastname');
  localStorage.removeItem('hcpmvp02Role');
  localStorage.removeItem('hcpmvp02OtherRole');
  localStorage.removeItem('hcpmvp02ProfessionalRegistrationNumber');
  localStorage.removeItem('hcpmvp02MobileNumber');
  localStorage.removeItem('hcpmvp02OrganisationName');
  localStorage.removeItem('hcpmvp02OrganisationAddressLine1');
  localStorage.removeItem('hcpmvp02OrganisationAddressLine2');
  localStorage.removeItem('hcpmvp02OrganisationAddressCounty');
  localStorage.removeItem('hcpmvp02TownOrCity');
  localStorage.removeItem('hcpmvp02Postcode');
  localStorage.removeItem('hcpmvp02ChangingReceiveReminders');
  localStorage.removeItem('hcpmvp02ReceiveReminder');
  localStorage.removeItem('hcpmvp02ReminderType');
  localStorage.removeItem('hcpmvp02ReminderFrequency');
  localStorage.removeItem('hcpmvp02ReminderTriggered');
  localStorage.removeItem('hcpmvp02ChangingPractitionerName');
  localStorage.removeItem('hcpmvp02ChangingPractitionerRole');
  localStorage.removeItem('hcpmvp02ChangingPractitionerRegNo');
  localStorage.removeItem('hcpmvp02ChangingPractitionerPhoneNo');
  localStorage.removeItem('hcpmvp02ChangingPractitionerOrgName');
  localStorage.removeItem('hcpmvp02ChangingPractitionerOrgAddress');
  localStorage.removeItem('hcpmvp02ChangingPractitionerNameNew');
  localStorage.removeItem('hcpmvp02ChangingPractitionerRoleNew');
  localStorage.removeItem('hcpmvp02ChangingPractitionerRegNoNew');
  localStorage.removeItem('hcpmvp02ChangingPractitionerPhoneNoNew');
  localStorage.removeItem('hcpmvp02ChangingPractitionerOrgNameNew');
  localStorage.removeItem('hcpmvp02ChangingPractitionerOrgAddressNew');
  localStorage.removeItem('hcpmvp02ProfileTriggered');
  localStorage.removeItem('hcpmvp02OtherRole');
  localStorage.removeItem('hcpmvp02ExistingHcpUser');
  localStorage.removeItem('hcpmvp02NewHcpUser');
  localStorage.removeItem("hcpmvp02PatientFirstName");
  localStorage.removeItem("hcpmvp02PatientLastName");
  localStorage.removeItem("hcpmvp02DobDay");
  localStorage.removeItem("hcpmvp02DobMonth");
  localStorage.removeItem("hcpmvp02DobYear");
  localStorage.removeItem("hcpmvp02Address");
  localStorage.removeItem("hcpmvp02NiNo");
  localStorage.removeItem("hcpmvp02DateofSpecialRulesDay");
  localStorage.removeItem("hcpmvp02DateofSpecialRulesMonth");
  localStorage.removeItem("hcpmvp02DateofSpecialRulesYear");
  localStorage.removeItem("hcpmvp02WhatIsTheDiagnosis");
  localStorage.removeItem("hcpmvp02OtherRelevantDiagnosis");
  localStorage.removeItem("hcpmvp02AwareOfDiagnosis");
  localStorage.removeItem("hcpmvp02AwareOfPrognosis");
  localStorage.removeItem("hcpmvp02DodDay");
  localStorage.removeItem("hcpmvp02DodMonth");
  localStorage.removeItem("hcpmvp02DodYear");
  localStorage.removeItem("hcpmvp02DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpmvp02Treatment");
  localStorage.removeItem("hcpmvp02ResendingSR1Form");
  localStorage.removeItem("hcpmvp02PatientAddressLine1");
  localStorage.removeItem("hcpmvp02PatientAddressLine2");
  localStorage.removeItem("hcpmvp02PatientAddressTown")
  localStorage.removeItem("hcpmvp02PatientAddressCounty")
  localStorage.removeItem("hcpmvp02PatientPostcode");
  localStorage.removeItem("hcpmvp02UpdateProfileDetailsFromSendSR1FormPage");
  localStorage.removeItem("hcpmvp02IsLoggedIn");
  // Log out of version mvp03
  localStorage.removeItem('hcpmvp03SigninOrg');
  localStorage.removeItem('hcpmvp03HcpEmail');
  localStorage.removeItem('hcpmvp03Firstname');
  localStorage.removeItem('hcpmvp03Lastname');
  localStorage.removeItem('hcpmvp03Role');
  localStorage.removeItem('hcpmvp03otherRole');
  localStorage.removeItem('hcpmvp03ProfessionalRegistrationNumber');
  localStorage.removeItem('hcpmvp03MobileNumber');
  localStorage.removeItem('hcpmvp03OrganisationName');
  localStorage.removeItem('hcpmvp03OrganisationAddressLine1');
  localStorage.removeItem('hcpmvp03OrganisationAddressLine2');
  localStorage.removeItem('hcpmvp03OrganisationAddressCounty');
  localStorage.removeItem('hcpmvp03TownOrCity');
  localStorage.removeItem('hcpmvp03Postcode');
  localStorage.removeItem('hcpmvp03ChangingReceiveReminders');
  localStorage.removeItem('hcpmvp03ReceiveReminder');
  localStorage.removeItem('hcpmvp03ReminderType');
  localStorage.removeItem('hcpmvp03ReminderFrequency');
  localStorage.removeItem('hcpmvp03ReminderTriggered');
  localStorage.removeItem('hcpmvp03ChangingPractitionerName');
  localStorage.removeItem('hcpmvp03ChangingPractitionerRole');
  localStorage.removeItem('hcpmvp03ChangingPractitionerRegNo');
  localStorage.removeItem('hcpmvp03ChangingPractitionerPhoneNo');
  localStorage.removeItem('hcpmvp03ChangingPractitionerOrgName');
  localStorage.removeItem('hcpmvp03ChangingPractitionerOrgAddress');
  localStorage.removeItem('hcpmvp03ChangingPractitionerNameNew');
  localStorage.removeItem('hcpmvp03ChangingPractitionerRoleNew');
  localStorage.removeItem('hcpmvp03ChangingPractitionerRegNoNew');
  localStorage.removeItem('hcpmvp03ChangingPractitionerPhoneNoNew');
  localStorage.removeItem('hcpmvp03ChangingPractitionerOrgNameNew');
  localStorage.removeItem('hcpmvp03ChangingPractitionerOrgAddressNew');
  localStorage.removeItem('hcpmvp03ProfileTriggered');
  localStorage.removeItem('hcpmvp03OtherRole');
  localStorage.removeItem('hcpmvp03ExistingHcpUser');
  localStorage.removeItem('hcpmvp03NewHcpUser');
  localStorage.removeItem("hcpmvp03PatientFirstName");
  localStorage.removeItem("hcpmvp03PatientLastName");
  localStorage.removeItem("hcpmvp03PatientNameDefined");
  localStorage.removeItem("hcpmvp03DobDay");
  localStorage.removeItem("hcpmvp03DobMonth");
  localStorage.removeItem("hcpmvp03DobYear");
  localStorage.removeItem("hcpmvp03Address");
  localStorage.removeItem("hcpmvp03NiNo");
  localStorage.removeItem("hcpmvp03NiNoinput");
  localStorage.removeItem("hcpmvp03DateofSpecialRulesDay");
  localStorage.removeItem("hcpmvp03DateofSpecialRulesMonth");
  localStorage.removeItem("hcpmvp03DateofSpecialRulesYear");
  localStorage.removeItem("hcpmvp03WhatIsTheDiagnosis");
  localStorage.removeItem("hcpmvp03OtherRelevantDiagnosis");
  localStorage.removeItem("hcpmvp03OtherRelevantDiagnosisinput");
  localStorage.removeItem("hcpmvp03AwareOfDiagnosis");
  localStorage.removeItem("hcpmvp03AwareOfPrognosis");
  localStorage.removeItem("hcpmvp03DodDay");
  localStorage.removeItem("hcpmvp03DodMonth");
  localStorage.removeItem("hcpmvp03DodYear");
  localStorage.removeItem("hcpmvp03DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpmvp03Treatment");
  localStorage.removeItem("hcpmvp03ResendingSR1Form");
  localStorage.removeItem("hcpmvp03PatientAddressLine1");
  localStorage.removeItem("hcpmvp03PatientAddressLine2");
  localStorage.removeItem("hcpmvp03PatientAddressTown")
  localStorage.removeItem("hcpmvp03PatientAddressCounty")
  localStorage.removeItem("hcpmvp03PatientPostcode");
  localStorage.removeItem("hcpmvp03UpdateProfileDetailsFromSendSR1FormPage");
  localStorage.removeItem("hcpmvp03IsLoggedIn");
}
let currentValueOfOrg = 0;

// signin-page

// v01
function hcpv01SigninOrgFn(organisationSignin) {
  currentValueOfOrg = organisationSignin.value;
  localStorage.setItem('hcpv01SigninOrg', currentValueOfOrg);
  if (consoleLogs) console.log('organisationSignin: ' + currentValueOfOrg);
  localStorage.setItem('hcpv01NewHcpUser', true);
  localStorage.removeItem('hcpv01ExistingHcpUser');
}
function hcpv01SignIn() {
  const hcpv01SigninPageRoute = document.getElementById('hcpv01SigninPage');
  let hcpEmailAddress = document.getElementById('hcpv01Signin_email').value;
  let hcppassword = document.getElementById('hcpv01Signin_password').value;
  if (hcpEmailAddress === 'test1@trust.nhs.com' && hcppassword === 'test1') {
    console.log('redirect to NEW dashboard');
    localStorage.setItem('hcpv01NewHcpUser', true);
    localStorage.removeItem('hcpv01ExistingHcpUser');
    hcpv01SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v01/account-new-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpv01Fullname", 'Jean Grey');
    localStorage.setItem("hcpv01ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpv01MobileNumber", '07900 000 010');
    localStorage.setItem("hcpv01OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpv01OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpv01OrganisationAddressLine2", 'Anytown');
    localStorage.setItem("hcpv01TownOrCity", "Glenrothes");
    localStorage.setItem("hcpv01Postcode", "SE1 AAA");
    localStorage.setItem("hcpv01Role", " General practitioner");
    localStorage.setItem("hcpv01ReceiveReminder", "Yes");
    localStorage.setItem("hcpv01ReminderType", "Email and text");
    localStorage.setItem("hcpv01ReminderFrequency", "Weekly");
  } else if (hcpEmailAddress === 'test2@trust.nhs.com' && hcppassword === 'test2') {
    console.log('redirect to EXISTING dashboard');
    localStorage.setItem('hcpv01ExistingHcpUser', true);
    localStorage.removeItem('hcpv01NewHcpUser');
    hcpv01SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v01/account-d-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpv01Fullname", 'Jean Grey');
    localStorage.setItem("hcpv01ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpv01MobileNumber", '07900 000 010');
    localStorage.setItem("hcpv01OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpv01OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpv01OrganisationAddressLine2", 'Anytown');
    localStorage.setItem("hcpv01TownOrCity", "Glenrothes");
    localStorage.setItem("hcpv01Postcode", "SE1 AAA");
    localStorage.setItem("hcpv01Role", "General practitioner");
    localStorage.setItem("hcpv01ReceiveReminder", "Yes");
    localStorage.setItem("hcpv01ReminderType", "Email");
    localStorage.setItem("hcpv01ReminderFrequency", "Daily");
  } else {
    console.log('redirect to profile page');
    hcpv01SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v01/profile-setup");
  }
}

// v02
function hcpv02SigninOrgFn(organisationSignin) {
  currentValueOfOrg = organisationSignin.value;
  localStorage.setItem('hcpv02SigninOrg', currentValueOfOrg);
  if (consoleLogs) console.log('organisationSignin: ' + currentValueOfOrg);
  localStorage.setItem('hcpv02NewHcpUser', true);
  localStorage.removeItem('hcpv02ExistingHcpUser');
}

// v03
function hcpv03SigninOrgFn(organisationSignin) {
  currentValueOfOrg = organisationSignin.value;
  localStorage.setItem('hcpv03SigninOrg', currentValueOfOrg);
  if (consoleLogs) console.log('organisationSignin: ' + currentValueOfOrg);
  localStorage.setItem('hcpv03NewHcpUser', true);
  localStorage.removeItem('hcpv03ExistingHcpUser');
}

// v04
function hcpv04SigninOrgFn(organisationSignin) {
  currentValueOfOrg = organisationSignin.value;
  localStorage.setItem('hcpv04SigninOrg', currentValueOfOrg);
  if (consoleLogs) console.log('organisationSignin: ' + currentValueOfOrg);
  localStorage.setItem('hcpv04NewHcpUser', true);
  localStorage.removeItem('hcpv04ExistingHcpUser');
}
function hcpv04SignIn() {
  const hcpv04SigninPageRoute = document.getElementById('hcpv04SigninPage');
  let hcpEmailAddress = document.getElementById('hcpv04Signin_email').value;
  let hcppassword = document.getElementById('hcpv04Signin_password').value;
  if (hcpEmailAddress === 'test1@trust.nhs.com' && hcppassword === 'test1') {
    console.log('redirect to NEW dashboard');
    localStorage.setItem('hcpv04NewHcpUser', true);
    localStorage.removeItem('hcpv04ExistingHcpUser');
    hcpv04SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v04/account-new-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpv04Fullname", 'Jean Grey');
    localStorage.setItem("hcpv04ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpv04MobileNumber", '07900 000 010');
    localStorage.setItem("hcpv04OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpv04OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpv04OrganisationAddressLine2", 'Anytown');
    localStorage.setItem("hcpv04TownOrCity", "Glenrothes");
    localStorage.setItem("hcpv04Postcode", "SE1 AAA");
    localStorage.setItem("hcpv04Role", " General practitioner");
    localStorage.setItem("hcpv04ReceiveReminder", "Yes");
    localStorage.setItem("hcpv04ReminderType", "Email and text");
    localStorage.setItem("hcpv04ReminderFrequency", "Weekly");
  } else if (hcpEmailAddress === 'test2@trust.nhs.com' && hcppassword === 'test2') {
    console.log('redirect to EXISTING dashboard');
    localStorage.setItem('hcpv04ExistingHcpUser', true);
    localStorage.removeItem('hcpv04NewHcpUser');
    hcpv04SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v04/account-d-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpv04Fullname", 'Jean Grey');
    localStorage.setItem("hcpv04ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpv04MobileNumber", '07900 000 010');
    localStorage.setItem("hcpv04OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpv04OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpv04OrganisationAddressLine2", 'Anytown');
    localStorage.setItem("hcpv04TownOrCity", "Glenrothes");
    localStorage.setItem("hcpv04Postcode", "SE1 AAA");
    localStorage.setItem("hcpv04Role", " General practitioner");
    localStorage.setItem("hcpv04ReceiveReminder", "Yes");
    localStorage.setItem("hcpv04ReminderType", "Email");
    localStorage.setItem("hcpv04ReminderFrequency", "Daily");
  } else {
    console.log('redirect to profile page');
    hcpv04SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v04/profile-setup");
  }
}

// v05
function hcpv05SigninOrgFn(organisationSignin) {
  currentValueOfOrg = organisationSignin.value;
  localStorage.setItem('hcpv05SigninOrg', currentValueOfOrg);
  if (consoleLogs) console.log('organisationSignin: ' + currentValueOfOrg);
  localStorage.setItem('hcpv05NewHcpUser', true);
  localStorage.removeItem('hcpv05ExistingHcpUser');
}
function hcpv05SignIn() {
  const hcpv05SigninPageRoute = document.getElementById('hcpv05SigninPage');
  let hcpEmailAddress = document.getElementById('hcpv05Signin_email').value;
  let hcppassword = document.getElementById('hcpv05Signin_password').value;
  if (hcpEmailAddress === 'test1@trust.nhs.com' && hcppassword === 'test1') {
    console.log('redirect to NEW dashboard');
    localStorage.setItem('hcpv05NewHcpUser', true);
    localStorage.removeItem('hcpv05ExistingHcpUser');
    hcpv05SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v05/account-new-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpv05Fullname", 'Jean Grey');
    localStorage.setItem("hcpv05ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpv05MobileNumber", '07900 000 010');
    localStorage.setItem("hcpv05OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpv05OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpv05OrganisationAddressLine2", 'Anytown');
    localStorage.setItem("hcpv05TownOrCity", "Glenrothes");
    localStorage.setItem("hcpv05Postcode", "SE1 AAA");
    localStorage.setItem("hcpv05Role", " General practitioner");
    localStorage.setItem("hcpv05ReceiveReminder", "Yes");
    localStorage.setItem("hcpv05ReminderType", "Email");
    localStorage.setItem("hcpv05ReminderFrequency", "Weekly");
  } else if (hcpEmailAddress === 'test2@trust.nhs.com' && hcppassword === 'test2') {
    console.log('redirect to EXISTING dashboard');
    localStorage.setItem('hcpv05ExistingHcpUser', true);
    localStorage.removeItem('hcpv05NewHcpUser');
    hcpv05SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v05/account-d-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpv05Fullname", 'Jean Grey');
    localStorage.setItem("hcpv05ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpv05MobileNumber", '07900 000 010');
    localStorage.setItem("hcpv05OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpv05OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpv05OrganisationAddressLine2", 'Anytown');
    localStorage.setItem("hcpv05TownOrCity", "Glenrothes");
    localStorage.setItem("hcpv05Postcode", "SE1 AAA");
    localStorage.setItem("hcpv05Role", " General practitioner");
    localStorage.setItem("hcpv05ReceiveReminder", "Yes");
    localStorage.setItem("hcpv05ReminderType", "Email");
    localStorage.setItem("hcpv05ReminderFrequency", "Daily");
  } else {
    console.log('redirect to profile page');
    hcpv05SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v05/profile-setup");
  }
}

// v06
function hcpv06SigninOrgFn(organisationSignin) {
  currentValueOfOrg = organisationSignin.value;
  localStorage.setItem('hcpv06SigninOrg', currentValueOfOrg);
  if (consoleLogs) console.log('organisationSignin: ' + currentValueOfOrg);
  localStorage.setItem('hcpv06NewHcpUser', true);
  localStorage.removeItem('hcpv06ExistingHcpUser');
}
function hcpv06SignIn() {
  const hcpv06SigninPageRoute = document.getElementById('hcpv06SigninPage');
  let hcpEmailAddress = document.getElementById('hcpv06Signin_email').value;
  let hcppassword = document.getElementById('hcpv06Signin_password').value;
  if (hcpEmailAddress === 'test1@trust.nhs.com' && hcppassword === 'test1') {
    console.log('redirect to NEW dashboard');
    localStorage.setItem('hcpv06NewHcpUser', true);
    localStorage.removeItem('hcpv06ExistingHcpUser');
    hcpv06SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v06/account-new-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpv06Fullname", 'Jean Grey');
    localStorage.setItem("hcpv06ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpv06MobileNumber", '07900 000 010');
    localStorage.setItem("hcpv06OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpv06OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpv06TownOrCity", "Glenrothes");
    localStorage.setItem("hcpv06Postcode", "SE1 AAA");
    localStorage.setItem("hcpv06Role", " General practitioner");
    localStorage.setItem("hcpv06ReceiveReminder", "Yes");
    localStorage.setItem("hcpv06ReminderType", "Email and text");
    localStorage.setItem("hcpv06ReminderFrequency", "Weekly");
  } else if (hcpEmailAddress === 'test2@trust.nhs.com' && hcppassword === 'test2') {
    console.log('redirect to EXISTING dashboard');
    localStorage.setItem('hcpv06ExistingHcpUser', true);
    localStorage.removeItem('hcpv06NewHcpUser');
    hcpv06SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v06/account-d-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpv06Fullname", 'Jean Grey');
    localStorage.setItem("hcpv06ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpv06MobileNumber", '07900 000 010');
    localStorage.setItem("hcpv06OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpv06OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpv06TownOrCity", "Glenrothes");
    localStorage.setItem("hcpv06Postcode", "SE1 AAA");
    localStorage.setItem("hcpv06Role", " General practitioner");
    localStorage.setItem("hcpv06ReceiveReminder", "Yes");
    localStorage.setItem("hcpv06ReminderType", "Email");
    localStorage.setItem("hcpv06ReminderFrequency", "Daily");
  } else {
    console.log('redirect to profile page');
    hcpv06SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v06/profile-setup");
  }
}

// v07
function hcpv07SigninOrgFn(organisationSignin) {
  currentValueOfOrg = organisationSignin.value;
  localStorage.setItem('hcpv07SigninOrg', currentValueOfOrg);
  if (consoleLogs) console.log('organisationSignin: ' + currentValueOfOrg);
  localStorage.setItem('hcpv07NewHcpUser', true);
  localStorage.removeItem('hcpv07ExistingHcpUser');
}
function hcpv07SignIn() {
  const hcpv07SigninPageRoute = document.getElementById('hcpv07SigninPage');
  let hcpEmailAddress = document.getElementById('hcpv07Signin_email').value;
  let hcppassword = document.getElementById('hcpv07Signin_password').value;
  if (hcpEmailAddress === 'test1@trust.nhs.com' && hcppassword === 'test1') {
    console.log('redirect to NEW dashboard');
    localStorage.setItem('hcpv07NewHcpUser', true);
    localStorage.removeItem('hcpv07ExistingHcpUser');
    hcpv07SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v07/account-new-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpv07Fullname", 'Jean Grey');
    localStorage.setItem("hcpv07ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpv07MobileNumber", '07900 000 010');
    localStorage.setItem("hcpv07OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpv07OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpv07OrganisationAddressLine2", 'Anytown');
    localStorage.setItem("hcpv07TownOrCity", "Glenrothes");
    localStorage.setItem("hcpv07Postcode", "SE1 AAA");
    localStorage.setItem("hcpv07Role", " General practitioner");
    localStorage.setItem("hcpv07ReceiveReminder", "Yes");
    localStorage.setItem("hcpv07ReminderType", "Email");
    localStorage.setItem("hcpv07ReminderFrequency", "Weekly");
  } else if (hcpEmailAddress === 'test2@trust.nhs.com' && hcppassword === 'test2') {
    console.log('redirect to EXISTING dashboard');
    localStorage.setItem('hcpv07ExistingHcpUser', true);
    localStorage.removeItem('hcpv07NewHcpUser');
    hcpv07SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v07/account-d-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpv07Fullname", 'Jean Grey');
    localStorage.setItem("hcpv07ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpv07MobileNumber", '07900 000 010');
    localStorage.setItem("hcpv07OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpv07OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpv07OrganisationAddressLine2", 'Anytown');
    localStorage.setItem("hcpv07TownOrCity", "Glenrothes");
    localStorage.setItem("hcpv07Postcode", "SE1 AAA");
    localStorage.setItem("hcpv07Role", " General practitioner");
    localStorage.setItem("hcpv07ReceiveReminder", "Yes");
    localStorage.setItem("hcpv07ReminderType", "Email");
    localStorage.setItem("hcpv07ReminderFrequency", "Daily");
  } else {
    console.log('redirect to profile page');
    hcpv07SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v07/profile-setup");
  }
}

// v08
function hcpv08SigninOrgFn(organisationSignin) {
  currentValueOfOrg = organisationSignin.value;
  localStorage.setItem('hcpv08SigninOrg', currentValueOfOrg);
  if (consoleLogs) console.log('organisationSignin: ' + currentValueOfOrg);
  localStorage.setItem('hcpv08NewHcpUser', true);
  localStorage.removeItem('hcpv08ExistingHcpUser');
}
function hcpv08SignIn() {
  const hcpv08SigninPageRoute = document.getElementById('hcpv08SigninPage');
  let hcpEmailAddress = document.getElementById('hcpv08Signin_email').value;
  let hcppassword = document.getElementById('hcpv08Signin_password').value;
  if (hcpEmailAddress === 'test1@trust.nhs.com' && hcppassword === 'test1') {
    console.log('redirect to NEW dashboard');
    localStorage.setItem('hcpv08NewHcpUser', true);
    localStorage.removeItem('hcpv08ExistingHcpUser');
    hcpv08SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v08/account-new-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpv08Fullname", 'Jean Grey');
    localStorage.setItem("hcpv08ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpv08MobileNumber", '07900 000 010');
    localStorage.setItem("hcpv08OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpv08OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpv08OrganisationAddressLine2", 'Anytown');
    localStorage.setItem("hcpv08TownOrCity", "Glenrothes");
    localStorage.setItem("hcpv08Postcode", "SE1 AAA");
    localStorage.setItem("hcpv08Role", " General practitioner");
    localStorage.setItem("hcpv08ReceiveReminder", "Yes");
    localStorage.setItem("hcpv08ReminderType", "Email");
    localStorage.setItem("hcpv08ReminderFrequency", "Weekly");
  } else if (hcpEmailAddress === 'test2@trust.nhs.com' && hcppassword === 'test2') {
    console.log('redirect to EXISTING dashboard');
    localStorage.setItem('hcpv08ExistingHcpUser', true);
    localStorage.removeItem('hcpv08NewHcpUser');
    hcpv08SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v08/account-d-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpv08Fullname", 'Jean Grey');
    localStorage.setItem("hcpv08ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpv08MobileNumber", '07900 000 010');
    localStorage.setItem("hcpv08OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpv08OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpv08OrganisationAddressLine2", 'Anytown');
    localStorage.setItem("hcpv08TownOrCity", "Glenrothes");
    localStorage.setItem("hcpv08Postcode", "SE1 AAA");
    localStorage.setItem("hcpv08Role", " General practitioner");
    localStorage.setItem("hcpv08ReceiveReminder", "Yes");
    localStorage.setItem("hcpv08ReminderType", "Email");
    localStorage.setItem("hcpv08ReminderFrequency", "Daily");
  } else {
    console.log('redirect to profile page');
    hcpv05SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v08/profile-setup");
  }
}

// v09
function hcpv09SigninOrgFn(organisationSignin) {
  currentValueOfOrg = organisationSignin.value;
  localStorage.setItem('hcpv09SigninOrg', currentValueOfOrg);
  if (consoleLogs) console.log('organisationSignin: ' + currentValueOfOrg);
  localStorage.setItem('hcpv09NewHcpUser', true);
  localStorage.removeItem('hcpv09ExistingHcpUser');
}
function hcpv09SignIn() {
  const hcpv09SigninPageRoute = document.getElementById('hcpv09SigninPage');
  let hcpEmailAddress = document.getElementById('hcpv09Signin_email').value;
  let hcppassword = document.getElementById('hcpv09Signin_password').value;
  if (hcpEmailAddress === 'test1@trust.nhs.com' && hcppassword === 'test1') {
    console.log('redirect to NEW dashboard');
    localStorage.setItem('hcpv09NewHcpUser', true);
    localStorage.removeItem('hcpv09ExistingHcpUser');
    hcpv09SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v09/account-new-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpv09Fullname", 'Jean Grey');
    localStorage.setItem("hcpv09ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpv09MobileNumber", '07900 000 010');
    localStorage.setItem("hcpv09OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpv09OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpv09OrganisationAddressLine2", 'Anytown');
    localStorage.setItem("hcpv09TownOrCity", "Glenrothes");
    localStorage.setItem("hcpv09Postcode", "SE1 AAA");
    localStorage.setItem("hcpv09Role", " General practitioner");
    localStorage.setItem("hcpv09ReceiveReminder", "Yes");
    localStorage.setItem("hcpv09ReminderType", "Email and text");
    localStorage.setItem("hcpv09ReminderFrequency", "Weekly");
  } else if (hcpEmailAddress === 'test2@trust.nhs.com' && hcppassword === 'test2') {
    console.log('redirect to EXISTING dashboard');
    localStorage.setItem('hcpv09ExistingHcpUser', true);
    localStorage.removeItem('hcpv09NewHcpUser');
    hcpv09SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v09/account-d-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpv09Fullname", 'Jean Grey');
    localStorage.setItem("hcpv09ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpv09MobileNumber", '07900 000 010');
    localStorage.setItem("hcpv09OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpv09OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpv09OrganisationAddressLine2", 'Anytown');
    localStorage.setItem("hcpv09TownOrCity", "Glenrothes");
    localStorage.setItem("hcpv09Postcode", "SE1 AAA");
    localStorage.setItem("hcpv09Role", " General practitioner");
    localStorage.setItem("hcpv09ReceiveReminder", "Yes");
    localStorage.setItem("hcpv09ReminderType", "Email");
    localStorage.setItem("hcpv09ReminderFrequency", "Daily");
  } else {
    console.log('redirect to profile page');
    hcpv09SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-v09/profile-setup");
  }
}

// mvp01
function hcpmvp01SigninOrgFn(organisationSignin) {
  currentValueOfOrg = organisationSignin.value;
  localStorage.setItem('hcpmvp01SigninOrg', currentValueOfOrg);
  if (consoleLogs) console.log('organisationSignin: ' + currentValueOfOrg);
  localStorage.setItem('hcpmvp01NewHcpUser', true);
  localStorage.removeItem('hcpmvp01ExistingHcpUser');
}
function hcpmvp01SignIn() {
  const hcpmvp01SigninPageRoute = document.getElementById('hcpmvp01SigninPage');
  let hcpEmailAddress = document.getElementById('hcpmvp01Signin_email').value;
  let hcppassword = document.getElementById('hcpmvp01Signin_password').value;
  if (hcpEmailAddress === 'test1@trust.nhs.com' && hcppassword === 'test1') {
    console.log('redirect to NEW dashboard');
    localStorage.setItem('hcpmvp01NewHcpUser', true);
    localStorage.removeItem('hcpmvp01ExistingHcpUser');
    hcpmvp01SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-mvp01/account-new-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpmvp01Firstname", 'Jean');
    localStorage.setItem("hcpmvp01Lastname", 'Grey');
    localStorage.setItem("hcpmvp01ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpmvp01MobileNumber", '07900 000 010');
    localStorage.setItem("hcpmvp01OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpmvp01OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpmvp01OrganisationAddressLine2", 'Anytown');
    localStorage.setItem("hcpmvp01OrganisationAddressCounty", 'Geeran');
    localStorage.setItem("hcpmvp01TownOrCity", "Glenrothes");
    localStorage.setItem("hcpmvp01Postcode", "SE1 AAA");
    localStorage.setItem("hcpmvp01Role", " General practitioner");
    localStorage.setItem("hcpmvp01ReceiveReminder", "Yes");
    localStorage.setItem("hcpmvp01ReminderType", "Email and text");
    localStorage.setItem("hcpmvp01ReminderFrequency", "Weekly");
  } else if (hcpEmailAddress === 'test2@trust.nhs.com' && hcppassword === 'test2') {
    console.log('redirect to EXISTING dashboard');
    localStorage.setItem('hcpmvp01ExistingHcpUser', true);
    localStorage.removeItem('hcpmvp01NewHcpUser');
    hcpmvp01SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-mvp01/account-d-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpmvp01Firstname", 'Jean');
    localStorage.setItem("hcpmvp01Lastname", 'Grey');
    localStorage.setItem("hcpmvp01ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpmvp01MobileNumber", '07900 000 010');
    localStorage.setItem("hcpmvp01OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpmvp01OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpmvp01OrganisationAddressLine2", 'Anytown');
    localStorage.setItem("hcpmvp01OrganisationAddressCounty", 'Geeran');
    localStorage.setItem("hcpmvp01TownOrCity", "Glenrothes");
    localStorage.setItem("hcpmvp01Postcode", "SE1 AAA");
    localStorage.setItem("hcpmvp01Role", " General practitioner");
    localStorage.setItem("hcpmvp01ReceiveReminder", "Yes");
    localStorage.setItem("hcpmvp01ReminderType", "Email");
    localStorage.setItem("hcpmvp01ReminderFrequency", "Daily");
  } else {
    console.log('redirect to profile page');
    hcpv04SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-mvp01/profile-setup");
  }
}

// mvp02
function hcpmvp02SigninOrgFn(organisationSignin) {
  currentValueOfOrg = organisationSignin.value;
  localStorage.setItem('hcpmvp02SigninOrg', currentValueOfOrg);
  if (consoleLogs) console.log('organisationSignin: ' + currentValueOfOrg);
  localStorage.setItem('hcpmvp02NewHcpUser', true);
  localStorage.removeItem('hcpmvp02ExistingHcpUser');
}
function hcpmvp02SignIn() {
  const hcpmvp02SigninPageRoute = document.getElementById('hcpmvp02SigninPage');
  let hcpEmailAddress = document.getElementById('hcpmvp02Signin_email').value;
  let hcppassword = document.getElementById('hcpmvp02Signin_password').value;
  if (hcpEmailAddress === 'test1@trust.nhs.com' && hcppassword === 'test1') {
    console.log('redirect to NEW dashboard');
    localStorage.setItem('hcpmvp02NewHcpUser', true);
    localStorage.removeItem('hcpmvp02ExistingHcpUser');
    hcpmvp02SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-mvp02/account-new-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpmvp02Firstname", 'Jean');
    localStorage.setItem("hcpmvp02Lastname", 'Grey');
    localStorage.setItem("hcpmvp02ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpmvp02MobileNumber", '07900 000 010');
    localStorage.setItem("hcpmvp02OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpmvp02OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpmvp02OrganisationAddressLine2", 'Anytown');
    localStorage.setItem("hcpmvp02OrganisationAddressCounty", 'Geeran');
    localStorage.setItem("hcpmvp02TownOrCity", "Glenrothes");
    localStorage.setItem("hcpmvp02Postcode", "SE1 AAA");
    localStorage.setItem("hcpmvp02Role", " General practitioner");
    localStorage.setItem("hcpmvp02ReceiveReminder", "Yes");
    localStorage.setItem("hcpmvp02ReminderType", "Email and text");
    localStorage.setItem("hcpmvp02ReminderFrequency", "Weekly");
  } else if (hcpEmailAddress === 'test2@trust.nhs.com' && hcppassword === 'test2') {
    console.log('redirect to EXISTING dashboard');
    localStorage.setItem('hcpmvp02ExistingHcpUser', true);
    localStorage.removeItem('hcpmvp02NewHcpUser');
    hcpmvp02SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-mvp02/account-d-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpmvp02Firstname", 'Jean');
    localStorage.setItem("hcpmvp02Lastname", 'Grey');
    localStorage.setItem("hcpmvp02ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpmvp02MobileNumber", '07900 000 010');
    localStorage.setItem("hcpmvp02OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpmvp02OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpmvp02OrganisationAddressLine2", 'Anytown');
    localStorage.setItem("hcpmvp02OrganisationAddressCounty", 'Geeran');
    localStorage.setItem("hcpmvp02TownOrCity", "Glenrothes");
    localStorage.setItem("hcpmvp02Postcode", "SE1 AAA");
    localStorage.setItem("hcpmvp02Role", " General practitioner");
    localStorage.setItem("hcpmvp02ReceiveReminder", "Yes");
    localStorage.setItem("hcpmvp02ReminderType", "Email");
    localStorage.setItem("hcpmvp02ReminderFrequency", "Daily");
  } else {
    console.log('redirect to profile page');
    hcpv04SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-mvp02/profile-setup");
  }
}

// mvp03
function hcpmvp03SigninOrgFn(organisationSignin) {
  currentValueOfOrg = organisationSignin.value;
  localStorage.setItem('hcpmvp03SigninOrg', currentValueOfOrg);
  if (consoleLogs) console.log('organisationSignin: ' + currentValueOfOrg);
  localStorage.setItem('hcpmvp03NewHcpUser', true);
  localStorage.removeItem('hcpmvp03ExistingHcpUser');
}
function hcpmvp03SignIn() {
  const hcpmvp03SigninPageRoute = document.getElementById('hcpmvp03SigninPage');
  let hcpEmailAddress = document.getElementById('hcpmvp03Signin_email').value;
  let hcppassword = document.getElementById('hcpmvp03Signin_password').value;
  if (hcpEmailAddress === 'test1@trust.nhs.com' && hcppassword === 'test1') {
    console.log('redirect to NEW dashboard');
    localStorage.setItem('hcpmvp03NewHcpUser', true);
    localStorage.removeItem('hcpmvp03ExistingHcpUser');
    hcpmvp03SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-mvp03/account-new-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpmvp03Firstname", 'Jean');
    localStorage.setItem("hcpmvp03Lastname", 'Grey');
    localStorage.setItem("hcpmvp03ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpmvp03MobileNumber", '07900 000 010');
    localStorage.setItem("hcpmvp03OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpmvp03OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpmvp03OrganisationAddressLine2", 'Anytown');
    localStorage.setItem("hcpmvp03OrganisationAddressCounty", 'Geeran');
    localStorage.setItem("hcpmvp03TownOrCity", "Glenrothes");
    localStorage.setItem("hcpmvp03Postcode", "SE1 AAA");
    localStorage.setItem("hcpmvp03Role", " General practitioner");
    localStorage.setItem("hcpmvp03ReceiveReminder", "Yes");
    localStorage.setItem("hcpmvp03ReminderType", "Email and text");
    localStorage.setItem("hcpmvp03ReminderFrequency", "Weekly");
  } else if (hcpEmailAddress === 'test2@trust.nhs.com' && hcppassword === 'test2') {
    console.log('redirect to EXISTING dashboard');
    localStorage.setItem('hcpmvp03ExistingHcpUser', true);
    localStorage.removeItem('hcpmvp03NewHcpUser');
    hcpmvp03SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-mvp03/account-d-dashboard");
    // and set their PROFILE and their REMINDER SETTINGS up front
    localStorage.setItem("hcpmvp03Firstname", 'Jean');
    localStorage.setItem("hcpmvp03Lastname", 'Grey');
    localStorage.setItem("hcpmvp03ProfessionalRegistrationNumber", 'ABCDE12345');
    localStorage.setItem("hcpmvp03MobileNumber", '07900 000 010');
    localStorage.setItem("hcpmvp03OrganisationName", 'The Magpie Trust');
    localStorage.setItem("hcpmvp03OrganisationAddressLine1", '02 Royal Hospital Road');
    localStorage.setItem("hcpmvp03OrganisationAddressLine2", 'Anytown');
    localStorage.setItem("hcpmvp03OrganisationAddressCounty", 'Geeran');
    localStorage.setItem("hcpmvp03TownOrCity", "Glenrothes");
    localStorage.setItem("hcpmvp03Postcode", "SE1 AAA");
    localStorage.setItem("hcpmvp03Role", " General practitioner");
    localStorage.setItem("hcpmvp03ReceiveReminder", "Yes");
    localStorage.setItem("hcpmvp03ReminderType", "Email");
    localStorage.setItem("hcpmvp03ReminderFrequency", "Daily");
  } else {
    console.log('redirect to profile page');
    hcpv04SigninPageRoute.setAttribute("action", "/hcp-e2e-journey-mvp03/profile-setup");
  }
}

// ==============
// Profile setup
// ==============

// Get set roles

// v01
let currentValueOfRole = 0;
function hcpv01RoleFn(yourRole) {
  document.getElementById('otherRole').value = '';
  currentValueOfRole = yourRole.value;
  localStorage.setItem('hcpv01Role', currentValueOfRole);
  if (consoleLogs) console.log('Role: ' + currentValueOfRole);
}

// v02
function hcpv02RoleFn(yourRole) {
  document.getElementById('otherRole').value = '';
  currentValueOfRole = yourRole.value;
  localStorage.setItem('hcpv02Role', currentValueOfRole);
  if (consoleLogs) console.log('Role: ' + currentValueOfRole);
}

// v03
function hcpv03RoleFn(yourRole) {
  document.getElementById('otherRole').value = '';
  currentValueOfRole = yourRole.value;
  localStorage.setItem('hcpv03Role', currentValueOfRole);
  if (consoleLogs) console.log('Role: ' + currentValueOfRole);
}

// v04
function hcpv04RoleFn(yourRole) {
  document.getElementById('otherRole').value = '';
  currentValueOfRole = yourRole.value;
  localStorage.setItem('hcpv04Role', currentValueOfRole);
  if (consoleLogs) console.log('Role: ' + currentValueOfRole);
}

// v05
function hcpv05RoleFn(yourRole) {
  document.getElementById('otherRole').value = '';
  currentValueOfRole = yourRole.value;
  localStorage.setItem('hcpv05Role', currentValueOfRole);
  if (consoleLogs) console.log('Role: ' + currentValueOfRole);
}

// v06
function hcpv06RoleFn(yourRole) {
  document.getElementById('otherRole').value = '';
  currentValueOfRole = yourRole.value;
  localStorage.setItem('hcpv06Role', currentValueOfRole);
  if (consoleLogs) console.log('Role: ' + currentValueOfRole);
}

// v07
function hcpv07RoleFn(yourRole) {
  document.getElementById('otherRole').value = '';
  currentValueOfRole = yourRole.value;
  localStorage.setItem('hcpv07Role', currentValueOfRole);
  if (consoleLogs) console.log('Role: ' + currentValueOfRole);
}

// v08
function hcpv08RoleFn(yourRole) {
  document.getElementById('otherRole').value = '';
  currentValueOfRole = yourRole.value;
  localStorage.setItem('hcpv08Role', currentValueOfRole);
  if (consoleLogs) console.log('Role: ' + currentValueOfRole);
}

// v09
function hcpv09RoleFn(yourRole) {
  document.getElementById('otherRole').value = '';
  currentValueOfRole = yourRole.value;
  localStorage.setItem('hcpv09Role', currentValueOfRole);
  if (consoleLogs) console.log('Role: ' + currentValueOfRole);
}

// mvp01
function hcpmvp01RoleFn(yourRole) {
  document.getElementById('otherRole').value = '';
  currentValueOfRole = yourRole.value;
  localStorage.setItem('hcpmvp01Role', currentValueOfRole);
  if (consoleLogs) console.log('Role: ' + currentValueOfRole);
}

// mvp02
function hcpmvp02RoleFn(yourRole) {
  document.getElementById('otherRole').value = '';
  currentValueOfRole = yourRole.value;
  localStorage.setItem('hcpmvp02Role', currentValueOfRole);
  if (consoleLogs) console.log('Role: ' + currentValueOfRole);
}

// mvp03
function hcpmvp03RoleFn(yourRole) {
  currentValueOfRole = yourRole.value;
  localStorage.setItem('hcpmvp03Role', currentValueOfRole);
  if (consoleLogs) console.log('Role: ' + currentValueOfRole);
}

// =================
// Get profile data
// =================

// v01
function hcpv01GrabAllProfileDataFn() {
  const fullNameInput = document.getElementById('fullName').value;
  localStorage.setItem('hcpv01Fullname', fullNameInput);

  const otherRoleInput = document.getElementById('otherRole').value;
  if (localStorage.getItem('hcpv01Role') === "other") { localStorage.setItem('hcpv01OtherRole', otherRoleInput); }

  const professionalRegistrationNumberInput = document.getElementById('professionalRegistrationNumber').value;
  localStorage.setItem('hcpv01ProfessionalRegistrationNumber', professionalRegistrationNumberInput);

  const mobileNumberInput = document.getElementById('mobileNumber').value;
  localStorage.setItem('hcpv01MobileNumber', mobileNumberInput);

  const organisationNameInput = document.getElementById('organisationName').value;
  localStorage.setItem('hcpv01OrganisationName', organisationNameInput);

  const organisationAddressLine1Input = document.getElementById('organisationAddressLine1').value;
  localStorage.setItem('hcpv01OrganisationAddressLine1', organisationAddressLine1Input);

  const organisationAddressLine2Input = document.getElementById('organisationAddressLine2').value;
  localStorage.setItem('hcpv01OrganisationAddressLine2', organisationAddressLine2Input);

  const townOrCityInput = document.getElementById('townOrCity').value;
  localStorage.setItem('hcpv01TownOrCity', townOrCityInput);

  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpv01Postcode', postcodeInput);
}

// v02
function hcpv02GrabAllProfileDataFn() {
  const fullNameInput = document.getElementById('fullName').value;
  localStorage.setItem('hcpv02Fullname', fullNameInput);

  const otherRoleInput = document.getElementById('otherRole').value;
  if (localStorage.getItem('hcpv02Role') === "other") { localStorage.setItem('hcpv02OtherRole', otherRoleInput); }

  const professionalRegistrationNumberInput = document.getElementById('professionalRegistrationNumber').value;
  localStorage.setItem('hcpv02ProfessionalRegistrationNumber', professionalRegistrationNumberInput);

  const mobileNumberInput = document.getElementById('mobileNumber').value;
  localStorage.setItem('hcpv02MobileNumber', mobileNumberInput);

  const organisationNameInput = document.getElementById('organisationName').value;
  localStorage.setItem('hcpv02OrganisationName', organisationNameInput);

  const organisationAddressLine1Input = document.getElementById('organisationAddressLine1').value;
  localStorage.setItem('hcpv02OrganisationAddressLine1', organisationAddressLine1Input);

  const organisationAddressLine2Input = document.getElementById('organisationAddressLine2').value;
  localStorage.setItem('hcpv02OrganisationAddressLine2', organisationAddressLine2Input);

  const townOrCityInput = document.getElementById('townOrCity').value;
  localStorage.setItem('hcpv02TownOrCity', townOrCityInput);

  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpv02Postcode', postcodeInput);
}

// v03
function hcpv03GrabAllProfileDataFn() {
  const fullNameInput = document.getElementById('fullName').value;
  localStorage.setItem('hcpv03Fullname', fullNameInput);

  const otherRoleInput = document.getElementById('otherRole').value;
  if (localStorage.getItem('hcpv03Role') === "other") { localStorage.setItem('hcpv03OtherRole', otherRoleInput); }

  const professionalRegistrationNumberInput = document.getElementById('professionalRegistrationNumber').value;
  localStorage.setItem('hcpv03ProfessionalRegistrationNumber', professionalRegistrationNumberInput);

  const mobileNumberInput = document.getElementById('mobileNumber').value;
  localStorage.setItem('hcpv03MobileNumber', mobileNumberInput);

  const organisationNameInput = document.getElementById('organisationName').value;
  localStorage.setItem('hcpv03OrganisationName', organisationNameInput);

  const organisationAddressLine1Input = document.getElementById('organisationAddressLine1').value;
  localStorage.setItem('hcpv03OrganisationAddressLine1', organisationAddressLine1Input);

  const organisationAddressLine2Input = document.getElementById('organisationAddressLine2').value;
  localStorage.setItem('hcpv03OrganisationAddressLine2', organisationAddressLine2Input);

  const townOrCityInput = document.getElementById('townOrCity').value;
  localStorage.setItem('hcpv03TownOrCity', townOrCityInput);

  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpv03Postcode', postcodeInput);
}

let profilePage1UrlAction = document.getElementById('profileSetupPage');

// v04
function saveHCPNamev04() {
  const fullNameInput = document.getElementById('fullName').value;
  localStorage.setItem('hcpv04Fullname', fullNameInput);
  if (localStorage.getItem('hcpv04ChangingPractitionerName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v04/profile-details"); }
  if (localStorage.getItem('hcpv04ChangingPractitionerNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v04/check-profile-details"); }
}
function saveRolev04() {
  const otherRoleInput = document.getElementById('otherRole').value;
  if (localStorage.getItem('hcpv04Role') === "other") { localStorage.setItem('hcpv04OtherRole', otherRoleInput); }
  if (localStorage.getItem('hcpv04ChangingPractitionerRoleNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v04/check-profile-details"); }
  if (localStorage.getItem('hcpv04ChangingPractitionerRole')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v04/profile-details"); }
}
function saveHCPProfessionalNumberv04() {
  const professionalRegistrationNumberInput = document.getElementById('professionalRegistrationNumber').value;
  localStorage.setItem('hcpv04ProfessionalRegistrationNumber', professionalRegistrationNumberInput);
  if (localStorage.getItem('hcpv04ChangingPractitionerRegNoNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v04/check-profile-details"); }
  if (localStorage.getItem('hcpv04ChangingPractitionerRegNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v04/profile-details"); }
}
function saveHCPMobilelNumberv04() {
  const mobileNumberInput = document.getElementById('mobileNumber').value;
  localStorage.setItem('hcpv04MobileNumber', mobileNumberInput);
  if (localStorage.getItem('hcpv04ChangingPractitionerPhoneNoNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v04/check-profile-details"); }
  if (localStorage.getItem('hcpv04ChangingPractitionerPhoneNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v04/profile-details"); }
}
function saveHCPOrgNamev04() {
  const organisationNameInput = document.getElementById('organisationName').value;
  localStorage.setItem('hcpv04OrganisationName', organisationNameInput);
  if (localStorage.getItem('hcpv04ChangingPractitionerOrgNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v04/check-profile-details"); }
  if (localStorage.getItem('hcpv04ChangingPractitionerOrgName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v04/profile-details"); }
}
function saveOrgPostcodev04() {
  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpv04Postcode', postcodeInput);
}
function hcpv04AddressFn() {
  var organisationAddressLine1Input = document.getElementById("organisationAddressLine1").value;
  localStorage.setItem('hcpv04OrganisationAddressLine1', organisationAddressLine1Input);
  localStorage.setItem('hcpv04TownOrCity', 'Glenrothes');
  if (localStorage.getItem('hcpv04ChangingPractitionerOrgAddressNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v04/check-profile-details"); }
  if (localStorage.getItem('hcpv04ChangingPractitionerOrgAddress')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v04/profile-details"); }
}
function saveHCPOrgAddressv04() {
  const organisationAddressLine1Input = document.getElementById('organisationAddressLine1').value;
  localStorage.setItem('hcpv04OrganisationAddressLine1', organisationAddressLine1Input);

  const organisationAddressLine2Input = document.getElementById('organisationAddressLine2').value;
  localStorage.setItem('hcpv04OrganisationAddressLine2', organisationAddressLine2Input);

  const townOrCityInput = document.getElementById('townOrCity').value;
  localStorage.setItem('hcpv04TownOrCity', townOrCityInput);

  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpv04Postcode', postcodeInput);
}

//Profile v05
function saveHCPNamev05() {
  const fullNameInput = document.getElementById('fullName').value;
  localStorage.setItem('hcpv05Fullname', fullNameInput);
  if (localStorage.getItem('hcpv05ChangingPractitionerName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v05/profile-details"); }
  if (localStorage.getItem('hcpv05ChangingPractitionerNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v05/check-profile-details"); }
}
function saveRolev05() {
  const otherRoleInput = document.getElementById('otherRole').value;
  if (localStorage.getItem('hcpv05Role') === "other") { localStorage.setItem('hcpv05OtherRole', otherRoleInput); }
  if (localStorage.getItem('hcpv05ChangingPractitionerRoleNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v05/check-profile-details"); }
  if (localStorage.getItem('hcpv05ChangingPractitionerRole')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v05/profile-details"); }
}
function saveHCPProfessionalNumberv05() {
  const professionalRegistrationNumberInput = document.getElementById('professionalRegistrationNumber').value;
  localStorage.setItem('hcpv05ProfessionalRegistrationNumber', professionalRegistrationNumberInput);
  if (localStorage.getItem('hcpv05ChangingPractitionerRegNoNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v05/check-profile-details"); }
  if (localStorage.getItem('hcpv05ChangingPractitionerRegNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v05/profile-details"); }
}
function saveHCPMobilelNumberv05() {
  const mobileNumberInput = document.getElementById('mobileNumber').value;
  localStorage.setItem('hcpv05MobileNumber', mobileNumberInput);
  if (localStorage.getItem('hcpv05ChangingPractitionerPhoneNoNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v05/check-profile-details"); }
  if (localStorage.getItem('hcpv05ChangingPractitionerPhoneNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v05/profile-details"); }
}
function saveHCPOrgNamev05() {
  const organisationNameInput = document.getElementById('organisationName').value;
  localStorage.setItem('hcpv05OrganisationName', organisationNameInput);
  if (localStorage.getItem('hcpv05ChangingPractitionerOrgNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v05/check-profile-details"); }
  if (localStorage.getItem('hcpv05ChangingPractitionerOrgName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v05/profile-details"); }
}
function saveOrgPostcodev05() {
  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpv05Postcode', postcodeInput);
}
function hcpv05AddressFn() {
  var organisationAddressLine1Input = document.getElementById("organisationAddressLine1").value;
  localStorage.setItem('hcpv05OrganisationAddressLine1', organisationAddressLine1Input);
  localStorage.setItem('hcpv05TownOrCity', 'Glenrothes');
  if (localStorage.getItem('hcpv05ChangingPractitionerOrgAddressNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v05/check-profile-details"); }
  if (localStorage.getItem('hcpv05ChangingPractitionerOrgAddress')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v05/profile-details"); }
}
function saveHCPOrgAddressv05() {
  const organisationAddressLine1Input = document.getElementById('organisationAddressLine1').value;
  localStorage.setItem('hcpv05OrganisationAddressLine1', organisationAddressLine1Input);

  const organisationAddressLine2Input = document.getElementById('organisationAddressLine2').value;
  localStorage.setItem('hcpv05OrganisationAddressLine2', organisationAddressLine2Input);

  const townOrCityInput = document.getElementById('townOrCity').value;
  localStorage.setItem('hcpv05TownOrCity', townOrCityInput);

  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpv05Postcode', postcodeInput);
}

// v06
function saveHCPNamev06() {
  const fullNameInput = document.getElementById('fullName').value;
  localStorage.setItem('hcpv06Fullname', fullNameInput);

  if (localStorage.getItem('hcpv06ChangingPractitionerName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v06/profile-details"); }
  if (localStorage.getItem('hcpv06ChangingPractitionerNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v06/check-profile-details"); }
}
function saveRolev06() {
  const otherRoleInput = document.getElementById('otherRole').value;
  if (localStorage.getItem('hcpv06Role') === "other") { localStorage.setItem('hcpv06OtherRole', otherRoleInput); }
  if (localStorage.getItem('hcpv06ChangingPractitionerRoleNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v06/check-profile-details"); }
  if (localStorage.getItem('hcpv06ChangingPractitionerRole')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v06/profile-details"); }
}
function saveHCPProfessionalNumberv06() {
  const professionalRegistrationNumberInput = document.getElementById('professionalRegistrationNumber').value;
  localStorage.setItem('hcpv06ProfessionalRegistrationNumber', professionalRegistrationNumberInput);
  if (localStorage.getItem('hcpv06ChangingPractitionerRegNoNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v06/check-profile-details"); }
  if (localStorage.getItem('hcpv06ChangingPractitionerRegNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v06/profile-details"); }
}
function saveHCPMobilelNumberv06() {
  const mobileNumberInput = document.getElementById('mobileNumber').value;
  localStorage.setItem('hcpv06MobileNumber', mobileNumberInput);
  if (localStorage.getItem('hcpv06ChangingPractitionerPhoneNoNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v06/check-profile-details"); }
  if (localStorage.getItem('hcpv06ChangingPractitionerPhoneNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v06/profile-details"); }
}
function saveHCPOrgNamev06() {
  const organisationNameInput = document.getElementById('organisationName').value;
  localStorage.setItem('hcpv06OrganisationName', organisationNameInput);
  if (localStorage.getItem('hcpv06ChangingPractitionerOrgNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v06/check-profile-details"); }
  if (localStorage.getItem('hcpv06ChangingPractitionerOrgName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v06/profile-details"); }
}
function saveOrgPostcodev06() {
  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpv06Postcode', postcodeInput);
}
function hcpv06AddressFn() {
  var organisationAddressLine1Input = document.getElementById("organisationAddressLine1").value;
  localStorage.setItem('hcpv06OrganisationAddressLine1', organisationAddressLine1Input);
  localStorage.setItem('hcpv06TownOrCity', 'Glenrothes');
  if (localStorage.getItem('hcpv06ChangingPractitionerOrgAddressNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v06/check-profile-details"); }
  if (localStorage.getItem('hcpv06ChangingPractitionerOrgAddress')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v06/profile-details"); }
}
function saveHCPOrgAddressv06() {
  const organisationAddressLine1Input = document.getElementById('organisationAddressLine1').value;
  localStorage.setItem('hcpv06OrganisationAddressLine1', organisationAddressLine1Input);

  const organisationAddressLine2Input = document.getElementById('organisationAddressLine2').value;
  localStorage.setItem('hcpv06OrganisationAddressLine2', organisationAddressLine2Input);

  const townOrCityInput = document.getElementById('townOrCity').value;
  localStorage.setItem('hcpv06TownOrCity', townOrCityInput);

  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpv06Postcode', postcodeInput);
}

// v07
function saveHCPNamev07() {
  // get fullName
  const fullNameInput = document.getElementById('fullName').value;
  localStorage.setItem('hcpv07Fullname', fullNameInput);
  if (localStorage.getItem('hcpv07ChangingPractitionerName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v07/profile-details"); }
  if (localStorage.getItem('hcpv07ChangingPractitionerNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v07/check-profile-details"); }
}
function saveRolev07() {
  const otherRoleInput = document.getElementById('otherRole').value;
  if (localStorage.getItem('hcpv07Role') === "other") { localStorage.setItem('hcpv07OtherRole', otherRoleInput); }
  if (localStorage.getItem('hcpv07ChangingPractitionerRoleNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v07/check-profile-details"); }
  if (localStorage.getItem('hcpv07ChangingPractitionerRole')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v07/profile-details"); }
}
function saveHCPProfessionalNumberv07() {
  const professionalRegistrationNumberInput = document.getElementById('professionalRegistrationNumber').value;
  localStorage.setItem('hcpv07ProfessionalRegistrationNumber', professionalRegistrationNumberInput);
  if (localStorage.getItem('hcpv07ChangingPractitionerRegNoNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v07/check-profile-details"); }
  if (localStorage.getItem('hcpv07ChangingPractitionerRegNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v07/profile-details"); }
}
function saveHCPMobilelNumberv07() {
  const mobileNumberInput = document.getElementById('mobileNumber').value;
  localStorage.setItem('hcpv07MobileNumber', mobileNumberInput);
  if (localStorage.getItem('hcpv07ChangingPractitionerPhoneNoNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v07/check-profile-details"); }
  if (localStorage.getItem('hcpv07ChangingPractitionerPhoneNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v07/profile-details"); }
}
function saveHCPOrgNamev07() {
  const organisationNameInput = document.getElementById('organisationName').value;
  localStorage.setItem('hcpv07OrganisationName', organisationNameInput);
  if (localStorage.getItem('hcpv07ChangingPractitionerOrgNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v07/check-profile-details"); }
  if (localStorage.getItem('hcpv07ChangingPractitionerOrgName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v07/profile-details"); }
}
function saveOrgPostcodev07() {
  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpv07Postcode', postcodeInput);
}
function hcpv07AddressFn() {
  var organisationAddressLine1Input = document.getElementById("organisationAddressLine1").value;
  localStorage.setItem('hcpv07OrganisationAddressLine1', organisationAddressLine1Input);
  localStorage.setItem('hcpv07TownOrCity', 'Glenrothes');
  if (localStorage.getItem('hcpv07ChangingPractitionerOrgAddressNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v07/check-profile-details"); }
  if (localStorage.getItem('hcpv07ChangingPractitionerOrgAddress')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v07/profile-details"); }
}
function saveHCPOrgAddressv07() {
  const organisationAddressLine1Input = document.getElementById('organisationAddressLine1').value;
  localStorage.setItem('hcpv07OrganisationAddressLine1', organisationAddressLine1Input);

  const organisationAddressLine2Input = document.getElementById('organisationAddressLine2').value;
  localStorage.setItem('hcpv07OrganisationAddressLine2', organisationAddressLine2Input);

  const townOrCityInput = document.getElementById('townOrCity').value;
  localStorage.setItem('hcpv07TownOrCity', townOrCityInput);

  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpv07Postcode', postcodeInput);
}

// v08
function saveHCPNamev08() {
  const fullNameInput = document.getElementById('fullName').value;
  localStorage.setItem('hcpv08Fullname', fullNameInput);
  if (localStorage.getItem('hcpv08ChangingPractitionerName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v08/profile-details"); }
  if (localStorage.getItem('hcpv08ChangingPractitionerNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v08/check-profile-details"); }
}
function saveRolev08() {
  const otherRoleInput = document.getElementById('otherRole').value;
  if (localStorage.getItem('hcpv08Role') === "other") { localStorage.setItem('hcpv08OtherRole', otherRoleInput); }
  if (localStorage.getItem('hcpv08ChangingPractitionerRoleNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v08/check-profile-details"); }
  if (localStorage.getItem('hcpv08ChangingPractitionerRole')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v08/profile-details"); }
}
function saveHCPProfessionalNumberv08() {
  const professionalRegistrationNumberInput = document.getElementById('professionalRegistrationNumber').value;
  localStorage.setItem('hcpv08ProfessionalRegistrationNumber', professionalRegistrationNumberInput);
  if (localStorage.getItem('hcpv08ChangingPractitionerRegNoNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v08/check-profile-details"); }
  if (localStorage.getItem('hcpv08ChangingPractitionerRegNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v08/profile-details"); }
}
function saveHCPMobilelNumberv08() {
  const mobileNumberInput = document.getElementById('mobileNumber').value;
  localStorage.setItem('hcpv08MobileNumber', mobileNumberInput);
  if (localStorage.getItem('hcpv08ChangingPractitionerPhoneNoNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v08/check-profile-details"); }
  if (localStorage.getItem('hcpv08ChangingPractitionerPhoneNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v08/profile-details"); }
}
function saveHCPOrgNamev08() {
  const organisationNameInput = document.getElementById('organisationName').value;
  localStorage.setItem('hcpv08OrganisationName', organisationNameInput);
  if (localStorage.getItem('hcpv08ChangingPractitionerOrgNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v08/check-profile-details"); }
  if (localStorage.getItem('hcpv08ChangingPractitionerOrgName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v08/profile-details"); }
}
function saveOrgPostcodev08() {
  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpv08Postcode', postcodeInput);
}
function hcpv08AddressFn() {
  var organisationAddressLine1Input = document.getElementById("organisationAddressLine1").value;
  localStorage.setItem('hcpv08OrganisationAddressLine1', organisationAddressLine1Input);
  localStorage.setItem('hcpv08TownOrCity', 'Glenrothes');
  if (localStorage.getItem('hcpv08ChangingPractitionerOrgAddressNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v08/check-profile-details"); }
  if (localStorage.getItem('hcpv08ChangingPractitionerOrgAddress')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v08/profile-details"); }
}
function saveHCPOrgAddressv08() {
  const organisationAddressLine1Input = document.getElementById('organisationAddressLine1').value;
  localStorage.setItem('hcpv08OrganisationAddressLine1', organisationAddressLine1Input);

  const organisationAddressLine2Input = document.getElementById('organisationAddressLine2').value;
  localStorage.setItem('hcpv08OrganisationAddressLine2', organisationAddressLine2Input);

  const townOrCityInput = document.getElementById('townOrCity').value;
  localStorage.setItem('hcpv08TownOrCity', townOrCityInput);

  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpv08Postcode', postcodeInput);
}

// v09
function saveHCPNamev09() {
  const fullNameInput = document.getElementById('fullName').value;
  localStorage.setItem('hcpv09Fullname', fullNameInput);
  if (localStorage.getItem('hcpv09ChangingPractitionerName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v09/profile-details"); }
  if (localStorage.getItem('hcpv09ChangingPractitionerNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v09/check-profile-details"); }
}
function saveRolev09() {
  const otherRoleInput = document.getElementById('otherRole').value;
  if (localStorage.getItem('hcpv09Role') === "other") { localStorage.setItem('hcpv09OtherRole', otherRoleInput); }
  if (localStorage.getItem('hcpv09ChangingPractitionerRoleNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v09/check-profile-details"); }
  if (localStorage.getItem('hcpv09ChangingPractitionerRole')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v09/profile-details"); }
}
function saveHCPProfessionalNumberv09() {
  const professionalRegistrationNumberInput = document.getElementById('professionalRegistrationNumber').value;
  localStorage.setItem('hcpv09ProfessionalRegistrationNumber', professionalRegistrationNumberInput);
  if (localStorage.getItem('hcpv09ChangingPractitionerRegNoNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v09/check-profile-details"); }
  if (localStorage.getItem('hcpv09ChangingPractitionerRegNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v09/profile-details"); }
}
function saveHCPMobilelNumberv09() {
  const mobileNumberInput = document.getElementById('mobileNumber').value;
  localStorage.setItem('hcpv09MobileNumber', mobileNumberInput);
  if (localStorage.getItem('hcpv09ChangingPractitionerPhoneNoNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v09/check-profile-details"); }
  if (localStorage.getItem('hcpv09ChangingPractitionerPhoneNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v09/profile-details"); }
}
function saveHCPOrgNamev09() {
  const organisationNameInput = document.getElementById('organisationName').value;
  localStorage.setItem('hcpv09OrganisationName', organisationNameInput);
  if (localStorage.getItem('hcpv09ChangingPractitionerOrgNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v09/check-profile-details"); }
  if (localStorage.getItem('hcpv09ChangingPractitionerOrgName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v09/profile-details"); }
}
function saveOrgPostcodev09() {
  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpv09Postcode', postcodeInput);
}
function hcpv09AddressFn() {
  var organisationAddressLine1Input = document.getElementById("organisationAddressLine1").value;
  localStorage.setItem('hcpv09OrganisationAddressLine1', organisationAddressLine1Input);
  localStorage.setItem('hcpv09TownOrCity', 'Glenrothes');
  if (localStorage.getItem('hcpv09ChangingPractitionerOrgAddressNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v09/check-profile-details"); }
  if (localStorage.getItem('hcpv09ChangingPractitionerOrgAddress')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v09/profile-details"); }
}
function saveHCPOrgAddressv09() {
  const organisationAddressLine1Input = document.getElementById('organisationAddressLine1').value;
  localStorage.setItem('hcpv09OrganisationAddressLine1', organisationAddressLine1Input);

  const organisationAddressLine2Input = document.getElementById('organisationAddressLine2').value;
  localStorage.setItem('hcpv09OrganisationAddressLine2', organisationAddressLine2Input);

  const townOrCityInput = document.getElementById('townOrCity').value;
  localStorage.setItem('hcpv09TownOrCity', townOrCityInput);

  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpv09Postcode', postcodeInput);
}

// mvp01
function saveHCPNamemvp01() {
  const firstNameInput = document.getElementById('firstName').value;
  const lastNameInput = document.getElementById('lastName').value;
  localStorage.setItem('hcpmvp01Firstname', firstNameInput);
  localStorage.setItem('hcpmvp01Lastname', lastNameInput);
  if (localStorage.getItem('hcpmvp01ChangingPractitionerName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/profile-details"); }
  if (localStorage.getItem('hcpmvp01ChangingPractitionerNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/check-profile-details"); }
}
function saveRolemvp01() {
  const otherRoleInput = document.getElementById('otherRole').value;
  if (localStorage.getItem('hcpmvp01Role') === "Other") { localStorage.setItem('hcpmvp01OtherRole', otherRoleInput); }
  if (localStorage.getItem('hcpmvp01ChangingPractitionerRoleNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/check-profile-details"); }
  if (localStorage.getItem('hcpmvp01ChangingPractitionerRole')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/profile-details"); }
}
function saveHCPProfessionalNumbermvp01() {
  const professionalRegistrationNumberInput = document.getElementById('professionalRegistrationNumber').value;
  localStorage.setItem('hcpmvp01ProfessionalRegistrationNumber', professionalRegistrationNumberInput);
  if (localStorage.getItem('hcpmvp01ChangingPractitionerRegNoNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/check-profile-details"); }
  if (localStorage.getItem('hcpmvp01ChangingPractitionerRegNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/profile-details"); }
}
function saveHCPMobilelNumbermvp01() {
  const mobileNumberInput = document.getElementById('mobileNumber').value;
  localStorage.setItem('hcpmvp01MobileNumber', mobileNumberInput);
  if (localStorage.getItem('hcpmvp01ChangingPractitionerPhoneNoNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/check-profile-details"); }
  if (localStorage.getItem('hcpmvp01ChangingPractitionerPhoneNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/profile-details"); }
}
function saveHCPOrgNamemvp01() {
  const organisationNameInput = document.getElementById('organisationName').value;
  localStorage.setItem('hcpmvp01OrganisationName', organisationNameInput);
  if (localStorage.getItem('hcpmvp01ChangingPractitionerOrgNameNew')) {
    profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/check-profile-details");
  }
  if (localStorage.getItem('hcpmvp01ChangingPractitionerOrgName')) {
    profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/profile-details");
  }
}
function saveOrgPostcodemvp01() {
  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpmvp01Postcode', postcodeInput);
}
function hcpmvp01AddressFn() {
  var organisationAddressLine1Input = document.getElementById("organisationAddressLine1").value;
  localStorage.setItem('hcpmvp01OrganisationAddressLine1', organisationAddressLine1Input);
  localStorage.setItem('hcpmvp01TownOrCity', 'Glenrothes');
  if (localStorage.getItem('hcpmvp01ChangingPractitionerOrgAddressNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/check-profile-details"); }
  if (localStorage.getItem('hcpmvp01ChangingPractitionerOrgAddress')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/profile-details"); }
}
function saveHCPOrgAddressmvp01() {
  const organisationNameInput = document.getElementById('organisationName').value;
  localStorage.setItem('hcpmvp01OrganisationName', organisationNameInput);
  if (localStorage.getItem('hcpmvp01ChangingPractitionerOrgNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/check-sr1-form"); }
  if (localStorage.getItem('hcpmvp01ChangingPractitionerOrgName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/check-sr1-form"); }

  const organisationAddressLine1Input = document.getElementById('organisationAddressLine1').value;
  localStorage.setItem('hcpmvp01OrganisationAddressLine1', organisationAddressLine1Input);

  const organisationAddressLine2Input = document.getElementById('organisationAddressLine2').value;
  localStorage.setItem('hcpmvp01OrganisationAddressLine2', organisationAddressLine2Input);

  const organisationAddressCountyInput = document.getElementById('organisationAddressCounty').value;
  localStorage.setItem('hcpmvp01OrganisationAddressCounty', organisationAddressCountyInput);

  const organisationtownOrCityInput = document.getElementById('organisationTownCity').value;
  localStorage.setItem('hcpmvp01TownOrCity', organisationtownOrCityInput);

  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpmvp01Postcode', postcodeInput);
}
function saveHCPNamemvp01() {
  const firstNameInput = document.getElementById('firstName').value;
  const lastNameInput = document.getElementById('lastName').value;
  localStorage.setItem('hcpmvp01Firstname', firstNameInput);
  localStorage.setItem('hcpmvp01Lastname', lastNameInput);
  if (localStorage.getItem('hcpmvp01ChangingPractitionerName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/profile-details"); }
  if (localStorage.getItem('hcpmvp01ChangingPractitionerNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/check-profile-details"); }
}
function saveHCPOrgAddressmvp01() {
  const organisationNameInput = document.getElementById('organisationName').value;
  localStorage.setItem('hcpmvp01OrganisationName', organisationNameInput);

  if (localStorage.getItem('hcpmvp01ChangingPractitionerOrgNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/check-profile-details"); }
  if (localStorage.getItem('hcpmvp01ChangingPractitionerOrgName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/profile-details"); }

  const organisationAddressLine1Input = document.getElementById('organisationAddressLine1').value;
  localStorage.setItem('hcpmvp01OrganisationAddressLine1', organisationAddressLine1Input);

  const organisationAddressLine2Input = document.getElementById('organisationAddressLine2').value;
  localStorage.setItem('hcpmvp01OrganisationAddressLine2', organisationAddressLine2Input);

  const organisationAddressCountyInput = document.getElementById('organisationAddressCounty').value;
  localStorage.setItem('hcpmvp01OrganisationAddressCounty', organisationAddressCountyInput);

  const organisationtownOrCityInput = document.getElementById('organisationTownCity').value;
  localStorage.setItem('hcpmvp01TownOrCity', organisationtownOrCityInput);

  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpmvp01Postcode', postcodeInput);
}

// mvp02
function saveHCPNamemvp02() {
  const firstNameInput = document.getElementById('firstName').value;
  const lastNameInput = document.getElementById('lastName').value;
  localStorage.setItem('hcpmvp02Firstname', firstNameInput);
  localStorage.setItem('hcpmvp02Lastname', lastNameInput);
  if (localStorage.getItem('hcpmvp02ChangingPractitionerName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp02/profile-details"); }
  if (localStorage.getItem('hcpmvp02ChangingPractitionerNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp02/check-profile-details"); }
}
function saveRolemvp02() {
  const otherRoleInput = document.getElementById('otherRole').value;
  if (localStorage.getItem('hcpmvp02Role') === "Other") { localStorage.setItem('hcpmvp02OtherRole', otherRoleInput); }
  if (localStorage.getItem('hcpmvp02ChangingPractitionerRoleNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp02/check-profile-details"); }
  if (localStorage.getItem('hcpmvp02ChangingPractitionerRole')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp02/profile-details"); }
}
function saveHCPProfessionalNumbermvp02() {
  const professionalRegistrationNumberInput = document.getElementById('professionalRegistrationNumber').value;
  localStorage.setItem('hcpmvp02ProfessionalRegistrationNumber', professionalRegistrationNumberInput);
  if (localStorage.getItem('hcpmvp02ChangingPractitionerRegNoNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp02/check-profile-details"); }
  if (localStorage.getItem('hcpmvp02ChangingPractitionerRegNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp02/profile-details"); }
}
function saveHCPMobilelNumbermvp02() {
  const mobileNumberInput = document.getElementById('mobileNumber').value;
  localStorage.setItem('hcpmvp02MobileNumber', mobileNumberInput);
  if (localStorage.getItem('hcpmvp02ChangingPractitionerPhoneNoNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp02/check-profile-details"); }
  if (localStorage.getItem('hcpmvp02ChangingPractitionerPhoneNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp02/profile-details"); }
}
function saveHCPOrgNamemvp02() {
  const organisationNameInput = document.getElementById('organisationName').value;
  localStorage.setItem('hcpmvp02OrganisationName', organisationNameInput);
  if (localStorage.getItem('hcpmvp02ChangingPractitionerOrgNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp02/check-profile-details"); }
  if (localStorage.getItem('hcpmvp02ChangingPractitionerOrgName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp02/profile-details"); }
}
function saveOrgPostcodemvp02() {
  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpmvp02Postcode', postcodeInput);
}
function saveHCPOrgAddressmvp02() {
  const organisationNameInput = document.getElementById('organisationName').value;
  localStorage.setItem('hcpmvp02OrganisationName', organisationNameInput);
  if (localStorage.getItem('hcpmvp02ChangingPractitionerOrgNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp02/check-sr1-form"); }
  if (localStorage.getItem('hcpmvp02ChangingPractitionerOrgName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp02/check-sr1-form"); }

  const organisationAddressLine1Input = document.getElementById('organisationAddressLine1').value;
  localStorage.setItem('hcpmvp02OrganisationAddressLine1', organisationAddressLine1Input);

  const organisationAddressLine2Input = document.getElementById('organisationAddressLine2').value;
  localStorage.setItem('hcpmvp02OrganisationAddressLine2', organisationAddressLine2Input);

  const organisationAddressCountyInput = document.getElementById('organisationAddressCounty').value;
  localStorage.setItem('hcpmvp02OrganisationAddressCounty', organisationAddressCountyInput);

  const organisationtownOrCityInput = document.getElementById('organisationTownCity').value;
  localStorage.setItem('hcpmvp02TownOrCity', organisationtownOrCityInput);

  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpmvp02Postcode', postcodeInput);
}
function saveHCPNamemvp02() {
  const firstNameInput = document.getElementById('firstName').value;
  const lastNameInput = document.getElementById('lastName').value;
  localStorage.setItem('hcpmvp02Firstname', firstNameInput);
  localStorage.setItem('hcpmvp02Lastname', lastNameInput);
  if (localStorage.getItem('hcpmvp02ChangingPractitionerName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp02/profile-details"); }
  if (localStorage.getItem('hcpmvp02ChangingPractitionerNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp02/check-profile-details"); }
}
function saveHCPOrgAddressmvp02() {
  const organisationNameInput = document.getElementById('organisationName').value;
  localStorage.setItem('hcpmvp02OrganisationName', organisationNameInput);
  if (localStorage.getItem('hcpmvp02ChangingPractitionerOrgNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp02/check-profile-details"); }
  if (localStorage.getItem('hcpmvp02ChangingPractitionerOrgName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp02/profile-details"); }

  const organisationAddressLine1Input = document.getElementById('organisationAddressLine1').value;
  localStorage.setItem('hcpmvp02OrganisationAddressLine1', organisationAddressLine1Input);

  const organisationAddressLine2Input = document.getElementById('organisationAddressLine2').value;
  localStorage.setItem('hcpmvp02OrganisationAddressLine2', organisationAddressLine2Input);

  const organisationAddressCountyInput = document.getElementById('organisationAddressCounty').value;
  localStorage.setItem('hcpmvp02OrganisationAddressCounty', organisationAddressCountyInput);

  const organisationtownOrCityInput = document.getElementById('organisationTownCity').value;
  localStorage.setItem('hcpmvp02TownOrCity', organisationtownOrCityInput);

  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpmvp02Postcode', postcodeInput);
}

// mvp03
function saveHCPNamemvp03() {
  const firstNameInput = document.getElementById('firstName').value;
  const lastNameInput = document.getElementById('lastName').value;
  localStorage.setItem('hcpmvp03Firstname', firstNameInput);
  localStorage.setItem('hcpmvp03Lastname', lastNameInput);
  if (localStorage.getItem('hcpmvp03ChangingPractitionerName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/profile-details"); }
  if (localStorage.getItem('hcpmvp03ChangingPractitionerNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/check-profile-details"); }
}
function hcpmvp03HaveNiNo(niNo) {
  currentValueOfNiNo = niNo.value;
  localStorage.setItem('hcpmvp03NiNo', currentValueOfNiNo);
  if (consoleLogs) console.log('NINo: ' + currentValueOfNiNo);
}
function savenniNoradioSR1Formmvp03() {
  if (localStorage.getItem('hcpmvp03ChangingNiNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/check-profile-details"); }
  if (localStorage.getItem('hcpmvp03ChangingNiNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/profile-details"); }
}
function hcpmvp03OtherDiagnosis(otherRelevantDiagnosis) {
  currentValueOfotherRelevantDiagnosis = otherRelevantDiagnosis.value;
  localStorage.setItem('hcpmvp03OtherRelevantDiagnosis', currentValueOfotherRelevantDiagnosis);
  if (consoleLogs) console.log('Other relevant diagnosis: ' + currentValueOfotherRelevantDiagnosis);
}
function saveOtherDiagnosisradioSR1Formmvp03() {
  if (localStorage.getItem('hcpmvp03ChangingOtherRelevantDiagnosis')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/check-profile-details"); }
  if (localStorage.getItem('hcpmvp03ChangingOtherRelevantDiagnosis')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/profile-details"); }
}
function saveRolemvp03() {
  if (localStorage.getItem('hcpmvp03ChangingPractitionerRoleNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/check-profile-details"); }
  if (localStorage.getItem('hcpmvp03ChangingPractitionerRole')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/profile-details"); }
}
function saveOtherRolemvp03() {
  const otherRoleInput = document.getElementById('otherRole').value;
  localStorage.setItem('hcpmvp03otherRole', otherRoleInput);
}
function saveHCPProfessionalNumbermvp03() {
  const professionalRegistrationNumberInput = document.getElementById('professionalRegistrationNumber').value;
  localStorage.setItem('hcpmvp03ProfessionalRegistrationNumber', professionalRegistrationNumberInput);
  if (localStorage.getItem('hcpmvp03ChangingPractitionerRegNoNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/check-profile-details"); }
  if (localStorage.getItem('hcpmvp03ChangingPractitionerRegNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/profile-details"); }
}
function saveHCPMobilelNumbermvp03() {
  const mobileNumberInput = document.getElementById('mobileNumber').value;
  localStorage.setItem('hcpmvp03MobileNumber', mobileNumberInput);
  if (localStorage.getItem('hcpmvp03ChangingPractitionerPhoneNoNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/check-profile-details"); }
  if (localStorage.getItem('hcpmvp03ChangingPractitionerPhoneNo')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/profile-details"); }
}
function saveHCPOrgNamemvp03() {
  const organisationNameInput = document.getElementById('organisationName').value;
  localStorage.setItem('hcpmvp03OrganisationName', organisationNameInput);
  if (localStorage.getItem('hcpmvp03ChangingPractitionerOrgNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/check-profile-details"); }
  if (localStorage.getItem('hcpmvp03ChangingPractitionerOrgName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/profile-details"); }
}
function saveOrgPostcodemvp03() {
  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpmvp03Postcode', postcodeInput);
}
function saveHCPOrgAddressmvp03() {
  const organisationNameInput = document.getElementById('organisationName').value;
  localStorage.setItem('hcpmvp03OrganisationName', organisationNameInput);

  if (localStorage.getItem('hcpmvp03ChangingPractitionerOrgNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/check-sr1-form"); }
  if (localStorage.getItem('hcpmvp03ChangingPractitionerOrgName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/check-sr1-form"); }

  const organisationAddressLine1Input = document.getElementById('organisationAddressLine1').value;
  localStorage.setItem('hcpmvp03OrganisationAddressLine1', organisationAddressLine1Input);

  const organisationAddressLine2Input = document.getElementById('organisationAddressLine2').value;
  localStorage.setItem('hcpmvp03OrganisationAddressLine2', organisationAddressLine2Input);

  const organisationAddressCountyInput = document.getElementById('organisationAddressCounty').value;
  localStorage.setItem('hcpmvp03OrganisationAddressCounty', organisationAddressCountyInput);

  const organisationtownOrCityInput = document.getElementById('organisationTownCity').value;
  localStorage.setItem('hcpmvp03TownOrCity', organisationtownOrCityInput);

  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpmvp03Postcode', postcodeInput);
}
function saveHCPNamemvp03() {
  const firstNameInput = document.getElementById('firstName').value;
  const lastNameInput = document.getElementById('lastName').value;
  localStorage.setItem('hcpmvp03Firstname', firstNameInput);
  localStorage.setItem('hcpmvp03Lastname', lastNameInput);
  if (localStorage.getItem('hcpmvp03ChangingPractitionerName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/profile-details"); }
  if (localStorage.getItem('hcpmvp03ChangingPractitionerNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/check-profile-details"); }
}
function saveHCPOrgAddressmvp03() {
  const organisationNameInput = document.getElementById('organisationName').value;
  localStorage.setItem('hcpmvp03OrganisationName', organisationNameInput);
  if (localStorage.getItem('hcpmvp03ChangingPractitionerOrgNameNew')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/check-profile-details"); }
  if (localStorage.getItem('hcpmvp03ChangingPractitionerOrgName')) { profilePage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp03/profile-details"); }

  const organisationAddressLine1Input = document.getElementById('organisationAddressLine1').value;
  localStorage.setItem('hcpmvp03OrganisationAddressLine1', organisationAddressLine1Input);

  const organisationAddressLine2Input = document.getElementById('organisationAddressLine2').value;
  localStorage.setItem('hcpmvp03OrganisationAddressLine2', organisationAddressLine2Input);

  const organisationAddressCountyInput = document.getElementById('organisationAddressCounty').value;
  localStorage.setItem('hcpmvp03OrganisationAddressCounty', organisationAddressCountyInput);

  const organisationtownOrCityInput = document.getElementById('organisationTownCity').value;
  localStorage.setItem('hcpmvp03TownOrCity', organisationtownOrCityInput);

  const postcodeInput = document.getElementById('postcode').value;
  localStorage.setItem('hcpmvp03Postcode', postcodeInput);
}



// ==================
// Profile completed
// ==================

// v01
function hcpv01ProfileDetailsCompleteFn(event) {
  event.preventDefault();
  if ((
    localStorage.getItem('hcpv01Fullname') ||
    localStorage.getItem('hcpv01Role') ||
    localStorage.getItem('hcpv01ProfessionalRegistrationNumber') ||
    localStorage.getItem('hcpv01MobileNumber') ||
    localStorage.getItem('hcpv01OrganisationName') ||
    localStorage.getItem('hcpv01OrganisationAddressLine1') ||
    localStorage.getItem('hcpv01OrganisationAddressLine2') ||
    localStorage.getItem('hcpv01TownOrCity') ||
    localStorage.getItem('hcpv01Postcode')) &&
    (!localStorage.getItem('hcpv01ReminderTriggered'))) {
    window.location.pathname = "/hcp-e2e-journey-v01/account-d-dashboard";
  }
}
// v02
function hcpv02ProfileDetailsCompleteFn(event) {
  event.preventDefault();
  if ((
    localStorage.getItem('hcpv02Fullname') ||
    localStorage.getItem('hcpv02Role') ||
    localStorage.getItem('hcpv02ProfessionalRegistrationNumber') ||
    localStorage.getItem('hcpv02MobileNumber') ||
    localStorage.getItem('hcpv02OrganisationName') ||
    localStorage.getItem('hcpv02OrganisationAddressLine1') ||
    localStorage.getItem('hcpv02OrganisationAddressLine2') ||
    localStorage.getItem('hcpv02TownOrCity') ||
    localStorage.getItem('hcpv02Postcode')) &&
    (!localStorage.getItem('hcpv02ReminderTriggered'))) {
    window.location.pathname = "/hcp-e2e-journey-v02/account-d-dashboard";
  }
}
// v03
function hcpv03ProfileDetailsCompleteFn(event) {
  event.preventDefault();
  if ((
    localStorage.getItem('hcpv03Fullname') ||
    localStorage.getItem('hcpv03Role') ||
    localStorage.getItem('hcpv03ProfessionalRegistrationNumber') ||
    localStorage.getItem('hcpv03MobileNumber') ||
    localStorage.getItem('hcpv03OrganisationName') ||
    localStorage.getItem('hcpv03OrganisationAddressLine1') ||
    localStorage.getItem('hcpv03OrganisationAddressLine2') ||
    localStorage.getItem('hcpv03TownOrCity') ||
    localStorage.getItem('hcpv03Postcode')) &&
    (!localStorage.getItem('hcpv03ReminderTriggered'))) {
    window.location.pathname = "/hcp-e2e-journey-v03/account-d-dashboard";
  }
}
// v04
function hcpv04ProfileDetailsCompleteFn(event) {
  event.preventDefault();
  if ((
    localStorage.getItem('hcpv04Fullname') ||
    localStorage.getItem('hcpv04Role') ||
    localStorage.getItem('hcpv04ProfessionalRegistrationNumber') ||
    localStorage.getItem('hcpv04MobileNumber') ||
    localStorage.getItem('hcpv04OrganisationName') ||
    localStorage.getItem('hcpv04OrganisationAddressLine1') ||
    localStorage.getItem('hcpv04OrganisationAddressLine2') ||
    localStorage.getItem('hcpv04TownOrCity') ||
    localStorage.getItem('hcpv04Postcode')) &&
    (!localStorage.getItem('hcpv04ReminderTriggered'))) {
    window.location.pathname = "/hcp-e2e-journey-v04/account-d-dashboard";
  }
}
// v05
function hcpv05ProfileDetailsCompleteFn(event) {
  event.preventDefault();
  if ((
    localStorage.getItem('hcpv05Fullname') ||
    localStorage.getItem('hcpv05Role') ||
    localStorage.getItem('hcpv05ProfessionalRegistrationNumber') ||
    localStorage.getItem('hcpv05MobileNumber') ||
    localStorage.getItem('hcpv05OrganisationName') ||
    localStorage.getItem('hcpv05OrganisationAddressLine1') ||
    localStorage.getItem('hcpv05OrganisationAddressLine2') ||
    localStorage.getItem('hcpv05TownOrCity') ||
    localStorage.getItem('hcpv05Postcode')) &&
    (!localStorage.getItem('hcpv05ReminderTriggered'))) {
    window.location.pathname = "/hcp-e2e-journey-v05/account-d-dashboard";
  }
}
// v06
function hcpv06ProfileDetailsCompleteFn(event) {
  event.preventDefault();
  if ((
    localStorage.getItem('hcpv06Fullname') ||
    localStorage.getItem('hcpv06Role') ||
    localStorage.getItem('hcpv06ProfessionalRegistrationNumber') ||
    localStorage.getItem('hcpv06MobileNumber') ||
    localStorage.getItem('hcpv06OrganisationName') ||
    localStorage.getItem('hcpv06OrganisationAddressLine1') ||
    localStorage.getItem('hcpv06OrganisationAddressLine2') ||
    localStorage.getItem('hcpv06TownOrCity') ||
    localStorage.getItem('hcpv06Postcode')) &&
    (!localStorage.getItem('hcpv06ReminderTriggered'))) {
    window.location.pathname = "/hcp-e2e-journey-v06/account-d-dashboard";
  }
}
// v07
function hcpv07ProfileDetailsCompleteFn(event) {
  event.preventDefault();
  if ((
    localStorage.getItem('hcpv07Fullname') ||
    localStorage.getItem('hcpv07Role') ||
    localStorage.getItem('hcpv07ProfessionalRegistrationNumber') ||
    localStorage.getItem('hcpv07MobileNumber') ||
    localStorage.getItem('hcpv07OrganisationName') ||
    localStorage.getItem('hcpv07OrganisationAddressLine1') ||
    localStorage.getItem('hcpv07OrganisationAddressLine2') ||
    localStorage.getItem('hcpv07TownOrCity') ||
    localStorage.getItem('hcpv07Postcode')) &&
    (!localStorage.getItem('hcpv07ReminderTriggered'))) {
    window.location.pathname = "/hcp-e2e-journey-v07/account-d-dashboard";
  }
}
// v08
function hcpv08ProfileDetailsCompleteFn(event) {
  event.preventDefault();
  if ((
    localStorage.getItem('hcpv08Fullname') ||
    localStorage.getItem('hcpv08Role') ||
    localStorage.getItem('hcpv08ProfessionalRegistrationNumber') ||
    localStorage.getItem('hcpv08MobileNumber') ||
    localStorage.getItem('hcpv08OrganisationName') ||
    localStorage.getItem('hcpv08OrganisationAddressLine1') ||
    localStorage.getItem('hcpv08OrganisationAddressLine2') ||
    localStorage.getItem('hcpv08TownOrCity') ||
    localStorage.getItem('hcpv08Postcode')) &&
    (!localStorage.getItem('hcpv08ReminderTriggered'))) {
    window.location.pathname = "/hcp-e2e-journey-v08/account-d-dashboard";
  }
}
// v09
function hcpv09ProfileDetailsCompleteFn(event) {
  event.preventDefault();
  if ((
    localStorage.getItem('hcpv09Fullname') ||
    localStorage.getItem('hcpv09Role') ||
    localStorage.getItem('hcpv09ProfessionalRegistrationNumber') ||
    localStorage.getItem('hcpv09MobileNumber') ||
    localStorage.getItem('hcpv09OrganisationName') ||
    localStorage.getItem('hcpv09OrganisationAddressLine1') ||
    localStorage.getItem('hcpv09OrganisationAddressLine2') ||
    localStorage.getItem('hcpv09TownOrCity') ||
    localStorage.getItem('hcpv09Postcode')) &&
    (!localStorage.getItem('hcpv09ReminderTriggered'))) {
    window.location.pathname = "/hcp-e2e-journey-v09/account-d-dashboard";
  }
}
// mvp01
function hcpmvp01ProfileDetailsCompleteFn(event) {
  event.preventDefault();
  if ((
    localStorage.getItem('hcpmvp01Firstname') ||
    localStorage.getItem('hcpmvp01Lastname') ||
    localStorage.getItem('hcpmvp01Role') ||
    localStorage.getItem('hcpmvp01ProfessionalRegistrationNumber') ||
    localStorage.getItem('hcpmvp01MobileNumber') ||
    localStorage.getItem('hcpmvp01OrganisationName') ||
    localStorage.getItem('hcpmvp01OrganisationAddressLine1') ||
    localStorage.getItem('hcpmvp01OrganisationAddressLine2') ||
    localStorage.getItem('hcpmvp01OrganisationAddressCounty') ||
    localStorage.getItem('hcpmvp01TownOrCity') ||
    localStorage.getItem('hcpmvp01Postcode')) &&
    (!localStorage.getItem('hcpmvp01ReminderTriggered'))) {
    window.location.pathname = "/hcp-e2e-journey-mvp01/account-d-dashboard";
  }
}

// mvp02 PROFILE
function hcpmvp02ProfileDetailsCompleteFn(event) {
  event.preventDefault();
  if ((
    localStorage.getItem('hcpmvp02Firstname') ||
    localStorage.getItem('hcpmvp02Lastname') ||
    localStorage.getItem('hcpmvp02Role') ||
    localStorage.getItem('hcpmvp02ProfessionalRegistrationNumber') ||
    localStorage.getItem('hcpmvp02MobileNumber') ||
    localStorage.getItem('hcpmvp02OrganisationName') ||
    localStorage.getItem('hcpmvp02OrganisationAddressLine1') ||
    localStorage.getItem('hcpmvp02OrganisationAddressLine2') ||
    localStorage.getItem('hcpmvp02OrganisationAddressCounty') ||
    localStorage.getItem('hcpmvp02TownOrCity') ||
    localStorage.getItem('hcpmvp02Postcode')) &&
    (!localStorage.getItem('hcpmvp02ReminderTriggered'))) {
    window.location.pathname = "/hcp-e2e-journey-mvp02/account-d-dashboard";
  }
}
// mvp03 PROFILE
function hcpmvp03ProfileDetailsCompleteFn(event) {
  event.preventDefault();
  if ((
    localStorage.getItem('hcpmvp03Firstname') ||
    localStorage.getItem('hcpmvp03Lastname') ||
    localStorage.getItem('hcpmvp03Role') ||
    localStorage.getItem('hcpmvp03ProfessionalRegistrationNumber') ||
    localStorage.getItem('hcpmvp03MobileNumber') ||
    localStorage.getItem('hcpmvp03OrganisationName') ||
    localStorage.getItem('hcpmvp03OrganisationAddressLine1') ||
    localStorage.getItem('hcpmvp03OrganisationAddressLine2') ||
    localStorage.getItem('hcpmvp03OrganisationAddressCounty') ||
    localStorage.getItem('hcpmvp03TownOrCity') ||
    localStorage.getItem('hcpmvp03Postcode')) &&
    (!localStorage.getItem('hcpmvp03ReminderTriggered'))) {
    window.location.pathname = "/hcp-e2e-journey-mvp03/account-d-dashboard";
  }
}

//capture address from seletion

// v04
function patientv04AddressFn() {
  var patientaddressline1 = document.getElementById("patientaddressline1").value;
  localStorage.setItem('hcpv04PatientAddressLine1', patientaddressline1);
  localStorage.setItem('hcpv04PatientAddressTown', 'Glenrothes');
}
// v05
function patientv05AddressFn() {
  var patientaddressline1 = document.getElementById("patientaddressline1").value;
  localStorage.setItem('hcpv05PatientAddressLine1', patientaddressline1);
  localStorage.setItem('hcpv05PatientAddressTown', 'Glenrothes');
}
// v06
function patientv06AddressFn() {
  var patientaddressline1 = document.getElementById("patientaddressline1").value;
  localStorage.setItem('hcpv06PatientAddressLine1', patientaddressline1);
  localStorage.setItem('hcpv06PatientAddressTown', 'Glenrothes');
}
// v07
function savePatientv07AddressFn() {
  var patientaddressline1 = document.getElementById("patientaddressline1").value;
  localStorage.setItem('hcpv07PatientAddressLine1', patientaddressline1);
  localStorage.setItem('hcpv07PatientAddressTown', 'Glenrothes');
}
// v08
function savePatientv08AddressFn() {
  var patientaddressline1 = document.getElementById("patientaddressline1").value;
  localStorage.setItem('hcpv08PatientAddressLine1', patientaddressline1);
  localStorage.setItem('hcpv08PatientAddressTown', 'Glenrothes');
}
// v09
function savePatientv09AddressFn() {
  var patientaddressline1 = document.getElementById("patientaddressline1").value;
  localStorage.setItem('hcpv09PatientAddressLine1', patientaddressline1);
  localStorage.setItem('hcpv09PatientAddressTown', 'Glenrothes');
}


// ==========
// Reminders
// ==========

//reminders-1
let currentValueOfReceiveReminders = 0;
let reminderPage1UrlAction = document.getElementById('remindersPage1');

// v01
function hcpv01ReceiveReminderFn(receiveReminder) {
  currentValueOfReceiveReminders = receiveReminder.value;
  localStorage.setItem('hcpv01ReceiveReminder', currentValueOfReceiveReminders);
  localStorage.setItem('hcpv01ReminderTriggered', true);
  if (consoleLogs) console.log('hcpv01ReceiveReminder: ' + currentValueOfReceiveReminders);
  if ((currentValueOfReceiveReminders === "Yes") && (localStorage.getItem('hcpv01ChangingReceiveReminders'))) { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v01/reminder-settings"); }
  if ((currentValueOfReceiveReminders === "Yes") && (!localStorage.getItem('hcpv01ReminderType') || !localStorage.getItem('hcpv01ReminderFrequency'))) { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v01/reminders-2-new"); }
  if (currentValueOfReceiveReminders === "No") { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v01/reminders-1/answer"); }
}
// v02
function hcpv02ReceiveReminderFn(receiveReminder) {
  currentValueOfReceiveReminders = receiveReminder.value;
  localStorage.setItem('hcpv02ReceiveReminder', currentValueOfReceiveReminders);
  localStorage.setItem('hcpv02ReminderTriggered', true);
  if (consoleLogs) console.log('hcpv02ReceiveReminder: ' + currentValueOfReceiveReminders);
  if ((currentValueOfReceiveReminders === "Yes") && (localStorage.getItem('hcpv02ChangingReceiveReminders'))) { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v02/reminder-settings"); }
  if ((currentValueOfReceiveReminders === "Yes") && (!localStorage.getItem('hcpv02ReminderType') || !localStorage.getItem('hcpv02ReminderFrequency'))) { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v02/reminders-2"); }
  if (currentValueOfReceiveReminders === "No") { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v02/reminders-1/answer"); }
}
// v03
function hcpv03ReceiveReminderFn(receiveReminder) {
  currentValueOfReceiveReminders = receiveReminder.value;
  localStorage.setItem('hcpv03ReceiveReminder', currentValueOfReceiveReminders);
  localStorage.setItem('hcpv03ReminderTriggered', true);
  if (consoleLogs) console.log('hcpv03ReceiveReminder: ' + currentValueOfReceiveReminders);
  if ((currentValueOfReceiveReminders === "Yes") && (localStorage.getItem('hcpv03ChangingReceiveReminders'))) { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v03/reminder-settings"); }
  if ((currentValueOfReceiveReminders === "Yes") && (!localStorage.getItem('hcpv03ReminderType') || !localStorage.getItem('hcpv03ReminderFrequency'))) { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v03/reminders-2"); }
  if (currentValueOfReceiveReminders === "No") { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v03/reminders-1/answer"); }
}
// v04
function hcpv04ReceiveReminderFn(receiveReminder) {
  currentValueOfReceiveReminders = receiveReminder.value;
  localStorage.setItem('hcpv04ReceiveReminder', currentValueOfReceiveReminders);
  localStorage.setItem('hcpv04ReminderTriggered', true);
  if (consoleLogs) console.log('hcpv04ReceiveReminder: ' + currentValueOfReceiveReminders);
  if ((currentValueOfReceiveReminders === "Yes") && (localStorage.getItem('hcpv04ChangingReceiveReminders'))) { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v04/reminder-settings"); }
  if ((currentValueOfReceiveReminders === "Yes") && (!localStorage.getItem('hcpv04ReminderType') || !localStorage.getItem('hcpv04ReminderFrequency'))) { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v04/reminders-2-new"); }
  if (currentValueOfReceiveReminders === "No") { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v04/reminders-1/answer"); }
}
// v05
function hcpv05ReceiveReminderFn(receiveReminder) {
  currentValueOfReceiveReminders = receiveReminder.value;
  localStorage.setItem('hcpv05ReceiveReminder', currentValueOfReceiveReminders);
  localStorage.setItem('hcpv05ReminderTriggered', true);
  if (consoleLogs) console.log('hcpv05ReceiveReminder: ' + currentValueOfReceiveReminders);
  if ((currentValueOfReceiveReminders === "Yes") && (localStorage.getItem('hcpv05ChangingReceiveReminders'))) { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v05/reminder-settings"); }
  if ((currentValueOfReceiveReminders === "Yes") && (!localStorage.getItem('hcpv05ReminderType') || !localStorage.getItem('hcpv05ReminderFrequency'))) { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v05/reminders-2"); }
  if (currentValueOfReceiveReminders === "No") { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v05/reminders-1/answer"); }
}
// v06
function hcpv06ReceiveReminderFn(receiveReminder) {
  currentValueOfReceiveReminders = receiveReminder.value;
  localStorage.setItem('hcpv06ReceiveReminder', currentValueOfReceiveReminders);
  localStorage.setItem('hcpv06ReminderTriggered', true);
  if (consoleLogs) console.log('hcpv06ReceiveReminder: ' + currentValueOfReceiveReminders);
  if ((currentValueOfReceiveReminders === "Yes") && (localStorage.getItem('hcpv06ChangingReceiveReminders'))) { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v06/reminder-settings"); }
  if ((currentValueOfReceiveReminders === "Yes") && (!localStorage.getItem('hcpv06ReminderType') || !localStorage.getItem('hcpv06ReminderFrequency'))) { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v06/reminders-2"); }
  if (currentValueOfReceiveReminders === "No") { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v06/reminders-1/answer"); }
}
// v07
function hcpv07ReceiveReminderFn(receiveReminder) {
  currentValueOfReceiveReminders = receiveReminder.value;
  localStorage.setItem('hcpv07ReceiveReminder', currentValueOfReceiveReminders);
  localStorage.setItem('hcpv07ReminderTriggered', true);
  if (consoleLogs) console.log('hcpv07ReceiveReminder: ' + currentValueOfReceiveReminders);
  if ((currentValueOfReceiveReminders === "Yes") && (localStorage.getItem('hcpv07ChangingReceiveReminders'))) { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v07/reminder-settings"); }
  if ((currentValueOfReceiveReminders === "Yes") && (!localStorage.getItem('hcpv07ReminderType') || !localStorage.getItem('hcpv07ReminderFrequency'))) { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v07/reminders-2-new"); }
  if (currentValueOfReceiveReminders === "No") { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v07/reminders-1/answer"); }
}
// v08
function hcpv08ReceiveReminderFn(receiveReminder) {
  currentValueOfReceiveReminders = receiveReminder.value;
  localStorage.setItem('hcpv08ReceiveReminder', currentValueOfReceiveReminders);
  localStorage.setItem('hcpv08ReminderTriggered', true);
  if (consoleLogs) console.log('hcpv08ReceiveReminder: ' + currentValueOfReceiveReminders);
  if ((currentValueOfReceiveReminders === "Yes") && (localStorage.getItem('hcpv08ChangingReceiveReminders'))) { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v08/reminder-settings"); }
  if ((currentValueOfReceiveReminders === "Yes") && (!localStorage.getItem('hcpv08ReminderType') || !localStorage.getItem('hcpv08ReminderFrequency'))) { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v08/reminders-2"); }
  if (currentValueOfReceiveReminders === "No") { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v08/reminders-1/answer"); }
}
// v09
function hcpv09ReceiveReminderFn(receiveReminder) {
  currentValueOfReceiveReminders = receiveReminder.value;
  localStorage.setItem('hcpv09ReceiveReminder', currentValueOfReceiveReminders);
  localStorage.setItem('hcpv09ReminderTriggered', true);
  if (consoleLogs) console.log('hcpv09ReceiveReminder: ' + currentValueOfReceiveReminders);
  if ((currentValueOfReceiveReminders === "Yes") && (localStorage.getItem('hcpv09ChangingReceiveReminders'))) { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v09/reminder-settings"); }
  if ((currentValueOfReceiveReminders === "Yes") && (!localStorage.getItem('hcpv09ReminderType') || !localStorage.getItem('hcpv09ReminderFrequency'))) { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v09/reminders-2"); }
  if (currentValueOfReceiveReminders === "No") { reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v09/reminders-1/answer"); }
}

// reminders-2

let currentValueOfReminderType = 0;
let reminderPage2UrlAction = document.getElementById('remindersPage2');

// v01
function hcpv01ReminderTypeFn(reminderType) {
  currentValueOfReminderType = reminderType.value;
  localStorage.setItem('hcpv01ReminderType', currentValueOfReminderType);
  let formElements = document.getElementById('remindersPage2').elements;
  let emailReminderTxt = document.getElementById('emailReminderTxt');
  let textMessageReminderTxt = document.getElementById('TextMessageReminderTxt');
  if (consoleLogs) console.log('hcpv01ReminderType: ' + currentValueOfReminderType);
  if (localStorage.getItem('hcpv01ChangingReminderType')) { reminderPage2UrlAction.setAttribute("action", "/hcp-e2e-journey-v01/reminder-settings"); }
  let selectionOption = document.querySelector('input[name="reminderType"]:checked').value;
  console.log('reminderType', reminderType.id);
}
// v02
function hcpv02ReminderTypeFn(reminderType) {
  currentValueOfReminderType = reminderType.value;
  localStorage.setItem('hcpv02ReminderType', currentValueOfReminderType);
  let formElements = document.getElementById('remindersPage2').elements;
  let emailReminderTxt = document.getElementById('emailReminderTxt');
  let textMessageReminderTxt = document.getElementById('TextMessageReminderTxt');
  if (consoleLogs) console.log('hcpv02ReminderType: ' + currentValueOfReminderType);
  if (localStorage.getItem('hcpv02ChangingReminderType')) { reminderPage2UrlAction.setAttribute("action", "/hcp-e2e-journey-v02/reminder-settings"); }
  let selectionOption = document.querySelector('input[name="reminderType"]:checked').value;
  console.log('reminderType', reminderType.id);
}
// v03
function hcpv03ReminderTypeFn(reminderType) {
  currentValueOfReminderType = reminderType.value;
  localStorage.setItem('hcpv03ReminderType', currentValueOfReminderType);
  let formElements = document.getElementById('remindersPage2').elements;
  let emailReminderTxt = document.getElementById('emailReminderTxt');
  let textMessageReminderTxt = document.getElementById('TextMessageReminderTxt');
  if (consoleLogs) console.log('hcpv03ReminderType: ' + currentValueOfReminderType);
  if (localStorage.getItem('hcpv03ChangingReminderType')) { reminderPage2UrlAction.setAttribute("action", "/hcp-e2e-journey-v03/reminder-settings"); }
  let selectionOption = document.querySelector('input[name="reminderType"]:checked').value;
  console.log('reminderType', reminderType.id);
}
// v04
function hcpv04ReminderTypeFn(reminderType) {
  currentValueOfReminderType = reminderType.value;
  localStorage.setItem('hcpv04ReminderType', currentValueOfReminderType);
  let formElements = document.getElementById('remindersPage2').elements;
  let emailReminderTxt = document.getElementById('emailReminderTxt');
  let textMessageReminderTxt = document.getElementById('TextMessageReminderTxt');
  if (consoleLogs) console.log('hcpv04ReminderType: ' + currentValueOfReminderType);
  if (localStorage.getItem('hcpv04ChangingReminderType')) { reminderPage2UrlAction.setAttribute("action", "/hcp-e2e-journey-v04/reminder-settings"); }
  let selectionOption = document.querySelector('input[name="reminderType"]:checked').value;
  console.log('reminderType', reminderType.id);
}
// v05
function hcpv05ReminderTypeFn(reminderType) {
  currentValueOfReminderType = reminderType.value;
  localStorage.setItem('hcpv05ReminderType', currentValueOfReminderType);
  let formElements = document.getElementById('remindersPage2').elements;
  let emailReminderTxt = document.getElementById('emailReminderTxt');
  let textMessageReminderTxt = document.getElementById('TextMessageReminderTxt');
  if (consoleLogs) console.log('hcpv05ReminderType: ' + currentValueOfReminderType);
  if (localStorage.getItem('hcpv05ChangingReminderType')) { reminderPage2UrlAction.setAttribute("action", "/hcp-e2e-journey-v05/reminder-settings"); }
  let selectionOption = document.querySelector('input[name="reminderType"]:checked').value;
  console.log('reminderType', reminderType.id);
}
// v06
function hcpv06ReminderTypeFn(reminderType) {
  currentValueOfReminderType = reminderType.value;
  localStorage.setItem('hcpv06ReminderType', currentValueOfReminderType);
  let formElements = document.getElementById('remindersPage2').elements;
  let emailReminderTxt = document.getElementById('emailReminderTxt');
  let textMessageReminderTxt = document.getElementById('TextMessageReminderTxt');
  if (consoleLogs) console.log('hcpv06ReminderType: ' + currentValueOfReminderType);
  if (localStorage.getItem('hcpv06ChangingReminderType')) {
    reminderPage2UrlAction.setAttribute("action", "/hcp-e2e-journey-v06/reminder-settings");
  }
  let selectionOption = document.querySelector('input[name="reminderType"]:checked').value;
  console.log('reminderType', reminderType.id);
}
// v07
function hcpv07ReminderTypeFn(reminderType) {
  currentValueOfReminderType = reminderType.value;
  localStorage.setItem('hcpv07ReminderType', currentValueOfReminderType);
  let formElements = document.getElementById('remindersPage2').elements;
  let emailReminderTxt = document.getElementById('emailReminderTxt');
  let textMessageReminderTxt = document.getElementById('TextMessageReminderTxt');
  if (consoleLogs) console.log('hcpv07ReminderType: ' + currentValueOfReminderType);
  if (localStorage.getItem('hcpv07ChangingReminderType')) { reminderPage2UrlAction.setAttribute("action", "/hcp-e2e-journey-v07/reminder-settings"); }
  let selectionOption = document.querySelector('input[name="reminderType"]:checked').value;
  console.log('reminderType', reminderType.id);
}
// v08
function hcpv08ReminderTypeFn(reminderType) {
  currentValueOfReminderType = reminderType.value;
  localStorage.setItem('hcpv08ReminderType', currentValueOfReminderType);
  let formElements = document.getElementById('remindersPage2').elements;
  let emailReminderTxt = document.getElementById('emailReminderTxt');
  let textMessageReminderTxt = document.getElementById('TextMessageReminderTxt');
  if (consoleLogs) console.log('hcpv08ReminderType: ' + currentValueOfReminderType);
  if (localStorage.getItem('hcpv08ChangingReminderType')) { reminderPage2UrlAction.setAttribute("action", "/hcp-e2e-journey-v08/reminder-settings"); }
  let selectionOption = document.querySelector('input[name="reminderType"]:checked').value;
  console.log('reminderType', reminderType.id);
}
// v09
function hcpv09ReminderTypeFn(reminderType) {
  currentValueOfReminderType = reminderType.value;
  localStorage.setItem('hcpv09ReminderType', currentValueOfReminderType);
  let formElements = document.getElementById('remindersPage2').elements;
  let emailReminderTxt = document.getElementById('emailReminderTxt');
  let textMessageReminderTxt = document.getElementById('TextMessageReminderTxt');
  if (consoleLogs) console.log('hcpv09ReminderType: ' + currentValueOfReminderType);
  if (localStorage.getItem('hcpv09ChangingReminderType')) { reminderPage2UrlAction.setAttribute("action", "/hcp-e2e-journey-v09/reminder-settings"); }
  let selectionOption = document.querySelector('input[name="reminderType"]:checked').value;
  console.log('reminderType', reminderType.id);
}

// reminders-3

let currentValueOfReminderFrequency = 0;
let reminderPage3UrlAction = document.getElementById('remindersPage3');

// v01
function hcpv01ReminderFrequencyFn(reminderFrequency) {
  currentValueOfReminderFrequency = reminderFrequency.value;
  localStorage.setItem('hcpv01ReminderFrequency', currentValueOfReminderFrequency);
  if (consoleLogs) console.log('hcpv01ReminderFrequency: ' + currentValueOfReminderFrequency);
  if (localStorage.getItem('hcpv01ChangingReminderFrequency')) { reminderPage3UrlAction.setAttribute("action", "/hcp-e2e-journey-v01/reminder-settings"); }
}
// v02
function hcpv02ReminderFrequencyFn(reminderFrequency) {
  currentValueOfReminderFrequency = reminderFrequency.value;
  localStorage.setItem('hcpv02ReminderFrequency', currentValueOfReminderFrequency);
  if (consoleLogs) console.log('hcpv02ReminderFrequency: ' + currentValueOfReminderFrequency);
  if (localStorage.getItem('hcpv02ChangingReminderFrequency')) { reminderPage3UrlAction.setAttribute("action", "/hcp-e2e-journey-v02/reminder-settings"); }
}
// v03
function hcpv03ReminderFrequencyFn(reminderFrequency) {
  currentValueOfReminderFrequency = reminderFrequency.value;
  localStorage.setItem('hcpv03ReminderFrequency', currentValueOfReminderFrequency);
  if (consoleLogs) console.log('hcpv03ReminderFrequency: ' + currentValueOfReminderFrequency);
  if (localStorage.getItem('hcpv03ChangingReminderFrequency')) { reminderPage3UrlAction.setAttribute("action", "/hcp-e2e-journey-v03/reminder-settings"); }
}
// v04
function hcpv04ReminderFrequencyFn(reminderFrequency) {
  currentValueOfReminderFrequency = reminderFrequency.value;
  localStorage.setItem('hcpv04ReminderFrequency', currentValueOfReminderFrequency);
  if (consoleLogs) console.log('hcpv04ReminderFrequency: ' + currentValueOfReminderFrequency);
  if (localStorage.getItem('hcpv04ChangingReminderFrequency')) { reminderPage3UrlAction.setAttribute("action", "/hcp-e2e-journey-v04/reminder-settings"); }
}
// v05
function hcpv05ReminderFrequencyFn(reminderFrequency) {
  currentValueOfReminderFrequency = reminderFrequency.value;
  localStorage.setItem('hcpv05ReminderFrequency', currentValueOfReminderFrequency);
  if (consoleLogs) console.log('hcpv05ReminderFrequency: ' + currentValueOfReminderFrequency);
  if (localStorage.getItem('hcpv05ChangingReminderFrequency')) { reminderPage3UrlAction.setAttribute("action", "/hcp-e2e-journey-v05/reminder-settings"); }
}
// v06
function hcpv06ReminderFrequencyFn(reminderFrequency) {
  currentValueOfReminderFrequency = reminderFrequency.value;
  localStorage.setItem('hcpv06ReminderFrequency', currentValueOfReminderFrequency);
  if (consoleLogs) console.log('hcpv06ReminderFrequency: ' + currentValueOfReminderFrequency);
  if (localStorage.getItem('hcpv06ChangingReminderFrequency')) { reminderPage3UrlAction.setAttribute("action", "/hcp-e2e-journey-v06/reminder-dashboard"); }
}
// v07
function hcpv07ReminderFrequencyFn(reminderFrequency) {
  currentValueOfReminderFrequency = reminderFrequency.value;
  localStorage.setItem('hcpv07ReminderFrequency', currentValueOfReminderFrequency);
  if (consoleLogs) console.log('hcpv07ReminderFrequency: ' + currentValueOfReminderFrequency);
  if (localStorage.getItem('hcpv07ChangingReminderFrequency')) { reminderPage3UrlAction.setAttribute("action", "/hcp-e2e-journey-v07/reminder-settings"); }
}
// v08
function hcpv08ReminderFrequencyFn(reminderFrequency) {
  currentValueOfReminderFrequency = reminderFrequency.value;
  localStorage.setItem('hcpv08ReminderFrequency', currentValueOfReminderFrequency);
  if (consoleLogs) console.log('hcpv08ReminderFrequency: ' + currentValueOfReminderFrequency);
  if (localStorage.getItem('hcpv08ChangingReminderFrequency')) { reminderPage3UrlAction.setAttribute("action", "/hcp-e2e-journey-v08/reminder-settings"); }
}
// v09
function hcpv09ReminderFrequencyFn(reminderFrequency) {
  currentValueOfReminderFrequency = reminderFrequency.value;
  localStorage.setItem('hcpv09ReminderFrequency', currentValueOfReminderFrequency);
  if (consoleLogs) console.log('hcpv09ReminderFrequency: ' + currentValueOfReminderFrequency);
  if (localStorage.getItem('hcpv09ChangingReminderFrequency')) { reminderPage3UrlAction.setAttribute("action", "/hcp-e2e-journey-v09/reminder-settings"); }
}

// Change Reminder settings
function changingReceiveRemindersFn() {
  localStorage.setItem('hcpv01ChangingReceiveReminders', true);
  localStorage.setItem('hcpv02ChangingReceiveReminders', true);
  localStorage.setItem('hcpv03ChangingReceiveReminders', true);
  localStorage.setItem('hcpv04ChangingReceiveReminders', true);
  localStorage.setItem('hcpv05ChangingReceiveReminders', true);
  localStorage.setItem('hcpv06ChangingReceiveReminders', true);
  localStorage.setItem('hcpv07ChangingReceiveReminders', true);
  localStorage.setItem('hcpv08ChangingReceiveReminders', true);
  localStorage.setItem('hcpv09ChangingReceiveReminders', true);
}
function changingReminderTypeFn() {
  localStorage.setItem('hcpv01ChangingReminderType', true);
  localStorage.setItem('hcpv02ChangingReminderType', true);
  localStorage.setItem('hcpv03ChangingReminderType', true);
  localStorage.setItem('hcpv04ChangingReminderType', true);
  localStorage.setItem('hcpv05ChangingReminderType', true);
  localStorage.setItem('hcpv06ChangingReminderType', true);
  localStorage.setItem('hcpv07ChangingReminderType', true);
  localStorage.setItem('hcpv08ChangingReminderType', true);
  localStorage.setItem('hcpv09ChangingReminderType', true);
}
function changingMobileNumberFn() {
  localStorage.setItem('hcpv01ChangingMobileNumber', true);
  localStorage.setItem('hcpv02ChangingMobileNumber', true);
  localStorage.setItem('hcpv03ChangingMobileNumber', true);
  localStorage.setItem('hcpv04ChangingMobileNumber', true);
  localStorage.setItem('hcpv05ChangingMobileNumber', true);
  localStorage.setItem('hcpv06ChangingMobileNumber', true);
  localStorage.setItem('hcpv07ChangingMobileNumber', true);
  localStorage.setItem('hcpv08ChangingMobileNumber', true);
  localStorage.setItem('hcpv09ChangingMobileNumber', true);
}
function changingReminderFrequencyFn() {
  localStorage.setItem('hcpv01ChangingReminderFrequency', true);
  localStorage.setItem('hcpv02ChangingReminderFrequency', true);
  localStorage.setItem('hcpv03ChangingReminderFrequency', true);
  localStorage.setItem('hcpv04ChangingReminderFrequency', true);
  localStorage.setItem('hcpv05ChangingReminderFrequency', true);
  localStorage.setItem('hcpv06ChangingReminderFrequency', true);
  localStorage.setItem('hcpv07ChangingReminderFrequency', true);
  localStorage.setItem('hcpv08ChangingReminderFrequency', true);
  localStorage.setItem('hcpv09ChangingReminderFrequency', true);
}

// Reset change reminders

function resetChangeFn() {
  // v01
  if (localStorage.getItem('hcpv01ChangingReceiveReminders')) localStorage.removeItem('hcpv01ChangingReceiveReminders');
  if (localStorage.getItem('hcpv01ChangingReminderType')) localStorage.removeItem('hcpv01ChangingReminderType');
  if (localStorage.getItem('hcpv01ChangingReminderFrequency')) localStorage.removeItem('hcpv01ChangingReminderFrequency');
  if (localStorage.getItem('hcpv01UpdateProfileDetailsFromSendSR1FormPage')) localStorage.removeItem('hcpv01UpdateProfileDetailsFromSendSR1FormPage');
  if (pageUrlPath === '/hcp-e2e-journey-v01/reminders-1') {
    if (localStorage.getItem('hcpv01ReceiveReminder') === "No") {
      localStorage.removeItem('hcpv01ReminderType');
      localStorage.removeItem('hcpv01ReminderFrequency');
    }
  }
  // v02
  if (localStorage.getItem('hcpv02ChangingReceiveReminders')) localStorage.removeItem('hcpv02ChangingReceiveReminders');
  if (localStorage.getItem('hcpv02ChangingReminderType')) localStorage.removeItem('hcpv02ChangingReminderType');
  if (localStorage.getItem('hcpv02ChangingReminderFrequency')) localStorage.removeItem('hcpv02ChangingReminderFrequency');
  if (localStorage.getItem('hcpv02UpdateProfileDetailsFromSendSR1FormPage')) localStorage.removeItem('hcpv02UpdateProfileDetailsFromSendSR1FormPage');
  if (pageUrlPath === '/hcp-e2e-journey-v02/reminders-1') {
    if (localStorage.getItem('hcpv02ReceiveReminder') === "No") {
      localStorage.removeItem('hcpv02ReminderType');
      localStorage.removeItem('hcpv02ReminderFrequency');
    }
  }
  // v03
  if (localStorage.getItem('hcpv03ChangingReceiveReminders')) localStorage.removeItem('hcpv03ChangingReceiveReminders');
  if (localStorage.getItem('hcpv03ChangingReminderType')) localStorage.removeItem('hcpv03ChangingReminderType');
  if (localStorage.getItem('hcpv03ChangingReminderFrequency')) localStorage.removeItem('hcpv03ChangingReminderFrequency');
  if (localStorage.getItem('hcpv03UpdateProfileDetailsFromSendSR1FormPage')) localStorage.removeItem('hcpv03UpdateProfileDetailsFromSendSR1FormPage');
  if (pageUrlPath === '/hcp-e2e-journey-v03/reminders-1') {
    if (localStorage.getItem('hcpv03ReceiveReminder') === "No") {
      localStorage.removeItem('hcpv03ReminderType');
      localStorage.removeItem('hcpv03ReminderFrequency');
    }
  }
  // v04
  if (localStorage.getItem('hcpv04ChangingReceiveReminders')) localStorage.removeItem('hcpv04ChangingReceiveReminders');
  if (localStorage.getItem('hcpv04ChangingReminderType')) localStorage.removeItem('hcpv04ChangingReminderType');
  if (localStorage.getItem('hcpv04ChangingReminderFrequency')) localStorage.removeItem('hcpv04ChangingReminderFrequency');
  if (localStorage.getItem('hcpv04ChangingPractitionerName')) localStorage.removeItem('hcpv04ChangingPractitionerName');
  if (localStorage.getItem('hcpv04ChangingPractitionerNameNew')) localStorage.removeItem('hcpv04ChangingPractitionerNameNew');
  if (localStorage.getItem('hcpv04ChangingPractitionerRole')) localStorage.removeItem('hcpv04ChangingPractitionerRole');
  if (localStorage.getItem('hcpv04ChangingPractitionerRoleNew')) localStorage.removeItem('hcpv04ChangingPractitionerRoleNew');
  if (localStorage.getItem('hcpv04ChangingPractitionerRegNo')) localStorage.removeItem('hcpv04ChangingPractitionerRegNo');
  if (localStorage.getItem('hcpv04ChangingPractitionerRegNoNew')) localStorage.removeItem('hcpv04ChangingPractitionerRegNoNew');
  if (localStorage.getItem('hcpv04ChangingPractitionerPhoneNo')) localStorage.removeItem('hcpv04ChangingPractitionerPhoneNo');
  if (localStorage.getItem('hcpv04ChangingPractitionerPhoneNoNew')) localStorage.removeItem('hcpv04ChangingPractitionerPhoneNoNew');
  if (localStorage.getItem('hcpv04ChangingPractitionerOrgName')) localStorage.removeItem('hcpv04ChangingPractitionerOrgName');
  if (localStorage.getItem('hcpv04ChangingPractitionerOrgNameNew')) localStorage.removeItem('hcpv04ChangingPractitionerOrgNameNew');
  if (localStorage.getItem('hcpv04ChangingPractitionerOrgAddress')) localStorage.removeItem('hcpv04ChangingPractitionerOrgAddress');
  if (localStorage.getItem('hcpv04ChangingPractitionerOrgAddressNew')) localStorage.removeItem('hcpv04ChangingPractitionerOrgAddressNew');
  if (localStorage.getItem('hcpv04UpdateProfileDetailsFromSendSR1FormPage')) localStorage.removeItem('hcpv04UpdateProfileDetailsFromSendSR1FormPage');
  if (pageUrlPath === '/hcp-e2e-journey-v04/reminders-1') {
    if (localStorage.getItem('hcpv04ReceiveReminder') === "No") {
      localStorage.removeItem('hcpv04ReminderType');
      localStorage.removeItem('hcpv04ReminderFrequency');
    }
  }
  // v05
  if (localStorage.getItem('hcpv05ChangingReceiveReminders')) localStorage.removeItem('hcpv05ChangingReceiveReminders');
  if (localStorage.getItem('hcpv05ChangingReminderType')) localStorage.removeItem('hcpv05ChangingReminderType');
  if (localStorage.getItem('hcpv05ChangingReminderFrequency')) localStorage.removeItem('hcpv05ChangingReminderFrequency');
  if (localStorage.getItem('hcpv05ChangingPractitionerName')) localStorage.removeItem('hcpv05ChangingPractitionerName');
  if (localStorage.getItem('hcpv05ChangingPractitionerNameNew')) localStorage.removeItem('hcpv05ChangingPractitionerNameNew');
  if (localStorage.getItem('hcpv05ChangingPractitionerRole')) localStorage.removeItem('hcpv05ChangingPractitionerRole');
  if (localStorage.getItem('hcpv05ChangingPractitionerRoleNew')) localStorage.removeItem('hcpv05ChangingPractitionerRoleNew');
  if (localStorage.getItem('hcpv05ChangingPractitionerRegNo')) localStorage.removeItem('hcpv05ChangingPractitionerRegNo');
  if (localStorage.getItem('hcpv05ChangingPractitionerRegNoNew')) localStorage.removeItem('hcpv05ChangingPractitionerRegNoNew');
  if (localStorage.getItem('hcpv05ChangingPractitionerPhoneNo')) localStorage.removeItem('hcpv05ChangingPractitionerPhoneNo');
  if (localStorage.getItem('hcpv05ChangingPractitionerPhoneNoNew')) localStorage.removeItem('hcpv05ChangingPractitionerPhoneNoNew');
  if (localStorage.getItem('hcpv05ChangingPractitionerOrgName')) localStorage.removeItem('hcpv05ChangingPractitionerOrgName');
  if (localStorage.getItem('hcpv05ChangingPractitionerOrgNameNew')) localStorage.removeItem('hcpv05ChangingPractitionerOrgNameNew');
  if (localStorage.getItem('hcpv05ChangingPractitionerOrgAddress')) localStorage.removeItem('hcpv05ChangingPractitionerOrgAddress');
  if (localStorage.getItem('hcpv05ChangingPractitionerOrgAddressNew')) localStorage.removeItem('hcpv05ChangingPractitionerOrgAddressNew');
  if (localStorage.getItem('hcpv05UpdateProfileDetailsFromSendSR1FormPage')) localStorage.removeItem('hcpv05UpdateProfileDetailsFromSendSR1FormPage');
  if (pageUrlPath === '/hcp-e2e-journey-v05/reminders-1') {
    if (localStorage.getItem('hcpv05ReceiveReminder') === "No") {
      localStorage.removeItem('hcpv05ReminderType');
      localStorage.removeItem('hcpv05ReminderFrequency');
    }
  }
  // v06
  if (localStorage.getItem('hcpv06ChangingReceiveReminders')) localStorage.removeItem('hcpv06ChangingReceiveReminders');
  if (localStorage.getItem('hcpv06ChangingReminderType')) localStorage.removeItem('hcpv06ChangingReminderType');
  if (localStorage.getItem('hcpv06ChangingReminderFrequency')) localStorage.removeItem('hcpv06ChangingReminderFrequency');
  if (localStorage.getItem('hcpv06ChangingPractitionerName')) localStorage.removeItem('hcpv06ChangingPractitionerName');
  if (localStorage.getItem('hcpv06ChangingPractitionerNameNew')) localStorage.removeItem('hcpv06ChangingPractitionerNameNew');
  if (localStorage.getItem('hcpv06ChangingPractitionerRole')) localStorage.removeItem('hcpv06ChangingPractitionerRole');
  if (localStorage.getItem('hcpv06ChangingPractitionerRoleNew')) localStorage.removeItem('hcpv06ChangingPractitionerRoleNew');
  if (localStorage.getItem('hcpv06ChangingPractitionerRegNo')) localStorage.removeItem('hcpv06ChangingPractitionerRegNo');
  if (localStorage.getItem('hcpv06ChangingPractitionerRegNoNew')) localStorage.removeItem('hcpv06ChangingPractitionerRegNoNew');
  if (localStorage.getItem('hcpv06ChangingPractitionerPhoneNo')) localStorage.removeItem('hcpv06ChangingPractitionerPhoneNo');
  if (localStorage.getItem('hcpv06ChangingPractitionerPhoneNoNew')) localStorage.removeItem('hcpv06ChangingPractitionerPhoneNoNew');
  if (localStorage.getItem('hcpv06ChangingPractitionerOrgName')) localStorage.removeItem('hcpv06ChangingPractitionerOrgName');
  if (localStorage.getItem('hcpv06ChangingPractitionerOrgNameNew')) localStorage.removeItem('hcpv06ChangingPractitionerOrgNameNew');
  if (localStorage.getItem('hcpv06ChangingPractitionerOrgAddress')) localStorage.removeItem('hcpv06ChangingPractitionerOrgAddress');
  if (localStorage.getItem('hcpv06ChangingPractitionerOrgAddressNew')) localStorage.removeItem('hcpv06ChangingPractitionerOrgAddressNew');
  if (localStorage.getItem('hcpv06UpdateProfileDetailsFromSendSR1FormPage')) localStorage.removeItem('hcpv06UpdateProfileDetailsFromSendSR1FormPage');
  if (pageUrlPath === '/hcp-e2e-journey-v06/reminders-1') {
    if (localStorage.getItem('hcpv06ReceiveReminder') === "No") {
      localStorage.removeItem('hcpv06ReminderType');
      localStorage.removeItem('hcpv06ReminderFrequency');
    }
  }
  // v07
  if (localStorage.getItem('hcpv07ChangingReceiveReminders')) localStorage.removeItem('hcpv07ChangingReceiveReminders');
  if (localStorage.getItem('hcpv07ChangingReminderType')) localStorage.removeItem('hcpv07ChangingReminderType');
  if (localStorage.getItem('hcpv07ChangingReminderFrequency')) localStorage.removeItem('hcpv07ChangingReminderFrequency');
  if (localStorage.getItem('hcpv07ChangingPractitionerName')) localStorage.removeItem('hcpv07ChangingPractitionerName');
  if (localStorage.getItem('hcpv07ChangingPractitionerNameNew')) localStorage.removeItem('hcpv07ChangingPractitionerNameNew');
  if (localStorage.getItem('hcpv07ChangingPractitionerRole')) localStorage.removeItem('hcpv07ChangingPractitionerRole');
  if (localStorage.getItem('hcpv07ChangingPractitionerRoleNew')) localStorage.removeItem('hcpv07ChangingPractitionerRoleNew');
  if (localStorage.getItem('hcpv07ChangingPractitionerRegNo')) localStorage.removeItem('hcpv07ChangingPractitionerRegNo');
  if (localStorage.getItem('hcpv07ChangingPractitionerRegNoNew')) localStorage.removeItem('hcpv07ChangingPractitionerRegNoNew');
  if (localStorage.getItem('hcpv07ChangingPractitionerPhoneNo')) localStorage.removeItem('hcpv07ChangingPractitionerPhoneNo');
  if (localStorage.getItem('hcpv07ChangingPractitionerPhoneNoNew')) localStorage.removeItem('hcpv07ChangingPractitionerPhoneNoNew');
  if (localStorage.getItem('hcpv07ChangingPractitionerOrgName')) localStorage.removeItem('hcpv07ChangingPractitionerOrgName');
  if (localStorage.getItem('hcpv07ChangingPractitionerOrgNameNew')) localStorage.removeItem('hcpv07ChangingPractitionerOrgNameNew');
  if (localStorage.getItem('hcpv07ChangingPractitionerOrgAddress')) localStorage.removeItem('hcpv07ChangingPractitionerOrgAddress');
  if (localStorage.getItem('hcpv07ChangingPractitionerOrgAddressNew')) localStorage.removeItem('hcpv07ChangingPractitionerOrgAddressNew');
  if (localStorage.getItem('hcpv07UpdateProfileDetailsFromSendSR1FormPage')) localStorage.removeItem('hcpv07UpdateProfileDetailsFromSendSR1FormPage');
  if (pageUrlPath === '/hcp-e2e-journey-v07/reminders-1') {
    if (localStorage.getItem('hcpv07ReceiveReminder') === "No") {
      localStorage.removeItem('hcpv07ReminderType');
      localStorage.removeItem('hcpv07ReminderFrequency');
    }
  }
  // v08
  if (localStorage.getItem('hcpv08ChangingReceiveReminders')) localStorage.removeItem('hcpv08ChangingReceiveReminders');
  if (localStorage.getItem('hcpv08ChangingReminderType')) localStorage.removeItem('hcpv08ChangingReminderType');
  if (localStorage.getItem('hcpv08ChangingReminderFrequency')) localStorage.removeItem('hcpv08ChangingReminderFrequency');
  if (localStorage.getItem('hcpv08ChangingPractitionerName')) localStorage.removeItem('hcpv08ChangingPractitionerName');
  if (localStorage.getItem('hcpv08ChangingPractitionerNameNew')) localStorage.removeItem('hcpv08ChangingPractitionerNameNew');
  if (localStorage.getItem('hcpv08ChangingPractitionerRole')) localStorage.removeItem('hcpv08ChangingPractitionerRole');
  if (localStorage.getItem('hcpv08ChangingPractitionerRoleNew')) localStorage.removeItem('hcpv08ChangingPractitionerRoleNew');
  if (localStorage.getItem('hcpv08ChangingPractitionerRegNo')) localStorage.removeItem('hcpv08ChangingPractitionerRegNo');
  if (localStorage.getItem('hcpv08ChangingPractitionerRegNoNew')) localStorage.removeItem('hcpv08ChangingPractitionerRegNoNew');
  if (localStorage.getItem('hcpv08ChangingPractitionerPhoneNo')) localStorage.removeItem('hcpv08ChangingPractitionerPhoneNo');
  if (localStorage.getItem('hcpv08ChangingPractitionerPhoneNoNew')) localStorage.removeItem('hcpv08ChangingPractitionerPhoneNoNew');
  if (localStorage.getItem('hcpv08ChangingPractitionerOrgName')) localStorage.removeItem('hcpv08ChangingPractitionerOrgName');
  if (localStorage.getItem('hcpv08ChangingPractitionerOrgNameNew')) localStorage.removeItem('hcpv08ChangingPractitionerOrgNameNew');
  if (localStorage.getItem('hcpv08ChangingPractitionerOrgAddress')) localStorage.removeItem('hcpv08ChangingPractitionerOrgAddress');
  if (localStorage.getItem('hcpv08ChangingPractitionerOrgAddressNew')) localStorage.removeItem('hcpv08ChangingPractitionerOrgAddressNew');
  if (localStorage.getItem('hcpv08UpdateProfileDetailsFromSendSR1FormPage')) localStorage.removeItem('hcpv08UpdateProfileDetailsFromSendSR1FormPage');
  if (pageUrlPath === '/hcp-e2e-journey-v08/reminders-1') {
    if (localStorage.getItem('hcpv08ReceiveReminder') === "No") {
      localStorage.removeItem('hcpv08ReminderType');
      localStorage.removeItem('hcpv08ReminderFrequency');
    }
  }
  // v09
  if (localStorage.getItem('hcpv09ChangingReceiveReminders')) localStorage.removeItem('hcpv09ChangingReceiveReminders');
  if (localStorage.getItem('hcpv09ChangingReminderType')) localStorage.removeItem('hcpv09ChangingReminderType');
  if (localStorage.getItem('hcpv09ChangingReminderFrequency')) localStorage.removeItem('hcpv09ChangingReminderFrequency');
  if (localStorage.getItem('hcpv09ChangingPractitionerName')) localStorage.removeItem('hcpv09ChangingPractitionerName');
  if (localStorage.getItem('hcpv09ChangingPractitionerNameNew')) localStorage.removeItem('hcpv09ChangingPractitionerNameNew');
  if (localStorage.getItem('hcpv09ChangingPractitionerRole')) localStorage.removeItem('hcpv09ChangingPractitionerRole');
  if (localStorage.getItem('hcpv09ChangingPractitionerRoleNew')) localStorage.removeItem('hcpv09ChangingPractitionerRoleNew');
  if (localStorage.getItem('hcpv09ChangingPractitionerRegNo')) localStorage.removeItem('hcpv09ChangingPractitionerRegNo');
  if (localStorage.getItem('hcpv09ChangingPractitionerRegNoNew')) localStorage.removeItem('hcpv09ChangingPractitionerRegNoNew');
  if (localStorage.getItem('hcpv09ChangingPractitionerPhoneNo')) localStorage.removeItem('hcpv09ChangingPractitionerPhoneNo');
  if (localStorage.getItem('hcpv09ChangingPractitionerPhoneNoNew')) localStorage.removeItem('hcpv09ChangingPractitionerPhoneNoNew');
  if (localStorage.getItem('hcpv09ChangingPractitionerOrgName')) localStorage.removeItem('hcpv09ChangingPractitionerOrgName');
  if (localStorage.getItem('hcpv09ChangingPractitionerOrgNameNew')) localStorage.removeItem('hcpv09ChangingPractitionerOrgNameNew');
  if (localStorage.getItem('hcpv09ChangingPractitionerOrgAddress')) localStorage.removeItem('hcpv09ChangingPractitionerOrgAddress');
  if (localStorage.getItem('hcpv09ChangingPractitionerOrgAddressNew')) localStorage.removeItem('hcpv09ChangingPractitionerOrgAddressNew');
  if (localStorage.getItem('hcpv09UpdateProfileDetailsFromSendSR1FormPage')) localStorage.removeItem('hcpv09UpdateProfileDetailsFromSendSR1FormPage');
  if (pageUrlPath === '/hcp-e2e-journey-v09/reminders-1') {
    if (localStorage.getItem('hcpv09ReceiveReminder') === "No") {
      localStorage.removeItem('hcpv09ReminderType');
      localStorage.removeItem('hcpv09ReminderFrequency');
    }
  }
}

// Reminder triggered

// v01
function reminderTriggeredV01() {
  localStorage.setItem('hcpv01ReminderTriggered', true);
}
// v02
function reminderTriggeredV02() {
  localStorage.setItem('hcpv02ReminderTriggered', true);
}
// v03
function reminderTriggeredV03() {
  localStorage.setItem('hcpv03ReminderTriggered', true);
}
// v04
function reminderTriggeredV04() {
  localStorage.setItem('hcpv04ReminderTriggered', true);
}
// v05
function reminderTriggeredV05() {
  localStorage.setItem('hcpv05ReminderTriggered', true);
}
// v06
function reminderTriggeredV06() {
  localStorage.setItem('hcpv06ReminderTriggered', true);
}
// v07
function reminderTriggeredV07() {
  localStorage.setItem('hcpv07ReminderTriggered', true);
}
// v08
function reminderTriggeredV08() {
  localStorage.setItem('hcpv08ReminderTriggered', true);
}
// v09
function reminderTriggeredV09() {
  localStorage.setItem('hcpv09ReminderTriggered', true);
}

// Reminder version

function versionAReminder1() {
  document.getElementById('toggleParagraph').classList.add('hidden');
}
function versionBReminder1() {
  document.getElementById('toggleParagraph').classList.remove('hidden');
}
function versionAReminder2() {
  document.getElementById('toggleInsetText').classList.add('hidden');
  document.getElementById('textTop').classList.remove('hidden');
  document.getElementById('textBottom').classList.add('hidden');
}
function versionBReminder2() {
  document.getElementById('toggleInsetText').classList.remove('hidden');
  document.getElementById('textTop').classList.remove('hidden');
  document.getElementById('textBottom').classList.add('hidden');
}
function versionCReminder2() {
  document.getElementById('toggleInsetText').classList.remove('hidden');
  document.getElementById('textTop').classList.add('hidden');
  document.getElementById('textBottom').classList.remove('hidden');
}

// =============
// Profile page
// =============

//Change profile settings
function changingPractitionerNameFn() {
  localStorage.setItem('hcpv04ChangingPractitionerName', true);
  localStorage.setItem('hcpv05ChangingPractitionerName', true);
  localStorage.setItem('hcpv06ChangingPractitionerName', true);
  localStorage.setItem('hcpv07ChangingPractitionerName', true);
  localStorage.setItem('hcpv08ChangingPractitionerName', true);
  localStorage.setItem('hcpv09ChangingPractitionerName', true);
}
function changingPractitionerNameNewFn() {
  localStorage.setItem('hcpv04ChangingPractitionerNameNew', true);
  localStorage.setItem('hcpv05ChangingPractitionerNameNew', true);
  localStorage.setItem('hcpv06ChangingPractitionerNameNew', true);
  localStorage.setItem('hcpv07ChangingPractitionerNameNew', true);
  localStorage.setItem('hcpv08ChangingPractitionerNameNew', true);
  localStorage.setItem('hcpv09ChangingPractitionerNameNew', true);
}
function changingPractitionerRoleFn() {
  localStorage.setItem('hcpv04ChangingPractitionerRole', true);
  localStorage.setItem('hcpv05ChangingPractitionerRole', true);
  localStorage.setItem('hcpv06ChangingPractitionerRole', true);
  localStorage.setItem('hcpv07ChangingPractitionerRole', true);
  localStorage.setItem('hcpv08ChangingPractitionerRole', true);
  localStorage.setItem('hcpv09ChangingPractitionerRole', true);
}
function changingPractitionerRoleNewFn() {
  localStorage.setItem('hcpv04ChangingPractitionerRoleNew', true);
  localStorage.setItem('hcpv05ChangingPractitionerRoleNew', true);
  localStorage.setItem('hcpv06ChangingPractitionerRoleNew', true);
  localStorage.setItem('hcpv07ChangingPractitionerRoleNew', true);
  localStorage.setItem('hcpv08ChangingPractitionerRoleNew', true);
  localStorage.setItem('hcpv09ChangingPractitionerRoleNew', true);
  localStorage.setItem('hcpmvp01ChangingPractitionerRoleNew', true);
}
function changingPractitionerRegNoFn() {
  localStorage.setItem('hcpv04ChangingPractitionerRegNo', true);
  localStorage.setItem('hcpv05ChangingPractitionerRegNo', true);
  localStorage.setItem('hcpv06ChangingPractitionerRegNo', true);
  localStorage.setItem('hcpv07ChangingPractitionerRegNo', true);
  localStorage.setItem('hcpv08ChangingPractitionerRegNo', true);
  localStorage.setItem('hcpv09ChangingPractitionerRegNo', true);
}
function changingPractitionerRegNoNewFn() {
  localStorage.setItem('hcpv04ChangingPractitionerRegNoNew', true);
  localStorage.setItem('hcpv05ChangingPractitionerRegNoNew', true);
  localStorage.setItem('hcpv06ChangingPractitionerRegNoNew', true);
  localStorage.setItem('hcpv07ChangingPractitionerRegNoNew', true);
  localStorage.setItem('hcpv08ChangingPractitionerRegNoNew', true);
  localStorage.setItem('hcpv09ChangingPractitionerRegNoNew', true);
}
function changingPractitionerPhoneNoFn() {
  localStorage.setItem('hcpv04ChangingPractitionerPhoneNo', true);
  localStorage.setItem('hcpv05ChangingPractitionerPhoneNo', true);
  localStorage.setItem('hcpv06ChangingPractitionerPhoneNo', true);
  localStorage.setItem('hcpv07ChangingPractitionerPhoneNo', true);
  localStorage.setItem('hcpv08ChangingPractitionerPhoneNo', true);
  localStorage.setItem('hcpv09ChangingPractitionerPhoneNo', true);
}
function changingPractitionerPhoneNoNewFn() {
  localStorage.setItem('hcpv04ChangingPractitionerPhoneNoNew', true);
  localStorage.setItem('hcpv05ChangingPractitionerPhoneNoNew', true);
  localStorage.setItem('hcpv06ChangingPractitionerPhoneNoNew', true);
  localStorage.setItem('hcpv07ChangingPractitionerPhoneNoNew', true);
  localStorage.setItem('hcpv08ChangingPractitionerPhoneNoNew', true);
  localStorage.setItem('hcpv09ChangingPractitionerPhoneNoNew', true);
}
function changingPractitionerOrgNameFn() {
  localStorage.setItem('hcpv04ChangingPractitionerOrgName', true);
  localStorage.setItem('hcpv05ChangingPractitionerOrgName', true);
  localStorage.setItem('hcpv06ChangingPractitionerOrgName', true);
  localStorage.setItem('hcpv07ChangingPractitionerOrgName', true);
  localStorage.setItem('hcpv08ChangingPractitionerOrgName', true);
  localStorage.setItem('hcpv09ChangingPractitionerOrgName', true);
}
function changingPractitionerOrgNameNewFn() {
  localStorage.setItem('hcpv04ChangingPractitionerOrgNameNew', true);
  localStorage.setItem('hcpv05ChangingPractitionerOrgNameNew', true);
  localStorage.setItem('hcpv06ChangingPractitionerOrgNameNew', true);
  localStorage.setItem('hcpv07ChangingPractitionerOrgNameNew', true);
  localStorage.setItem('hcpv08ChangingPractitionerOrgNameNew', true);
  localStorage.setItem('hcpv09ChangingPractitionerOrgNameNew', true);
}
function changingPractitionerOrgAddressFn() {
  localStorage.setItem('hcpv04ChangingPractitionerOrgAddress', true);
  localStorage.setItem('hcpv05ChangingPractitionerOrgAddress', true);
  localStorage.setItem('hcpv06ChangingPractitionerOrgAddress', true);
  localStorage.setItem('hcpv07ChangingPractitionerOrgAddress', true);
  localStorage.setItem('hcpv08ChangingPractitionerOrgAddress', true);
  localStorage.setItem('hcpv09ChangingPractitionerOrgAddress', true);
}
function changingPractitionerOrgAddressNewFn() {
  localStorage.setItem('hcpv04ChangingPractitionerOrgAddressNew', true);
  localStorage.setItem('hcpv05ChangingPractitionerOrgAddressNew', true);
  localStorage.setItem('hcpv06ChangingPractitionerOrgAddressNew', true);
  localStorage.setItem('hcpv07ChangingPractitionerOrgAddressNew', true);
  localStorage.setItem('hcpv08ChangingPractitionerOrgAddressNew', true);
  localStorage.setItem('hcpv09ChangingPractitionerOrgAddressNew', true);
}

// Profile triggered

// v01
function profileTriggeredV01() {
  localStorage.setItem('hcpv01ProfileTriggered', true);
}
// v02
function profileTriggeredV02() {
  localStorage.setItem('hcpv02ProfileTriggered', true);
}
// v03
function profileTriggeredV03() {
  localStorage.setItem('hcpv03ProfileTriggered', true);
}
// v04
function profileTriggeredV04() {
  localStorage.setItem('hcpv04ProfileTriggered', true);
}
// v05
function profileTriggeredV05() {
  localStorage.setItem('hcpv05ProfileTriggered', true);
}
// v06
function profileTriggeredV06() {
  localStorage.setItem('hcpv06ProfileTriggered', true);
}
// v07
function profileTriggeredV07() {
  localStorage.setItem('hcpv07ProfileTriggered', true);
}
// v08
function profileTriggeredV08() {
  localStorage.setItem('hcpv08ProfileTriggered', true);
}
// v09
function profileTriggeredV09() {
  localStorage.setItem('hcpv09ProfileTriggered', true);
}

// =======
// Columns
// =======

//Show/hide columns in page
function show4Column() {
  document.getElementById('column4').classList.remove('hidden');
  document.getElementById('column5').classList.add('hidden');
}
function show5Column() {
  document.getElementById('column5').classList.remove('hidden');
  document.getElementById('column4').classList.add('hidden');
}
function versionAStart() {
  document.getElementById('versionAStart').classList.remove('hidden');
  document.getElementById('versionBStart').classList.add('hidden');
}
function versionBStart() {
  document.getElementById('versionBStart').classList.remove('hidden');
  document.getElementById('versionAStart').classList.add('hidden');
}

// ===============
// Account version
// ===============

//Show/hide sections in page
function versionAAccount() {
  document.getElementById('versionA').classList.remove('hidden');
  document.getElementById('versionB').classList.add('hidden');
}
function versionBAccount() {
  document.getElementById('versionB').classList.remove('hidden');
  document.getElementById('versionA').classList.add('hidden');
}

// ===============
// Address version
// ===============

//Show/hide sections in page
function versionAddressLookup() {
  document.getElementById('versionAddressLookup').classList.remove('hidden');
  document.getElementById('versionAddressManual').classList.add('hidden');
  document.getElementById('postcodeButtons').classList.add('hidden');
}
function versionAddressManual() {
  document.getElementById('versionAddressManual').classList.remove('hidden');
  document.getElementById('versionAddressLookup').classList.add('hidden');
  document.getElementById('postcodeButtons').classList.add('hidden');
  document.getElementById('postcodeInput').classList.add('hidden');
  localStorage.removeItem('hcpv07PatientAddressLine1');
  localStorage.removeItem('hcpv07PatientAddressLine2');
  localStorage.removeItem('hcpv07PatientAddressTown');
  localStorage.removeItem('hcpv07PatientPostcode');
}
function versionAddressSearch() {
  document.getElementById('versionAddressManual').classList.add('hidden');
  document.getElementById('versionAddressLookup').classList.add('hidden');
  document.getElementById('postcodeButtons').classList.remove('hidden');
  document.getElementById('postcodeInput').classList.remove('hidden');
}
function cookiepreferencessaved() {
  document.getElementById('cookies-preferences-banner').classList.remove('hidden');
}

// =======================
// SR1 Form - Save details
// =======================

// Patient Details

// v01
function hcpv01SavePatientDetails(event) {
  event.preventDefault();
  console.log('Save patient details');
  let PatientFullName = document.getElementById('PatientFullName');
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientPostcode = document.getElementById('patientPostcode');
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  let niNo = document.getElementById('niNo');
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  localStorage.setItem('hcpv01PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv01PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv01PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv01PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv01PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv01DobDay', dobDay.value);
  localStorage.setItem('hcpv01DobMonth', dobMonth.value);
  localStorage.setItem('hcpv01DobYear', dobYear.value);
  localStorage.setItem('hcpv01NiNo', niNo.value);
  localStorage.setItem('hcpv01DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv01DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv01DateofSpecialRulesYear', dateofSpecialRulesYear.value);
  // change button text
  let savePatientDetailsBtn = document.getElementById('savePatientDetailsBtn');
  savePatientDetailsBtn.innerHTML = "Draft saved";
}
// v02
function hcpv02SavePatientDetails(event) {
  event.preventDefault();
  console.log('Save patient details');
  let PatientFullName = document.getElementById('PatientFullName');
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientPostcode = document.getElementById('patientPostcode');
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  let niNo = document.getElementById('niNo');
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  localStorage.setItem('hcpv02PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv02PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv02PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv02PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv02PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv02DobDay', dobDay.value);
  localStorage.setItem('hcpv02DobMonth', dobMonth.value);
  localStorage.setItem('hcpv02DobYear', dobYear.value);
  localStorage.setItem('hcpv02NiNo', niNo.value);
  localStorage.setItem('hcpv02DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv02DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv02DateofSpecialRulesYear', dateofSpecialRulesYear.value);
  // change button text
  let savePatientDetailsBtn = document.getElementById('savePatientDetailsBtn');
  savePatientDetailsBtn.innerHTML = "Draft saved";
}
// v03
function hcpv03SavePatientDetails(event) {
  event.preventDefault();
  console.log('Save patient details');
  let PatientFullName = document.getElementById('PatientFullName');
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientPostcode = document.getElementById('patientPostcode');
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  let niNo = document.getElementById('niNo');
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  localStorage.setItem('hcpv03PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv03PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv03PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv03PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv03PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv03DobDay', dobDay.value);
  localStorage.setItem('hcpv03DobMonth', dobMonth.value);
  localStorage.setItem('hcpv03DobYear', dobYear.value);
  localStorage.setItem('hcpv03NiNo', niNo.value);
  localStorage.setItem('hcpv03DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv03DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv03DateofSpecialRulesYear', dateofSpecialRulesYear.value);
  // change button text
  let savePatientDetailsBtn = document.getElementById('savePatientDetailsBtn');
  savePatientDetailsBtn.innerHTML = "Draft saved";
}
// v04
function hcpv04SavePatientDetails(event) {
  event.preventDefault();
  console.log('Save patient details');
  let PatientFullName = document.getElementById('PatientFullName');
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientPostcode = document.getElementById('patientPostcode');
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  let niNo = document.getElementById('niNo');
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  localStorage.setItem('hcpv04PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv04PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv04PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv04PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv04PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv04DobDay', dobDay.value);
  localStorage.setItem('hcpv04DobMonth', dobMonth.value);
  localStorage.setItem('hcpv04DobYear', dobYear.value);
  localStorage.setItem('hcpv04NiNo', niNo.value);
  localStorage.setItem('hcpv04DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv04DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv04DateofSpecialRulesYear', dateofSpecialRulesYear.value);
}
// v05
function hcpv05SavePatientDetails(event) {
  event.preventDefault();
  console.log('Save patient details');
  let PatientFullName = document.getElementById('PatientFullName');
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientPostcode = document.getElementById('patientPostcode');
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  let niNo = document.getElementById('niNo');
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  localStorage.setItem('hcpv05PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv05PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv05PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv05PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv05PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv05DobDay', dobDay.value);
  localStorage.setItem('hcpv05DobMonth', dobMonth.value);
  localStorage.setItem('hcpv05DobYear', dobYear.value);
  localStorage.setItem('hcpv05NiNo', niNo.value);
  localStorage.setItem('hcpv05DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv05DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv05DateofSpecialRulesYear', dateofSpecialRulesYear.value);
}
// v06
function hcpv06SavePatientDetails(event) {
  event.preventDefault();
  console.log('Save patient details');
  let PatientFullName = document.getElementById('PatientFullName');
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientPostcode = document.getElementById('patientPostcode');
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  let niNo = document.getElementById('niNo');
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  localStorage.setItem('hcpv06PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv06PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv06PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv06PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv06PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv06DobDay', dobDay.value);
  localStorage.setItem('hcpv06DobMonth', dobMonth.value);
  localStorage.setItem('hcpv06DobYear', dobYear.value);
  localStorage.setItem('hcpv06NiNo', niNo.value);
  localStorage.setItem('hcpv06DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv06DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv06DateofSpecialRulesYear', dateofSpecialRulesYear.value);
}
// v07
function hcpv07SavePatientDetails(event) {
  event.preventDefault();
  console.log('Save patient details');
  let PatientFullName = document.getElementById('PatientFullName');
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientPostcode = document.getElementById('patientPostcode');
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  let niNo = document.getElementById('niNo');
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  localStorage.setItem('hcpv07PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv07PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv07PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv07PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv07PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv07DobDay', dobDay.value);
  localStorage.setItem('hcpv07DobMonth', dobMonth.value);
  localStorage.setItem('hcpv07DobYear', dobYear.value);
  localStorage.setItem('hcpv07NiNo', niNo.value);
  localStorage.setItem('hcpv07DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv07DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv07DateofSpecialRulesYear', dateofSpecialRulesYear.value);
}
// v08
function hcpv08SavePatientDetails(event) {
  event.preventDefault();
  console.log('Save patient details');
  let PatientFullName = document.getElementById('PatientFullName');
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientPostcode = document.getElementById('patientPostcode');
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  let niNo = document.getElementById('niNo');
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  localStorage.setItem('hcpv08PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv08PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv08PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv08PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv08PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv08DobDay', dobDay.value);
  localStorage.setItem('hcpv08DobMonth', dobMonth.value);
  localStorage.setItem('hcpv08DobYear', dobYear.value);
  localStorage.setItem('hcpv08NiNo', niNo.value);
  localStorage.setItem('hcpv08DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv08DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv08DateofSpecialRulesYear', dateofSpecialRulesYear.value);
}
// v09
function hcpv09SavePatientDetails(event) {
  event.preventDefault();
  console.log('Save patient details');
  let PatientFullName = document.getElementById('PatientFullName');
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientPostcode = document.getElementById('patientPostcode');
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  let niNo = document.getElementById('niNo');
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  localStorage.setItem('hcpv09PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv09PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv09PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv09PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv09PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv09DobDay', dobDay.value);
  localStorage.setItem('hcpv09DobMonth', dobMonth.value);
  localStorage.setItem('hcpv09DobYear', dobYear.value);
  localStorage.setItem('hcpv09NiNo', niNo.value);
  localStorage.setItem('hcpv09DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv09DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv09DateofSpecialRulesYear', dateofSpecialRulesYear.value);
}
// mvp01
function hcpmvp01SavePatientDetails(event) {
  event.preventDefault();
  console.log('Save patient details');
  let PatientFirstName = document.getElementById('PatientFirstName');
  let PatientLastName = document.getElementById('PatientLastName');
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientaddresscounty = document.getElementById('patientaddresscounty');
  let patientPostcode = document.getElementById('patientPostcode');
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  let niNo = document.getElementById('niNo');
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  localStorage.setItem('hcpmvp01PatientFirstName', PatientFirstName.value);
  localStorage.setItem('hcpmvp01PatientLastName', PatientLastName.value);
  localStorage.setItem('hcpmvp01PatientMiddleName', PatientMiddleName.value);
  localStorage.setItem('hcpmvp01PatientLastName', PatientLastName.value);
  localStorage.setItem('hcpmvp01PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpmvp01PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpmvp01PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpmvp01PatientAddressCounty', patientaddresscounty.value);
  localStorage.setItem('hcpmvp01PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpmvp01DobDay', dobDay.value);
  localStorage.setItem('hcpmvp01DobMonth', dobMonth.value);
  localStorage.setItem('hcpmvp01DobYear', dobYear.value);
  localStorage.setItem('hcpmvp01NiNo', niNo.value);
  localStorage.setItem('hcpmvp01DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpmvp01DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpmvp01DateofSpecialRulesYear', dateofSpecialRulesYear.value);
}
// mvp02
function hcpmvp02SavePatientDetails(event) {
  event.preventDefault();
  console.log('Save patient details');
  let PatientFirstName = document.getElementById('PatientFirstName');
  let PatientLastName = document.getElementById('PatientLastName');
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientaddresscounty = document.getElementById('patientaddresscounty');
  let patientPostcode = document.getElementById('patientPostcode');
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  let niNo = document.getElementById('niNo');
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  localStorage.setItem('hcpmvp02PatientFirstName', PatientFirstName.value);
  localStorage.setItem('hcpmvp02PatientLastName', PatientLastName.value);
  localStorage.setItem('hcpmvp02PatientMiddleName', PatientMiddleName.value);
  localStorage.setItem('hcpmvp02PatientLastName', PatientLastName.value);
  localStorage.setItem('hcpmvp02PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpmvp02PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpmvp02PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpmvp02PatientAddressCounty', patientaddresscounty.value);
  localStorage.setItem('hcpmvp02PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpmvp02DobDay', dobDay.value);
  localStorage.setItem('hcpmvp02DobMonth', dobMonth.value);
  localStorage.setItem('hcpmvp02DobYear', dobYear.value);
  localStorage.setItem('hcpmvp02NiNo', niNo.value);
  localStorage.setItem('hcpmvp02DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpmvp02DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpmvp02DateofSpecialRulesYear', dateofSpecialRulesYear.value);
}
// mvp03
function hcpmvp03SavePatientDetails(event) {
  event.preventDefault();
  console.log('Save patient details');
  let PatientFirstName = document.getElementById('PatientFirstName');
  let PatientLastName = document.getElementById('PatientLastName');
  let PatientNameDefined = document.getElementById('PatientNameDefined');
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientaddresscounty = document.getElementById('patientaddresscounty');
  let patientPostcode = document.getElementById('patientPostcode');
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  let niNo = document.getElementById('niNo');
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  localStorage.setItem('hcpmvp03PatientFirstName', PatientFirstName.value);
  localStorage.setItem('hcpmvp03PatientLastName', PatientLastName.value);
  localStorage.setItem('hcpmvp03PatientNameDefined', PatientNameDefined.value);
  localStorage.setItem('hcpmvp03PatientLastName', PatientLastName.value);
  localStorage.setItem('hcpmvp03PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpmvp03PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpmvp03PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpmvp03PatientAddressCounty', patientaddresscounty.value);
  localStorage.setItem('hcpmvp03PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpmvp03DobDay', dobDay.value);
  localStorage.setItem('hcpmvp03DobMonth', dobMonth.value);
  localStorage.setItem('hcpmvp03DobYear', dobYear.value);
  localStorage.setItem('hcpmvp03NiNo', niNo.value);
  localStorage.setItem('hcpmvp03DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpmvp03DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpmvp03DateofSpecialRulesYear', dateofSpecialRulesYear.value);
}

// ========================
// SR1 Form - Save details
// ========================

// Aware of diagnosis
let currentValueOfDiagnosis = 0;
// v01
function hcpv01AwareOfDiagnosis(awareOfDiagnosis) {
  currentValueOfDiagnosis = awareOfDiagnosis.value;
}
// v02
function hcpv02AwareOfDiagnosis(awareOfDiagnosis) {
  currentValueOfDiagnosis = awareOfDiagnosis.value;
}
// v03
function hcpv03AwareOfDiagnosis(awareOfDiagnosis) {
  currentValueOfDiagnosis = awareOfDiagnosis.value;
}
// v04
function hcpv04AwareOfDiagnosis(awareOfDiagnosis) {
  localStorage.setItem('hcpv04AwareOfDiagnosis', awareOfDiagnosis);
}
// v05
function hcpv05AwareOfDiagnosis(awareOfDiagnosis) {
  currentValueOfDiagnosis = awareOfDiagnosis.value;
}
// v06
function hcpv06AwareOfDiagnosis(awareOfDiagnosis) {
  localStorage.setItem('hcpv06AwareOfDiagnosis', awareOfDiagnosis);
}
// v07
function hcpv07AwareOfDiagnosis(awareOfDiagnosis) {
  localStorage.setItem('hcpv07AwareOfDiagnosis', awareOfDiagnosis);
}
// v08
function hcpv08AwareOfDiagnosis(awareOfDiagnosis) {
  currentValueOfDiagnosis = awareOfDiagnosis.value;
}
// v09
function hcpv09AwareOfDiagnosis(awareOfDiagnosis) {
  currentValueOfDiagnosis = awareOfDiagnosis.value;
}
// mvp01
function hcpmvp01AwareOfDiagnosis(awareOfDiagnosis) {
  localStorage.setItem('hcpmvp01AwareOfDiagnosis', awareOfDiagnosis);
}
// mvp02
function hcpmvp02AwareOfDiagnosis(awareOfDiagnosis) {
  localStorage.setItem('hcpmvp02AwareOfDiagnosis', awareOfDiagnosis);
}
// mvp03
function hcpmvp03AwareOfDiagnosis(awareOfDiagnosis) {
  localStorage.setItem('hcpmvp03AwareOfDiagnosis', awareOfDiagnosis);
}

// Aware of prognosis
let currentValueOfPrognosis = 0;
// v01
function hcpv01AwareOfPrognosis(awareOfPrognosis) { currentValueOfPrognosis = awareOfPrognosis.value; }
// v02
function hcpv02AwareOfPrognosis(awareOfPrognosis) { currentValueOfPrognosis = awareOfPrognosis.value; }
// v03
function hcpv03AwareOfPrognosis(awareOfPrognosis) { currentValueOfPrognosis = awareOfPrognosis.value; }
// v04
function hcpv04AwareOfPrognosis(awareOfPrognosis) {
  localStorage.setItem('hcpv04AwareOfPrognosis', awareOfPrognosis);
}
// v05
function hcpv05AwareOfPrognosis(awareOfPrognosis) { currentValueOfPrognosis = awareOfPrognosis.value; }
// v06
function hcpv06AwareOfPrognosis(awareOfPrognosis) {
  localStorage.setItem('hcpv06AwareOfPrognosis', awareOfPrognosis);
}
// v07
function hcpv07AwareOfPrognosis(awareOfPrognosis) {
  localStorage.setItem('hcpv07AwareOfPrognosis', awareOfPrognosis);
}
// v08
function hcpv08AwareOfPrognosis(awareOfPrognosis) { currentValueOfPrognosis = awareOfPrognosis.value; }
// v09
function hcpv09AwareOfPrognosis(awareOfPrognosis) { currentValueOfPrognosis = awareOfPrognosis.value; }
// mvp01
function hcpmvp01AwareOfPrognosis(awareOfPrognosis) {
  localStorage.setItem('hcpmvp01AwareOfPrognosis', awareOfPrognosis);
}
// mvp02
function hcpmvp02AwareOfPrognosis(awareOfPrognosis) {
  localStorage.setItem('hcpmvp02AwareOfPrognosis', awareOfPrognosis);
}
// mvp03
function hcpmvp03AwareOfPrognosis(awareOfPrognosis) {
  localStorage.setItem('hcpmvp03AwareOfPrognosis', awareOfPrognosis);
}

//Diagnosis

// v01
function hcpv01SaveDiagnosisDetails(event) {
  event.preventDefault();
  console.log('Save Diagnosis details');
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpv01WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv01DodDay', dodDay.value);
  localStorage.setItem('hcpv01DodMonth', dodMonth.value);
  localStorage.setItem('hcpv01DodYear', dodYear.value);
  localStorage.setItem('hcpv01OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv01AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv01AwareOfPrognosis', currentValueOfPrognosis);
  // change button text
  let saveDiagnosisDetailsBtn = document.getElementById('saveDiagnosisDetailsBtn');
  saveDiagnosisDetailsBtn.innerHTML = "Draft saved";
}
// v02
function hcpv02SaveDiagnosisDetails(event) {
  event.preventDefault();
  console.log('Save Diagnosis details');
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpv02WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv02DodDay', dodDay.value);
  localStorage.setItem('hcpv03DodDay', dodMonth.value);
  localStorage.setItem('hcpv02DodYear', dodYear.value);
  localStorage.setItem('hcpv02OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv02AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv02AwareOfPrognosis', currentValueOfPrognosis);
  // change button text
  let saveDiagnosisDetailsBtn = document.getElementById('saveDiagnosisDetailsBtn');
  saveDiagnosisDetailsBtn.innerHTML = "Draft saved";
}
// v03
function hcpv03SaveDiagnosisDetails(event) {
  event.preventDefault();
  console.log('Save Diagnosis details');
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpv03WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv03DodDay', dodDay.value);
  localStorage.setItem('hcpv03DodMonth', dodMonth.value);
  localStorage.setItem('hcpv03DodYear', dodYear.value);
  localStorage.setItem('hcpv03OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv03AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv03AwareOfPrognosis', currentValueOfPrognosis);
  // change button text
  let saveDiagnosisDetailsBtn = document.getElementById('saveDiagnosisDetailsBtn');
  saveDiagnosisDetailsBtn.innerHTML = "Draft saved";
}
// v04
function hcpv04SaveDiagnosisDetails(event) {
  event.preventDefault();
  console.log('Save Diagnosis details');
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpv04WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv04DodDay', dodDay.value);
  localStorage.setItem('hcpv04DodMonth', dodMonth.value);
  localStorage.setItem('hcpv04DodYear', dodYear.value);
  localStorage.setItem('hcpv04OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv04AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv04AwareOfPrognosis', currentValueOfPrognosis);
  // change button text
  let saveDiagnosisDetailsBtn = document.getElementById('saveDiagnosisDetailsBtn');
  saveDiagnosisDetailsBtn.innerHTML = "Draft saved";
}
// v05
function hcpv05SaveDiagnosisDetails(event) {
  event.preventDefault();
  console.log('Save Diagnosis details');
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpv05WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv05DodDay', dodDay.value);
  localStorage.setItem('hcpv05DodMonth', dodMonth.value);
  localStorage.setItem('hcpv05DodYear', dodYear.value);
  localStorage.setItem('hcpv05OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv05AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv05AwareOfPrognosis', currentValueOfPrognosis);
  // change button text
  let saveDiagnosisDetailsBtn = document.getElementById('saveDiagnosisDetailsBtn');
  saveDiagnosisDetailsBtn.innerHTML = "Draft saved";
}
// v06
function hcpv06SaveDiagnosisDetails(event) {
  event.preventDefault();
  console.log('Save Diagnosis details');
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpv06WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv06DodDay', dodDay.value);
  localStorage.setItem('hcpv06DodMonth', dodMonth.value);
  localStorage.setItem('hcpv06DodYear', dodYear.value);
  localStorage.setItem('hcpv06OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv06AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv06AwareOfPrognosis', currentValueOfPrognosis);
  // change button text
  let saveDiagnosisDetailsBtn = document.getElementById('saveDiagnosisDetailsBtn');
  saveDiagnosisDetailsBtn.innerHTML = "Draft saved";
}
// v07
function hcpv07SaveDiagnosisDetails(event) {
  event.preventDefault();
  console.log('Save Diagnosis details');
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpv07WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv07DodDay', dodDay.value);
  localStorage.setItem('hcpv07DodMonth', dodMonth.value);
  localStorage.setItem('hcpv07DodYear', dodYear.value);
  localStorage.setItem('hcpv07OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv07AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv07AwareOfPrognosis', currentValueOfPrognosis);
  // change button text
  let saveDiagnosisDetailsBtn = document.getElementById('saveDiagnosisDetailsBtn');
  saveDiagnosisDetailsBtn.innerHTML = "Draft saved";
}
// v08
function hcpv08SaveDiagnosisDetails(event) {
  event.preventDefault();
  console.log('Save Diagnosis details');
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpv08WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv08DodDay', dodDay.value);
  localStorage.setItem('hcpv08DodMonth', dodMonth.value);
  localStorage.setItem('hcpv08DodYear', dodYear.value);
  localStorage.setItem('hcpv08OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv08AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv08AwareOfPrognosis', currentValueOfPrognosis);
  // change button text
  let saveDiagnosisDetailsBtn = document.getElementById('saveDiagnosisDetailsBtn');
  saveDiagnosisDetailsBtn.innerHTML = "Draft saved";
}
// v09
function hcpv09SaveDiagnosisDetails(event) {
  event.preventDefault();
  console.log('Save Diagnosis details');
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpv09WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv09DodDay', dodDay.value);
  localStorage.setItem('hcpv09DodMonth', dodMonth.value);
  localStorage.setItem('hcpv09DodYear', dodYear.value);
  localStorage.setItem('hcpv09OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv09AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv09AwareOfPrognosis', currentValueOfPrognosis);
  // change button text
  let saveDiagnosisDetailsBtn = document.getElementById('saveDiagnosisDetailsBtn');
  saveDiagnosisDetailsBtn.innerHTML = "Draft saved";
}
// mvp01
function hcpmvp01SaveDiagnosisDetails(event) {
  event.preventDefault();
  console.log('Save Diagnosis details');
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpmvp01WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpmvp01DodDay', dodDay.value);
  localStorage.setItem('hcpmvp01DodMonth', dodMonth.value);
  localStorage.setItem('hcpmvp01DodYear', dodYear.value);
  localStorage.setItem('hcpmvp01OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpmvp01AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpmvp01AwareOfPrognosis', currentValueOfPrognosis);
  // change button text
  let saveDiagnosisDetailsBtn = document.getElementById('saveDiagnosisDetailsBtn');
  saveDiagnosisDetailsBtn.innerHTML = "Draft saved";
}
// mvp02
function hcpmvp02SaveDiagnosisDetails(event) {
  event.preventDefault();
  console.log('Save Diagnosis details');
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpmvp02WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpmvp02DodDay', dodDay.value);
  localStorage.setItem('hcpmvp02DodMonth', dodMonth.value);
  localStorage.setItem('hcpmvp02DodYear', dodYear.value);
  localStorage.setItem('hcpmvp02OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpmvp02AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpmvp02AwareOfPrognosis', currentValueOfPrognosis);
  // change button text
  let saveDiagnosisDetailsBtn = document.getElementById('saveDiagnosisDetailsBtn');
  saveDiagnosisDetailsBtn.innerHTML = "Draft saved";
}
function hcpmvp03SaveDiagnosisDetails(event) {
  event.preventDefault();
  console.log('Save Diagnosis details');
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpmvp03WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpmvp03DodDay', dodDay.value);
  localStorage.setItem('hcpmvp03DodMonth', dodMonth.value);
  localStorage.setItem('hcpmvp03DodYear', dodYear.value);
  localStorage.setItem('hcpmvp03OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpmvp03AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpmvp03AwareOfPrognosis', currentValueOfPrognosis);
  // change button text
  let saveDiagnosisDetailsBtn = document.getElementById('saveDiagnosisDetailsBtn');
  saveDiagnosisDetailsBtn.innerHTML = "Draft saved";
}
function resetSaveDiagnosisDetailsBtn() {
  let saveDiagnosisDetailsBtn = document.getElementById('saveDiagnosisDetailsBtn');
  saveDiagnosisDetailsBtn.innerHTML = "Save as draft";
}

// Give the details of the clinical features that indicate a severe progressive condition.

// v01
function hcpv01SaveClinicalFeatures(event) {
  event.preventDefault();
  console.log('Save clinical features');
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpv01DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  // change button text
  let saveClinicalFeaturesDetailsBtn = document.getElementById('saveClinicalFeaturesDetailsBtn');
  saveClinicalFeaturesDetailsBtn.innerHTML = "Draft saved";
}
// v02
function hcpv02SaveClinicalFeatures(event) {
  event.preventDefault();
  console.log('Save clinical features');
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpv02DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  // change button text
  let saveClinicalFeaturesDetailsBtn = document.getElementById('saveClinicalFeaturesDetailsBtn');
  saveClinicalFeaturesDetailsBtn.innerHTML = "Draft saved";
}
// v03
function hcpv03SaveClinicalFeatures(event) {
  event.preventDefault();
  console.log('Save clinical features');
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpv03DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  // change button text
  let saveClinicalFeaturesDetailsBtn = document.getElementById('saveClinicalFeaturesDetailsBtn');
  saveClinicalFeaturesDetailsBtn.innerHTML = "Draft saved";
}
// v04
function hcpv04SaveClinicalFeatures(event) {
  event.preventDefault();
  console.log('Save clinical features');
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpv04DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  // change button text
  let saveClinicalFeaturesDetailsBtn = document.getElementById('saveClinicalFeaturesDetailsBtn');
  saveClinicalFeaturesDetailsBtn.innerHTML = "Draft saved";
}
// v05
function hcpv05SaveClinicalFeatures(event) {
  event.preventDefault();
  console.log('Save clinical features');
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpv05DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  // change button text
  let saveClinicalFeaturesDetailsBtn = document.getElementById('saveClinicalFeaturesDetailsBtn');
  saveClinicalFeaturesDetailsBtn.innerHTML = "Draft saved";
}
// v06
function hcpv06SaveClinicalFeatures(event) {
  event.preventDefault();
  console.log('Save clinical features');
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpv06DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  // change button text
  let saveClinicalFeaturesDetailsBtn = document.getElementById('saveClinicalFeaturesDetailsBtn');
  saveClinicalFeaturesDetailsBtn.innerHTML = "Draft saved";
}
// v07
function hcpv07SaveClinicalFeatures(event) {
  event.preventDefault();
  console.log('Save clinical features');
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpv07DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  // change button text
  let saveClinicalFeaturesDetailsBtn = document.getElementById('saveClinicalFeaturesDetailsBtn');
  saveClinicalFeaturesDetailsBtn.innerHTML = "Draft saved";
}
// v08
function hcpv08SaveClinicalFeatures(event) {
  event.preventDefault();
  console.log('Save clinical features');
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpv08DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  // change button text
  let saveClinicalFeaturesDetailsBtn = document.getElementById('saveClinicalFeaturesDetailsBtn');
  saveClinicalFeaturesDetailsBtn.innerHTML = "Draft saved";
}
// v09
function hcpv09SaveClinicalFeatures(event) {
  event.preventDefault();
  console.log('Save clinical features');
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpv09DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  // change button text
  let saveClinicalFeaturesDetailsBtn = document.getElementById('saveClinicalFeaturesDetailsBtn');
  saveClinicalFeaturesDetailsBtn.innerHTML = "Draft saved";
}
// mvp01
function hcpmvp01SaveClinicalFeatures(event) {
  event.preventDefault();
  console.log('Save clinical features');
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpmvp01DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  // change button text
  let saveClinicalFeaturesDetailsBtn = document.getElementById('saveClinicalFeaturesDetailsBtn');
  saveClinicalFeaturesDetailsBtn.innerHTML = "Draft saved";
}
// mvp02
function hcpmvp02SaveClinicalFeatures(event) {
  event.preventDefault();
  console.log('Save clinical features');
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpmvp02DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  // change button text
  let saveClinicalFeaturesDetailsBtn = document.getElementById('saveClinicalFeaturesDetailsBtn');
  saveClinicalFeaturesDetailsBtn.innerHTML = "Draft saved";
}
// mvp03
function hcpmvp03SaveClinicalFeatures(event) {
  event.preventDefault();
  console.log('Save clinical features');
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpmvp03DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  // change button text
  let saveClinicalFeaturesDetailsBtn = document.getElementById('saveClinicalFeaturesDetailsBtn');
  saveClinicalFeaturesDetailsBtn.innerHTML = "Draft saved";
}
// Reset Clinical features
function resetSaveClinicalFeaturesDetailsBtn() {
  let saveClinicalFeaturesDetailsBtn = document.getElementById('saveClinicalFeaturesDetailsBtn');
  saveClinicalFeaturesDetailsBtn.innerHTML = "Save as draft";
}

// Treatment and the response

// v01
function hcpv01SaveTreatment(event) {
  event.preventDefault();
  console.log('Save Treatmemt');
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpv01Treatment', treatment.value);
  // change button text
  let saveTreatmentDetailsBtn = document.getElementById('saveTreatmentDetailsBtn');
  saveTreatmentDetailsBtn.innerHTML = "Draft saved";
}
// v02
function hcpv02SaveTreatment(event) {
  event.preventDefault();
  console.log('Save Treatmemt');
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpv02Treatment', treatment.value);
  // change button text
  let saveTreatmentDetailsBtn = document.getElementById('saveTreatmentDetailsBtn');
  saveTreatmentDetailsBtn.innerHTML = "Draft saved";
}
// v03
function hcpv03SaveTreatment(event) {
  event.preventDefault();
  console.log('Save Treatmemt');
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpv03Treatment', treatment.value);
  // change button text
  let saveTreatmentDetailsBtn = document.getElementById('saveTreatmentDetailsBtn');
  saveTreatmentDetailsBtn.innerHTML = "Draft saved";
}
// v04
function hcpv04SaveTreatment(event) {
  event.preventDefault();
  console.log('Save Treatmemt');
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpv04Treatment', treatment.value);
  // change button text
  let saveTreatmentDetailsBtn = document.getElementById('saveTreatmentDetailsBtn');
  saveTreatmentDetailsBtn.innerHTML = "Draft saved";
}
// v05
function hcpv05SaveTreatment(event) {
  event.preventDefault();
  console.log('Save Treatmemt');
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpv05Treatment', treatment.value);
  // change button text
  let saveTreatmentDetailsBtn = document.getElementById('saveTreatmentDetailsBtn');
  saveTreatmentDetailsBtn.innerHTML = "Draft saved";
}
// v06
function hcpv06SaveTreatment(event) {
  event.preventDefault();
  console.log('Save Treatmemt');
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpv06Treatment', treatment.value);
  // change button text
  let saveTreatmentDetailsBtn = document.getElementById('saveTreatmentDetailsBtn');
  saveTreatmentDetailsBtn.innerHTML = "Draft saved";
}
// v07
function hcpv07SaveTreatment(event) {
  event.preventDefault();
  console.log('Save Treatmemt');
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpv07Treatment', treatment.value);
  // change button text
  let saveTreatmentDetailsBtn = document.getElementById('saveTreatmentDetailsBtn');
  saveTreatmentDetailsBtn.innerHTML = "Draft saved";
}
// v08
function hcpv08SaveTreatment(event) {
  event.preventDefault();
  console.log('Save Treatmemt');
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpv08Treatment', treatment.value);
  // change button text
  let saveTreatmentDetailsBtn = document.getElementById('saveTreatmentDetailsBtn');
  saveTreatmentDetailsBtn.innerHTML = "Draft saved";
}
// v09
function hcpv09SaveTreatment(event) {
  event.preventDefault();
  console.log('Save Treatmemt');
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpv09Treatment', treatment.value);
  // change button text
  let saveTreatmentDetailsBtn = document.getElementById('saveTreatmentDetailsBtn');
  saveTreatmentDetailsBtn.innerHTML = "Draft saved";
}
// mvp01
function hcpmvp01SaveTreatment(event) {
  event.preventDefault();
  console.log('Save Treatmemt');
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpmvp01Treatment', treatment.value);
  // change button text
  let saveTreatmentDetailsBtn = document.getElementById('saveTreatmentDetailsBtn');
  saveTreatmentDetailsBtn.innerHTML = "Draft saved";
}
// mvp02
function hcpmvp02SaveTreatment(event) {
  event.preventDefault();
  console.log('Save Treatmemt');
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpmvp02Treatment', treatment.value);
  // change button text
  let saveTreatmentDetailsBtn = document.getElementById('saveTreatmentDetailsBtn');
  saveTreatmentDetailsBtn.innerHTML = "Draft saved";
}
// mvp03
function hcpmvp03SaveTreatment(event) {
  event.preventDefault();
  console.log('Save Treatmemt');
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpmvp03Treatment', treatment.value);
  // change button text
  let saveTreatmentDetailsBtn = document.getElementById('saveTreatmentDetailsBtn');
  saveTreatmentDetailsBtn.innerHTML = "Draft saved";
}
// Reset treatment
function resetTreatmentDetailsBtn() {
  let saveTreatmentDetailsBtn = document.getElementById('saveTreatmentDetailsBtn');
  saveTreatmentDetailsBtn.innerHTML = "Save as draft";
}

// ==========================================
// Update profile details from SR1 Form page
// ==========================================

function updateProfileDetailsFromSendSR1FormPage() {
  localStorage.setItem('hcpv01UpdateProfileDetailsFromSendSR1FormPage', true);
  localStorage.setItem('hcpv02UpdateProfileDetailsFromSendSR1FormPage', true);
  localStorage.setItem('hcpv03UpdateProfileDetailsFromSendSR1FormPage', true);
  localStorage.setItem('hcpv04UpdateProfileDetailsFromSendSR1FormPage', true);
  localStorage.setItem('hcpv05UpdateProfileDetailsFromSendSR1FormPage', true);
  localStorage.setItem('hcpv06UpdateProfileDetailsFromSendSR1FormPage', true);
  localStorage.setItem('hcpv07UpdateProfileDetailsFromSendSR1FormPage', true);
  localStorage.setItem('hcpv08UpdateProfileDetailsFromSendSR1FormPage', true);
  localStorage.setItem('hcpv09UpdateProfileDetailsFromSendSR1FormPage', true);
  localStorage.setItem('hcpmvp01UpdateProfileDetailsFromSendSR1FormPage', true);
  localStorage.setItem('hcpmvp02UpdateProfileDetailsFromSendSR1FormPage', true);
  localStorage.setItem('hcpmvp03UpdateProfileDetailsFromSendSR1FormPage', true);
}

// ===============================
// Update tags status - Task list
// ===============================

// Get sr1 data

// v04
function getSR1Datav04() {
  const fullName = localStorage.getItem('hcpv04PatientFullName');
  const dobDay = localStorage.getItem('hcpv04DobDay');
  const dobMonth = localStorage.getItem('hcpv04DobMonth');
  const dobYear = localStorage.getItem('hcpv04DobYear');
  const nino = localStorage.getItem('hcpv04NiNo');
  const dateofSpecialRulesDay = localStorage.getItem('hcpv04DateofSpecialRulesDay');
  const dateofSpecialRulesMonth = localStorage.getItem('hcpv04DateofSpecialRulesMonth');
  const dateofSpecialRulesYear = localStorage.getItem('hcpv04DateofSpecialRulesYear');
  const diagnosis = localStorage.getItem('hcpv04WhatIsTheDiagnosis');
  const dodDay = localStorage.getItem('hcpv04DodDay');
  const dodMonth = localStorage.getItem('hcpv04DodMonth');
  const dodYear = localStorage.getItem('hcpv04DodYear');
  const otherRelevantDiagnosis = localStorage.getItem('hcpv04OtherRelevantDiagnosis');
  const awareOfDiagnosis = localStorage.getItem('hcpv04AwareOfDiagnosis');
  const awareOfPrognosis = localStorage.getItem('hcpv04AwareOfPrognosis');
  const detailsOfClinicalFeatures = localStorage.getItem('hcpv04DetailsOfClinicalFeatures');
  const treatment = localStorage.getItem('hcpv04Treatment');
  const patientAddressLine1 = localStorage.getItem('hcpv04PatientAddressLine1');
  const patientAddressLine2 = localStorage.getItem('hcpv04PatientAddressLine2');
  const patientAddressTown = localStorage.getItem('hcpv04PatientAddressTown');
  const patientPostcode = localStorage.getItem('hcpv04PatientPostcode');
  return {
    fullName,
    dobDay,
    dobMonth,
    dobYear,
    nino,
    dateofSpecialRulesDay,
    dateofSpecialRulesMonth,
    dateofSpecialRulesYear,
    diagnosis,
    dodDay,
    dodMonth,
    dodYear,
    otherRelevantDiagnosis,
    awareOfDiagnosis,
    awareOfPrognosis,
    detailsOfClinicalFeatures,
    treatment,
    patientAddressLine1,
    patientAddressLine2,
    patientAddressTown,
    patientPostcode,
  };
}
// v06
function getSR1Datav06() {
  const fullName = localStorage.getItem('hcpv06PatientFullName');
  const dobDay = localStorage.getItem('hcpv06DobDay');
  const dobMonth = localStorage.getItem('hcpv06DobMonth');
  const dobYear = localStorage.getItem('hcpv06DobYear');
  const nino = localStorage.getItem('hcpv06NiNo');
  const dateofSpecialRulesDay = localStorage.getItem('hcpv06DateofSpecialRulesDay');
  const dateofSpecialRulesMonth = localStorage.getItem('hcpv06DateofSpecialRulesMonth');
  const dateofSpecialRulesYear = localStorage.getItem('hcpv06DateofSpecialRulesYear');
  const diagnosis = localStorage.getItem('hcpv06WhatIsTheDiagnosis');
  const dodDay = localStorage.getItem('hcpv06DodDay');
  const dodMonth = localStorage.getItem('hcpv06DodMonth');
  const dodYear = localStorage.getItem('hcpv06DodYear');
  const otherRelevantDiagnosis = localStorage.getItem('hcpv06OtherRelevantDiagnosis');
  const awareOfDiagnosis = localStorage.getItem('hcpv06AwareOfDiagnosis');
  const awareOfPrognosis = localStorage.getItem('hcpv06AwareOfPrognosis');
  const detailsOfClinicalFeatures = localStorage.getItem('hcpv06DetailsOfClinicalFeatures');
  const treatment = localStorage.getItem('hcpv06Treatment');
  const patientAddressLine1 = localStorage.getItem('hcpv06PatientAddressLine1');
  const patientAddressLine2 = localStorage.getItem('hcpv06PatientAddressLine2');
  const patientAddressTown = localStorage.getItem('hcpv06PatientAddressTown');
  const patientPostcode = localStorage.getItem('hcpv06PatientPostcode');
  return {
    fullName,
    dobDay,
    dobMonth,
    dobYear,
    nino,
    dateofSpecialRulesDay,
    dateofSpecialRulesMonth,
    dateofSpecialRulesYear,
    diagnosis,
    dodDay,
    dodMonth,
    dodYear,
    otherRelevantDiagnosis,
    awareOfDiagnosis,
    awareOfPrognosis,
    detailsOfClinicalFeatures,
    treatment,
    patientAddressLine1,
    patientAddressLine2,
    patientAddressTown,
    patientPostcode,
  };
}
// v07
function getSR1Datav07() {
  const fullName = localStorage.getItem('hcpv07PatientFullName');
  const dobDay = localStorage.getItem('hcpv07DobDay');
  const dobMonth = localStorage.getItem('hcpv07DobMonth');
  const dobYear = localStorage.getItem('hcpv07DobYear');
  const nino = localStorage.getItem('hcpv07NiNo');
  const dateofSpecialRulesDay = localStorage.getItem('hcpv07DateofSpecialRulesDay');
  const dateofSpecialRulesMonth = localStorage.getItem('hcpv07DateofSpecialRulesMonth');
  const dateofSpecialRulesYear = localStorage.getItem('hcpv07DateofSpecialRulesYear');
  const diagnosis = localStorage.getItem('hcpv07WhatIsTheDiagnosis');
  const dodDay = localStorage.getItem('hcpv07DodDay');
  const dodMonth = localStorage.getItem('hcpv07DodMonth');
  const dodYear = localStorage.getItem('hcpv07DodYear');
  const otherRelevantDiagnosis = localStorage.getItem('hcpv07OtherRelevantDiagnosis');
  const awareOfDiagnosis = localStorage.getItem('hcpv07AwareOfDiagnosis');
  const awareOfPrognosis = localStorage.getItem('hcpv07AwareOfPrognosis');
  const detailsOfClinicalFeatures = localStorage.getItem('hcpv07DetailsOfClinicalFeatures');
  const treatment = localStorage.getItem('hcpv07Treatment');
  const patientAddressLine1 = localStorage.getItem('hcpv07PatientAddressLine1');
  const patientAddressLine2 = localStorage.getItem('hcpv07PatientAddressLine2');
  const patientAddressTown = localStorage.getItem('hcpv07PatientAddressTown');
  const patientPostcode = localStorage.getItem('hcpv07PatientPostcode');
  return {
    fullName,
    dobDay,
    dobMonth,
    dobYear,
    nino,
    dateofSpecialRulesDay,
    dateofSpecialRulesMonth,
    dateofSpecialRulesYear,
    diagnosis,
    dodDay,
    dodMonth,
    dodYear,
    otherRelevantDiagnosis,
    awareOfDiagnosis,
    awareOfPrognosis,
    detailsOfClinicalFeatures,
    treatment,
    patientAddressLine1,
    patientAddressLine2,
    patientAddressTown,
    patientPostcode,
  };
}
// v09
function getSR1Datav09() {
  const fullName = localStorage.getItem('hcpv09PatientFullName');
  const dobDay = localStorage.getItem('hcpv09DobDay');
  const dobMonth = localStorage.getItem('hcpv09DobMonth');
  const dobYear = localStorage.getItem('hcpv09DobYear');
  const nino = localStorage.getItem('hcpv09NiNo');
  const dateofSpecialRulesDay = localStorage.getItem('hcpv09DateofSpecialRulesDay');
  const dateofSpecialRulesMonth = localStorage.getItem('hcpv09DateofSpecialRulesMonth');
  const dateofSpecialRulesYear = localStorage.getItem('hcpv09DateofSpecialRulesYear');
  const diagnosis = localStorage.getItem('hcpv09WhatIsTheDiagnosis');
  const dodDay = localStorage.getItem('hcpv09DodDay');
  const dodMonth = localStorage.getItem('hcpv09DodMonth');
  const dodYear = localStorage.getItem('hcpv09DodYear');
  const otherRelevantDiagnosis = localStorage.getItem('hcpv09OtherRelevantDiagnosis');
  const awareOfDiagnosis = localStorage.getItem('hcpv09AwareOfDiagnosis');
  const awareOfPrognosis = localStorage.getItem('hcpv09AwareOfPrognosis');
  const detailsOfClinicalFeatures = localStorage.getItem('hcpv09DetailsOfClinicalFeatures');
  const treatment = localStorage.getItem('hcpv09Treatment');
  const patientAddressLine1 = localStorage.getItem('hcpv09PatientAddressLine1');
  const patientAddressLine2 = localStorage.getItem('hcpv09PatientAddressLine2');
  const patientAddressTown = localStorage.getItem('hcpv09PatientAddressTown');
  const patientPostcode = localStorage.getItem('hcpv09PatientPostcode');
  return {
    fullName,
    dobDay,
    dobMonth,
    dobYear,
    nino,
    dateofSpecialRulesDay,
    dateofSpecialRulesMonth,
    dateofSpecialRulesYear,
    diagnosis,
    dodDay,
    dodMonth,
    dodYear,
    otherRelevantDiagnosis,
    awareOfDiagnosis,
    awareOfPrognosis,
    detailsOfClinicalFeatures,
    treatment,
    patientAddressLine1,
    patientAddressLine2,
    patientAddressTown,
    patientPostcode,
  };
}
//mv01
function getSR1Datamvp01() {
  const firstName = localStorage.getItem('hcpmvp01PatientFirstName');
  const lastName = localStorage.getItem('hcpmvp01PatientLastName');
  const dobDay = localStorage.getItem('hcpmvp01DobDay');
  const dobMonth = localStorage.getItem('hcpmvp01DobMonth');
  const dobYear = localStorage.getItem('hcpmvp01DobYear');
  const nino = localStorage.getItem('hcpmvp01NiNo');
  const dateofSpecialRulesDay = localStorage.getItem('hcpmvp01DateofSpecialRulesDay');
  const dateofSpecialRulesMonth = localStorage.getItem('hcpmvp01DateofSpecialRulesMonth');
  const dateofSpecialRulesYear = localStorage.getItem('hcpmvp01DateofSpecialRulesYear');
  const diagnosis = localStorage.getItem('hcpmvp01WhatIsTheDiagnosis');
  const dodDay = localStorage.getItem('hcpmvp01DodDay');
  const dodMonth = localStorage.getItem('hcpmvp01DodMonth');
  const dodYear = localStorage.getItem('hcpmvp01DodYear');
  const otherRelevantDiagnosis = localStorage.getItem('hcpmvp01OtherRelevantDiagnosis');
  const awareOfDiagnosis = localStorage.getItem('hcpmvp01AwareOfDiagnosis');
  const awareOfPrognosis = localStorage.getItem('hcpmvp01AwareOfPrognosis');
  const detailsOfClinicalFeatures = localStorage.getItem('hcpmvp01DetailsOfClinicalFeatures');
  const treatment = localStorage.getItem('hcpmvp01Treatment');
  const patientAddressLine1 = localStorage.getItem('hcpmvp01PatientAddressLine1');
  const patientAddressLine2 = localStorage.getItem('hcpmvp01PatientAddressLine2');
  const patientAddressTown = localStorage.getItem('hcpmvp01PatientAddressTown');
  const patientAddressCounty = localStorage.getItem('hcpmvp01PatientAddressCounty');
  const patientPostcode = localStorage.getItem('hcpmvp01PatientPostcode');
  const hcpfirstname = localStorage.getItem('hcpmvp01Firstname');
  const role = localStorage.getItem('hcpmvp01Role');
  const professionalregistrationnumber = localStorage.getItem('hcpmvp01ProfessionalRegistrationNumber');
  const phonenumber = localStorage.getItem('hcpmvp01MobileNumber');
  const orgaddressline1 = localStorage.getItem('hcpmvp01OrganisationAddressLine1');
  return {
    firstName,
    lastName,
    dobDay,
    dobMonth,
    dobYear,
    nino,
    dateofSpecialRulesDay,
    dateofSpecialRulesMonth,
    dateofSpecialRulesYear,
    diagnosis,
    dodDay,
    dodMonth,
    dodYear,
    otherRelevantDiagnosis,
    awareOfDiagnosis,
    awareOfPrognosis,
    detailsOfClinicalFeatures,
    treatment,
    patientAddressLine1,
    patientAddressLine2,
    patientAddressTown,
    patientAddressCounty,
    patientPostcode,
    hcpfirstname,
    role,
    professionalregistrationnumber,
    phonenumber,
    orgaddressline1,
  };
}
// mvp02
function getSR1Datamvp02() {
  const firstName = localStorage.getItem('hcpmvp02PatientFirstName');
  const lastName = localStorage.getItem('hcpmvp02PatientLastName');
  const dobDay = localStorage.getItem('hcpmvp02DobDay');
  const dobMonth = localStorage.getItem('hcpmvp02DobMonth');
  const dobYear = localStorage.getItem('hcpmvp02DobYear');
  const nino = localStorage.getItem('hcpmvp02NiNo');
  const dateofSpecialRulesDay = localStorage.getItem('hcpmvp02DateofSpecialRulesDay');
  const dateofSpecialRulesMonth = localStorage.getItem('hcpmvp02DateofSpecialRulesMonth');
  const dateofSpecialRulesYear = localStorage.getItem('hcpmvp02DateofSpecialRulesYear');
  const diagnosis = localStorage.getItem('hcpmvp02WhatIsTheDiagnosis');
  const dodDay = localStorage.getItem('hcpmvp02DodDay');
  const dodMonth = localStorage.getItem('hcpmvp02DodMonth');
  const dodYear = localStorage.getItem('hcpmvp02DodYear');
  const otherRelevantDiagnosis = localStorage.getItem('hcpmvp02OtherRelevantDiagnosis');
  const awareOfDiagnosis = localStorage.getItem('hcpmvp02AwareOfDiagnosis');
  const awareOfPrognosis = localStorage.getItem('hcpmvp02AwareOfPrognosis');
  const detailsOfClinicalFeatures = localStorage.getItem('hcpmvp02DetailsOfClinicalFeatures');
  const treatment = localStorage.getItem('hcpmvp02Treatment');
  const patientAddressLine1 = localStorage.getItem('hcpmvp02PatientAddressLine1');
  const patientAddressLine2 = localStorage.getItem('hcpmvp02PatientAddressLine2');
  const patientAddressTown = localStorage.getItem('hcpmvp02PatientAddressTown');
  const patientAddressCounty = localStorage.getItem('hcpmvp02PatientAddressCounty');
  const patientPostcode = localStorage.getItem('hcpmvp02PatientPostcode');
  const hcpfirstname = localStorage.getItem('hcpmvp02Firstname');
  const role = localStorage.getItem('hcpmvp02Role');
  const professionalregistrationnumber = localStorage.getItem('hcpmvp02ProfessionalRegistrationNumber');
  const phonenumber = localStorage.getItem('hcpmvp02MobileNumber');
  const orgaddressline1 = localStorage.getItem('hcpmvp02OrganisationAddressLine1');
  return {
    firstName,
    lastName,
    dobDay,
    dobMonth,
    dobYear,
    nino,
    dateofSpecialRulesDay,
    dateofSpecialRulesMonth,
    dateofSpecialRulesYear,
    diagnosis,
    dodDay,
    dodMonth,
    dodYear,
    otherRelevantDiagnosis,
    awareOfDiagnosis,
    awareOfPrognosis,
    detailsOfClinicalFeatures,
    treatment,
    patientAddressLine1,
    patientAddressLine2,
    patientAddressTown,
    patientAddressCounty,
    patientPostcode,
    hcpfirstname,
    role,
    professionalregistrationnumber,
    phonenumber,
    orgaddressline1,
  };
}
// mvp03
function getSR1Datamvp03() {
  const firstName = localStorage.getItem('hcpmvp03PatientFirstName');
  const lastName = localStorage.getItem('hcpmvp03PatientLastName');
  const dobDay = localStorage.getItem('hcpmvp03DobDay');
  const dobMonth = localStorage.getItem('hcpmvp03DobMonth');
  const dobYear = localStorage.getItem('hcpmvp03DobYear');
  const nino = localStorage.getItem('hcpmvp03NiNo');
  const dateofSpecialRulesDay = localStorage.getItem('hcpmvp03DateofSpecialRulesDay');
  const dateofSpecialRulesMonth = localStorage.getItem('hcpmvp03DateofSpecialRulesMonth');
  const dateofSpecialRulesYear = localStorage.getItem('hcpmvp03DateofSpecialRulesYear');
  const diagnosis = localStorage.getItem('hcpmvp03WhatIsTheDiagnosis');
  const dodDay = localStorage.getItem('hcpmvp03DodDay');
  const dodMonth = localStorage.getItem('hcpmvp03DodMonth');
  const dodYear = localStorage.getItem('hcpmvp03DodYear');
  const otherRelevantDiagnosis = localStorage.getItem('hcpmvp03OtherRelevantDiagnosis');
  const awareOfDiagnosis = localStorage.getItem('hcpmvp03AwareOfDiagnosis');
  const awareOfPrognosis = localStorage.getItem('hcpmvp03AwareOfPrognosis');
  const detailsOfClinicalFeatures = localStorage.getItem('hcpmvp03DetailsOfClinicalFeatures');
  const treatment = localStorage.getItem('hcpmvp03Treatment');
  const patientAddressLine1 = localStorage.getItem('hcpmvp03PatientAddressLine1');
  const patientAddressLine2 = localStorage.getItem('hcpmvp03PatientAddressLine2');
  const patientAddressTown = localStorage.getItem('hcpmvp03PatientAddressTown');
  const patientAddressCounty = localStorage.getItem('hcpmvp03PatientAddressCounty');
  const patientPostcode = localStorage.getItem('hcpmvp03PatientPostcode');
  const hcpfirstname = localStorage.getItem('hcpmvp03Firstname');
  const role = localStorage.getItem('hcpmvp03Role');
  const professionalregistrationnumber = localStorage.getItem('hcpmvp03ProfessionalRegistrationNumber');
  const phonenumber = localStorage.getItem('hcpmvp03MobileNumber');
  const orgaddressline1 = localStorage.getItem('hcpmvp03OrganisationAddressLine1');
  return {
    firstName,
    lastName,
    dobDay,
    dobMonth,
    dobYear,
    nino,
    dateofSpecialRulesDay,
    dateofSpecialRulesMonth,
    dateofSpecialRulesYear,
    diagnosis,
    dodDay,
    dodMonth,
    dodYear,
    otherRelevantDiagnosis,
    awareOfDiagnosis,
    awareOfPrognosis,
    detailsOfClinicalFeatures,
    treatment,
    patientAddressLine1,
    patientAddressLine2,
    patientAddressTown,
    patientAddressCounty,
    patientPostcode,
    hcpfirstname,
    role,
    professionalregistrationnumber,
    phonenumber,
    orgaddressline1,
  };
}

//Get parameters for the URL

// v04
function getUrlWithSR1DataAsQueryParams(origin, pathname) {
  const {
    fullName,
    dobDay,
    dobMonth,
    dobYear,
    nino,
    dateofSpecialRulesDay,
    dateofSpecialRulesMonth,
    dateofSpecialRulesYear,
    diagnosis,
    dodDay,
    dodMonth,
    dodYear,
    otherRelevantDiagnosis,
    awareOfDiagnosis,
    awareOfPrognosis,
    detailsOfClinicalFeatures,
    treatment,
    patientAddressLine1,
    patientAddressLine2,
    patientAddressTown,
    patientPostcode,
  } = getSR1Datav04();
  const url = new URL(origin);
  url.pathname = pathname;
  url.searchParams.set('hcpv04PatientFullName', fullName)
  url.searchParams.set('hcpv04DobDay', dobDay)
  url.searchParams.set('hcpv04DobMonth', dobMonth)
  url.searchParams.set('hcpv04DobYear', dobYear)
  url.searchParams.set('hcpv04NiNo', nino)
  url.searchParams.set('hcpv04DateofSpecialRulesDay', dateofSpecialRulesDay)
  url.searchParams.set('hcpv04DateofSpecialRulesMonth', dateofSpecialRulesMonth)
  url.searchParams.set('hcpv04DateofSpecialRulesYear', dateofSpecialRulesYear)
  url.searchParams.set('hcpv04WhatIsTheDiagnosis', diagnosis)
  url.searchParams.set('hcpv04DodDay', dodDay)
  url.searchParams.set('hcpv04DodMonth', dodMonth)
  url.searchParams.set('hcpv04DodYear', dodYear)
  url.searchParams.set('hcpv04OtherRelevantDiagnosis', otherRelevantDiagnosis)
  url.searchParams.set('hcpv04AwareOfDiagnosis', awareOfDiagnosis)
  url.searchParams.set('hcpv04AwareOfPrognosis', awareOfPrognosis)
  url.searchParams.set('hcpv04DetailsOfClinicalFeatures', detailsOfClinicalFeatures)
  url.searchParams.set('hcpv04Treatment', treatment)
  url.searchParams.set('hcpv04PatientAddressLine1', patientAddressLine1)
  url.searchParams.set('hcpv04PatientAddressLine2', patientAddressLine2)
  url.searchParams.set('hcpv04PatientAddressTown', patientAddressTown)
  url.searchParams.set('hcpv04PatientPostcode', patientPostcode);
  return url;
}
// v06
function getUrlWithSR1DataAsQueryParamsv06(origin, pathname) {
  const {
    fullName,
    dobDay,
    dobMonth,
    dobYear,
    nino,
    dateofSpecialRulesDay,
    dateofSpecialRulesMonth,
    dateofSpecialRulesYear,
    diagnosis,
    dodDay,
    dodMonth,
    dodYear,
    otherRelevantDiagnosis,
    awareOfDiagnosis,
    awareOfPrognosis,
    detailsOfClinicalFeatures,
    treatment,
    patientAddressLine1,
    patientAddressLine2,
    patientAddressTown,
    patientPostcode,
  } = getSR1Datav06();
  const url = new URL(origin);
  url.pathname = pathname;
  url.searchParams.set('hcpv06PatientFullName', fullName)
  url.searchParams.set('hcpv06DobDay', dobDay)
  url.searchParams.set('hcpv06DobMonth', dobMonth)
  url.searchParams.set('hcpv06DobYear', dobYear)
  url.searchParams.set('hcpv06NiNo', nino)
  url.searchParams.set('hcpv06DateofSpecialRulesDay', dateofSpecialRulesDay)
  url.searchParams.set('hcpv06DateofSpecialRulesMonth', dateofSpecialRulesMonth)
  url.searchParams.set('hcpv06DateofSpecialRulesYear', dateofSpecialRulesYear)
  url.searchParams.set('hcpv06WhatIsTheDiagnosis', diagnosis)
  url.searchParams.set('hcpv06DodDay', dodDay)
  url.searchParams.set('hcpv06DodMonth', dodMonth)
  url.searchParams.set('hcpv06DodYear', dodYear)
  url.searchParams.set('hcpv06OtherRelevantDiagnosis', otherRelevantDiagnosis)
  url.searchParams.set('hcpv06AwareOfDiagnosis', awareOfDiagnosis)
  url.searchParams.set('hcpv06AwareOfPrognosis', awareOfPrognosis)
  url.searchParams.set('hcpv06DetailsOfClinicalFeatures', detailsOfClinicalFeatures)
  url.searchParams.set('hcpv06Treatment', treatment)
  url.searchParams.set('hcpv06PatientAddressLine1', patientAddressLine1)
  url.searchParams.set('hcpv06PatientAddressLine2', patientAddressLine2)
  url.searchParams.set('hcpv06PatientAddressTown', patientAddressTown)
  url.searchParams.set('hcpv06PatientPostcode', patientPostcode);
  return url;
}
function setDataSavedUrlParam(url) {
  url.searchParams.set('dataSaved', 'true');
}
// v07
function getUrlWithSR1DataAsQueryParamsv07(origin, pathname) {
  const {
    fullName,
    dobDay,
    dobMonth,
    dobYear,
    nino,
    dateofSpecialRulesDay,
    dateofSpecialRulesMonth,
    dateofSpecialRulesYear,
    diagnosis,
    dodDay,
    dodMonth,
    dodYear,
    otherRelevantDiagnosis,
    awareOfDiagnosis,
    awareOfPrognosis,
    detailsOfClinicalFeatures,
    treatment,
    patientAddressLine1,
    patientAddressLine2,
    patientAddressTown,
    patientPostcode,
  } = getSR1Datav07();
  const url = new URL(origin);
  url.pathname = pathname;
  url.searchParams.set('hcpv07PatientFullName', fullName)
  url.searchParams.set('hcpv07DobDay', dobDay)
  url.searchParams.set('hcpv07DobMonth', dobMonth)
  url.searchParams.set('hcpv07DobYear', dobYear)
  url.searchParams.set('hcpv07NiNo', nino)
  url.searchParams.set('hcpv07DateofSpecialRulesDay', dateofSpecialRulesDay)
  url.searchParams.set('hcpv07DateofSpecialRulesMonth', dateofSpecialRulesMonth)
  url.searchParams.set('hcpv07DateofSpecialRulesYear', dateofSpecialRulesYear)
  url.searchParams.set('hcpv07WhatIsTheDiagnosis', diagnosis)
  url.searchParams.set('hcpv07DodDay', dodDay)
  url.searchParams.set('hcpv07DodMonth', dodMonth)
  url.searchParams.set('hcpv07DodYear', dodYear)
  url.searchParams.set('hcpv07OtherRelevantDiagnosis', otherRelevantDiagnosis)
  url.searchParams.set('hcpv07AwareOfDiagnosis', awareOfDiagnosis)
  url.searchParams.set('hcpv07AwareOfPrognosis', awareOfPrognosis)
  url.searchParams.set('hcpv07DetailsOfClinicalFeatures', detailsOfClinicalFeatures)
  url.searchParams.set('hcpv07Treatment', treatment)
  url.searchParams.set('hcpv07PatientAddressLine1', patientAddressLine1)
  url.searchParams.set('hcpv07PatientAddressLine2', patientAddressLine2)
  url.searchParams.set('hcpv07PatientAddressTown', patientAddressTown)
  url.searchParams.set('hcpv07PatientPostcode', patientPostcode);
  return url;
}
// v09
function getUrlWithSR1DataAsQueryParamsv09(origin, pathname) {
  const {
    fullName,
    dobDay,
    dobMonth,
    dobYear,
    nino,
    dateofSpecialRulesDay,
    dateofSpecialRulesMonth,
    dateofSpecialRulesYear,
    diagnosis,
    dodDay,
    dodMonth,
    dodYear,
    otherRelevantDiagnosis,
    awareOfDiagnosis,
    awareOfPrognosis,
    detailsOfClinicalFeatures,
    treatment,
    patientAddressLine1,
    patientAddressLine2,
    patientAddressTown,
    patientPostcode,
  } = getSR1Datav09();
  const url = new URL(origin);
  url.pathname = pathname;
  url.searchParams.set('hcpv09PatientFullName', fullName)
  url.searchParams.set('hcpv09DobDay', dobDay)
  url.searchParams.set('hcpv09DobMonth', dobMonth)
  url.searchParams.set('hcpv09DobYear', dobYear)
  url.searchParams.set('hcpv09NiNo', nino)
  url.searchParams.set('hcpv09DateofSpecialRulesDay', dateofSpecialRulesDay)
  url.searchParams.set('hcpv09DateofSpecialRulesMonth', dateofSpecialRulesMonth)
  url.searchParams.set('hcpv09DateofSpecialRulesYear', dateofSpecialRulesYear)
  url.searchParams.set('hcpv09WhatIsTheDiagnosis', diagnosis)
  url.searchParams.set('hcpv09DodDay', dodDay)
  url.searchParams.set('hcpv09DodMonth', dodMonth)
  url.searchParams.set('hcpv09DodYear', dodYear)
  url.searchParams.set('hcpv09OtherRelevantDiagnosis', otherRelevantDiagnosis)
  url.searchParams.set('hcpv09AwareOfDiagnosis', awareOfDiagnosis)
  url.searchParams.set('hcpv09AwareOfPrognosis', awareOfPrognosis)
  url.searchParams.set('hcpv09DetailsOfClinicalFeatures', detailsOfClinicalFeatures)
  url.searchParams.set('hcpv09Treatment', treatment)
  url.searchParams.set('hcpv09PatientAddressLine1', patientAddressLine1)
  url.searchParams.set('hcpv09PatientAddressLine2', patientAddressLine2)
  url.searchParams.set('hcpv09PatientAddressTown', patientAddressTown)
  url.searchParams.set('hcpv09PatientPostcode', patientPostcode);
  return url;
}
// mvp01
function getUrlWithSR1DataAsQueryParamsmvp01(origin, pathname) {
  const {
    firstName,
    lastName,
    dobDay,
    dobMonth,
    dobYear,
    nino,
    dateofSpecialRulesDay,
    dateofSpecialRulesMonth,
    dateofSpecialRulesYear,
    diagnosis,
    dodDay,
    dodMonth,
    dodYear,
    otherRelevantDiagnosis,
    awareOfDiagnosis,
    awareOfPrognosis,
    detailsOfClinicalFeatures,
    treatment,
    patientAddressLine1,
    patientAddressLine2,
    patientAddressTown,
    patientAddressCounty,
    patientPostcode,
    hcpfirstname,
    role,
    professionalregistrationnumber,
    phonenumber,
    orgaddressline1,
  } = getSR1Datamvp01();
  const url = new URL(origin);
  url.pathname = pathname;
  url.searchParams.set('hcpmvp01PatientFirstName', firstName)
  url.searchParams.set('hcpmvp01PatientLastName', lastName)
  url.searchParams.set('hcpmvp01DobDay', dobDay)
  url.searchParams.set('hcpmvp01DobMonth', dobMonth)
  url.searchParams.set('hcpmvp01DobYear', dobYear)
  url.searchParams.set('hcpmvp01NiNo', nino)
  url.searchParams.set('hcpmvp01DateofSpecialRulesDay', dateofSpecialRulesDay)
  url.searchParams.set('hcpmvp01DateofSpecialRulesMonth', dateofSpecialRulesMonth)
  url.searchParams.set('hcpmvp01DateofSpecialRulesYear', dateofSpecialRulesYear)
  url.searchParams.set('hcpmvp01WhatIsTheDiagnosis', diagnosis)
  url.searchParams.set('hcpmvp01DodDay', dodDay)
  url.searchParams.set('hcpmvp01DodMonth', dodMonth)
  url.searchParams.set('hcpmvp01DodYear', dodYear)
  url.searchParams.set('hcpmvp01OtherRelevantDiagnosis', otherRelevantDiagnosis)
  url.searchParams.set('hcpmvp01AwareOfDiagnosis', awareOfDiagnosis)
  url.searchParams.set('hcpmvp01AwareOfPrognosis', awareOfPrognosis)
  url.searchParams.set('hcpmvp01DetailsOfClinicalFeatures', detailsOfClinicalFeatures)
  url.searchParams.set('hcpmvp01Treatment', treatment)
  url.searchParams.set('hcpmvp01PatientAddressLine1', patientAddressLine1)
  url.searchParams.set('hcpmvp01PatientAddressLine2', patientAddressLine2)
  url.searchParams.set('hcpmvp01PatientAddressTown', patientAddressTown)
  url.searchParams.set('hcpmvp01PatientAddressCounty', patientAddressCounty)
  url.searchParams.set('hcpmvp01PatientPostcode', patientPostcode)
  url.searchParams.set('hcpmvp01Firstname', hcpfirstname)
  url.searchParams.set('hcpmvp01Role', role)
  url.searchParams.set('hcpmvp01ProfessionalRegistrationNumber', professionalregistrationnumber)
  url.searchParams.set('hcpmvp01MobileNumber', phonenumber)
  url.searchParams.set('hcpmvp01OrganisationAddressLine1', orgaddressline1);
  return url;
}
// mvp02
function getUrlWithSR1DataAsQueryParamsmvp02(origin, pathname) {
  const {
    firstName,
    lastName,
    dobDay,
    dobMonth,
    dobYear,
    nino,
    dateofSpecialRulesDay,
    dateofSpecialRulesMonth,
    dateofSpecialRulesYear,
    diagnosis,
    dodDay,
    dodMonth,
    dodYear,
    otherRelevantDiagnosis,
    awareOfDiagnosis,
    awareOfPrognosis,
    detailsOfClinicalFeatures,
    treatment,
    patientAddressLine1,
    patientAddressLine2,
    patientAddressTown,
    patientAddressCounty,
    patientPostcode,
    hcpfirstname,
    role,
    professionalregistrationnumber,
    phonenumber,
    orgaddressline1,
  } = getSR1Datamvp02();
  const url = new URL(origin);
  url.pathname = pathname;
  url.searchParams.set('hcpmvp02PatientFirstName', firstName)
  url.searchParams.set('hcpmvp02PatientLastName', lastName)
  url.searchParams.set('hcpmvp02DobDay', dobDay)
  url.searchParams.set('hcpmvp02DobMonth', dobMonth)
  url.searchParams.set('hcpmvp02DobYear', dobYear)
  url.searchParams.set('hcpmvp02NiNo', nino)
  url.searchParams.set('hcpmvp02DateofSpecialRulesDay', dateofSpecialRulesDay)
  url.searchParams.set('hcpmvp02DateofSpecialRulesMonth', dateofSpecialRulesMonth)
  url.searchParams.set('hcpmvp02DateofSpecialRulesYear', dateofSpecialRulesYear)
  url.searchParams.set('hcpmvp02WhatIsTheDiagnosis', diagnosis)
  url.searchParams.set('hcpmvp02DodDay', dodDay)
  url.searchParams.set('hcpmvp02DodMonth', dodMonth)
  url.searchParams.set('hcpmvp02DodYear', dodYear)
  url.searchParams.set('hcpmvp02OtherRelevantDiagnosis', otherRelevantDiagnosis)
  url.searchParams.set('hcpmvp02AwareOfDiagnosis', awareOfDiagnosis)
  url.searchParams.set('hcpmvp02AwareOfPrognosis', awareOfPrognosis)
  url.searchParams.set('hcpmvp02DetailsOfClinicalFeatures', detailsOfClinicalFeatures)
  url.searchParams.set('hcpmvp02Treatment', treatment)
  url.searchParams.set('hcpmvp02PatientAddressLine1', patientAddressLine1)
  url.searchParams.set('hcpmvp02PatientAddressLine2', patientAddressLine2)
  url.searchParams.set('hcpmvp02PatientAddressTown', patientAddressTown)
  url.searchParams.set('hcpmvp02PatientAddressCounty', patientAddressCounty)
  url.searchParams.set('hcpmvp02PatientPostcode', patientPostcode)
  url.searchParams.set('hcpmvp02Firstname', hcpfirstname)
  url.searchParams.set('hcpmvp02Role', role)
  url.searchParams.set('hcpmvp02ProfessionalRegistrationNumber', professionalregistrationnumber)
  url.searchParams.set('hcpmvp02MobileNumber', phonenumber)
  url.searchParams.set('hcpmvp02OrganisationAddressLine1', orgaddressline1);
  return url;
}
// mvp02
function getUrlWithSR1DataAsQueryParamsmvp03(origin, pathname) {
  const {
    firstName,
    lastName,
    dobDay,
    dobMonth,
    dobYear,
    nino,
    dateofSpecialRulesDay,
    dateofSpecialRulesMonth,
    dateofSpecialRulesYear,
    diagnosis,
    dodDay,
    dodMonth,
    dodYear,
    otherRelevantDiagnosis,
    awareOfDiagnosis,
    awareOfPrognosis,
    detailsOfClinicalFeatures,
    treatment,
    patientAddressLine1,
    patientAddressLine2,
    patientAddressTown,
    patientAddressCounty,
    patientPostcode,
    hcpfirstname,
    role,
    professionalregistrationnumber,
    phonenumber,
    orgaddressline1,
  } = getSR1Datamvp03();
  const url = new URL(origin);
  url.pathname = pathname;
  url.searchParams.set('hcpmvp03PatientFirstName', firstName)
  url.searchParams.set('hcpmvp03PatientLastName', lastName)
  url.searchParams.set('hcpmvp03DobDay', dobDay)
  url.searchParams.set('hcpmvp03DobMonth', dobMonth)
  url.searchParams.set('hcpmvp03DobYear', dobYear)
  url.searchParams.set('hcpmvp03NiNo', nino)
  url.searchParams.set('hcpmvp03DateofSpecialRulesDay', dateofSpecialRulesDay)
  url.searchParams.set('hcpmvp03DateofSpecialRulesMonth', dateofSpecialRulesMonth)
  url.searchParams.set('hcpmvp03DateofSpecialRulesYear', dateofSpecialRulesYear)
  url.searchParams.set('hcpmvp03WhatIsTheDiagnosis', diagnosis)
  url.searchParams.set('hcpmvp03DodDay', dodDay)
  url.searchParams.set('hcpmvp03DodMonth', dodMonth)
  url.searchParams.set('hcpmvp03DodYear', dodYear)
  url.searchParams.set('hcpmvp03OtherRelevantDiagnosis', otherRelevantDiagnosis)
  url.searchParams.set('hcpmvp03AwareOfDiagnosis', awareOfDiagnosis)
  url.searchParams.set('hcpmvp03AwareOfPrognosis', awareOfPrognosis)
  url.searchParams.set('hcpmvp03DetailsOfClinicalFeatures', detailsOfClinicalFeatures)
  url.searchParams.set('hcpmvp03Treatment', treatment)
  url.searchParams.set('hcpmvp03PatientAddressLine1', patientAddressLine1)
  url.searchParams.set('hcpmvp03PatientAddressLine2', patientAddressLine2)
  url.searchParams.set('hcpmvp03PatientAddressTown', patientAddressTown)
  url.searchParams.set('hcpmvp03PatientAddressCounty', patientAddressCounty)
  url.searchParams.set('hcpmvp03PatientPostcode', patientPostcode)
  url.searchParams.set('hcpmvp03Firstname', hcpfirstname)
  url.searchParams.set('hcpmvp03Role', role)
  url.searchParams.set('hcpmvp03ProfessionalRegistrationNumber', professionalregistrationnumber)
  url.searchParams.set('hcpmvp03MobileNumber', phonenumber)
  url.searchParams.set('hcpmvp03OrganisationAddressLine1', orgaddressline1);
  return url;
}

// =======================
// Save patient's details
// =======================

// v04

// Save patient's name v04
function savePatientNameSR1Formv04() {
  let PatientFullName = document.getElementById('PatientFullName');
  localStorage.setItem('hcpv04PatientFullName', PatientFullName.value);
}
function saveLaterPatientNameSR1Formv04() {
  let PatientFullName = document.getElementById('PatientFullName');
  let patientDateOfBirthstatus = document.getElementById('patientDateOfBirth-status');
  localStorage.setItem('hcpv04PatientFullName', PatientFullName.value);
  reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-v04/task-list-sr1-form");
  document.getElementById('patientDateOfBirth-status').patientDateOfBirthstatus.classList.add('hidden');
  document.getElementById('patientDateOfBirth-status-completed').classList.remove('hidden');
}
// Save patient's Postcode v04
function savePostcodeSR1Formv04() {
  let patientPostcode = document.getElementById('patientPostcode');

  localStorage.setItem('hcpv04PatientPostcode', patientPostcode.value);
}
// Save patient's dob v04
function saveDOBSR1Formv04() {
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  localStorage.setItem('hcpv04DobDay', dobDay.value);
  localStorage.setItem('hcpv04DobMonth', dobMonth.value);
  localStorage.setItem('hcpv04DobYear', dobYear.value);
}
// Save patient's NIno v04
function savenniNoSR1Formv04() {
  let niNo = document.getElementById('niNo');
  localStorage.setItem('hcpv04NiNo', niNo.value);
}
// Save patient's Date since meeting Special Rules v04
function saveDateofSpecialRulesSR1Formv04() {
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  localStorage.setItem('hcpv04DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv04DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv04DateofSpecialRulesYear', dateofSpecialRulesYear.value);
}
// Save Diagnosis v04
function saveDiagnosisSR1Formv04() {
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  localStorage.setItem('hcpv04WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
}
// Save Date diagnosis v04
function saveDateDiagnosisSR1Formv04() {
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  localStorage.setItem('hcpv04DodDay', dodDay.value);
  localStorage.setItem('hcpv04DodMonth', dodMonth.value);
  localStorage.setItem('hcpv04DodYear', dodYear.value);
}
// Save Other Diagnosis v04
function saveOtherDiagnosisSR1Formv04() {
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpv04OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
}
// Save Aware of Diagnosis v04
function saveAwareOfDiagnosisSR1Formv04() {
  localStorage.setItem('hcpv04AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv04AwareOfDiagnosis', currentValueOfDiagnosis);
}
// Save Other Diagnosis v04
function saveAwareOfPrognosisSR1Formv04() {
  localStorage.setItem('hcpv04AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpv04AwareOfPrognosis', currentValueOfPrognosis);
}
// Save Clinical Features v04
function saveClinicalFeaturesSR1Formv04() {
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpv04DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
}
// Save Treatment v04
function saveTreatmentSR1Formv04() {
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpv04Treatment', treatment.value);
}
// Save patient's Address v04
function savePatientAddressSR1Formv04() {
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientPostcode = document.getElementById('patientPostcode');
  localStorage.setItem('hcpv04PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv04PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv04PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv04PatientPostcode', patientPostcode.value);
}
function savePatientAddressWithParametersSR1Formv04(addressline1, addressline2, town, postcode) {
  localStorage.setItem('hcpv04PatientAddressLine1', addressline1);
  localStorage.setItem('hcpv04PatientAddressLine2', addressline2);
  localStorage.setItem('hcpv04PatientAddressTown', town);
  localStorage.setItem('hcpv04PatientPostcode', postcode);
}

// v05

// Save patient's name v05
function savePatientNameSR1Formv05() {
  let PatientFullName = document.getElementById('PatientFullName');
  localStorage.setItem('hcpv05PatientFullName', PatientFullName.value);
}
// Save patient's Postcode v05
function savePostcodeSR1Formv05() {
  let patientPostcode = document.getElementById('patientPostcode');
  localStorage.setItem('hcpv05PatientPostcode', patientPostcode.value);
}
// Save patient's dob v05
function saveDOBSR1Formv05() {
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  localStorage.setItem('hcpv05DobDay', dobDay.value);
  localStorage.setItem('hcpv05DobMonth', dobMonth.value);
  localStorage.setItem('hcpv05DobYear', dobYear.value);
}
// Save patient's dob v05
function savenniNoSR1Formv05() {
  let niNo = document.getElementById('niNo');
  localStorage.setItem('hcpv05NiNo', niNo.value);
}
// Save patient's Date since meeting Special Rules v05
function saveDateofSpecialRulesSR1Formv05() {
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  localStorage.setItem('hcpv05DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv05DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv05DateofSpecialRulesYear', dateofSpecialRulesYear.value);
}
// Save Diagnosis v05
function saveDiagnosisSR1Formv05() {
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  localStorage.setItem('hcpv05WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
}
// Save Date diagnosis v05
function saveDateDiagnosisSR1Formv05() {
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  localStorage.setItem('hcpv05DodDay', dodDay.value);
  localStorage.setItem('hcpv05DodMonth', dodMonth.value);
  localStorage.setItem('hcpv05DodYear', dodYear.value);
}
// Save Other Diagnosis v05
function saveOtherDiagnosisSR1Formv05() {
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpv05OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
}
// Save Aware of Diagnosis v05
function saveAwareOfDiagnosisSR1Formv05() {
  localStorage.setItem('hcpv05AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv05AwareOfDiagnosis', currentValueOfDiagnosis);
}
// Save Other Diagnosis v05
function saveAwareOfPrognosisSR1Formv05() {
  localStorage.setItem('hcpv05AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpv05AwareOfPrognosis', currentValueOfPrognosis);
}
// Save Clinical Features v05
function saveClinicalFeaturesSR1Formv05() {
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpv05DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
}
// Save Treatment v05
function saveTreatmentSR1Formv05() {
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpv05Treatment', treatment.value);
}
// Save patient's Address v05
function savePatientAddressSR1Formv05() {
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientPostcode = document.getElementById('patientPostcode');
  localStorage.setItem('hcpv05PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv05PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv05PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv05PatientPostcode', patientPostcode.value);
}

// v06

// Save patient's name v06
function savePatientNameSR1Formv06() {
  let PatientFullName = document.getElementById('PatientFullName');
  localStorage.setItem('hcpv06PatientFullName', PatientFullName.value);
}
// Save patient's Postcode v06
function savePostcodeSR1Formv06() {
  let patientPostcode = document.getElementById('patientPostcode');
  localStorage.setItem('hcpv06PatientPostcode', patientPostcode.value);
}
// Save patient's Address v06
function savePatientAddressSR1Formv06() {
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientPostcode = document.getElementById('patientPostcode');
  localStorage.setItem('hcpv06PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv06PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv06PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv06PatientPostcode', patientPostcode.value);
}
// Save patient's dob v06
function saveDOBSR1Formv06() {
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  localStorage.setItem('hcpv06DobDay', dobDay.value);
  localStorage.setItem('hcpv06DobMonth', dobMonth.value);
  localStorage.setItem('hcpv06DobYear', dobYear.value);
}
// Save patient's dob v06
function savenniNoSR1Formv06() {
  let niNo = document.getElementById('niNo');
  localStorage.setItem('hcpv06NiNo', niNo.value);
}
// Save patient's Date since meeting Special Rules v06
function saveDateofSpecialRulesSR1Formv06() {
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  localStorage.setItem('hcpv06DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv06DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv06DateofSpecialRulesYear', dateofSpecialRulesYear.value);
}
// Save Diagnosis v06
function saveDiagnosisSR1Formv06() {
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  localStorage.setItem('hcpv06WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
}
// Save Date diagnosis v06
function saveDateDiagnosisSR1Formv06() {
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  localStorage.setItem('hcpv06DodDay', dodDay.value);
  localStorage.setItem('hcpv06DodMonth', dodMonth.value);
  localStorage.setItem('hcpv06DodYear', dodYear.value);
}
// Save Other Diagnosis v06
function saveOtherDiagnosisSR1Formv06() {
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpv06OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
}
// Save Aware of Diagnosis v06
function saveAwareOfDiagnosisSR1Formv06() {
  localStorage.setItem('hcpv06AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv06AwareOfDiagnosis', currentValueOfDiagnosis);
}
// Save Other Diagnosis v06
function saveAwareOfPrognosisSR1Formv06() {
  localStorage.setItem('hcpv06AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpv06AwareOfPrognosis', currentValueOfPrognosis);
}
// Save Clinical Features v06
function saveClinicalFeaturesSR1Formv06() {
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpv06DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
}
// Save Treatment v06
function saveTreatmentSR1Formv06() {
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpv06Treatment', treatment.value);
}
// v07 Save patient's details
function savePatientIDSR1Formv07() {
  let PatientFullName = document.getElementById('PatientFullName');
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientPostcode = document.getElementById('patientPostcode');
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  let niNo = document.getElementById('niNo');
  localStorage.setItem('hcpv07PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv07PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv07PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv07PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv07PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv07DobDay', dobDay.value);
  localStorage.setItem('hcpv07DobMonth', dobMonth.value);
  localStorage.setItem('hcpv07DobYear', dobYear.value);
  localStorage.setItem('hcpv07NiNo', niNo.value);
}

// v07

// Save Diagnosis v07
function saveFullDiagnosisSR1Formv07() {
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpv07WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv07DodDay', dodDay.value);
  localStorage.setItem('hcpv07DodMonth', dodMonth.value);
  localStorage.setItem('hcpv07DodYear', dodYear.value);
  localStorage.setItem('hcpv07DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv07DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv07DateofSpecialRulesYear', dateofSpecialRulesYear.value);
  localStorage.setItem('hcpv07OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
}
// Save Clinical Features v07
function saveClinicalFeaturesSR1Formv07() {
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpv07DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
}
// Save Treatment v07
function saveTreatmentSR1Formv07() {
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpv07Treatment', treatment.value);
}

// v08

//Save patient's details v08
function savePatientIDSR1Formv08() {
  let PatientFullName = document.getElementById('PatientFullName');
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientPostcode = document.getElementById('patientPostcode');
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  let niNo = document.getElementById('niNo');
  localStorage.setItem('hcpv08PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv08PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv08PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv08PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv08PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv08DobDay', dobDay.value);
  localStorage.setItem('hcpv08DobMonth', dobMonth.value);
  localStorage.setItem('hcpv08DobYear', dobYear.value);
  localStorage.setItem('hcpv08NiNo', niNo.value);
}
// Save Diagnosis v08
function saveFullDiagnosisSR1Formv08() {
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpv08WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv08DodDay', dodDay.value);
  localStorage.setItem('hcpv08DodMonth', dodMonth.value);
  localStorage.setItem('hcpv08DodYear', dodYear.value);
  localStorage.setItem('hcpv08DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv08DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv08DateofSpecialRulesYear', dateofSpecialRulesYear.value);
  localStorage.setItem('hcpv08OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv08AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv08AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv08AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpv08AwareOfPrognosis', currentValueOfPrognosis);
}
// Save Clinical Features v08
function saveClinicalFeaturesSR1Formv08() {
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpv08DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
}
// Save Treatment v08
function saveTreatmentSR1Formv08() {
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpv08Treatment', treatment.value);
}

// v09

//Save patient's details
function savePatientIDSR1Formv09() {
  let PatientFullName = document.getElementById('PatientFullName');
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientPostcode = document.getElementById('patientPostcode');
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  let niNo = document.getElementById('niNo');
  localStorage.setItem('hcpv09PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv09PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv09PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv09PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv09PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv09DobDay', dobDay.value);
  localStorage.setItem('hcpv09DobMonth', dobMonth.value);
  localStorage.setItem('hcpv09DobYear', dobYear.value);
  localStorage.setItem('hcpv09NiNo', niNo.value);
}

// v09

// Save Diagnosis v09
function saveFullDiagnosisSR1Formv09() {
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpv09WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv09DodDay', dodDay.value);
  localStorage.setItem('hcpv09DodMonth', dodMonth.value);
  localStorage.setItem('hcpv09DodYear', dodYear.value);
  localStorage.setItem('hcpv09DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv09DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv09DateofSpecialRulesYear', dateofSpecialRulesYear.value);
  localStorage.setItem('hcpv09OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv09AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv09AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv09AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpv09AwareOfPrognosis', currentValueOfPrognosis);
}
// Save Clinical Features v09
function saveClinicalFeaturesSR1Formv09() {
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpv09DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
}
// Save Treatment v09
function saveTreatmentSR1Formv09() {
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpv09Treatment', treatment.value);
}

// mvp01

// Save patient's name mvp01
function savePatientNameSR1Formmvp01() {
  let PatientFirstName = document.getElementById('PatientFirstName');
  let PatientLastName = document.getElementById('PatientLastName');
  localStorage.setItem('hcpmvp01PatientFirstName', PatientFirstName.value);
  localStorage.setItem('hcpmvp01PatientLastName', PatientLastName.value);
}
function saveLaterPatientNameSR1Formmvp01() {
  let PatientFirstName = document.getElementById('PatientFirstName');
  let PatientMiddleName = document.getElementById('PatientMiddleName');
  let PatientLastName = document.getElementById('PatientLastName');
  let patientDateOfBirthstatus = document.getElementById('patientDateOfBirth-status');
  localStorage.setItem('hcpmvp01PatientFirstName', PatientFirstName.value);
  localStorage.setItem('hcpmvp01PatientLastName', PatientLastName.value);
  reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp01/task-list-sr1-form");
  document.getElementById('patientDateOfBirth-status').patientDateOfBirthstatus.classList.add('hidden');
  document.getElementById('patientDateOfBirth-status-completed').classList.remove('hidden');
}
// Save patient's address mvp01
function savePatientAddressSR1Formmvp01() {
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientaddresscounty = document.getElementById('patientaddresscounty');
  let patientPostcode = document.getElementById('patientPostcode');
  localStorage.setItem('hcpmvp01PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpmvp01PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpmvp01PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpmvp01PatientAddressCounty', patientaddresscounty.value);
  localStorage.setItem('hcpmvp01PatientPostcode', patientPostcode.value);
}
function savePatientAddressWithParametersSR1Formmvp01(addressline1, addressline2, town, county, postcode) {
  localStorage.setItem('hcpmvp01PatientAddressLine1', addressline1);
  localStorage.setItem('hcpmvp01PatientAddressLine2', addressline2);
  localStorage.setItem('hcpmvp01PatientAddressTown', town);
  localStorage.setItem('hcpmvp01PatientAddressCounty', county);
  localStorage.setItem('hcpmvp01PatientPostcode', postcode);
}
// Save patient's dob mvp01
function saveDOBSR1Formmvp01() {
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  localStorage.setItem('hcpmvp01DobDay', dobDay.value);
  localStorage.setItem('hcpmvp01DobMonth', dobMonth.value);
  localStorage.setItem('hcpmvp01DobYear', dobYear.value);
}
// Save patient's NIno mvp01
function savenniNoSR1Formmvp01() {
  let niNo = document.getElementById('niNo');
  localStorage.setItem('hcpmvp01NiNo', niNo.value);
}
// Save patient's Date since meeting Special Rules mvp01
function saveDateofSpecialRulesSR1Formmvp01() {
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  localStorage.setItem('hcpmvp01DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpmvp01DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpmvp01DateofSpecialRulesYear', dateofSpecialRulesYear.value);
}
// Save Diagnosis mvp01
function saveDiagnosisSR1Formmvp01() {
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  localStorage.setItem('hcpmvp01WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
}
// Save Date diagnosis mvp01
function saveDateDiagnosisSR1Formmvp01() {
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  localStorage.setItem('hcpmvp01DodDay', dodDay.value);
  localStorage.setItem('hcpmvp01DodMonth', dodMonth.value);
  localStorage.setItem('hcpmvp01DodYear', dodYear.value);
}
// Save Other Diagnosis mvp01
function saveOtherDiagnosisSR1Formmvp01() {
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpmvp01OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
}
// Save Aware of Diagnosis mvp01
function saveAwareOfDiagnosisSR1Formmvp01() {
  localStorage.setItem('hcpmvp01AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpmvp01AwareOfDiagnosis', currentValueOfDiagnosis);
}
// Save Other Diagnosis mvp01
function saveAwareOfPrognosisSR1Formmvp01() {
  localStorage.setItem('hcpmvp01AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpmvp01AwareOfPrognosis', currentValueOfPrognosis);
}
// Save Clinical Features mvp01F
function saveClinicalFeaturesSR1Formmvp01() {
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpmvp01DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
}
// Save Treatment mvp01
function saveTreatmentSR1Formmvp01() {
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpmvp01Treatment', treatment.value);
}

// mvp02
// Save patient's name mvp02
function savePatientNameSR1Formmvp02() {
  let PatientFirstName = document.getElementById('PatientFirstName');
  let PatientLastName = document.getElementById('PatientLastName');
  localStorage.setItem('hcpmvp02PatientFirstName', PatientFirstName.value);
  localStorage.setItem('hcpmvp02PatientLastName', PatientLastName.value);
  document.getElementById("patientDateOfBirth-status").classList.add('hidden');
  document.getElementById("submit-task-list").classList.remove('hidden');
}
function saveLaterPatientNameSR1Formmvp02() {
  let PatientFirstName = document.getElementById('PatientFirstName');
  let PatientMiddleName = document.getElementById('PatientMiddleName');
  let PatientLastName = document.getElementById('PatientLastName');
  let patientDateOfBirthstatus = document.getElementById('patientDateOfBirth-status');
  localStorage.setItem('hcpmvp02PatientFirstName', PatientFirstName.value);
  localStorage.setItem('hcpmvp02PatientLastName', PatientLastName.value);
  reminderPage1UrlAction.setAttribute("action", "/hcp-e2e-journey-mvp02/task-list-sr1-form");
  document.getElementById('patientDateOfBirth-status').patientDateOfBirthstatus.classList.add('hidden');
  document.getElementById('patientDateOfBirth-status-completed').classList.remove('hidden');
}
// Save patient's address mvp02
function savePatientAddressSR1Formmvp02() {
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientaddresscounty = document.getElementById('patientaddresscounty');
  let patientPostcode = document.getElementById('patientPostcode');
  localStorage.setItem('hcpmvp02PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpmvp02PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpmvp02PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpmvp02PatientAddressCounty', patientaddresscounty.value);
  localStorage.setItem('hcpmvp02PatientPostcode', patientPostcode.value);
}
function savePatientAddressWithParametersSR1Formmvp02(addressline1, addressline2, town, county, postcode) {
  localStorage.setItem('hcpmvp02PatientAddressLine1', addressline1);
  localStorage.setItem('hcpmvp02PatientAddressLine2', addressline2);
  localStorage.setItem('hcpmvp02PatientAddressTown', town);
  localStorage.setItem('hcpmvp02PatientAddressCounty', county);
  localStorage.setItem('hcpmvp02PatientPostcode', postcode);
}
// Save patient's dob mvp02
function saveDOBSR1Formmvp02() {
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');

  localStorage.setItem('hcpmvp02DobDay', dobDay.value);
  localStorage.setItem('hcpmvp02DobMonth', dobMonth.value);
  localStorage.setItem('hcpmvp02DobYear', dobYear.value);
}
// Save patient's NIno mvp02
function savenniNoSR1Formmvp02() {
  let niNo = document.getElementById('niNo');
  localStorage.setItem('hcpmvp02NiNo', niNo.value);
}
// Save patient's Date since meeting Special Rules mvp02
function saveDateofSpecialRulesSR1Formmvp02() {
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  localStorage.setItem('hcpmvp02DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpmvp02DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpmvp02DateofSpecialRulesYear', dateofSpecialRulesYear.value);
}
// Save Diagnosis mvp02
function saveDiagnosisSR1Formmvp02() {
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  localStorage.setItem('hcpmvp02WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
}
// Save Date diagnosis mvp02
function saveDateDiagnosisSR1Formmvp02() {
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  localStorage.setItem('hcpmvp02DodDay', dodDay.value);
  localStorage.setItem('hcpmvp02DodMonth', dodMonth.value);
  localStorage.setItem('hcpmvp02DodYear', dodYear.value);
}
// Save Other Diagnosis mvp02
function saveOtherDiagnosisSR1Formmvp02() {
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  localStorage.setItem('hcpmvp02OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
}
// Save Aware of Diagnosis mvp02
function saveAwareOfDiagnosisSR1Formmvp02() {
  localStorage.setItem('hcpmvp02AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpmvp02AwareOfDiagnosis', currentValueOfDiagnosis);
}
// Save Other Diagnosis mvp02
function saveAwareOfPrognosisSR1Formmvp02() {
  localStorage.setItem('hcpmvp02AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpmvp02AwareOfPrognosis', currentValueOfPrognosis);
}
// Save Clinical Features mvp02F
function saveClinicalFeaturesSR1Formmvp02() {
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpmvp02DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
}
// Save Treatment mvp02
function saveTreatmentSR1Formmvp02() {
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpmvp02Treatment', treatment.value);
}

// mvp03

// Save patient's name mvp03
function savePatientNameSR1Formmvp03() {
  let PatientFirstName = document.getElementById('PatientFirstName');
  let PatientLastName = document.getElementById('PatientLastName');
  localStorage.setItem('hcpmvp03PatientFirstName', PatientFirstName.value);
  localStorage.setItem('hcpmvp03PatientLastName', PatientLastName.value);
  localStorage.setItem("hcpmvp03PatientNameDefined", "Yes");
}
function saveLaterPatientNameSR1Formmvp03() {
  let PatientFirstName = document.getElementById('PatientFirstName');
  let PatientMiddleName = document.getElementById('PatientMiddleName');
  let PatientLastName = document.getElementById('PatientLastName');
  let patientDateOfBirthstatus = document.getElementById('patientDateOfBirth-status');
  localStorage.setItem('hcpmvp03PatientFirstName', PatientFirstName.value);
  localStorage.setItem('hcpmvp03PatientLastName', PatientLastName.value);
}
// Save patient's name mvp03
function savePatientAddressSR1Formmvp03() {
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientaddresscounty = document.getElementById('patientaddresscounty');
  let patientPostcode = document.getElementById('patientPostcode');
  localStorage.setItem('hcpmvp03PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpmvp03PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpmvp03PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpmvp03PatientAddressCounty', patientaddresscounty.value);
  localStorage.setItem('hcpmvp03PatientPostcode', patientPostcode.value);
}
function savePatientAddressWithParametersSR1Formmvp03(addressline1, addressline2, town, county, postcode) {
  localStorage.setItem('hcpmvp03PatientAddressLine1', addressline1);
  localStorage.setItem('hcpmvp03PatientAddressLine2', addressline2);
  localStorage.setItem('hcpmvp03PatientAddressTown', town);
  localStorage.setItem('hcpmvp03PatientAddressCounty', county);
  localStorage.setItem('hcpmvp03PatientPostcode', postcode);
}
// Save patient's dob mvp03
function saveDOBSR1Formmvp03() {
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  localStorage.setItem('hcpmvp03DobDay', dobDay.value);
  localStorage.setItem('hcpmvp03DobMonth', dobMonth.value);
  localStorage.setItem('hcpmvp03DobYear', dobYear.value);
}
// Save patient's NIno mvp03
function savenniNoSR1Formmvp03() {
  let niNoinput = document.getElementById('niNoinput');
  localStorage.setItem('hcpmvp03NiNoinput', niNoinput.value);
}
// Save patient's Date since meeting Special Rules mvp03
function saveDateofSpecialRulesSR1Formmvp03() {
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  localStorage.setItem('hcpmvp03DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpmvp03DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpmvp03DateofSpecialRulesYear', dateofSpecialRulesYear.value);
}
// Save Diagnosis mvp03
function saveDiagnosisSR1Formmvp03() {
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  localStorage.setItem('hcpmvp03WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
}
// Save Date diagnosis mvp03
function saveDateDiagnosisSR1Formmvp03() {
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  localStorage.setItem('hcpmvp03DodDay', dodDay.value);
  localStorage.setItem('hcpmvp03DodMonth', dodMonth.value);
  localStorage.setItem('hcpmvp03DodYear', dodYear.value);
}
// Save Other Diagnosis mvp03
function saveOtherDiagnosisSR1Formmvp03() {
  let otherRelevantDiagnosisinput = document.getElementById('otherRelevantDiagnosisinput');
  localStorage.setItem('hcpmvp03OtherRelevantDiagnosisinput', otherRelevantDiagnosisinput.value);
}
// Save Aware of Diagnosis mvp03
function saveAwareOfDiagnosisSR1Formmvp03() {
  localStorage.setItem('hcpmvp03AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpmvp03AwareOfDiagnosis', currentValueOfDiagnosis);
}
// Save Other Diagnosis mvp03
function saveAwareOfPrognosisSR1Formmvp03() {
  localStorage.setItem('hcpmvp03AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpmvp03AwareOfPrognosis', currentValueOfPrognosis);
}
// Save Clinical Features mvp03
function saveClinicalFeaturesSR1Formmvp03() {
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpmvp03DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
}
// Save Treatment mvp03
function saveTreatmentSR1Formmvp03() {
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpmvp03Treatment', treatment.value);
}

// ========================
// Save the whole SR1 form
// ========================

function saveAndContinueSR1Form() {

  // Patient details
  let PatientFullName = document.getElementById('PatientFullName');
  let PatientFirstName = document.getElementById('PatientFirstName');
  let PatientMiddleName = document.getElementById('PatientMiddleName');
  let PatientLastName = document.getElementById('PatientLastName');
  let patientaddressline1 = document.getElementById('patientaddressline1');
  let patientaddressline2 = document.getElementById('patientaddressline2');
  let patientaddresstown = document.getElementById('patientaddresstown');
  let patientPostcode = document.getElementById('patientPostcode');
  let dobDay = document.getElementById('dob-day');
  let dobMonth = document.getElementById('dob-month');
  let dobYear = document.getElementById('dob-year');
  let niNo = document.getElementById('niNo');
  let dateofSpecialRulesDay = document.getElementById('dateofSpecialRules-day');
  let dateofSpecialRulesMonth = document.getElementById('dateofSpecialRules-month');
  let dateofSpecialRulesYear = document.getElementById('dateofSpecialRules-year');
  // v01
  localStorage.setItem('hcpv01PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv01PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv01PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv01PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv01PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv01DobDay', dobDay.value);
  localStorage.setItem('hcpv01DobMonth', dobMonth.value);
  localStorage.setItem('hcpv01DobYear', dobYear.value);
  localStorage.setItem('hcpv01NiNo', niNo.value);
  localStorage.setItem('hcpv01DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv01DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv01DateofSpecialRulesYear', dateofSpecialRulesYear.value);
  // v02
  localStorage.setItem('hcpv02PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv02PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv02PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv02PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv02PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv02DobDay', dobDay.value);
  localStorage.setItem('hcpv02DobMonth', dobMonth.value);
  localStorage.setItem('hcpv02DobYear', dobYear.value);
  localStorage.setItem('hcpv02NiNo', niNo.value);
  localStorage.setItem('hcpv02DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv02DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv02DateofSpecialRulesYear', dateofSpecialRulesYear.value);
  // v03
  localStorage.setItem('hcpv03PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv03PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv03PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv03PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv03PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv03DobDay', dobDay.value);
  localStorage.setItem('hcpv03DobMonth', dobMonth.value);
  localStorage.setItem('hcpv03DobYear', dobYear.value);
  localStorage.setItem('hcpv03NiNo', niNo.value);
  localStorage.setItem('hcpv03DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv03DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv03DateofSpecialRulesYear', dateofSpecialRulesYear.value);
  // v04
  localStorage.setItem('hcpv04PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv04PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv04PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv04PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv04PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv04DobDay', dobDay.value);
  localStorage.setItem('hcpv04DobMonth', dobMonth.value);
  localStorage.setItem('hcpv04DobYear', dobYear.value);
  localStorage.setItem('hcpv04NiNo', niNo.value);
  localStorage.setItem('hcpv04DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv04DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv04DateofSpecialRulesYear', dateofSpecialRulesYear.value);
  // v05
  localStorage.setItem('hcpv05PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv05PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv05PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv05PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv05PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv05DobDay', dobDay.value);
  localStorage.setItem('hcpv05DobMonth', dobMonth.value);
  localStorage.setItem('hcpv05DobYear', dobYear.value);
  localStorage.setItem('hcpv05NiNo', niNo.value);
  localStorage.setItem('hcpv05DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv05DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv05DateofSpecialRulesYear', dateofSpecialRulesYear.value);
  // v08
  localStorage.setItem('hcpv06PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv06PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv06PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv06PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv06PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv06DobDay', dobDay.value);
  localStorage.setItem('hcpv06DobMonth', dobMonth.value);
  localStorage.setItem('hcpv06DobYear', dobYear.value);
  localStorage.setItem('hcpv06NiNo', niNo.value);
  localStorage.setItem('hcpv06DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv06DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv06DateofSpecialRulesYear', dateofSpecialRulesYear.value);
  // v07
  localStorage.setItem('hcpv07PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv07PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv07PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv07PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv07PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv07DobDay', dobDay.value);
  localStorage.setItem('hcpv07DobMonth', dobMonth.value);
  localStorage.setItem('hcpv07DobYear', dobYear.value);
  localStorage.setItem('hcpv07NiNo', niNo.value);
  localStorage.setItem('hcpv07DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv07DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv07DateofSpecialRulesYear', dateofSpecialRulesYear.value);
  // v08
  localStorage.setItem('hcpv08PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv08PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv08PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv08PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv08PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv08DobDay', dobDay.value);
  localStorage.setItem('hcpv08DobMonth', dobMonth.value);
  localStorage.setItem('hcpv08DobYear', dobYear.value);
  localStorage.setItem('hcpv08NiNo', niNo.value);
  localStorage.setItem('hcpv08DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv08DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv08DateofSpecialRulesYear', dateofSpecialRulesYear.value);
  // v09
  localStorage.setItem('hcpv09PatientFullName', PatientFullName.value);
  localStorage.setItem('hcpv09PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpv09PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpv09PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpv09PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpv07DobDay', dobDay.value);
  localStorage.setItem('hcpv09DobMonth', dobMonth.value);
  localStorage.setItem('hcpv09DobYear', dobYear.value);
  localStorage.setItem('hcpv09NiNo', niNo.value);
  localStorage.setItem('hcpv09DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpv09DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpv09DateofSpecialRulesYear', dateofSpecialRulesYear.value);
  // mvp01
  localStorage.setItem('hcpmvp01PatientFirstName', PatientFirstName.value);
  localStorage.setItem('hcpmvp01PatientLastName', PatientLastName.value);
  localStorage.setItem('hcpmvp01PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpmvp01PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpmvp01PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpmvp01PatientAddressCounty', patientaddresscounty.value);
  localStorage.setItem('hcpmvp01PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpmvp01DobDay', dobDay.value);
  localStorage.setItem('hcpmvp01DobMonth', dobMonth.value);
  localStorage.setItem('hcpmvp01DobYear', dobYear.value);
  localStorage.setItem('hcpmvp01NiNo', niNo.value);
  localStorage.setItem('hcpmvp01DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpmvp01DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpmvp01DateofSpecialRulesYear', dateofSpecialRulesYear.value);
  localStorage.setItem('hcpmvp01Firstname', yourFirstName.value);
  localStorage.setItem('hcpmvp01Lastname', yourLastName.value);
  localStorage.setItem('hcpmvp01Role', yourRole.value);
  localStorage.setItem('hcpmvp01ProfessionalRegistrationNumber', professionalRegNum.value);
  localStorage.setItem('hcpmvp01MobileNumber', mobileNumber.value);
  localStorage.setItem('hcpmvp01OrganisationAddressLine1', organisationAddressLine1.value);
  localStorage.setItem("hcpmvp01OrganisationName", organisationName.value);
  localStorage.setItem("hcpmvp01OrganisationAddressLine2", organisationAddressLine2.value);
  localStorage.setItem("hcpmvp01OrganisationAddressCounty", organisationAddressLine2.value);
  localStorage.setItem("hcpmvp01TownOrCity", organisationTownCity.value);
  localStorage.setItem("hcpmvp01Postcode", thePostcode.value);
  // mvp02
  localStorage.setItem('hcpmvp02PatientFirstName', PatientFirstName.value);
  localStorage.setItem('hcpmvp02PatientLastName', PatientLastName.value);
  localStorage.setItem('hcpmvp02PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpmvp02PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpmvp02PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpmvp02PatientAddressCounty', patientaddresscounty.value);
  localStorage.setItem('hcpmvp02PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpmvp02DobDay', dobDay.value);
  localStorage.setItem('hcpmvp02DobMonth', dobMonth.value);
  localStorage.setItem('hcpmvp02DobYear', dobYear.value);
  localStorage.setItem('hcpmvp02NiNo', niNo.value);
  localStorage.setItem('hcpmvp02DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpmvp02DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpmvp02DateofSpecialRulesYear', dateofSpecialRulesYear.value);
  localStorage.setItem('hcpmvp02Firstname', yourFirstName.value);
  localStorage.setItem('hcpmvp02Lastname', yourLastName.value);
  localStorage.setItem('hcpmvp02Role', yourRole.value);
  localStorage.setItem('hcpmvp02ProfessionalRegistrationNumber', professionalRegNum.value);
  localStorage.setItem('hcpmvp02MobileNumber', mobileNumber.value);
  localStorage.setItem('hcpmvp02OrganisationAddressLine1', organisationAddressLine1.value);
  localStorage.setItem("hcpmvp02OrganisationName", organisationName.value);
  localStorage.setItem("hcpmvp02OrganisationAddressLine2", organisationAddressLine2.value);
  localStorage.setItem("hcpmvp02OrganisationAddressCounty", organisationAddressLine2.value);
  localStorage.setItem("hcpmvp02TownOrCity", organisationTownCity.value);
  localStorage.setItem("hcpmvp02Postcode", thePostcode.value);
  // mvp03
  localStorage.setItem('hcpmvp03PatientFirstName', PatientFirstName.value);
  localStorage.setItem('hcpmvp03PatientLastName', PatientLastName.value);
  localStorage.setItem('hcpmvp03PatientAddressLine1', patientaddressline1.value);
  localStorage.setItem('hcpmvp03PatientAddressLine2', patientaddressline2.value);
  localStorage.setItem('hcpmvp03PatientAddressTown', patientaddresstown.value);
  localStorage.setItem('hcpmvp03PatientAddressCounty', patientaddresscounty.value);
  localStorage.setItem('hcpmvp03PatientPostcode', patientPostcode.value);
  localStorage.setItem('hcpmvp03DobDay', dobDay.value);
  localStorage.setItem('hcpmvp03DobMonth', dobMonth.value);
  localStorage.setItem('hcpmvp03DobYear', dobYear.value);
  localStorage.setItem('hcpmvp03NiNo', niNo.value);
  localStorage.setItem('hcpmvp03DateofSpecialRulesDay', dateofSpecialRulesDay.value);
  localStorage.setItem('hcpmvp03DateofSpecialRulesMonth', dateofSpecialRulesMonth.value);
  localStorage.setItem('hcpmvp03DateofSpecialRulesYear', dateofSpecialRulesYear.value);
  localStorage.setItem('hcpmvp03Firstname', yourFirstName.value);
  localStorage.setItem('hcpmvp03Lastname', yourLastName.value);
  localStorage.setItem('hcpmvp03Role', yourRole.value);
  localStorage.setItem('hcpmvp03ProfessionalRegistrationNumber', professionalRegNum.value);
  localStorage.setItem('hcpmvp03MobileNumber', mobileNumber.value);
  localStorage.setItem('hcpmvp03OrganisationAddressLine1', organisationAddressLine1.value);
  localStorage.setItem("hcpmvp03OrganisationName", organisationName.value);
  localStorage.setItem("hcpmvp03OrganisationAddressLine2", organisationAddressLine2.value);
  localStorage.setItem("hcpmvp03OrganisationAddressCounty", organisationAddressLine2.value);
  localStorage.setItem("hcpmvp03TownOrCity", organisationTownCity.value);
  localStorage.setItem("hcpmvp03Postcode", thePostcode.value);

  // Diagnosis
  let whatIsTheDiagnosis = document.getElementById('whatIsTheDiagnosis');
  let dodDay = document.getElementById('dod-day');
  let dodMonth = document.getElementById('dod-month');
  let dodYear = document.getElementById('dod-year');
  let otherRelevantDiagnosis = document.getElementById('otherRelevantDiagnosis');
  // v01
  localStorage.setItem('hcpv01WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv01DodDay', dodDay.value);
  localStorage.setItem('hcpv01DodMonth', dodMonth.value);
  localStorage.setItem('hcpv01DodYear', dodYear.value);
  localStorage.setItem('hcpv01OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv01AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv01AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpv01AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv01AwareOfPrognosis', currentValueOfPrognosis);
  // v02
  localStorage.setItem('hcpv02WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv02DodDay', dodDay.value);
  localStorage.setItem('hcpv02DodMonth', dodMonth.value);
  localStorage.setItem('hcpv02DodYear', dodYear.value);
  localStorage.setItem('hcpv02OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv02AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv02AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpv02AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv02AwareOfPrognosis', currentValueOfPrognosis);
  // v03
  localStorage.setItem('hcpv03WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv03DodDay', dodDay.value);
  localStorage.setItem('hcpv03DodMonth', dodMonth.value);
  localStorage.setItem('hcpv03DodYear', dodYear.value);
  localStorage.setItem('hcpv03OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv03AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv03AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpv03AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv03AwareOfPrognosis', currentValueOfPrognosis);
  // v04
  localStorage.setItem('hcpv04WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv04DodDay', dodDay.value);
  localStorage.setItem('hcpv04DodMonth', dodMonth.value);
  localStorage.setItem('hcpv04DodYear', dodYear.value);
  localStorage.setItem('hcpv04OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv04AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv04AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpv04AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv04AwareOfPrognosis', currentValueOfPrognosis);
  // v05
  localStorage.setItem('hcpv05WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv05DodDay', dodDay.value);
  localStorage.setItem('hcpv05DodMonth', dodMonth.value);
  localStorage.setItem('hcpv05DodYear', dodYear.value);
  localStorage.setItem('hcpv05OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv05AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv05AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpv05AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv05AwareOfPrognosis', currentValueOfPrognosis);
  // v06
  localStorage.setItem('hcpv06WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv06DodDay', dodDay.value);
  localStorage.setItem('hcpv06DodMonth', dodMonth.value);
  localStorage.setItem('hcpv06DodYear', dodYear.value);
  localStorage.setItem('hcpv06OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv06AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv06AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpv06AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv06AwareOfPrognosis', currentValueOfPrognosis);
  // v07
  localStorage.setItem('hcpv07WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv07DodDay', dodDay.value);
  localStorage.setItem('hcpv07DodMonth', dodMonth.value);
  localStorage.setItem('hcpv07DodYear', dodYear.value);
  localStorage.setItem('hcpv07OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv07AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv07AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpv07AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv07AwareOfPrognosis', currentValueOfPrognosis);
  // v08
  localStorage.setItem('hcpv08WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv08DodDay', dodDay.value);
  localStorage.setItem('hcpv08DodMonth', dodMonth.value);
  localStorage.setItem('hcpv08DodYear', dodYear.value);
  localStorage.setItem('hcpv08OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv08AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv08AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpv08AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv08AwareOfPrognosis', currentValueOfPrognosis);
  // v09
  localStorage.setItem('hcpv09WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpv09DodDay', dodDay.value);
  localStorage.setItem('hcpv09DodMonth', dodMonth.value);
  localStorage.setItem('hcpv09DodYear', dodYear.value);
  localStorage.setItem('hcpv09OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpv09AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv09AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpv09AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpv09AwareOfPrognosis', currentValueOfPrognosis);
  // mvp01
  localStorage.setItem('hcpmvp01WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpmvp01DodDay', dodDay.value);
  localStorage.setItem('hcpmvp01DodMonth', dodMonth.value);
  localStorage.setItem('hcpmvp01DodYear', dodYear.value);
  localStorage.setItem('hcpmvp01OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpmvp01AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpmvp01AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpmvp01AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpmvp01AwareOfPrognosis', currentValueOfPrognosis);
  // mvp02
  localStorage.setItem('hcpmvp02WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpmvp02DodDay', dodDay.value);
  localStorage.setItem('hcpmvp02DodMonth', dodMonth.value);
  localStorage.setItem('hcpmvp02DodYear', dodYear.value);
  localStorage.setItem('hcpmvp02OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpmvp02AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpmvp02AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpmvp02AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpmvp02AwareOfPrognosis', currentValueOfPrognosis);
  // mvp03
  localStorage.setItem('hcpmvp03WhatIsTheDiagnosis', whatIsTheDiagnosis.value);
  localStorage.setItem('hcpmvp03DodDay', dodDay.value);
  localStorage.setItem('hcpmvp03DodMonth', dodMonth.value);
  localStorage.setItem('hcpmvp03DodYear', dodYear.value);
  localStorage.setItem('hcpmvp03OtherRelevantDiagnosis', otherRelevantDiagnosis.value);
  localStorage.setItem('hcpmvp03AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpmvp03AwareOfPrognosis', currentValueOfPrognosis);
  localStorage.setItem('hcpmvp03AwareOfDiagnosis', currentValueOfDiagnosis);
  localStorage.setItem('hcpmvp03AwareOfPrognosis', currentValueOfPrognosis);

  // Clinical features
  let detailsOfClinicalFeatures = document.getElementById('detailsOfClinicalFeatures');
  localStorage.setItem('hcpv01DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  localStorage.setItem('hcpv02DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  localStorage.setItem('hcpv03DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  localStorage.setItem('hcpv04DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  localStorage.setItem('hcpv05DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  localStorage.setItem('hcpv06DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  localStorage.setItem('hcpv07DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  localStorage.setItem('hcpv08DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  localStorage.setItem('hcpv09DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  localStorage.setItem('hcpmvp01DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  localStorage.setItem('hcpmvp02DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  localStorage.setItem('hcpmvp03DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);
  localStorage.setItem('hcpbeta01DetailsOfClinicalFeatures', detailsOfClinicalFeatures.value);

  // Treatment
  let treatment = document.getElementById('treatment');
  localStorage.setItem('hcpv01Treatment', treatment.value);
  localStorage.setItem('hcpv02Treatment', treatment.value);
  localStorage.setItem('hcpv03Treatment', treatment.value);
  localStorage.setItem('hcpv04Treatment', treatment.value);
  localStorage.setItem('hcpv05Treatment', treatment.value);
  localStorage.setItem('hcpv06Treatment', treatment.value);
  localStorage.setItem('hcpv07Treatment', treatment.value);
  localStorage.setItem('hcpv08Treatment', treatment.value);
  localStorage.setItem('hcpv09Treatment', treatment.value);
  localStorage.setItem('hcpmvp01Treatment', treatment.value);
  localStorage.setItem('hcpmvp02Treatment', treatment.value);
  localStorage.setItem('hcpmvp03Treatment', treatment.value);
  localStorage.setItem('hcpbeta01Treatment', treatment.value);

  // Do we want to resave or just show the profile details from this form page on the check your answers page?
  // Just take what's on the form and show it on the check your answers - User's details should not save complete
  let yourFullName = document.getElementById('yourFullName');
  let mobileNumber = document.getElementById('mobileNumber');
  let organisationName = document.getElementById('organisationName');
  let organisationAddressLine1 = document.getElementById('organisationAddressLine1');
  let organisationAddressLine2 = document.getElementById('organisationAddressLine2');
  let townOrCity = document.getElementById('townOrCity');
  let thePostcode = document.getElementById('thePostcode');
  // v01
  localStorage.setItem("hcpv01Fullname", yourFullName.value);
  localStorage.setItem("hcpv01MobileNumber", mobileNumber.value);
  localStorage.setItem("hcpv01OrganisationName", organisationName.value);
  localStorage.setItem("hcpv01OrganisationAddressLine1", organisationAddressLine1.value);
  localStorage.setItem("hcpv01OrganisationAddressLine2", organisationAddressLine2.value);
  localStorage.setItem("hcpv01TownOrCity", townOrCity.value);
  localStorage.setItem("hcpv01Postcode", thePostcode.value);
  // v02
  localStorage.setItem("hcpv02Fullname", yourFullName.value);
  localStorage.setItem("hcpv02MobileNumber", mobileNumber.value);
  localStorage.setItem("hcpv02OrganisationName", organisationName.value);
  localStorage.setItem("hcpv02OrganisationAddressLine1", organisationAddressLine1.value);
  localStorage.setItem("hcpv02OrganisationAddressLine2", organisationAddressLine2.value);
  localStorage.setItem("hcpv02TownOrCity", townOrCity.value);
  localStorage.setItem("hcpv02Postcode", thePostcode.value);
  // v03
  localStorage.setItem("hcpv03Fullname", yourFullName.value);
  localStorage.setItem("hcpv03MobileNumber", mobileNumber.value);
  localStorage.setItem("hcpv03OrganisationName", organisationName.value);
  localStorage.setItem("hcpv03OrganisationAddressLine1", organisationAddressLine1.value);
  localStorage.setItem("hcpv03OrganisationAddressLine2", organisationAddressLine2.value);
  localStorage.setItem("hcpv03TownOrCity", townOrCity.value);
  localStorage.setItem("hcpv03Postcode", thePostcode.value);
  // v04
  localStorage.setItem("hcpv04Fullname", yourFullName.value);
  localStorage.setItem("hcpv04MobileNumber", mobileNumber.value);
  localStorage.setItem("hcpv04OrganisationName", organisationName.value);
  localStorage.setItem("hcpv04OrganisationAddressLine1", organisationAddressLine1.value);
  localStorage.setItem("hcpv04OrganisationAddressLine2", organisationAddressLine2.value);
  localStorage.setItem("hcpv04TownOrCity", townOrCity.value);
  localStorage.setItem("hcpv04Postcode", thePostcode.value);
  // mvp05
  localStorage.setItem("hcpv05Fullname", yourFullName.value);
  localStorage.setItem("hcpv05MobileNumber", mobileNumber.value);
  localStorage.setItem("hcpv05OrganisationName", organisationName.value);
  localStorage.setItem("hcpv05OrganisationAddressLine1", organisationAddressLine1.value);
  localStorage.setItem("hcpv05OrganisationAddressLine2", organisationAddressLine2.value);
  localStorage.setItem("hcpv05TownOrCity", townOrCity.value);
  localStorage.setItem("hcpv05Postcode", thePostcode.value);
  // mvp06
  localStorage.setItem("hcpv06Fullname", yourFullName.value);
  localStorage.setItem("hcpv06MobileNumber", mobileNumber.value);
  localStorage.setItem("hcpv06OrganisationName", organisationName.value);
  localStorage.setItem("hcpv06OrganisationAddressLine1", organisationAddressLine1.value);
  localStorage.setItem("hcpv06OrganisationAddressLine2", organisationAddressLine2.value);
  localStorage.setItem("hcpv06TownOrCity", townOrCity.value);
  localStorage.setItem("hcpv06Postcode", thePostcode.value);
  // mvp07
  localStorage.setItem("hcpv07Fullname", yourFullName.value);
  localStorage.setItem("hcpv07MobileNumber", mobileNumber.value);
  localStorage.setItem("hcpv07OrganisationName", organisationName.value);
  localStorage.setItem("hcpv07OrganisationAddressLine1", organisationAddressLine1.value);
  localStorage.setItem("hcpv07OrganisationAddressLine2", organisationAddressLine2.value);
  localStorage.setItem("hcpv07TownOrCity", townOrCity.value);
  localStorage.setItem("hcpv07Postcode", thePostcode.value);
  // mvp08
  localStorage.setItem("hcpv08Fullname", yourFullName.value);
  localStorage.setItem("hcpv08MobileNumber", mobileNumber.value);
  localStorage.setItem("hcpv08OrganisationName", organisationName.value);
  localStorage.setItem("hcpv08OrganisationAddressLine1", organisationAddressLine1.value);
  localStorage.setItem("hcpv08OrganisationAddressLine2", organisationAddressLine2.value);
  localStorage.setItem("hcpv08TownOrCity", townOrCity.value);
  localStorage.setItem("hcpv08Postcode", thePostcode.value);
  // mvp09
  localStorage.setItem("hcpv09Fullname", yourFullName.value);
  localStorage.setItem("hcpv09MobileNumber", mobileNumber.value);
  localStorage.setItem("hcpv09OrganisationName", organisationName.value);
  localStorage.setItem("hcpv09OrganisationAddressLine1", organisationAddressLine1.value);
  localStorage.setItem("hcpv09OrganisationAddressLine2", organisationAddressLine2.value);
  localStorage.setItem("hcpv09TownOrCity", townOrCity.value);
  localStorage.setItem("hcpv09Postcode", thePostcode.value);
  // mvp01
  localStorage.setItem("hcpmvp01Firstname", yourFirstName.value);
  localStorage.setItem("hcpmvp01Lastname", yourLastName.value);
  localStorage.setItem("hcpmvp01MobileNumber", mobileNumber.value);
  localStorage.setItem("hcpmvp01OrganisationName", organisationName.value);
  localStorage.setItem("hcpmvp01OrganisationAddressLine1", organisationAddressLine1.value);
  localStorage.setItem("hcpmvp01OrganisationAddressLine2", organisationAddressLine2.value);
  localStorage.setItem("hcpmvp01OrganisationAddressCounty", organisationAddressCounty.value);
  localStorage.setItem("hcpmvp01TownOrCity", organisationTownCity.value);
  localStorage.setItem("hcpmvp01Postcode", thePostcode.value);
  localStorage.setItem("hcpmvp01Role", yourRole.value);
  // mvp02
  localStorage.setItem("hcpmvp02Firstname", yourFirstName.value);
  localStorage.setItem("hcpmvp02Lastname", yourLastName.value);
  localStorage.setItem("hcpmvp02MobileNumber", mobileNumber.value);
  localStorage.setItem("hcpmvp02OrganisationName", organisationName.value);
  localStorage.setItem("hcpmvp02OrganisationAddressLine1", organisationAddressLine1.value);
  localStorage.setItem("hcpmvp02OrganisationAddressLine2", organisationAddressLine2.value);
  localStorage.setItem("hcpmvp02OrganisationAddressCounty", organisationAddressCounty.value);
  localStorage.setItem("hcpmvp02TownOrCity", organisationTownCity.value);
  localStorage.setItem("hcpmvp02Postcode", thePostcode.value);
  localStorage.setItem("hcpmvp02Role", yourRole.value);
  // mvp03
  localStorage.setItem("hcpmvp03Firstname", yourFirstName.value);
  localStorage.setItem("hcpmvp03Lastname", yourLastName.value);
  localStorage.setItem("hcpmvp03MobileNumber", mobileNumber.value);
  localStorage.setItem("hcpmvp03OrganisationName", organisationName.value);
  localStorage.setItem("hcpmvp03OrganisationAddressLine1", organisationAddressLine1.value);
  localStorage.setItem("hcpmvp03OrganisationAddressLine2", organisationAddressLine2.value);
  localStorage.setItem("hcpmvp03OrganisationAddressCounty", organisationAddressCounty.value);
  localStorage.setItem("hcpmvp03TownOrCity", organisationTownCity.value);
  localStorage.setItem("hcpmvp03Postcode", thePostcode.value);
  localStorage.setItem("hcpmvp03Role", yourRole.value);
}

// ===================
// Comleted SR1 form
// ===================

function completedSR1Form() {
  // v01
  localStorage.removeItem("hcpv01PatientFullName");
  localStorage.removeItem("hcpv01DobDay");
  localStorage.removeItem("hcpv01DobMonth");
  localStorage.removeItem("hcpv01DobYear");
  localStorage.removeItem("hcpv01PatientAddressLine1");
  localStorage.removeItem("hcpv01PatientAddressLine2");
  localStorage.removeItem("hcpv01PatientAddressTown");
  localStorage.removeItem("hcpv01PatientPostcode");
  localStorage.removeItem("hcpv01NiNo");
  localStorage.removeItem("hcpv01DateofSpecialRulesDay");
  localStorage.removeItem("hcpv01DateofSpecialRulesMonth");
  localStorage.removeItem("hcpv01DateofSpecialRulesYear");
  localStorage.removeItem("hcpv01WhatIsTheDiagnosis");
  localStorage.removeItem("hcpv01OtherRelevantDiagnosis");
  localStorage.removeItem("hcpv01AwareOfDiagnosis");
  localStorage.removeItem("hcpv01AwareOfPrognosis");
  localStorage.removeItem("hcpv01DodDay");
  localStorage.removeItem("hcpv01DodMonth");
  localStorage.removeItem("hcpv01DodYear");
  localStorage.removeItem("hcpv01DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpv01Treatment");
  localStorage.removeItem("hcpv01ResendingSR1Form");
  // v02
  localStorage.removeItem("hcpv02PatientFullName");
  localStorage.removeItem("hcpv02DobDay");
  localStorage.removeItem("hcpv02DobMonth");
  localStorage.removeItem("hcpv02DobYear");
  localStorage.removeItem("hcpv02PatientAddressLine1");
  localStorage.removeItem("hcpv02PatientAddressLine2");
  localStorage.removeItem("hcpv02PatientAddressTown");
  localStorage.removeItem("hcpv02PatientPostcode");
  localStorage.removeItem("hcpv02NiNo");
  localStorage.removeItem("hcpv02DateofSpecialRulesDay");
  localStorage.removeItem("hcpv02DateofSpecialRulesMonth");
  localStorage.removeItem("hcpv02DateofSpecialRulesYear");
  localStorage.removeItem("hcpv02WhatIsTheDiagnosis");
  localStorage.removeItem("hcpv02OtherRelevantDiagnosis");
  localStorage.removeItem("hcpv02AwareOfDiagnosis");
  localStorage.removeItem("hcpv02AwareOfPrognosis");
  localStorage.removeItem("hcpv02DodDay");
  localStorage.removeItem("hcpv02DodMonth");
  localStorage.removeItem("hcpv02DodYear");
  localStorage.removeItem("hcpv02DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpv02Treatment");
  localStorage.removeItem("hcpv02ResendingSR1Form");
  // v03
  localStorage.removeItem("hcpv03PatientFullName");
  localStorage.removeItem("hcpv03DobDay");
  localStorage.removeItem("hcpv03DobMonth");
  localStorage.removeItem("hcpv03DobYear");
  localStorage.removeItem("hcpv03PatientAddressLine1");
  localStorage.removeItem("hcpv03PatientAddressLine2");
  localStorage.removeItem("hcpv03PatientAddressTown");
  localStorage.removeItem("hcpv03PatientPostcode");
  localStorage.removeItem("hcpv03NiNo");
  localStorage.removeItem("hcpv03DateofSpecialRulesDay");
  localStorage.removeItem("hcpv03DateofSpecialRulesMonth");
  localStorage.removeItem("hcpv03DateofSpecialRulesYear");
  localStorage.removeItem("hcpv03WhatIsTheDiagnosis");
  localStorage.removeItem("hcpv03OtherRelevantDiagnosis");
  localStorage.removeItem("hcpv03AwareOfDiagnosis");
  localStorage.removeItem("hcpv03AwareOfPrognosis");
  localStorage.removeItem("hcpv03DodDay");
  localStorage.removeItem("hcpv03DodMonth");
  localStorage.removeItem("hcpv03DodYear");
  localStorage.removeItem("hcpv03DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpv03Treatment");
  localStorage.removeItem("hcpv03ResendingSR1Form");
  // v04
  localStorage.removeItem("hcpv04PatientFullName");
  localStorage.removeItem("hcpv04DobDay");
  localStorage.removeItem("hcpv04DobMonth");
  localStorage.removeItem("hcpv04DobYear");
  localStorage.removeItem("hcpv04PatientAddressLine1");
  localStorage.removeItem("hcpv04PatientAddressLine2");
  localStorage.removeItem("hcpv04PatientAddressTown")
  localStorage.removeItem("hcpv04PatientPostcode");
  localStorage.removeItem("hcpv04NiNo");
  localStorage.removeItem("hcpv04DateofSpecialRulesDay");
  localStorage.removeItem("hcpv04DateofSpecialRulesMonth");
  localStorage.removeItem("hcpv04DateofSpecialRulesYear");
  localStorage.removeItem("hcpv04WhatIsTheDiagnosis");
  localStorage.removeItem("hcpv04OtherRelevantDiagnosis");
  localStorage.removeItem("hcpv04AwareOfDiagnosis");
  localStorage.removeItem("hcpv04AwareOfPrognosis");
  localStorage.removeItem("hcpv04DodDay");
  localStorage.removeItem("hcpv04DodMonth");
  localStorage.removeItem("hcpv04DodYear");
  localStorage.removeItem("hcpv04DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpv04Treatment");
  localStorage.removeItem("hcpv04ResendingSR1Form");
  // v05
  localStorage.removeItem("hcpv05PatientFullName");
  localStorage.removeItem("hcpv05DobDay");
  localStorage.removeItem("hcpv05DobMonth");
  localStorage.removeItem("hcpv05DobYear");
  localStorage.removeItem("hcpv05PatientAddressLine1");
  localStorage.removeItem("hcpv05PatientAddressLine2");
  localStorage.removeItem("hcpv05PatientAddressTown")
  localStorage.removeItem("hcpv05PatientPostcode");
  localStorage.removeItem("hcpv05NiNo");
  localStorage.removeItem("hcpv05DateofSpecialRulesDay");
  localStorage.removeItem("hcpv05DateofSpecialRulesMonth");
  localStorage.removeItem("hcpv05DateofSpecialRulesYear");
  localStorage.removeItem("hcpv05WhatIsTheDiagnosis");
  localStorage.removeItem("hcpv05OtherRelevantDiagnosis");
  localStorage.removeItem("hcpv05AwareOfDiagnosis");
  localStorage.removeItem("hcpv05AwareOfPrognosis");
  localStorage.removeItem("hcpv05DodDay");
  localStorage.removeItem("hcpv05DodMonth");
  localStorage.removeItem("hcpv05DodYear");
  localStorage.removeItem("hcpv05DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpv05Treatment");
  localStorage.removeItem("hcpv05ResendingSR1Form");
  // v06
  localStorage.removeItem("hcpv06PatientFullName");
  localStorage.removeItem("hcpv06DobDay");
  localStorage.removeItem("hcpv06DobMonth");
  localStorage.removeItem("hcpv06DobYear");
  localStorage.removeItem("hcpv06PatientAddressLine1");
  localStorage.removeItem("hcpv06PatientAddressLine2");
  localStorage.removeItem("hcpv06PatientAddressTown")
  localStorage.removeItem("hcpv06PatientPostcode");
  localStorage.removeItem("hcpv06NiNo");
  localStorage.removeItem("hcpv06DateofSpecialRulesDay");
  localStorage.removeItem("hcpv06DateofSpecialRulesMonth");
  localStorage.removeItem("hcpv06DateofSpecialRulesYear");
  localStorage.removeItem("hcpv06WhatIsTheDiagnosis");
  localStorage.removeItem("hcpv06OtherRelevantDiagnosis");
  localStorage.removeItem("hcpv06AwareOfDiagnosis");
  localStorage.removeItem("hcpv06AwareOfPrognosis");
  localStorage.removeItem("hcpv06DodDay");
  localStorage.removeItem("hcpv06DodMonth");
  localStorage.removeItem("hcpv06DodYear");
  localStorage.removeItem("hcpv06DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpv06Treatment");
  localStorage.removeItem("hcpv06ResendingSR1Form");
  // v07
  localStorage.removeItem("hcpv07PatientFullName");
  localStorage.removeItem("hcpv07DobDay");
  localStorage.removeItem("hcpv07DobMonth");
  localStorage.removeItem("hcpv07DobYear");
  localStorage.removeItem("hcpv07PatientAddressLine1");
  localStorage.removeItem("hcpv07PatientAddressLine2");
  localStorage.removeItem("hcpv07PatientAddressTown");
  localStorage.removeItem("hcpv07PatientPostcode");
  localStorage.removeItem("hcpv07NiNo");
  localStorage.removeItem("hcpv07DateofSpecialRulesDay");
  localStorage.removeItem("hcpv07DateofSpecialRulesMonth");
  localStorage.removeItem("hcpv07DateofSpecialRulesYear");
  localStorage.removeItem("hcpv07WhatIsTheDiagnosis");
  localStorage.removeItem("hcpv07OtherRelevantDiagnosis");
  localStorage.removeItem("hcpv07AwareOfDiagnosis");
  localStorage.removeItem("hcpv07AwareOfPrognosis");
  localStorage.removeItem("hcpv07DodDay");
  localStorage.removeItem("hcpv07DodMonth");
  localStorage.removeItem("hcpv07DodYear");
  localStorage.removeItem("hcpv07DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpv07Treatment");
  localStorage.removeItem("hcpv07ResendingSR1Form");
  // v08
  localStorage.removeItem("hcpv08PatientFullName");
  localStorage.removeItem("hcpv08DobDay");
  localStorage.removeItem("hcpv08DobMonth");
  localStorage.removeItem("hcpv08DobYear");
  localStorage.removeItem("hcpv08PatientAddressLine1");
  localStorage.removeItem("hcpv08PatientAddressLine2");
  localStorage.removeItem("hcpv08PatientAddressTown");
  localStorage.removeItem("hcpv08PatientPostcode");
  localStorage.removeItem("hcpv08NiNo");
  localStorage.removeItem("hcpv08DateofSpecialRulesDay");
  localStorage.removeItem("hcpv08DateofSpecialRulesMonth");
  localStorage.removeItem("hcpv08DateofSpecialRulesYear");
  localStorage.removeItem("hcpv08WhatIsTheDiagnosis");
  localStorage.removeItem("hcpv08OtherRelevantDiagnosis");
  localStorage.removeItem("hcpv08AwareOfDiagnosis");
  localStorage.removeItem("hcpv08AwareOfPrognosis");
  localStorage.removeItem("hcpv08DodDay");
  localStorage.removeItem("hcpv08DodMonth");
  localStorage.removeItem("hcpv08DodYear");
  localStorage.removeItem("hcpv08DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpv08Treatment");
  localStorage.removeItem("hcpv08ResendingSR1Form");
  // v09
  localStorage.removeItem("hcpv09PatientFullName");
  localStorage.removeItem("hcpv09DobDay");
  localStorage.removeItem("hcpv09DobMonth");
  localStorage.removeItem("hcpv09DobYear");
  localStorage.removeItem("hcpv09PatientAddressLine1");
  localStorage.removeItem("hcpv09PatientAddressLine2");
  localStorage.removeItem("hcpv09PatientAddressTown");
  localStorage.removeItem("hcpv09PatientPostcode");
  localStorage.removeItem("hcpv09NiNo");
  localStorage.removeItem("hcpv09DateofSpecialRulesDay");
  localStorage.removeItem("hcpv09DateofSpecialRulesMonth");
  localStorage.removeItem("hcpv09DateofSpecialRulesYear");
  localStorage.removeItem("hcpv09WhatIsTheDiagnosis");
  localStorage.removeItem("hcpv09OtherRelevantDiagnosis");
  localStorage.removeItem("hcpv09AwareOfDiagnosis");
  localStorage.removeItem("hcpv09AwareOfPrognosis");
  localStorage.removeItem("hcpv09DodDay");
  localStorage.removeItem("hcpv09DodMonth");
  localStorage.removeItem("hcpv09DodYear");
  localStorage.removeItem("hcpv09DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpv09Treatment");
  localStorage.removeItem("hcpv09ResendingSR1Form");
  // mvp01
  localStorage.removeItem("hcpmvp01PatientFirstName");
  localStorage.removeItem("hcpmvp01PatientLastName");
  localStorage.removeItem("hcpmvp01DobDay");
  localStorage.removeItem("hcpmvp01DobMonth");
  localStorage.removeItem("hcpmvp01DobYear");
  localStorage.removeItem("hcpmvp01PatientAddressLine1");
  localStorage.removeItem("hcpmvp01PatientAddressLine2");
  localStorage.removeItem("hcpmvp01PatientAddressTown")
  localStorage.removeItem("hcpmvp01PatientAddressCounty")
  localStorage.removeItem("hcpmvp01PatientPostcode");
  localStorage.removeItem("hcpmvp01NiNo");
  localStorage.removeItem("hcpmvp01DateofSpecialRulesDay");
  localStorage.removeItem("hcpmvp01DateofSpecialRulesMonth");
  localStorage.removeItem("hcpmvp01DateofSpecialRulesYear");
  localStorage.removeItem("hcpmvp01WhatIsTheDiagnosis");
  localStorage.removeItem("hcpmvp01OtherRelevantDiagnosis");
  localStorage.removeItem("hcpmvp01AwareOfDiagnosis");
  localStorage.removeItem("hcpmvp01AwareOfPrognosis");
  localStorage.removeItem("hcpmvp01DodDay");
  localStorage.removeItem("hcpmvp01DodMonth");
  localStorage.removeItem("hcpmvp01DodYear");
  localStorage.removeItem("hcpmvp01DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpmvp01Treatment");
  localStorage.removeItem("hcpmvp01ResendingSR1Form");
  // mvp02
  localStorage.removeItem("hcpmvp02PatientFirstName");
  localStorage.removeItem("hcpmvp02PatientLastName");
  localStorage.removeItem("hcpmvp02DobDay");
  localStorage.removeItem("hcpmvp02DobMonth");
  localStorage.removeItem("hcpmvp02DobYear");
  localStorage.removeItem("hcpmvp02PatientAddressLine1");
  localStorage.removeItem("hcpmvp02PatientAddressLine2");
  localStorage.removeItem("hcpmvp02PatientAddressTown")
  localStorage.removeItem("hcpmvp02PatientAddressCounty")
  localStorage.removeItem("hcpmvp02PatientPostcode");
  localStorage.removeItem("hcpmvp02NiNo");
  localStorage.removeItem("hcpmvp02DateofSpecialRulesDay");
  localStorage.removeItem("hcpmvp02DateofSpecialRulesMonth");
  localStorage.removeItem("hcpmvp02DateofSpecialRulesYear");
  localStorage.removeItem("hcpmvp02WhatIsTheDiagnosis");
  localStorage.removeItem("hcpmvp02OtherRelevantDiagnosis");
  localStorage.removeItem("hcpmvp02AwareOfDiagnosis");
  localStorage.removeItem("hcpmvp02AwareOfPrognosis");
  localStorage.removeItem("hcpmvp02DodDay");
  localStorage.removeItem("hcpmvp02DodMonth");
  localStorage.removeItem("hcpmvp02DodYear");
  localStorage.removeItem("hcpmvp02DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpmvp02Treatment");
  localStorage.removeItem("hcpmvp02ResendingSR1Form");
  // mvp02
  localStorage.removeItem("hcpmvp03PatientFirstName");
  localStorage.removeItem("hcpmvp03PatientLastName");
  localStorage.removeItem("hcpmvp03PatientNameDefined");
  localStorage.removeItem("hcpmvp03DobDay");
  localStorage.removeItem("hcpmvp03DobMonth");
  localStorage.removeItem("hcpmvp03DobYear");
  localStorage.removeItem("hcpmvp03PatientAddressLine1");
  localStorage.removeItem("hcpmvp03PatientAddressLine2");
  localStorage.removeItem("hcpmvp03PatientAddressTown")
  localStorage.removeItem("hcpmvp03PatientAddressCounty")
  localStorage.removeItem("hcpmvp03PatientPostcode");
  localStorage.removeItem("hcpmvp03NiNo");
  localStorage.removeItem("hcpmvp03DateofSpecialRulesDay");
  localStorage.removeItem("hcpmvp03DateofSpecialRulesMonth");
  localStorage.removeItem("hcpmvp03DateofSpecialRulesYear");
  localStorage.removeItem("hcpmvp03WhatIsTheDiagnosis");
  localStorage.removeItem("hcpmvp03OtherRelevantDiagnosis");
  localStorage.removeItem("hcpmvp03OtherRelevantDiagnosisinput");
  localStorage.removeItem("hcpmvp03AwareOfDiagnosis");
  localStorage.removeItem("hcpmvp03AwareOfPrognosis");
  localStorage.removeItem("hcpmvp03DodDay");
  localStorage.removeItem("hcpmvp03DodMonth");
  localStorage.removeItem("hcpmvp03DodYear");
  localStorage.removeItem("hcpmvp03DetailsOfClinicalFeatures");
  localStorage.removeItem("hcpmvp03Treatment");
  localStorage.removeItem("hcpmvp03ResendingSR1Form");
}

// ========
// Cookies
// ========

function selectCookies() {
  document.getElementById('cookiesconfirm').classList.remove('hidden');
  document.getElementById('cookiesselection').classList.add('hidden');
}
function hideCookies() {
  document.getElementById('cookiesconfirm').classList.add('hidden');
}
function hideSelectCookies() {
  document.getElementById('cookiesselection').classList.add('hidden');
}

// ================
// Other functions
// ================

// Incomplete Prefilled form
function incompletePrefilledFormName(firstName, surname, daysToSubmit) {
  console.log('firstName', firstName);
  console.log('surname', surname);
  console.log('daysToSubmit', daysToSubmit);
  localStorage.setItem('pff_firstName', firstName);
  localStorage.setItem('pff_surname', surname);
  localStorage.setItem('pff_daysToSubmit', daysToSubmit);
}
// Complete Prefilled form
function completePrefilledFormName(firstName, surname, referenceNumber, dateSubmission) {
  console.log('firstName', firstName);
  console.log('surname', surname);
  console.log('referenceNumber', referenceNumber);
  console.log('dateSubmission', dateSubmission);
  localStorage.setItem('sentSR1_firstName', firstName);
  localStorage.setItem('sentSR1_surname', surname);
  localStorage.setItem('sentSR1_referenceNumber', referenceNumber);
  localStorage.setItem('pff_dateSubmission', dateSubmission);
}
//Resend form
function resendingSR1Form() {
  localStorage.setItem('hcpv01ResendingSR1Form', true);
  localStorage.setItem('hcpv02ResendingSR1Form', true);
  localStorage.setItem('hcpv03ResendingSR1Form', true);
  localStorage.setItem('hcpv04ResendingSR1Form', true);
  localStorage.setItem('hcpv05ResendingSR1Form', true);
  localStorage.setItem('hcpv06ResendingSR1Form', true);
  localStorage.setItem('hcpv07ResendingSR1Form', true);
  localStorage.setItem('hcpv08ResendingSR1Form', true);
  localStorage.setItem('hcpv09ResendingSR1Form', true);
  localStorage.setItem('hcpmvp01ResendingSR1Form', true);
  localStorage.setItem('hcpmvp02ResendingSR1Form', true);
  localStorage.setItem('hcpmvp03ResendingSR1Form', true);
  localStorage.setItem('hcpbeta01ResendingSR1Form', true);
}
//Clear search
function clearSearchTerms() {
  document.getElementById("searchField").value = "";
}
// ??
function isNumberKey(evt) {
  let charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
  return true;
}
// Store page
function storePage() {
  localStorage.setItem("completedFormBody", document.body.innerHTML);
}
// Print form
function printForm() {
  let completedFormBody = localStorage.getItem("completedFormBody");
  let myWindow = window.open('', 'PRINT', 'height=600,width=800');
  myWindow.document.write(completedFormBody);
  myWindow.document.close(); // necessary for IE >= 10
  myWindow.focus(); // necessary for IE >= 10*/
  myWindow.print();
  myWindow.close();
}

// ===================
// ARCHIVED PROTOTYPES
// ===================

// srel-branching-options

// Maximum number of chars for date field
function maxLengthCheck(object) {
  if (object.value.length > object.maxLength)
    object.value = object.value.slice(0, object.maxLength)
}

// Calculate the user's age
function getAge(dateString) {
  var dob = new Date(dateString);
  //calculate month difference from current date in time  
  var month_diff = Date.now() - dob.getTime();
  //convert the calculated difference in date format  
  var age_dt = new Date(month_diff);
  //extract year from date      
  var year = age_dt.getUTCFullYear();
  //now calculate the age of the user  
  var age = Math.abs(year - 1970);
  // Use the age
  if (consoleLogs) console.log('age', age);
  if (!age || age !== null || age !== NaN) {
    patientAge = age;
    localStorage.setItem('patientAge', patientAge);
    if (pageUrlPath === '/srel-branching-options/what-is-your-dob') {
      redirectApplicationType(patientAge);
    }
  } else {
    if (consoleLogs) console.log('Please check the date input fields and ensure you enter the correct date format, e.g. 12 12 1989');
  }
  return age;
}

// Get the user's DOB
function srelDobSubmitFn() {
  if (consoleLogs) console.log('get user\'s age range');
  const day = document.getElementById('dob-day').value;
  const month = document.getElementById('dob-month').value;
  const year = document.getElementById('dob-year').value;
  if (consoleLogs) console.log(day, month, year);
  localStorage.setItem('patientDob', day + '/' + month + '/' + year);
  getAge(year + '/' + month + '/' + day);
}

// Redirect the user once age has been determined for the correct application type
function redirectApplicationType(patientAge) {
  if (consoleLogs) console.log('patientAge', patientAge);
  if (patientAge < 16) {
    if (consoleLogs) console.log('Patient is under 16 ===> Apply for DLA-C');
    localStorage.setItem('applicationType', 'dlac');
    window.location.pathname = "/srel-branching-options/are-you-a-parent-guardian";
  } else if (patientAge >= 16 && patientAge < statePensionAge) {
    if (consoleLogs) console.log('Patient is over 16, but under state pension age ===> Apply for PIP');
    localStorage.setItem('applicationType', 'pip');
    window.location.pathname = "/srel-branching-options/who-is-applying";
  } else if (patientAge >= statePensionAge) {
    if (consoleLogs) console.log('Patient over state pension age ===> Apply for AA');
    localStorage.setItem('applicationType', 'aa');
    window.location.pathname = "/srel-branching-options/who-is-applying";
  } else {
    if (consoleLogs) console.log('Please check the date input fields and ensure you enter the correct date format, for example 12 12 1989');
    localStorage.setItem('applicationType', '');
  }
}

// who is applying
let currentValueOfwhoIsApplying = 0;
function srelWhoIsApplyingFn(whoIsApplying) {
  currentValueOfwhoIsApplying = whoIsApplying.value;
  localStorage.setItem('whoIsApplying', currentValueOfwhoIsApplying);
  if (consoleLogs) console.log('Who is applying: ' + currentValueOfwhoIsApplying);
}

// national insurance number
function srelNationalInsuranceSubmitFn() {
  const retrievableNiNo = 'QQ123456C';
  const niNo = document.getElementById('national-insurance-number').value;
  localStorage.setItem('nationalInsuranceNo', niNo);
  const niNoCheck = document.getElementById('niNoCheck');
  const niNoFound = document.getElementById('niNoFound');
  const niNoNotFound = document.getElementById('niNoNotFound');
  const associatedNiNo = document.getElementsByClassName('associatedNiNo');
  if (retrievableNiNo === niNo) {
    if (consoleLogs) console.log('we have found your details');
    niNoCheck.setAttribute('hidden', true);
    niNoFound.removeAttribute('hidden');
    niNoNotFound.setAttribute('hidden', true);
    associatedNiNo[0].innerHTML = niNo;
  } else {
    if (consoleLogs) console.log('we could not find your details, please continue to apply');
    niNoCheck.setAttribute('hidden', true);
    niNoFound.setAttribute('hidden', true);
    niNoNotFound.removeAttribute('hidden');
    associatedNiNo[1].innerHTML = niNo;
  }
}

// Redirect the user to the prepopulated 'Check your answers' page
function srelNiNoFoundSubmitFn() {
  window.location.pathname = "/srel-branching-options/check-your-answers";
}

// Redirect the user to the page to add their details
function srelNiNoNotFoundSubmitFn() {
  window.location.pathname = "/srel-branching-options/what-is-your-name";
}

// national insurance number
function srelwhatIsTheNameFn() {
  const firstName = document.getElementById('first-name').value;
  const middleName = document.getElementById('middle-name').value;
  const surname = document.getElementById('surname').value;
  const otherName = document.getElementById('whatOtherNames').value;
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('middleName', middleName);
  localStorage.setItem('surname', surname);
  localStorage.setItem('otherName', otherName);
}
function srelOtherNameFn() {
  const otherNameExist = document.querySelector('input[name="otherNames"]:checked').value;
  if (consoleLogs) console.log('otherNameExist', otherNameExist);
  if (otherNameExist === "no") localStorage.removeItem('otherName');
}

// Address
function srelwhatIsTheAddressSubmitFn() {
}

// =======================
// Auth-Onboard-V01 
// =======================

// who is applying
let currentValueOfwhoIsApplyingAO = 0;
function aoWhoIsApplyingFn(whoIsApplying) {
  currentValueOfwhoIsApplyingAO = whoIsApplying.value;
  localStorage.setItem('aoWhoIsApplying', currentValueOfwhoIsApplyingAO);
  if (consoleLogs) console.log('Who is applying: ' + currentValueOfwhoIsApplyingAO);
}

// how do you know the applicant
let currentValueOfHowDoYouKnowTheApplicantAO = 0;
function aoHowDoYouKnowTheApplicantFn(howDoYouKnowTheApplicant) {
  currentValueOfHowDoYouKnowTheApplicantAO = howDoYouKnowTheApplicant.value;
  localStorage.setItem('aoHowDoYouKnowTheApplicant', currentValueOfHowDoYouKnowTheApplicantAO);
  if (consoleLogs) console.log('How do you know the applicant: ' + currentValueOfHowDoYouKnowTheApplicantAO);
}

// sign in
function signIn() {
  const signInEmail = document.getElementById('signin_email').value;
  const signInPassword = document.getElementById('signin_password').value;
  const signInBtn = document.getElementById('aoSignInBtn');
  const aoSignInRoute = document.getElementById('aoSignInRoute');
  if (signInEmail === 'jean.grey@email.com' && signInPassword === 'password123') {
    console.log('redirect to dashboard');
    if (localStorage.getItem('aoWhoIsApplying') === "Myself") {
      aoSignInRoute.setAttribute("action", "/auth-onboard-v01/dashboard/myself/identifying-you");
    } else {
      aoSignInRoute.setAttribute("action", "/auth-onboard-v01/dashboard/everything-else/");
    }
  } else {
    console.log('redirect to create an account page');
    aoSignInRoute.setAttribute("action", "/auth-onboard-v01/no-existing-account/");
  }
}

// enter confirmation code
function aoConfirmationCode() {
  const confirmationCodeInput = document.getElementById('confirmationCodeVal');
  const confirmationCodeRoute = document.getElementById('confirmationCodeRoute');
  const confirmationCodeErrorSummary = document.getElementById('confirmationCodeErrorSummary');
  const confirmationCodeValError = document.getElementById('confirmationCodeValError');
  if (confirmationCodeInput.value === 'JKRTGR') {
    confirmationCodeRoute.setAttribute("action", "/auth-onboard-v01/no-existing-account/email-verified")
  } else if (confirmationCodeInput.value === '') {
    confirmationCodeErrorSummary.classList.remove('hidden');
    confirmationCodeValError.classList.remove('hidden');
  } else {
    confirmationCodeRoute.setAttribute("action", "/auth-onboard-v01/no-existing-account/email-not-verified");
  }
}
function aoConfirmationCodeFn(event) {
  const confirmationCodeInput = document.getElementById('confirmationCodeVal');
  const confirmationCodeErrorSummary = document.getElementById('confirmationCodeErrorSummary');
  const confirmationCodeValError = document.getElementById('confirmationCodeValError');
  if (confirmationCodeInput.value === '') {
    event.preventDefault();
    confirmationCodeErrorSummary.classList.remove('hidden');
    confirmationCodeInput.classList.add('govuk-input--error');
    confirmationCodeValError.classList.remove('hidden');
  }
}

// identifying you
function aoIdentifyingYouFn(event) {
  const identifyingYouRoute = document.getElementById('identifyingYouRoute');
  const confirmationCodeErrorSummary = document.getElementById('confirmationCodeErrorSummary');
  const firstnameField = document.getElementById('firstnameField');
  const middlenameField = document.getElementById('middlenameField');
  const surnameField = document.getElementById('surnameField');
  const dobFields = document.getElementById('dobFields');
  const ninoField = document.getElementById('ninoField');
  const firstname = document.getElementById('firstname');
  const middlename = document.getElementById('middlename');
  const surname = document.getElementById('surname');
  const dobDay = document.getElementById('dob-day');
  const dobMonth = document.getElementById('dob-month');
  const dobYear = document.getElementById('dob-year');
  const nationalInsuranceNumber = document.getElementById('national-insurance-number');
  if ((firstname.value === 'Jean') &&
    (middlename.value === 'Elaine') &&
    (surname.value === 'Grey') &&
    ((dobDay.value === '1') || (dobDay.value === '01')) &&
    ((dobMonth.value === '9') || (dobMonth.value === '09')) &&
    (dobYear.value === '1963') &&
    (nationalInsuranceNumber.value === '12 34 56 78 XX')
  ) {
    console.log('This is Jean Grey');
    identifyingYouRoute.setAttribute("action", "/auth-onboard-v01/dashboard/myself/check-your-answers");
  } else if ((firstname.value === '') ||
    (middlename.value === '') ||
    (surname.value === '') ||
    (dobDay.value === '') ||
    (dobMonth.value === '') ||
    (dobYear.value === '') ||
    (nationalInsuranceNumber.value === '')
  ) {
    event.preventDefault();
    console.log('Show Error message that field(s) are blank');
    confirmationCodeErrorSummary.classList.remove('hidden');
    firstnameField.classList.add('govuk-form-group--error');
    middlenameField.classList.add('govuk-form-group--error');
    surnameField.classList.add('govuk-form-group--error');
    dobFields.classList.add('govuk-form-group--error');
    ninoField.classList.add('govuk-form-group--error');
    firstname.classList.add('govuk-input--error');
    middlename.classList.add('govuk-input--error');
    surname.classList.add('govuk-input--error');
    dobDay.classList.add('govuk-input--error');
    dobMonth.classList.add('govuk-input--error');
    dobYear.classList.add('govuk-input--error');
    nationalInsuranceNumber.classList.add('govuk-input--error');
  } else {
    console.log('This is NOT Jean Grey');
    identifyingYouRoute.setAttribute("action", "/auth-onboard-v01/dashboard/myself/no-existing-record/");
  }
}

//identifying-the-applicant
function aoIdentifyingTheApplicantFn(event) {
  const identifyingTheApplicantRoute = document.getElementById('identifyingTheApplicantRoute');
  const confirmationCodeErrorSummary = document.getElementById('confirmationCodeErrorSummary');
  const firstnameField = document.getElementById('firstnameField');
  const middlenameField = document.getElementById('middlenameField');
  const surnameField = document.getElementById('surnameField');
  const dobFields = document.getElementById('dobFields');
  const ninoField = document.getElementById('ninoField');
  const firstname = document.getElementById('firstname');
  const middlename = document.getElementById('middlename');
  const surname = document.getElementById('surname');
  const dobDay = document.getElementById('dob-day');
  const dobMonth = document.getElementById('dob-month');
  const dobYear = document.getElementById('dob-year');
  const nationalInsuranceNumber = document.getElementById('national-insurance-number');
  if ((firstname.value === 'Jean') &&
    (middlename.value === 'Elaine') &&
    (surname.value === 'Grey') &&
    ((dobDay.value === '1') || (dobDay.value === '01')) &&
    ((dobMonth.value === '9') || (dobMonth.value === '09')) &&
    (dobYear.value === '1963') &&
    (nationalInsuranceNumber.value === '12 34 56 78 XX')
  ) {
    console.log('This is Jean Grey');
    identifyingTheApplicantRoute.setAttribute("action", "/auth-onboard-v01/dashboard/everything-else/new-application/check-their-answers");
  } else if ((firstname.value === '') ||
    (middlename.value === '') ||
    (surname.value === '') ||
    (dobDay.value === '') ||
    (dobMonth.value === '') ||
    (dobYear.value === '') ||
    (nationalInsuranceNumber.value === '')
  ) {
    event.preventDefault();
    console.log('Show Error message that field(s) are blank');
    confirmationCodeErrorSummary.classList.remove('hidden');
    firstnameField.classList.add('govuk-form-group--error');
    middlenameField.classList.add('govuk-form-group--error');
    surnameField.classList.add('govuk-form-group--error');
    dobFields.classList.add('govuk-form-group--error');
    ninoField.classList.add('govuk-form-group--error');
    firstname.classList.add('govuk-input--error');
    middlename.classList.add('govuk-input--error');
    surname.classList.add('govuk-input--error');
    dobDay.classList.add('govuk-input--error');
    dobMonth.classList.add('govuk-input--error');
    dobYear.classList.add('govuk-input--error');
    nationalInsuranceNumber.classList.add('govuk-input--error');
  } else {
    console.log('This is NOT Jean Grey');
    identifyingTheApplicantRoute.setAttribute("action", "/auth-onboard-v01/dashboard/everything-else/new-application/need-to-complete-applicant-details");
  }
}