function getSighnup(request, response) {
  response.render('../views/customer/auth/signup')
}
function getLogin(request, response) {
  //... 
}
module.exports = {
  getSighnup: getSighnup,
  getLogin: getLogin
};