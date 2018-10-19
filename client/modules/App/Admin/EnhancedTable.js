import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import EnhancedTableHead from './EnhancedTableHead';
import TextField from '@material-ui/core/TextField';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { browserHistory } from 'react-router';
import moment from 'moment';

const headerRows = [
  { id: 'title', numeric: false, disablePadding: true, label: 'Title' },
  { id: 'tickets', numeric: true, disablePadding: false, label: 'Max Available Tickets' },
  { id: 'total', numeric: true, disablePadding: false, label: 'Total (BTC)' },
  { id: 'cnt', numeric: true, disablePadding: false, label: '# of Donors' },
  { id: 'duration', numeric: true, disablePadding: false, label: 'Duration' },
  { id: 'startDate', numeric: true, disablePadding: false, label: 'Start Date' },
];

class EnhancedTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            order: 'asc',
            orderBy: 'calories',
            selected: [],
            data: [],
            page: 0,
            rowsPerPage: 5,
            country: '',
            city: '',
        };

        this.handleRequestSort = this.handleRequestSort.bind(props);
        this.searchProject = this.searchProject.bind(this);
        this.filterData = this.filterData.bind(this);
    }

  searchProject = name => event => {
    this.setState({
      ...this.state,
      search: event.target.value,
    });
  };

   desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }

  getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => this.desc(a, b, orderBy) : (a, b) => -this.desc(a, b, orderBy);
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState({ selected: this.state.data.map(n => n.id) });
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    // const { selected } = this.state;
    // const selectedIndex = selected.indexOf(id);
    // let newSelected = [];

    // if (selectedIndex === -1) {
    //   newSelected = newSelected.concat(selected, id);
    // } else if (selectedIndex === 0) {
    //   newSelected = newSelected.concat(selected.slice(1));
    // } else if (selectedIndex === selected.length - 1) {
    //   newSelected = newSelected.concat(selected.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //   newSelected = newSelected.concat(
    //     selected.slice(0, selectedIndex),
    //     selected.slice(selectedIndex + 1),
    //   );
    // }
    
    browserHistory.push(`/admin/projectdetail/${id}`);
    // this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  selectCountry(val) {
    this.setState({ ...this.state, country: val });
  }

  selectRegion(val) {
      this.setState({ ...this.state, city: val });
  }

  filterData(data) {
    let keyword = this.state.search;
    const newData = [];
    for (let i = 0; i < data.length; i++) {
      keyword = keyword.toLowerCase();
      const val = data[i];
      if (val.title.toLowerCase().includes(keyword) ||
       val.subTitle.toLowerCase().includes(keyword) ||
       val.address.country.toLowerCase().includes(keyword) ||
       val.address.city.toLowerCase().includes(keyword)) {
          if (this.state.country) {
            if ( val.address.country == this.state.country) {
              if (this.state.city) {
                if (val.address.city == this.state.city) {
                  newData.push(val);
                }
              } else {
                newData.push(val);
              }
            }
          } else {
            newData.push(val);
          }
      }
    }

    return newData;
  }

  render() {
    let { data } = this.props;
    const { order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    data = this.filterData(data);
    return (
      <Paper className="table-root p-4">
        <div className="row">
          <div className="fs-125 fb" style={{ flex: '1 1 auto' }}>
            Browser Projects
          </div>
          <TextField
            id="outlined-search"
            label="Search Project"
            type="search"
            value={this.state.search}
            onChange={this.searchProject('')}
            margin="normal"
          />
          <div className="mb-sm-2" style={{ height: '36px' }}>
            <CountryDropdown
                defaultOptionLabel="Choose a country"
                value={this.state.country}
                onChange={(val) => this.selectCountry(val)}
                style={{
                    fontSize: '1.25rem',
                    padding: '0.25rem',
                    marginLeft: '1rem' }} />
            <RegionDropdown
                country={this.state.country}
                value={this.state.city}
                blankOptionLabel="No country selected."
                defaultOptionLabel="Now select a region"
                style={{
                    fontSize: '1.25rem',
                    padding: '0.25rem' }}
                onChange={(val) => this.selectRegion(val)} />
        </div>
        </div>
        
        <div className="table-wrapper">
          <Table className="table" aria-labelledby="tableTitle">
            <EnhancedTableHead
              rows={headerRows}
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {this.stableSort(data, this.getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n._id);
                  const a = moment(n.fundingDuration, 'YYYY-MM-DD');
                  const b = moment().format('YYYY-MM-DD');
                  const days = a.diff(b, 'days');
                  const startDate = moment(n.startDate).format('MMM DD, YYYY');
                  const actualDonors = n.donors.map(donor => { return donor._id; });
                  const donors = actualDonors.filter((item, index) => {
                    return actualDonors.indexOf(item) >= index;
                  });
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n._id)}
                      aria-checked={isSelected}
                      tabIndex={-1}
                      className="cursor-point"
                      key={n._id}
                      selected={isSelected}
                    >
                      <TableCell component="th" scope="row" padding="none">
                        {n.title}
                      </TableCell>
                      <TableCell numeric>{Math.round(n.maximumAvailableTickets)}</TableCell>
                      <TableCell numeric>{n.totalMoneyInBTC}</TableCell>
                      <TableCell numeric>{donors.length}</TableCell>
                      <TableCell numeric>{days} days</TableCell>
                      <TableCell numeric>{startDate}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default EnhancedTable;
