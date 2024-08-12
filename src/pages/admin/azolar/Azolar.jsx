import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import './azolar.css';
import Navbar from '../../../components/admin/navbar/Navbar';
import AddItemBtn from '../../../components/admin/addItem/AddItemBtn';
import useFetch from '../../../hooks/useFetch';
import { tableHeaders } from '../../../components/admin/tableDetails/TableDeails';
import DataTable from '../../../components/admin/dataTable/DataTable';
import EditComfort from '../../../components/admin/editProduct/EditProduct';
import DeleteComfort from '../../../components/admin/deleteproduct/DeleteProduct';
import Loading from '../../../ui/Loading';
import AddItemModal from '../../../components/admin/addItemModal/AddItemModal';
import lendingMembers from './../../../service/admin/members';

function Azolar() {
    const { data, loading, error } = useFetch(lendingMembers.getLendingMembers);
    console.log(data)
    const [members, setMembers] = useState(data || []);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [addOpen, setAddOpen] = useState(false);
    const [currentMember, setCurrentMember] = useState(null);
    const [formConfig, setFormConfig] = useState([]);

    useEffect(() => {
        setMembers(data);
    }, [data]);

    const headers = tableHeaders['members'];

    const handleEdit = (item) => {
        setCurrentMember(item);
        setFormConfig([
            { type: 'text', label: 'Description', name: 'description', value: item.description },
            { type: 'file', label: 'Image', name: 'image_path', value: item.image_path },
            { type: 'text', label: 'Full Name', name: 'full_name', value: item.full_name }
        ]);
        setEditOpen(true);
    };

    const handleDelete = (item) => {
        setCurrentMember(item);
        setDeleteOpen(true);
    };

    const handleSaveEdit = async (formData, file) => {
        try {
            const data = new FormData();

            // Only send changed values
            Object.keys(formData).forEach(key => {
                if (formData[key] !== currentMember[key]) {
                    data.append(key, formData[key]);
                }
            });

            // Add file if changed
            if (file) {
                data.append('image_path', file);
            }

            // Send updates to server
            await lendingMembers.putLandingMembersById(currentMember.id, data);

            // Fetch updated item
            const updatedItem = await lendingMembers.putLandingMembersById(currentMember.id);
            setMembers(members.map(m => (m.id === updatedItem.id ? updatedItem : m)));
        } catch (error) {
            console.error('Error editing member:', error);
        } finally {
            setEditOpen(false);
        }
    };

    const handleConfirmDelete = async () => {
        try {
            await lendingMembers.deleteLandingMembersById(currentMember.id);
            setMembers(members.filter(m => m.id !== currentMember.id));
        } catch (error) {
            console.error('Error deleting member:', error);
        } finally {
            setDeleteOpen(false);
        }
    };

    const handleSaveAdd = async (item) => {
        try {
            const newItem = await lendingMembers.postLendingMembers(item);
            setMembers([...members, newItem]);
        } catch (error) {
            console.error('Error adding member:', error);
        } finally {
            setAddOpen(false);
        }
    };

    const handleAdd = () => {
        setFormConfig([
            { type: 'text', label: 'Description', name: 'description' },
            { type: 'file', label: 'Image', name: 'image_path' },
            { type: 'text', label: 'Full Name', name: 'full_name' }
        ]);
        setAddOpen(true);
    };

    if (loading) return <Loading />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className='azolar'>
            <Navbar title="Azolarimiz" name="Muhammaddiyor" adminType="Super Admin" />
            <div className="main-section">
                <AddItemBtn name="Azolarimiz" onClick={handleAdd} />
                <div className="items">
                    <DataTable
                        tableHead={headers}
                        data={members}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        renderRow={(item, index) => (
                            <>
                                <td>{index + 1}</td>
                                <td>{item.description}</td>
                                <td>{item.full_name}</td>
                                <td>
                                    <img src={item.image_path} alt="" />
                                </td>
                            </>
                        )}
                    />
                </div>
            </div>

            {addOpen && (
                <AddItemModal
                    open={addOpen}
                    onClose={() => setAddOpen(false)}
                    onSave={handleSaveAdd}
                    formConfig={formConfig}
                />
            )}

            {editOpen && (
                <EditComfort
                    open={editOpen}
                    onClose={() => setEditOpen(false)}
                    comfort={currentMember}
                    onSave={handleSaveEdit}
                    formConfig={formConfig}
                />
            )}

            {deleteOpen && (
                <DeleteComfort
                    open={deleteOpen}
                    onClose={() => setDeleteOpen(false)}
                    onConfirm={handleConfirmDelete}
                />
            )}
        </div>
    );
}

export default Azolar;
