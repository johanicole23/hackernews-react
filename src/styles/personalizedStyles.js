import myTheme from "./myTheme";

const personalizedStyles = {
    appbarTitle:{
        mr: 2,
        display: 'flex' ,
        fontFamily: 'Cairo',
        fontSize: '1.2rem',
        fontWeight: 700,
        letterSpacing: '.1rem',
        color: myTheme.palette.common.customDark,
        textDecoration: 'none',
        '& span': {
          letterSpacing: '.3rem', 
          fontWeight: 650,
        },
    },
    appGeneralBox:{
        display: 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        margin: '2rem 10%',
        flexDirection: 'column', 
        '@media screen and (max-width: 599px)': {
            margin: '2rem 6%',
        },
    },
    buttonFilter1: {
        fontFamily: "Cairo",
        textTransform: 'none',
        fontSize: "16px",
        width: '5%',
        color: 'white',
        backgroundColor:myTheme.palette.common.customPrimary,
        '@media screen and (max-width: 599px)': {
            width: '4%',
        },
    },
    buttonFilter2: {
        fontFamily: "Cairo",
        textTransform: 'none',
        fontSize: "16px",
        width: '45%',
        color: 'white',
        backgroundColor:myTheme.palette.common.customSecondary,
        '@media screen and (max-width: 599px)': {
            width: '48%',
        },
        
    },
    buttonFilter3: {
        fontFamily: "Cairo",
        textTransform: 'none',
        fontSize: "16px",
        width: '45%',
        color: 'white',
        backgroundColor:myTheme.palette.common.customAuxiliary,
        '@media screen and (max-width: 599px)': {
            width: '48%',
        },
        
    },
    tableTitle:{
        fontFamily: "Cairo",
        fontSize: "1.2rem",
        fontWeight: '650',
        color: myTheme.palette.common.customDark,
    },
    tableEntries:{
        fontFamily: "Cairo",
        fontSize: "1rem",
        color: myTheme.palette.common.customDarker,
    }
}
export default personalizedStyles;