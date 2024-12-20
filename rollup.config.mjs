import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import babel from '@rollup/plugin-babel'
import image from '@rollup/plugin-image'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import pkg from './package.json' assert { type: 'json' }

export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/module.js',
    output: [
      { file: pkg.module, format: 'cjs' }
    ],
    plugins: [
      image(),
      json(),
      peerDepsExternal(),
      babel({
        exclude: 'node_modules/**',
        skipPreflightCheck: 'true',
        babelHelpers: 'runtime',
      }),
      resolve(),
      commonjs()
    ]
  },
]
