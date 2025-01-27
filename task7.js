// 7. Create a Perfect Loop Playlist
// Task: Write a function to add the first song as the last song with " (Reprise)" added to its title.

// Function Signature:

// function createLoopPlaylist(playlist) {
//   // Your code here
// }

// Example Input:

// const playlist = [
//   { title: "Song A", duration: 3.5 },
//   { title: "Song B", duration: 4.2 },
//   { title: "Song C", duration: 5.1 },
//   { title: "Song D", duration: 2.8 }
// ];

// createLoopPlaylist(playlist);
// Example Output:

// [
//   { title: "Song A", duration: 3.5 },
//   { title: "Song B", duration: 4.2 },
//   { title: "Song C", duration: 5.1 },
//   { title: "Song D", duration: 2.8 },
//   { title: "Song A (Reprise)", duration: 3.5 }
// ]

function createLoopPlaylist(playlist) {
  // Стъпка 1: Копирам  първата песен
  const firstSong = playlist[0];
  // Стъпка 2: Променям  заглавието на първата песен
  const repriseSong = {
    title: firstSong.title + "(Reprise)",
    duration: firstSong.duration,
  };

  // Стъпка 3: Добавям  песента с " (Reprise)" към края на плейлиста
  playlist.push(repriseSong);

  return playlist;
}

const playlist = [
  { title: "Song A", duration: 3.5 },
  { title: "Song B", duration: 4.2 },
  { title: "Song C", duration: 5.1 },
  { title: "Song D", duration: 2.8 },
];

const result = createLoopPlaylist(playlist);

console.log(result);

// [
//   { title: "Song A", duration: 3.5 },
//   { title: "Song B", duration: 4.2 },
//   { title: "Song C", duration: 5.1 },
//   { title: "Song D", duration: 2.8 },
//   { title: "Song A (Reprise)", duration: 3.5 }
// ]
