import React, { useState } from 'react';
import { Button } from 'carbon-components-react';
// import './App.css';
// import './styles/carbon.css';
// import myElementStyles from './styles/carbon.module.css';

// const internalStyles = myElementStyles;

// import ReactDOM from 'react-dom';
import {
  HeaderContainer,
  Header,
  HeaderName,
  HeaderMenuButton,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  HeaderPanel,
  Switcher,
  SwitcherItem,
  SwitcherDivider,
  IconSkeleton,
} from 'carbon-components-react';
import { Notification20, AppSwitcher20 } from '@carbon/icons-react';
// import singleSpaReact from 'single-spa-react';
// import LeftSideNavigation from './leftSideNavigation';
// import GetRolesOfUser from '../roles';
// import '../styles/header.scss';

function App() {
  const [show, setShow] = useState(false);
  const [storeUserRoles, setStoreUserRoles] = useState();
  const [ShowHeaderMenuButton, setShowHeaderMenuButton] = useState(false);
  // const linkElem = document.createElement('link');
  // linkElem.setAttribute('rel', 'stylesheet');
  // linkElem.setAttribute('href', myElementStyles);

  const userId = document
    .querySelector('icfs-uishell-react')
    .getAttribute('userId');

  // console.log('myStyles = ', myStyles);
  return (
    // <div
    //   className='App'
    //   id='mainRoot'
    //   style={{
    //     fontFamily: 'IBM Plex Sans, Helvetica Neue, Arial, sans-serif',
    //   }}>
    //   {/* <link rel='stylesheet' href={JSON.stringify(myStyles)} /> */}
    //   {/* <style dangerouslySetInnerHTML={{ __html: internalStyles }}></style> */}
    //   <header className='App-header'>
    //     <h2>Carbon-React app</h2>
    //     <div>
    //       Hello Carbon! Well, not quite yet. This is the starting point for the
    //       Carbon tutorial.
    //       <Button>Button</Button>
    //       <Button kind='tertiary'>Button</Button>;
    //     </div>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className='App-link'
    //       href='https://reactjs.org'
    //       target='_blank'
    //       rel='noopener noreferrer'>
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div
      style={{
        fontFamily: 'IBM Plex Sans, Helvetica Neue, Arial, sans-serif',
      }}>
      <div className='container'>
        {/* <Router> */}
        <HeaderContainer
          render={({
            isSideNavExpanded,
            onClickSideNavExpand,
            // hamburgerGotClicked,
          }) => (
            // console.log(
            //   'isSideNavExpanded = ',
            //   isSideNavExpanded,
            //   'onClickSideNavExpand = ',
            //   onClickSideNavExpand
            // ),
            <>
              <Header aria-label='ICFS Platform Name'>
                <SkipToContent />
                {ShowHeaderMenuButton ? (
                  <HeaderMenuButton
                    aria-label='Open menu'
                    // onClick={hamburgerGotClicked}
                    onClick={onClickSideNavExpand}
                    isActive={isSideNavExpanded}
                    isCollapsible
                  />
                ) : (
                  <IconSkeleton className='spacing-05-left' />
                )}

                <HeaderName
                  // element={Link}
                  to='/'
                  prefix=''>
                  International Client Financing System
                  <span style={{ color: 'orange' }}>
                    (UNDER CONSTRUCTION ={userId})
                  </span>
                </HeaderName>

                <HeaderGlobalBar>
                  <HeaderGlobalAction
                    aria-label='Notifications'
                    onClick={() => {}}>
                    <Notification20 />
                  </HeaderGlobalAction>
                  <HeaderGlobalAction
                    aria-label='Useful links'
                    tooltipAlignment='end'
                    onClick={() => {
                      setShow((hide) => !hide);
                    }}>
                    <AppSwitcher20 />
                  </HeaderGlobalAction>
                </HeaderGlobalBar>

                {/* Right side panel */}
                <HeaderPanel aria-label='Header Panel' expanded={show}>
                  <Switcher aria-label='Switcher Container'>
                    {/* <SwitcherItem
                      aria-label='User name'
                      children='User name'
                      href={`https://w3.ibm.com/#/people/profile?email=${userEmail}`}>
                      <span>{userName}</span>
                    </SwitcherItem> */}
                    <SwitcherDivider />
                    <SwitcherItem
                      aria-label='Terms of use'
                      children='Terms of use'
                      href='https://w3.ibm.com/#/info_terms_of_use'>
                      Terms of use
                    </SwitcherItem>
                    <SwitcherItem
                      aria-label='Privacy Policy'
                      children='Privacy Policy'
                      href='https://w3.ibm.com/w3publisher/w3-privacy-notice'>
                      Privacy Policy
                    </SwitcherItem>
                    <SwitcherItem
                      aria-label='Business Conduct Guidelines'
                      children='Business Conduct Guidelines'
                      href='https://w3.ibm.com/w3publisher/trust-compliance/bcgs'>
                      Business Conduct Guidelines
                    </SwitcherItem>
                    <SwitcherItem
                      aria-label='Accessibility'
                      children='Accessibility'
                      href='https://www.ibm.com/able/'>
                      Accessibility
                    </SwitcherItem>
                    <SwitcherItem
                      aria-label='Help'
                      children='Help'
                      href='/financing/tools/icfs/help.wss'>
                      Help
                    </SwitcherItem>
                    <SwitcherDivider />
                    {true ? (
                      <SwitcherItem
                        aria-label='Sign out'
                        children='Sign out'
                        href='/financing/tools/icfs/logout'>
                        Sign out
                      </SwitcherItem>
                    ) : (
                      <SwitcherItem
                        aria-label='Sign in'
                        children='Sign in'
                        href='/financing/tools/icfs/protect/home.wss'>
                        Sign in
                      </SwitcherItem>
                    )}
                  </Switcher>
                </HeaderPanel>

                {/* Left side navigation */}
                {/* {isSideNavExpanded && (
                  <LeftSideNavigation
                    isSideNavExpanded={isSideNavExpanded}
                    userRoles={'dummy'}
                  />
                )} */}
              </Header>
            </>
          )}
        />
        {/* </Router> */}
      </div>
    </div>
  );
}

export default App;
