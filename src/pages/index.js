import * as React from 'react';
import { Link } from 'gatsby';

import Page from '../components/page';


const IndexPage = () => {
  return (
    <Page title='Bradley Staples' h2='A Proven Software Engineer'>
      <p>Bradley has over a decade of web development and software engineering experience, primarily in front-end development building professional custom user interfaces ranging from complex web apps to marketing websites.</p>
      <p>To see a few of his projects, see the <Link to='/projects'>projects</Link> page.</p>
    </Page>
  )
}

export default IndexPage;
