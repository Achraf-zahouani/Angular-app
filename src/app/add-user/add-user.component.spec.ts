import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user.component';
import { By } from '@angular/platform-browser';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUserComponent],
      imports: [FormsModule] // Import FormsModule for ngModel binding
    }).compileComponents();

    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial state', () => {
    expect(component.username).toBe('');
    expect(component.email).toBe('');
  });

  it('should add user when valid input is provided', () => {
    spyOn(console, 'log'); // Spy on console.log to check its calls

    component.username = 'testuser';
    component.email = 'test@example.com';
    component.addUser();

    expect(console.log).toHaveBeenCalledWith('Utente aggiunto:', { username: 'testuser', email: 'test@example.com' });
    expect(component.username).toBe('');
    expect(component.email).toBe('');
  });

  it('should not add user when input is invalid', () => {
    spyOn(console, 'error'); // Spy on console.error to check its calls

    component.username = '';
    component.email = '';
    component.addUser();

    expect(console.error).toHaveBeenCalledWith('Compila tutti i campi');
  });

  it('should render form elements', () => {
    const usernameInput = fixture.debugElement.query(By.css('input[placeholder="Username"]'));
    const emailInput = fixture.debugElement.query(By.css('input[placeholder="Email"]'));
    const submitButton = fixture.debugElement.query(By.css('button'));

    expect(usernameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(submitButton.nativeElement.textContent).toContain('Aggiungi Utente');
  });
});