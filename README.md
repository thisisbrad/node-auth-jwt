# node-auth-jwt
> Node | Express | MongoDB | Passport

Boilerplate Node [Passport](http://passportjs.org/) authenication with JWTs using [passport-local](https://github.com/jaredhanson/passport-local) and [passport-jwt](https://github.com/themikenicholson/passport-jwt). I used [node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) by Auth0 for the tokens. Users are stored to MongoDB and passwords are encrypted using [node-bcrypt](https://github.com/kelektiv/node.bcrypt.js).

This bolierplate includes basic:
- Sign Up route
- Login route
- Protected route

You need to create a `keys.js` file in the `/config` 

```
  mongoURI: 'mongodb://localhost:27017/DATABASE_NAME',
  JwtSecret: '~corey*trevor~'
```