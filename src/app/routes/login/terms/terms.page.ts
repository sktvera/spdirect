import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../api/user.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  constructor(private route: Router, private datauser: UserService) { }
  public termss: any;

  ngOnInit() {
    this.datauser.getTerms().subscribe((rslt: any) => {
     //console.log(rslt);
      this.termss = rslt.data[0].Terms;
     //console.log(this.termss);
      $(".cont-terms").html(this.termss);

    })
  }

  closeM() {
    this.route.navigate(['/login']);
  }

}
