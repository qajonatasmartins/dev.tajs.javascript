class Person {
  static validate(person) {
    if (!person.name) throw new Error("name is required.");
    if (!person.cpf) throw new Error("cpf is required.");
  }

  static format(person) {
    const [name, ...lastName] = person.name.split(" ");
    return {
      cpf: person.cpf.replace(/\D/g, ""),
      name,
      lastName: lastName.join(" "),
    };
  }

  static save(person) {
    if (!["cpf", "name", "lastName"].every((prop) => person[prop])) {
      throw new Error(
        `Não foi possível salvar os dados da pessoa: ${JSON.stringify(person)}`
      );
    }
    // ... banco de dados, api, etc..

    return "Registrado com sucesso!!";
  }

  static process(person) {
    this.validate(person);
    const personFormatted = this.format(person);
    console.log("Person is...", person);
    return "ok";
  }
}

export default Person;
