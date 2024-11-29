---
title: 'Contributed to "Contribute-To-This-Project"'
publishedAt: '2024-03-10'
summary: 'OSS参加練習をした時のメモです。'
---

## Contribute-To-This-Project

[Syknapse/Contribute-To-This-Project](https://github.com/Syknapse/Contribute-To-This-Project)

> This project is waiting for your contribution. If you have never contributed code on GitHub before, this is the project to get you started.

GitHub でコードのコントリビューションをしたことがない人が、それにチャレンジできるプロジェクトです。

## コントリビューションとは？

contribution（名詞）は日本語で、「寄付、貢献、投稿、作品」といった意味があるようです。
今回の意味としては、GitHub でコードの貢献（？）、投稿をしようといった意味かと思います。

余談ですが、GitHub のプロフィールの Contribution については以下のように書いてありました。

> - リポジトリの既定のブランチまたは gh-pages ブランチへのコミット
> - ブランチの作成
> - イシューのオープン
> - ディスカッションをオープンすること
> - ディスカッションに回答すること
> - プルリクエストを提案すること
> - pull request レビューの送信

ref: [プロフィールでコントリビューションを表示する - GitHub Docs](https://docs.github.com/ja/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/viewing-contributions-on-your-profile)

## 新しく学んだ、知ったこと

### GitHub Desktop

- VSCode のターミナルしか使ったことがなかったので新鮮でした
- リポジトリ、今いるブランチの確認、コミットの操作がこのソフトでできるので初めての人には見やすくて良いなと思った

## 1. 日本語のチュートリアルを確認する

[Contribute-To-This-Project/translations/README/JAPANESE.md at master · Syknapse/Contribute-To-This-Project](https://github.com/Syknapse/Contribute-To-This-Project/blob/master/translations/README/JAPANESE.md)

こちらには日本語でのやり方を説明してあるので、それを見ながら挑戦してみました。

## 2. リポジトリの fork、リポジトリの clone

てっきりプロジェクトの運営は同じリポジトリ内で行うものだと思っていましたが、今回のプロジェクトのように**書き込み権限を持っていない場合は、フォークを行い、自分で触れるようにして、ブランチを作成、修正した内容をコミットして、プルリクエストを送り、承認されると終了という流れを学びました。**

### fork とは

> フォークとは、元の "上流" リポジトリとコードと可視性の設定を共有する新しいリポジトリです。 多くの場合、フォークは、上流リポジトリに再提案する前に、アイデアや変更に繰り返し取り組むために使用されます。たとえば、オープンソース プロジェクトや、ユーザーが上流リポジトリへの書き込みアクセス権を持っていない場合などです。

ref: [リポジトリをフォークする - GitHub Docs](https://docs.github.com/ja/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)

### clone とは

> リポジトリをクローンすると、その時点で GitHub.com にあるすべてのリポジトリ データの完全なコピーがプルダウンされます。これには、プロジェクトのすべてのファイルとフォルダーのすべてのバージョンも含まれます。 変更を GitHub.com 上のリモート リポジトリにプッシュすることや、他のユーザーの変更を GitHub.com からプルすることができます。

- プルダウン pull down とは
  - 取り壊す、引き下げる、引き倒す

プルダウンは自分のイメージとしては、とりあえずローカルに落としてくるイメージ...。

## 新しいブランチを作る

はじめて GitHub Desktop のインストール、起動でした。
とりあえず、最初に出た画面で左側に自分のリポジトリを選択する部分があるので、該当リポジトリを選んで開けました。
画像を残していないのでわかりにくいですが、右側に「Clone repository...」的なものがあり、はじめはそちらを間違って選んでしまい少し迷いました。
ターミナルに慣れていれば GitHub Desktop は使わなくても良いかなと思いました。チュートリアルにもターミナルバージョンがありましたので...！

## index.html の編集

こちらもチュートリアルを見つつ、HTML の記述を追加。
コードを確認しつつ、`title` 属性について思い出すきっかけになりました。
[タイトル - HTML: ハイパーテキストマークアップ言語 | MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/title)

## フォーマッターが動いてしまった

自分の VS Code 自動的にフォーマットがされるようにしていたため、意図しないフォーマットがされてしまい、HTML を追加したところ以外も変わってしまう現象が発生しました。

とりあえず、自動でフォーマットされるのは設定の **format on save** を `false` にし、Prettier をインストールすることで勝手にフォーマットされることを防ぎました。
Prettier はインストールしていたはずだったのですが...謎です。

## 変更のコミット&プルリクエスト

画像をのせようと思ったのですが、現状の自分のブログでは画像が掲載できない状態だったのでまた追加しようと思います。

プルリクエストに関しては、プルリクエストボタンを押すと元のリポジトリにマージするような形にすることができて、それを送って、管理者が承認してくれると自分の書いたコードが元のリポジトリで表示されるようです。
