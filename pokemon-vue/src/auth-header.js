export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
      // for Node.js Express back-end
      return { 'authorization': `Bearer ${ user.token }` };
    } else {
      return {};
    }
  }