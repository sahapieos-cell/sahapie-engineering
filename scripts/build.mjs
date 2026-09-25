import { cpSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const source = resolve('site');
const output = resolve('dist');
if (!existsSync(source)) throw new Error('site/ source folder is missing');
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
cpSync(source, output, { recursive: true });
console.log('Built static site in dist/');
