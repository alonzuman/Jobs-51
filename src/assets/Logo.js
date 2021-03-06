import { useTheme } from "@mui/material";

const Logo = ({ height = 134, width = 279 }) => {
	const theme = useTheme();

	return (
		<svg
			style={{ direction: "ltr" }}
			width={width}
			height={height}
			viewBox='0 0 279 134'
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
		>
			<g
				id='Page-1'
				stroke='none'
				strokeWidth='1'
				fill='none'
				fillRule='evenodd'
			>
				<g id='Artboard'>
					<g id='Group' fill={theme.palette.primary.main}>
						<path
							d='M-2.84217094e-14,48.0243537 L-2.84217094e-14,0 L280.623261,0 L280.623261,74.9523883 L200.271116,74.9523883 C203.972298,67.2302758 205.822889,62.4494929 205.822889,60.6100396 C173.308798,66.1869745 143.734554,68.975442 117.100154,68.975442 L104.385924,88.2697665 L92.5768995,73.5686608 C92.6586093,58.0319993 83.3011228,48.5453031 64.50444,45.1085723 C36.3094159,39.9534761 38.429931,52.8589368 39.4828051,54.6412917 C30.2353314,48.0735033 17.0743964,45.8678573 -2.84217094e-14,48.0243537 Z'
							id='Path'
						></path>
						<path
							d='M2.13162821e-14,56.1467688 L2.13162821e-14,66.9782299 C9.01760721,68.4371915 19.9029756,69.1666723 32.6561051,69.1666723 C38.2315634,77.0846402 42.5173862,83.9342957 45.5135736,89.7156389 C52.2413359,87.0244985 54.2698045,82.9268856 51.5989793,77.4228003 C48.9281542,71.918715 31.7284944,64.8267045 2.13162821e-14,56.1467688 Z'
							id='Path-2'
						></path>
						<path
							d='M213.921616,135.216892 C239.041563,128.374331 261.275445,116.207246 280.623261,98.7156389 C280.335407,112.265713 280.335407,124.432798 280.623261,135.216892 L213.921616,135.216892 Z'
							id='Path-3'
						></path>
					</g>
					<text
						id='עמותת'
						fontFamily='Assistant-SemiBold, Assistant'
						fontSize='24'
						fontWeight='500'
						fill={theme.palette.text.primary}
					>
						<tspan x='110' y='129'>
							עמותת
						</tspan>
					</text>
					<text
						id='יוצאי-שלדג'
						fontFamily='Assistant-Regular, Assistant'
						fontSize='24'
						fontWeight='normal'
						fill={theme.palette.primary.main}
					>
						<tspan x='10' y='129'>
							יוצאי שלדג
						</tspan>
					</text>
				</g>
			</g>
		</svg>
	);
};

export default Logo;
