######Web 程式設計(一) ---- 206410341 吳權恩

###主動學習 -- 加入 Menu

####Step1. iClass 下載老師所提供的 Menu demo 檔案

####Step2. 在 pages 底下新增 Menu 目錄，將檔案放入

![檔案存放處](https://i.imgur.com/89dCbVi.png)

####Step3. 在 MidProject 的 App.js 中 import 所有 Menu 的 Pages，Code 如下

```
import Menu from './pages/menu/src/App_xx'
```

####Step4. 在 MidProject 的 App.js 中 \<Switch>裡添加新的\<Route>，Code 如下

```
<Switch>
    <Route exact path="/Menu" component={Menu} />
</Switch>
```

####Step5. 在 MidProject 的 NavBar.js 新增一個連結到 Menu 的按鈕

將原始 theme 的「玩樂生活」按鈕

```
<Link
    id="8"
    to="/Product/CategoryL/31?menucat=8"
    target=""
    className="nav-dropdown-toggle"
>
    玩樂生活
</Link>
```

修改為「Menu」按鈕

```
<Link
    id="8"
    to="/Menu"
    target=""
    className="nav-dropdown-toggle"
>
    Menu
</Link>
```

####Step6. 完成連結到 Menu

![完成連結到Menu](https://i.imgur.com/XpodjdC.png)
