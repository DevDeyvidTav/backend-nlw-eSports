export function convertMinutesToHourString(minutes: number){
    const hours = Math.floor(minutes / 60);
    const minutesAmount = minutes % 60;

    return `${String(hours).padStart(2,'0')}:${String(minutesAmount).padStart(2,'0')}`
}