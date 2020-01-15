import React from 'react';
import { Link } from 'react-router-dom';
import { DashboardColors, styled } from '../constans/theme';
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
  @${({ theme }) => theme.config.media.breakpoints.md} {
    flex-direction: row;
  }
  @${({ theme }) => theme.config.media.breakpoints.lg} {
    width: 90rem;
  }
  /* 1. Box model: */
  display: flex;
  flex-direction: column;
  width: 80vw;
  flex-wrap: wrap;
  padding: 2rem;
  justify-content: space-between;
  /* 2. Positioning: */
  /* 3. Visual (Borders & Background): */
  /* 4. Typography: */
  /* 5 .Misc: */
`;

const Brick = styled(Link).attrs(props => ({
  className: props.className || classNames.brick,
}))<{ variant: DashboardColors }>`
  /* 1. Box model: */
  box-sizing: border-box;
  width: 25rem;
  min-height: 5rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  /* 2. Positioning: */
  /* 3. Visual (Borders & Background): */
  background-color: ${({ theme, variant }) => theme.pallet.dashboard[variant]};
  border-radius: 0.5rem;
  /* 4. Typography: */
  color: ${({ theme }) => theme.pallet.dashboard.eggshell};
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  /* 5 .Misc: */
`;

const Home = styled(Brick)`
  /* 1. Box model: */
  width: 10rem;
  /* 2. Positioning: */
  /* 3. Visual (Borders & Background): */
  /* 4. Typography: */
  color: ${({ theme }) => theme.pallet.dashboard.navyBlue};
  /* 5 .Misc: */
`;

const Navigation: React.FC = () => {
  return (
    <Wrapper>
      <Paper>
        <Home
          variant={DashboardColors.eggshell}
          to={appUrls.home}
          children={'Home'}
        />
        <Brick
          variant={DashboardColors.coral}
          to={appUrls.exchangeRateApp}
          children={'App 1'}
        />
        <Brick
          variant={DashboardColors.navyBlue}
          to={appUrls.weatherApp}
          children={'App 2'}
        />
        <Brick
          variant={DashboardColors.leather}
          to={appUrls.gpApp}
          children={'App 3'}
        />
      </Paper>
    </Wrapper>
  );
};

export default Navigation;
