"use client"


import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import AccountDialog from './AccountDialog';
import axios from 'axios';
import DeleteDialog from './DeleteDialog';

interface Account {
    id: string;
    email: string;
    password: string;
    role: string;
}

interface AccountTableProps {
    accounts: Account[];
}

const AccountTable: React.FC<AccountTableProps> = ({ accounts }) => {

    const [isEditOpen, setIsEditOpen] = useState(false)
    const [currentAccount, setCurrentAccount] = useState<any>({})
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    



    
    return (
        <div style={{ maxHeight: "500px", overflowY: "auto" }}>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>STT</TableHead>
                        <TableHead>Mã</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Password</TableHead>
                        <TableHead>Quyền</TableHead>

                        <TableHead>Sửa</TableHead>
                        <TableHead>Xóa</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {accounts.map((account, index) => (
                        <TableRow key={account.id} className="hover:bg-transparent" style={{ height: "30px" }}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{account.id}</TableCell>
                            <TableCell>{account.email}</TableCell>
                            <TableCell>{account.password}</TableCell>
                            <TableCell>{account.role}</TableCell>

                            <TableCell>
                                <Button
                                    variant='ghost'
                                    onClick={() => {setIsEditOpen(true); setCurrentAccount(account)}}
                                >
                                    <FaRegEdit size={25} />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button 
                                    onClick={()=> {setIsDeleteOpen(true), setCurrentAccount(account)}}
                                    variant='ghost' 
                                    className="hover:text-rose-500">
                                    <MdOutlineDelete size={25} />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    <AccountDialog isOpen={isEditOpen} setIsOpen={setIsEditOpen} variant='edit'data={currentAccount} />
                    <DeleteDialog isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} userId={currentAccount.id}/>
                </TableBody>
            </Table>

        </div>
    );
};

export default AccountTable;
