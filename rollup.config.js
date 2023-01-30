import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: './src/index.js',
  output: {
    file: './dist/quasarx.js',
    format: 'umd',
    name: 'x'
  },
  plugins: [
    babel({
      exclude: './node_modules/**'
    }),
    resolve()
  ]
}