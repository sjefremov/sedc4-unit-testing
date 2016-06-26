function Period(startDate, endDate) {
    
    if (startDate === undefined || endDate === undefined) {
        throw new Error('Undefined parameters');
    }

    if (startDate === null || endDate === null) {
        throw new Error('Null parameters');
    }

    if (Object.prototype.toString.call(startDate) !== '[object Date]'
        || Object.prototype.toString.call(endDate) !== '[object Date]') {
        throw new Error('Invalid parameters');
    }

    if (startDate > endDate) {
        throw new Error('Start date greater than end date');
    }

    this.startDate = startDate;
    this.endDate = endDate;

    this.getPeriod = function () {
        var result = '';

        var msecPerSec = 1000;
        var msecPerMin = 60 * msecPerSec;
        var msecPerHour = 60 * msecPerMin;
        var msecPerDay = 24 * msecPerHour;

        var differenceInMsec = this.endDate - this.startDate;

        var yearDifference = this.endDate.getFullYear() - this.startDate.getFullYear();
        var monthsDifference = (yearDifference * 11 + this.endDate.getMonth()) - this.startDate.getMonth();//months are between 0-11
        //monthsDifference can be greater than 11
        
        var daysDifference = Math.floor( differenceInMsec / msecPerDay  );
        var hoursDifference = Math.floor( differenceInMsec / msecPerHour  );
        var minsDifference = Math.floor( differenceInMsec / msecPerMin  );
        var secondsDifference = Math.floor( differenceInMsec / msecPerSec  );

        if (yearDifference > 0 && monthsDifference > 10) {
            if (yearDifference > 1) {
                result += yearDifference + ' years';
            }
            else {
                result += yearDifference + ' year';
            }
        }
        else if ((monthsDifference % 11) > 0 && daysDifference > 30) {
            if (monthsDifference > 1) {
                result += monthsDifference + ' months';
            }
            else {
                result += monthsDifference + ' month';
            }
        }
        else if (daysDifference > 0 && hoursDifference > 24) {
            if (daysDifference > 1) {
                result += daysDifference + ' days';
            }
            else {
                result += daysDifference + ' day';
            }
        }
        else if (hoursDifference > 0 && minsDifference > 59) {
            if (hoursDifference > 1) {
                result += hoursDifference + ' hours';
            }
            else {
                result += hoursDifference + ' hour';
            }
        }
        else if (minsDifference > 0 && secondsDifference > 59) {
            if (minsDifference > 1) {
                result += minsDifference + ' mins';
            }
            else {
                result += minsDifference + ' min';
            }
        }
        else if (secondsDifference > 1) {
            result += secondsDifference + ' seconds';
        }
        else {
            result += secondsDifference + ' second';
        }
        
        return result;
    };
}