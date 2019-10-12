import React from "react";
import { Table, Divider, Icon } from "antd";

const { Column, ColumnGroup } = Table;

function ListOderSupplier() {
  const data = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"]
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"]
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"]
    }
  ];

  return (
    <Table dataSource={data}>
      <Column title="Tên NCC" dataIndex="nameSupplier" key="nameSupplier" />
      <Column title="Tên Mặt hàng" dataIndex="nameProduct" key="nameProduct" />
      <Column title="Số lượng" dataIndex="amount" key="amount" />

      <ColumnGroup title="Size">
        <Column title="36" dataIndex="firstName" key="firstName" />
        <Column title="37" dataIndex="lastName" key="lastName" />
        <Column title="38" dataIndex="firstName" key="firstName" />
        <Column title="39" dataIndex="lastName" key="lastName" />
      </ColumnGroup>

      <Column title="Tổng tiền" dataIndex="sumMoney" key="sumMoney" />

      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <span>
            <Icon type="eye" />
            <Divider type="vertical" />
            <Icon type="file-add" />
            <Divider type="vertical" />
            <Icon type="delete" />
          </span>
        )}
      />
    </Table>
  );
}

export default ListOderSupplier;
