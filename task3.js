// 3. Group Songs by Duration
// Task: Write a function to group songs into categories:

// Short: Less than 3 minutes
// Medium: 3 to 5 minutes
// Long: More than 5 minutes
// Function Signature:

// function groupSongsByDuration(playlist) {
//   // Your code here
// }
// Example Input:

// const playlist = [
//   { title: "Song A", duration: 3.5 },
//   { title: "Song B", duration: 4.2 },
//   { title: "Song C", duration: 5.1 },
//   { title: "Song D", duration: 2.8 }
// ];
// groupSongsByDuration(playlist);
// Example Output:

// {
//   short: ["Song D"],
//   medium: ["Song A", "Song B"],
//   long: ["Song C"]
// }

function groupSongsByDuration(playlist) {
  // Създаваме обект за групиране на песните
  const groups = {
    short: [],
    medium: [],
    long: [],
  };

  // Обхождаме всяка песен в плейлиста
  playlist.forEach((song) => {
    if (song.duration < 3) {
      groups.short.push(song.title); // Добавяме към "short"
    } else if (song.duration <= 5) {
      groups.medium.push(song.title); // Добавяме към "medium"
    } else {
      groups.long.push(song.title); // Добавяме към "long"
    }
  });
  return groups;
}

const playlist = [
  { title: "Song A", duration: 3.5 },
  { title: "Song B", duration: 4.2 },
  { title: "Song C", duration: 5.1 },
  { title: "Song D", duration: 2.8 },
];

const result = groupSongsByDuration(playlist);
console.log(result); // short: ["Song D"], medium: ["Song A", "Song B"], long: ["Song C"];
