// 9. Analyze Playlist Duration Trends
// Task: Write a function to identify if the playlist durations are increasing, decreasing, or random.

// Function Signature:

// function analyzeTrend(playlist) {
//   // Your code here
// }

// Example Input:

// const playlist = [
//   { title: "Song D", duration: 2.8 },
//   { title: "Song A", duration: 3.5 },
//   { title: "Song B", duration: 4.2 },
//   { title: "Song C", duration: 5.1 }
// ];

// analyzeTrend(playlist);
// Example Output:
function analyzeTrend(playlist) {
  let isIncreasing = true; // Увеличава се
  let isDecreasing = true; // Намалява
  // Стъпка 1: Преминавам през плейлиста и сравнявам дължините
  for (let i = 1; i < playlist.length; i++) {
    if (playlist[i].duration > playlist[i - 1].duration) {
      isDecreasing = false; // Ако дължината на текущата песен е по-голяма от предишната, не е намаляващ тренд
    } else if (playlist[i].duration < playlist[i - 1].duration) {
      isIncreasing = false; // Ако дължината на текущата песен е по-малка от предишната, не е нарастващ тренд
    }
  }

  // Стъпка 2: Определям резултата
  if (isIncreasing) {
    return "Increasing"; // Ако всички песни са с нарастваща дължина
  } else if (isDecreasing) {
    return "Decreasing"; // Ако всички песни са с намаляваща дължина
  } else {
    return "Random"; // Ако има комбинация от увеличаване и намаляване
  }
}

const playlist = [
  { title: "Song D", duration: 2.8 },
  { title: "Song A", duration: 3.5 },
  { title: "Song B", duration: 4.2 },
  { title: "Song C", duration: 5.1 },
];

// Извиквам функцията:
const result = analyzeTrend(playlist);

console.log(result); // резултат: "Increasing"

/*
Стъпка 1: Анализиране на тренда
Трябва да анализирам дали дължините на песните в плейлиста се увеличават, намаляват или са случайни (т.е. няма ясен тренд).

Стъпка 2: Сравняване на дължините на песните
Ще трябва да преминa през плейлиста и да сравним всяка песен с предишната. Така ще разберем дали дължините се увеличават, намаляват или не показват ясен тренд.

Стъпка 3: Извеждане на резултат
След като анализирам всички песни, ще изведя резултата: "Increasing", "Decreasing" или "Random", в зависимост от тренда.
*/

/*
Обяснение на решението:
Започваме с предположения за тренда:

1. Инициализираме две променливи isIncreasing и isDecreasing като true, за да предположим, че плейлистата първоначално може да е нарастваща или намаляваща.


2. Преминаваме през плейлиста:
В цикъл проверяваме всяка песен и я сравняваме с предишната.
Ако текущата песен е по-голяма от предишната, означава, че плейлистата не е намаляваща, затова задаваме isDecreasing = false.
Ако текущата песен е по-малка, значи не е нарастваща, затова задаваме isIncreasing = false.

3. Извеждаме резултата:
Ако плейлистата е изцяло нарастваща (isIncreasing е вярно), връщаме "Increasing".
Ако плейлистата е изцяло намаляваща (isDecreasing е вярно), връщаме "Decreasing".
Ако има какви да е комбинации на увеличаване и намаляване, връщаме "Random".


Трендът е модел или посока на промяна на даден обект или процес с течение на времето. В контекста на задачата, трендът се отнася до начина, по който се променят дължините на песните в плейлистата.
*/
