import { Dir, } from 'fs';

import users from './static/users.json';
import { general, } from './modules/general';

class User {}

const user = new User();

console.error(user, users, Dir, general());
console.warn();
