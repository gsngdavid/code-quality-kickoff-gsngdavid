/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  if(password === 'null' || password.trim() === '') return 0;

  // Try to get an array of all consecutive characters
  const matches = password.match(/(.)\1+/g);
  if(!matches) return 0;

  // Give points depending on the number of characters in an element
  return matches.reduce((points, cur) => points + (cur.length > 2 ? 2 : 1), 0);
}
