import Card from '../components/Card/Card';

function Home({ searchValue, setSearchValue, onChangeSearchInput, items, onAddToCart, isLoading }) {

  const renderItems = () => {
    const filteredItems = items && items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    return ((isLoading ? [...Array(12)] : filteredItems).map((item, index) => (<Card key={index} onClickPlus={onAddToCart} loading={isLoading} {...item} />)));
  };

  return (
    <section className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : "Все кроссовки"}</h1>
        <div className="search d-flex">
          <img src="images/search.svg" alt="search" />
          {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="images/btn-remove.svg" alt="Clear"></img>}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
        </div>
      </div>
      <div className="d-flex cards flex-wrap">
        {renderItems()}
      </div>
    </section>
  );
};

export default Home;