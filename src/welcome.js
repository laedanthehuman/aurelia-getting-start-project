export class Welcome {
  heading = 'Bem vindo ao Aurelia';
  firstName = 'John';
  lastName = 'Doe';

  get fullName(){
      return `${this.firstName} ${this.lastName}`;
  }

  submit(){
      alert(`Welcome, ${this.fullName}`);
  }
}
