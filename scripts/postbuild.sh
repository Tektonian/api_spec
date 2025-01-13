#!/bin/sh

# Create root .d.ts files for package exports, for compatibility with
# TypeScript projects configured with "moduleResolution": "node10"
# (which is the default when using "module": "commonjs").
echo "export * from './dist/esm/enum';" > enum.d.ts
echo "export * from './dist/esm/zod';" > zod.d.ts
echo "export * as APIType from './dist/esm/types';" > index.d.ts