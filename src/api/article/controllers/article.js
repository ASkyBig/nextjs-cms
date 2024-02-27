"use strict";
const {
  removeTime,
  removeAttrs,
  removeAttrsAndId,
} = require("../../../utils/index.js");

/**
 * article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  async find(ctx) {
    const { data } = await super.find(ctx);
    const res = data.map((item) => removeAttrsAndId(removeTime(item)));
    return { data: res };
  },
  async findOne(ctx) {
    const { data, meta } = await super.findOne(ctx);
    const res = removeAttrsAndId(removeTime(data));
    return { ...res };
  },
}));
