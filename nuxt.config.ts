import path from "path";
import { Configuration } from "@nuxt/types";

const config: Configuration = {
  srcDir: "src",
  buildModules: ["@nuxt/typescript-build"],
  build: {
    loaders: {
      scss: {
        sassOptions: {
          // 参照のルートパスを追加
          includePaths: [path.join(__dirname, "src/assets/styles")],
        },
      },
    },
  },
};

module.exports = config;
