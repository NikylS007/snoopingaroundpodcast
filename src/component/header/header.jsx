import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import './header.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

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

const useStyles = makeStyles(() => ({
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFF",
    textAlign: "left",
    textTransform: "none"
  },
  menuButton: {
    fontFamily: "Sora, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    color: "#000000",
    textTransform: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    textTransform: "none"
  },
  episodeHeader: {
    color: '#FFFFFF',
    fontFamily: "Sora, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    textTransform: "none",
  }
}));

export default function Header() {
  const { logo, menuButton, toolbar, episodeHeader } = useStyles();
  const currentUrl = window.location.href;
  function getLastPart(url) {
    const parts = url.split('/');
    return parts.at(-1);
  }

  const navigate = useNavigate();

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <div className={logo}></div>
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };


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

  const getMenuButtons = () => {
    return headersData.map(({ label, href, id }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            className: getLastPart(currentUrl) === 'episodes' || getLastPart(currentUrl) === 'blog' ? episodeHeader : menuButton,
            onClick: () => pageMapping(id)
          }}
          id="godown">
          {label}
        </Button>
      );
    });
  };


  return (
    <div>
      <header>
        <AppBar className='header' elevation={0}>
          {displayDesktop()}
        </AppBar>
      </header>
    </div>
  );
}