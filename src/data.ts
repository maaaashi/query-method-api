import { Blog, type Blogs } from "./domains/blog";

export const allBlogs: Blogs = [
  new Blog(1, "Clojure入門", "こんにちは。Clojureの世界へようこそ。"),
  new Blog(2, "TypeScriptの型システム", "TypeScriptの型システムは強力です。"),
  new Blog(
    3,
    "React Hooksの使い方",
    "React Hooksを使うと、関数コンポーネントでも状態管理ができます。",
  ),
  new Blog(4, "Node.jsでの非同期処理", "Node.jsでは非同期処理が重要です。"),
  new Blog(5, "GraphQL入門", "GraphQLはAPIの新しい形です。"),
  new Blog(
    6,
    "Dockerの基本",
    "Dockerを使うと、アプリケーションの環境構築が簡単になります。",
  ),
  new Blog(
    7,
    "Kubernetesの概要",
    "Kubernetesはコンテナオーケストレーションのためのプラットフォームです。",
  ),
  new Blog(
    8,
    "Pythonでのデータ分析",
    "Pythonはデータ分析に適した言語です。PandasやNumPyを使いましょう。",
  ),
  new Blog(
    9,
    "機械学習入門",
    "機械学習はデータからパターンを学習する技術です。Scikit-learnを使ってみましょう。",
  ),
  new Blog(
    10,
    "Webセキュリティの基本",
    "Webアプリケーションのセキュリティは重要です。XSSやCSRFに注意しましょう。",
  ),
];
