/*
 * @Descripttion: 
 * @version: 18.1.2
 * @Author: Harleens
 * @Date: 2022-06-25 17:53:14
 * @LastEditors: Harleens
 * @LastEditTime: 2022-06-25 18:37:22
 */
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { message } from 'antd'
//基础URL，axios将会⾃动拼接在url前
//process.env.NODE_ENV 判断是否为开发环境根据不同环境使⽤不同的baseURL ⽅便调试
let baseURL = process.env.NODE_ENV === 'development' ? '' : 'https://your.domain.com/api';
//默认请求超时时间
const timeout = 30000;
//创建axios实例
const service = axios.create({
    timeout,
    baseURL,
    //如需要携带cookie 该值需设为true
    withCredentials: true
});
//统⼀请求拦截可配置⾃定义headers 例如 language、token等
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        //配置⾃定义请求头
        let customHeaders: AxiosRequestHeaders = {
            language: 'zh-cn'
        };
        config.headers = customHeaders;
        return config
    },
    error => {
        console.log(error)
        Promise.reject(error)
    }
)
//axios返回格式
interface axiosTypes<T> {
    data: T;
    status: number;
    statusText: string;
}
//后台响应数据格式
//###该接⼝⽤于规定后台返回的数据格式，意为必须携带code、msg以及result
//###⽽result的数据格式由外部提供。如此即可根据不同需求，定制不同的数据格式
interface responseTypes<T> {
    code: number,
    msg: string,
    result: T
}
//核⼼处理代码将返回⼀个promise 调⽤then将可获取响应的业务数据
const requestHandler = <T>(method: 'get' | 'post' | 'put' | 'delete', url: string, params: object = {}, config: AxiosRequestConfig = {}): Promise<T> => {
    let response: Promise<axiosTypes<responseTypes<T>>>;
    switch (method) {
        case 'get':
            response = service.get(url, { params: { ...params }, ...config });
            break;
        case 'post':
            response = service.post(url, { ...params }, { ...config });
            break;
        case 'put':
            response = service.put(url, { ...params }, { ...config });
            break;
        case 'delete':
            response = service.delete(url, { params: { ...params }, ...config });
            break;
    }
    return new Promise<T>((resolve, reject) => {
        response.then(res => {
            //业务代码可根据需求⾃⾏处理
            const data = res.data;
            if (data.code !== 200) {
                //特定状态码处理特定的需求
                if (data.code == 401) {
                    message.warn('您的账号已登出或超时，即将登出...');
                    console.log('登录异常，执⾏登出...');
                }
                let e = JSON.stringify(data);
                message.warn(`请求错误：${e}`);
                console.log(`请求错误：${e}`)
                //数据请求错误使⽤reject将错误返回
                reject(data);
            } else {
                //数据请求正确使⽤resolve将结果返回
                resolve(data.result);
            }
        }).catch(error => {
            let e = JSON.stringify(error);
            message.warn(`⽹络错误：${e}`);
            console.log(`⽹络错误：${e}`)
            reject(error);
        })
    })
}
// 使⽤ request 统⼀调⽤，包括封装的get、post、put、delete等⽅法
const request = {
    get: <T>(url: string, params?: object, config?: AxiosRequestConfig) => requestHandler<T>('get', url, params, config),
    post: <T>(url: string, params?: object, config?: AxiosRequestConfig) => requestHandler<T>('post', url, params, config),
    put: <T>(url: string, params?: object, config?: AxiosRequestConfig) => requestHandler<T>('put', url, params, config),
    delete: <T>(url: string, params?: object, config?: AxiosRequestConfig) => requestHandler<T>('delete', url, params, config)
};
// 导出⾄外层，⽅便统⼀使⽤
export { request }