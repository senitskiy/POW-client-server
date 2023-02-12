// Here is an example of a proof-of-work algorithm in Javascript.
import CryptoJS from 'crypto-js'
// Initialize our variables
var difficulty = 5; // Difficulty can be set to any number
var nonce = 0;

// Generate a random string to hash
var randomString = Math.random().toString(36).slice(2);

// Keep incrementing the nonce until we have a hash that meets the difficulty criteria

const pow = () => {
  while (true) {
    // Hash our randomString and the nonce
    var result = CryptoJS.SHA256(randomString + nonce).toString();
    //Check to see if our hash result meets the difficulty criteria
    if (result.substring(0, difficulty) == Array(difficulty + 1).join("0")) {
      // If it does, we have solved the proof of work and can break out of the loop
      console.log("Proof of work solved: " + result);
      break;
    }
    // If it doesn't, increment nonce and try again
    nonce++;
  }
  return true
}

export default pow