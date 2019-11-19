import React, { Component } from 'react';
import "./flying_order.css";
import "../../public_css/bus.css";
import { //引入路由等
    Link,
    // Route,
    // BrowserRouter as Router,
    // Switch,
    // Prompt,
    // Redirect
  } from 'react-router-dom'
  class Flying_order extends Component {
    render() {
        var {history}=this.props
        return (
    <div>
    {/* <!--主页的banner组件--> */}
    <div class="banner">
    <div class="return" onClick={history.goBack} ><span class="iconfont">&#xe608;</span>返回</div>
    <div class="title">飞花令</div>
</div>

{/* 飞花令组件 */}
<div class='flying_order_box'>
    <div class='flying_order_the'>飞花令</div>
    <div class='flying_order_the2'>本期话题————</div>
    <div class='flying_order_word'>天</div>
</div>
{/* 规则介绍组件 */}
<div class='flying_order_rule_box' >
    <div class='flying_order_ruleH'>游戏规则：—————————————————————</div>
    <div class='flying_order_ruleB'>
        发表和分享本期话题中所包含字的诗句即可，至少要包含五个字，内容需为古诗词句，不可以发表别人已经发表的诗句哦。
    </div>
</div>



 {/* <!-- 简介排列框组件 --> */}
 <div class="flying_order_synopsisBox">

<div class="plq">评论区:</div>

{/* <!-- 评论组件（举例） --> */}
<div class="flying_order_poetrySynops">
    {/* <!--插入头像插入两个div。--> */}
    <div class="flying_order_avanta_frame">
        <div class="flying_order_avanta"></div>
    </div>
    
    <div class="flying_order_nickName">吾好梦中作诗</div>
    <div class="flying_order_level">Lv100</div>
    <div class="flying_order_achievement">翰林学士</div>

    <div class="comment_text">天接云涛连晓雾，星河欲转千帆舞。</div>

    <div class="flying_order_showtime">创作时间: <span>2019-2-13</span></div>
</div>

<div class="flying_order_poetrySynops">
    {/* <!--插入头像插入两个div。--> */}
    <div class="flying_order_avanta_frame">
        <div class="flying_order_avanta"></div>
    </div>
    
    <div class="flying_order_nickName">云淡风清</div>
    <div class="flying_order_level">Lv68</div>
    <div class="flying_order_achievement">居士</div>

    <div class="comment_text">天街小雨润如酥，草色遥看近却无。</div>

    <div class="flying_order_showtime">创作时间: <span>2019-2-13</span></div>
</div>
</div>

{/* 评论输入框组件 */}
    <div class='to_comment'>
        <input type="text" placeholder="//写下你的看法吧"/>
        <div class='to_comment_button'>发表</div>
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
        <div class="icon">
            <div class="iconfont">&#xe617;</div><br/>
            <div class="icon_text">互动</div>
        </div>
    </div>
</div>
            );
        }
    }
export default Flying_order