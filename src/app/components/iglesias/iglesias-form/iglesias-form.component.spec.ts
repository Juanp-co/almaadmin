import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IglesiasFormComponent } from './iglesias-form.component';

describe('IglesiasFormComponent', () => {
  let component: IglesiasFormComponent;
  let fixture: ComponentFixture<IglesiasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IglesiasFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IglesiasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
