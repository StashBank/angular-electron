export class TableRowModel {
  car: {
    vin: string;
    name: string;
    year: number;
    age: number;
    odometer: number;
    volume: number;
    fuelType: string;
    bodyType: string;
  };
  auction: {
    name: string;
    auctionFee: number;
    gateFee: number;
    keepingFee: number;
    penaltyFee: number;
    webFee: number;
    trdPartiesFee: number;
  };
  carFax: number;
  deliveryUSA: {
    auction: number;
    deliveryCompany: number;
    port: number;
    customsDuties: number;
    oceanDelivery: number;
    landing: number;
  };
  customsClearance: {
    excise: number;
    importDuty: number;
    VAT: number;
    retirementFee: number;
    dealerPayment: number;
  };
  deliveryUA: {
    container: number;
    carDelivery: number;
  };
  repair: {
    works: number;
    equipmentParts: number;
    towTruck: number;
  };
  certification: number;
  registration: number;
  marketPrice: number;
  nonTaxExpansion: number;
  inTaxExpansion: number;
  auctionPriceExpansion: number;
  limit: number;
  nonTaxNonExpansionPrice: number;
  inTaxInExpansionPrice: number;
  incomeTax: number;
  totalPrice: number;
  maxAuctionPrice: number;
}
