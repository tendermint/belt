// https://github.com/facebook/jest/issues/7780#issuecomment-615890410

// eslint-disable-next-line @typescript-eslint/no-var-requires
const NodeEnvironment = require('jest-environment-node');

class Environment extends NodeEnvironment {
    constructor (config) {
        super({
            ...config,
            globals: {
                ...config.globals,
                Uint32Array: Uint32Array,
                Uint8Array:  Uint8Array,
                ArrayBuffer: ArrayBuffer
            }
        });
    }
}

module.exports = Environment;
