import {NumbersToWords} from './numbersToWords';

describe('Number To Words', () => {
    it('works', () => {
        const numberToWords = new NumbersToWords();
        expect(numberToWords.parse(0)).toBe('');

    });
});