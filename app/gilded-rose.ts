import { Item } from "../models/items"
import { ItemProperties } from "../models/itemproperties"
import { ItemType } from "../models/itemtype";
import { ItemsService } from "../services/itemsservice";
import { QualityService } from "../services/qualityservice";

export class GildedRose {
  items: Array<Item>;
  qualityService: QualityService;
  itemsService: ItemsService;

  constructor(items = [] as Array<Item>) {
    this.items = items;
    this.qualityService = new QualityService();
    this.itemsService = new ItemsService();
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const itemProps = this.itemsService.getItemPropertiesByItemName(this.items[i].name);
      this.qualityService.updateQuality(this.items[i], itemProps);
    }

    return this.items;
  }
}
