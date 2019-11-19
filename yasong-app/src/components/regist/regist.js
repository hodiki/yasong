import React, { Component } from 'react';
import "./regist.css";
import "../../public_css/bus.css";
import $ from 'jquery';
import { //引入路由等
    Link,
    // Route,
    withRouter,
    // BrowserRouter as Router,
    // Switch,
    // Prompt,
    // Redirect
  } from 'react-router-dom'

var pd_code=11      //code返回临时存储
class Regist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            router_to: '/Regist'
        };
        this.url = "http://www.kaylecn.com/regist";
        // this.router_to='/Regist';
        this.form_n_ture=0;
        this.form_state={
            username: "xx",
            password: "xx"
        }

    }

    get_from=()=> {                              //获取form表单内容,并修改form_state
        this.form_state.username=$(".regist_username").val();
        this.form_state.password=$(".regist_password").val();
    }
    
    
    post_data=()=> {                               //发送ajax
        console.log(this.form_state)
        $.ajax({
            async: false,       //使其为同步执行,jq默认为异步执行
            type:"POST",
            url: this.url,
            data:JSON.stringify(this.form_state),   //把数据变成真正的json格式
            contentType:"application/json;charset=utf-8",
            dataType: "json",
            xhrFields: {
                withCredentials: true    // 要在这里设置 跨域设置cookie
            },
            // headers:{'Content-Type':'application/json;charset=utf8'},
            success: function (e) {
                console.log(e);
                if(e.code==0){
                    pd_code=0;
                    alert("注册成功");
                }else if(e.code==1){
                    pd_code=1;
                    alert("该用户名已经存在");
                }else{
                    pd_code=-1;
                    alert("数据传输错误")
                }                
                
            },
            error: function (err) {
                console.log(err)
            }
        });

        $.ajax({
            async: false,       //使其为同步执行,jq默认为异步执行
            type:"POST",
            url: "http://www.kaylecn.com/login",
            data:JSON.stringify(this.form_state),   //把数据变成真正的json格式
            contentType:"application/json;charset=utf-8",
            dataType: "json",
            xhrFields: {
                withCredentials: true    // 要在这里设置 跨域设置cookie
            },
            // headers:{'Content-Type':'application/json;charset=utf8'},
            success: function (e) {
                console.log(e);
                if(e.code==0){
                    pd_code=0;
                    alert("登陆成功");
                }else if(e.code==1){
                    pd_code=1;
                    alert("账号不存在或者密码不正确,请确认");
                }else{
                    pd_code=-1;
                    alert("数据传输错误")
                }                
                
            },
            error: function (err) {
                console.log(err)
            }
        });
        //jq中setState无效,故在外判断code
        return pd_code;
    }

    form_ture=()=>{                       //判断from表单内容是否符合条件
        this.get_from()
        if(this.form_state.username=="" || this.form_state.password==""){
            this.form_n_ture=0;
            this.setState({
                router_to:'/Regist'    //测试用
            });
            console.log(this.state.router_to)
            return this.form_n_ture;
        }else if(this.form_state.username!="" && this.form_state.password!=""){
            this.form_n_ture=1;
            this.state.router_to='/Supplement';
            this.setState({
                router_to:'/Supplement'        //测试用
            });
            console.log(this.state.router_to)
            return this.form_n_ture;
        }
    }

    regist_two=()=>{    //注册功能打包
        // this.get_from()
        var rt_code;
        if(this.form_n_ture==0){
            // this.props.history.push('/Regist');
            alert("请输入您的的账号和密码");
            window.location.reload();       //刷新页面
            return 0;
        }else if(this.form_n_ture==1){
            // this.router_to='/Supplement';
            rt_code=this.post_data()        //执行函数，并获取code返回值
            if(rt_code==0){
                this.props.history.push('/Supplement');
            }else if(rt_code==1){
                window.location.reload();       //刷新页面
                // this.props.history.push('/Regist');
            }
        }
    }

    render() {
        // var timename=setInterval(this.form_ture,10000);
        var timename=setTimeout(this.form_ture,1000);   
        return (
    <div>
<div class="register_container">
    <div class="regist_welcome"><span>千里逢迎,高朋满座。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--《滕王阁序》</span></div>
    <form action="http://www.kaylecn.com/regist" method="POST" target="rfFrame">
    <div><span class='regist_span'>设定您的账号: </span>
        <input class="regist_text regist_username" type="text" name="username"/>
    </div>
    <div><span class='regist_span'>设定您的密码: </span>
        <input class="regist_text regist_password" type="password" name="password"/>
    </div>
      
    <div><span class='regist_span'>确认您的密码： </span>
        <input class="regist_text" type="text"/>
    </div>
    <Link className="Link_post" onClick={this.regist_two} >
    <div class="regist_button"  ><span>完  畢</span></div>
    {/* <input type="submit" value="Submit" /> */}
    </Link>
    </form>
</div>
</div>
);
        }
    }
export default Regist