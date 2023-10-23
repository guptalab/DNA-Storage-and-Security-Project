'use client'
import ModifiedTable from "@/components/ModifiedTable";
import StripedDataGrid from "@/components/StripedDataGrid";
import { Box, Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

const columns = [
    {
        field: 'organization',
        headerName: 'Organization',
        width: 500
    },
    {
        field: 'amountOfFund',
        headerName: 'Amount of Fund(in USD)',
        width: 250,
        editable: false
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 250,
        editable: false
    },
    {
        field: 'link',
        headerName: 'Link',
        editable: false,
        renderCell: (params) => {
            return <Button variant="contained" target="blank" href={params['formattedValue']}>Open</Button>;
        }
    },
];

const GrantsPage = () => {

    const [grants, setGrants] = useState([]);

    useEffect(() => {
        async function fetchGrants() {
            const response = await fetch('/api/grants');
            const data = await response.json();

            const newData = data.map((item, idx) => {
                return {
                    ...item,
                    'amountOfFund': item['amountOfFund'].toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }),
                    'id': item._id
                };
            })

            setGrants(newData);
        }

        fetchGrants();
    }, []);


    return <ModifiedTable data={grants} columns={columns} category={'Research Grant'} />
}

export default GrantsPage 