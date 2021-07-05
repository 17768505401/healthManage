import request from './request'

const apis = {

    /**用户登录 */
    userLogin(data) {
        return request({
            url: `/getModulesByUser`,
            method: 'get',
            params: data
        })
    },
    /**获取用户模块 */
    getResourcesByModule(data) {
        return request({
            url: `/getResourcesByModule`,
            method: 'get',
            data: data
        })
    },
    /**推送 */
    push(data) {
        return request({
            url: `/health/wxgzh/pushWxgzhMsgToCorpClientIntoHtml`,
            method: 'post',
            data: data
        })
    }
}
export default apis
