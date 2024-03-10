import {differenceInCalendarDays, DateValues, subDays} from 'date-fns';
import {UTCDateMini} from "@date-fns/utc/date/mini";

describe('subDays', () => {

    describe('should return correct days over leap day', () => {

        const mockStart: string = '2024-02-28'
        const mockEnd: string = '2024-03-04'
        const mockDuration: number = 5

        it('for string args', () => {
            const result = subDays(mockEnd, mockDuration).toISOString();

            expect(result).toStrictEqual(`${mockStart}T00:00:00.000Z`);
        });

        it('for new Date(...) args', () => {
            const result = subDays(new Date(mockEnd), mockDuration).toISOString();

            expect(result).toStrictEqual(`${mockStart}T00:00:00.000Z`);
        });

        it('for new UTCDateMini(...) args', () => {
            const result = subDays(new UTCDateMini(mockEnd), mockDuration).toISOString();

            expect(result).toStrictEqual(`${mockStart}T00:00:00.000Z`);
        });
    });

    describe('should return correct days over DST', () => {

        const mockStart: string = '2024-10-30'
        const mockEnd: string = '2024-11-03'
        const mockDuration: number = 4

        it('for string args', () => {
            const result = subDays(mockEnd, mockDuration).toISOString();

            expect(result).toStrictEqual(`${mockStart}T00:00:00.000Z`);
        });

        it('for new Date(...) args', () => {
            const result = subDays(new Date(mockEnd), mockDuration).toISOString();

            expect(result).toStrictEqual(`${mockStart}T00:00:00.000Z`);
        });

        it('for new UTCDateMini(...) args', () => {
            const result = subDays(new UTCDateMini(mockEnd), mockDuration).toISOString();

            expect(result).toStrictEqual(`${mockStart}T00:00:00.000Z`);
        });
    });
});
