import crypto from 'crypto'

// Create a pow function
function pow(challenge, difficulty) {
  let startTime = Date.now();
  let nonce = 0;
  let hash;
  let result;

// loop until the pow is solved
  while (true) {
    hash = crypto.createHash('sha256').update(challenge + nonce).digest('hex');
    result = hash.substr(0, difficulty);

    // if valid pow found
    if (result === '0'.repeat(difficulty)) {
        return { nonce, duration: Date.now() - startTime };
    }
    nonce++;
  }
}

// export pow function
export default pow;