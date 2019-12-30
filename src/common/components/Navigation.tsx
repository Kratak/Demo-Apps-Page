import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs(props => ({
  className: props.className || 'navigation-wrapper',
}))`
  .paper {
    //1. Box model:
    display: flex;
    flex-wrap: wrap;
    width: 100rem;
    padding: 2rem;
    justify-content: space-between;

    //2. Positioning:

    //3. Visual (Borders & Background):
    background-color: aliceblue;
    border: #282c34 thick solid;
    border-radius: 0.5rem;

    //4. Typography:

    //5 .Misc:
  }

  .brick {
    //1. Box model:
    box-sizing: border-box;
    width: 30rem;
    min-height: 5rem;
    margin-bottom: 1rem;
    padding: 1rem;

    //2. Positioning:

    //3. Visual (Borders & Background):
    background-color: burlywood;
    border: darkblue thick solid;
    border-radius: 0.5rem;

    //4. Typography:
    font-size: 2rem;
    font-weight: bold;
    text-align: center;

    //5 .Misc:
  }
`;

const Navigation: React.FC = () => {
  return (
    <Wrapper>
      <div className={'paper'}>
        <div className={'brick'}>App 1</div>
        <div className={'brick'}>App 2</div>
        <div className={'brick'}>App 3</div>
      </div>
    </Wrapper>
  );
};

export default Navigation;
