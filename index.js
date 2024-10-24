class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  power() {
    let attack;
    if (this.type == "mago") {
      attack = "usou Magia";
    } else if (this.type == "gerreiro") {
      attack = "usou espada";
    } else if (this.type == "monge") {
      attack = "usou artes marciais";
    } else if (this.type == "ninja") {
      attack = "usou shuriken";
    } else {
      attack = "nada";
    }
    return attack;
  }
}

let ataque = new Hero("Elaine", 40, "mago");

// Aqui usamos o método power() da instância "ataque"
console.log(`O ${ataque.type} atacou usando ${ataque.power()}`);
