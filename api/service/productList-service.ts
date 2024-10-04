import ProductCatalog from "../dtos/product-catalog-dto";

class ProductListService {
    private products: ProductCatalog[];

    constructor(products: ProductCatalog[] | ProductCatalog) {
        if (!Array.isArray(products)) {
            this.products = [products];
        } else {
            this.products = products;
        }
    }

    static removeNesting(data: any | any[]) {
        if (Array.isArray(data)) {
            return data.map(item => {
                const itemData = JSON.parse(JSON.stringify(item.item_id as any));
                return {
                    ...itemData,
                    _id: item._id,
                    category: item.category,
                };
            });
        } else {
            const itemData = JSON.parse(JSON.stringify(data.item_id as any));
            return {
                ...itemData,
                _id: data._id,
                category: data.category,
            };
        }
    }

    sortBy(sortValue: keyof ProductCatalog, sortDirection: 1 | -1) {
        this.products.sort((currentProduct: ProductCatalog, nextProduct: ProductCatalog) => {
            const currentField = currentProduct[sortValue];
            const nextField = nextProduct[sortValue];

            if (typeof currentField === 'number' && typeof nextField === 'number') {
                return (currentField - nextField) * sortDirection;
            }

            if (typeof currentField === 'string' && typeof nextField === 'string') {
                return currentField.localeCompare(nextField) * sortDirection;
            }

            return 0; 
        });
        return this;
    }

    slice(from: number, to: number) {
        this.products = this.products.slice(from, to);
        return this;
    }

    getProducts() {
        return this.products;
    }
}

export default ProductListService;
