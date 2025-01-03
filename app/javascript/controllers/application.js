import { Application } from "@hotwired/stimulus";

const application = Application.start();

import { Alert } from "tailwindcss-stimulus-components";
application.register("alert", Alert);

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

export { application };
