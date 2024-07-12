# Example of a real-time meteor chat app.
### Add dependencies of meteor (from atmosphere)
- ej:
```sh
meteor add mdg:validated-method
```

### Restore project and clean database:
```sh
meteor reset
```
### Remove meteor packages:
```sh
meteor remove aldeed:simple-schema
```

### Add npm dependencies:
```sh
meteor npm install simpl-schema
```

Blaze template renderization must:
1. remove ```meteor remove static-html```
2. add ```meteor add blaze-html-templates```

Securization:
using accounts-password meteor package to login with email and password.
- Meteor.loginWithPassword
- Accounts.createUser
- Accounts.changesPassword
- Accounts.resetPassword
- more info [here](https://docs.meteor.com/api/accounts)

using useraccounts:semantic-ui meteor package to create login and register pages..
