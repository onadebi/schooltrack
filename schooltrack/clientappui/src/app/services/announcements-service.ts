import { announcementsData } from "../data/lib/data";
import { AnnouncementsInfoType } from "../models/dto";

export type AnnountcementType = {
    id: number;
    title: string;
    description: string;
    date: string;
    isRead: boolean;
}

export default class AnnouncementService {

    getAnnouncements = async (): Promise<AnnountcementType[]> =>  {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(AnnouncementsData);
            }, 500);
        });
    }

    fetchAllAnnouncement = async (): Promise<AnnouncementsInfoType[]> => {
        return new Promise((resolve) => {
            return resolve(announcementsData);
        });
    }
}

const AnnouncementsData: AnnountcementType[] = [
    {
        id: 1,
        title: 'Parent-Teacher Conference',
        description: 'Join us for the upcoming parent-teacher conference to discuss your child\'s progress and address any concerns. Refreshments will be provided.',
        date: '2024-10-15T18:00:00',
        isRead: false
    }, {
        id: 2,
        title: 'Science Fair',
        description: 'Our annual science fair is around the corner. Students are encouraged to participate and showcase their innovative projects. Prizes will be awarded.',
        date: '2024-10-20T09:00:00',
        isRead: false
    }, {
        id: 3,
        title: 'School Picnic',
        description: 'We are excited to announce a school picnic at the local park. There will be games, food, and fun activities for all students and staff.',
        date: '2024-10-25T11:00:00',
        isRead: false
    }, {
        id: 4,
        title: 'Halloween Costume Contest',
        description: 'Get ready for our Halloween costume contest! Students can dress up in their favorite costumes. Prizes will be given for the best costumes.',
        date: '2024-10-31T14:00:00',
        isRead: false
    }
];