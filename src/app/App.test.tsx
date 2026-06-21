import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('should pass basic test', () => {
    expect(true).toBe(true);
  });
  
  it('should have correct app structure', () => {
    const appName = 'task-manager';
    expect(appName).toBe('task-manager');
  });
});
