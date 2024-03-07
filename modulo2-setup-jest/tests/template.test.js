import { it } from "@jest/globals"

function sum(a, b) {
    return a + b
}

it('Valida soma 1 + 2', () => {
    expect(sum(1, 2)).toBe(3)
})