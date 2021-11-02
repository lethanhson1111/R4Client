import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';

const item = [
    {
        id: "1",
        tenkh: "Sơn",
        email: "Son@gmail.com",
        diachi: "TP HCM",
        sodienthoai: "07845698542",
        image: "son",
        trangthai: "check",
        matkhau: "123"
    },
    {
        id: "2",
        tenkh: "Sơn",
        email: "Son@gmail.com",
        diachi: "TP HCM",
        sodienthoai: "07845698542",
        image: "son",
        trangthai: "check",
        matkhau: "123"
    },
    {
        id: "3",
        tenkh: "Sơn",
        email: "Son@gmail.com",
        diachi: "TP HCM",
        sodienthoai: "07845698542",
        image: "son",
        trangthai: "check",
        matkhau: "123"
    },
    {
        id: "4",
        tenkh: "Sơn",
        email: "Son@gmail.com",
        diachi: "TP HCM",
        sodienthoai: "07845698542",
        image: "son",
        trangthai: "check",
        matkhau: "123"
    }
]
const columns = [
    { field: 'id', headerName: 'Mã khách hàng', with: 300},
    { field: 'tenkh', headerName: 'Tên khách hàng', with: 300 },
    { field: 'email', headerName: 'Email', with: 300 },
    { field: 'diachi', headerName: 'Địa chỉ', with: 300 },
    { field: 'sodienthoai', headerName: 'Số điện thoại', with: 300 },
    { field: 'image', headerName: 'Hình', with: 300 },
    { field: 'trangthai', headerName: 'Trạng Thái', with: 300 },
    { field: 'matkhau', headerName: 'Mật khẩu', with: 300 },

];
const QuanlyKH = () => {
    return (
        <Box component="main" sx={{ flexGrow: 4, p: 4 }}>
            <div style={{ height: 300, width: '100%' }}>
                <DataGrid
                    rows={item}
                    columns={columns}
                    pageSize={3}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </Box>
    )
}

export default QuanlyKH
