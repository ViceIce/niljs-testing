import { set } from './utils/cache';

export const Pi = Math.PI;
export const E = Math.E;

export function test() {
    set('PI', Pi);
}
