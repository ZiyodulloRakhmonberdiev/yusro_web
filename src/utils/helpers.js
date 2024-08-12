export const handleEdit = (item, setCurrent, setFormConfig, setOpen, config) => {
    setCurrent(item);
    setFormConfig(config);
    setOpen(true);
};

export const handleDelete = (item, setCurrent, setOpen) => {
    setCurrent(item);
    setOpen(true);
};

export const handleSaveEdit = async (formData, file, current, setItems, items, apiCall, setOpen) => {
    try {
        const data = new FormData();
        Object.keys(formData).forEach(key => {
            if (formData[key] !== current[key]) {
                data.append(key, formData[key]);
            }
        });
        if (file) {
            data.append('image_path', file);
        }
        await apiCall(current.id, data);
        const updatedItem = await apiCall(current.id);
        setItems(items.map(i => (i.id === updatedItem.id ? updatedItem : i)));
    } catch (error) {
        console.error('Error editing item:', error);
    } finally {
        setOpen(false);
    }
};

export const handleConfirmDelete = async (current, setItems, items, apiCall, setOpen) => {
    try {
        await apiCall(current.id);
        setItems(items.filter(i => i.id !== current.id));
    } catch (error) {
        console.error('Error deleting item:', error);
    } finally {
        setOpen(false);
    }
};

export const handleSaveAdd = async (item, setItems, items, apiCall, setOpen) => {
    try {
        const newItem = await apiCall(item);
        setItems([...items, newItem]);
    } catch (error) {
        console.error('Error adding item:', error);
    } finally {
        setOpen(false);
    }
};

export const handleAdd = (setFormConfig, setOpen, config) => {
    setFormConfig(config);
    setOpen(true);
};
    