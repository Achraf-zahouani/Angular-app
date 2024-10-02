import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user.component';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUserComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
    
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    expect(component.userForm.valid).toBeFalsy();
  });

  it('should be valid when filled', () => {
    component.userForm.controls['name'].setValue('John Doe');
    component.userForm.controls['email'].setValue('john.doe@example.com');
    expect(component.userForm.valid).toBeTruthy();
  });
});