import { ItemType } from "../models/itemtype"
import { ItemProperties } from "../models/itemproperties"

export class ItemsService {
    getItemTypeByName(itemName: string) : ItemType {
        return ItemType.Standard
    }

    getItemPropertiesByItemName(itemName: string) : ItemProperties {
        return new ItemProperties();
    }
}