export interface AcceptModel {

    customerId: String;
    providerId: String;
    status:string
    acceptDate: Date|null;
    serviceStartDate: Date|null;
    serviceEndDate: Date|null;
    customerConfirmation: String;
    paidStatus: String;

}