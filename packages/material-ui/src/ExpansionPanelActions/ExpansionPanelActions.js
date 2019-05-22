import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import '../Button'; // So we don't have any override priority issue.

export const styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end',
  },
  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > * + *': {
      marginLeft: 8,
    },
  },
};

const ExpansionPanelActions = React.forwardRef(function ExpansionPanelActions(props, ref) {
  const { classes, className, disableSpacing = false, ...other } = props;

  return (
    <div
      className={clsx(classes.root, { [classes.spacing]: !disableSpacing }, className)}
      ref={ref}
      {...other}
    />
  );
});

ExpansionPanelActions.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing: PropTypes.bool,
};

export default withStyles(styles, { name: 'MuiExpansionPanelActions' })(ExpansionPanelActions);