#!/bin/sh

# Create root .d.ts files for package exports, for compatibility with
# TypeScript projects configured with "moduleResolution": "node10"
# (which is the default when using "module": "commonjs").
echo "export * as APIEnum from './dist/esm/enum';" > enum.d.ts
echo "export * from './dist/esm/joi';" > joi.d.ts
echo "export * as APIType from './dist/esm/types';" > types.d.ts