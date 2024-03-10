import {differenceInCalendarDays, DateValues} from 'date-fns';
import {UTCDateMini} from "@date-fns/utc/date/mini";

describe('differenceInCalendarDays', () => {
    describe('should return correct days over leap day', () => {

        const mockStart: string = '2024-02-28'
        const mockEnd: string = '2024-03-04'
        const expectedResult: number = 5 // does nto include mockEnd day

        it('for string args', () => {
            const result = differenceInCalendarDays(mockEnd, mockStart);

            expect(result).toStrictEqual(expectedResult);
        });

        it('for new Date(...) args', () => {
            const result = differenceInCalendarDays(new Date(mockEnd), new Date(mockStart));

            expect(result).toStrictEqual(expectedResult);
        });

        it('for new UTCDateMini(...) args', () => {
            const result = differenceInCalendarDays(new UTCDateMini(mockEnd), new UTCDateMini(mockStart));

            expect(result).toStrictEqual(expectedResult);
        });
    });

    describe('should return correct days over DST', () => {

        const mockStart: string = '2024-10-30'
        const mockEnd: string = '2024-11-03'
        const expectedResult: number = 4 // does not include mockEnd day

        it('for string args', () => {
            const result = differenceInCalendarDays(mockEnd, mockStart);

            expect(result).toStrictEqual(expectedResult);
        });

        it('for new Date(...) args', () => {
            const result = differenceInCalendarDays(new Date(mockEnd), new Date(mockStart));

            expect(result).toStrictEqual(expectedResult);
        });

        it('for new UTCDateMini(...) args', () => {
            const result = differenceInCalendarDays(new UTCDateMini(mockEnd), new UTCDateMini(mockStart));

            expect(result).toStrictEqual(expectedResult);
        });
    });
});
