import Card from '../components/Card';

function Home() {
  return (
    <section className="content p-40">
    <div className="d-flex align-center mb-40 justify-between">
      <h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : "Все кроссовки"}</h1>
      <div className="search d-flex">
        <img src="/images/search.svg" alt="search" />
        {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="/images/btn-remove.svg" alt="Clear"></img>}
        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
      </div>
    </div>
    <div className="d-flex cards flex-wrap">
      {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(({ title, imgUrl, price }, index) => {
        return (
          <Card key={index} title={title} price={price} imgUrl={imgUrl} onClickPlus={onAddToCart} onFavorite={(obj) => onAddToFavorite(obj)} />
        )
      })}
    </div>
  </section>
  );
};

export default Home;