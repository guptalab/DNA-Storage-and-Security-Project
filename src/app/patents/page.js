'use client'
import ModifiedTable from "@/components/ModifiedTable";
import StripedDataGrid from "@/components/StripedDataGrid";
import { Box, Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

const columns = [
    {
        field: 'title',
        headerName: 'Title',
        width: 500,
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 250,
    },
    {
        field: 'authors',
        headerName: 'Organization / Authors',
        width: 250,
        editable: false
    },
    {
        field: 'Link',
        headerName: 'Link',
        editable: false,
        renderCell: (params) => {
            return <Button variant="contained" target="blank" href={params['formattedValue']}>
                {'Open'}
            </Button>;
        }
    },
];

const PatentsPage = () => {

    const [patents, setPatents] = useState([]);

    useEffect(() => {
        async function fetchPatents() {
            const response = await fetch('/api/patents');
            const data = await response.json();

            const newData = data.map((item, idx) => {
                return {
                    ...item,
                    'id': item._id
                };
            })

            setPatents(newData);
        }

        fetchPatents();
    }, []);


    return <ModifiedTable data={patents} columns={columns} category={'Patent'} />
}

export default PatentsPage 