// {
//     "presets":["@babel/preset-env","@babel/preset-react",],
//     "plugins": ["@babel/plugin-proposal-object-rest-spread","@babel/plugin-proposal-class-properties"]
// }

module.exports = function (api) {
    api.cache(true);
  
    const presets = ["@babel/preset-env","@babel/preset-react"];
    const plugins = ["@babel/plugin-proposal-object-rest-spread","@babel/plugin-proposal-class-properties"];
  
    return {
      presets,
      plugins
    };
  }