// 1. Create a Non-Stop Road Trip Playlist
// Task: Write a function to extract a subset of songs that comes closest to exactly 15 minutes without exceeding it.

// Function Signature:

// function roadTripPlaylist(playlist, maxDuration) {
// Your code here
// }
// Example Input:

// const playlist = [
// { title: "Song A", duration: 3.5 },
// { title: "Song B", duration: 4.2 },
// { title: "Song C", duration: 5.1 },
// { title: "Song D", duration: 2.8 }
// ];
// roadTripPlaylist(playlist, 15);
// Example Output:

function roadTripPlaylist(playlist, maxDuration) {
  playlist.sort((a, b) => a.duration - b.duration);

  let selectedSongs = [];
  let totalTime = 0;

  for (let song of playlist) {
    if (totalTime + song.duration <= maxDuration) {
      selectedSongs.push(song);
      totalTime += song.duration;
    } else {
      break;
    }
  }
  return selectedSongs;
}

const playlist = [
  { title: "Song A", duration: 3.5 },
  { title: "Song B", duration: 4.2 },
  { title: "Song C", duration: 5.1 },
  { title: "Song D", duration: 2.8 },
];

const result = roadTripPlaylist(playlist, 15);
console.log(result);
