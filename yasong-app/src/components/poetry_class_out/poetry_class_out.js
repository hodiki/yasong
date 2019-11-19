import React, { Component } from 'react';
import "./poetry_class_out.css";
import "../../public_css/bus.css";
import { //引入路由等
    Link,
    // Route,
    // BrowserRouter as Router,
    // Switch,
    // Prompt,
    // Redirect
  } from 'react-router-dom'
class Poetry_class_out extends Component {
    render() {
        var {history}=this.props
        return (
    <div>
    {/* <!--主页的banner组件--> */}
    <div class="banner">
    <div class="return" onClick={history.goBack}><span class="iconfont">&#xe608;</span>返回</div>
    <div class="title">诗的分类</div>
</div>

{/* <!-- 分类选择组件 --> */}
    <div class="changeButtonBox">
        <button type="button" class="changeButton">朝代</button>
        <button type="button" class="changeButton">标签</button>
        <button type="button" class="changeButton">作者</button>
    </div>

{/* <!-- 众类型组件 --> */}
<div class="classesBox">

    {/* <!-- 单个类型组件 --> */}
    <Link to='Poetry_class_in'>
    <div class="oneClass">
        <div class="classProfile">唐</div>
        <div class="className">唐朝</div>
    </div>
    </Link>
    
    <Link to='Poetry_class_in'>
    <div class="oneClass">
        <div class="classProfile">宋</div>
        <div class="className">宋朝</div>
    </div>
    </Link>
        
    <Link to='Poetry_class_in'>
    <div class="oneClass">
        <div class="classProfile">元</div>
        <div class="className">元朝</div>
    </div>
    </Link>

    <Link to='Poetry_class_in'>
    <div class="oneClass">
        <div class="classProfile">明</div>
        <div class="className">明朝</div>
    </div>
    </Link>
    
    <Link to='Poetry_class_in'>
    <div class="oneClass">
        <div class="classProfile">清</div>
        <div class="className">清朝</div>
    </div>
    </Link>

</div>

{/* <!--主页的bottom组件--> */}
<div class="bottom">
    <div class="icon">
        <div class="iconfont">&#xe625;</div><br/>
        <div class="icon_text">文库</div>
    </div>
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
export default Poetry_class_out