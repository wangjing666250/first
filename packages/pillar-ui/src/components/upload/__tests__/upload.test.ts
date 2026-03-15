import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import Upload from '../Upload.vue';

function mockFileInputFiles(input: HTMLInputElement, files: File[]): void {
  Object.defineProperty(input, 'files', {
    value: files,
    writable: false,
    configurable: true,
  });
}

describe('XxUpload', () => {
  it('calls request when file is valid', async () => {
    const request = vi.fn().mockResolvedValue(undefined);
    const wrapper = mount(Upload, {
      props: { request },
    });

    const input = wrapper.find('input[type="file"]');
    const file = new File(['content'], 'demo.png', { type: 'image/png' });

    mockFileInputFiles(input.element as HTMLInputElement, [file]);
    await input.trigger('change');
    await Promise.resolve();

    expect(request).toHaveBeenCalledTimes(1);
  });

  it('stops upload when beforeUpload returns false', async () => {
    const request = vi.fn().mockResolvedValue(undefined);
    const wrapper = mount(Upload, {
      props: {
        beforeUpload: () => false,
        request,
      },
    });

    const input = wrapper.find('input[type="file"]');
    const file = new File(['content'], 'demo.png', { type: 'image/png' });

    mockFileInputFiles(input.element as HTMLInputElement, [file]);
    await input.trigger('change');
    await Promise.resolve();

    expect(request).not.toHaveBeenCalled();
    expect(wrapper.emitted('reject')).toBeTruthy();
  });

  it('rejects file when type does not match accept', async () => {
    const request = vi.fn().mockResolvedValue(undefined);
    const wrapper = mount(Upload, {
      props: {
        accept: '.png',
        request,
      },
    });

    const input = wrapper.find('input[type="file"]');
    const file = new File(['x'], 'a.txt', { type: 'text/plain' });

    mockFileInputFiles(input.element as HTMLInputElement, [file]);
    await input.trigger('change');
    await Promise.resolve();

    expect(request).not.toHaveBeenCalled();
    expect(wrapper.emitted('reject')).toBeTruthy();
  });

  it('rejects file when size exceeds maxSize', async () => {
    const request = vi.fn().mockResolvedValue(undefined);
    const wrapper = mount(Upload, {
      props: {
        maxSize: 0.000001,
        request,
      },
    });

    const input = wrapper.find('input[type="file"]');
    const file = new File(['too-large'], 'big.png', { type: 'image/png' });

    mockFileInputFiles(input.element as HTMLInputElement, [file]);
    await input.trigger('change');
    await Promise.resolve();

    expect(request).not.toHaveBeenCalled();
    expect(wrapper.emitted('reject')).toBeTruthy();
  });
});