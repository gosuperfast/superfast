import { Application } from "@hotwired/stimulus";

const application = Application.start();

import { Alert, Modal } from "tailwindcss-stimulus-components";
application.register("alert", Alert);
application.register("modal", Modal);

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

export { application };
