let calculation = localStorage.getItem('calculation') || '';
const pElement = document.querySelector('.js-calculation');
pElement.innerHTML = eval(calculation) || '0';
function calculationFunc(value = '') {
  calculation += value;
  pElement.innerHTML = calculation;
  localStorage.setItem('calculation', calculation);

}
function evelCalculation() {
  calculation = eval(calculation);
  pElement.innerHTML = calculation;
  localStorage.setItem('calculation', eval(calculation));
}