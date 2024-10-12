/**
 * Application settings configuration.
 */
const appsettings = {
    appName: 'ONAX-SCM',
    env: 'development',
    Urls: {
        baseUrl: 'http://localhost:8080/api/v2/xray/',
    },
    functions: {
        /**
         * Converts the first character of the text to uppercase.
         * @param text - The text to convert.
         * @returns The text with the first character in uppercase.
         */
        ToSentenceUpper(text: string) {
            return text[0].toUpperCase() + text.slice(1);
        },
        /**
         * Formats a number with commas as thousand separators.
         * @param x - The number to format.
         * @returns The formatted number as a string.
         */
        NumberCommaFormat: (x: number) => {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        /**
         * Calculates a future date based on the number of days from today.
         * @param days - The number of days to add to the current date. Default is 1.
         * @returns The future date as a string in YYYY-MM-DD format.
         */
        FuturDate: (days: number = 1) => {
            return new Date(Date.now() + (days * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
        }
    },
    token: {
        authName: 'xray-token'
    },
};

export default appsettings;