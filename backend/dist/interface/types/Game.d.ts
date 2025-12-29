export interface Package {
    name: string;
    old_price: number;
    new_price: number;
    image: string;
}
export interface PackageType {
    name: string;
    packages: [Package];
}
export interface RawGame {
    name: string;
    icon: string;
    about: string;
    check_id_url: string;
    palyStore: string;
    appStore: string;
    packages: [PackageType];
}
export default interface Game extends RawGame {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}
