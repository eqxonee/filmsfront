import React, {useEffect, useState} from 'react';
//import {Button, Modal, Table} from "antd";
//import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Route, Routes} from "react-router-dom";
//import axios from "axios";
import MainPage from "./components/main_page/MainPage";
import NotFoundPage from "./components/not_found_page/NotFoundPage";
import SecureLayout from "./components/secure/SecureLayout";
import UserPage from "./components/secure/UserPage";
import AuthPage from "./components/auth_page/AuthPage";
import RegisterPage from "./components/register_page/RegisterPage";

const App = () => {
    /*let [dataSource, setDataSource] = useState([]);

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
*/
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/auth" element={<AuthPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>

            <Route path="/secure" element={<SecureLayout/>}>
                <Route path="user" element={<UserPage/>}/>
            </Route>

        </Routes>

  );
};

export default App;
