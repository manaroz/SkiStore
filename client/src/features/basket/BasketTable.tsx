import React, { useMemo } from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useAppSelector } from "../../app/store/configureStore";
import { BasketItem } from "../../app/models/basket";
import BasketTableRow from './BasketTableRow';
import './BasketTable.css';

interface Props {
    items: BasketItem[];
    isBasket?: boolean;
}

const BasketTable: React.FC<Props> = React.memo(({ items, isBasket = true }) => {
    const { status } = useAppSelector(state => state.basket);

    const tableHeaders = useMemo(() => [
        "Product", "Price", "Quantity", "Subtotal", isBasket ? "" : null
    ].filter(Boolean), [isBasket]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        {tableHeaders.map((header, index) => (
                            <TableCell key={index} align={index > 0 ? "right" : "left"}>
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(item => (
                        <BasketTableRow 
                            key={item.productId}
                            item={item}
                            isBasket={isBasket}
                            status={status}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
});

export default BasketTable;
