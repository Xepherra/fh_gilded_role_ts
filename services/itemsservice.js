"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsService = void 0;
var itemtype_1 = require("../models/itemtype");
var itemproperties_1 = require("../models/itemproperties");
var ItemsService = /** @class */ (function () {
    function ItemsService() {
    }
    ItemsService.prototype.getItemTypeByName = function (itemName) {
        return itemtype_1.ItemType.Standard;
    };
    ItemsService.prototype.getItemPropertiesByItemName = function (itemName) {
        return new itemproperties_1.ItemProperties();
    };
    return ItemsService;
}());
exports.ItemsService = ItemsService;
