# 📱 react-native-system-settings-lite

Lightweight and modern React Native module to **get and set system volume and screen brightness**, built using the **New Architecture (Turbo Modules)**. Supports **Android** and **iOS** (partial).

---

## ✨ Features

- ✅ Get/Set **Screen Brightness** (Android & iOS)
- ✅ Get/Set **Media Volume** (Android only)
- ⚡ TurboModule-based for optimal performance
- 🛠️ Written in **TypeScript**, **Kotlin**, and **Swift**
- 🔧 Fully compatible with **React Native 0.78+** (New Architecture only)

---

## 🚀 Installation

```bash
npm install react-native-system-settings-lite
# or
yarn add react-native-system-settings-lite
```

## ✍️ Enable New Architecture (React Native 0.78+)

In react-native.config.js of your project or example app:
```
module.exports = {
  dependencies: {
    'react-native-system-settings-lite': {
      platforms: {
        ios: {
          newArchitecture: true,
        },
        android: {
          newArchitecture: true,
        },
      },
    },
  },
};
```

Then rebuild your app:

```bash
cd android && ./gradlew clean
cd ios && RCT_NEW_ARCH_ENABLED=1 bundle exec pod install
```

## 🔹 Notes

- ❌ iOS does not allow programmatically setting volume (only brightness)

- Android requires WRITE_SETTINGS permission for brightness changes

- Test on physical devices due to permission limitations in emulators/simulators