import { getCategoryLabel } from '../data/products.js'

function ProductVisual({ product, compact = false }) {
  return (
    <div className={`product-visual product-visual-${product.category}${compact ? ' product-visual-compact' : ''}${product.image ? ' has-image' : ''}`}>
      {product.image ? (
        <img
          className="product-visual-image"
          src={product.image}
          alt={product.name}
          loading={compact ? 'lazy' : 'eager'}
          fetchPriority={compact ? 'auto' : 'high'}
          style={{ objectPosition: product.imagePosition ?? 'center' }}
        />
      ) : (
        <>
          <span className="product-visual-monogram" aria-hidden="true">CSP</span>
          <span className="product-visual-category">{getCategoryLabel(product.category)}</span>
          <span className="visually-hidden">Spazio riservato all’immagine di {product.name}</span>
        </>
      )}
    </div>
  )
}

export default ProductVisual
