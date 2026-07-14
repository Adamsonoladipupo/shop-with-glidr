export interface PaymentMethod {

    id: string;

    brand: "Visa" | "Mastercard" | "Verve";

    lastFour: string;

    expiryMonth: string;

    expiryYear: string;

    cardHolder: string;

    isDefault: boolean;

}