---
title: "GSAPでアニメーションを実装してみた"
description: "GSAPのtimelineを使って、テキストの登場アニメーションを作りました。"
date: 2026-03-05
tags: ["GSAP", "アニメーション", "JavaScript"]
---

## GSAPとは

GSAP（GreenSock Animation Platform）は高性能なJavaScriptアニメーションライブラリです。CSSアニメーションよりも細かい制御ができます。

## timelineの使い方

timelineを使うと、複数のアニメーションを順番に実行できます。
```js
gsap.timeline()
  .to('.element1', { opacity: 1 })
  .to('.element2', { opacity: 1 }, '-=0.3');
```

`-=0.3` で前のアニメーションと重ねることで、自然な流れを作れます。

## 学んだポイント

- `stagger` で要素をずらして表示
- `ease` で動きに緩急をつける
- CSSの初期値（opacity: 0）とGSAPの連携