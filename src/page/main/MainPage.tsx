import React from 'react';
import {Layout} from "./Layout";
import {makeStyles} from '@mui/styles';
import {Theme} from "@mui/material"
import profileImage from '../../assets/img/profile.jpg'

const useStyle = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        height: 340
    },
    imageWrapper: {
        textAlign: 'center'
    },
    image: {
        maxWidth: 370,
        borderRadius: 200,
        width: '100%',
        border: '10px solid #fff',
        margin: '-280px auto 0',
    },
    headline: {
        textAlign: "center",
        textTransform: 'uppercase',
        fontWeight: 300,
        letterSpacing: '4px',
        fontSize: '40px',
    },
    subHeadline: {
        fontWeight: 600,
    },
    descriptionShort: {
        margin: "auto",
        marginTop: 30,
        textAlign: "center",
        maxWidth: 520,
        fontSize: 18,
        lineHeight: '25.6px'
    },

}));

export interface MainPageProps {

}

export const MainPage = (props: MainPageProps) => {
    const classes = useStyle();
    return (<Layout>
        <div>
            <div className={classes.root}>
            </div>
            <div className={classes.imageWrapper}>
                <img className={classes.image} src={profileImage} alt={'Its me Onur Desde'}/>
            </div>
            <div className={classes.headline}>
                <div>Onur</div>
                <div className={classes.subHeadline}>Desde</div>
            </div>

            <div className={classes.descriptionShort}>
                {'TODO: add text here'}
            </div>
        </div>
    </Layout>);
};
