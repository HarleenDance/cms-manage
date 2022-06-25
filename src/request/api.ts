/*
 * @Descripttion: 
 * @version: 18.1.2
 * @Author: Harleens
 * @Date: 2022-06-25 17:53:02
 * @LastEditors: Harleens
 * @LastEditTime: 2022-06-25 18:40:53
 */
import { request } from './request'
import { Register } from '@/types'

// 注册
export const RegisterApi = <T>(params: Register) => request.post<T>('/register', params, { timeout: 15000 })

// 登录
export const LoginApi = <T>(params: Register) => request.post<T>('/login', params, { timeout: 15000 })
// 获取文章列表
export const ArticleListApi = <T>(params: Register) => request.post<T>('/article', params, { timeout: 15000 })
// 添加文章
export const ArticleAddApi = <T>(params: Register) => request.post<T>('/article/add', params, { timeout: 15000 })
// 查看文章
export const ArticleSearchApi = <T>(params: Register) => request.post<T>('`/article/${params.id}`', params, { timeout: 15000 })

// 重新编辑文章
export const ArticleUpdateApi = <T>(params: Register) => request.post<T>('/article/update', params, { timeout: 15000 })

// 删除文章
export const ArticleDelApi = <T>(params: Register) => request.post<T>('/article/remove', params, { timeout: 15000 })

// 获取用户资料
export const GetUserDataApi = <T>(params: any) => request.post<T>('/info', params, { timeout: 15000 })

// 修改用户资料
export const ChangeUserDataApi = <T>(params: Register) => request.post<T>('/info', params, { timeout: 15000 })
