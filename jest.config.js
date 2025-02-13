const cssRegex = '^.+\\.css$'
const cssModuleRegex = '^.+\\.module\\.css$'

module.exports = {
  moduleNameMapper: {
    [cssRegex]: 'identity-obj-proxy',
    [cssModuleRegex]: 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [`/.pnp.cjs$`, cssRegex, cssModuleRegex],
  testMatch: [
    `<rootDir>/packages/**/*/?(*.)+(test).(js|ts|tsx)`,
    '!<rootDir>/packages/design-tokens/**/*',
  ],
  testTimeout: 50000,
}
