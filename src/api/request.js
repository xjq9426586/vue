import {Service} from '@/service'
export const api = {
    getTenantName: (productId) => {
        return Service({
            url: '/api/base/getTenantName',
            params: { productId: productId }
        })
    },
    login: (username, password) => {
        return Service({
            url: '/auth',
            data: { username:  username, password: password}
        })
    },
    cust: () => {
        return Service({
            url: '/api/custCorporat/findCustCorporatList'
        })
    }
}
