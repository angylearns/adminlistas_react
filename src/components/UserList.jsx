import { useState } from "react";
import { UserService } from "../userService";
import { useForm } from 'react-hook-form';

const UserList = () =>{

    const [user, setUser] = useState(
        {
            userName: "",
            userLastname1: "",
            userLastname2: "",
            userEmail: "",
            userPhone: ""
        }
    );

    const [userList, setUserList] = useState([]); 

    async function getData(){

        let users = await UserService.getAllUsers();

        setUserList(users)  
    };

    function handleNameChange(e){
        setUser({...user, [e.target.name]:e.target.value})
    };

    async function handleDeleteUser(id){

        await UserService.deleteUser(id);
        getData();
    };

    async function handleAddUserToList() {

        await UserService.submitUser(user);
    
        setUser({
            userName: "",
            userLastname1: "",
            userLastname2: "",
            userEmail: "",
            userPhone: ""
        });

    };

    const { register, handleSubmit, formState: { errors } } = useForm();

    return(

        <>
        <section id="form">
            <section id="sectInputName">
                <label htmlFor="userName">Nombre</label>
                <input type="text" name="userName" {...register('userName', { required: true, maxLength: 50 })} value={user.userName} onChange={handleNameChange}/>
                {errors.userName && <p><strong>ERROR</strong>: Por favor, ingresa un nombre válido.</p>}
            </section>

            <section id="sectInputLast1">
                <label htmlFor="userLastname1">Primer apellido</label>
                <input type="text" name="userLastname1" {...register('userLastname1', { required: true, maxLength: 50 })} value={user.userLastname1}onChange={handleNameChange}/>
                {errors.userLastname1 && <p><strong>ERROR</strong>: Por favor, ingresa un primer apellido válido.</p>}
            </section>

            <section id="sectInputLast2">
                <label htmlFor="userLastname2">Segundo apellido</label>
                <input type="text" name="userLastname2" {...register('userLastname2', { required: true, maxLength: 50 })} value={user.userLastname2} onChange={handleNameChange}/>
                {errors.userLastname2 && <p><strong>ERROR</strong>: Por favor, ingresa un segundo apellido válido.</p>}
            </section>

            <section id="sectInputPhone">
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" name="userPhone" {...register('userPhone', { required: true, pattern: /^\d+$/ })} value={user.userPhone} onChange={handleNameChange}/>
                {errors.userPhone && <p><strong>ERROR</strong>: Por favor, ingresa un número de teléfono válido.</p>}
            </section>

            <section id="sectInputEmail">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="userEmail" {...register('userEmail', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} value={user.userEmail} onChange={handleNameChange}/>
                {errors.userEmail && <p><strong>ERROR</strong>: Por favor, ingresa un correo electrónico válido.</p>}
            </section>


            <button onClick={handleSubmit(handleAddUserToList)} id="addBtn">Añadir usuario</button>

            <button onClick={getData} id="showBtn">Mostrar lista</button>
        </section>
        
        <section id="tableSec">
            <table id="tableList">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Primer apellido</th>
                        <th>Segundo apellido</th>
                        <th>Teléfono</th>
                        <th>E-mail</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                userList.map((user, index)=>(
                    <tr key={index}>
                        <td>{user.userName}</td>
                        <td>{user.userLastname1}</td>
                        <td>{user.userLastname2}</td>
                        <td>{user.userPhone}</td>
                        <td>{user.userEmail}</td>
                        <td><button onClick={()=>handleModifyUser(user.id)}>&#9998;</button></td>
                        <td><button onClick={()=>handleDeleteUser(user.id)}>&#128465;</button></td>
                    </tr>
                ))
                }
                </tbody>
            </table>
        </section> 
        </>
        
    )
}

export default UserList;