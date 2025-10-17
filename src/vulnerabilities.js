/**
 * Simple calculator module
 */
class Vulnerabilities {

    // 🚨 意図的な脆弱性テスト用メソッド
    
    // 1. eval使用（コードインジェクション脆弱性）
    // evaluateExpression(expression) {
    //     return eval(expression); // eslint-plugin-security should detect this
    // }

    // // 2. 非リテラルな正規表現（ReDoS攻撃の可能性）
    // validateInput(userInput, pattern) {
    //     const regex = new RegExp(pattern); // Dynamic regex - security risk
    //     return regex.test(userInput);
    // }

    // // 3. ファイルシステム操作で動的パス（パストラバーサル攻撃）
    // readConfigFile(filename) {
    //     const fs = require('fs');
    //     return fs.readFileSync(filename, 'utf8'); // Non-literal filename
    // }

    // // 4. 子プロセス実行（コマンドインジェクション）
    // executeCommand(command) {
    //     const { exec } = require('child_process');
    //     return exec(command); // Potential command injection
    // }

    // // 5. オブジェクトインジェクション（より明確な例）
    // processUserData(userInput) {
    //     const obj = {};
    //     obj[userInput] = 'value'; // Potential object injection
    //     return obj[userInput];
    // }

    // // 6. 安全でないBuffer使用
    // createBuffer(size) {
    //     return new Buffer(size); // Deprecated and unsafe Buffer constructor
    // }

    // // 7. crypto.pseudoRandomBytes使用
    // generateWeakToken() {
    //     const crypto = require('crypto');
    //     return crypto.pseudoRandomBytes(16); // Weak random generation
    // }
}

module.exports = Vulnerabilities;