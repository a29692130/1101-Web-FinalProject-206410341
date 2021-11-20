######Web 程式設計(一) ---- 206410341 吳權恩

#####解決問題

當時做完 Header 與 Navbar 想要一起顯示的時候，卻發現 Navbar 一直無法成功顯示。

網站為了要讓 Header 要凍結在最頂端

```
.top {
  position: fixed;
}
```

後來在 Navbar 發現上面其實有個\<div>

```
<div className="tvbs-customized top-padding"></div>
```

高度為 80.0469px

```
.top-padding {
  height: 80.0469px;
}
```

相等於 Header 的高度，所以 Navbar 一直是被 Header 所覆蓋住，添加完\<div>後就正常顯示了
