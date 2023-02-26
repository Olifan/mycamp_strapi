'use strict';

/**
 * thing-to-take service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::thing-to-take.thing-to-take');
