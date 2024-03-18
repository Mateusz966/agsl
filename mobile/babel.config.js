module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          components: './src/components',
          atoms: './src/components/atoms',
          molecules: './src/components/molecules',
          organisms: './src/components/organisms',
          templates: './src/components/templates',
          pages: './src/components/pages',
          theme: './src/config/theme',
          navigators: './src/navigators/',
          common: './src/common/',
          assets: './src/assets',
          api: './src/api/',
          CameraSettings: './src/utils/CameraSettings',
        },
      },
    ],
  ],
};
