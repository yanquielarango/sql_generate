

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
    return (
        <footer className="flex justify-center  mt-10 text-gray-500 font-bold">
            <p className=" text-sm"> ©️ {year} AI SQL Generator - Built by Yanquiel Arango Gomez</p>
        </footer>
    )
}

export default Footer