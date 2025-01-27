// 6. Remove Overplayed Songs
// Task: Write a function to remove songs longer than 5 minutes and sort the remaining playlist by duration.

// Function Signature:

// function removeOverplayed(playlist, maxDuration) {
//   // Your code here
// }
// Example Input:

// const playlist = [
//   { title: "Song A", duration: 3.5 },
//   { title: "Song B", duration: 4.2 },
//   { title: "Song C", duration: 5.1 },
//   { title: "Song D", duration: 2.8 }
// ];

// removeOverplayed(playlist, 5);
// Example Output:

// [
//   { title: "Song D", duration: 2.8 },
//   { title: "Song A", duration: 3.5 },
//   { title: "Song B", duration: 4.2 }
// ]

function removeOverplayed(playlist, maxDuration) {
  // 1. Филтрирам песните, които са по-къси или равни на maxDuration
  const filteredPlaylist = playlist.filter(
    (song) => song.duration <= maxDuration
  );

  // 2. Сортирам останалите песни по продължителност
  const sortedPlaylist = filteredPlaylist.sort(
    (a, b) => a.duration - b.duration
  );

  // 3. Връщам резултата
  return sortedPlaylist;
}

// Примерен вход:
const playlist = [
  { title: "Song A", duration: 3.5 },
  { title: "Song B", duration: 4.2 },
  { title: "Song C", duration: 5.1 },
  { title: "Song D", duration: 2.8 },
];

// Извиквам функцията:
const result = removeOverplayed(playlist, 5);

// Изход:
console.log(result);
// Очакван резултат:
// [
//   { title: "Song D", duration: 2.8 },
//   { title: "Song A", duration: 3.5 },
//   { title: "Song B", duration: 4.2 }
// ]
