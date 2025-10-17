import js from '@eslint/js';
import security from 'eslint-plugin-security';


// ESLintの設定ファイル

export default [
    js.configs.recommended,
    {
        ignores: ['node_modules/**'] // 無視するファイルやディレクトリを定義
    },
    {
        plugins: {
            security: security // セキュリティプラグインの追加
        },
        files: ['**/*.js'], // 適用するファイルパターン
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                console: 'readonly',
                module: 'readonly',
                require: 'readonly',
                process: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': 'error',
            'no-undef': 'error',
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
            
            // セキュリティルール
            'security/detect-unsafe-regex': 'error',
            'security/detect-buffer-noassert': 'error',
            'security/detect-child-process': 'error',
            'security/detect-disable-mustache-escape': 'error',
            'security/detect-eval-with-expression': 'error',
            'security/detect-no-csrf-before-method-override': 'error',
            'security/detect-non-literal-fs-filename': 'error',
            'security/detect-non-literal-regexp': 'error',
            'security/detect-non-literal-require': 'error',
            'security/detect-object-injection': 'error',
            'security/detect-possible-timing-attacks': 'error',
            'security/detect-pseudoRandomBytes': 'error',
            'security/detect-new-buffer': 'error'
        }
    }
];