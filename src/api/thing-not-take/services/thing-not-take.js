'use strict';

/**
 * thing-not-take service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::thing-not-take.thing-not-take');
