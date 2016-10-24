class LogIn {
  constructor() {
    this.googleUrl = 'http://localhost:3000/api/v1/auth/google_oauth2?auth_origin_url=http://localhost:8082/';
  }

  render() {
    return `
      <a href=${this.googleUrl}>Sign up with Google</a>
    `;
  }
}

export default LogIn;
