export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

const asc = str => str.split('').sort((a, b) => a - b).join('');
const desc = str => str.split('').sort((a, b) => b - a).join('');

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // if password includes forbidden passwords mark it invalid
  if(password === 'amG84h6yeQ' || password === 'mc9Q20pdjH' || password === 'jnT6Q2f8U5') return false;

  // if password does not have at least 4 different characters markit invalid
  const setOfPassword = new Set(password);
  if (setOfPassword.size < 4) return false;

  const numberPassword = password.replace(/\D/g, '');
  const isNumbersSame = numberPassword.lastIndexOf(numberPassword.charAt(0)) <= 3;

  if( !(numberPassword.length > 4) && (isNumbersSame || (numberPassword !== asc(numberPassword) && numberPassword !== desc(numberPassword)))) {
    return /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])^[\dA-Za-z]{10}$/.test(password);
  }

  return false;
}