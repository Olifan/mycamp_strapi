'use strict';

/**
 * for-parent service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::for-parent.for-parent');
