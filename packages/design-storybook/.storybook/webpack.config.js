const path = require("path");
const theme = require('../theme.json')

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    loader: "babel-loader",
    exclude: /node_modules/,
    // FIXME: include ts/tsx here?
    test: /\.(t|j)sx?$/,
    options: {
      presets: [
        "@babel/react",
        "@babel/preset-typescript"
      ],
      plugins: [
        [
          "import",
          {
            libraryName: "antd",
            // TODO: lib or es which is better?
            libraryDirectory: "es",
            style: true,
          },
        ],
      ],
    },
  });

  config.module.rules.push({
    test: /\.less$/,
    loaders: [
      "style-loader",
      "css-loader",
      {
        loader: "less-loader",
        options: {
          additionalData: `
            @import '~@brokerbay/design-storybook/stories/onboarding/theme.less';
          `,
          lessOptions: {
            // FIXME: do we need this?
            javascriptEnabled: true,

            modifyVars: {
              ...theme
            }
          },
        },
      },
    ],
    include: [
      path.resolve(__dirname, "../stories"),
      /[\\/]node_modules[\\/].*antd/,
    ],
  });

  return config;
};
