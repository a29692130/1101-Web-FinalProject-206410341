######Web 程式設計(一) ---- 206410341 吳權恩

###期中 Project 實作過程 -- 建立 Pages_Homepage

####Step1. Homepages 放入需要顯示的 Components

將需要使用的 Components，import 進來直接呼叫。

Code:

```
import React from 'react';
import Swiper from '../components/Swiper';
import ItemContainer from '../components/ItemContainer';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <div>
      <Swiper />
      <ItemContainer />
      <Footer />
    </div>
  );
}

export default Homepage;
```
