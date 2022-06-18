import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  isMenuOpen = false;
  list = document.querySelector(".list");
  activeClass = "active";

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor() {}

  ngOnInit(): void {}

  toHome() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
  toDescription() {
    document
      .getElementById("description")
      ?.scrollIntoView({ behavior: "smooth" });
  }
  toWork() {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  }
  toSkill() {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  }
  toContact() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }
}
