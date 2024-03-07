import { it, describe, expect, jest } from "@jest/globals"
import Person from '../src/person'


describe('#Person Suite', () => {

    describe('#validade()', () => {

        it('validar mensagem de erro se o nome não está presente.', () => {
            const mockInvalidPerson = {
                name: '',
                cpf: '123.456.789.90'
            }

            expect(() => Person.validade(mockInvalidPerson))
                .toThrow(new Error('name is required'))
        })

        it('validar mensagem de erro se o cpf não está presente.', () => {
            const mockInvalidPerson = {
                name: 'Jonatas Martins',
                cpf: ''
            }

            expect(() => Person.validade(mockInvalidPerson))
                .toThrow(new Error('cpf is required'))
        })

        it('validar se CPF e Nome está presente.', () => {
            const mockInvalidPerson = {
                name: 'Jonatas Martins',
                cpf: '12345678990'
            }

            expect(() => Person.validade(mockInvalidPerson))
                .not
                .toThrow()
        })
    })

    describe('#format()', () => {

        it('Validar a formatação do CPF', () => {
            // Arrange
            const mockPerson = {
                name: 'Teste da XPTO',
                cpf: '999.111.123-44'
            }
            const expeted = {
                name: 'Teste',
                lastName: 'da XPTO',
                cpf: '99911112344'
            }
            //Act
            const formattedPerson = Person.format(mockPerson)
            // Assert
            expect(formattedPerson).toStrictEqual(expeted)
        })
    })

    describe('#process()', () => {

        it('Validar o process salva os dados no banco', () => {
            // Arrange
            const mockPerson = {
                name: 'Jonatas Martins',
                cpf: '123.456.789-90'
            }
            jest.spyOn(
                Person,
                Person.validade.name
            ).mockReturnValue()

            jest.spyOn(
                Person,
                Person.format.name
            )
            //.mockReturnValue({
            //     cpf: mockPerson.cpf,
            //     name: 'Jonatas',
            //     lastName: 'Martins'
            // })
            // Act
            const result = Person.process(mockPerson)
            const expeted = 'ok'
            // Assert
            expect(result).toStrictEqual(expeted)
        })
    })
})

