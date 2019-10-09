// 此文件用来处理增加的数据接口
// 引入封装的axios
import axios from 'axios'
export const login = () => {
  return axios({
    url: '',
    method: ''
  })
}
// 获取所有用户数据
export const getAllUserList = (params) => {
  return axios({
    url: '/api/userlist',
    params
  })
}
// 添加用户
export const addUser = (data) => {
  return axios({
    url: 'users',
    method: 'post',
    data
  })
}

// 编辑用户
export const editUser = (data) => {
  return axios({
    url: `users/${data.id}`,
    method: 'put',
    data: { email: data.email, mobile: data.mobile }
  })
}

// 根据id删除用户
export const delUserById = (id) => {
  return axios({
    url: `users/${id}`,
    method: 'delete'
  })
}
