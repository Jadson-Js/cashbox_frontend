// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
  },
  {
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["@tailwind", "./tailwind.css"], // ajuste o caminho conforme necessário
          ],
          extensions: [".js", ".jsx", ".ts", ".tsx", ".css"], // Adicione .css
        },
      },
    },
  },
]);
