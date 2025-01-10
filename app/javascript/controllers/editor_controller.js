// https://www.youtube.com/watch?v=JLJFpD89ZaI
// https://www.youtube.com/watch?v=Xd8kFi2JRKM
import { Controller } from "@hotwired/stimulus";
import EditorJS from "@editorjs/editorjs";

import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Code from "@editorjs/code";

// Connects to data-controller="editor"
export default class extends Controller {
  static targets = ["articleBody"];

  connect() {
    const initialContent = this.getInitialContent();

    this.bodyEditor = new EditorJS({
      holder: this.articleBodyTarget,
      data: initialContent,
      tools: {
        header: {
          class: Header,
          config: {
            inlineToolbar: true,
            levels: [1, 2, 3, 4],
            placeholder: "Enter a header",
          },
        },
        paragraph: {
          class: Paragraph,
          config: {
            inlineToolbar: true,
            placeholder: "Write something nice...",
          },
        },
        list: {
          class: List,
          config: {
            inlineToolbar: true,
          },
        },
        code: {
          class: Code,
          config: {
            inlineToolbar: true,
          },
        },
      },
    });

    this.element.addEventListener("submit", this.handleSubmit.bind(this));
  }

  getInitialContent() {
    const hiddenInput = document.getElementById("article_body_hidden");

    if (hiddenInput.value) {
      return JSON.parse(hiddenInput.value);
    } else {
      return null;
    }
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
