import React, { useCallback } from 'react';
import { TableRow, TableCell, Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Remove, Add, Delete } from "@mui/icons-material";
import { BasketItem } from "../../app/models/basket";
import { useAppDispatch } from "../../app/store/configureStore";
import { removeBasketItemAsync, addBasketItemAsync } from "./basketSlice";

interface Props {
    item: BasketItem;
    isBasket: boolean;
    status: string;
}

const BasketTableRow: React.FC<Props> = React.memo(({ item, isBasket, status }) => {
    const dispatch = useAppDispatch();

    const handleRemoveItem = useCallback(() => 
        dispatch(removeBasketItemAsync({ productId: item.productId, quantity: 1, name: 'rem' })),
        [dispatch, item.productId]
    );

    const handleAddItem = useCallback(() => 
        dispatch(addBasketItemAsync({ productId: item.productId })),
        [dispatch, item.productId]
    );

    const handleDeleteItem = useCallback(() => 
        dispatch(removeBasketItemAsync({ productId: item.productId, quantity: item.quantity, name: 'del' })),
        [dispatch, item.productId, item.quantity]
    );

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
                <Box display='flex' alignItems='center'>
                    <img src={item.pictureUrl} alt={item.name} className="basket-item-image" />
                    <span>{item.name}</span>
                </Box>
            </TableCell>
            <TableCell align="right">PLN {(item.price / 1).toFixed(2)}</TableCell>
            <TableCell align="center">
                {isBasket && (
                    <LoadingButton
                        loading={status === `pendingRemoveItem${item.productId}rem`}
                        onClick={handleRemoveItem}
                        color='error'
                    >
                        <Remove />
                    </LoadingButton>
                )}
                {item.quantity}
                {isBasket && (
                    <LoadingButton
                        loading={status === `pendingAddItem${item.productId}`}
                        onClick={handleAddItem}
                        color='secondary'
                    >
                        <Add />
                    </LoadingButton>
                )}
            </TableCell>
            <TableCell align="right">PLN {((item.price / 1) * item.quantity).toFixed(2)}</TableCell>
            {isBasket && (
                <TableCell align="right">
                    <LoadingButton
                        loading={status === `pendingRemoveItem${item.productId}del`}
                        onClick={handleDeleteItem}
                        color='error'
                    >
                        <Delete />
                    </LoadingButton>
                </TableCell>
            )}
        </TableRow>
    );
});

export default BasketTableRow;
