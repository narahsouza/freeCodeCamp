// Altere apenas o código abaixo desta linha
const bicycle = {
  gear: 2,

  /*setGear: function(newGear) {
    this.gear = newGear;
  }*/

  setGear(newGear) {
    this.gear = newGear;
  }
};
// Altere apenas o código acima desta linha
bicycle.setGear(3);
console.log(bicycle.gear);