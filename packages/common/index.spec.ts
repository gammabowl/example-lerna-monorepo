describe('module', () => {
  it('should export HealthcheckDTO', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { HealthcheckDTO } = require('./index');
    expect(HealthcheckDTO).toBeDefined();
  });
});
