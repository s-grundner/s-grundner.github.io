import { findAndReplace } from 'mdast-util-find-and-replace';
import * as icons from 'lucide-static';

/**
 * Remark plugin to convert :LiIconName: to <IconName />
 * The Icons are Loaded Statically
 */

export default function remarkIconize() {
	return (tree) => {
		const regex = /:Li([a-zA-Z0-9]+):/g;
		findAndReplace(tree, [
			regex,
			(_, iconName) => {
				const svg = icons[iconName]
					.replace(/\n\s*/g, '')
					.replace('<svg', '<svg class="lucide-icon-svg"');
				
				if (!svg) return _;

				return {
					type: 'html',
					value: svg
				}
			}
		])
	}
}