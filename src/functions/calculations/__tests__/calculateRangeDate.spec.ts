import {addDays} from 'date-fns';
import {UTCDateMini} from "@date-fns/utc/date/mini";

const startSuffix: string = '00:00:00.000Z'
const endSuffix: string = '23:59:59.999Z'

const formatDateTimezoneUTC = (
    date: string | number | Date,
): string => {
    return new UTCDateMini(date).toISOString().substring(0, 10)
}

const setUTCTimezone = (
    today: Date,
): string => {
    const msOffset = today.getTimezoneOffset() * 60 * 1000

    console.log('xxx', today, today.getTime(),msOffset)


    return new UTCDateMini( new Date(today.getTime() - msOffset)).toISOString();
}

const calculateRangeDate = (
    today: string | number | Date,
    mathFunc: any,
    delimiterFunc: (date: string) => string,
): string => {
    const convertDate =            mathFunc(
        new Date(
            formatDateTimezoneUTC(today)
        ),
    )

    console.log('convertDate', convertDate, formatDateTimezoneUTC(today))

    return delimiterFunc(
        setUTCTimezone(
            convertDate
        )
    )
}



describe('calculateRangeDate', () => {

    describe('when broken step by step', () => {
        const mockStart: string = `2024-10-01`
        const mockEnd: string = `2024-12-01`
        const mockOffset: number = 61

        it('should return today unchanged', () => {
            const today = mockStart;
            const result = formatDateTimezoneUTC(today);

            expect(result).toEqual(`${today}`);
        });

        it(`should return instanceof UTCDateMini`, () => {
            const today = mockStart;
            const result = new UTCDateMini(formatDateTimezoneUTC(today));

            expect(result).toBeInstanceOf(UTCDateMini);
        });

        it(`should return today + ${mockOffset} days`, () => {
            const today = mockStart;
            const result = addDays(
                new UTCDateMini(formatDateTimezoneUTC(today)),
                mockOffset,
            );

            expect(result.toISOString()).toEqual(`${mockEnd}T${startSuffix}`);
        });

        it(`should return UTC, irrespective of timezone`, () => {
            const today = mockStart;
            const result = setUTCTimezone(
                addDays(
                    new UTCDateMini(formatDateTimezoneUTC(today)),
                    mockOffset,
                )
            );

            expect(result).toEqual(`${mockEnd}T${startSuffix}`);
        });

        it(`should return instanceof UTCDateMini`, () => {
            const today = mockStart;

            const result = calculateRangeDate(
                today,
                addDays,
                (date) => date
            )

            expect(result).toEqual(`${mockEnd}T${startSuffix}`);
            expect(result).toBeInstanceOf(UTCDateMini);
        });
    });
})
;
