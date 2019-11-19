import React, { Component } from 'react';
import "./home2.css";
import "../../public_css/bus.css";
import data_save from "../data_save/data_save";     //古诗详情页校对号
import $ from 'jquery';
import { //引入路由等
    Link,
    withRouter,
    Route,
    HashRouter as Router,
    // Switch,
    // Prompt,
    // Redirect
  } from 'react-router-dom'

  // 古诗组（点赞排列）
var re_items;

var n_start=Math.ceil(Math.random()*1);      // 获取从1到x的随机整数,目前最好只取1


class Home2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
        this.form_state={       //请求作品时发送的参数(非json)
            start: n_start,   //从几开始获取
            count: 2    //获取数
        }

    }

        //修改古诗详情校对号
    // poem_code_change=(e)=>{
    //     user_works_code=e;
    // }



    post_data=()=> {                               //发送ajax

        //请求作品列表（根据点赞数）
        $.ajax({
            async: false,       //使其为同步执行,jq默认为异步执行
            type:"GET",
            url: "http://www.kaylecn.com/getUserPoemsByLikenum",
            // data:JSON.stringify(this.form_state),   //把数据变成真正的json格式
            data:this.form_state,
            contentType:"application/json;charset=utf-8",
            dataType: "json", 
            xhrFields: {
                withCredentials: true    // 要在这里设置 跨域设置cookie
            },
            // headers:{'Content-Type':'application/json;charset=utf8'},
            success: function (e) {
                // console.log(e.items[0]);   //返回结果为一个数组
                // console.log(e);      //测试用
                re_items=e.items;       //获取古诗组
                console.log(re_items);

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
        return (
    <div>
    {/* <!--主页的banner组件--> */}
<div class="banner">
    <div class="avanta_frame">
        <Link to='/Home2/Sliding_window'>
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

<Link to='/Home'>
    <div className='left_buttom'>
        日推   
    </div>
</Link>


{/* <!--中间组件--> */}


<ul class="home2_poem_list">

  <li>
      {/* 使用query跨ruoter传值 */}
<Link to={{pathname:'/User_works',query:{poem_code:re_items[0].poem_code}}}>
    <div class="home2_user_poem">
      <div class="home2_avanta_frame">
          <div class="home2_avanta"></div>
        </div>
        <div class="home2_username" dangerouslySetInnerHTML={{__html: "<span>"+re_items[0].nickname+"</span>"}}></div>
        <div class="home2_achievement" dangerouslySetInnerHTML={{__html: "<span>"+re_items[0].achievement+"</span>"}}></div>
        <div class="home2_top_border"></div>
        <div class="home2_poem_text" dangerouslySetInnerHTML={{__html: "<span>"+re_items[0].text+"</span>"}}>
            {/* <span>天接云涛连晓雾，星河欲转千帆舞。仿佛梦魂归帝所。闻天语，殷勤问我归何处。
            我报路长嗟日暮，学诗谩有惊人句。九万里风鹏正举。风休住，蓬舟吹取三山去！
            </span> */}
        </div>
        <div class="home2_title" dangerouslySetInnerHTML={{__html: "<span>"+re_items[0].title+"</span>"}}></div>
        <div class="home2_stamp"></div>
        <div class="home2_showtime" dangerouslySetInnerHTML={{__html: "创作时间: <span>"+re_items[0].submit_date+"</span>"}}></div>
        <div class="home2_panel">
          <div class="home2_choose" dangerouslySetInnerHTML={{__html: "<span>"+re_items[0].comments_number+"</span> 評論"}}></div>
          <div class="home2_string"></div>
          <div class="home2_choose" dangerouslySetInnerHTML={{__html: "<span>"+re_items[0].like_number+"</span> 喜歡"}}></div>
          <div class="home2_string"></div>
          <div class="home2_choose" dangerouslySetInnerHTML={{__html: "<span>"+re_items[0].mark_number+"</span> 收藏"}}></div>
      </div>
    </div>
</Link>
  </li>
  
  <li>
  <Link to='/User_works' >
    <div class="home2_user_poem">
      <div class="home2_avanta_frame">
          <div class="home2_avanta"></div>
      </div>
      <div class="home2_username" dangerouslySetInnerHTML={{__html: "<span>"+re_items[1].nickname+"</span>"}}></div>
      <div class="home2_achievement" dangerouslySetInnerHTML={{__html: "<span>"+re_items[1].achievement+"</span>"}}></div>
      <div class="home2_top_border"></div>
      <div class="home2_poem_text" dangerouslySetInnerHTML={{__html: "<span>"+re_items[1].text+"</span>"}}></div>
      <div class="home2_title" dangerouslySetInnerHTML={{__html: "<span>"+re_items[1].title+"</span>"}}></div>
      <div class="home2_stamp"></div>
      <div class="home2_showtime" dangerouslySetInnerHTML={{__html: "创作时间: <span>"+re_items[1].submit_date+"</span>"}}></div>
      <div class="home2_panel">
          <div class="home2_choose" dangerouslySetInnerHTML={{__html: "<span>"+re_items[1].comments_number+"</span> 評論"}}></div>
          <div class="home2_string"></div>
          <div class="home2_choose" dangerouslySetInnerHTML={{__html: "<span>"+re_items[1].like_number+"</span> 喜歡"}}></div>
          <div class="home2_string"></div>
          <div class="home2_choose" dangerouslySetInnerHTML={{__html: "<span>"+re_items[1].mark_number+"</span> 收藏"}}></div>
      </div>
    </div>
</Link>
  </li>
</ul>

{/* <!--主页的bottom组件--> */}
<div class="home2_bottom">
<Link to='/Poetry_class_out'>
        <div class="icon">
            <div class="iconfont">&#xe625;</div><br/>
            <div class="icon_text">文库</div>
        </div>
</Link>
<Link to='/Home2'>
        <div class="icon">
            <div class="iconfont">&#xe627;</div><br/>
            <div class="icon_text">主页</div>
        </div>
</Link>
<Link to='/Flying_order'>
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
export default Home2