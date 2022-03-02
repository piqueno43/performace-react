export type AddProductToWishListProps = {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishList({ onAddToWishlist, onRequestClose }: AddProductToWishListProps) {
  return (
    <span>
      Deseja adicionar o produto a lista de desejos?
      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  )
}
