import { useContext } from "react"
import { KhoaHocRenderContext } from "../Pages/Khoahocpage"
 const  useKhoaHocRender = () => {
    useContext(KhoaHocRenderContext)
    return useContext(KhoaHocRenderContext)
}

export default useKhoaHocRender