document.addEventListener('DOMContentLoaded', function () {
    // 挿入したいulの取得
    const ul = document.getElementById('ul');
    // addボタン#add-btnの取得。
    const addBtn = document.getElementById('add-btn');
    // addボタンが押されたら，ToDoListをインスタンス化し処理を実行する。
    addBtn.addEventListener('click', function () {
        const todo = new ToDoList(ul);
    });
});

class ToDoList {
    constructor(ul) {
        this.ul = ul;
        const li = document.createElement('li');
        const check = document.createElement('div');
        const text = document.createElement('p');
        const button = document.createElement('button');
        this.li = li;
        this.check = check;
        this.text = text;
        this.delBtn = button;
        this._setAttr(this._getValue());
        this._addEl(this.ul);
        this._ListEvents();
    }
    _getValue() {
        // インプットエリア#form-textに入力されたテキストを取得する関数。
        this.formText = document.getElementById('form-text');
        // 取得したテキストを_setAttr();で使うため，returnで返す。
        return this.formText.value;
    }
    // 各要素に属性等を付ける関数。
    // 引数txtに_getValue()の結果を渡すことで，入力されたテキストを取得し代入出来る様に。
    _setAttr(txt) {
        this.li.classList.add('list');
        this.check.classList.add('list__check');
        this.text.classList.add('list__text');
        this.text.textContent = txt;
        this.delBtn.classList.add('list__delete');
        this.delBtn.type = 'button';
        this.delBtn.textContent = 'delete';
    }
    // HTMLを組み立て，ulに挿入する関数。
    // 最後にインプットエリアの中を空にする。
    _addEl(ul) {
        this.li.appendChild(this.check);
        this.li.appendChild(this.text);
        this.li.appendChild(this.delBtn);
        ul.appendChild(this.li);
        this.formText.value = '';
    }
    // deleteをclickされた時と，リスト右の丸をclickされた時の処理をまとめた関数。
    // deleteがclickされた時→押されたdeleteの親要素を削除。
    // 丸をclickされた時→classにdoneを追加し表示を変える。
    _ListEvents() {
        this.delBtn.addEventListener('click', function () {
            this.parentElement.remove();
        });
        this.check.addEventListener('click', function () {
            this.parentElement.classList.add('done');
        });
    }
}