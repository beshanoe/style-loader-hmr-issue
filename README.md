Steps to reproduce:

1. `yarn install`
2. `yarn start`
3. Open browser `http://localhost:3000/`
4. Go to file `src/components/Body.css` and add a new class rule with some property and save. App should not reload or produce any errors to the console
5. Go to file `src/components/Body.js` and append the new class name to className prop and save. Property should be applied without reload
6. Run `yarn upgrade style-loader@latest`, try steps 2-5, experience an error