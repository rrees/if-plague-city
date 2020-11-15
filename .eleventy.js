module.exports = function(eleventyConfig) {
  // Vanilla CSS is not supported by default
  eleventyConfig.addPassthroughCopy("css");
}