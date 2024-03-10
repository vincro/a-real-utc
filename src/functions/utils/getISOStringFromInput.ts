export const getISOStringFromInput = (input: string | Date) => {
    if (typeof input === 'string') {
        return input.slice(-1) === 'Z' || input.slice(-6) === '+00:00';
    }

    return false
};
