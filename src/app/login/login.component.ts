import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: string | undefined;
  username: string | undefined;
  
  onLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      alert('Login successful!');
      
      window.location.href = '/Home';
    } else {
      alert('Invalid username or password.');
    }
  }
}
