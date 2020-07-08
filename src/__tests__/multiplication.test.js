import { multiply } from '../math';

describe('Multiplication testing', () => {      
    test('3 * 3 = 9', () => {
    expect(multiply(3, 3)).toBe(9);
    });

    test('3 * 3 = 9', () => {
        expect(multiply(3, 3)).toBe(9);
    });

    test('3 * 3 = 9', () => {
        expect(multiply(3, 5)).toBe(15);
    });
                
})