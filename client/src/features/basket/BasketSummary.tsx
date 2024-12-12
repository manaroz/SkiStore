import React, { useMemo } from "react";
import { TableContainer, Paper, Table, TableBody, TableRow, TableCell, Typography } from "@mui/material";
import { useAppSelector } from "../../app/store/configureStore";
import { currencyFormat } from "../../app/util/util";
import './BasketSummary.css';

interface Props {
    subtotal?: number;
}

export default function BasketSummary({ subtotal: propSubtotal }: Props) {
    const { basket } = useAppSelector(state => state.basket);

    const subtotal = useMemo(() => {
        if (propSubtotal !== undefined) return propSubtotal;
        return basket?.items.reduce((sum, item) => sum + (item.quantity * item.price), 0) ?? 0;
    }, [basket, propSubtotal]);

    const deliveryFee = useMemo(() => subtotal > 20000 ? 0 : 500, [subtotal]);
    const total = useMemo(() => subtotal + deliveryFee, [subtotal, deliveryFee]);

    return (
        <TableContainer component={Paper} variant='outlined'>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={2}>Subtotal</TableCell>
                        <TableCell align="right">{currencyFormat(subtotal)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Delivery fee*</TableCell>
                        <TableCell align="right">{currencyFormat(deliveryFee)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">{currencyFormat(total)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={3}>
                            <Typography variant="body2" className="delivery-note">
                                *Orders over PLN 200 qualify for free delivery
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
