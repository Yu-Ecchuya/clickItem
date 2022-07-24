/**
 * クリックしたもののみをクラスを追加し背景色をつける
 * 1. ul要素を取得
 * 2. ul配下にliを生成・id付与・設置する
 * 3. liの要素を取得
 * 4. クリックイベント定義
 * 5. クリックした要素を取得
 * 6. クリックしたli以外の全ての要素取得
 * 7. クリックした要素にクラス付与
 * 8. クリックした要素以外はクラスを削除
 */

 "use strict";

 // li 4つ生成用array
 const lists = [1, 2, 3, 4];
 
 /**
  * クリックイベント 背景変更
  * @param {*} e
  */
 const action = (e) => {
   // クリックした要素取得
   const targetID = e.target.id;
   const itemID = document.getElementById(targetID);
 
   // ul子要素を取得
   const listItem = document.getElementById("list").children;
   let arrey = [];
   for (let i = 0; i < lists.length; i++) {
     arrey.push(listItem[i].id);
   }
   // クリックした要素がliの何番目なのかチェック
   const index = arrey.indexOf(targetID);
   // クリックしたli要素を変数arreyから削除・残りのli要素をチェック
   arrey.splice(index, 1);
 
   for (let i = 0; i < arrey.length; i++) {
     // クリックしたli以外のDOMを取得
     const dom = document.getElementById(arrey[i]);
     // クリックしたli以外のクラスを削除
     dom.classList.remove("on");
     // クリックしたliの挙動
     itemID.classList.toggle("on");
   }
 };
 
 // ul 取得
 const list = document.getElementById("list");
 
 // liを4つ生成
 for (let i = 1; i <= lists.length; i++) {
   // li を作成・生成, idを付与
   list.insertAdjacentHTML("beforeend", `<li id="item${i}">サンプル${i}</li>`);
   // id取得
   const dom = document.getElementById(`item${i}`);
   // クリックイベント
   dom.addEventListener("click", action);
 }
 