import { showLoadingToast, closeToast } from 'vant';
export default {
    showLoadingToast: function () {
        showLoadingToast({
            message: '加载中...',
            forbidClick: false,
            loadingType: 'spinner',
            duration: 0
        })
    },
    closeLoadingToast: function () {
       closeToast() 
    }
}