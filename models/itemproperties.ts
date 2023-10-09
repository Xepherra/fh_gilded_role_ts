import { ItemType } from "./itemtype";

export class ItemProperties {
    itemType: ItemType;
    improvesWithAge: boolean;
    isForSale: boolean;
    minQuality: number;
    maxQuality: number;
    baseQualityChangeRate: number;
    tieredQualityChangeRate: { [key: number]: number};

    constructor(
        itemType: ItemType,
        improvesWithAge: boolean,
        isForSale: boolean,
        minQuality: number,
        maxQuality: number,
        baseQualityChangeRate: number,
        tieredQualityChangeRate: { [key: number]: number}) 
    {
        this.itemType = itemType;
        this.improvesWithAge = improvesWithAge;
        this.isForSale = isForSale;
        this.minQuality = minQuality;
        this.maxQuality = maxQuality;
        this.baseQualityChangeRate = baseQualityChangeRate;
        this.tieredQualityChangeRate = tieredQualityChangeRate;
    }
}