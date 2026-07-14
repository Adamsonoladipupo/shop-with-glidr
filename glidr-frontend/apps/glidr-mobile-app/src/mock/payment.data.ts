import { PaymentMethod } from "@/types/payment";

export const paymentMethods: PaymentMethod[] = [

    {

        id: "1",

        brand: "Visa",

        lastFour: "3402",

        expiryMonth: "08",

        expiryYear: "28",

        cardHolder: "Henry Olaitan",

        isDefault: true,

    },

    {

        id: "2",

        brand: "Mastercard",

        lastFour: "7815",

        expiryMonth: "04",

        expiryYear: "27",

        cardHolder: "Henry Olaitan",

        isDefault: false,

    },

];