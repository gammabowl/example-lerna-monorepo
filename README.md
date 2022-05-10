## Packages managed by `Lerna`
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

### Running locally
Steps:
1. `npm run packages:bootstrap` - Installs all package dependencies and links dependencies
  For local development, --force-local flag uses the local built package rather than getting it from npm registry.
2. `npm run packages:bootstrap:hoist` - Run build for all packages
3. `npm run packages:build` - Run build for all packages
4. `npm run packages:test` - Run tests for all packages

### Semantic Release Publishing to NPM Registry
* `npm run packages:publish`
