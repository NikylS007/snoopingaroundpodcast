import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import './mobileHeader.css'

const MobileHeader = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const currentUrl = window.location.href;

    const toggleDrawer = (open) => {
        setDrawerOpen(open);
    };

    function getLastPart(url) {
        const parts = url.split('/');
        return parts.at(-1);
    }

    const pageMapping = (id) => {
        if (id === 1) {
            navigate('/')
        }
        if (id === 2) {
            navigate('/about')
        }
        if (id === 3) {
            navigate('/episodes')
        }
        if (id === 4) {
            navigate('/blog')
        }

    }

    const headersData = [
        {
            id: 1,
            label: "Snooping Around",
        },
        {
            id: 2,
            label: "About",
        },
        {
            id: 3,
            label: "Episodes",
        },
        {
            id: 4,
            label: "Blog",
        }
    ];

    const getMenuButtons = () => {
        return headersData.map(({ label, href, id }) => {
            return (
                <ListItem>
                    <ListItemText>
                        <Button
                            {...{
                                key: label,
                                color: "inherit",
                                to: href,
                                onClick: () => pageMapping(id)
                            }}
                            id="godown">
                            {label}
                        </Button>
                    </ListItemText>
                </ListItem>
            );
        });
    };

    return (
        <div>
            <AppBar className='mobileheader'>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color={getLastPart(currentUrl) === 'episodes' || getLastPart(currentUrl) === 'blog' ? "inherit" : "default"}
                        aria-label="menu"
                        onClick={() => toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
                        <List>
                            <ListItem>
                                <ListItemText>

                                    {getMenuButtons()}
                                </ListItemText>

                            </ListItem>
                        </List>
                    </Drawer>
                    <div className={getLastPart(currentUrl) === 'episodes' || getLastPart(currentUrl) === 'blog' ? 'mobileheaderfor-title' : 'mobileheader-title'}>
                        Snooping Around
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default MobileHeader;