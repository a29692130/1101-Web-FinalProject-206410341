######Web 程式設計(一) ---- 206410341 吳權恩

###期中 Project 實作過程 -- 建立 Components_ItemContainer.js + Item.js

####Step1. src 底下新增一個 components 目錄
![components目錄](https://i.imgur.com/2CZw4pa.png)

####Step2. 分析找到的 theme，將放入商品資訊的區域利用變數來呈現，在 components 底下新增 Item.js
Code:

```
import React from 'react';

const ItemContainer = ({ id, name, remoteUrl, price, link }) => {
  return (
    <a key={id} target="_self" className="item" href={link}>
      <img className="lazyc" src={remoteUrl} />
      <div>
        <p className="item-title">{name}</p>
      </div>
      <p className="item-price">{price}</p>
    </a>
  );
};

export default ItemContainer;
```

####Step3. 其他區域，新增 ItemContainer.js
Code:

```
import React from 'react';
import './ItemContainer.scss';
import Item from './Item.js';

const ItemContainer = () => {
  return (
    <div>
      <div className="tvbs-customized-191127">
        <section className="tvbs-customized-191127 chp001-191127 container container__wrapper">
          <div className="title-decoration">
            <h2 className="title">本周超熱賣</h2>
            <span className="decoration"></span>
          </div>
          <div className="items-container">
            <Item
              name="【友蘭食作坊】牛肉超載鍋(5-6人份) 派對熱銷組合"
              remoteUrl="https://supertaste-shop.tvbs.com.tw/Files/market/103638/image/MAI_235112588_X400X400.png"
              price="$988"
              link="/Product/103638"
            />
            <Item
              name="【踏輕X謝師傅】胡椒鴨 (2000公克±10%/)"
              remoteUrl="https://supertaste-shop.tvbs.com.tw/Files/market/117011/image/MAI_105516236_X400X400.png"
              price="$799"
              link="/Product/117011"
            />
            <Item
              name="免運【角之館】十勝生乳布丁蛋糕(3盒一組 冷藏出貨)"
              remoteUrl="https://supertaste-shop.tvbs.com.tw/Files/market/111879/image/MAI_024013559_X400X400.jpg"
              price="$599"
              link="/Product/111879"
            />
            <Item
              name="【松百顆★爆吃組】松包子+松餃子+松饅頭►年度熱銷超級綜合免運"
              remoteUrl="https://supertaste-shop.tvbs.com.tw/Files/market/117278/image/MAI_190605199_X400X400.jpg"
              price="$1,111"
              link="/Product/117278"
            />
          </div>
        </section>
      </div>
      .
      .
      .
      <div className="tvbs-customized-191127">
        <section className="tvbs-customized-191127 chp001-191127 container container__wrapper">
          <div className="title-decoration">
            <h2 className="title">玩樂小幫手</h2>
            <span className="decoration"></span>
          </div>
          <div className="items-container">
            <Item
              name="【1MORE】ComfoBuds Pro 主動降噪耳機 / ES901 / 極光藍-EQ版"
              remoteUrl="https://supertaste-shop.tvbs.com.tw/Files/market/117682/image/MAI_152535083_X400X400.jpg"
              price="$3,480"
              link="/Product/117682"
            />
            <Item
              name="【台東帆布行】帆布便當袋（黃綠）"
              remoteUrl="https://supertaste-shop.tvbs.com.tw/Files/market/117084/image/MAI_124930122_X400X400.jpg"
              price="$400"
              link="/Product/117084"
            />
            <Item
              name="【反應過激的貓】反應過激的貓自得意滿行動電源"
              remoteUrl="https://supertaste-shop.tvbs.com.tw/Files/market/111934/image/MAI_095208646_X400X400.jpg"
              price="$899"
              link="/Product/111934"
            />
            <Item
              name="【Future Lab.未來實驗室】新一代X零負重包(筆電包/後背包)"
              remoteUrl="https://supertaste-shop.tvbs.com.tw/Files/market/117857/image/MAI_155252506_X400X400.jpg"
              price="$1,299"
              link="/Product/117857"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemContainer;

```

####Step4. 將找到的 CSS，放入新增的 ItemContainer.scss
Code:

```
.tvbs-customized-191127 {
  margin-bottom: 15px;

  .container {
    padding-right: 15 px;
    padding-left: 15 px;
    margin-right: auto;
    margin-left: auto;
  }
  .container__wrapper {
    margin-top: 5 px;
  }

  .title-decoration {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .title {
    margin: 15px auto;
    font-size: 24px;
    font-weight: 900;
    padding-left: 10px;
    color: #666;
  }
  .decoration {
    display: flex;
    -webkit-box-flex: 3;
    -ms-flex-positive: 3;
    flex-grow: 3;
    -ms-flex-negative: 3;
    flex-shrink: 3;
    width: auto;
    margin-left: 20px;
    margin-right: 10px;
    border-bottom: 1px solid #ccc;
  }

  .items-container {
    width: 1170 px;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: flex-start;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .item {
    display: block;
    height: 100%;
    width: 25%;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;
    color: #666;
  }
  .lazyc {
    width: 100%;
    height: auto;
  }
  .item-title {
    font-size: 1em;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    /*height:40px*/
    margin-top: 10px;
  }
  .item-price {
    font-size: 1.15em;
    font-weight: 900;
    color: #e84242;
  }
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

```

####Step5. 步驟 1~4 結合之後完成後的樣子
![完成商品區](https://i.imgur.com/crOeGOq.jpg)

與要複製的網頁對比
![對比照](https://i.imgur.com/7zd86lZ.jpg)
