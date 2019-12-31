import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { appUrls } from '../constans/appUrls';
import { classNames } from '../constans/classNames';

const Wrapper = styled.div.attrs(props => ({
  className: props.className || classNames.navigation_wrapper,
}))`
  /* 1. Box model: */
  display: flex;
  /* 2. Positioning: */
  align-self: center;
  /* 3. Visual (Borders & Background): */
  /* 4. Typography: */
  /* 5 .Misc: */
`;

const Paper = styled.div.attrs(props => ({
  className: props.className || classNames.paper,
}))`
  /* 1. Box model: */
  display: flex;
  flex-wrap: wrap;
  width: 100rem;
  padding: 2rem;
  justify-content: space-between;
  /* 2. Positioning: */
  /* 3. Visual (Borders & Background): */
  background-color: aliceblue;
  border: #282c34 thick solid;
  border-radius: 0.5rem;
  /* 4. Typography: */
  /* 5 .Misc: */
`;

const Brick = styled(Link).attrs(props => ({
  className: props.className || classNames.brick,
}))`
  /* 1. Box model: */
  box-sizing: border-box;
  width: 30rem;
  min-height: 5rem;
  margin-bottom: 1rem;
  padding: 1rem;
  /* 2. Positioning: */
  /* 3. Visual (Borders & Background): */
  background-color: burlywood;
  border: darkblue thick solid;
  border-radius: 0.5rem;
  /* 4. Typography: */
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  /* 5 .Misc: */
`;

const Navigation: React.FC = () => {
  return (
    <Wrapper>
      <Paper>
        <Brick to={appUrls.exchangeRateApp}>App 1</Brick>
        <Brick to={appUrls.weatherApp}>App 2</Brick>
        <Brick to={appUrls.gpApp}>App 3</Brick>
      </Paper>
    </Wrapper>
  );
};

export default Navigation;
