import { describe, expect, it } from "@jest/globals";
import Person from "../src/person";

describe("#Person Suite", () => {
  describe("#validate", () => {
    it("deve lançar um erro quando não informar o nome", () => {
      // mock é a entrada necessária para que o teste funcione
      const mockInvalidPerson = {
        name: "",
        cpf: "123.456.789-00",
      };
      const result = () => Person.validate(mockInvalidPerson);
      expect(result).toThrowError("name is required.");
      expect(result).toThrowError(new Error("name is required."));
    });

    it("deve lançar um erro quando não informar o cpf", () => {
      // mock é a entrada necessária para que o teste funcione
      const mockInvalidPerson = {
        name: "Joao de Barro",
        cpf: "",
      };
      const result = () => Person.validate(mockInvalidPerson);
      expect(result).toThrowError("cpf is required.");
      expect(result).toThrowError(new Error("cpf is required."));
    });

    it("deve lançar um erro quando não informar o cpf e name", () => {
      // mock é a entrada necessária para que o teste funcione
      const mockInvalidPerson = {
        name: "",
        cpf: "",
      };
      const result = () => Person.validate(mockInvalidPerson);
      expect(result).toThrowError("name is required.");
      expect(result).toThrowError(new Error("name is required."));
    });

    it("não deve lançar erro quando informar o cpf e name", () => {
      // mock é a entrada necessária para que o teste funcione
      const mockValidPerson = {
        name: "Maria Zinha",
        cpf: "012.345.678-00",
      };
      const result = () => Person.validate(mockValidPerson);
      expect(result).not.toThrowError(new Error());
    });
  });

  describe("#format", () => {
    // parte do principio que os dados ja foram validados
    it("validar o formatacao do person name e cpf", () => {
      ///AAA
      // Arrange = Prepara
      const mockPerson = {
        name: "Xuxa da Silva",
        cpf: "000.999.444-11",
      };
      // Act == Executar
      const formattedPerson = Person.format(mockPerson);

      // Assert = Validar
      const expected = {
        name: "Xuxa",
        cpf: "00099944411",
        lastName: "da Silva",
      };
      expect(formattedPerson).toStrictEqual(expected);
    });
  });

  describe("#save", () => {
    it("deve salvar person com sucesso.", () => {
      const mockValidPerson = {
        cpf: "111.222.333-00",
        name: "Di",
        lastName: "Rocha",
      };
      expect(Person.save(mockValidPerson)).toBe("Registrado com sucesso!!");
    });

    it("nao deve salvar person sem cpf.", () => {
      const mockInvalidPerson = {
        cpf: "",
        name: "Di",
        lastName: "Rocha",
      };
      expect(() => {
        Person.save(mockInvalidPerson);
      }).toThrowError(
        new Error(
          `Não foi possível salvar os dados da pessoa: ${JSON.stringify(
            mockInvalidPerson
          )}`
        )
      );
    });

    it("nao deve salvar person sem name.", () => {
      const mockInvalidPerson = {
        cpf: "111.222.333-44",
        name: "",
        lastName: "Rocha",
      };
      expect(() => {
        Person.save(mockInvalidPerson);
      }).toThrowError(
        new Error(
          `Não foi possível salvar os dados da pessoa: ${JSON.stringify(
            mockInvalidPerson
          )}`
        )
      );
    });

    it("nao deve salvar person sem lastName.", () => {
      const mockInvalidPerson = {
        cpf: "111.222.333-44",
        name: "Di",
        lastName: "",
      };
      expect(() => {
        Person.save(mockInvalidPerson);
      }).toThrowError(
        new Error(
          `Não foi possível salvar os dados da pessoa: ${JSON.stringify(
            mockInvalidPerson
          )}`
        )
      );
    });

    it("nao deve salvar person sem cpf, name e lastName.", () => {
      const mockInvalidPerson = {
        cpf: "",
        name: "",
        lastName: "",
      };
      expect(() => {
        Person.save(mockInvalidPerson);
      }).toThrowError(
        new Error(
          `Não foi possível salvar os dados da pessoa: ${JSON.stringify(
            mockInvalidPerson
          )}`
        )
      );
    });
  });
});

// it("sum two values", () => {
//   expect(sum(2, 3)).toBe(5);
// });
