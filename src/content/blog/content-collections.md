---
title: "Content Collectionsでデータ管理"
description: "AstroのContent Collectionsを使って、型安全にMarkdownデータを管理する方法。"
date: 2026-03-09
tags: ["Astro", "TypeScript", "Content Collections"]
---

## Content Collectionsとは

Astroの機能で、Markdownファイルをスキーマ付きで管理できます。TypeScriptの型が自動生成されるので、タイポや必須フィールドの漏れをビルド時に検出できます。

## 使い方の流れ

1. `src/content/config.ts` でスキーマを定義
2. `src/content/コレクション名/` にMarkdownファイルを配置
3. `getCollection()` でデータを取得

## 良かった点

データの構造がコードで保証されるので、記事が増えても安心して管理できます。