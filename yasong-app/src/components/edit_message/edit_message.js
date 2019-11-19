import React, { Component } from 'react';
import "./edit_message.css";
import "../../public_css/bus.css";
import { //引入路由等
    Link,
    // Route,
    // BrowserRouter as Router,
    // Switch,
    // Prompt,
    // Redirect
  } from 'react-router-dom'
  class Edit_message extends Component {
    render() {
        var {history}=this.props
        return (
    <div>
    {/* <!--主页的banner组件--> */}
    <div class="banner" onClick={history.goBack}>
        <div class="return"><span class="iconfont">&#xe608;</span>返回</div>
        <div class="title">编辑信息</div>
    </div>

    {/* <!-- 主体 --> */}
    <div class="editBody">
        <div class="nickNameBox">
            <div class="nnWord">昵称：</div> 
            <input type="text" placeholder="吾好梦中作诗" class="nickName"/>
        </div>
        

        <div class="changeSex" >您是一位？:
            <div class="checkGender">
                <div class="checkGenderBox">
                    <input type="radio" class="sex" value="male" />公子
                </div>
                <div class="checkGenderBox">
                    <input type="radio" class="sex" value="female"/>丽人
                </div>
            </div>
        </div>

        <div class="edit_word">
            <span >您的座右铭： </span>
            <div class="bigText">
                <label>
                    <textarea class="signature" rows="3" cols="20" placeholder="//及时当勉励，岁月不待人。"></textarea>
                </label>
            </div>
        </div>
        <Link to='My_message'>
        <div class="edit_message_button"><span>提 交</span></div>
        </Link>
    </div>
</div>
        );
    }
}
export default Edit_message