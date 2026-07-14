export interface Address {

    id: string;
    title: string;
    receiver: string;
    phone: string;
    addressLine: string;
    city: string;
    state: string;
    landmark?: string;
    isDefault: boolean;

}