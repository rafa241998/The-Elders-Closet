import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectPaymentPage } from './correct-payment.page';

describe('CorrectPaymentPage', () => {
  let component: CorrectPaymentPage;
  let fixture: ComponentFixture<CorrectPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
