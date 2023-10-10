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

  // if password includes forbidden passwords mark it invalid
  if(forbiddenPasswords.includes(password)) return false;

  // if password does not have at least 4 different characters markit invalid
  const setOfPassword = new Set(password);
  if (setOfPassword.size < 4) return false;

  const numberPassword = password.replace(/\D+/g, ' ').split(' ');
  let invalidSequence = false;

  // check for invalid sequence
  for(let number of numberPassword) {
    if(number.length >= 4 && !isNumberSame(number) && (number === asc(number) || number === desc(number))) {
      invalidSequence = true;
      break;
    }
  }

  // a password with a directly ascending/descending sequence of numbers is invalid
  if(!invalidSequence) {
    return /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])^[\dA-Za-z]{10}$/.test(password);
  }

  return false;
}