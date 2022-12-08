const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@pages": "src/pages",
    "@components": "src/components",
    "@UI": "src/components/UI",
    "@constants": "src/constants",
    "@style": "src/style",
    "@fonts": "src/fonts",
    "@routes": "src/routes",
    "@utils": "src/utils",
    "@store": "src/store",
    "@hooks": "src/hooks",
  })(config);
  return config;
};
