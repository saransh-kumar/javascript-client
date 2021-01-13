import React from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import {withLoaderAndMessage} from '../HOC';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function Tables(props) {
  const {
    id, data, column, order, orderBy, count, page, onPageChange, rowsPerPage, actions,
  } = props;
  return (
    <TableContainer component={Paper} style={{border: 'solid #c0c0c0 1px'}}>
      <Table aria-label="simple table" >
        <TableHead >
          <TableRow style={{marginLeft: '20%'}}>
            {
              column.map((item) => (
                <>
                  <TableCell key={`${item.label}`} align={item.align} style={{borderBottom: 'solid #c0c0c0 1px'}}>
                    <TableSortLabel
                      active={orderBy === item.field}
                      direction={order}
                      style={{marginRight: '20%'}}
                    >
                      {item.label}
                    </TableSortLabel>
                  </TableCell>
                </>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((trainees) => (
            <StyledTableRow key={trainees.id} hover={true}>
              {
                column.map((item) => (
                  <>
                    <TableCell key={`${trainees[id]}${item.field}`} align={item.align} >
                      {item.format ? item.format(trainees[item.field]) : trainees[item.field] }
                      {item.label === 'Date' ? actions.map((action) => (
                        <>
                          <Button variant="text" onClick={() => action.handler(trainees)}>
                            {action.icon}
                          </Button>
                        </>
                      )) : '' }
                    </TableCell>
                  </>
                ))
              }
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
        onChangePage={onPageChange}
      />
    </TableContainer>
  );
}
Tables.propTypes = {
  id: PropTypes.string.isRequired,
  column: PropTypes.arrayOf(Object).isRequired,
  data: PropTypes.arrayOf(Object).isRequired,
  order: PropTypes.string,
  orderBy: PropTypes.string,
  onSort: PropTypes.func,
  onPageChange: PropTypes.func,
  rowsPerPage: PropTypes.number,
  count: PropTypes.number,
  page: PropTypes.number,
  actions: PropTypes.arrayOf(PropTypes.any),
  onSelect: PropTypes.func,
};
Tables.defaultProps = {
  order: '',
  orderBy: '',
  onSort: () => {},
  onPageChange: () => {},
  rowsPerPage: 10,
  count: 0,
  page: 1,
  actions: [],
};

export default withLoaderAndMessage(Tables);