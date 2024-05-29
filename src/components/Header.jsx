const Header = () => {
  const generateItems = (count) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(
        <div className="item" key={i}>
          Todo App
        </div>
      );
    }
    return items;
  };

  const items = generateItems(1);
  return (
    <div id="container">
      {/* <h1>Todo App</h1> */}
      <div className="">{items}</div>
      <div className=""></div>
    </div>
  );
};

export default Header;
