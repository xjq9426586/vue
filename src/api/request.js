import {Service} from '@/service'
export function getConfigsByProductId(productId) {
    return Service({
        url: '/tansun-tcp-app-pc/base/getTenantName',
        params: { productId: productId }
    })
}
