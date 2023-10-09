"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualityService = void 0;
var QualityService = /** @class */ (function () {
    function QualityService() {
    }
    QualityService.prototype.updateQuality = function (item, props) {
        if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
                if (item.name != 'Sulfuras, Hand of Ragnaros') {
                    item.quality = item.quality - 1;
                }
            }
        }
        else {
            if (item.quality < 50) {
                item.quality = item.quality + 1;
                if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                    if (item.sellIn < 11) {
                        if (item.quality < 50) {
                            item.quality = item.quality + 1;
                        }
                    }
                    if (item.sellIn < 6) {
                        if (item.quality < 50) {
                            item.quality = item.quality + 1;
                        }
                    }
                }
            }
        }
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.sellIn = item.sellIn - 1;
        }
        if (item.sellIn < 0) {
            if (item.name != 'Aged Brie') {
                if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
                    if (item.quality > 0) {
                        if (item.name != 'Sulfuras, Hand of Ragnaros') {
                            item.quality = item.quality - 1;
                        }
                    }
                }
                else {
                    item.quality = item.quality - item.quality;
                }
            }
            else {
                if (item.quality < 50) {
                    item.quality = item.quality + 1;
                }
            }
        }
        return item;
    };
    QualityService.prototype.updateStandardItemQuality = function (item, props) {
        return item;
    };
    QualityService.prototype.updatLegendaryItem = function (item, props) {
        return item;
    };
    QualityService.prototype.updatConjured = function (item, props) {
        return item;
    };
    QualityService.prototype.updateTiered = function (item, props) {
        return item;
    };
    return QualityService;
}());
exports.QualityService = QualityService;
