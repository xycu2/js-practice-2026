// №1
const stringCheck = function (something) {
  if (typeof something !== "string") {
    return "Вы передали не строчку";
  }

  something = something.trim();

  if (something.length > 30) {
    return something.slice(0, 30) + "...";
  }
  return something;
};

console.log(stringCheck("     Hello!    "));
