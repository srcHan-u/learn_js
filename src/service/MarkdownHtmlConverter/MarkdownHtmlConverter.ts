// import markdown from "markdown-wasm";
// import { readMarkdownFile } from "./readMarkdownFile.mjs";

export class MarkdownHtmlConverter {
  private path: string;
  private containerID: string;
  constructor(path: string, containerID: string) {
    this.path = path;
    this.containerID = containerID;
  }

  convert() {
    // readMarkdownFile(this.path)
    //   .then((markdownContent) => {
    //     console.log(
    //       "🚀 ~ MarkdownHtmlConverter ~ .then ~ markdownContent:",
    //       markdownContent
    //     );
    //     return markdown.parse(markdownContent);
    //   })
    //   .then((html) => {
    //     console.log("🚀 ~ MarkdownHtmlConverter ~ .then ~ html:", html);
    //     this.integrateHtml(html);
    //   });
  }

  private integrateHtml(html: string) {
    const container = document.getElementById(this.containerID);
    if (container) {
      container.innerHTML = html;
    }
  }
}

// const converter = new MarkdownHtmlConverter('./README.md', 'container')
// converter.convert()
