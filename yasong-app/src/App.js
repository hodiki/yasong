import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import './Listen_android_back/Listen_android_back';

import { //引入路由等
  Link,
  Route,
  HashRouter as Router,
  Switch,
  Prompt,
  Redirect
} from 'react-router-dom'


import Home from './components/home/home';
import Login from './components/login/login';
import Home2 from './components/home2/home2';
import Edit_message from './components/edit_message/edit_message';
import Composing_poetry from "./components/composing_poetry/composing_poetry";
import Poetry_class_out from "./components/poetry_class_out/poetry_class_out";
import Poetry_class_in from "./components/poetry_class_in/poetry_class_in";
import My_message from "./components/my_message/my_message";
import My_collection from "./components/my_collection/my_collection";
import MyInform from "./components/MyInform/MyInform";
import My_concern from "./components/my_concern/my_concern";
import My_fans from "./components/my_fans/my_fans";
import Search_result from "./components/search_result/search_result";
import User_works from "./components/user_works/user_works";
import Regist from "./components/regist/regist";
import Supplement from "./components/supplement/supplement";
import Store from "./components/store/store";
import Flying_order from "./components/flying_order/flying_order";
import Sliding_window from "./components/sliding_window/sliding_window";
import Ancient_poetry from "./components/ancient_poetry/ancient_poetry";
import Ancients from "./components/ancients/ancients";
// import Home from './components/home/home';



class App extends Component {
  render() {

    ///
    return (
      
      
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <div>

        <Router>
          <div>
              {/* <Route path="/Detail" component={Detail}></Route> */}

              {/* 首页 */}
              {/* exact设为绝对路径 */}
              <Route exact path='/' component={Login} />  

              {/* 主页1 */}
              <Route path='/Home' component={Home} />

              {/* 主页2 */}
              <Route path='/Home2' component={Home2} />

              {/* 编辑个人信息 */}
              <Route path='/Edit_message' component={Edit_message} />

              {/* 作诗 */}
              <Route path='/Composing_poetry' component={Composing_poetry}/>

              {/* 诗的类型（众） */}
              <Route path='/Poetry_class_out' component={Poetry_class_out} />

              {/* 诗的类型（独） */}
              <Route path='/Poetry_class_in' component={Poetry_class_in} />

              {/* 我的信息 */}
              <Route path='/My_message' component={My_message} />

              {/* 古人的信息 */}
              <Route path='/Ancients' component={Ancients} />

              {/* 我的收藏 */}
              <Route path='/My_collection' component={My_collection} />

              {/* 我的足迹 */}
              <Route path='/MyInform' component={MyInform} />

              {/* 我的关注 */}
              <Route path='/My_concern' component={My_concern} />

              {/* 我的粉丝（门客） */}
              <Route path='/My_fans' component={My_fans} />

              {/* 搜索结果 */}
              <Route path='/Search_result' component={Search_result} />

              {/* 用户作品 */}
              <Route path='/User_works' component={User_works} />

              {/* 古人作品 */}
              <Route path='/Ancient_poetry' component={Ancient_poetry} />

              {/* 注册页面1 */}
              <Route path='/Regist' component={Regist} />

              {/* 注册页面2 */}
              <Route path='/Supplement' component={Supplement} />

              {/* 商城页面 */}
              <Route path='/Store' component={Store} />

              {/* 飞花令页面 */}
              <Route path='/Flying_order' component={Flying_order} />

              {/* 侧拉框 */}
              <Route path='/*/Sliding_window' component={Sliding_window} />

          </div>

          {/* <Switch>
            <Route                   
            exact={true}          
            path="/"
            render={
              ()=>(
                <Login/> //首页设定
              )
            }
            >
            </Route>
            
            

          </Switch> */}

        </Router>
      </div>
    )
  }
}


export default App;
