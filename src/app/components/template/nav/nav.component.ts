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
    const description = document.getElementById("description");
    const descriptionTop = Number(description?.offsetTop);
    window.scroll({
      top: descriptionTop - 95,
      behavior: "smooth",
    });
  }
  toWork() {
    const work = document.getElementById("work");
    const workTop = Number(work?.offsetTop);
    window.scroll({
      top: workTop - 10,
      behavior: "smooth",
    });
  }
  toSkill() {
    const skill = document.getElementById("skills");
    const skillTop = Number(skill?.offsetTop);
    window.scroll({
      top: skillTop - 95,
      behavior: "smooth",
    });
  }
  toContact() {
    const contact = document.getElementById("contact");
    const contactTop = Number(contact?.offsetTop);
    window.scroll({
      top: contactTop - 95,
      behavior: "smooth",
    });
  }
}
