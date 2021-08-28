import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MembersCardComponent } from './members-card.component';

describe('MembersCardComponent', () => {
  let component: MembersCardComponent;
  let fixture: ComponentFixture<MembersCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MembersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
