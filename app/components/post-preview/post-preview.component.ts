import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Post } from "../../models/post";

@Component({
    selector: "post-preview",
    templateUrl: "./app/components/post-preview/post-preview.component.html",
    styleUrls: ["./app/components/post-preview/post-preview.component.css"]
})
export class PostPreviewComponent {

    @Input() post: Post;
    @Output() detallado: EventEmitter<number> = new EventEmitter();
    

    notificarPostDetallado(postDetallado: number): void {
        this.detallado.emit(postDetallado);
    }
    

    plainTextToHtml(text: string): string {
        return `<p>${text.replace(/\n/gi, "</p><p>")}</p>`;
    }
}
