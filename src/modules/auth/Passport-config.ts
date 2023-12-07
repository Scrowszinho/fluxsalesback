import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';

passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((obj: any, done) => {
  done(null, obj);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    },
    (accessToken: any, refreshToken: any, profile: any, done: any) => {
        console.log(profile);
        
      return done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        callbackURL: process.env.CALLBACK_URL ?? '',
    },
    (accessToken: any, refreshToken: any, profile: any, done: any) => {
      // Callback de autenticação do Facebook
      return done(null, profile);
    }
  )
);

export default passport;
