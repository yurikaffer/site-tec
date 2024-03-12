import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';

interface DataRow {
    altura: string;
    largura: string;
    lateral: string;
}

interface TabelaMedidasProps {
    rows: DataRow[];
}

export const TabelaMedidas: React.FC<TabelaMedidasProps> = ({ rows }) => {
    const cardStyle = {
        borderRadius: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 3px 9px 0 rgba(0, 0, 0, 0.1)',
        width: '30rem',
    };

    return (
        <Card sx={cardStyle}>
            <TableContainer>
                <Table sx={{ maxWidth: '100%' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                <Typography fontSize={'16px'} fontWeight={600}>Altura</Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography fontSize={'16px'} fontWeight={600}>Largura</Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography fontSize={'16px'} fontWeight={600}>Lateral</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index} >
                                <TableCell align="center">
                                    <Typography fontSize={'16px'}>{row.altura}</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography fontSize={'16px'}>{row.largura}</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography fontSize={'16px'}>{row.lateral}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
}
