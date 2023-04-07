// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const nestedObj = {
  name: 'Nilesh Ramteke',
  company: 'Mastercard',
  address: { line: 'yerwada', building: 'Bussiness Bay' },
};

console.log('nestedObj = ' + JSON.stringify(nestedObj));

function flattenedObj(obj, parentKey = '') {
  let flatObj = {};
  for (let key in obj) {
    let dynamicKey = parentKey ? parentKey + '-' + key : key;
    if (typeof obj[key] === 'object') {
      Object.assign(flatObj, flattenedObj(flatObj, dynamicKey));
    } else {
      flatObj[dynamicKey] = obj[key];
    }
  }
  return flatObj;
}

let finalObj = flattenedObj(nestedObj);
console.log('finalObj = ' + JSON.stringify(finalObj));
