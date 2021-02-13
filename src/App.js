import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

// views
import Planets from 'views/Planets/Planets';
import Species from 'views/Species/Species';
import People from 'views/People/People';
import Starship from 'views/Starship/Starship';
import Vehicle from 'views/Vehicle/Vehicle';
import PlanetsComparison from 'views/Planets/PlanetsComparison';
import SpeciesComparison from 'views/Species/SpeciesComparison';
import PeopleComparison from 'views/People/PeopleComparison';
import StarshipComparison from 'views/Starship/StarshipComparison';
import VehicleComparison from 'views/Vehicle/VehicleComparison';

import AppProvider from 'AppProvider';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
	return (
		<>
			<AppProvider>
				<Router basename="/">
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Redirect to="/planets" />
						</Route>
						<Route exact path="/planets" component={Planets} />
						<Route path="/planets/comparison" component={PlanetsComparison} />
						<Route exact path="/species" component={Species} />
						<Route path="/species/comparison" component={SpeciesComparison} />
						<Route exact path="/people" component={People} />
						<Route path="/people/comparison" component={PeopleComparison} />
						<Route exact path="/starship" component={Starship} />
						<Route path="/starship/comparison" component={StarshipComparison} />
						<Route exact path="/vehicle" component={Vehicle} />
						<Route path="/vehicle/comparison" component={VehicleComparison} />
					</Switch>
				</Router>
			</AppProvider>
		</>
	);
};

export default App;
