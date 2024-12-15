
import babel from "@rollup/plugin-babel";
import { dts } from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-commonjs"

const External = [

];

export default [
  {
    input: ['./src/index.ts', 'src/types/index.ts', 'src/api/index.ts', 'src/enum/index.ts'],
    External,
    output: [{
      dir: 'dist/esm/',
      format: 'esm',
      preserveModules: true,
      entryFileNames: "[name].js"
    }],
    plugins: [
      peerDepsExternal(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: 'bundled',
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
        ],
        extensions: ['.ts'],
      }),
      resolve({
        extensions: ['js', '.ts'],
      })
    ],
  },
  {
    input: './src/index.ts',
    output: [{ dir: 'dist/esm/', format: 'esm', preserveModules: true, entryFileNames: "[name].d.ts" }],
    plugins: [dts()],
    External,
  },
  {
    input: './src/index.ts',
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
    },
    plugins: [
      peerDepsExternal(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: 'bundled',
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
        ],
        extensions: ['.ts'],
      }),
      resolve({
        extensions: ['.js', '.ts'],
      })
    ],
    External,
  },
  {
    input: './src/index.ts',
    output: [{ file: 'dist/cjs/index.d.ts', format: 'cjs' }],
    plugins: [dts()],
    External,
  }
];
