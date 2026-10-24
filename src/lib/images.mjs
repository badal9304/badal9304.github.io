// Image helper used at build time: reads an image's real size from the public folder.
import sharp from 'sharp';
import { join } from 'node:path';

const cache = new Map();

/** Returns { width, height } for a site path like "/images/x.webp", or null if it can't be read. */
export function imageSize(src) {
  if (typeof src !== 'string' || !src.startsWith('/')) return Promise.resolve(null);
  if (!cache.has(src)) {
    const file = join(process.cwd(), 'public', decodeURI(src));
    cache.set(src, sharp(file).metadata().then((m) => ({ width: m.width, height: m.height })).catch(() => null));
  }
  return cache.get(src);
}
