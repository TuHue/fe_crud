import { attach } from "./app/store.js";
import App from "./App.js";
import { root } from './util/constant.js'


attach(() => App(), root)