module.exports = {
  rules: [
    {
      test: /\.less$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
        },
        {
          loader: "less-loader",
          options: {
            modifyVars: {
              "primary-color": "#FFF",
              hack: `true; @import "your-less-file-path.less";`,
            },
            javascriptEnabled: true,
          },
        },
      ],
    },
  ],
};
