import React from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/eventDashboard';
import NavBar from '../../features/nav/navBar';
import './styles.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Container className='main'>
        <EventDashboard />
      </Container>
    </React.Fragment>
  );
}

export default App;
