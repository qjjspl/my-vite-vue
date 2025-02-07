import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'

// 创建 axios 实例
const request: AxiosInstance = axios.create({
    // 根据实际情况配置后端接口的基础 URL
    baseURL: 'http://localhost:8080/api', // 假设后端在 8080 端口
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})

// 请求拦截器
request.interceptors.request.use(
    (config) => {
        // 在这里可以添加token等认证信息
        // const token = localStorage.getItem('token')
        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`
        // }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
request.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data
    },
    (error) => {
        // 处理错误响应
        return Promise.reject(error)
    }
)

export default request 