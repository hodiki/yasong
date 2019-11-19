import React, { Component } from 'react';
import "./poetry_class_in.css";
import "../../public_css/bus.css";
import { //引入路由等
    Link,
    // Route,
    // BrowserRouter as Router,
    // Switch,
    // Prompt,
    // Redirect
  } from 'react-router-dom'
class Poetry_class_in extends Component {
    render() {
        var {history}=this.props
        return (
    <div>
    {/* <!--主页的banner组件--> */}
    <div class="banner">
    <div class="return" onClick={history.goBack}><span class="iconfont">&#xe608;</span>返回</div>
    <div class="title"></div>
</div>

{/* <!-- 类型简介组件 --> */}
<div class="class_synopsis">
    <div class="class_name">唐</div>
    <div class="class_synopsis_body">
            唐诗，泛指创作于唐朝诗人的诗。唐诗是中华民族珍贵的文化遗产之一，是中华文化宝库中的一颗明珠。
    </div>
</div>

{/* <!-- 简介排列框组件 --> */}
<div class="synopsisBox">

        {/* <!-- 简介组件（举例） --> */}
        <Link to='/Ancient_poetry'>
        <div class="poetrySynops">
            <div class="poetryName">相思</div>
            <div class="author">王维</div>
            {/* <div class="delete">x</div> */}
        </div>
        </Link>
        <Link to='/Ancient_poetry'>
        <div class="poetrySynops">
            <div class="poetryName">江雪</div>
            <div class="author">柳宗元</div>
            {/* <div class="delete">x</div> */}
        </div>
        </Link>
        <Link to='/Ancient_poetry'>
        <div class="poetrySynops">
            <div class="poetryName">九月九日忆山东兄弟</div>
            <div class="author">王维</div>
            {/* <div class="delete">x</div> */}
        </div>
        </Link>
        <Link to='/Ancient_poetry'>
        <div class="poetrySynops">
            <div class="poetryName">早发白帝城</div>
            <div class="author">李白</div>
            {/* <div class="delete">x</div> */}
        </div>
        </Link>
        <Link to='/Ancient_poetry'>
        <div class="poetrySynops">
            <div class="poetryName">泊秦淮</div>
            <div class="author">杜牧</div>
            {/* <div class="delete">x</div> */}
        </div>
        </Link>
        <Link to='/Ancient_poetry'>
        <div class="poetrySynops">
            <div class="poetryName">九月九日忆山东兄弟</div>
            <div class="author">王维</div>
            {/* <div class="delete">x</div> */}
        </div>
        </Link>
    </div>

    {/* <!--主页的bottom组件--> */}
    <div class="poetry_class_in_bottom">
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
export default Poetry_class_in