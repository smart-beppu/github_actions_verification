# GitHub Actions SAST Verification

このプロジェクトは、GitHub ActionsでPHPとJavaScriptの静的解析（SAST）を自動実行するためのデモプロジェクトです。

## 機能

### 静的解析ツール

- **PHP**: Psalm、PHPStan
- **JavaScript**: ESLint

### GitHub Actions ワークフロー

- プッシュ時に自動で静的解析を実行
- エラーがある場合は自動修正を試行
- 全てのチェックが通った場合はプロジェクトリーダーに通知

## ワークフロー詳細

1. **PHP Analysis Job**
   - Psalm と PHPStan で PHP コードを解析
   - 設定ファイルが存在しない場合は自動生成

2. **JavaScript Analysis Job**
   - ESLint で JavaScript コードを解析
   - 設定ファイルが存在しない場合は自動生成

3. **Success Notification**
   - 全ての解析が成功した場合、GitHub Issue で通知

4. **Auto-fix Job**
   - 解析でエラーが発生した場合、自動修正を試行
   - 修正可能な問題は自動でコミット

## ファイル構成

```text
.
├── .github/workflows/sample.yml  # GitHub Actions ワークフロー
├── src/                          # ソースコード
│   ├── Calculator.php            # PHP サンプルコード
│   └── calculator.js             # JavaScript サンプルコード
├── composer.json                 # PHP 依存関係
├── package.json                  # JavaScript 依存関係
├── psalm.xml                     # Psalm 設定
├── phpstan.neon                  # PHPStan 設定
├── eslint.config.js              # ESLint 設定
└── README.md                     # このファイル
```

## 使用方法

1. リポジトリにコードをプッシュ
2. GitHub Actions が自動実行される
3. 解析結果に応じて以下のいずれかが発生：
   - 成功: プロジェクトリーダーに通知
   - 失敗: 自動修正を試行後、再度解析
