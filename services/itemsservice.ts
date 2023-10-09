import { ItemType } from "../models/itemtype"
import { ItemProperties } from "../models/itemproperties"

export class ItemsService {
    getItemPropertiesByItemName(itemName: string) : ItemProperties {
        switch (itemName) {
            case 'Sulfuras, Hand of Ragnaros':
                return new ItemProperties(
                    ItemType.Legendary,
                    true,
                    false,
                    80,
                    80,
                    0,
                    {0: 0})
            case 'Aged Brie':
                return new ItemProperties(
                    ItemType.Standard,
                    true,
                    true,
                    0,
                    50,
                    1,
                    {0: 0})
            case 'Backstage passes to a TAFKAL80ETC concert':
                return new ItemProperties(
                    ItemType.Tiered,
                    true,
                    true,
                    0,
                    50,
                    1,
                    {10: 2, 5: 3})
            case 'Conjured Mana Cake':
                return new ItemProperties(
                    ItemType.Conjured,
                    false,
                    true,
                    0,
                    50,
                    1,
                    {0: 0})
            default:
                return new ItemProperties(
                    ItemType.Standard,
                    false,
                    true,
                    0,
                    50,
                    1,
                    {0: 0})
        }
    }
}