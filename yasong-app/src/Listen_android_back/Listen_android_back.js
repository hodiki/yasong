/**
 * 所有组件的基类
 * 实现android端物理返回键的监听
 */
import React, {Component} from 'react';
import {
    BackAndroid,
    Platform,
} from 'react-native';

export default class BaseComponent extends Component {

    constructor(props) {
        super(props);
    }
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener("back", this.onBackClicked);
        }else {

        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener("back", this.onBackClicked);
        }else {
            this.propstManger.addLengeData(this.props.navigator.getCurrentRoutes().length);
        }
    }

    //返回 ;//return  true 表示返回上一页  false  表示跳出RN
    onBackClicked = () => { // 默认 表示跳出RN
        return false;
    }

    /*
     //复制此方法到 继承该组件的地方即可 

     //BACK物理按键监听
     onBackClicked = () => {
         const {navigator} = this.props;
         if (navigator && navigator.getCurrentRoutes().length > 1) {
             navigator.pop();
             return true;//true 表示返回上一页
         }
         return false; // 默认false  表示跳出RN
     }
     */

}


// 用法如下：

// import React, {Component} from 'react';
// import {
//     ...
//     Navigator,
//     ...
// } from 'react-native';
// import BaseComponent from '文件路径';

// export default class Reading extends BaseComponent {
//  onBackClicked = () => {
//          const {navigator} = this.props;
//          if (navigator && navigator.getCurrentRoutes().length > 1) {
//              navigator.pop();
//              return true;//true 表示返回上一页
//          }
//          return false; // 默认false  表示跳出RN
//      }
// }