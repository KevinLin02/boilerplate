/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { users } from '../../api/users';

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
];

export default function UsersPage() {
  const [data, setData] = useState([]);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 6,
    },
  });

  const fetchData = async () => {
    const result = await users();
    const usersData = result?.data?.data || [];
    setData(usersData);
    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
        total: 12,
      },
    });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={tableParams.pagination} onChange={handleTableChange} />
    </div>
  );
}
