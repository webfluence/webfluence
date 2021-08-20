import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'contributor', label: 'Contributor', minWidth: 170 },
  { id: 'total', label: 'Total', minWidth: 100 },
  {
    id: 'individuals',
    label: 'Individuals',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'PACs',
    label: 'PACs',
    minWidth: 170,
    align: 'right',
  },
];

function createData(contributor, total, individuals, PACs) {
  return { contributor, total, individuals, PACs };
}

const rows = [
  createData('Baker, Donelson et al', '$13,300', '$8,300', '$5,000'),
  createData('Subject Matter', '$12800', '$12800', '$0'),
  createData('Brownstein, Hyatt et al', '$13300', '$8300', '$5000'),
  createData('Walt Disney Co', '$13300', '$8300', '$5000'),
  createData('DLA Piper', '$13300', '$8300', '$5000')
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 1000,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.contributor}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
