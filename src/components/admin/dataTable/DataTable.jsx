import { IconButton } from '@mui/material';
import './datatable.css';
import { Delete, Edit } from '@mui/icons-material';
import NotAvailable from './../../../helpers/NotAvailable';

function DataTable({ tableHead, data, onDelete, onEdit }) {
    if (!data || data.length === 0) {
        return <NotAvailable />;
    }

    return (
        <div className='data-table'>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        {tableHead && tableHead.map((name, index) => (
                            <th key={index}>{name}</th>
                        ))}
                        <th>Holat</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {item.row}
                            <td style={{display: 'flex', alignItems: 'center'}}>
                                <IconButton onClick={() => onEdit(item)}>
                                    <Edit style={{color: 'orange'}} />
                                </IconButton>
                                <IconButton onClick={() => onDelete(item)}>
                                    <Delete style={{color: 'red'}} />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
