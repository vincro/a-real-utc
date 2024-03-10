import { isItUniversalCoordinatedTime } from '../isItUniversalCoordinatedTime';

describe('isItUniversalCoordinatedTime', () => {
    it('should return true for valid string inputs ending with "Z"', () => {
        expect(isItUniversalCoordinatedTime('2022-01-30T12:34:56Z')).toBe(true);
    });

    it('should return true for valid string inputs ending with "+00:00"', () => {
        expect(isItUniversalCoordinatedTime('2022-01-30T12:34:56+00:00')).toBe(true);
    });

    it('should return false for invalid string inputs', () => {
        expect(isItUniversalCoordinatedTime('2022-01-30T12:34:56')).toBe(false);
        expect(isItUniversalCoordinatedTime('2022-01-30T12:34:56-05:00')).toBe(false);
        expect(isItUniversalCoordinatedTime('invalid string')).toBe(false);
    });

    it('should return false for non-string inputs', () => {
        expect(isItUniversalCoordinatedTime(new Date())).toBe(false);
        // @ts-ignore
        expect(isItUniversalCoordinatedTime(123)).toBe(false);
        // @ts-ignore
        expect(isItUniversalCoordinatedTime(true)).toBe(false);
    });
});