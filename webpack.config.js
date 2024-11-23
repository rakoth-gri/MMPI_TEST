import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import FileManagerPlugin from "filemanager-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";
import { plugin } from "postcss";

const isDev = process.env.NODE_ENV === "development";
const target = isDev ? "web" : "browserslist";
// режим
const mode = isDev ? "development" : "production";

const babelUseValue = (preset) => {
  return {
    loader: "babel-loader",
    options: {
      presets: preset ? ["@babel/preset-env", preset] : ["@babel/preset-env"],
    },
  };
};

function Mimimiser() {
  return mode === "production"
    ? [
        new CssMinimizerPlugin(),
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
        }),
      ]
    : [];
}

export default {
  target,
  mode,
  entry: {
    index: [
      "@babel/polyfill",
      // path.resolve(__dirname, "src", "scripts", "index.ts"),
      path.resolve() + "/src" + "/scripts" + "/index.ts",
    ],
  },
  output: {
    filename: "[name].[contenthash].js",
    // path: path.resolve(__dirname, "dist"),
    path: path.resolve() + "/dist",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/i,
        use: [
          mode === "production" ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [postcssPresetEnv],
              },
              // plugins: [
              //   autoprefixer({
              //     browsers: ["last 2 version"],
              //   }),
              // ],
              sourceMap: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: babelUseValue(),
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: babelUseValue("@babel/preset-typescript"),
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: babelUseValue("@babel/preset-react"),
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name].[ext]",
        },
      },
    ],
  },
  devServer: {
    port: 3013,
    open: true,
    // watchFiles: path.join(__dirname, "src"),
    watchFiles: path.join() + "/src",
    client: {
      logging: "warn",
    },
    hot: isDev,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: path.resolve(__dirname, "src", "index.html"),
      template: path.resolve() + "/src" + "/index.html",
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [
            {
              source: path.resolve() + "/src/img",
              destination: path.resolve() + "/dist/img",
            },
          ],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  optimization: {
    minimizer: Mimimiser(),
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx", ".tsx", ".ts"],
  },
};
