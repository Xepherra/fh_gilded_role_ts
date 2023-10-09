"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemProperties = void 0;
var ItemProperties = /** @class */ (function () {
    function ItemProperties(itemType, improvesWithAge, isForSale, minQuality, maxQuality, baseQualityChangeRate, tieredQualityChangeRate) {
        this.itemType = itemType;
        this.improvesWithAge = improvesWithAge;
        this.isForSale = isForSale;
        this.minQuality = minQuality;
        this.maxQuality = maxQuality;
        this.baseQualityChangeRate = baseQualityChangeRate;
        this.tieredQualityChangeRate = tieredQualityChangeRate;
    }
    return ItemProperties;
}());
exports.ItemProperties = ItemProperties;
