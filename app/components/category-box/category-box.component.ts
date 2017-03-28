import { Component, Input } from "@angular/core";

import { Category } from "../../models/category";

@Component({
    selector: "category-box",
    templateUrl: "./app/components/category-box/category-box.component.html",
    styleUrls: ["./app/components/category-box/category-box.component.css"]
})
export class CategoryBoxComponent {

    @Input() categories: Category[];

}
