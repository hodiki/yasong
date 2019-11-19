import React, { Component } from 'react';
import "./my_collection.css";
import "../../public_css/bus.css";
import { //引入路由等
    Link,
    // Route,
    // BrowserRouter as Router,
    // Switch,
    // Prompt,
    // Redirect
  } from 'react-router-dom'
class My_collection extends Component {
    render() {
        var {history}=this.props
        return (
    <div>
    {/* <!--主页的banner组件--> */}
    <div class="banner" onClick={history.goBack} >
        <div class="return"><span class="iconfont">&#xe608;</span>返回</div>
        <div class="title">我的收藏</div>
    </div>

    {/* <!-- 分类选择组件 --> */}
    <div class="mcol_changeButtonBox">
        <button type="button" class="mcol_changeButton">用户</button>
        <button type="button" class="mcol_changeButton">古诗</button>
    </div>

    {/* <!-- 简介排列框组件 --> */}
    <div class="mcol_synopsisBox">

        {/* <!-- 简介组件（举例） --> */}
        <Link to='/User_works'>
        <div class="mcol_poetrySynops">
            <div class="mcol_poetryName">静夜思</div>
            <div class="mcol_author">李白</div>
            <div class="mcol_delete">x</div>
        </div>
        </Link>
        <Link to='/User_works'>
        <div class="mcol_poetrySynops">
            <div class="mcol_poetryName">九月九日忆山东兄弟</div>
            <div class="mcol_author">王维</div>
            <div class="mcol_delete">x</div>
        </div>
        </Link>
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
export default My_collection