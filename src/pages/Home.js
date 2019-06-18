import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import PageCollumn from '../components/PageCollumn';
import { LIGHT_PURPLE, DARK_PURPLE } from '../defaults/Colors';

const Home = () => {
  return (
    <Page>
      <PageCollumn
        styles={{
          backgroundColor: LIGHT_PURPLE,
          width: '70%',
        }}>
        Test :)
      </PageCollumn>
      <PageCollumn
        styles={{
          backgroundColor: DARK_PURPLE,
          width: '30%',
        }}>
      </PageCollumn>
    </Page>
  )
};

const Title = styled.h1`
  color: red;
`;

export default Home;
