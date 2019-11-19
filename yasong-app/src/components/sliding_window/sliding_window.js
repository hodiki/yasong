import React, { Component } from 'react';
import "./sliding_window.css";
import "../../public_css/bus.css";
import { //引入路由等
    Link,
    // Route,
    // BrowserRouter as Router,
    // Switch,
    // Prompt,
    // Redirect
  } from 'react-router-dom'
class Sliding_window extends Component {
    render() {
        var {history}=this.props
        return (
            <div>
<Link>
<div className='sw_backg' onClick={history.goBack}></div>
</Link>
{/* <!--侧拉组件--> */}
<div class="sliding_door">
    <div class="avanta_frame">
        <div class="avanta"></div>
    </div>

    <div class="sliding_window_username">云淡风轻</div>
    <div class="sliding_achievement">翰林学士</div>
    <div class="sliding_window_showPoints">积分:2000</div>
    <div class="sliding_door_border"></div>
    <Link to='/My_message'>
        <div class="sliding_door_box" ><span>个人资料</span> </div>
    </Link>
    <Link to='/My_collection'>
    <div class="sliding_door_box"><span>我的收藏</span></div>
    </Link>
    <Link to='/MyInform'>
    <div class="sliding_door_box"><span>我的足迹</span></div>
    </Link>
    <Link to='/My_concern'>
    <div class="sliding_door_box"><span>我的关注</span></div>
    </Link>
    <Link to='/My_fans'>
    <div class="sliding_door_box"><span>我的门客</span></div>
    </Link>
    <Link to='/'>
    <div class="settings"><span class="iconfont">&#xe63b;</span>注销账号</div>
    </Link>
    <Link to='/Store'>
    <div class="settings2"><span class="iconfont2">&#xe677;</span>商城</div>
    </Link>
</div>
</div>
);
        }
    }
export default Sliding_window