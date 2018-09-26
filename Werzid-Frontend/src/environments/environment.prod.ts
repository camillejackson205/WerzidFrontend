export let Api_Url = '';

switch (window.location.hostname) {
  case 'werzid-frontendangularapp.herokuapp.com':
    Api_Url += 'localhost:50801';
    break;
  default:
   Api_Url += 'localhost:50801';
}
export const environment = {
  production: true
};
