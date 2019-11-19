import React, { Component } from 'react';
import "./home.css";
import "../../public_css/bus.css";
import $ from 'jquery';
import { //引入路由等
    Link,
    Route,
    HashRouter as Router,
    Switch,
    Prompt,
    Redirect
  } from 'react-router-dom'



// const Detail =(props)=>(
//     this.props.history.push('/download')
// )

// 日推变量
var poet_name;
var dynasty;
var poem_code;
var text;
var tag;

//头像样式选择
var avanta_css="avanta_male"

class Home extends Component {
    post_data=()=> {                               //发送ajax

    //日推请求
    $.ajax({
        async: false,       //使其为同步执行,jq默认为异步执行
        type:"GET",
        url: "http://www.kaylecn.com/getDailyPoem",
        // data:JSON.stringify(this.form_state),   //把数据变成真正的json格式
        contentType:"application/json;charset=utf-8",
        dataType: "json", 
        xhrFields: {
            withCredentials: true    // 要在这里设置 跨域设置cookie
        },
        // headers:{'Content-Type':'application/json;charset=utf8'},
        success: function (e) {
            poet_name=e.poet_name;
            dynasty=e.dynasty;
            poem_code=e.poem_code;
            text=e.text;
            tag=e.tag;            
        },
        error: function (err) {
            console.log(err)
        }
    });

    //头像请求
    $.ajax({
        async: false,       //使其为同步执行,jq默认为异步执行
        type:"GET",
        url: "http://www.kaylecn.com/getAvanta",
        data:JSON.stringify(this.form_state),   //把数据变成真正的json格式
        contentType:"application/json;charset=utf-8",
        dataType: "json", 
        xhrFields: {
            withCredentials: true    // 要在这里设置 跨域设置cookie
        },
        // headers:{'Content-Type':'application/json;charset=utf8'},
        success: function (e) {
            if(e.avanta_path=="/"){
                $(".avanta").css("background-color","red;")
            }
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
        this.post_data();
        console.log(poet_name);
        return (
    <div>
    {/* <!--主页的banner组件--> */}
    <div class="User_works_banner">
        <div class="avanta_frame">
            <Link to='/Home/Sliding_window' dangerouslySetInnerHTML={{__html: "<div class="+avanta_css+">"+"</div>"}}>
                {/* <div class="avanta" id="avanta"></div> */}
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

    <Link to='/Home2'>
    <div className='right_buttom'>
        主页
    </div>
    </Link>

    {/* <!--中间组件--> */}
    <Link to='/User_works'>
    <div class="home_display">
        <div class="home_daily_poems">
            <div class="home_title"><span>静夜思</span></div>
            <div class="home_mark"><span class="iconfont">&#xe60f;收藏</span></div>
            <div class="home_text" dangerouslySetInnerHTML={{__html: "<span>"+text+"</span>"}}>
                {/* <span>窗前明月光，
                    疑是地上霜。
                    舉頭望明月，
                    低頭思故鄉。
                </span> */}
            </div>
        </div>
        <div class="home_poet_name" dangerouslySetInnerHTML={{__html: "<span>"+poet_name+"</span>"}} ></div>
        <div class="home_stamp"></div>
    </div>
    </Link>


    {/* <!--主页的bottom组件--> */}
    <div class="bottom">
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
export default Home