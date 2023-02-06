"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMinutesToHourString = void 0;
function convertMinutesToHourString(minutes) {
    const hours = Math.floor(minutes / 60);
    const minutesAmount = minutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutesAmount).padStart(2, '0')}`;
}
exports.convertMinutesToHourString = convertMinutesToHourString;
