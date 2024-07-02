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