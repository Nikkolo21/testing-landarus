module.exports = {
  presets: [
    // e.g., "@babel/preset-env", "@babel/preset-react", etc
  ],
  plugins: [
    // if you are using legacy decorators:
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    // then if you are using class properties:
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
};
