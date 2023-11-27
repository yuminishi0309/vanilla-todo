const inputText = document.querySelector('#input-text');
const inputButton = document.querySelector('#input-button');
const list = document.querySelector('#list');

// addTask関数 3つの役割
// 1. 入力したタスクの追加
// 2. タスクに削除ボタンを付与
// 3. 削除ボタンにクリックイベントを付与
  const addTasks = (task) => {
  //↑引数taskを受け取る以下の内容の関数を作って、新規作成した変数addTasksに入れろ
    // 1.入力したタスクの追加----------------
      // ↓input空だったら処理を止める
    const value = inputText.value
    if (!value) return
    const listItem = document.createElement('li');
      // li要素を作って、新規作成したlistItemに入れろ
    const showItem = list.appendChild(listItem);
      // #listのulの子要素にlistItem(作ったli)を追加して、新規作成した変数showItemに入れろ
    showItem.innerHTML = task;
      // 入力したタスクを表示する

    // 2. タスクに削除ボタンを付与----------------
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    listItem.appendChild(deleteButton);

    // 3. 削除ボタンにクリックイベントを付与----------------
    deleteButton.addEventListener('click', (evt) => {
      evt.preventDefault();

      
    });
};

inputButton.addEventListener('click', (evt) =>{
  evt.preventDefault();
  const task = inputText.value;
  addTasks(task);
  inputText.value = '';
});