export interface Transaction{
    TransactionID: number;
    ProductQuantity: number;
    ProductID: number;
    ProductName: string;
    TotalPrice: number;
    PurchaseDate: Date;
    Purchased: boolean;
}