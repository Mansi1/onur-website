import React, {PropsWithChildren} from 'react';
import {Container} from "@mui/material";
import {makeStyles} from '@mui/styles';

const useStyle = makeStyles({
    root: {
        marginTop: 25, paddingBottom: 25
    },
    imgGithub: {
        height: 200,
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: 1,
        cursor: "pointer"
    }
});

export const Layout = ({children}: PropsWithChildren<unknown>) => {
    const classes = useStyle();
    return (<Container maxWidth={'desktop'} className={classes.root}>
        {children}
    </Container>);
};
