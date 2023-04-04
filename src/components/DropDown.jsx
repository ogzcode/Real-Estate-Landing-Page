import DropDownContent from "./DropDownContent";

function DropDown() {
    const dropDrownData = [
        {
            mainLink: "Buy",
            contentLinks: ["Homes for sales", "Open houses", "All houses"]
        },
        {
            mainLink: "Rent",
            contentLinks: ["Rental buildings", "Houses for rent", "All rental listings", "All rental buildings"]
        },
        {
            mainLink: "Sell",
            contentLinks: ["Explore your options", "Home values", "Sellers guide"]
        },
        {
            mainLink: "Help",
            contentLinks: []
        }
    ];
    return (
        <div className='flex'>
            {
                dropDrownData.map((data, i) => (
                    <div className='dropdown mx-6 lg:mx-8 overflow-hidden text-slate-600' key={i}>
                        <a href='#' className='hover:text-red-500 text-lg'>{data.mainLink}</a>
                        {
                            data.contentLinks.length > 0 && <DropDownContent contentLinks={data.contentLinks} />
                        }

                    </div>
                ))
            }
        </div>
    );
}

export default DropDown;