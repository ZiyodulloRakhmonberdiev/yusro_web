import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Select, MenuItem, FormControl, InputLabel, IconButton, Input } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';

function AddItemModal({ open, onClose, onSave, formConfig }) {
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);

  useEffect(() => {
    const initialData = formConfig.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {});
    setFormData(initialData);
  }, [formConfig]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSave = () => {
    console.log('Saqlashdan oldingi ma\'lumotlar:', formData);
    onSave(formData, file);
  };
  

  const renderFields = () => {
    return formConfig.map((field, index) => {
      switch (field.type) {
        case 'text':
        case 'number':
          return (
            <TextField
              key={index}
              margin="dense"
              label={field.label}
              name={field.name}
              type={field.type}
              value={formData[field.name] || ''}
              onChange={handleChange}
              fullWidth
            />
          );
        case 'textarea':
          return (
            <TextField
              key={index}
              margin="dense"
              label={field.label}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
            />
          );
        case 'select':
          return (
            <FormControl key={index} fullWidth margin="dense">
              <InputLabel>{field.label}</InputLabel>
              <Select
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
              >
                {field.options.map((option, idx) => (
                  <MenuItem key={idx} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          );
        case 'file':
          return (
            <div key={index} style={{ margin: '16px 0' }}>
              <Input
                type="file"
                onChange={handleFileChange}
                inputProps={{ accept: field.accept || 'image/*' }}
              />
              <IconButton component="label">
                <AddPhotoAlternate />
              </IconButton>
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Yangi maxsulot qo'shish</DialogTitle>
      <DialogContent>{renderFields()}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Bekor qilish</Button>
        <Button onClick={handleSave}>Saqlash</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddItemModal;
