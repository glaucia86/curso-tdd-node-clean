/* eslint-disable no-import-assign */
/**
 * file: jest-integration-config.js
 * date: 09/11/2022
 * description: file responsible for integration tests configuration
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const config = require('./jest.config');
config.testMatch = ['**/*.test.ts'];

module.exports = config;