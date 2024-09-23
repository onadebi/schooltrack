export type CalendarEventype = {
    id: number;
    title: string;
    description: string;
    datetime: string;
};

function getRandomTime(): string {
    const hour = Math.floor(Math.random() * (15 - 8) + 8); // Random hour between 8 and 15 (3pm)
    const minute = Math.floor(Math.random() * 60); // Random minute between 0 and 59
    const second = Math.floor(Math.random() * 60); // Random second between 0 and 59
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
}

const CalendarEventsData: CalendarEventype[] = [
    {
        id: 1,
        title: 'Event 1',
        description: 'Event 1 Description',
        datetime: `2024-09-01T${getRandomTime()}`
    }, {
        id: 2,
        title: 'Event 2',
        description: 'Event 2 Description',
        datetime: `2024-09-02T${getRandomTime()}`
    }, {
        id: 3,
        title: 'Event 3',
        description: 'Event 3 Description',
        datetime: `2024-09-03T${getRandomTime()}`
    }, {
        id: 4,
        title: 'Event 4',
        description: 'Event 4 Description',
        datetime: `2024-09-04T${getRandomTime()}`
    }
];


export default CalendarEventsData;