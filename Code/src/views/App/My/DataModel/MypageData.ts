import { ref } from 'vue'
export interface ItemListModel {
    name: string,
    icon: string,
    path: string
}
export const ItemList = ref<Array<ItemListModel>>([{
    name: '操作手册',
    icon: 'orders-o',
    path: ''
}, {
    name: '消息通知',
    icon: 'chat-o',
    path: ''
}, {
    name: '二维码',
    icon: 'qr',
    path: '/QrPage'
}])