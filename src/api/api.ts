import axios from "axios";
import {ProfileSave} from "redux/profile-reducer";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {
        'API-KEY':`${process.env.REACT_APP_API_KEY}`
        }
    }
)

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {})
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },

}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photo: File) {
        const formData = new FormData();
        formData.append("image",photo)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile:ProfileSave) {
        return instance.put(`profile`,profile)
    }
}

export const authApi = {
    authMe() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}

export const securityApi = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    },
}

//types
export type ResponseTypeData<D = object> = {
    resultCode: number
    messages: Array<string>
    data: D
}
