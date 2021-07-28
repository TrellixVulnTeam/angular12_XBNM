import { DebitMaskPipe } from './debit-mask.pipe';

describe('DebitMaskPipe', () => {
  it('create an instance', () => {
    const pipe = new DebitMaskPipe();
    expect(pipe).toBeTruthy();
  });
});
