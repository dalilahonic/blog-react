'use strict';

/**
 * speaking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::speaking.speaking');
