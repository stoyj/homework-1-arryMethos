// 5. Calculate the Weighted Average Duration
// Task: Use the popularity scores to calculate the weighted average duration of songs in the playlist.

// Function Signature:

// function weightedAverageDuration(playlist, popularity) {
//   // Your code here
// }
// Example Input:

// const playlist = [
//   { title: "Song A", duration: 3.5 },
//   { title: "Song B", duration: 4.2 },
//   { title: "Song C", duration: 5.1 },
//   { title: "Song D", duration: 2.8 }
// ];

// weightedSum = duration * popularity
// [90, 70, 80, 60] = totalWeight
// weightedSum / totalWeight
// const popularity = [90, 70, 80, 60]; // Corresponds to each song
// weightedAverageDuration(playlist, popularity);
// Example Output:

// 4.07 // Weighted average duration

function weightedAverageDuration(playlist, popularity) {
  let weightedSum = 0; // Претеглена сума
  let totalWeight = 0; // Общо тегло

  // Обхождаме всяка песен в плейлиста
  for (let i = 0; i < playlist.length; i++) {
    weightedSum += playlist[i].duration * popularity[i]; // Добавяме продължителност * популярност
    totalWeight += popularity[i]; // Добавяме популярността към общото тегло
  }

  // Изчисляваме претеглената средна стойност
  const weightedAverage = weightedSum / totalWeight;

  return weightedAverage; // Връщаме резултата
}

// Примерен вход:
const playlist = [
  { title: "Song A", duration: 3.5 },
  { title: "Song B", duration: 4.2 },
  { title: "Song C", duration: 5.1 },
  { title: "Song D", duration: 2.8 },
];

const popularity = [90, 70, 80, 60]; // Популярност на всяка песен

// Извикваме функцията:
const result = weightedAverageDuration(playlist, popularity);

// Изход:
console.log(result); // 4.07
