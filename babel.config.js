module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    //Início da configuração do babel
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets'     :'./src/assets',
            '@components' :'./src/components',
            '@routes'     :'./src/routes',
            '@screens'    :'./src/screens',
            '@storage'    :'./src/storage',
            '@utils'      :'./src/utils',
          }
        }
      ]
    ]
    //Fim da configuração do babel
  };
};
