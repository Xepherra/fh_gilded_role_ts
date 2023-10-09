import { expect } from 'chai';
import { Item } from '../../models/items';
import { GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('fixme');
  });
});
