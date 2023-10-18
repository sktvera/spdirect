import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShareDataService } from '../../../share-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-route',
  templateUrl: './my-route.page.html',
  styleUrls: ['./my-route.page.scss'],
})
export class MyRoutePage implements OnInit, OnDestroy {
  receivedReferences: any[] = [];
  private subscription: Subscription = new Subscription;
  //private shareDataService: ShareDataService
  constructor() {}

  ngOnInit() {
    //this.subscription = this.shareDataService.references$.subscribe((references: any[]) => {
    //this.receivedReferences = references;
    //console.log(this.receivedReferences, 'estos son los cambios ')
      
   // });
  }

  ngOnDestroy() {
   // this.subscription.unsubscribe();
  }
}
