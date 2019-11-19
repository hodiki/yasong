import React, { Component } from 'react';
import "./my_fans.css";
import "../../public_css/bus.css";
import { //引入路由等
    Link,
    // Route,
    // BrowserRouter as Router,
    // Switch,
    // Prompt,
    // Redirect
  } from 'react-router-dom'
class My_fans extends Component {
    render() {
        var {history}=this.props
        return (
    <div>
    {/* <!--主页的banner组件--> */}
    <div class="banner">
        <div class="return" onClick={history.goBack} ><span class="iconfont">&#xe608;</span>返回</div>
        <div class="title">我的门客</div>
    </div>

    {/* <!-- 简介排列框组件 --> */}
    <div class="my_fans_synopsisBox">

        {/* <!-- 简介组件（举例） --> */}
        <div class="my_fans_poetrySynops">
             {/* <!--插入头像插入两个div。--> */}
            <div class="my_fans_avanta_frame">
                <div class="my_fans_avanta"></div>
            </div>
            
            <div class="my_fans_nickName">吾好梦中作诗</div>
            <div class="my_fans_level">Lv100</div>
            <div class="my_fans_fansNum">粉丝:<div class="my_fans_fansNumber">198</div></div>
            <div class="my_fans_achievement">翰林学士</div>
        </div>

        <div class="my_fans_poetrySynops">
             {/* <!--插入头像插入两                                                                                    个div。--> */}
            <div class="my_fans_avanta_frame">
                <div class="my_fans_avanta"></div>
            </div>
            
            <div class="my_fans_nickName">兰竹</div>
            <div class="my_fans_level">Lv46</div>
            <div class="my_fans_fansNum">粉丝:<div class="my_fans_fansNumber">24</div></div>
            <div class="my_fans_achievement">诗人</div>
        </div>
        <div class="my_fans_poetrySynops">
            {/* <!--插入头像插入两个div。--> */}
            <div class="my_fans_avanta_frame">
                <div class="my_fans_avanta"></div>
            </div>

            <div class="my_fans_nickName">伊人</div>
            <div class="my_fans_level">Lv2</div>
            <div class="my_fans_fansNum">粉丝:<div class="my_fans_fansNumber">8</div></div>
            <div class="my_fans_achievement">初来乍到</div>
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
export default My_fans