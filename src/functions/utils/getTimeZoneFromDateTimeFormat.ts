export const getTimeZoneFromDateTimeFormat = (): string => {
    const dateTimeFormat = new Intl.DateTimeFormat();
    return new Date('Jan 01, 2023 01:01:01+00:00').toISOString();
};