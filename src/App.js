import './App.css';
import './style.css';
import './script'

function App() {
  return (
    <div className="App">
        <h1>常用链接</h1>
    <div class="faq-container">
      <div class="faq active">
        <h3 class="faq-title">
          ⚡️最常用
        </h3>

        <p class="faq-text">
          <a href="https://one.ahu.edu.cn/">智慧安大</a>
          <a href="https://jwxt.ahu.edu.cn/">教务系统(引导界面)</a>
          <a href="https://jwxt1.ahu.edu.cn/">教务系统1</a>
          <a href="https://jwxt3.ahu.edu.cn/">教务系统3</a>
        </p>

        <button class="faq-toggle">
          <i class="fas fa-chevron-down"></i>
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="faq">
        <h3 class="faq-title">
         🔭科研常用 
        </h3>
        <p class="faq-text">
          <a href="https://ahu.metaersp.com/">博采</a>
        </p>
        <button class="faq-toggle">
          <i class="fas fa-chevron-down"></i>
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <div class="faq">
        <h3 class="faq-title">
         ℹ️信息获取 
        </h3>
        <p class="faq-text">
          <a href="https://www.ahu.edu.cn/">安徽大学官网</a> 
          <a href="http://jwc.ahu.edu.cn/">安徽大学教务处</a> 
          <a href="http://www.ahu.edu.cn/183/list.htm">安徽大学教学与科研单位</a> 

        </p>
        <button class="faq-toggle">
          <i class="fas fa-chevron-down"></i>
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <div class="faq">
        <h3 class="faq-title">
         🥰友情链接 
        </h3>
        <p class="faq-text">
         <a href="https://never2.top/andriod">安大通安卓版</a> 
        </p>
        <button class="faq-toggle">
          <i class="fas fa-chevron-down"></i>
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;
