import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KnowmorePage } from './knowmore.page';

describe('KnowmorePage', () => {
  let component: KnowmorePage;
  let fixture: ComponentFixture<KnowmorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowmorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KnowmorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
