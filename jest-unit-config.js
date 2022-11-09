/**
 * file: jest-unit-config.js
 * date: 09/11/2022
 * description: file responsible for unit tests configuration
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const config = require('./jest.config');
config.testMatch = ['**/*.spec.ts'];

module.exports = config;