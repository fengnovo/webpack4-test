import $ from 'jquery';
import moment from 'moment';

// 需要手动引入语言包，方便抽离优化
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

let r = moment().endOf('day').fromNow();



console.log('--------1', $, r);