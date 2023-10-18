import { Component, OnInit, OnDestroy } from '@angular/core';
//import { ShareDataService } from '../../../share-data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit, OnDestroy{
  receivedReferences: any[] = [];
  //private subscription: Subscription;

 // constructor(private shareDataService: ShareDataService) {}

  ngOnInit() {
   /*  this.subscription = this.shareDataService.references$.subscribe((references) => {
      this.receivedReferences = references;
console.log(this.receivedReferences, 'estos son los cambios ') */
      
  //  });
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

  
}
