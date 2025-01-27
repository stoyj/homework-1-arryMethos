// 10. Generate a Karaoke-Ready Playlist
// Task: Add two new properties to each song:

// lyricsReady: true if the duration is more than 4 minutes, otherwise false.
// karaokeKey: A randomly generated 6-character string.
// Function Signature:

// function generateKaraokePlaylist(playlist) {
//   // Your code here
// }

// Example Input:

// const playlist = [
//   { title: "Song A", duration: 3.5 },
//   { title: "Song B", duration: 4.2 },
//   { title: "Song C", duration: 5.1 },
//   { title: "Song D", duration: 2.8 }
// ];

// generateKaraokePlaylist(playlist);
// Example Output:

// [
//   { title: "Song A", duration: 3.5, lyricsReady: false, karaokeKey: "abc123" },
//   { title: "Song B", duration: 4.2, lyricsReady: true, karaokeKey: "xyz456" },
//   { title: "Song C", duration: 5.1, lyricsReady: true, karaokeKey: "lmn789" },
//   { title: "Song D", duration: 2.8, lyricsReady: false, karaokeKey: "qwe321" }
// ]

function generateKaraokePlaylist(playlist) {
  // Функция за генериране на случаен 6-символен низ
  function generateRandomKey() {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let key = "";
    for (let i = 0; i < 6; i++) {
      key += chars[Math.floor(Math.random() * chars.length)];
    }
    return key;
  }

  // Създавам нова плейлиста с добавените свойства
  return playlist.map((song) => {
    return {
      ...song, // Запазвам текущите свойства на песента
      lyricsReady: song.duration > 4, // Проверявам продължителността
      karaokeKey: generateRandomKey(), // Генерирам случаен ключ
    };
  });
}

// Примерен вход
const playlist = [
  { title: "Song A", duration: 3.5 },
  { title: "Song B", duration: 4.2 },
  { title: "Song C", duration: 5.1 },
  { title: "Song D", duration: 2.8 },
];

// Извиквам функцията
const karaokePlaylist = generateKaraokePlaylist(playlist);
console.log(karaokePlaylist);
// [
// { title: "Song A", duration: 3.5, lyricsReady: false, karaokeKey: "a1b2c3" },
// { title: "Song B", duration: 4.2, lyricsReady: true, karaokeKey: "d4e5f6" },
// { title: "Song C", duration: 5.1, lyricsReady: true, karaokeKey: "g7h8i9" },
// { title: "Song D", duration: 2.8, lyricsReady: false, karaokeKey: "j0k1l2" }
// ]

/*
Стъпка 1: Разбиране на задачата
Трябва да добавим две нови свойства към всяка песен в плейлистата:

lyricsReady: true, ако дължината на песента е над 4 минути.
false, ако дължината на песента е 4 минути или по-малко.
karaokeKey: Произволен низ от 6 символа (букви и цифри).
Накрая ще върнем новата плейлиста.

Стъпка 2: Псевдокод

Създавам нова функция generateKaraokePlaylist.

Използвам цикъл, за да обходим всяка песен в плейлистата.

Проверявам дали дължината на песента е над 4 минути и задавам lyricsReady съответно.

Генерирам случаен низ от 6 символа за karaokeKey.

Добавям новите свойства към текущата песен.
Връщам модифицираната плейлиста.

Стъпка 3: Имплементация
Ето как можем да напишем кода:
function generateKaraokePlaylist(playlist) {
  // Функция за генериране на случаен 6-символен низ
  function generateRandomKey() {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let key = "";
    for (let i = 0; i < 6; i++) {
      key += chars[Math.floor(Math.random() * chars.length)];
    }
    return key;
  }

  // Създаваме нова плейлиста с добавените свойства
  return playlist.map(song => {
    return {
      ...song, // Запазваме текущите свойства на песента
      lyricsReady: song.duration > 4, // Проверяваме продължителността
      karaokeKey: generateRandomKey() // Генерираме случаен ключ
    };
  });
}

// Примерен вход
const playlist = [
  { title: "Song A", duration: 3.5 },
  { title: "Song B", duration: 4.2 },
  { title: "Song C", duration: 5.1 },
  { title: "Song D", duration: 2.8 }
];

// Извикваме функцията
const karaokePlaylist = generateKaraokePlaylist(playlist);

// Изход
console.log(karaokePlaylist);


Стъпка 4: Обяснение на ключови моменти

map функцията: Използвам map, за да създадем нов масив, където всяка песен има новите свойства.

generateRandomKey функцията: Тази функция генерира случаен 6-символен низ чрез избиране на произволни символи от зададен списък (chars).

Добавяне на нови свойства: Използваме ...song (спред оператор), за да копираме текущите свойства на песента, след което добавяме lyricsReady и karaokeKey.
*/
