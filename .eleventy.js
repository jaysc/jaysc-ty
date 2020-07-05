module.exports = (config) => {
  config.addPassthroughCopy("./src/fonts");
  config.addPassthroughCopy("./src/images");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    passthroughFileCopy: true,
    templateFormats: ["md", "liquid", "html"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
  };
};
