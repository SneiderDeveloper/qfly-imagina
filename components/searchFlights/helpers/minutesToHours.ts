import moment from "moment";

export default function minutesToHours(numberOfMinutes: number) : string {
    if(!numberOfMinutes) return `00 hour 00 minutes`
    const duration = moment.duration(numberOfMinutes, "minutes");
    const hh =
        duration.years() * (365 * 24) +
        duration.months() * (30 * 24) +
        duration.days() * 24 +
        duration.hours();
    const mm = duration.minutes();
    return `${hh} hour ${mm} minutes`;
}