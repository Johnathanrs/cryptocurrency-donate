import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';

const toolbarStyles = theme => ({
    root: {
      paddingRight: theme.spacing.unit,
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    spacer: {
      flex: '1 1 100%',
    },
    actions: {
      color: theme.palette.text.secondary,
    },
    title: {
      flex: '0 0 auto',
    },
  });
  
class EnhancedTableToolbar extends React.Component {
    render() {
        const { numSelected } = this.props;
  
        return (
          <Toolbar
            className={classNames(toolbarStyles.root, {
              [toolbarStyles.highlight]: numSelected > 0,
            })}
          >
            <div className={toolbarStyles.title}>
              {numSelected > 0 ? (
                <Typography color="inherit" variant="subheading">
                  {numSelected} selected
                </Typography>
              ) : (
                <Typography variant="title" id="tableTitle">
                  Nutrition
                </Typography>
              )}
            </div>
            <div className={toolbarStyles.spacer} />
            <div className={toolbarStyles.actions}>
              {numSelected > 0 ? (
                <Tooltip title="Delete">
                  <IconButton aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Filter list">
                  <IconButton aria-label="Filter list">
                    <FilterListIcon />
                  </IconButton>
                </Tooltip>
              )}
            </div>
          </Toolbar>
        );
    }
  }
  
EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};
  
export default EnhancedTableToolbar;
