/*
 * @Descripttion: 
 * @version: 18.1.2
 * @Author: Harleens
 * @Date: 2022-06-25 17:08:06
 * @LastEditors: Harleens
 * @LastEditTime: 2022-06-25 17:08:09
 */
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'


// scss模块声明
declare module '*.scss' {
    const content: { [key: string]: any }
    export = content
}
// less模块声明
declare module '*.less' {
    const content: { [key: string]: any }
    export default content
}