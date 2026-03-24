import { describe, expect, it } from 'vitest';
import { buttonSpec } from '../button.spec';
import { inputSpec } from '../input.spec';
import { menuSpec } from '../menu.spec';
import { modalSpec } from '../modal.spec';
import { paginationSpec } from '../pagination.spec';
import { selectSpec } from '../select.spec';
import { tableSpec } from '../table.spec';
import { tabsSpec } from '../tabs.spec';
import { uploadSpec } from '../upload.spec';

describe('component specs', () => {
  it('contains required api rows', () => {
    expect(buttonSpec.attributes.length).toBeGreaterThan(0);
    expect(inputSpec.slots.some((item) => item.name === 'prefix')).toBe(true);
    expect(menuSpec.events.some((item) => item.name === 'update:active')).toBe(true);
    expect(modalSpec.slots.some((item) => item.name === 'footer')).toBe(true);
    expect(paginationSpec.attributes.some((item) => item.name === 'pageSize')).toBe(true);
    expect(selectSpec.events.some((item) => item.name === 'change')).toBe(true);
    expect(tableSpec.attributes.some((item) => item.name === 'columns')).toBe(true);
    expect(tabsSpec.events.some((item) => item.name === 'change')).toBe(true);
    expect(uploadSpec.attributes.some((item) => item.name === 'maxSize')).toBe(true);
  });
});

