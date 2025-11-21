import React, { Component } from 'react';

import { Footer, Profile, Icon } from '@Elements';

const Details = ({ name, githubURL, linkedinURL, twitterURL, projectURL }) => (
  <Footer>
    {/* Removed author/footer text as requested */}
    <div className="logos">
      <Profile href={githubURL} target="_blank">
        <Icon name="github" />
      </Profile>
      <Profile href={linkedinURL} target="_blank">
        <Icon name="linkedin" />
      </Profile>
      <Profile href={twitterURL} target="_blank">
        <Icon name="twitter" />
      </Profile>
    </div>
  </Footer>
);

export default Details;
