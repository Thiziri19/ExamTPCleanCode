import { describe, it, expect } from 'vitest'
import { combineCards } from './cardsCombination.js'

describe("combineCards", () => {
    it.each([
        [[],0]
    ])("should return '${input.length}' given %s", (input, expected) => {
        expect(combineCards(input)).toBe(expected)
    })
})