import React from 'react';
import Page from '../components/Page';
import PageCollumn from '../components/PageCollumn';
import { LIGHT_PURPLE, DARK_PURPLE } from '../defaults/Colors';
import ApplicationCalendar from '../components/ApplicationCalendar';

const Home = () => {
  return (
    <Page>
      <PageCollumn
        styles={{
          alignItems: 'center',
          backgroundColor: LIGHT_PURPLE,
          display: 'flex',
          justifyContent: 'center',
          width: '70%',
        }}>
        <ApplicationCalendar onChange={console.log} />
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

export default Home;
