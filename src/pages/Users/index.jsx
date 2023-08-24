/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import {
  Table, Button, Modal, Input, Form,
} from 'antd';
import { useUsers } from '../../api/users';

export default function UsersPage() {
  const {
    users, createUser, updateUserById, deleteUserById,
  } = useUsers();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Avatar',
      key: 'avatar',
      dataIndex: 'avatar',
      render: (avatar) => <img src={avatar} alt="Avatar" style={{ width: '40px' }} />,
    },
    {
      title: 'Operation',
      key: 'operation',
      dataIndex: 'operation',
      render: (_, user) => (
        <>
          <Button onClick={() => openEditModal()} style={{ marginRight: '10px' }}> create </Button>
          <Button onClick={() => updateUserById(user.id, ...user)} style={{ marginRight: '10px' }}> update </Button>
          <Button onClick={() => deleteUserById(user.id)}> delete </Button>
        </>
      ),
    },
  ];
  const openEditModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <Modal title="EditModal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form>
          <Form.Item
            name="Name"
            label="name"
            rules={[
              {
                type: 'name',
              },
              {
                required: true,
                message: 'Please input your Name',
              },
            ]}
          />
          <Input />
        </Form>
      </Modal>
      <div>
        <Table columns={columns} dataSource={users} />
      </div>
    </>
  );
}
