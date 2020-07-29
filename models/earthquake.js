class Earthquake {
    constructor(date, hour, latitude, longitude, depth, magnitude) {
        this.date = date;
        this.hour = hour;
        this.latitude = latitude;
        this.longitude = longitude;
        this.depth = depth;
        this.magnitude = magnitude;
    }
}

module.exports = Earthquake;