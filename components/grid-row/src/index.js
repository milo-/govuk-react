// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { MEDIA_QUERIES, SITE_WIDTH, SPACING } from '@govuk-react/constants';

const GridRowInner = glamorous.div({
  width: '100%',
  clear: 'left',
  margin: `0 0 ${SPACING.SCALE_3}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'flex',
    maxWidth: SITE_WIDTH,
    marginBottom: SPACING.SCALE_5,
  },
});

const GridRow = ({ children, className }) => (
  <GridRowInner css={[className]}>{children}</GridRowInner>
);

GridRow.defaultProps = {
  className: undefined,
};

GridRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default GridRow;