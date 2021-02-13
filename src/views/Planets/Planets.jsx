import React from "react";
import CustomCard from "components/Card";
import { AppContext } from '../../AppProvider';

const Planets = () => {
    const { state, dispatch } = React.useContext(AppContext);
    const {showSideBar} = state;
    const cardContents = () => {
       return ( <div>
            A very large card content .. how much width will it expand across!
        </div>);
    }
    return (
        <div className={`contentpanel ${showSideBar ? 'leftSpacing' : '' }`}>
            <CustomCard name='Isha Dargar' cardContent={cardContents}/>
            <CustomCard name='Isha Dargar' cardContent={cardContents}/>
            <CustomCard name='Isha Dargar' cardContent={cardContents}/>
        </div>
    )
}

export default Planets;