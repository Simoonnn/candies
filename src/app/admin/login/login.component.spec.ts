import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ ReactiveFormsModule, HttpClientModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
   */
  it('form control will be invalid and the test will fail', () => {
    const form = component.form;
    const email = form.get('email');
    email.setValue('Invalid');
    expect(email.valid).toBeFalsy();
  });
  it('should fail', () => {
    const form = component.form;
    const password = form.get('password');
    password.setValue('');
    expect(password.valid).toBeFalsy();
  });

});
