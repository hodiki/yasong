import React, { Component } from 'react';
import "./my_message.css";
import "../../public_css/bus.css";
import { //引入路由等
    Link,
    // Route,
    // BrowserRouter as Router,
    // Switch,
    // Prompt,
    // Redirect
  } from 'react-router-dom'
class My_message extends Component {
    render() {
        var {history}=this.props
        return (
<div>

        {/* <!--主页的banner组件--> */}
        <div class="banner" onClick={history.goBack} >
        <div class="return"><span class="iconfont">&#xe608;</span>返回</div>
        <div class="title">我的信息</div>
    </div>


        {/* head组件  */}
        <div className='my_message_head_box'>
            <div className='my_message_head_top'></div>
            <div className='my_message_head_buttom'></div>
            <div class="my_message_avanta_frame">
                <div class="my_message_avanta"></div>
            </div>
            <div className='my_message_name'>
                吾好梦中吟诗
            </div>
            <div className='my_message_concern'>
                + 关注
            </div>
            <div className='my_message_achievement'>
                翰林学士
            </div>
        </div>
    
    
    {/* <!-- 简介排列框组件 --> */}
    <div class="my_message_synopsisBox">
        {/* 单个条目组件 */}
        <div className='my_message_one'>
            &nbsp;&nbsp;▪&nbsp;&nbsp;注册时间：
            <div className='my_message_one_body'>2019-2-21</div>
        </div>
        <div className='my_message_one'>
            &nbsp;&nbsp;▪&nbsp;&nbsp;性别：
            <div className='my_message_one_body'>女</div>
        </div>
        <div className='my_message_one'>
            &nbsp;&nbsp;▪&nbsp;&nbsp;粉丝数：
            <div className='my_message_one_body'>180</div>
        </div>
        <div className='my_message_bigone'>
            &nbsp;&nbsp;▪&nbsp;&nbsp;个性签名：<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className='my_message_one_body'>山有木兮木有枝，心悦君兮君不知。</div>
        </div>
    </div>
   

    {/* <!-- button组件 --> */}
    <Link to='/Edit_message'>
    <div class="mm_button"><span>编辑资料</span></div>
    </Link>

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
export default My_message