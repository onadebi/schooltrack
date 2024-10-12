import { eventsData } from "../data/lib/data"
import { EventsInfoType } from "../models/dto";

export default class EventsService {

    getAllEvents = async (): Promise<EventsInfoType[]> => {
        return new Promise((resolve) => {
            return resolve(eventsData);
        })
    }
}