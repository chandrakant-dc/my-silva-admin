import SubCategoryProvider from "./context/SubCategoryProvider";
import SubCategory from "./SubCategory";


export default function SubCategoryIndex() {
    return (
        <>
            <SubCategoryProvider>
                <SubCategory />
            </SubCategoryProvider>
        </>
    )
}
