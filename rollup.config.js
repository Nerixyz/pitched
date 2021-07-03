import { defineConfig } from 'rollup';
import swc from 'rollup-plugin-swc';
import copy from 'rollup-plugin-copy';

function tsPlugin() {
  /** @type {import('@swc/core').Options} */
  const options = {
    jsc: {
      parser: {
        syntax: 'typescript',
      },
      target: 'es2020',
    },
    sourceMaps: 'inline'
  };
  return swc(options);
}

function file(name) {
  return {
    input: `src/${name}.ts`,
    output: {
      dir: 'dist',
      sourcemap: 'inline',
    },
  }
}

export default defineConfig([
  {
    ...file('index'),
    plugins: [tsPlugin(), copy({ targets: [{ src: 'public/*', dest: 'dist' }] })],
  },
  {
    ...file('context'),
    plugins: [tsPlugin()],
  },
  {
    ...file('background'),
    plugins: [tsPlugin()],
  },
]);
