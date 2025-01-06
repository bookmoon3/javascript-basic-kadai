// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// btnというidを持つHTMl要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされた時にイベント処理を実行する
btn.addEventListener('click', () => {
    // textというidを持つHTML要素のテキストを「ボタンをクリックしました」に変更する
    text.textContent = 'ボタンをクリックしました';
});
