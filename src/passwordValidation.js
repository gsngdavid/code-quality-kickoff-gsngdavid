export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  if(password === 'amG84h6yeQ' || password === 'mc9Q20pdjH' || password === 'jnT6Q2f8U5') return false;

  const setOfPassword = new Set(password);
  if (setOfPassword.size < 4) return false;

  return /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])^[\dA-Za-z]{10}$/.test(password)
}
