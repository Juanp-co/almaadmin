import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPreviewPruebaPage } from './modal-preview-prueba.page';

describe('ModalPreviewPruebaPage', () => {
  let component: ModalPreviewPruebaPage;
  let fixture: ComponentFixture<ModalPreviewPruebaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPreviewPruebaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPreviewPruebaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
