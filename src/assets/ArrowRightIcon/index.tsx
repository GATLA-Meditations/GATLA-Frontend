export interface ArrowRightIconProps {
    width: string;
    height: string;
}

const ArrowRightIcon = ({ width, height }: ArrowRightIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 14 11"
            fill="none"
        >
            <path
                d="M7.46154 1.5L13 5.5L7.46154 9.5M12.2308 5.5H1"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
export default ArrowRightIcon;
