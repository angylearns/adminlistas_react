import axios from "axios";
import { useEffect } from "react";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: false,
    headers: {
      "Accept": "application/json",
     "Content-Type": "application/json"
    }
})


export const UserService = {

    async getAllUsers () {
        let response = await apiClient.get("/users");
        let allUsers = response.data;
        return allUsers;
    },

    async submitUser(newUser){
        await apiClient.post("/users", newUser);
    },
    
    async modifyUser(id, updatedUser) {
        await apiClient.patch(`/users/${id}`, updatedUser);
    },

    async deleteUser(id) {
        const result = await Swal.fire({
            title: '¿De verdad deseas borrarlo?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, borrar'
        });
    
        if (result.isConfirmed) {
            await apiClient.delete(`/users/${id}`);
            Swal.fire(
                '¡Listo!',
                'Borrado con éxito.',
                'success'
            );
        }
    }
    
    
}




