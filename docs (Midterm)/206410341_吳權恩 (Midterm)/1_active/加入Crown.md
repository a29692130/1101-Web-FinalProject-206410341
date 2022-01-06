######Web 程式設計(一) ---- 206410341 吳權恩

###主動學習 -- 加入 Crown

####Step1. iClass 下載老師所提供的 Crown demo 檔案

####Step2. 在 pages 底下新增 Crown 目錄，將檔案放入
![檔案存放處](https://i.imgur.com/lT710Ka.png)
####Step3. 在 MidProject 的 App.js 中 import 所有 Crown 的 Pages，Code 如下

```
import Crown from './pages/crown/src/App_xx';
import Shop_xx from './pages/crown/src/pages/ShopPage_xx';
import Contact_xx from './pages/crown/src/pages/ContactPage_xx';
import Signin_xx from './pages/crown/src/pages/SigninPage_xx';
```

####Step4. 在 MidProject 的 App.js 中 \<Switch>裡添加新的\<Route>，Code 如下

```
<Switch>
    <Route exact path="/Crown" component={Crown} />
    <Route exact path="/Crown/api_xx/shop_xx" component={Shop_xx} />
    <Route exact path="/Crown/contact_xx" component={Contact_xx} />
    <Route exact path="/Crown/signin_xx" component={Signin_xx} />
</Switch>
```

####Step5. 在 MidProject 的 NavBar.js 新增一個連結到 Crown 的按鈕

將原始 theme 的「餐廚」按鈕

```
<Link
    id="7"
    to="/Product/CategoryL/31?menucat=7"
    target=""
    className="nav-dropdown-toggle"
>
    餐廚
</Link>
```

修改為「Crown」按鈕

```
<Link
    id="7"
    to="/Crown"
    target=""
    className="nav-dropdown-toggle"
>
    Crown
</Link>
```

####Step6. 完成連結到 Crown

![完成連結到Crown](https://i.imgur.com/qCcbg4e.png)
