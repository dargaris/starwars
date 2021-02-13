import React from 'react';
import { RiMotorbikeLine } from 'react-icons/ri';
import { GiSpaceship, GiDna1 } from 'react-icons/gi';
import { BiPlanet } from 'react-icons/bi';
import { IoMdPeople } from 'react-icons/io';

export const SideBarData = [
	{
		title: 'Planets',
		path: '/planets',
		icon: <BiPlanet />,
		cName: 'nav-text',
	},
	{
		title: 'Species',
		path: '/species',
		icon: <GiDna1 />,
		cName: 'nav-text',
	},
	{
		title: 'People',
		path: '/people',
		icon: <IoMdPeople />,
		cName: 'nav-text',
	},
	{
		title: 'Starship',
		path: '/starship',
		icon: <GiSpaceship />,
		cName: 'nav-text',
	},
	{
		title: 'Vehicle',
		path: '/vehicle',
		icon: <RiMotorbikeLine />,
		cName: 'nav-text',
	},
];
