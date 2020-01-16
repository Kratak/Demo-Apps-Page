import React from 'react';
import { DashboardColors } from '../constans/theme';
import { appUrls } from '../constans/appUrls';
import { NavigationBlock } from '../styles/NavigationBlock';

const Navigation: React.FC = () => {
  return (
    <NavigationBlock.Wrapper>
      <NavigationBlock.Paper>
        <NavigationBlock.HomeButton
          variant={DashboardColors.eggshell}
          to={appUrls.home}
          children={'Home'}
        />
        <NavigationBlock.Button
          variant={DashboardColors.coral}
          to={appUrls.exchangeRateApp}
          children={'App 1'}
        />
        <NavigationBlock.Button
          variant={DashboardColors.navyBlue}
          to={appUrls.weatherApp}
          children={'App 2'}
        />
        <NavigationBlock.Button
          variant={DashboardColors.leather}
          to={appUrls.gpApp}
          children={'App 3'}
        />
      </NavigationBlock.Paper>
    </NavigationBlock.Wrapper>
  );
};

export default Navigation;
