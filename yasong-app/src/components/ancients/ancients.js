import React, { Component } from 'react';
import "./ancients.css";
import "../../public_css/bus.css";
import { //引入路由等
    Link,
    // Route,
    // BrowserRouter as Router,
    // Switch,
    // Prompt,
    // Redirect
  } from 'react-router-dom'
class Ancients extends Component {
    render() {
        var {history}=this.props
        return (
<div>

        {/* <!--主页的banner组件--> */}
        <div class="banner" onClick={history.goBack} >
        <div class="return"><span class="iconfont">&#xe608;</span>返回</div>
        <div class="ancients_title">古人的信息</div>
    </div>


        {/* head组件  */}
        <div className='ancients_head_box'>
            <div className='ancients_head_top'></div>
            <div className='ancients_head_buttom'></div>
            <div class="ancients_avanta_frame">
                <div class="ancients_avanta"></div>
            </div>
            <div className='ancients_name'>
                李清照
            </div>
            {/* <div className='my_message_concern'>
                + 关注
            </div> */}
            <div className='ancients_achievement lqz_ach'>
                千古第一才女
            </div>
        </div>
    
    
    {/* <!-- 简介排列框组件 --> */}
    <div class="my_message_synopsisBox">
        {/* 单个条目组件 */}
        <div className='my_message_one'>
            &nbsp;&nbsp;▪&nbsp;&nbsp;出生至消逝：
            <div className='my_message_one_body'>1084年3月13日—约1155年</div>
        </div>
        <div className='my_message_one'>
            &nbsp;&nbsp;▪&nbsp;&nbsp;性别：
            <div className='my_message_one_body'>女</div>
        </div>
        {/* <div className='my_message_one'>
            &nbsp;&nbsp;▪&nbsp;&nbsp;粉丝数：
            <div className='my_message_one_body'>180</div>
        </div> */}
        <div className='ancients_bigone'>
            &nbsp;&nbsp;▪&nbsp;&nbsp;人物简介：<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className='ancients_one_body'>李清照出生于书香门第，早期生活优裕，其父李格非藏书甚富，她小时候就在良好的家庭环境中打下文学基础。出嫁后与夫赵明诚共同致力于书画金石的搜集整理。金兵入据中原时，流寓南方，境遇孤苦。所作词，前期多写其悠闲生活，后期多悲叹身世，情调感伤。形式上善用白描手法，自辟途径，语言清丽。论词强调协律，崇尚典雅，提出词“别是一家”之说，反对以作诗文之法作词。能诗，留存不多，部分篇章感时咏史，情辞慷慨，与其词风不同。</div>
        </div>
    </div>
   

    {/* <!-- button组件 --> */}
    {/* <Link to='/Edit_message'>
    <div class="mm_button"><span>编辑资料</span></div>
    </Link> */}

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
export default Ancients