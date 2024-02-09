import moment from "moment";

export default function delay(minutes: number | null) {
    if (minutes === 0 || minutes === null) {
        return { title: "On Time", color: "text-positive" };
    }
    const duration = moment.duration(minutes, "minutes");
    const hh =
        duration.years() * (365 * 24) +
        duration.months() * (30 * 24) +
        duration.days() * 24 +
        duration.hours();
    const mm = duration.minutes();
    if (minutes < 0) {
        const title = Math.abs(hh) === 0 ? `Advanced ${Math.abs(mm)} minutes`
            : `Advanced ${Math.abs(hh)} hours and ${Math.abs(mm)} minutes`;
        return {
            title,
            color: "text-positive",
        };
    }
    if (minutes > 0) {
        const title = Math.abs(hh) === 0 ? `Delayed ${Math.abs(mm)} minutes`
            : `Delayed ${Math.abs(hh)} hours and ${Math.abs(mm)} minutes`;
        return {
            title,
            color: "tw-text-yellow-600",
        };
    }
    return {
        title: "",
        color: "tw-text-black",
    };
}