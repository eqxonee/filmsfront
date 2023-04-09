import React, {useEffect, useState} from 'react';
import {Button, Modal, Table} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import axios from "axios";

const App = () => {
    let [dataSource, setDataSource] = useState([]);

   const loadFilms = () => {
       axios.get("http://localhost:8080/films/getAll")
           .then(response =>{
               setDataSource(response.data)
           })
   }
   
   const deleteFilms = (id) => {
       axios.delete(`http://localhost:8080/films/deleteById/${id}`)
           .then(response =>{
               loadFilms();
           })
   }

    useEffect(()=>{
        loadFilms();
    },[])

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: '1',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: '2',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: '3',
        },
        {
            key: "5",
            title: "Actions",
            render: (record) => {
                return (
                    <div>
                        <EditOutlined
                            onClick={() => {
                                //onEditStudent(record);
                            }}
                        />
                        <DeleteOutlined
                            onClick={() => {
                                onDeleteFilm(record);
                            }}
                            style={{color: "red", marginLeft: 12}}
                        />
                    </div>
                );
            },
        }
    ];

    const onDeleteFilm = (record) => {
        Modal.confirm({
            title: "Точно удалить фильм?",
            okText: "Да",
            okType: "danger",
            onOk: () => {
                deleteFilms(record.id);
                //setDataSource(dataSource.filter(student => student.id !== record.id));
            },
        });
    };

    return (

      <div>
          <Button type="primary">Primary button</Button>
          <Table dataSource={dataSource} columns={columns} pagination={{defaultPageSize:5}} />

      </div>
  );
};

export default App;
