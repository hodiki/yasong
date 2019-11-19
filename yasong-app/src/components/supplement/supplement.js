import React, { Component } from 'react';
import "./supplement.css";
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

class Supplement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            router_to: '/Supplement'
        };
        this.url = "http://www.kaylecn.com/supplement";                                      
        // this.router_to='/Regist';
        this.form_n_ture=0;
        this.form_state={
            nickname: "xx",
            signature: "xx",
            sex:"xx"
        }

    }

    get_from=()=> {                              //获取form表单内容,并修改form_state
        this.form_state.nickname=$(".supplement_text").val();   //昵称
        this.form_state.signature=$(".supplement_signature").val();
        this.form_state.sex=$("input[name='sex']:checked").val(); //获取被选中Radio的Value值
        console.log(this.form_state.sex);
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
                    alert("完善资料成功");
                }else if(e.code==1){
                    pd_code=1;              //cookie过期
                    alert("请重新登陆");
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
        if(this.form_state.nickname=="" || this.form_state.signature=="" || this.form_state.sex==""){
            this.form_n_ture=0;
            this.setState({
                router_to:'/Supplement'    //测试用
            });
            console.log(this.state.router_to)//测试用
            return this.form_n_ture;
        }else if(this.form_state.nickname!="" && this.form_state.signature!="" && this.form_state.sex!=""){
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
            alert("请输入您的的账号信息");
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
        // var {history}=this.props
        var timename=setTimeout(this.form_ture,1000);   
        return (
    <div>
<div class="register_container">
    <div class="welcome">
    <span>天生我材必有用 <br/>&nbsp;&nbsp;&nbsp;&nbsp;千金散尽还复来。<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--《将进酒》</span>
    </div>

    <form action="http://www.kaylecn.com/login" method="POST" target="rfFrame">
        <div>
            <span class='supplement_h1'>请问您的昵称是？: </span>
            <input class="supplement_text" type="text"/>
        </div>

        <div>
            <div class='supplement_h1'>您是一位？:
                <div class="checkGender">
                    <div class="checkGenderBox">
                        <input class='supplement_input' type="radio" name="sex" value="male" />公子
                    </div>
                    <div class="checkGenderBox">
                        <input class='supplement_input' type="radio" name="sex" value="female" />丽人
                    </div>
                </div>
            </div>
        </div>

        <span class='supplement_h1'>您的座右铭： </span><br/>
        <div class="supplement_bigText">
            <label>
                <textarea class="supplement_signature" rows="3" cols="20">//天生我材必有用。</textarea>
            </label>
        </div>
    </form>
    <Link onClick={this.regist_two}>
    <div class="supplement_button"><span>進入雅頌</span></div>
    </Link>
</div>
</div>
);
        }
    }
export default Supplement