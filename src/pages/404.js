import * as React from 'react';
import Page from '../components/page';

const NotFoundPage = () => {
  return (
    <Page title='Not Found | Bradley Staples' h2='Uh Oh!'>
      <div className='content-404'>
        <img src='/404.jpg' alt='This is not the page you are looking for' title='This is not the page you are looking for' />
      </div>

    </Page>
  )
}

export default NotFoundPage;
