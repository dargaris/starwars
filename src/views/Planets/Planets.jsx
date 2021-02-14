import React from "react";
import CustomCard from "components/Card";
import { AppContext } from '../../AppProvider';
import { Grid } from "@material-ui/core";

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
            <Grid container spacing={2} padding={2} xs={12}>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                <CustomCard name='Isha Dargar' cardContent={cardContents}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                <CustomCard name='Isha Dargar' cardContent={cardContents}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                <CustomCard name='Isha Dargar' cardContent={cardContents}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                <CustomCard name='Isha Dargar' cardContent={cardContents}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                <CustomCard name='Isha Dargar' cardContent={cardContents}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                <CustomCard name='Isha Dargar' cardContent={cardContents}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                <CustomCard name='Isha Dargar' cardContent={cardContents}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                <CustomCard name='Isha Dargar' cardContent={cardContents}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                <CustomCard name='Isha Dargar' cardContent={cardContents}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                <CustomCard name='Last One' cardContent={cardContents}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Planets;