<<<<<<< HEAD

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

# This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# ks-online

> > > > > > > c101f80d44d11318483f4dd55054c2b12874610a

## Bootstrap utility classes :-

# What you’re looking at are Bootstrap utility classes — they’re small, single‑purpose helpers that control layout, alignment, and spacing without writing custom CSS. Let’s decode the exact code:-

col-12 → On extra‑small screens (mobile), this column spans the full width (12/12 grid columns).
col-md-6 → On medium screens and above (≥768px), the column spans half the width (6/12 grid columns).
text-center → On mobile, the text inside this column is centered.
text-md-start → On medium screens and above, the text alignment switches to “start” (left in LTR).
order-2 → On mobile, this column is placed second in the flex order (appears below the other column).
order-md-1 → On medium screens and above, this column is placed first in the flex order (appears before the other column).

text-md-end → Aligns text/content to the end (right) on medium screens and larger.
On smaller screens, it falls back to the default (usually left or centered if you’ve set text-center elsewhere).
order-1 → On mobile (xs/sm), this element is placed first in the flex order.
order-md-2 → On medium screens and above, this element is placed second in the flex order.
his is how you flip the stacking order between mobile and desktop.
mb-2 → Adds a small bottom margin (0.5rem) on all screen sizes.
mb-4 → Adds a larger bottom margin (1.5rem) on all screen sizes.
If you stack multiple margin classes, the last one wins unless overridden by a breakpoint.
mb-md-0 → Removes bottom margin (0) on medium screens and above.
This ensures spacing only applies when stacked vertically on mobile, but disappears when side‑by‑side on desktop.
