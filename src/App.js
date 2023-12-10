import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/Home";

import ListCar from "./components/carComponents/ListCar";
import DetailsCar from "./components/carComponents/DetailsCar";
import CreateCar from "./components/carComponents/CreateCar";
import UpdateCar from "./components/carComponents/UpdateCar";
import DeleteCar from "./components/carComponents/DeleteCar";

import DetailsDamage from "./components/damageComponents/DetailsDamage";
import CreateDamage from "./components/damageComponents/CreateDamage";
import UpdateDamage from "./components/damageComponents/UpdateDamage";
import DeleteDamage from "./components/damageComponents/DeleteDamage";
import ListDamage from "./components/damageComponents/ListDamage";

import ListSubscription from "./components/subscriptionComponents/ListSubscription";
import DetailsSubscription from "./components/subscriptionComponents/DetailsSubscription";
import UpdateSubscription from "./components/subscriptionComponents/UpdateSubscription";
import DeleteSubscription from "./components/subscriptionComponents/DeleteSubscription";
import CreateSubscription from "./components/subscriptionComponents/CreateSubscription";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
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
