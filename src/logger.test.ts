import * as logger from './logger';

describe('logger', (): void => {
  it('should log', async (): Promise<void> => {
    console.log = jest.fn();
    expect(console.log).toHaveBeenCalledTimes(0);

    logger.log();

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Shizzle my nizzle');
  });
});
