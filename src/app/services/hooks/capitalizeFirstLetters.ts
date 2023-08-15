export default function CapitalizeFirstLetters(name: string) {
  const words = name.split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}