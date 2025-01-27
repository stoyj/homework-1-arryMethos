// 4. Create a DJ Playlist with Transitions
// Task: Write a function to append " - Transition" to the title of every song except the last one.

// Function Signature:

// function addTransitions(playlist) {
//   // Your code here
// }
// Example Input:

// const playlist = [
//   { title: "Song A", duration: 3.5 },
//   { title: "Song B", duration: 4.2 },
//   { title: "Song C", duration: 5.1 },
//   { title: "Song D", duration: 2.8 }
// ];
// addTransitions(playlist);
// Example Output:

// [
//   { title: "Song A - Transition", duration: 3.5 },
//   { title: "Song B - Transition", duration: 4.2 },
//   { title: "Song C - Transition", duration: 5.1 },
//   { title: "Song D", duration: 2.8 }
// ]

function addTransitions(playlist) {
  for (let i = 0; i < playlist.length - 1; i++) {
    playlist[i].title += "- Transition";
  }
  return playlist; // Връщаме обновения плейлист
}

// Примерен вход:
const playlist = [
  { title: "Song A", duration: 3.5 },
  { title: "Song B", duration: 4.2 },
  { title: "Song C", duration: 5.1 },
  { title: "Song D", duration: 2.8 },
];

// Извикваме функцията:
const updatedPlaylist = addTransitions(playlist);
console.log(updatedPlaylist);

// [
// { title: "Song A - Transition", duration: 3.5 },
// { title: "Song B - Transition", duration: 4.2 },
// { title: "Song C - Transition", duration: 5.1 },
// { title: "Song D", duration: 2.8 }
// ]
