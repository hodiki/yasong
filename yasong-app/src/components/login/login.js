import React, { Component } from 'react';
import "./login.css";
import "../../public_css/bus.css";
import $ from 'jquery';
import { //引入路由等
    Link,
    withRouter,
    // Route,
    // BrowserRouter as Router,
    // Switch,
    // Prompt,
    // Redirect
  } from 'react-router-dom'

var pd_code=11      //code返回临时存储
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            router_to: '/Login'
        };
        this.url = "http://www.kaylecn.com/login";
        // this.router_to='/Regist';
        this.form_n_ture=0;
        this.form_state={
            username: "xx",
            password: "xx"
        }

    }

    get_from=()=> {                              //获取form表单内容,并修改form_state
        this.form_state.username=$(".login_username").val();
        this.form_state.password=$(".login_password").val();
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
                router_to:'/Login'    //测试用
            });
            console.log(this.state.router_to)//测试用
            return this.form_n_ture;
        }else if(this.form_state.username!="" && this.form_state.password!=""){
            this.form_n_ture=1;
            this.state.router_to='/Home';
            this.setState({
                router_to:'/Home'        //测试用
            });
            console.log(this.state.router_to)//测试用
            return this.form_n_ture;
        }
    }

    regist_two=()=>{    //注册功能打包
        // this.get_from()
        var rt_code;
        if(this.form_n_ture==0){
            alert("请输入您的的账号和密码");
            // this.props.history.push('/Regist');
            window.location.reload();       //刷新页面
            return 0;
        }else if(this.form_n_ture==1){
            // this.router_to='/Supplement';
            rt_code=this.post_data()        //执行函数，并获取code返回值
            if(rt_code==0){
                this.props.history.push('/Home');
            }else if(rt_code==1){
                window.location.reload();       //刷新页面
                // this.props.history.push('/Regist');
            }
        }
    }

    render() {
        // var timename=setInterval(this.form_ture,10000);
        var timename=setTimeout(this.form_ture,1000);   
        // var {history}=this.props
        return (
            
<div className='Login_body'>
    <div className="login_container">
        <div className="login_logo"></div>
        <div className="login_welcome"><span>有朋自远方来，<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不亦乐乎？</span></div>
        <form action="http://www.kaylecn.com/login" method="POST" target="rfFrame">
            <div>
                <span className='Lspan'>账号: </span>
                <input className="login_text login_username" type="text"/>
            </div>
            <div>
                <span className='Lspan'>密码: </span>
            <input className="login_text login_password" type="password"/>
            </div>
            <Link onClick={this.regist_two}>
            <div className="login_button"><span>進  入</span></div>
            </Link>
            <Link to='/Regist'>
            <div className="login_forgot"><span>新用户加入</span></div>
            </Link>
        </form>
    </div>
</div>
);
        }
    }
export default Login