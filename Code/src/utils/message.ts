import { showLoadingToast, closeToast, showToast, showDialog, showConfirmDialog, closeDialog  } from 'vant';
import successImg from '../assets/images/Base/success.png'
import failImg from '../assets/images/Base/fail.png'


export default {
    // 加载提示
    showLoadingToast: function () {
        showLoadingToast({
            message: '加载中...',
            forbidClick: false,
            loadingType: 'spinner',
            duration: 0
        })
    },
    // 关闭加载提示
    closeLoadingToast: function () {
       closeToast() 
    },
    // 成功提示
    successToast: function (msg: string | '操作成功') {
        showToast({
            message: msg,
            icon: successImg,
        });
    },
    // 失败提示
    failToast: function (msg: string | '操作失败') {
        showToast({
            message: msg,
            icon: failImg,
        });
    },
    // 弹窗提示
    alertToast: function (title: string | '标题', msg: string, showCancelButton: boolean) {
        const beforeClose = function (action: string): Promise<boolean> {
            return new Promise((resolve) => {
                if (action === 'confirm') {
                    resolve(true);
                } else {
                    // 拦截取消操作
                    resolve(false)
                    closeDialog()
                }
            });
        }
        
        return showConfirmDialog({
            title: title,
            message: msg,
            showCancelButton: showCancelButton,
            beforeClose
        })
    }
}