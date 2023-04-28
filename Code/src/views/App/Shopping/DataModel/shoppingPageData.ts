import { ref } from 'vue'
import photo1 from '@/assets/images/Shopping/1.jpg'
import photo2 from '@/assets/images/Shopping/2.jpg'
import photo3 from '@/assets/images/Shopping/3.jpg'
import photo4 from '@/assets/images/Shopping/4.jpg'
import photo5 from '@/assets/images/Shopping/5.jpg'
import photo6 from '@/assets/images/Shopping/6.jpg'
import photo7 from '@/assets/images/Shopping/7.jpg'

// 侧边栏部分
export interface SidebarListModel {
    title: string,
    index: number
}
export const SidebarList = ref<Array<SidebarListModel>>([{
    title: '羊毛衫',
    index: 0
}, {
    title: 'T恤',
    index: 1
}, {
    title: '牛仔裤',
    index: 2
}, {
    title: '羽绒服',
    index: 3
}, {
    title: '双肩包',
    index: 4
}])


// 商品部分
export interface GoodListModel {
    name: string,
    price: string,
    originalCost: string,
    img: string,
    evaluate: string,
    star: number,
    merchant: string,
    sales: number
}
export const GoodList = ref<Array<GoodListModel>>([{
    name: 'RFSD短袖t恤男夏季纯棉宽松国潮潮流衣服大码港风半袖体恤',
    price: '66.00',
    originalCost: '83.00',
    img: photo1,
    evaluate: '',
    star: 4,
    merchant: '并不富裕的小店',
    sales: 6
}, {
    name: 'HELLO KOMA夏季纯棉短袖t恤男女宽松潮流潮牌ins五分半袖圆领上衣',
    price: '116.00',
    originalCost: '166.00',
    img: photo2,
    evaluate: '宽松，舒适',
    star: 5,
    merchant: 'HELLO KOMA潮流品牌店',
    sales: 16
}, {
    name: '乔普森男女同款夏季短袖纯棉夏季新款薄款半袖体恤男打底衫上衣潮',
    price: '89.00',
    originalCost: '99.00',
    img: photo3,
    evaluate: '低调奢华。',
    star: 4,
    merchant: '乔普森男装',
    sales: 62
}, {
    name: '2023夏季短袖t恤男宽松大码ins潮流百搭纯棉男生印花字母半袖潮牌',
    price: '49.00',
    originalCost: '69.00',
    img: photo4,
    evaluate: '',
    star: 4,
    merchant: '并不富裕的小店',
    sales: 8
}, {
    name: '高克T恤华夫格over设计感size男针织小众重5分袖五短袖重磅小领口',
    price: '33.80',
    originalCost: '45.30',
    img: photo5,
    evaluate: '',
    star: 3,
    merchant: '美人庄',
    sales: 1
}, {
    name: 'HELLO KOMA港风重磅纯棉短袖t恤男宽松潮流圆领体恤五分半袖上衣',
    price: '99.00',
    originalCost: '119.00',
    img: photo6,
    evaluate: '动画风，我的爱',
    star: 4,
    merchant: 'HELLO KOMA潮流品牌店',
    sales: 125
}, {
    name: '2023国外热卖中国12生肖虎印T恤，欧美流行文化奈秀nyshow黑白T恤',
    price: '69.00',
    originalCost: '89.00',
    img: photo7,
    evaluate: '',
    star: 4,
    merchant: '奈秀 NYSHOW',
    sales: 125
}])