import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { array } from "yup/lib/locale";
import PropTypes from 'prop-types';

export default class Tables extends React.Component{
    render() {
        const { data, columns } = this.props;
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        {
                            columns.map(({label, align}) => (
                                <>
                                    <TableCell align={align}>{label}</TableCell>
                                </>
                                ))
                        }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {
                                data.map(({name, email}) => (
                                        <>
                                            <TableRow>
                                                {
                                                    columns[0].label === 'Name' ? (
                                                        <>
                                                            <TableCell align='center'>{name}</TableCell> <TableCell>{email}</TableCell>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <TableCell>{email}</TableCell> <TableCell align='center'>{name}</TableCell>
                                                        </>)
                                                }
                                            </TableRow>
                                        </>
                                ))
                            }
                        
                    </TableBody>
                </Table>
            </TableContainer>
        );
  }
}

Tables.propTypes = {
    data: PropTypes.objectOf(array),
    columns: PropTypes.objectOf(array)
}