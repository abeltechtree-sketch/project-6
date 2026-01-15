const arrays = ["strength", "discipline", "focus", "growth", "consistency", "patience", "resilience", "success", "progress"];

// console.log(arrays);

// arrays.push("confidence");

// console.log([0]);
// tertiary oprater

// console.log(arrays[0]);

// for (let i = 0; i < arrays.length; i++ ){
//     arrays[i] = arrays[i].toUpperCase();
// }

const selectedWord = arrays[Math.floor(Math.random() * arrays.length)];
console.log(selectedWord);

const arraySelectedWord = selectedWord.split("");
console.log(arraySelectedWord);

const newSelectedWord = arraySelectedWord.join("");
console.log(newSelectedWord);