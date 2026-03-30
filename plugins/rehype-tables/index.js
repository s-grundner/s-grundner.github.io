import { visit } from 'unist-util-visit';

export default function rehypeWrapTables() {
	return (tree) => {
		visit(tree, 'element', (node, index, parent) => {
			if (!parent || index === null) return;

			if (node.tagName === 'table') {
				// Create wrapper div
				const wrapper = {
					type: 'element',
					tagName: 'div',
					properties: {
						className: ['overflow-x-auto w-full'],
					},
					children: [node],
				};

				// Replace table with wrapper
				parent.children[index] = wrapper;
			}
		});
	};
}