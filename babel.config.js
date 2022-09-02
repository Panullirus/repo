module.exports = function(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
              "module-resolver",
              {
                alias: {
                  "@src": "./src",
                  types: "./types.tsx",
                  "@screens": "./screens",
                  tailwind: "./tailwind.js"
                }
              }
            ],
            ],
        };

};