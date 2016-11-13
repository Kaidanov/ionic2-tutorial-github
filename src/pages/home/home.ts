import { Component } from "@angular/core";
import { GitHubService } from '../../services/github';

@Component({
  templateUrl: 'home.html',
  providers: [GitHubService]
})
export class HomePage {
  public foundRepos: any;
  public username: string ;

  constructor(private github: GitHubService) {
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


 
}