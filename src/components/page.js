import * as React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import '../styles/page.scss';

const Page = ({ title, h2, children }) => {
  return (
    <div className='page-wrapper'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{title}</title>
        <link rel='canonical' href='https://bradleystaples.com/' />
        <meta name='description' content='The website of Bradley Staples, software engineer.' />
        <meta name='author' content='Bradley Staples' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      </Helmet>
      <h1 className='site-title'>Bradley Staples</h1>
      <nav className='navigation'>
        <ul>
          <li><Link activeClassName='active' to='/'>About</Link></li>
          {/* <li><Link activeClassName='active' to='/projects'>Projects</Link></li> */}
          <li><a rel='noopener noreferrer' href={'/resume.pdf'}>Resume</a></li>
          <li><a href='https://www.linkedin.com/in/bradleystaples/'>LinkedIn</a></li>
          <li><a href='http://github.com/bradleystaples'>Github</a></li>
        </ul>
        <hr />
      </nav>
      <div className='contents-wrapper'>
        <main>
          {h2 &&
            <h2>{h2}</h2>
          }
          {children}
        </main>
      </div>
    </div>
  )
};

export default Page;
