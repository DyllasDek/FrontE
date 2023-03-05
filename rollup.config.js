import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'scripts/script.ts',
    output: { file: 'scripts/script.js' },
    plugins: [ nodeResolve({ browser: true }), typescript() ],
};