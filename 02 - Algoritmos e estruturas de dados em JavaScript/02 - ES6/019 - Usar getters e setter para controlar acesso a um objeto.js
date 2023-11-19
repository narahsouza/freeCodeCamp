// Altere apenas o código abaixo desta linha
class Thermostat {
  constructor(fahrenheit) {
    this._celsius = (5 / 9) * (fahrenheit - 32);
  }
  // getter
  get temperature() {
    return this._celsius;
  }
  // setter
  set temperature(celsius) {
    return this._celsius = celsius;
  }
}
// Altere apenas o código acima desta linha

const thermos = new Thermostat(76); // Definição na escala Fahrenheit
let temp = thermos.temperature; // 24,44 em Celsius

console.log(temp);

thermos.temperature = 26;
temp = thermos.temperature; // 26 em Celsius

console.log(temp);