import { DashboardColors, styled } from '../constans/theme';
import { classNames } from '../constans/classNames';
import { Link } from 'react-router-dom';

const Wrapper = styled.div.attrs(props => ({
  className: props.className || classNames.navigation,
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
  className: props.className || classNames.navigation__paper,
}))`
  /* 1. Box model: */
  display: flex;
  flex-direction: column;
  width: 80vw;
  flex-wrap: wrap;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  /* 2. Positioning: */
  /* 3. Visual (Borders & Background): */
  /* 4. Typography: */
  /* 5 .Misc: */
  @${({ theme }) => theme.config.media.breakpoints.sm} {
    justify-content: space-between;
  }
  @${({ theme }) => theme.config.media.breakpoints.md} {
    flex-direction: row;
  }
  @${({ theme }) => theme.config.media.breakpoints.lg} {
    width: 90rem;
  }
`;

const Button = styled(Link).attrs(props => ({
  className: props.className || classNames.navigation__button,
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
  text-align: center;
  -webkit-text-stroke: 0.03rem ${({ theme }) => theme.pallet.generics.deepBlack};
  font-size: 2rem;
  font-weight: bold;
  /* 5 .Misc: */
  :hover {
    background-color: ${({ theme, variant }) =>
      theme.pallet.dashboard[variant]}DD;
    color: ${({ theme }) => theme.pallet.dashboard.leather}99;
  }
`;

const HomeButton = styled(Button)`
  /* 1. Box model: */
  width: 10rem;
  /* 2. Positioning: */
  /* 3. Visual (Borders & Background): */
  /* 4. Typography: */
  /* 5 .Misc: */
`;

export const NavigationBlock = {
  HomeButton,
  Button,
  Paper,
  Wrapper,
};
