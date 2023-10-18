import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../api/user.service';


@Component({
  selector: 'app-knowmore',
  templateUrl: './knowmore.page.html',
  styleUrls: ['./knowmore.page.scss'],
})
export class KnowmorePage implements OnInit {

  constructor(private dataUser: UserService) { }
  public alert: boolean = false;
  public name: string;
  public mail: string;
  public pass: string;
  public tel: string;
  public company: string;
  ngOnInit() {
  }

  sendData() {

    let f = {
      name: this.name,
      mail: this.mail,
      company: this.company,
      phone: this.tel
    }
    if (this.name != undefined && this.mail != undefined && this.company != undefined && this.tel != undefined) {
      this.dataUser.saveLead(f).subscribe((rsl: any) => {
      //console.log(rsl);
        if (rsl.status == 200) {
          this.alert = true;
        }


      })
    }



   //console.log(f);


  }

}
