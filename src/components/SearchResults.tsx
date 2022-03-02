import { List, ListRowRenderer, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css';
import { ProductItem } from "./ProductItem"

type SearchResultsProps = {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({ results, totalPrice, onAddToWishlist }: SearchResultsProps) {

  const rowRenderer: ListRowRenderer = ({ key, index, style }: any) => {
    return (
      <div key={key} style={style}>
        <ProductItem
        product={results[index]}
        onAddToWishlist={onAddToWishlist}
      />
      </div>
    )    
  }
  
  if (!results.length) {
    return (
      <div>
        <p>No results found</p>
      </div>
    )
  }
  

  return (
    <div>
      <h2>{totalPrice}</h2>
      <AutoSizer>
        {({ height, width }) => (
          <List              
          height={height}    
          rowHeight={30}
          width={width}
          rowGetter={({ index }) => results[index]}
          overscanRowCount={5}
          headerHeight={20}
          rowCount={results.length}
          rowRenderer={rowRenderer}        
          />
        )}
      </AutoSizer>
      {/* {results.map(result => {
        return (
        <ProductItem 
          key={result.id}
          product={result}
          onAddToWishlist={onAddToWishlist}
         />
        );
      })} */}
    </div>
  )
}

