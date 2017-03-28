import { Component, Input } from "@angular/core";

import { Post } from "../../models/post";
import { AppRoutingModule } from '../../app.routing';
import { Router } from '@angular/router';

@Component({
    selector: "posts-list",
    templateUrl: "./app/components/posts-list/posts-list.component.html"
})
export class PostsListComponent {

    @Input() posts: Post[];

     constructor(private _router: Router) {}

     irDetallePost(postId) {
         this._router.navigate([`/posts/${postId}`]);
     }
}
