const adjectives = ['happy', 'sad', 'excited', 'calm', 'angry'];
const nouns = ['cat', 'dog', 'car', 'house', 'flower'];
const verbs = ['runs', 'eats', 'sleeps', 'jumps', 'laughs'];

function generateRandomMessage() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    
    return `The ${randomAdjective} ${randomNoun} ${randomVerb}.`;
  }
 
const randomMessage = generateRandomMessage();
console.log(randomMessage);
