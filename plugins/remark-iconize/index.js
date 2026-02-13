import { findAndReplace } from 'mdast-util-find-and-replace';

/**
 * Remark plugin to convert :LiIconName: to <IconName />
 */
export default function remarkIconize() {
	return (tree) => {
		const regex = /:Li([a-zA-Z0-9]+):/g;
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
