export interface IProduct {
    id: string;
    title: string;
    description: string;
    category: string;
}

export interface IProductFormValues extends Partial<IProduct> {
    time?: Date;
}

export class ProductFormValues implements IProductFormValues {
    id?: string = undefined;
    title: string = '';
    category: string = '';
    description: string = '';

    constructor(init?: IProductFormValues) {
        Object.assign(this, init);
    }
}