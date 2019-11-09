# golang-tutorial

Chapter1のチャットアプリの改善
誰とチャットしているかの追加

- Decotatorパターンに基づいてhttp.Handler型をラップし、機能を追加する
- 動的なパスでHTTPのエンドポイントを提供する
- オープンソースのGoomniauthプロジェクトを利用して認証サービスにアクセスする
- httpパッケージを使ってクッキーの読み書きを行う
- Base64形式を使ってオブジェクトのエンコードと復元を行う
- WebSocket上でJSONデータを送受信す
- 様々な種類のデータをテンプレートに渡す
- 自分で定義した型のチャネルを定義して利用する

### OAuth2

OAuth2 とは認証と権限の付与のためののオープンな規格です。特定のデータへの特定の操作を許可する仕組みです。

例えば、Googleアカウントを使用したOAuth2であれば、「メールアドレスを見る。あなたの基本的な情報を見る」を達成することが目的です。

リソースの所有者が第三者のクライアントに対して、プライベートなデータにアクセスするための権限を移譲するために、結果として認証を行いますが、あくまでも認可するための規格であることを忘れないでください。

#### OAuth2での処理の流れ

OAuth2での処理は以下のとおりです。

1. ユーザーはクライアントアプリへのログインに利用する認証プロバイダ(Google, Twitterなど)を選びます。
2. ユーザはその認証プロバイダのWebサイトにリダイレクトされます。リダイレクト先のURLには、クライアントアプリケーションのID値が含まれます。ここで、ユーザーはクライアントアプリによるアクセスを許可するかどうか尋ねられます。
3. ユーザーは認証プロバイダーに対してログインし、クライアントアプリから求められているアクセスを許可します。
4. ユーザーはクライアントアプリは認証プロバイダに認可コードを送信します。認証プロバイダはアクセストークンを返します。
5. クライアントアプリはアクセストークンを含む認証済のリクエストを行い、ユーザー情報や現在の状況などを取得します。