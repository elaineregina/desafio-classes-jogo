class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  power() {
    const attacks = [
      { type: "mago", attack: "usou Magia" },
      { type: "gerreiro", attack: "usou espada" },
      { type: "monge", attack: "usou artes marciais" },
      { type: "ninja", attack: "usou shuriken" },
    ];

    let attack = "nada"; // Valor padrão caso não encontre o tipo

    for (let i = 0; i < attacks.length; i++) {
      if (attacks[i].type === this.type) {
        attack = attacks[i].attack;
        break; // Encerra o loop quando o tipo correspondente for encontrado
      }
    }

    return attack;
  }
}

let ataque = new Hero("Elaine", 40, "monge");

console.log(`O ${ataque.type} atacou usando ${ataque.power()}`);
