export default class TopupDto {
    customer: string;
    game: string;
    user_id: number;
    zone_id: number;
    ingame_name: string | null;
    packages: [string];
    currency: string;
    payment: string;
}
