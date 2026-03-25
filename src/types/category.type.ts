export interface AddCategoryModalProp {
    isOpen: boolean;
    onOpenChange: () => void
}

export interface CategoryInitI {
    category: string;
    id: string;
    image: File | string | null;
}