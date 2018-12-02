export class TravelItinerary{
    constructor(
        public partnerBid: string,
        public userId: string,
        public cardAccountNumber: string,
        public country: string,
        public departureDate: string,
        public returnDate: string
    ){}
}