import {addDays} from 'date-fns';
import {UTCDateMini} from "@date-fns/utc/date/mini";

const startSuffix: string = '00:00:00.000Z'
const endSuffix: string = '23:59:59.999Z'

describe('addDays', () => {
    describe('should return correct startDate over leap day, with original time', () => {

        const mockStart: string = `2024-03-04`
        const mockEnd: string = `2024-02-28T${endSuffix}`
        const mockDuration: number = 5

        it('for string args', () => {
            const result = addDays(mockEnd, mockDuration).toISOString();

            expect(result).toStrictEqual(`${mockStart}T${endSuffix}`);
        });

        it('for new Date(...) args', () => {
            const result = addDays(new Date(mockEnd), mockDuration).toISOString();

            expect(result).toStrictEqual(`${mockStart}T${endSuffix}`);
        });

        it('for new UTCDateMini(...) args', () => {
            const result = addDays(new UTCDateMini(mockEnd), mockDuration).toISOString();

            expect(result).toStrictEqual(`${mockStart}T${endSuffix}`);
        });
    });

    describe('should return correct days over DST', () => {

        const mockStart: string = '2024-11-03'
        const mockEnd: string = '2024-10-30'
        const mockDuration: number = 4

        it('for string args', () => {
            const result = addDays(mockEnd, mockDuration).toISOString();

            expect(result).toStrictEqual(`${mockStart}T00:00:00.000Z`);
        });

        it('for new Date(...) args', () => {
            const result = addDays(new Date(mockEnd), mockDuration).toISOString();

            expect(result).toStrictEqual(`${mockStart}T00:00:00.000Z`);
        });

        it('for new UTCDateMini(...) args', () => {
            const result = addDays(new UTCDateMini(mockEnd), mockDuration).toISOString();

            expect(result).toStrictEqual(`${mockStart}T00:00:00.000Z`);
        });
    });
})
;
