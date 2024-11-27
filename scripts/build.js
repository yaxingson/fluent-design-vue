#!/usr/bin/env node
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { rollup } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import license from 'rollup-plugin-license'
import alias from '@rollup/plugin-alias'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function build(inputOptions, outputOptions) {
  try {
    const bundle = await rollup(inputOptions)
    await bundle.write(outputOptions)
  } catch(e) {
    throw e
  }
}

const inputOptions = {
  input:resolve(__dirname, '../lib/components/index.ts'),
  plugins:[
    typescript(),
    vue()
  ]
}

const outputOptions = [
  {
    file:resolve(__dirname, '../dist/index.mjs'),
    format:'esm'
  },
  {
    file:resolve(__dirname, '../dist/index.min.mjs'),
    format:'esm',
    plugins:[terser()]
  },
  {
    file:resolve(__dirname, '../dist/index.cjs'),
    format:'cjs'
  },
  {
    file:resolve(__dirname, '../dist/index.min.cjs'),
    format:'cjs',
    plugins:[terser()]
  },
  {
    file:resolve(__dirname, '../dist/index.full.js'),
    format:'umd',
    name:'FluentDesignVue',
    globals:{
      vue:'Vue'
    }
  },
  {
    file:resolve(__dirname, '../dist/index.full.min.js'),
    format:'umd',
    name:'FluentDesignVue',
    globals:{
      vue:'Vue'
    },
    plugins:[terser()]
  }
]

async function startBuild() {
  for(const outputOption of outputOptions) {
    await build(inputOptions, outputOption)
  }
}

startBuild()
