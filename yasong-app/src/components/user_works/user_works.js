import React, { Component } from 'react';
import "./user_works.css";
import "../../public_css/bus.css";
import home2 from "../home2/home2";
import $ from 'jquery';
import { //引入路由等
    Link,
    // Route,
    // BrowserRouter as Router,
    // Switch,
    // Prompt,
    // Redirect
  } from 'react-router-dom'

var re_poem

class User_works extends Component {
    constructor(props) {
        super(props);
        this.state = {
           ddd:9
        };
        this.form_state={       //请求作品时发送的参数(非json)
            poem_code:this.props.location.query.poem_code
        }

    }


    post_data=()=> {                               //发送ajax

        //请求作品列表（根据点赞数）
        $.ajax({
            async: false,       //使其为同步执行,jq默认为异步执行
            type:"GET",
            url: "http://www.kaylecn.com/browseThisUserPoem",
            // data:JSON.stringify(this.form_state),   //把数据变成真正的json格式
            data: this.form_state,
            contentType:"application/json;charset=utf-8",
            dataType: "json", 
            xhrFields: {
                withCredentials: true    // 要在这里设置 跨域设置cookie
            },
            // headers:{'Content-Type':'application/json;charset=utf8'},
            success: function (e) {
                // console.log(e.items[0]);   //返回结果为一个数组
                re_poem=e;                  //获取古诗详细信息
                console.log(re_poem);      //测试用s
            },
            error: function (err) {
                console.log(err)
            }
        });
    
        //jq中setState无效,故在外判断code
        return 0;
    }

    render() {
        var {history}=this.props
        this.post_data()
        console.log(this.props.location.query.poem_code)
        return (
    <div>
    {/* <!--主页的banner组件--> */}
    <div class="banner">
        <div class="avanta_frame">
            <Link to='/User_works/Sliding_window'>
                <div class="avanta"></div>
            </Link>
            
        </div>
        <div class="search_text">
            <input type="text" placeholder="//及时当勉励，岁月不待人。"/>
            <Link to='/Search_result'>
            <span class="iconfont">&#xe631;</span>
            </Link>

        </div>
        <Link to='/Composing_poetry'>
        <div class="create_icon">
            <span class="iconfont">&#xe60f;</span>
        </div>
        </Link>
    </div>

    {/* <!--中间组件--> */}
<ul class="poem_list">
    <li><div class="user_poem">
        <div class="User_works_avanta_frame">
            <div class="User_works_avanta"></div>
        </div>
        <div class="username" dangerouslySetInnerHTML={{__html: "<span>"+re_poem.nickname+"</span>"}}></div>
        <div class="achievement"><span>翰林学士</span></div>        
        <div class="top_border"></div>
        <div class="poem_text" dangerouslySetInnerHTML={{__html: "<span>"+re_poem.text+"</span>"}}></div>
        <div class="User_works_title" dangerouslySetInnerHTML={{__html: "<span>"+re_poem.title+"</span>"}}></div>
        <div class="User_works_stamp"></div>
        <div class="User_works_showtime" dangerouslySetInnerHTML={{__html: "创作时间: <span>"+re_poem.submit_date+"</span>"}}></div>
        <div class="User_works_panel">
            <div class="User_works_choose"><span>1.1k+</span> 評論</div>
            <div class="User_works_string"></div>
            <div class="User_works_choose"><span>6.2w+</span> 喜歡</div>
            <div class="User_works_string"></div>
            <div class="User_works_choose" dangerouslySetInnerHTML={{__html: "<span>"+re_poem.mark_number+"</span> 收藏"}}></div>
        </div>
  
  
    </div></li>
    
    <li></li>
  </ul>

  {/* <!-- 简介排列框组件 --> */}
    <div class="User_works_synopsisBox">

        <div class="plq">评论区:</div>

        {/* <!-- 评论组件（举例） --> */}
        <div class="User_works_poetrySynops">
            {/* <!--插入头像插入两个div。--> */}
            <div class="User_works_avanta_frame">
                <div class="User_works_avanta"></div>
            </div>
            
            <div class="User_works_nickName">吾好梦中作诗</div>
            <div class="User_works_level">Lv100</div>
            <div class="User_works_achievement">翰林学士</div>

            <div class="comment_text">很不错的一首诗，得多多学习</div>

            <div class="Uwc_showtime">创作时间: <span>2019-2-13</span></div>
        </div>

        <div class="User_works_poetrySynops">
            {/* <!--插入头像插入两个div。--> */}
            <div class="User_works_avanta_frame">
                <div class="User_works_avanta"></div>
            </div>
            
            <div class="User_works_nickName">吾好梦中作诗</div>
            <div class="User_works_level">Lv100</div>
            <div class="User_works_achievement">翰林学士</div>

            <div class="comment_text">天接云涛连晓雾，星河欲转千帆舞。仿佛梦魂归帝所。闻天语，殷勤问我归何处。
                    我报路长嗟日暮，学诗谩有惊人句。九万里风鹏正举。风休住，蓬舟吹取三山去！</div>
            
            <div class="Uwc_showtime">创作时间: <span>2019-2-13</span></div>
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
export default User_works