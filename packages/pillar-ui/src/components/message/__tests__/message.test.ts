import { describe, expect, it, vi } from 'vitest';
import { createMessage } from '../message';

describe('Message', () => {
  it('mounts and auto closes', () => {
    vi.useFakeTimers();
    createMessage({
      message: 'saved',
      type: 'success',
      duration: 300,
    });

    expect(document.body.textContent).toContain('saved');
    vi.advanceTimersByTime(350);
    expect(document.body.textContent).not.toContain('saved');
    vi.useRealTimers();
  });
});
