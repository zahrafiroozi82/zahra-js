"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importer_js_1 = require("./src/importer.js");
const events_js_1 = require("./src/events.js");
importer_js_1.showContactsButton === null ||
importer_js_1.showContactsButton === void 0
  ? void 0
  : importer_js_1.showContactsButton.addEventListener(
      "click",
      events_js_1.showContactsBottonHandler
    );
importer_js_1.closeDrawerButton === null ||
importer_js_1.closeDrawerButton === void 0
  ? void 0
  : importer_js_1.closeDrawerButton.addEventListener(
      "click",
      events_js_1.closeContactsDrawerHandler
    );
importer_js_1.submitButton === null || importer_js_1.submitButton === void 0
  ? void 0
  : importer_js_1.submitButton.addEventListener(
      "click",
      events_js_1.handleCreateContact
    );
