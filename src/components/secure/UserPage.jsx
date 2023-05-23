import LocalStorageWorker from "../store/LocalStorageWorker";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Col, Modal, Row, Table} from "antd";
import UserApiWorker from "../api/UserApiWorker";


const UserPage = () => {

    let localStorageWorker = new LocalStorageWorker();
    let [data,setData] = useState("");
    let userApiWorker = new UserApiWorker();
    const navigate = useNavigate();

    const logout = () => {
      localStorageWorker.deleteToken();
      navigate("/");
    }

    let setDataSource = useState([]);

    const loadFilms = () => {
        userApiWorker.getFilm(localStorageWorker.getToken())
            .then(response =>{
                setData(response.data)
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
                        <addOutlined>

                        </addOutlined>
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
        <Table columns={columns} dataSource={data} />
    );
};


export default UserPage;