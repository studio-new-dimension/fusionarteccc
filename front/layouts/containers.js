import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

export const Flex1Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .section-uno {
    flex: 1;
    height: 100vh;
    background-color: orange;
  }

  .section-dos {
    flex: 1;
    height: 100vh;
    background-color: red;
  }
  .section-tres {
    flex: 1;
    height: 100vh;
    background-color: blue;
  }
  .section-cuatro {
    flex: 1;
    height: 100vh;
    background-color: green;
  }
  .section-cinco {
    flex: 1;
    height: 100vh;
    background-color: #990099;
  }
`;