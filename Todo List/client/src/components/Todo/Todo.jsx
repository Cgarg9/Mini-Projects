import "./Todo.css";
export function Todo({ todos }) {
  return (
    <div className="containerTodo">
      {todos.length === 0 ? (
        <div>
          <h2>Empty</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div class="cardCollection"  /* key={todo._id} Please in the response of the request that is saved in the state todo add an id to be used here as todo.id */>
            <div class="cardCollectionimg"></div>
            <div class="cardCollectiontextBox">
              <div class="cardCollectiontextContent">
                <p class="cardCollectionh1">{todo.task}</p>
                <span class="cardCollectionspan">
                  <label class="cardCollectioncheckbox-container">
                    <input
                      type="checkbox"
                      class="cardCollectioncustom-checkbox"
                    />
                    <span class="cardCollectioncheckmark"></span>
                  </label>
                </span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
