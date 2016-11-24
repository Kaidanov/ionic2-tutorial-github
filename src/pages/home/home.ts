import { Component } from "@angular/core";
import { GitHubService } from '../../services/github';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import {IONIC_DIRECTIVES} from 'ionic-framework/ionic'

@Component({
  templateUrl: 'home.html',
  providers: [GitHubService]
})
export class HomePage {
  public foundRepos: any;
  public username: string;

  constructor(private github: GitHubService,
    private nav: NavController) {
  }

  getRepos() {
    //this.username
    this.github.getRepos(this.username).subscribe(
      data => {
        this.foundRepos = data.json();
      },
      err => console.error(err),
      () => console.log('getRepos completed')
    );
  }

  goToDetails(repo) {
    console.log(" hone.ts in goToDetails with object " + JSON.stringify(repo));
    this.nav.push(DetailsPage, { repo: repo });
  }

  ionViewDidLoad() {
    console.log('Hello HomePage Page Loaded');
  }


}