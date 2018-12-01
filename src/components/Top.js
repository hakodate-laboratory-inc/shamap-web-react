import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Img from '../img/mockup.png';

class Top extends Component {
  render() {
    return (
      <div id ="Top">
        <header>
          <img src={Img} alt="利用イメージ"/>
          <div className="greeting">
            <h1>フィールドワークでもっと自由に共有を。</h1>
            <p>ShaMAPは、特定の場所に写真や文章を投稿できるWebサービスです。</p>
            <Link to={ `/maps` }>はじめる</Link>
          </div>
        </header>
        <div id="about">
          <h2>ShaMAPについて</h2>
          <p>ShaMAPは、特定の場所に写真や文章を投稿できるWebサービスです。
            <br />スマートフォンを使って現地で投稿した情報を、利用できる全ての端末で一覧表示できます。</p>
          <h3>特徴</h3>
          <ul>
            <li>
              <h4>シンプルな道具</h4>
              <p>ShaMAPに必要なものは、スマートフォンやPCなどのインターネットに接続できる機材のみです。従来、筆記用具やカメラを用いて行っていた記録と共有が簡単に行えます。</p>
            </li>
            <li>
              <h4>リアルタイムな共有</h4>
              <p>ShaMAPでは、投稿した瞬間に全ての端末に同じ情報が共有されます。従来の同様の活動に比べ、より広いコミュニティと直接的な情報共有が可能になります。</p>
            </li>
          </ul>
          <h3>使用例</h3>
          <ul>
            <li>
              <h4>フィールドワーク</h4>
              <p>必要な持ち物が減ることで、より身軽に観察に集中できるようになります。また、それぞれの発見がリアルタイムに共有されるため、新たな発見のきっかけが生まれるかもしれません。</p>
            </li>
            <li>
              <h4>地域コミュニティ活動</h4>
              <p>地図と連動して、町内会や趣味の団体で投稿していくことによってオリジナルのマップを作ることができます。花を植えたスポット、観光地のほか、災害時の情報共有などが行なえます。</p>
            </li>
            <li>
              <h4>旅行の記録</h4>
              <p>写真をアップロードするだけで、自然と地図上でどこに行ったのかが分かるようになります。</p>
            </li>
          </ul>
        </div>
        <div id="news">
          <h2>お知らせ</h2>
          <ul>
            <li>2018/11/30 写真に埋め込まれた位置情報を用いた投稿が可能になりました。</li>
          </ul>
        </div>
        <div id="price">
          <h2>料金</h2>
          <p>現在、すべての機能が無料でご利用できます。今後、機能追加とともに有料プランを提供予定です。</p>
        </div>
        <div id="contact">
          <h2>お問い合わせ</h2>
          <p>サービスに関するお問い合わせは<a href='mailto:jmb.nakamura@hakolab.co.jp'>こちら</a>まで。</p>
        </div>
        <footer>
          <p>© 2018 函館ラボラトリ</p>
        </footer>
      </div>
    );
  }
}

export default Top;
