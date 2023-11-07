import { BottomNavigation, Box, Divider, List, ListItem, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'

const developers = [
    {
        name: 'Neel Poriya',
        profile: 'NeelPoriya'
    },
    {
        name: 'Vrutik Prajapati',
    },
    {
        name: 'Kishan Sangani',
    },
    {
        name: 'Harsh Patel',
    },
    {
        name: 'Darshan Kheni',
    },
    {
        name: 'Achyut Shah'
    },
    {
        name: 'Param Mistry'
    }
]

const Footer = () => {
    const numberOfDevelopersColumns = 3;

    return (
        <Box marginTop={2}>
            <Box sx={{
                backgroundColor: '#3333',
                width: '100%',
                height: '.2rem',
                borderRadius: '2rem'
            }}>
                &nbsp;
            </Box>
            <Box
                sx={{
                    backgroundColor: 'rgba(251, 251, 251, .7)',
                    width: '100%',
                    display: 'flex',
                    borderRadius: '1rem',
                    marginTop: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem'
                }}
            >
                {/* Logo Column */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        marginLeft: '1rem',
                        flexGrow: '.5',
                        userSelect: 'none',
                    }}
                >
                    <Image src={'/gupta-lab-logo.png'} width={75} height={75} alt='Gupta Lab Logo' />
                    <Typography variant='h4' sx={{ textTransform: 'uppercase', marginTop: '2rem' }}>
                        GuptaLab
                    </Typography>
                    <Typography variant='body1' sx={{ marginTop: '1rem' }}>
                        Laboratory of Natural Information Processing
                    </Typography>
                </Box>
                {/* Team Column */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        marginLeft: '1rem',
                        flexGrow: '1',
                    }}
                >
                    <Typography variant='h5' sx={{ userSelect: 'none' }}>
                        Team
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                        }}
                    >
                        {[...Array(numberOfDevelopersColumns).keys()].map(
                            (column, index) => (
                                <List key={index}>
                                    {developers.slice(Math.ceil(developers.length / numberOfDevelopersColumns) * index, Math.ceil(developers.length / numberOfDevelopersColumns) * (index + 1)).map((developer, index) => (
                                        <ListItem key={index}>
                                            <Link

                                                href={`https://google.com/search?q=who+the+fuck+is+${developer.name.split(' ').join('+')}`} target='blank'>
                                                <Typography sx={{
                                                    '&:hover': {
                                                        color: '#aaa'
                                                    },
                                                }} variant='body1'>
                                                    {developer.name}
                                                </Typography>
                                            </Link>
                                        </ListItem>
                                    ))}
                                </List>
                            ))
                        }
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        marginLeft: '1rem',
                        flexGrow: '.5'
                    }}
                >
                    <Typography variant='h5' sx={{ userSelect: 'none' }}>
                        Social
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <List>
                            <ListItem>
                                <Link href='https://twitter.com/guptalab' target='blank'>
                                    <Typography variant='body1' sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            color: 'primary.main'
                                        },
                                        textTransform: 'capitalize'
                                    }}>
                                        <BsTwitter style={{ marginRight: '.4rem' }} />
                                        Twitter
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href='https://www.linkedin.com/company/guptalab/' target='blank'>
                                    <Typography variant='body1' sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            color: '#0077b5'
                                        },
                                        textTransform: 'capitalize'
                                    }}>
                                        <BsLinkedin style={{ marginRight: '.4rem' }} />
                                        LinkedIn
                                    </Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href='https://www.youtube.com/c/ManishGuptamankg' target='blank'>
                                    <Typography variant='body1' sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            color: '#ff0000'
                                        },
                                        textTransform: 'capitalize'
                                    }}>
                                        <BsYoutube style={{ marginRight: '.4rem' }} />
                                        YouTube
                                    </Typography>
                                </Link>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Link href='https://github.com/guptalab' target='blank'>
                                    <Typography variant='body1' sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            color: '#333'
                                        },
                                        textTransform: 'capitalize'
                                    }}>
                                        <BsGithub style={{ marginRight: '.4rem' }} />
                                        Github
                                    </Typography>
                                </Link>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer