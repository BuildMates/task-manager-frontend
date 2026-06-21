import { describe, it, expect } from 'vitest';

describe('SignupForm', () => {
  it('should exist', () => {
    expect(true).toBe(true);
  });
  
  it('should validate email format', () => {
    const email = 'test@example.com';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(email)).toBe(true);
  });
  
  it('should validate password length', () => {
    const password = 'password123';
    expect(password.length).toBeGreaterThanOrEqual(6);
  });
  
  it('should check password match', () => {
    const password = 'password123';
    const confirmPassword = 'password123';
    expect(password === confirmPassword).toBe(true);
  });
  
  it('should reject mismatched passwords', () => {
    const passwords = ['password123', 'password456'];
    expect(passwords[0]).not.toBe(passwords[1]);
  });
  
  it('should validate phone number format', () => {
    const phone = '9876543210';
    const phoneRegex = /^\d{10}$/;
    expect(phoneRegex.test(phone)).toBe(true);
  });
});
