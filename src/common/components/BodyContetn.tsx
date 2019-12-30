import styled from 'styled-components';

const BodyContent = styled.div.attrs(props => ({
  className: props.className || 'body-content',
}))`
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
`;

export default BodyContent;
