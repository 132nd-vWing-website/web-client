/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import ReactDOM from 'react-dom';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

/** Styling Components */
// import { Layout, Button } from 'antd';
import { Button } from 'antd';

// const { Header, Content, Footer } = Layout;

function App() {
  return (
    <React.Fragment>
      <h1>Test Page!</h1>
      <Button type='primary'>Button</Button>
    </React.Fragment>
  );
}
// function App() {
//   return (
//     <Router>
//       <Layout className='layout'>
//         <Header>
//           <div className='brand-logo'>StudioDash</div>
//           <Menu
//             theme='dark'
//             mode='horizontal'
//             defaultSelectedKeys={['1']}
//             style={{ lineHeight: '64px' }}>
//             <Menu.Item key='1'>
//               <Icon type='dashboard' theme='filled' />
//               <span>Dashboard</span>
//               <Link to='/' />
//             </Menu.Item>
//             <Menu.Item key='2'>
//               <Icon type='profile' theme='filled' />
//               <span>Navigator</span>
//               <Link to='/navigator' />
//             </Menu.Item>
//           </Menu>
//         </Header>
//         <Content style={{ padding: '0 50px ' }} xs={24}>
//           <div style={{ padding: 24, minHeight: '80vh' }}>
//             <StudioClient
//               studio={studio}
//               studioUrl={Config.applicationURL}
//               render={(client) => (
//                 <React.Fragment>
//                   <Route exact path='/dashboard' render={() => <DashboardTab client={client} />} />
//                   <Route exact path='/' render={() => <NavigatorTab client={client} />} />
//                 </React.Fragment>
//               )}
//             />
//           </div>
//         </Content>
//         <Footer style={{ textAlign: 'center' }}>
//           StudioDash ©2019 Created by Jens Kristian Hoel
//         </Footer>
//       </Layout>
//     </Router>
//   );
// }

/* eslint no-undef: 0 */
ReactDOM.render(<App />, document.getElementById('root'));
