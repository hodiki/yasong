import React, { Component } from 'react';
import "./store.css";
import "../../public_css/bus.css";
import { //引入路由等
    Link,
    // Route,
    // BrowserRouter as Router,
    // Switch,
    // Prompt,
    // Redirect
  } from 'react-router-dom'
class Store extends Component {
    render() {
        var {history}=this.props
        return (
    <div>
    {/* <!--主页的banner组件--> */}
    <div class="store_banner">
    <div class="store_return" onClick={history.goBack}><span class="iconfont">&#xe608;</span>返回</div>
    <div class="store_title">集市</div>
</div>

<div class="navigation">
    <div class="stuff">明信片</div>
    <div class="stuff">印章</div>
</div>

<div class="store_items_display">
    <div class="store_item">
        <div class="store_pic yz_pic1">
            {/* <img src="../../image/postcard1.png" alt="请检查网络连接"/> */}
        </div>
        <div class="store_item_Inform">
            <div class="store_item_Name">谷雨</div>
            <div class="store_price">
                <span class="store_price_value">100</span>积分
            </div>
            <div class="store_purchase">
                <span class="iconfont">&#xe60f;</span>
                购买
            </div>
        </div>
    </div>

    <div class="store_item">
        <div class="store_pic yz_pic2">
            {/* <img src="../../image/postcard1.png" alt="请检查网络连接"/> */}
        </div>
        <div class="store_item_Inform">
            <div class="store_item_Name">新年</div>
            <div class="store_price">
                <span class="store_price_value">100</span>积分
            </div>
            <div class="store_purchase">
                <span class="iconfont">&#xe60f;</span>
                购买
            </div>
        </div>
    </div>

    <div class="store_item">
        <div class="store_pic yz_pic3">
            {/* <img src="../../image/postcard1.png" alt="请检查网络连接"/> */}
        </div>
        <div class="store_item_Inform">
            <div class="store_item_Name">意境</div>
            <div class="store_price">
                <span class="store_price_value">80</span>积分
            </div>
            <div class="store_purchase">
                <span class="iconfont">&#xe60f;</span>
                购买
            </div>
        </div>
    </div>

    <div class="store_item">
        <div class="store_pic yz_pic4">
            {/* <img src="../../image/postcard1.png" alt="请检查网络连接"/> */}
        </div>
        <div class="store_item_Inform">
            <div class="store_item_Name">如意</div>
            <div class="store_price">
                <span class="store_price_value">50</span>积分
            </div>
            <div class="store_purchase">
                <span class="iconfont">&#xe60f;</span>
                购买
            </div>
        </div>
    </div>

    <div class="store_item">
        <div class="store_pic yz_pic5">
            {/* <img src="../../image/postcard1.png" alt="请检查网络连接"/> */}
        </div>
        <div class="store_item_Inform">
            <div class="store_item_Name">珍品</div>
            <div class="store_price">
                <span class="store_price_value">50</span>积分
            </div>
            <div class="store_purchase">
                <span class="iconfont">&#xe60f;</span>
                购买
            </div>
        </div>
    </div>

    <div class="store_item">
        <div class="store_pic yz_pic6">
            {/* <img src="../../image/postcard1.png" alt="请检查网络连接"/> */}
        </div>
        <div class="store_item_Inform">
            <div class="store_item_Name">人气</div>
            <div class="store_price">
                <span class="store_price_value">50</span>积分
            </div>
            <div class="store_purchase">
                <span class="iconfont">&#xe60f;</span>
                购买
            </div>
        </div>
    </div>

    <div class="store_item">
        <div class="store_pic yz_pic7">
            {/* <img src="../../image/postcard1.png" alt="请检查网络连接"/> */}
        </div>
        <div class="store_item_Inform">
            <div class="store_item_Name">如意2</div>
            <div class="store_price">
                <span class="store_price_value">50</span>积分
            </div>
            <div class="store_purchase">
                <span class="iconfont">&#xe60f;</span>
                购买
            </div>
        </div>
    </div>

    <div class="store_item">
        <div class="store_pic yz_pic8">
            {/* <img src="../../image/postcard1.png" alt="请检查网络连接"/> */}
        </div>
        <div class="store_item_Inform">
            <div class="store_item_Name">禅</div>
            <div class="store_price">
                <span class="store_price_value">50</span>积分
            </div>
            <div class="store_purchase">
                <span class="iconfont">&#xe60f;</span>
                购买
            </div>
        </div>
    </div>

</div>

    {/* <!--主页的bottom组件--> */}
    <div class="bottom">
    <Link to='Poetry_class_out'>
        <div class="icon">
            <div class="iconfont">&#xe625;</div><br/>
            <div class="icon_text">文库</div>
        </div>
    </Link>
    <Link to='Home2'>
        <div class="icon">
            <div class="iconfont">&#xe627;</div><br/>
            <div class="icon_text">主页</div>
        </div>
    </Link>
    <Link to='Flying_order'>
        <div class="icon">
            <div class="iconfont">&#xe617;</div><br/>
            <div class="icon_text">互动</div>
        </div>
    </Link>
    </div>
</div>
);
        }
    }
export default Store