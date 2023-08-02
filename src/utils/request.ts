import axios from 'axios';
import { ElMessage } from 'element-plus';

const request = axios.create({
	baseURL: '/api',
	timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use((config) => {
	return config;
});

// 响应拦截器
request.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		let status = error.response.status;
		switch (status) {
			case 401:
				ElMessage.error('参数有误');
				break;
			case 404:
				ElMessage.error('请求路径失败');
				break;

			case 500 | 501 | 502 | 503 | 504 | 505:
				ElMessage.error('服务器出现异常');
				break;
		}
		return Promise.reject(new Error(error.message));
	}
);

export default request;
