function Period(startDate, endDate) {
    
    if (startDate === undefined || endDate === undefined) {
        throw new Error('Undefined parameters');
    }

    this.startDate = startDate;
    this.endDate = endDate;

    this.getPeriod = function () {
        
    };
}