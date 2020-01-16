import { styled } from '../constans/theme';
import { classNames } from '../constans/classNames';

const PageWrapperBlock = styled.div.attrs(props => ({
  className: props.className || classNames.pageWrapper,
}))`
  /*  1. Box model: */
  display: flex;
  justify-content: center;
  flex-direction: column;
  /*  2. Positioning: */
  /*  3. Visual (Borders & Background): */
  /*  4. Typography: */
  font-size: 1.6rem;
  /*  5 .Misc: */
`;

export default PageWrapperBlock;
