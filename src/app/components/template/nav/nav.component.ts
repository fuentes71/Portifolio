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
}
