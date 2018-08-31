import "css-modules-require-hook/preset"
import imgHook from "images-require-hook"
imgHook([".png", ".svg"], "~/src/img");

require('babel-register')();
require("babel-polyfill");
 
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
 
var exposedProperties = ['window', 'navigator', 'document'];
 
const { document } = (new JSDOM("", {
  url: "https://example.com",
})).window;
global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});
 
global.navigator = {
  userAgent: 'node.js',
  platform: 'linux',
};


// Enzyme
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({adapter: new Adapter() });
