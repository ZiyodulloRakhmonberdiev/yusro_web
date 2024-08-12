// components/deleteProduct/DeleteProduct.js
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

function DeleteProduct({ open, onClose, onConfirm }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogContent>
                Are you sure you want to delete this product?
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onConfirm}>Confirm</Button>
            </DialogActions>
        </Dialog>
    );
}

export default DeleteProduct;
