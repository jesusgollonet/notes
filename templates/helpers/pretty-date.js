const shortMonthName = require('./../../src/short-month-name');
module.exports = function(date) {
    return (
        shortMonthName(date.getMonth()) +
        ' ' +
        date.getDate() +
        ', ' +
        date.getFullYear()
    );
};
