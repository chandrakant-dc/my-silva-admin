import ManageContentProvider from './context/ManageContentProvider'
import ManageContent from './ManageContent'

export default function ManageContentIndex() {
    return (
        <>
            <ManageContentProvider>
                <ManageContent />
            </ManageContentProvider>
        </>
    )
}
