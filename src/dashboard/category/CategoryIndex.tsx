import Category from './Category'
import CategoryProvider from './context/CategoryProvider'

export default function CategoryIndex() {
    return (
        <>
            <CategoryProvider>
                <Category />
            </CategoryProvider>
        </>
    )
}
