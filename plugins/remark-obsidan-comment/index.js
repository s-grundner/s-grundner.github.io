import { findAndReplace } from 'mdast-util-find-and-replace';

export default function remarkObsidianComment() {
	return (tree) => {
		const regex = /%%(.*)%%$/g;
		findAndReplace(tree, [
			regex,
			(_, iconName) => {
				return {
					type: 'html',
					value: ""
				}
			}
		])
	}
}