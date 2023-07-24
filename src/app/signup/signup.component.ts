import { Component, OnInit } from '@angular/core';
import { checkPasswordStrength } from '../password-strength';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  
})
export class SignupComponent implements OnInit {
  passwordStrengthText: string = '';
  passwordStrengthColor: string = 'transparent'; // Default color is transparent

  constructor(private router: Router) { }

  signIn() {
    this.router.navigate(['/login']); // Navigate to the 'login' route
  }

  ngOnInit(): void {
  }

  updatePasswordStrength(event: Event) {
    const passwordInput = event.target as HTMLInputElement;
    const password = passwordInput.value;
    const strengthValue = checkPasswordStrength(password);
    this.passwordStrengthText = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Strong'][strengthValue];
    this.passwordStrengthColor = this.getPasswordStrengthColor(strengthValue);
    
  }

  getPasswordStrengthColor(strengthValue: number): string {
    if (strengthValue === 0 ) {
      return 'red'; // Very Weak
    } else if (strengthValue === 1) {
      return 'orange'; // Weak
    } else if (strengthValue === 2) {
      return 'yellow'; // Moderate
    } else if (strengthValue === 3) {
      return 'lightgreen'; // Strong
    } else {
      return 'darkgreen'; // Very Strong
    }
  }
 

  
}
