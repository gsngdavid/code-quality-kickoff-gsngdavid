export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

const asc = str => str.split('').sort((a, b) => a - b).join('');
const desc = str => str.split('').sort((a, b) => b - a).join('');
const isNumberSame = password => /^(.)\1+$/.test(password);

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  if(forbiddenPasswords.includes(password)) return false;

  // if password does not have at least 4 different characters markit invalid
  const setOfPassword = new Set(password);
  if (setOfPassword.size < 4) return false;

  // Create an array containing numbers from the password
  const numberPasswords = password.replace(/\D+/g, ' ').split(' ');

  // check for invalid sequence
  for(let number of numberPasswords) {
    if(number.length < 3) continue;
    if(isNumberSame(number)) continue;
    if(number === asc(number)) return false;
    if(number === desc(number)) return false;
  }

  // Check if password contains at least one upper, lower and number character and also it is exactly 10 by length
  return /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])^[\dA-Za-z]{10}$/.test(password);
}