import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile-card',
  templateUrl: './github-profile-card.component.html',
  styleUrls: ['./github-profile-card.component.css']
})
export class GithubProfileCardComponent implements OnInit {

  @Input() githubProfile:any;
  
  private _today = Date();
  public get today() {
    return this._today;
  }
  public set today(value) {
    this._today = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
