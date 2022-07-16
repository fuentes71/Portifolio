import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: [
    "./header.component.css",
    "./header.anima.css",
    "./header.fonts.css",
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  toContact() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  tabmenu(): void {
    const firstDescription = document.querySelector(".firstDescription");
    const secondDescription = document.querySelector(".secondDescription");
    const threeDescription = document.querySelector(".threeDescription");
    const fourDescription = document.querySelector(".fourDescription");

    firstDescription?.classList.remove("active");
    secondDescription?.classList.remove("active");
    threeDescription?.classList.remove("active");
    fourDescription?.classList.remove("active");
  }
  firstProject() {
    this.tabmenu();
    const description = document.querySelector(".firstDescription");
    description?.classList.add("active");
  }
  secondProject() {
    this.tabmenu();
    const description = document.querySelector(".secondDescription");
    description?.classList.add("active");
  }
  threeProject() {
    this.tabmenu();
    const description = document.querySelector(".threeDescription");
    description?.classList.add("active");
  }
  fourProject() {
    this.tabmenu();
    const description = document.querySelector(".fourDescription");
    description?.classList.add("active");
  }
}

// function activeTab(index: any) {
//   tabContent[index].classList.add("active");
// }
