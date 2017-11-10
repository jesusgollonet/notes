module.exports = function getMonthName(monthNum) {
    var monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];
    var monthName = monthNum >= 0 && monthNum < monthNames.length
        ? monthNames[monthNum]
        : 'Invalid Month';
    return monthName;
};
