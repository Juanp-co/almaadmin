import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IglesiasCardComponent } from './iglesias-card.component';

describe('IglesiasCardComponent', () => {
  let component: IglesiasCardComponent;
  let fixture: ComponentFixture<IglesiasCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IglesiasCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IglesiasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
