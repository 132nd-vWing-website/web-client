/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import { AuthProvider } from './components/auth/AuthContext';

// const App = React.lazy(() => import('./App'));
// const LoadingComponent = (
//   <div className='loading-screen'>
//     <h2>Welcome to the 132nd Virtual Wing</h2>
//     <p>Loading...</p>
//   </div>
// );

/** Main app is just a wrapper to allow lazy-loading of the whole website for slower connections */
// function Main() {
//   return (
//     <React.Suspense fallback={LoadingComponent}>
//       <App />
//     </React.Suspense>
//   );
// }

// function Main() {
//   const [content, setContent] = useState(null);
//   useEffect(
//     () =>
//       import('./App.jsx').then((module) => {
//         setContent(module.default);
//         return null;
//       }),
//     [],
//   );

//   return content || LoadingComponent;
// }

// ReactDOM.render(<Main />, document.getElementById('root'));

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root'),
);
// registerServiceWorker();
