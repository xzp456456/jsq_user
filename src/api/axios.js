import axios from 'axios'
import qs from 'qs'
import store from '../vuex/store'
import jquery from 'jquery';
import { Indicator } from 'mint-ui';
//axios.defaults.baseURL = process.env.HTTP_URL;
//axios.defaults.baseURL = '/api';

var GetDomainName = function () {//获取域名后缀
    var url = window.location.host;
    url = url.substring(url.lastIndexOf('.'));
    return url;
};

if(GetDomainName()==".com"){
    axios.defaults.baseURL = 'http://www.iyunmima.com'
}else{
    axios.defaults.baseURL = '/api'
}

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.headers['is-wap'] = 1;

axios.interceptors.request.use(
    Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      }),
    config => {
        if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

//http response 拦截器
axios.interceptors.response.use(
    response => {
          Indicator.close();
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    break;
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    }
);

export const getAjax = (url, param) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {params:param}).then((res) => {
            resolve(res.data);
        }).then((err) => {
            reject(err);
        })
    })
}

export const postAjax = (url, param) => {
    param.openid = 123456;
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(param),{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((res) => {
            resolve(res.data);
        }).then((err) => {
            reject(err);
        })
    })
}

export const postFileUp = (url, param) => {
   // param.openid = 123456;
    return new Promise((resolve, reject) => {
        axios.post(url,param, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            resolve(res.data);
        }).then((err) => {
            reject(err);
        })
    })
}

export const $ = jquery;