import {addDays} from 'date-fns';
import {UTCDateMini} from "@date-fns/utc/date/mini";

const startSuffix: string = '00:00:00.000Z'
const endSuffix: string = '23:59:59.999Z'

const calculateDate = (
    today: string | number | Date,
    mathFunc: any,
    offset: number = 0,
): Date => {
    return new UTCDateMini(
        mathFunc(
            new UTCDateMini(today),
            offset
        )
    )
}


describe('calculateDate', () => {

    describe('when broken step by step', () => {
        const mockStart: string = `2024-10-01`
        const mockEnd: string = `2024-12-01`
        const mockOffset: number = 61

        it('should return new UTCDateMini as today', () => {
            const today = mockStart;

            expect(new UTCDateMini(today).toISOString()).toEqual(`${today}T${startSuffix}`);
        });

        it(`should return today + ${mockOffset} days`, () => {
            const today = mockStart;

            expect(addDays(new UTCDateMini(today), mockOffset).toISOString()).toEqual(`${mockEnd}T${startSuffix}`);
        });

        it(`should return instanceof UTCDateMini`, () => {
            const today = mockStart;

            const result = calculateDate(today, addDays, mockOffset)

            expect(result).toBeInstanceOf(UTCDateMini);
            expect(result.toISOString()).toEqual(`${mockEnd}T${startSuffix}`);
        });
    });

    describe('addDays', () => {

        const mockStart: string = `2024-03-04`
        const mockEnd: string = `2024-02-26T${endSuffix}`
        const mockOffset: number = 7

        it('for string args', () => {
            const today = mockStart;

            expect(calculateDate(
                today,
                addDays,
            )).toEqual(new Date(mockStart));
        });

        it('for new Date(...) args', () => {
            const today = new Date(mockStart);

            expect(calculateDate(
                today,
                addDays,
            )).toEqual(new Date(mockStart));
        });

        it('for new UTCDateMini(...) args', () => {
            const today = new UTCDateMini(mockStart);

            expect(calculateDate(
                today,
                addDays,
            )).toEqual(new Date(mockStart));
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
