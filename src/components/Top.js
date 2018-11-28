import React, { Component } from 'react';
import Img from '../img/mockup.png';

class Top extends Component {
  render() {
    return (
      <div id ="Top">
        <header>
          <img src={Img} alt="利用イメージ"/>
          <div className="greeting">
            <h1>フィールドワークでもっと自由に共有を</h1>
            <p>ShaMAPは、共有マップに直接発見を共有できます。</p>
            <a>はじめる</a>
          </div>
        </header>
        <div id="about">
          <h2>ShaMAPについて</h2>
          <p>ShaMAPは、特定の場所に写真や文章を投稿することが出来るWebサービスです。</p>
          <h3>用途例</h3>
          <ul>
              <li>フィールドワーク</li>
              <li>地域コミュニティ</li>
              <li>旅行の記録</li>
          </ul>
        </div>
        <div id="price">
          <h2>料金</h2>
          <p>現在、すべての機能が無料でご利用できます。今後、機能追加とともに有料プランを提供予定です。</p>
        </div>
        <div id="contact">
          <h2>お問い合わせ</h2>
          <p>サービスに関するお問い合わせはこちら</p>
        </div>
      </div>
    );
  }
}

export default Top;
