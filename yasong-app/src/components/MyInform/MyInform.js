import React, { Component } from 'react';
import "./MyInform.css";
import "../../public_css/bus.css";
import { //引入路由等
    Link,
    // Route,
    // BrowserRouter as Router,
    // Switch,
    // Prompt,
    // Redirect
  } from 'react-router-dom'
class MyInform extends Component {
    render() {
        var {history}=this.props
        return (
    <div>
    {/* <!--主页的banner组件--> */}
    <div class="MyInform_banner">
    <div class="MyInform_return" onClick={history.goBack}><span class="iconfont">&#xe608;</span>返回</div>
    <div class="title">我的足迹</div>
</div>


{/* <!--中间部分--> */}

<div class="MyInform_container">
    <div class="MyInform">
        <div class="MyInform_avanta_frame">
            <div class="MyInform_avanta">
                {/* <img src="../../image/profile_photo/default_male.png" alt="显示头像失败"/> */}
            </div>
        </div>
        <div class="inform_display">
            <div class="MyInform_user_name">风雨同舟</div>
            <div class="MyInform_achievement">著作等身</div>
            <div class="subLine"></div>
            <div class="MyInform_level">等级:
                <span class="level_value">4</span>
            </div>
            <div class="exp">经验:
                <span class="exp_value">1000</span>
            </div>
        </div>
    </div>

    <div class="myFootPrint">
        <div class="MyInform_line"></div>
        <div class="panel_name">我的足迹</div>
        <div class="MyInform_line"></div>
        <div class="MyInform_panel">
            <div class="track">·发表过 <span class="productions">4</span> 篇文章！</div>
            <div class="track">·发表过 <span class="comments">5</span> 个评论！ </div>
            <div class="track">·获得了 <span class="likenum">5</span> 个赞！</div>

        </div>
    </div>

    <div class="MyAchievement">
        <div class="MyInform_line"></div>
        <div class="panel_name">我的成就</div>
        <div class="MyInform_line"></div>

        <div class="MyInform_panel">
            <div class="MyInform_achievement">著作等身</div>
            <div class="MyInform_achievement">初出茅庐</div>
            <div class="MyInform_achievement">翰林学士</div>
            <div class="MyInform_achievement">学富五车</div>
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
export default MyInform