
import { getTimeZoneFromDateTimeFormat } from '../getTimeZoneFromDateTimeFormat';
describe('getTimeZoneFromDateTimeFormat', () => {
    it('should return the correct time zone', () => {
        console.log('getTimeZoneFromDateTimeFormat()', getTimeZoneFromDateTimeFormat())
        expect(getTimeZoneFromDateTimeFormat()).toStrictEqual('America/New_York');
    });
});
