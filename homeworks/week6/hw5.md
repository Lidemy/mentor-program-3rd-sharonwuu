## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

- `<select>` 建立下拉式選單，再用 `<option>` 建立選單中的選項。
  ```
  <select>
    <option value="item1">item1</option>
    <option value="item2">item2</option>
    <option value="itme3">itme3</option>
  </select>
  ```

- `<canvas>` 建立圖形元素，透過程式（JavaScript）繪製圖形，也可以合成或製作動畫。
- `<progress>` 建立進度條。`value` 設定目前進度；`max` 設定全部需要完成的值。
  ```
  <progress value="22" max="100">
  </progress>
  ```


## 請問什麼是盒模型（box modal）

每個元素都是一個盒子，透過 margin、border、padding、content 調整盒子的大小。

可以用 `box-sizing` 更改盒模型預設計算的高度和寬度：

- `content-box`：預設值。盒子只包含內容物本身的寬高；實際顯示的大小還要再加上 `padding` 、 `border` 和 `margin`。
- `border-box`：盒子包含內容本身的寬高、 `padding` 和 `border` 。實際大小會依照設定的 `width`/`height` 顯示。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

- inline：inline 屬性的元素無法設定 `width` 和 `height`，內容會自動撐開盒子。會與周圍的元素顯示在同一行上，不會自動換行。

- block：可以設定 `width` 和 `height`，寬度預設會撐到最大。block 屬性元素會自動換行。

- inline-block：兼顧上述兩者，可以設定 `width` 和 `height`，同時也可以和周圍元素並排同行。

#### display:none 和 visibility:hiddne 差別：

- `display:none`：元素會不顯示，會將元素從 DOM tree 中移除，且不會留下顯示的位子。
- `visibility:hiddne`：元素會被隱藏，但會保留佔據的空間。


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

`position` 用來指定元素的定位方式；`top`、`bottom`、`right`、`left` 則用來決定最後的實際位置。

- `static` ：預設值。
  依照瀏覽器預設位置自動排版，不會特別定位，所以設定 `top`、`bottom`、`right`、`left` 也沒有效果。

- `relative`：相對定位。
  在沒設定 `top`、`bottom`、`right`、`left` 屬性時，和 `static` 一樣，不會有特別的定位。
  若有設定其他屬性，會以「原本的預設位置」為參考點，依照所設的值移動元素，且不會影響其他元素原本的位置。- 

- `absolute`：絕對定位。
  可以用 `top`、`bottom`、`right`、`left` 屬性設定位置，會以「最近的非 static 父元素」為參考點偏移。如果沒有參考點，就會以 body 為參考點。

- `fixed`：固定定位。
  用 `top`、`bottom`、`right`、`left` 屬性設定位置，會以「瀏覽器視窗」為參考點，將元素固定於視窗上，不會跟著捲動頁面移動。
  不會保留原有的空間，所以不影響其他元素的位置。