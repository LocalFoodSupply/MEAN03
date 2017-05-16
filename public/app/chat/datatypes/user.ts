export class User {
  _id: string;
  email: string;
  username: string;
  avatar: string;
  created: string;

  constructor(_id?: string, email?: string, username?: string, created?: string) {
    this._id = _id;
    this.email = email;
    this.username = username;
    this.avatar = 'http://www.gravatar.com/avatar/{{hash}}?s=50&r=g&d=retro'.replace('{{hash}}', _id);
    this.created = created;
  }
}
