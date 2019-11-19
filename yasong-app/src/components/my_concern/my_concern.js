import React, { Component } from 'react';
import "./my_concern.css";
import "../../public_css/bus.css";
import { //引入路由等
    Link,
    // Route,
    // BrowserRouter as Router,
    // Switch,
    // Prompt,
    // Redirect
  } from 'react-router-dom'
class My_concern extends Component {
    render() {
        var {history}=this.props
        return (
    <div>
    {/* <!--主页的banner组件--> */}
    <div class="banner">
        <div class="return" onClick={history.goBack} ><span class="iconfont">&#xe608;</span>返回</div>
        <div class="title">我的关注</div>
    </div>

    {/* <!-- 简介排列框组件 --> */}
    <div class="my_concern_synopsisBox">

        {/* <!-- 简介组件（举例） --> */}
        <div class="my_concern_poetrySynops">
             {/* <!--插入头像插入两个div。--> */}
            <div class="my_concern_avanta_frame">
                <div class="my_concern_avanta"></div>
            </div>
            
            <div class="my_concern_nickName">吾好梦中作诗</div>
            <div class="my_concern_level">Lv100</div>
            <div class="my_concern_fansNum">粉丝:<div class="fansNumber">198</div></div>
            <div class="my_concern_achievement">翰林学士</div>
        </div>

        <div class="my_concern_poetrySynops">
             {/* <!--插入头像插入两个div。--> */}
            <div class="my_concern_avanta_frame">
                <div class="my_concern_avanta"></div>
            </div>
            
            <div class="my_concern_nickName">吾好梦中作诗</div>
            <div class="my_concern_level">Lv100</div>
            <div class="my_concern_fansNum">粉丝:<div class="fansNumber">198</div></div>
            <div class="my_concern_achievement">翰林学士</div>
        </div>

        <div class="my_concern_poetrySynops">
             {/* <!--插入头像插入两个div。--> */}
            <div class="my_concern_avanta_frame">
                <div class="my_concern_avanta"></div>
            </div>
            
            <div class="my_concern_nickName">吾好梦中作诗</div>
            <div class="my_concern_level">Lv100</div>
            <div class="my_concern_fansNum">粉丝:<div class="fansNumber">198</div></div>
            <div class="my_concern_achievement">翰林学士</div>
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
export default My_concern