# Interfaces CivicSignal

```powershell
npm ci
npm run build
npm run portal
# In a separate terminal
npm run dashboard
```

Portal runs on port 4200 and Dashboard on port 4201. The build compiles the shared library before either app. Use `npx ng build shared --watch` during library development. For static hosting configure an index.html fallback for deep links.

The shared library exports report types and sample data. The shared SCSS theme defines Material colors and common styles. Material Symbols and Inter are bundled locally. The map loads OpenStreetMap tiles at runtime. The landing photograph is a generated illustration of Casablanca.
