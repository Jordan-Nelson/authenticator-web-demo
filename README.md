# Next JS & Flutter Authenticator Demo

This is a demo of running the flutter authenticator inside of a next js app

**/flutter_authenticator_demo** contains the flutter authenticator demo. This is a fairly simple demo of the authenticator, with amplify_auth_cognito stubbed. This app was created with `flutter create` and then the file `/web/flutter-authenticator-component.html` was added as part of the web build. Other than that, this is a fairly standard flutter app.

**/nextjs-host-app** contains a basic hello world nextjs app. The `/public` folder contains all the code output from `flutter build web`. There is one component added - `FlutterAuthenticatorComponent`. This component displays the content in `flutter-authenticator-component.html` as a iframe.

## Building

- To build a new version of the flutter authenticator, run `flutter:build` from `/nextjs-host-app`. This will build the flutter app and move the output to `/nextjs-host-app/public/flutter-authenticator`.
- Once the flutter authenticator code is built and moved, the next js app can be built and served like normal (`yarn dev` from `nextjs-host-app/`)

## Demo

See a live demo here: https://dev.d2m2njy81ncuv5.amplifyapp.com/
