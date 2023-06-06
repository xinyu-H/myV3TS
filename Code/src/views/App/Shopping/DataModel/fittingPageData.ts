import { ref } from 'vue'

import swatch1 from '@/assets/images/Fitting/swatch1-preview.png'
import swatch2 from '@/assets/images/Fitting/swatch2-preview.png'
import swatch3 from '@/assets/images/Fitting/swatch3-preview.png'
import swatch4 from '@/assets/images/Fitting/swatch4-preview.png'
import swatch5 from '@/assets/images/Fitting/swatch5-preview.png'
import swatch6 from '@/assets/images/Fitting/swatch6-preview.png'
import swatch7 from '@/assets/images/Fitting/swatch7-preview.png'
import swatch8 from '@/assets/images/Fitting/swatch8-preview.png'


export interface ImgListModel {
    src: string
}
export const imgList = ref<Array<ImgListModel>>([{
    src: swatch1
}, {
    src: swatch2
}, {
    src: swatch3
}, {
    src: swatch4
}, {
    src: swatch5
}, {
    src: swatch6
}, {
    src: swatch7
}, {
    src: swatch8
}, ])