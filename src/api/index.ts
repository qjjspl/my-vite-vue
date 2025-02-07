import request from './request'
import type { ApiResponse, UserInfo } from './types'

interface UserInfoResponse {
  code: number
  data: {
    username: string
    nickname: string
    email: string
    phone: string
    avatar: string
  }
}

export const login = (data: { username: string; password: string }) => {
    return request.post<ApiResponse<UserInfo>>('/auth/login', data)
}

export const getUserInfo = (userId: number) => {
    return request.get<ApiResponse<UserInfo>>(`/user/${userId}`)
}

export default {
  getUserInfo: (): Promise<UserInfoResponse> => {
    return fetch('/api/user/info').then(res => res.json())
  },
  
  updateUserInfo: (data: {
    username: string
    nickname: string
    email: string
    phone: string
    avatar: string
  }): Promise<any> => {
    return fetch('/api/user/update', {
      method: 'POST',
      body: JSON.stringify(data)
    })
  },

  changePassword: (data: {
    oldPassword: string
    newPassword: string
    confirmPassword: string
  }): Promise<any> => {
    return fetch('/api/user/password', {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }
} 