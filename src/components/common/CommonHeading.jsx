

const CustomHeading = ({ MyText = "", MyClass = "", }) => {
    return (
        <h2 className={`font-normal main-heading [text-shadow:_4px_4px_0_black] text-[52px] leading-[52px] text-white xl:!text-[80px] xl:leading-[80px] ${MyClass}`}>{MyText}</h2>
    )
}

export default CustomHeading
