import React from 'react';

import AppLayout from './components/AppLayout';
import SideNav from './components/SideNav';
import NavBar from './components/NavBar';
import TestComponent from './components/TestComponent';
import MtKenya from './components/MtkenyaCoast';
import NairobiEast from './components/NairobiEast';
import NairobiWest from './components/NairobiWest';
import RiftWestern from './components/RiftWestern';

function App() {
  return (
    <AppLayout>

      <NavBar></NavBar>

<SideNav>
  hfhfh
</SideNav>
<TestComponent>

  <MtKenya>
    Mt Kenya
  </MtKenya>
  <NairobiEast>Nairobi East</NairobiEast>
  <NairobiWest>Nairobi West</NairobiWest>
  <RiftWestern>Rift / Western</RiftWestern>

</TestComponent>
    </AppLayout>
  );
}

export default App;
