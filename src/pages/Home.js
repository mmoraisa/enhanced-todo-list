import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../ducks/Tasks';
import Page from '../components/Page';
import PageCollumn from '../components/PageCollumn';
import { LIGHT_PURPLE, DARK_PURPLE } from '../defaults/Colors';
import ApplicationCalendar from '../components/ApplicationCalendar';

const Home = () => {

  const dispatch = useDispatch();

  dispatch(addTask(new Date(), { description: 'descricao', title: 'title' }));

  return (
    <Page>
      <PageCollumn
        styles={{
          alignItems: 'center',
          backgroundColor: LIGHT_PURPLE,
          display: 'flex',
          justifyContent: 'center',
          flex: 6,
        }}>
        <ApplicationCalendar onChange={console.log} />
      </PageCollumn>
      <PageCollumn
        styles={{
          backgroundColor: DARK_PURPLE,
          flex: 4,
        }}>
      </PageCollumn>
    </Page>
  )
};

export default Home;
