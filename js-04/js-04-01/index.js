function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

const celsius = +prompt("Write the temperature in Celsius as a single number.");
const fahrenheit = convertCelsiusToFahrenheit(celsius);
console.log(fahrenheit);
