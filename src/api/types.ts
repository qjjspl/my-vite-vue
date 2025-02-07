// 定义通用的响应格式
export interface ApiResponse<T = any> {
    code: number
    data: T
    message: string
}

// 根据实际业务需求定义数据类型
export interface UserInfo {
    id: number
    username: string
    // ... 其他字段
} 