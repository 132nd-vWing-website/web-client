/* eslint react/jsx-filename-extension: 0 */
// import Loadable from 'react-loadable';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';

// import App from './App';

/* eslint import/no-extraneous-dependencies: 0 */
// import 'core-js/modules/es6.promise';
// import 'core-js/modules/es6.array.iterator';

// const App = React.lazy(() => import('./App'));
// const LoadingComponent = <div>Loading...</div>;

/** Main app is just a wrapper to allow lazy-loading of the whole website for slower connections */
// function Main() {
//   return (
//     <React.Suspense fallback={LoadingComponent}>
//       <App />
//     </React.Suspense>
//   );
// }

// const Main = Loadable({
//   loader: () => import('./App'),
//   loading: LoadingComponent,
// });

function Main() {
  const [content, setContent] = useState(null);
  useEffect(() => import('./App.jsx').then((module) => setContent(module.default)), []);

  return content || <div>Loading...</div>;
}

ReactDOM.render(<Main />, document.getElementById('root'));
// registerServiceWorker();
