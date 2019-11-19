import React, { Component } from 'react';
import "./composing_poetry.css";
import "../../public_css/bus.css";
import { //引入路由等
    Link,
    // Route,
    // BrowserRouter as Router,
    // Switch,
    // Prompt,
    // Redirect
  } from 'react-router-dom'
 

class Composing_poetry extends Component {
    render() {
        var {history}=this.props
        return (
    <div>
    {/* <!--主页的banner组件--> */}
    <div className="banner"  >
    {/* <Link to='/Detail'> */}
        <div className="return" onClick={history.goBack}><span className="iconfont">&#xe608;</span>返回</div>
        <div className="title">作诗</div>
    {/* </Link> */}
    </div>

{/* <!-- verse组件 --> */}
<div className="composingPoetryBox">
    <div className="composingPoem-fameBox">
        <input type="text" className="composingPoem_fame" placeholder="//题目"/>
    </div>
    <div class="composingPoetryBodyBox">
        <textarea class="composingPoetryBody" id="" cols="30" rows="10" placeholder="//诗的主体" ></textarea>
    </div>


    {/* 两个侧栏 */}
    <div className='background_buttom'>
            背景+   
    </div>

    <div className='real_buttom'>
            印章+
    </div>

    {/* <!-- button组件 --> */}
    <div class="composing_poetry_button"><span>完  畢</span></div>
</div>
</div>
        );
    }
}
export default Composing_poetry