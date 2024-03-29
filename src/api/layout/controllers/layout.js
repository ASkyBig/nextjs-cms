"use strict";

/**
 * layout controller
 */
const { removeTime, removeAttrsAndId } = require("../../../utils/index.js");

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::layout.layout');

module.exports = createCoreController("api::layout.layout", ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: "deep",
    };
    const { data } = await super.find(ctx);
    return removeAttrsAndId(removeTime(data[0]));
  },
}));
