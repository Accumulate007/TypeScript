import { AxiosRequestConfig } from "./types";
import { processHeaders } from './helpers/headers'
import { transformRequest, transformResponse } from './helpers/data'

// defaults.ts

const defaults:AxiosRequestConfig = {
    method: 'get',
    timeout: 0,
    headers: {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    },

    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeadrName: 'X-XSRF-TOKEN',


    transformRequest: [
        function(data:any, headers:any): any {
            processHeaders(data, headers)
            return transformRequest(data)
        }
    ],
    transformResponse: [
        function(data:any): any {
            return transformResponse(data)
        }
    ],
    validateStatus(status:number):boolean {
        return status>=200 && status<300
    }
}



const methodsNoData = ['delete', 'get', 'head', 'options']

methodsNoData.forEach(method => {
    defaults.headers[method] = {}
})

const mehodsWidthData = ['post', 'put', 'patch']

mehodsWidthData.forEach(method => {
    defaults.headers[method] = {
        'Content-Type': 'application/x-www-form-urlencode'
    }
})


export default defaults
