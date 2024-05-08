import {setupWorker} from 'msw/browser';
import {handlers} from './handlers';

// Here we import the handler created!
export const worker = setupWorker(...handlers);

//export const worker = setupWorker(...handlers);
