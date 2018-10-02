export interface Transaction{
    TransactionID: number;
    OwnerID: number;
    Quantity: number;
    ProductID: number;
    TotalPrice: number;
    Date: number;
    Purchased: boolean;
}