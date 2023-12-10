import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '.src/components';

import ListCar from './components/ListCar';
import DetailsCar from './components/DetailsCar';
import CreateCar from './components/CreateCar';
import UpdateCar from './components/UpdateCar';
import DeleteCar from './components/DeleteCar';

import ListDamage from './components/ListDamage';
import DetailsDamage from './components/DetailsDamage';
import CreateDamage from './components/CreateDamage';
import UpdateDamage from './components/UpdateDamage';
import DeleteDamage from './components/DeleteDamage';

import ListSubscription from './components/ListSubscription';
import DetailsSubscription from './components/DetailsSubscription';
import CreateSubscription from './components/CreateSubscription';
import UpdateSubscription from './components/UpdateSubscription';
import DeleteSubscription from './components/DeleteSubscription';

function App() {
  return (
      <Router>
        <Routes>
          {/* Car Routes */}
          <Route path="/cars" element={<ListCar />} />
          <Route path="/car/:id" element={<DetailsCar />} />
          <Route path="/create-car" element={<CreateCar />} />
          <Route path="/edit-car/:id" element={<UpdateCar />} />
          <Route path="/delete-car/:id" element={<DeleteCar />} />

          {/* Damage Routes */}
          <Route path="/damages" element={<ListDamage />} />
          <Route path="/damage/:id" element={<DetailsDamage />} />
          <Route path="/create-damage" element={<CreateDamage />} />
          <Route path="/edit-damage/:id" element={<UpdateDamage />} />
          <Route path="/delete-damage/:id" element={<DeleteDamage />} />

          {/* Subscription Routes */}
          <Route path="/subscriptions" element={<ListSubscription />} />
          <Route path="/subscription/:id" element={<DetailsSubscription />} />
          <Route path="/create-subscription" element={<CreateSubscription />} />
          <Route path="/edit-subscription/:id" element={<UpdateSubscription />} />
          <Route path="/delete-subscription/:id" element={<DeleteSubscription />} />
        </Routes>
      </Router>
  );
}

export default App;

