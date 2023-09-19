const { DateTime } = require("luxon");
module.exports = {
  format_date: (date, format) => {
    // 'date' should be a JavaScript Date object or a date string
    // 'format' is an optional parameter for the Luxon format string
    // If 'date' is a date string, parse it into a Date object
    if (typeof date === "string") {
      date = new Date(date);
    }
    // Create a Luxon DateTime object
    const luxonDate = DateTime.fromJSDate(date);
    // Format the date using Luxon
    return luxonDate.toFormat(format || "yyyy-MM-dd"); // You can specify your desired format here
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }
    return word;
  },
};