import { createTheme } from "@mui/material";


let theme = {
    palette: {
        mode: 'light',
        primary: {
            main: '#BE2623',
            light: '#FFE7E6',
            dark: '#871D1B',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#d32f2f',
            light: '#ff6659',
            dark: '#9a0007',
            contrastText: '#fff',
        }, gray: {
            50: '#f9f9f9',
            100: '#f0f0f0',
            200: '#e0e0e0',
            300: '#d0d0d0',
            400: '#b0b0b0',
            500: '#909090',
            600: '#707070',
            700: '#505050',
            800: '#303030',
            900: '#101010',
        },
        black: {
            main: '#000000',
            light: '#333333',
            dark: '#000000',
            contrastText: '#ffffff',
        },
        background: {
            default: '#ffffff',
            paper: '#f5f5f5',
        },
        common: { white: '#ffffff', black: '#000000', gray: '#f8f8f8', darkGray: '#0000008f', red: '#FF0000' },
        text: {
            primary: '#333333',
            secondary: '#666666',
            disabled: '#999999',
            hint: '#cccccc',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    spacing: 1
}

theme.typography = {
    fontFamily: ['Book Antiqua, serif', 'Proza Libre, sans-serif'],
    h1: {
        fontWeight: 700,
        fontFamily: 'Book Antiqua, serif',
        textTransform: 'uppercase',
        fontSize: '2rem',
        letterSpacing: '0.08rem',
        lineHeight: '2.8rem'
    },
    h2: {
        fontWeight: 700,
        fontFamily: 'Book Antiqua, serif',
        textTransform: 'uppercase',
        fontSize: '1.8rem',
        letterSpacing: '0.08rem',
        lineHeight: '2.5rem'
    },
    h3: {
        fontWeight: 700,
        fontFamily: 'Book Antiqua, serif',
        textTransform: 'uppercase',
        fontSize: '1.6rem',
        letterSpacing: '0.08rem',
        lineHeight: '2.4rem'
    },
    h4: {
        fontWeight: 700,
        fontFamily: 'Book Antiqua, serif',
        textTransform: 'uppercase',
        fontSize: '1.4rem',
        letterSpacing: '0.08rem',
        lineHeight: '2rem'
    },
    h5: {
        fontWeight: 700,
        fontFamily: 'Book Antiqua, serif',
        textTransform: 'uppercase',
        fontSize: '1.2rem',
        letterSpacing: '0.08rem',
        lineHeight: '1.8rem'
    },
    h6: {
        fontWeight: 700,
        fontFamily: 'Book Antiqua, serif',
        textTransform: 'uppercase',
        fontSize: '1rem',
        letterSpacing: '0.08rem',
        lineHeight: '1.6rem'
    },
    body1: {
        fontSize: '0.85rem',
        fontFamily: 'Proza Libre, sans-serif',
        letterSpacing: '0.08rem',
        lineHeight: '1.5rem'
    },
    body2: {
        fontSize: '0.75rem',
        fontFamily: 'Proza Libre, sans-serif',
        letterSpacing: '0.08rem',
        lineHeight: '1.4rem'
    }
}

theme.components = {
    MuiTextField: {
        styleOverrides: {
            root: {
                fontFamily: 'Proza Libre, sans-serif',
                '& .MuiInputBase-root': {
                    height: '100%',
                }
            },
        }
    },
    MuiDrawer: {
        styleOverrides: {
            root: {
                '& .MuiDrawer-paper': {
                    padding: '1.2rem'
                },
            }
        }
    },
    MuiDivider: {
        styleOverrides: {
            root: {
                margin: '1.5rem 0rem',
                borderColor: `#b0b0b0 !important`,
                opacity: '0.2'
            }
        }
    },
    MuiContainer: {
        styleOverrides: {
            root: {
                maxWidth: '90vw'
            }
        }
    },
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: 0
            },
            '&.Mui-disabled': {
                backgroundColor: '#f0f0f0',
            }
        }
    },
    MuiFormLabel: {
        styleOverrides: {
            root: {
                textTransform: 'uppercase'
            }
        }
    }
}

export default createTheme(theme);