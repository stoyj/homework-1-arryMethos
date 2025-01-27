// 8. Build a Collaborative Playlist with Unique Songs
// Task: Merge two playlists and remove duplicates based on song titles.

// Function Signature:

// function mergePlaylists(playlist1, playlist2) {
//   // Your code here
// }

// Example Input:

// const playlist1 = [
//   { title: "Song A", duration: 3.5 },
//   { title: "Song B", duration: 4.2 }
// ];

// const playlist2 = [
//   { title: "Song A", duration: 3.5 },
//   { title: "Song C", duration: 5.1 },
//   { title: "Song D", duration: 2.8 }
// ];

// mergePlaylists(playlist1, playlist2);
// Example Output:

// [
//   { title: "Song A", duration: 3.5 },
//   { title: "Song B", duration: 4.2 },
//   { title: "Song C", duration: 5.1 },
//   { title: "Song D", duration: 2.8 }
// ]
function mergePlaylists(playlist1, playlist2) {
  // Стъпка 1: Обединявам двата плейлиста
  const mergedPlaylist = [...playlist1, ...playlist2];
  // Стъпка 2: Премахвам  дубликатите чрез филтриране на песните по заглавие
  const uniquerPlaylist = [];
  const seenTitles = new Set(); // Set ще ми помогне да следя заглавията

  for (const song of mergedPlaylist) {
    if (!seenTitles.has(song.title)) {
      uniquerPlaylist.push(song);
      seenTitles.add(song.title); // Добавям заглавието в Set
    }
  }
  return uniquerPlaylist;
}

const playlist1 = [
  { title: "Song A", duration: 3.5 },
  { title: "Song B", duration: 4.2 },
];

const playlist2 = [
  { title: "Song A", duration: 3.5 },
  { title: "Song C", duration: 5.1 },
  { title: "Song D", duration: 2.8 },
];

// Извиквам  функцията:
const result = mergePlaylists(playlist1, playlist2);

console.log(result);

// [
//   { title: "Song A", duration: 3.5 },
//   { title: "Song B", duration: 4.2 },
//   { title: "Song C", duration: 5.1 },
//   { title: "Song D", duration: 2.8 }
// ]
