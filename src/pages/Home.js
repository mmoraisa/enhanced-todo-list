import React from 'react';
import Page from '../components/Page';
import PageColumn from '../components/PageColumn';
import { LIGHT_PURPLE, DARK_PURPLE } from '../defaults/Colors';
import ApplicationCalendar from '../components/ApplicationCalendar';
import SelectedDateTasks from '../components/SelectedDateTasks';

const Home = () => {
  return (
    <Page>
      <PageColumn
        styles={{
          alignItems: 'center',
          backgroundColor: LIGHT_PURPLE,
          display: 'flex',
          justifyContent: 'center',
          flex: 6,
        }}>
        <ApplicationCalendar />
      </PageColumn>
      <PageColumn
        styles={{
          backgroundColor: DARK_PURPLE,
          boxSizing: 'border-box',
          flex: 4,
          padding: '40px',
        }}>
        <SelectedDateTasks />
      </PageColumn>
    </Page>
  )
};

export default Home;
