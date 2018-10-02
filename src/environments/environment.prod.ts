export let Api_Url = '';

switch (window.location.hostname) {
  case 'werzid-frontendangularapp.herokuapp.com':
    Api_Url += 'https://werzid.azurewebsites.net/';
    break;
  default:
    Api_Url += 'https://werzid.azurewebsites.net/';
}
export const environment = {
  production: true
};
