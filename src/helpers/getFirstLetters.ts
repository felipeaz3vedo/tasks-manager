export function getFirstLetters(user: string) {
  const splitedUsername = user.split(' ');

  const meaningfullWords = splitedUsername.filter((word) => word.length > 2);

  let firstLetters = '';

  if (meaningfullWords.length >= 2) {
    firstLetters = meaningfullWords[0]
      .slice(0, 1)
      .concat(meaningfullWords[1].slice(0, 1))
      .toLocaleUpperCase();
  } else {
    firstLetters = meaningfullWords[0].slice(0, 1).toLocaleUpperCase();
  }

  return firstLetters;
}
