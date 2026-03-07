import SampleBlock from "./SampleBlock"


function SampleButtom({children}) {

    return (
        <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">{children}</button>
    )
}

export default SampleButtom