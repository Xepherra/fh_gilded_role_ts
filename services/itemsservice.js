"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsService = void 0;
var itemtype_1 = require("../models/itemtype");
var itemproperties_1 = require("../models/itemproperties");
var ItemsService = /** @class */ (function () {
    function ItemsService() {
    }
    ItemsService.prototype.getItemPropertiesByItemName = function (itemName) {
        switch (itemName) {
            case 'Sulfuras, Hand of Ragnaros':
                return new itemproperties_1.ItemProperties(itemtype_1.ItemType.Legendary, true, false, 80, 80, 0, { 0: 0 });
            case 'Aged Brie':
                return new itemproperties_1.ItemProperties(itemtype_1.ItemType.Standard, true, true, 0, 50, 1, { 0: 0 });
            case 'Backstage passes to a TAFKAL80ETC concert':
                return new itemproperties_1.ItemProperties(itemtype_1.ItemType.Tiered, true, true, 0, 50, 1, { 10: 2, 5: 3 });
            case 'Conjured Mana Cake':
                return new itemproperties_1.ItemProperties(itemtype_1.ItemType.Conjured, false, true, 0, 50, 1, { 0: 0 });
            default:
                return new itemproperties_1.ItemProperties(itemtype_1.ItemType.Standard, false, true, 0, 50, 1, { 0: 0 });
        }
    };
    return ItemsService;
}());
exports.ItemsService = ItemsService;
