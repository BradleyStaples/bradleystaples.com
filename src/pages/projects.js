import * as React from 'react';
import Page from '../components/page';

const ProjectsPage = () => {
  return (
    <Page title='Projects | Bradley Staples' h2='Projects'>
      <h3>Resizive</h3>
      <p>An incredible tool that enables easier detection of content-based breakpoints for media queries in regards to responsively designed fluid-width websites. It allows increment 'stepping' of the viewport width to discover when your website's content layout is failing, and can also animate between a minimum and maximum width to help visualize your design in real time. This allows you to discard outdated device sizes as your breakpoints for your media queries, and use the content itself as a guide, fulfilling a richer, better experience.</p>
      <p><a href='https://resizive.bradleystaples.com'>Project Link</a></p>
      <hr />
      <h3>Remember The Ginger</h3>
      <p>A fun, fast card game of 'concentration' more commonly known as Match or Memory, simply flip cards over to match them with their twin until you have matched all the cards. Powered by JavaScript and CSS3 animations, the game remembers how many flips it takes you to complete the game. It also monitors time to complete the game to give you a few simple metrics to compare against yourself or others.</p>
      <p><a href='https://remember-the-ginger.bradleystaples.com'>Project Link</a></p>
      <hr />
      <h3>Minesweeper</h3>
      <p>A simple game that lets you flag mines, show empty squares, keeps score and even cheat, if you're so inclined. In addition, you can save and load your game later. Uses CSS3 to create a thoughtful in-game experience.</p>
      <p><a href='https://minesweeper.bradleystaples.com'>Project Link</a></p>
      <hr />
      <h3>Randle</h3>
      <p>A small, simple app meant to ease the creation of random (and pseudo-random) passwords and strings. The app will create strings with pattern recognition allowing for literal characters to be inserted into patterns. It's also possible to specify the types of characters allowed, including lowercase letters, uppercase letters, numbers and symbols. Taking advantage of full random mode gives the option to set the minimum and maximum number of characters allowed.</p>
      <p><a href='https://randle.bradleystaples.com'>Project Link</a></p>
      <hr />
      <h3>Fontbeast</h3>
      <p>A fun web app that uses an HTLM5 Canvas element to create an 'image' of a textual logo or saying. Customize the text displayed and font-face by choosing from the hundreds of fonts in Google's Web Font Library. Fontbeast also allows for custom text color and size, stroke color and size, as well as background color. When your options are ready to go, the web app generates the canvas element as a preview, and then shares the code to create the same canvas yourself on your own website.</p>
      <p><a href='https://fontbeast.bradleystaples.com'>Project Link</a></p>
    </Page>
  )
}

export default ProjectsPage;
