# kind を用いた 1 つのコントロールプレーンと 3 つのワーカーノードを持つ Kubernetes クラスター

kind (Kubernetes IN Docker) を使用して、1 つのコントロールプレーンと 3 つのワーカーノードを持つ Kubernetes クラスターを作成するための設定とセットアップ手順が含まれています。

## 前提条件

- `Docker`
- `kind`

## セットアップ手順

1. リポジトリをクローン

   ```sh
   git clone https://github.com/yoshikawa/til.git
   cd til/k8s/kind/1control-3workers
   ```

2. クラスターを作成

   ```sh
   kind create cluster --config kind-config.yaml
   ```

3. Kubernetes クラスターのノードを確認
   ```sh
   kubectl get nodes
   ```

## 設定

クラスターの設定は kind-config.yaml ファイルに定義されています。  
このファイルを変更することで、クラスターのセットアップを変更できます。

## クリーンアップ

クラスターを削除するには、以下のコマンドを実行します

```sh
kind delete cluster
```

## 参考文献

- [kind ドキュメント](https://kind.sigs.k8s.io/)
- [Kubernetes ドキュメント](https://kubernetes.io/docs/)
