import { visit } from 'unist-util-visit';
import { findAndReplace } from 'mdast';

/**
 * Remark plugin to convert :LiIconName: to <IconName />
 */
export default function remarkIconize() {
	return (tree) => {
		visit(tree, 'text', (node, index, parent) => {
			const regex = /:Li([a-zA-Z0-9]+):/g;
			let match;
			const newNodes = [];
			let lastIndex = 0;

			while ((match = regex.exec(node.value)) !== null) {
				const [fullMatch, iconName] = match;
				const startIndex = match.index;

				// Add text before the match
				if (startIndex > lastIndex) {
					newNodes.push({
						type: 'text',
						value: node.value.slice(lastIndex, startIndex),
					});
				}

				// Add the icon component as an HTML node
				newNodes.push({
					type: 'html',
					value: `<${iconName} />`,
				});

				lastIndex = startIndex + fullMatch.length;
			}

			// If no matches, continue
			if (lastIndex === 0) {
				return;
			}

			// Add remaining text
			if (lastIndex < node.value.length) {
				newNodes.push({
					type: 'text',
					value: node.value.slice(lastIndex),
				});
			}

			// Replace the current node with new nodes
			parent.children.splice(index, 1, ...newNodes);

			// Skip the newly added nodes to avoid infinite loop if the visitor continues
			// The visitor usually continues at index + 1, but we replaced 1 node with N nodes.
			// We want to continue after the N nodes we just added.
			// Returning index + newNodes.length causes the visitor to skip these new nodes.
			return index + newNodes.length;
		});
	};
}
