import { nextTick } from 'vue';
import { showLoadingToast, closeToast, showToast, showDialog, showConfirmDialog, closeDialog  } from 'vant';
import successImg from '../assets/images/Base/success.png'
import failImg from '../assets/images/Base/fail.png'


const Message = {
    /**
     * 加载提示
     * @param msg 
     */
    showLoadingToast: function (msg?: string) {
        showLoadingToast({
            message: msg || '加载中...',
            forbidClick: false,
            loadingType: 'spinner',
            duration: 0
        })
    },
    /**
     * 关闭加载提示
     */
    closeLoadingToast: function () {
       closeToast() 
    },
    /**
     * 成功提示
     * @param msg 
     * @param img 
     * @param iconSize 
     */
    successToast: function (msg?: string, img?: string, iconSize?: string) {
        showToast({
            message: msg || '操作成功',
            icon: img || successImg,
            iconSize: iconSize
        });
    },
    /**
     * 失败弹窗
     * @param msg 
     */
    failToast: function (msg?: string) {
        showToast({
            message: msg || '操作失败',
            icon: failImg,
        });
    },
    /**
     * 轻提示
     * @param msg 
     */
    showToast: function (msg: string) {
        showToast({
            message: msg
        })
    },
    /**
     * 弹窗提示
     * @param msg 
     * @param title 
     * @param showCancelButton 
     * @returns 
     */
    alertToast: function (msg: string, showCancelButton?: boolean, title?: string, icon?: string) {
        const beforeClose = function (action: string): Promise<boolean> {
            return new Promise((resolve) => {
                if (action === 'confirm') {
                    resolve(true);
                } else {
                    // 拦截取消操作
                    let vant_dialog__content = document.querySelector('body .van-dialog__content') as HTMLElement
                    vant_dialog__content.querySelector('img')?.remove()
                    resolve(false)
                    closeDialog()
                }
            });
        }
        if (icon) {
            setTimeout(() => {
                let vant_dialog__content = document.querySelector('body .van-dialog__content') as HTMLElement
                let img = document.createElement('img')
                vant_dialog__content.style.textAlign = 'center'
                img.style.width = '200px'
                img.src = icon
                vant_dialog__content?.appendChild(img)
            })
        }
        
        return showConfirmDialog({
            title: title || '标题',
            message: msg,
            showCancelButton: showCancelButton,
            beforeClose
        })
    }
}

export default Message;
