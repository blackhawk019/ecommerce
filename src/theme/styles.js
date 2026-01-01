import { makeStyles } from "@mui/styles"

export const customStyles = ({
    UiCheckButtons: makeStyles(theme => ({
        check_button: {
            borderColor: `${theme.palette.gray[200]} !important`,
            color: `${theme.palette.text.secondary} !important`,
            '&.selected': {
                borderColor: `${theme.palette.primary.main} !important`,
                color: `${theme.palette.primary.main} !important`,
            },
            '&.Mui-disabled': {
                backgroundColor: `${theme.palette.gray[100]} !important`
            }
        }
    })),

    UiQuantitySelector: makeStyles(theme => ({
        quantity_selection_box: {
            marginTop: "0.5rem !important"
        },
        quantity_selector_action_btn: {
            backgroundColor: `${theme.palette.primary.main} !important`,
            border: `1px solid ${theme.palette.primary.main} !important`,
            color: `${theme.palette.primary.contrastText} !important`,
            '&.add_btn': {
                border: '0px !important',
                borderRadius: '0rem !important',
            },
            '&.remove_btn': {
                border: '0px !important',
                borderRadius: '0rem !important',
            }
        },
        quantity_selector_quantity_field: {
            '& .MuiInputBase-root': {
                borderRadius: '0px !important',
                maxWidth: '7rem !important',
                height: '3rem !important',
            }
        },
        quantity_selector_quantity_helper: {
            color: `${theme.palette.common.red} !important`
        }
    })),

    UiLightGallery: makeStyles(theme => ({
        light_gallery_wrapper: {
            zIndex: '2000 !important'
        }
    })),

    Footer: makeStyles(theme => ({
        footer: {
            backgroundColor: theme.palette.primary.main,
            padding: `4rem 0rem !important`,
        },
        footer_link_grid: {
            display: 'flex',
            padding: '20px 0px',
        },
        footer_link_stack: {
        },
        footer_heading: {
            color: `${theme.palette.common.white} !important`,
            marginBottom: '1.2rem !important;',
            textTransform: 'uppercase',
            fontWeight: '600 !important;',
            fontFamily: `${theme.typography.fontFamily[0]} !important`,
        },
        footer_typography_link: {
            marginBottom: `0.8rem !important`,
        },
        footer_link: {
            color: `${theme.palette.common.white} !important`,
            textDecoration: `none !important`,
            cursor: 'pointer'
        },
        footer_copyright_divider: {
        },
        footer_copyright_typography: {
            marginTop: '2rem !important',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            fontWeight: '500 !important',
            color: theme.palette.common.white,
            fontFamily: theme.typography.fontFamily[1]
        },
        footer_copyright_icon: {
            marginRight: '0.25rem',
            fontSize: '1.2rem !important',
            color: theme.palette.common.white,
        }
    })),

    Header: makeStyles(theme => ({
        header_appbar: {
            backgroundColor: `${theme.palette.common.white} !important`,
            boxShadow: '0rem 0.1rem 0.5rem rgba(0,0,0,0.16) !important',
            padding: '1.5rem 0rem !important',
            zIndex: '1039 !important'
        },
        header_appbar_iconbutton: {
            padding: '0rem 0.2rem !important',
            borderRadius: '0.25rem !important',
            backgroundColor: `${theme.palette.common.gray} !important`,
            border: `0.1rem solid ${theme.palette.common.darkGray} !important`,
        },
        header_appbar_menu_icon: {
            fontSize: '2rem !important',
            color: theme.palette.common.darkGray,
        },
        header_brand_link: {
            display: 'flex !important',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none !important',
            fontFamily: theme.typography.fontFamily[0],
            textTransform: 'uppercase',
            fontWeight: ''
        },
        header_brand_image: {
            margin: 'auto !important',
            [theme.breakpoints.up('md')]: {
                height: '40px !important',
            },
            [theme.breakpoints.down('md')]: {
                height: '30px !important',
                margin: 'auto !important',
            }
        }
    })),

    ImageSlider: makeStyles(theme => ({
        swiper_slide_image: {
            width: '100%'
        },
    })),

    NewsLetter: makeStyles(theme => ({
        news_letter_main: {
            padding: '5rem 1rem !important',
            backgroundColor: `${theme.palette.common.white}`
        },
        news_letter_heading: {
            fontFamily: theme.typography.fontFamily[0],
            textAlign: 'center',
            marginBottom: '1.2rem !important',
        },
        news_letter_supportive: {
            textAlign: 'center',
        },
        news_letter_mail_container: {
            display: 'flex',
            margin: '3rem 0rem !important'
        },
        news_letter_mail_input: {
            '& .MuiInputBase-input::placeholder': {
                fontFamily: `${theme.typography.fontFamily[0]} !important`
            },
            '& .MuiOutlinedInput-root': {
                borderRadius: '0px !important'
            },
            [theme.breakpoints.down('sm')]: {
                '& .MuiOutlinedInput-root': {
                    minWidth: '7rem !important',
                }
            },
            [theme.breakpoints.up('sm')]: {
                '& .MuiOutlinedInput-root': {
                    minWidth: '25rem !important',
                }
            }
        },
        news_letter_mail_submit: {
            borderRadius: '0px !important',
            marginLeft: '1rem !important',
            padding: '0.8rem 1.5rem !important'
        },
        news_letter_toolbar: {
            display: 'flex',
            alignItems: 'center !important',
            justifyContent: 'center !important',
        },
        news_letter_icon_button: {
            backgroundColor: `${theme.palette.common.black} !important`,
            "&:hover": {
                backgroundColor: `${theme.palette.primary.main} !important`
            }
        },
        news_letter_button_icon: {
            color: theme.palette.common.white
        }
    })),

    ProductCard: makeStyles(theme => ({
        product_card: {
            padding: '0.5rem !important',
            overflow: 'hidden',
            backgroundColor: theme.palette.common.white,
            transitionDuration: '200ms',
            '&:hover': {
                boxShadow: '0px 0px 1rem rgba(0,0,0,0.16) !important'
            }
        },
        product_img_container: {
            width: '100% !important',
            position: 'relative !important',
            overflow: 'hidden !important'
        },
        product_img: {
            display: 'block',
            objectFit: 'cover',
            width: "100%",
            '&:hover': {
                transform: 'scale(1.05)',
                transitionDuration: '600ms',
            }
        },
        product_status_chip: {
            position: 'absolute !important',
            right: '0.5rem',
            top: '0.5rem',
            letterSpacing: '0.1rem !important'
        },
        product_title: {
            textAlign: 'center',
            margin: '1rem 0rem 0.3rem 0rem  !important'
        },
        product_pricing_container: {
            marginBottom: '1rem !important'
        },
        product_original_price: {
            fontWeight: '700 !important',
            '&.has_discount': {
                textDecoration: 'line-through !important',
                textDecorationColor: `${theme.palette.common.red} !important`
            }
        },
        product_discounted_price: {
            marginLeft: '1rem !important',
            color: `${theme.palette.common.red} !important`,
            fontWeight: '700 !important'
        }
    })),

    Sidebar: makeStyles(theme => ({
        drawer_list: {
            [theme.breakpoints.down('sm')]: {
                width: '18rem',
                padding: '1rem'
            },
            [theme.breakpoints.up('sm')]: {
                padding: '1.5rem',
                width: '25rem'
            }
        },
        drawer_header: {
            marginBottom: '0.5rem !important',
            flexDirection: 'row !important',
            justifyContent: 'space-between !important'
        },
        drawer_title: {
            marginBottom: '0rem !important',
            color: theme.palette.common.black,
            alignContent: 'center !important',
            fontFamily: theme.typography.fontFamily[0]
        },
        drawer_divider : {
            marginTop : '0.2rem !important'
        }
    })),

    VideoCardSection: makeStyles(theme => ({
        video_section_main: {
            padding: `5rem 1.5rem !important`,
            borderTop: `1px solid ${theme.palette.common.gray}`,
        },
        video_section_heading: {
            margin: '0rem auto 4rem auto !important',
            position: 'relative !important',
            width: 'fit-content !important',
            textAlign: 'center',
            [theme.breakpoints.up('md')]: {
                '&:before': {
                    width: '4rem !important',
                    content: '""',
                    height: '2px !important',
                    position: 'absolute !important',
                    top: 'calc(52% - 0.1rem)',
                    right: '-6rem',
                    backgroundColor: `${theme.palette.common.black} !important`
                },
                '&:after': {
                    width: '4rem !important',
                    content: '""',
                    height: '0.1rem !important',
                    position: 'absolute !important',
                    top: 'calc(52% - 0.1rem)',
                    left: '-6rem',
                    backgroundColor: `${theme.palette.common.black} !important`
                }
            }
        },
        video_section_stack: {
            position: 'relative !important',
        },
        video_section_list: {
            display: 'flex',
            padding: '0rem !important',
            minWidth: '100%',
            scrollbarWidth: 'none',
            gap: '1.5rem',
            overflow: 'auto !important',
            scrollBehaviour: 'smooth !important',
            '&::state(webkit-scrollbar)': {
                display: 'none !important'
            }
        },
        video_section_list_item: {
            padding: '0px !important',
            borderRadius: '1rem !important',
            overflow: 'hidden !important',
            [theme.breakpoints.up('lg')]: {
                minWidth: 'calc(100%/5.4 - 1.5rem) !Important'
            },
            [theme.breakpoints.down('lg')]: {
                minWidth: 'calc(100%/3.4 - 1.5rem) !Important'
            },
            [theme.breakpoints.down('sm')]: {
                minWidth: 'calc(100%/1.4) !important'
            },
            '&:hover': {
                transitionDuration: '200ms',
            }
        },
        video_section_list_item_video: {
            width: "100% !important",
            margin: '0rem !important',
        },
        video_section_indicator: {
            backgroundColor: `${theme.palette.common.black}88 !important`,
            padding: '0rem !important',
            borderRadius: `0.2rem !important`,
            height: '20%',
            position: 'absolute !important',
            top: '40%',
            zIndex: 1
        },
        video_section_indicator_icons: {
            color: `${theme.palette.common.white}`,
            fontSize: '2rem !important'
        }
    }))
})