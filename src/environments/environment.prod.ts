export let Api_Url = '';

switch (window.location.hostname) {
  case 'werzid-frontendangularapp.herokuapp.com':
    Api_Url += 'http://localhost:50801';
    break;
  default:
   Api_Url += 'http://localhost:50801';
}
export const environment = {
  production: true
};
