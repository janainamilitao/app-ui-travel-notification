import { Destinations } from "./destinations.model";
import { PrimaryAccountNumbers } from "./primary-account-numbers.model";

export class TravelItinerary{
    constructor(
        public partnerBid: string,
        public userId: string,
        public primaryAccountNumbers:  Array<PrimaryAccountNumbers>,
        public destinations: Array<Destinations>,
        public departureDate: string,
        public returnDate: string,
        public lastUpdatedBy: string,
        public lastUpdateTime: string       
    ){}
}