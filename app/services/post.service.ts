import { Inject, Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { BackendUri } from "./settings.service";
import { Post } from "../models/post";

@Injectable()
export class PostService {

    constructor(
        private _http: Http,
        @Inject(BackendUri) private _backendUri) { }

    getPosts(): Observable<Post[]> {

        let fecha_actual = new Date().getTime();
        return this._http
                   .get(`${this._backendUri}/posts?publicationDate_lte=${fecha_actual}&_sort=publicationDate&_order=DESC`)
                   .map((response: Response) => Post.fromJsonToList(response.json()));
    }

    getUserPosts(id: number): Observable<Post[]> {

        return this._http
                   .get(`${this._backendUri}/posts`)
                   .map((response: Response) => Post.fromJsonToList(response.json()));
    }

    getCategoryPosts(id: number): Observable<Post[]> {

        return this._http
                   .get(`${this._backendUri}/posts`)
                   .map((response: Response) => Post.fromJsonToList(response.json()));
    }

    getPostDetails(id: number): Observable<Post> {
        return this._http
                   .get(`${this._backendUri}/posts/${id}`)
                   .map((response: Response) => Post.fromJson(response.json()));
    }

    createPost(post: Post): Observable<Post> {

        return null;
        
    }
}
