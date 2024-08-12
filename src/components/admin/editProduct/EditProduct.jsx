import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function EditProduct({ open, onClose, income, onSave, formConfig }) {
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (income) {
      const initialData = formConfig.reduce((acc, field) => {
        acc[field.name] = income[field.name] || '';
        return acc;
      }, {});
      setFormData(initialData);
    }
  }, [income, formConfig]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSave = () => {
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
            <Button key={index} variant="contained" component="label">
              {field.label}
              <input type="file" hidden name={field.name} onChange={handleFileChange} />
            </Button>
          );
        default:
          return null;
      }
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Maxsulotni tahrirlash</DialogTitle>
      <DialogContent>{renderFields()}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Bekor qilish</Button>
        <Button onClick={handleSave}>Saqlash</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditProduct;
