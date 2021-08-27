import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from '@material-ui/core';
import Modal from 'react-modal'
import  { org }  from '../store/orgs';
import { getOrgThunk } from '../store/orgs';

const columns = [
  { id: 'contributor', label: 'Contributor', minWidth: 170 },
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
  { id: 'total', label: 'Total', minWidth: 170, align: 'right' },
];

function formatCurrency (num){
  
  const formatted = parseInt(num).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  }).slice(0, -3)
  return formatted
}

function createData(contributor, total, individuals, PACs) {
  return { 
    contributor, 
    individuals: formatCurrency(individuals), 
    PACs: formatCurrency(PACs),
    total: formatCurrency(total)
  }
}
  

// const rows = [
//   createData('Baker, Donelson et al', '$13,300', '$8,300', '$5,000'),
//   createData('Subject Matter', '$12800', '$12800', '$0'),
//   createData('Brownstein, Hyatt et al', '$13300', '$8300', '$5000'),
//   createData('Walt Disney Co', '$13300', '$8300', '$5000'),
//   createData('DLA Piper', '$13300', '$8300', '$5000')
// ];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: '100%',
  },
});

// modal styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    height: "90vh",
    overflow: "hidden",
  },
};

export default function StickyHeadTable() {
  const classes = useStyles();
  
  const dispatch = useDispatch();

 const [isModalOpen, setIsModalOpen] = useState(false);

 const [selectedContrib, setSelectedContrib] = useState('')

  const candcontrib = useSelector((state = []) => state.candcontrib);

  const org = useSelector((state = []) => state.org)

  const rows = candcontrib.response.contributors.contributor.map((contributor) => createData(contributor.attributes.org_name, contributor.attributes.total, contributor.attributes.indivs, contributor.attributes.pacs))

  const contribOpenModal = () => {
    setIsModalOpen(true)
  }

  const contribCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleSelect= (contrib) => {
    const searchName = contrib.replace(' ', '+')
    dispatch(getOrgThunk(searchName))
    setSelectedContrib(contrib)
    contribOpenModal()
  }

  const imgSrcFormat = (contribName) => {
    const companyAbbrevs = ["Co", "Inc", "LLC"]
    return contribName.replace('&', 'and').split(' ').filter((word) => !companyAbbrevs.includes(word)).join('').toLowerCase()
  }

  return (
    <Fragment>
    {/* contrib modal */}
    <Modal
    isOpen={isModalOpen}
    onRequestClose={contribCloseModal}
    style={customStyles}
    zIndex="9999"
    contentLabel="Example Modal"
    ariaHideApp={false}
  >
    <Grid style={{display: "flex"}}>
    <Avatar variant="square" style={{ height: "150px", width: "150px", marginRight: "20px" }} src={`//logo.clearbit.com/${imgSrcFormat(selectedContrib)}.com`}/>
    <h1>{selectedContrib}</h1>
    {/* <h1>{org.data ? org.data.response.organization.attributes.orgid : ''}</h1> */}
    </Grid>
  </Modal>
    <Paper className={classes.root}>
      {/* <Typography>These tables list the top donors to candidates in the 2021 - 2022 election cycle. The organizations themselves did not donate, rather the money came from the organizations' PACs, their individual members or employees or owners, and those individuals' immediate families. Organization totals include subsidiaries and affiliates.</Typography> */}
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontSize: "18px", zIndex: "0" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.contributor} onClick={() => handleSelect(row.contributor)}>
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
    </Fragment>
  );
}
