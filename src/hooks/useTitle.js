import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Creative Canvas`;
    }, [title]);
}
export default useTitle;