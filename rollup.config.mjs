
import babel from "@rollup/plugin-babel";
import { dts } from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-commonjs"


const External = [

];

export default [
  {
    input: './src/index.ts',
    External,
    output: [{
      file: 'dist/esm/index.js',
      format: 'esm',
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
    output: [{ file: 'dist/esm/index.d.ts', format: 'esm' }],
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
