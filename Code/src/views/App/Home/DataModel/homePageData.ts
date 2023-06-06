import { ref } from 'vue'
import bannerImg1 from '@/assets/images/Home/1.jpg'
import bannerImg3 from '@/assets/images/Home/3.jpg'
import bannerImg4 from '@/assets/images/Home/4.jpg'


// 头部功能数据
export interface HeaderListModel {
    name: string,
    icon: string,
    path: string
}
export const HeaderList = ref<Array<HeaderListModel>>([{
    name: '扫一扫',
    icon: 'scan',
    path: 'ScanPage'
}, {
    name: '定位',
    icon: 'location-o',
    path: 'MapPage'
}, {
    name: '二维码',
    icon: 'qr',
    path: 'QrPage'
}])

// 轮播图
export interface BannerListModel {
    img: string,
    strList: Array<{
        name: string
    }>
}
export const bannerList = ref<Array<BannerListModel>>([{
    img: bannerImg1,
    strList: [{
        name: '红烧肉'
    }, {
        name: '可乐鸡翅'
    }, {
        name: '醋溜白菜'
    }, {
        name: '红烧排骨'
    }, {
        name: '西红柿炒鸡蛋'
    }, {
        name: '芹菜炒香干'
    }, {
        name: '土豆烧牛肉'
    }, {
        name: '麻婆豆腐'
    }, {
        name: '干锅菜花'
    }, {
        name: '酸辣土豆丝'
    }]
    // str: '《曹冲称象》是个寓言故事，讲述了有人送给曹操一头大象，没有见过大象这种庞然大物的文武百官想知道他的重量，可惜绞尽脑汁都没有想到合适办法。后来曹操的小儿子曹冲提议用吃水深度相同的石头去称大象。</br>当时学习的时候特别崇拜曹冲，一个小孩子就有如此的奇思妙想，太厉害了！'
}, {
    img: bannerImg3,
    strList: [{
        name: '东安子鸡'
    }, {
        name: '清蒸武昌鱼'
    }, {
        name: '无为熏鸭'
    }, {
        name: '辣子鸡'
    }, {
        name: '北京烤鸭'
    }, {
        name: '四川麻婆豆腐'
    }, {
        name: '西湖醋鱼'
    }, {
        name: '飞龙汤'
    }, {
        name: '东坡肉'
    }, {
        name: '腊味合蒸'
    }]
}, {
    img: bannerImg4,
    strList: [{
        name: '熘鱼焙面'
    }, {
        name: '炸紫酥肉'
    }, {
        name: '煎扒青鱼头尾'
    }, {
        name: '牡丹燕菜'
    }, {
        name: '汴京烤鸭'
    }, {
        name: '炸八块'
    }, {
        name: '清汤鲍鱼'
    }, {
        name: '套四宝'
    }, {
        name: '酸辣乌鱼蛋汤'
    }, {
        name: '桶子鸡'
    }]
}])

// 功能区
export interface ItemsListModel {
    name: string,
    icon: string,
    color: string
}
export const ItemsList = ref<Array<ItemsListModel>>([{
    name: '烟花',
    icon: 'fire-o',
    color: '#FF9A9E'
}, {
    name: '签名',
    icon: 'edit',
    color: '#38F9D7'
}, {
    name: '群烟',
    icon: 'fire-o',
    color: '#A18CD1'
}, {
    name: '振动',
    icon: 'bell',
    color: '#FBC2EB'
}, {
    name: '拍照',
    icon: 'photograph',
    color: '#8FD3F4'
}, {
    name: '通话',
    icon: 'phone',
    color: '#A1C4DB'
}, {
    name: '',
    icon: '',
    color: ''
}, {
    name: '',
    icon: '',
    color: ''
}])

// Echarts
export const option = {
    title: {
        text: '销售统计',
        subtext: '销售量',
        left: 'right'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    series: [{
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        itemStyle: {
            borderRadius: 6,
            borderColor: '#fff',
            borderWidth: 0
        },
        data: [
            { value: 1048, name: '羊毛衫' },
            { value: 735, name: '皮靴' },
            { value: 580, name: '大衣' },
            { value: 484, name: '护目镜' },
            { value: 300, name: '登山杖' }
        ],
        labelLine: {
            show: true
        },
        label: {
            show: false,
            position: 'center'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold'
            },
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};