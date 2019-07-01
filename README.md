# GadoZap

## Framework7 CLI Options

Framework7 app created with following options:

```
{
  "cwd": "/var/www/html/aprendizado/GadoApp",
  "type": [
    "web",
    "cordova"
  ],
  "name": "GadoZap",
  "pkg": "io.framework7.myapp",
  "framework": "core",
  "template": "single-view",
  "bundler": false,
  "cordova": {
    "folder": "cordova",
    "platforms": [
      "ios",
      "android",
      "electron"
    ],
    "plugins": [
      "cordova-plugin-statusbar",
      "cordova-plugin-keyboard",
      "cordova-plugin-splashscreen",
      "cordova-plugin-wkwebview-file-xhr"
    ]
  },
  "theming": {
    "customColor": false,
    "color": "#007aff",
    "darkTheme": false,
    "iconFonts": true,
    "fillBars": false
  },
  "customBuild": false
}
```

## NPM Scripts

* `npm start` - run development server
* `npm run build-cordova` - build cordova app
* `npm run build-cordova-ios` - build cordova iOS app
* `npm run build-cordova-android` - build cordova Android app
* `npm run build-cordova-electron` - build cordova Electron (desktop) app
* `npm run cordova-electron` - launch quick preview (without full build process) of Electron app
## Cordova

Cordova project located in `cordova` folder. You shouldn't modify content of `cordova/www` folder. Its content will be correctly generated when you call `npm run cordova-build-prod`.

## Cordova Electron

There is also cordova Electron platform installed. To learn more about it and Electron check this guides:

* [Cordova Electron Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/electron/index.html)
* [Official Electron Documentation](https://electronjs.org/docs)

## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 generate-assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 generate-assets --ui
```

## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)


* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

## Support Framework7

Love Framework7? Support project by donating or pledging on patreon:
https://patreon.com/vladimirkharlampidi