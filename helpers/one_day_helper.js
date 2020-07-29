const oneDayHelper = (date1, time1, date2, time2) => {
    date1List = date1.split('.');

    date1Year = date1List[0];
    date1Month = date1List[1];
    date1Day = date1List[2];

    time1List = time1.split(':');

    date1Hour = time1List[0];
    date1Minute = time1List[1];
    date1Second = time1List[2];

    date2List = date2.split('.');

    date2Year = date2List[0];
    date2Month = date2List[1];
    date2Day = date2List[2];

    time2List = time2.split(':');

    date2Hour = time2List[0];
    date2Minute = time2List[1];
    date2Second = time2List[2];

    date1InSeconds = (date1Year * 31556952) + (date1Month * 2629743.83) + (date1Day * 86400) + (date1Hour * 3600) + (date1Minute * 60) + date1Second;
    date2InSeconds = (date2Year * 31556952) + (date2Month * 2629743.83) + (date2Day * 86400) + (date2Hour * 3600) + (date2Minute * 60) + date2Second;

    if (date2InSeconds - date1InSeconds <= 86400) {
        return true;
    } else {
        return false;
    }
}

module.exports = oneDayHelper;