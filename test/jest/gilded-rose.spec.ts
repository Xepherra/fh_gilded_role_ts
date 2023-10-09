import { GildedRose } from '@/gilded-rose';
import { Item } from 'models/items';

describe('Gilded Rose', () => {
  it('standard items degrade in quality as sell by date approaches', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Not yet implemented');
  });

  it('standard items degrade in quality twice as fast as sell by date approaches', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Not yet implemented');
  });

  it('standard items should never have negative quality', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Not yet implemented');
  });

  it('standard that improve with age should not have a negative quality', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Not yet implemented');
  });

  it('standard that improve with age should not have a increased quality over time', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Not yet implemented');
  });

  it('legendary items should never have negative quality', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Not yet implemented');
  });

  it('legendary items should never have quality lower than legendary quality and cannot be sold', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Not yet implemented');
  });

  it('quality of tiered items that improve with age should increase as SellIn value approaches', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Not yet implemented');
  });

  it('quality of tiered items that improve with age should increase by X given A-B range of days', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Not yet implemented');
  });

  it('quality of tiered items that improve with age should increase by Y given C-D range of days', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Not yet implemented');
  });

  it('quality of tiered items should be zero on expiry', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Not yet implemented');
  });

  it('quality of tiered items that improve with age should never exceed max quality', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Not yet implemented');
  });

  it('quality of tiered items that improve with age should never drop below zero', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Not yet implemented');
  });

  it('quality of conjured items should degrade by 2', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Not yet implemented');
  });

  it('quality of conjured items should degrade by 4 upon expiry', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Not yet implemented');
  });

  it('quality of conjured items should not fall below 0', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Not yet implemented');
  });

});
