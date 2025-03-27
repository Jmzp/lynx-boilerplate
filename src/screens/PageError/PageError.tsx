import React from 'react';
import strings from '../../localization/strings.ts';

const PageError = () => (
  <div className="page">
    <p>{strings.errors.pageNotFound}</p>
  </div>
);

export default PageError;
