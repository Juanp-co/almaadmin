import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BannersLogosCardComponent } from './banners-logos-card.component';

describe('BannersLogosCardComponent', () => {
  let component: BannersLogosCardComponent;
  let fixture: ComponentFixture<BannersLogosCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannersLogosCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BannersLogosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
