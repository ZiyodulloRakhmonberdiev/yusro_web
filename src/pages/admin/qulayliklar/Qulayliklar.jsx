import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './qulayliklar.css';
import Navbar from '../../../components/admin/navbar/Navbar';
import AddItemBtn from '../../../components/admin/addItem/AddItemBtn';
import useFetch from '../../../hooks/useFetch';
import { tableHeaders } from '../../../components/admin/tableDetails/TableDeails';
import DataTable from '../../../components/admin/dataTable/DataTable';
import EditComfort from '../../../components/admin/editProduct/EditProduct';
import DeleteComfort from '../../../components/admin/deleteproduct/DeleteProduct';
import Loading from '../../../ui/Loading';
import lendingComforts from './../../../service/admin/comforts/lendingComforts';
import AddItemModal from '../../../components/admin/addItemModal/AddItemModal';
import { Alert, Snackbar } from '@mui/material';

function Qulayliklar() {
  const headers = tableHeaders['comforts'];
  const { data, loading, error } = useFetch(lendingComforts.getLendingComforts);
  console.log(data);
  
  const [comforts, setComforts] = useState(data || []);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [currentComfort, setCurrentComfort] = useState(null);
  const [formConfig, setFormConfig] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    setComforts(data);
  }, [data]);

  const handleSave = async (formData, file) => {
    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        data.append(key, formData[key]);
      });
      if (file) {
        data.append('file', file);
      }

      if (currentComfort) {
        // Update existing comfort
        await lendingComforts.putLendingComfortById(currentComfort.id, data);
        const updatedItem = await lendingComforts.getLendingComfortById(currentComfort.id);
        setComforts(comforts.map(c => (c.id === updatedItem.id ? updatedItem : c)));
      } else {
        // Add new comfort
        const newItem = await lendingComforts.postLendingComfort(data);
        setComforts([...comforts, newItem]);
      }

      setAddOpen(false);
      setEditOpen(false);
    } catch (error) {
      setErrorMsg(error.message || 'Xatolik yuz berdi');
      setSnackbarOpen(true);
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await lendingComforts.deleteLendingComfort(currentComfort.id);
      setComforts(comforts.filter(c => c.id !== currentComfort.id));
    } catch (error) {
      setErrorMsg(error.message || 'Xatolik yuz berdi');
      setSnackbarOpen(true);
    } finally {
      setDeleteOpen(false);
    }
  };

  const handleDelete = (item) => {
    setCurrentComfort(item);
    setDeleteOpen(true);
  };

  const handleAdd = () => {
    setFormConfig([
      { type: 'text', label: 'Description', name: 'description' },
      { type: 'file', label: 'Image', name: 'image_path' }
    ]);
    setAddOpen(true);
  };

  const handleEdit = (item) => {
    setFormConfig([
      { type: 'text', label: 'Description', name: 'description', value: item.description },
      { type: 'file', label: 'Image', name: 'image_path', value: item.image_path }
    ]);
    setCurrentComfort(item);
    setEditOpen(true);
  };

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  const formattedData = comforts.map((item, index) => ({
    ...item,
    row: (
      <>
        <td>{index + 1}</td>
        <td>{item.description}</td>
        <td>
          {item.image_path && <img src={item.image_path} alt="Image" width={50} height={50} />}
        </td>
      </>
    )
  }));

  return (
    <div className='qulayliklar'>
      <Navbar title="Qulayliklarimiz" name="Muhammaddiyor" adminType="Super Admin" />
      <div className="main-section">
        <AddItemBtn name="Qulayliklarimiz" onClick={handleAdd} />
        <div className="items">
          <DataTable
            tableHead={headers}
            data={formattedData}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </div>

      {/* Add Item Modal */}
      {addOpen && (
        <AddItemModal
          open={addOpen}
          onClose={() => setAddOpen(false)}
          onSave={handleSave}
          formConfig={formConfig}
        />
      )}

      {/* Edit Item Modal */}
      {editOpen && (
        <EditComfort
          open={editOpen}
          onClose={() => setEditOpen(false)}
          comfort={currentComfort}
          onSave={handleSave}
          formConfig={formConfig}
        />
      )}

      {/* Delete Item Modal */}
      {deleteOpen && (
        <DeleteComfort
          open={deleteOpen}
          item={currentComfort}
          onClose={() => setDeleteOpen(false)}
          onConfirm={handleConfirmDelete}
        />
      )}

      {/* Error Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="error" sx={{ width: '100%' }}>
          {errorMsg}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Qulayliklar;
