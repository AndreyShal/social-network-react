import axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
    }
)

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`,{})
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },

}

export const profileAPI = {
    getProfile(userId: number){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`,{status: status})
    },
}

export const authApi = {
    authMe() {
        return instance.get(`auth/me`)
    },
}

//types
//
// export type ResponseType<D = object> = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: D
// }
