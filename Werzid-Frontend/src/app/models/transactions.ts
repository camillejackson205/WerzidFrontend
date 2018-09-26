export interface transaction{
    TransactionID: number;
    OwnerID: number;
    Quantity: number;
    ProductID: number;
    TotalPrice: number;
    Date: Date;
    Purchased: boolean;
}