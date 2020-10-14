const functions = require('firebase-functions');
import { app } from './app';
export const expressRESTAPI = functions.https.onRequest(app);