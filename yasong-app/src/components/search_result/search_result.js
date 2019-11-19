import React, { Component } from 'react';
import "./search_result.css";
import "../../public_css/bus.css";
import { //引入路由等
    Link,
    // Route,
    // BrowserRouter as Router,
    // Switch,
    // Prompt,
    // Redirect
  } from 'react-router-dom'
class Search_result extends Component {
    render() {
        var {history}=this.props
        return (
    <div>
    {/* <!--主页的banner组件--> */}
    <div class="banner">
        <div class="avanta_frame">
            <Link to='/Search_result/Sliding_window'>
                <div class="avanta"></div>
            </Link>
            
        </div>
        <div class="search_text">
            <input type="text" placeholder="//及时当勉励，岁月不待人。"/>
            <span class="iconfont">&#xe631;</span>

        </div>
        <Link to='/Composing_poetry'>
        <div class="create_icon">
            <span class="iconfont">&#xe60f;</span>
        </div>
        </Link>
    </div>

    {/* <!--中间组件--> */}
    <div class="search_result_word">搜索结果:</div>
    {/* <!-- 分类选择组件 --> */}
    <div class="search_result_changeButtonBox">
        <button type="button" class="search_result_changeButton">用户</button>
        <button type="button" class="search_result_changeButton">诗人</button>
        <button type="button" class="search_result_changeButton">古诗</button>
    </div>

    {/* <!-- 简介排列框组件 --> */}
    <div class="search_result_synopsisBox">

        {/* <!-- 简介组件（举例） --> */}
        <div class="poetrySynops">
            <div class="poetryName">静夜思</div>
            <div class="author">李白</div>
        </div>
        <div class="poetrySynops">
            <div class="poetryName">九月九日忆山东兄弟</div>
            <div class="author">王维</div>
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
export default Search_result