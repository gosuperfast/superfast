// https://www.youtube.com/watch?v=JLJFpD89ZaI
import { Controller } from "@hotwired/stimulus";
import EditorJS from "@editorjs/editorjs";

import Paragraph from "@editorjs/paragraph";

// Connects to data-controller="editor"
export default class extends Controller {
  static targets = ["articleBody"];

  connect() {
    console.log("Hello, Stimulus!");

    this.bodyEditor = new EditorJS({
      holder: this.articleBodyTarget,
    });

    this.element.addEventListener("submit", this.handleSubmit.bind(this));
  }

  async handleSubmit(event) {
    event.preventDefault();
    const outputData = await this.bodyEditor.save();

    const articleForm = this.element;

    const hiddenInput = document.getElementById("article_body_hidden");

    hiddenInput.value = JSON.stringify(outputData);

    articleForm.submit();
  }
}
